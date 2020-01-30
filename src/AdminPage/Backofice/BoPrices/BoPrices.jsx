import React, { useEffect, useState } from "react";
import axios from "axios";
import BoPricesList from "./BoPricesList";
import {
    Table,
    Modal,
    Button,
    ModalFooter,
    ModalBody,
    ModalHeader
} from "reactstrap";

import BoPriceForm from "./BoPriceForm";

const apiUrl = process.env.REACT_APP_API_URL;

function BoPrices() {
    const [allPrices, setAllPrices] = useState([]);
    const [refresh, setRefresh] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        handleRefresh();
    }, []);

    const handleRefresh = async () => {
        console.log("main refresh");

        await axios
            .get(`${apiUrl}/prices`)
            .then(res => setAllPrices(res.data))
            .catch(err => console.log("todo : manage errors", err));
        setRefresh(Date.now());
    };

    return (
        <>
            <Button onClick={() => setModal(!modal)}>Create</Button>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Adults</th>
                        <th>Child</th>
                        <th>Group</th>
                        <th>School</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allPrices.map(price => (
                        <BoPricesList
                            price={price}
                            handleRefresh={() => handleRefresh()}
                        />
                    ))}
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <BoPriceForm
                        action={"create"}
                        handleRefresh={() => handleRefresh()}
                        setModal={value => setModal(value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setModal(!modal)}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default BoPrices;
