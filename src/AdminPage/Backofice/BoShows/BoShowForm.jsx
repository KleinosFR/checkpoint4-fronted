import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import ImageUpload from "../../../CommonComponents/ImageUpload";
import Axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL;

function BoShowForm({ action, initialValues, setModal, handleRefresh }) {
    const [payload, setPayload] = useState({});
    const [priceList, setPriceList] = useState([]);

    useEffect(() => {
        try {
            Axios.get(`${apiUrl}/prices`)
                .then(res => {
                    const fetchedPrices = res.data;
                    setPriceList(fetchedPrices);
                    if (action === "edit") {
                        setPayload({ ...initialValues });
                    } else {
                        fetchedPrices &&
                            setPayload({ PriceUuid: fetchedPrices[0].uuid });
                    }
                })
                .catch(err => toast("error"));
        } finally {
        }
    }, []);

    const handleSubmit = async () => {
        if (action === "edit") {
            await Axios.put(`${apiUrl}/shows/${payload.uuid}`, payload)
                .then(res => console.log(res.data))
                .catch(err => console.log("error"));
        } else if (action === "create") {
            await Axios.post(`${apiUrl}/shows/`, payload)
                .then(res => console.log(res.data))
                .catch(err => console.log("error"));
        }
        console.log("refresh");
        setModal(false);
        handleRefresh();
    };

    return (
        <form style={{ width: "100%" }}>
            <ImageUpload
                setImageUrl={url => setPayload({ ...payload, image: url })}
                initialImage={payload.image}
            />
            <Input
                type="date"
                value={payload.date}
                onChange={e => setPayload({ ...payload, date: e.target.value })}
                placeholder="date"
            />
            <Input
                type="time"
                value={payload.time}
                onChange={e => setPayload({ ...payload, time: e.target.value })}
                placeholder="time"
            />
            <Input
                type="text"
                value={payload.country}
                onChange={e =>
                    setPayload({ ...payload, country: e.target.value })
                }
                placeholder="country"
            />
            <Input
                type="text"
                value={payload.city}
                onChange={e => setPayload({ ...payload, city: e.target.value })}
                placeholder="city"
            />
            <Input
                type="number"
                value={payload.zipcode}
                onChange={e =>
                    setPayload({ ...payload, zipcode: e.target.value })
                }
                placeholder="ZipCode"
            />
            <Input
                type="text"
                value={payload.address}
                onChange={e =>
                    setPayload({ ...payload, address: e.target.value })
                }
                placeholder="Adress"
            />
            <Input
                type="text"
                value={payload.description}
                onChange={e =>
                    setPayload({ ...payload, description: e.target.value })
                }
                placeholder="Description"
            />
            <Input
                type="select"
                name="select"
                id="exampleSelect"
                onClick={e =>
                    setPayload({ ...payload, PriceUuid: e.target.value })
                }
            >
                {priceList &&
                    priceList.map(price => (
                        <option value={price.uuid}>{price.name}</option>
                    ))}
            </Input>
            <Button color="success" onClick={() => handleSubmit()}>
                Confirmer
            </Button>
        </form>
    );
}

export default BoShowForm;
