import React, { useEffect, useState } from "react";
import axios from "axios";
import BoShowsList from "./BoShowsList";
import {
    Table,
    Modal,
    Button,
    ModalFooter,
    ModalBody,
    ModalHeader
} from "reactstrap";

import BoShowForm from "./BoShowForm";

const apiUrl = process.env.REACT_APP_API_URL;

function BoShows() {
    const [allShows, setAllShows] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios
            .get(`${apiUrl}/shows`)
            .then(res => setAllShows(res.data))
            .catch(err => console.log("todo : manage errors", err));
    }, [refresh, modal]);

    return (
        <>
            <Button onClick={() => setModal(!modal)}>Create</Button>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>ZipCode</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Picture</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allShows.map(show => (
                        <BoShowsList show={show} setRefresh={setRefresh} />
                    ))}
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <BoShowForm
                        action={"create"}
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

export default BoShows;
