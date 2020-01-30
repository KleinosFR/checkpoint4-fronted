import React, { useState, useEffect } from "react";
import { Form, Input, Button, Media } from "reactstrap";
import axios from "axios";

const apiUrl = "http://localhost:8000";

function ImageUpload({ setImageUrl, initialImage }) {
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

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
        setPreviewImage(null);
        setImage(null);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", image);

        axios
            .post(`${apiUrl}/mediaobject`, formData)
            .then(res => console.log(res));
    };

    return (
        <Form>
            <Media left>
                <Media
                    object
                    src={previewImage}
                    alt="Generic placeholder image"
                />
            </Media>
            <Input type="file" onChange={e => handleChange(e)} />
            <Button onClick={() => handleUpload()}>Envoyer</Button>
            <Button onClick={() => resetImage()}>Effacer l'image</Button>
        </Form>
    );
}

export default ImageUpload;
