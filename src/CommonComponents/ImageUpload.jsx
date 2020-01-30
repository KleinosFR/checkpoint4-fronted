import React, { useState, useEffect } from "react";
import { Form, Input, Button, Media, Row } from "reactstrap";
import axios from "axios";

const apiUrl = "http://localhost:8000";

function ImageUpload({ setImageUrl, initialImage }) {
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(initialImage);

    useEffect(() => {
        if (image) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(image);
        }
    }, [image]);

    const handleChange = e => {
        setImage(e.target.files[0]);
    };

    const resetImage = () => {
        setPreviewImage(initialImage);
        setImage(null);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", image);

        axios.post(`${apiUrl}/mediaobject`, formData).then(res => {
            console.log(res);
            const imageUrl = `${apiUrl}/media/${res.data.filename}`;
            console.log(imageUrl);
            setImageUrl(imageUrl);
        });
    };

    return (
        <Form>
            <Row>
                {(initialImage || previewImage) && (
                    <Media left>
                        <Media
                            object
                            src={previewImage ? previewImage : initialImage}
                            alt="Generic placeholder image"
                            style={{ width: "100%" }}
                        />
                    </Media>
                )}
            </Row>
            <Input type="file" onChange={e => handleChange(e)} />
            <Button onClick={() => handleUpload()}>Envoyer</Button>
            <Button onClick={() => resetImage()}>Effacer l'image</Button>
        </Form>
    );
}

export default ImageUpload;
