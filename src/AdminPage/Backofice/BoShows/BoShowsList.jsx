import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";
import { Modal, Button, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import BoShowForm from "./BoShowForm";

const apiUrl = process.env.REACT_APP_API_URL;

function BoShowsList({ show, handleRefresh }) {
    const [modal, setModal] = useState(false);

    const handleDelete = async () => {
        await axios
            .delete(`${apiUrl}/shows/${show.uuid}`)
            .then(res => toast("succesfully deleted"))
            .catch(err => console.log("todo : handle error", err));
        handleRefresh();
    };

    // useEffect(() => handleRefresh(), [modal]);

    return (
        <>
            <tr>
                <td>{show.date}</td>
                <td>{show.time}</td>
                <td>{show.country} </td>
                <td>{show.city}</td>
                <td>{show.zipcode}</td>
                <td>{show.address}</td>
                <td>{show.description}</td>
                <td>{show.Price.name}</td>
                <td>
                    {show.image ? (
                        <img
                            src={show.image}
                            alt="show list"
                            style={{ height: "5%" }}
                        />
                    ) : (
                        <>N/A</>
                    )}
                </td>
                <td
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    <FontAwesomeIcon icon={faPencilAlt} />
                </td>
                <td onClick={() => handleDelete()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </td>
            </tr>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <BoShowForm
                        action={"edit"}
                        initialValues={show}
                        setModal={value => setModal(value)}
                        handleRefresh={() => handleRefresh()}
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

export default BoShowsList;
