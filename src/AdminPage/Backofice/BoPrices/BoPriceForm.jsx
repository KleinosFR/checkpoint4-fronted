import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import ImageUpload from "../../../CommonComponents/ImageUpload";
import Axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL;

function BoPriceForm({ action, initialValues, setModal, handleRefresh }) {
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
            await Axios.put(`${apiUrl}/prices/${payload.uuid}`, payload)
                .then(res => console.log(res.data))
                .catch(err => console.log("error"));
        } else if (action === "create") {
            await Axios.post(`${apiUrl}/prices/`, payload)
                .then(res => console.log(res.data))
                .catch(err => console.log("error"));
        }
        console.log("refresh");
        setModal(false);
        handleRefresh();
    };

    return (
        <form style={{ width: "100%" }}>
            <Input
                type="text"
                value={payload.name}
                onChange={e => setPayload({ ...payload, name: e.target.value })}
                placeholder="name"
            />
            <Input
                type="number"
                value={payload.adultPrice}
                onChange={e =>
                    setPayload({ ...payload, adultPrice: e.target.value })
                }
                placeholder="Adult"
            />
            <Input
                type="number"
                value={payload.childPrice}
                onChange={e =>
                    setPayload({ ...payload, childPrice: e.target.value })
                }
                placeholder="Child"
                aria-label="Child"
            />{" "}
            <Input
                type="number"
                value={payload.groupPrice}
                onChange={e =>
                    setPayload({ ...payload, groupPrice: e.target.value })
                }
                placeholder="Group"
            />
            <Input
                type="number"
                value={payload.schoolPrice}
                onChange={e =>
                    setPayload({ ...payload, schoolPrice: e.target.value })
                }
                placeholder="School"
            />
            <Button color="success" onClick={() => handleSubmit()}>
                Confirmer
            </Button>
        </form>
    );
}

export default BoPriceForm;
