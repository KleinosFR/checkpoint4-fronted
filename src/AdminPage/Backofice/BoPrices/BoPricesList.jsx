import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";
import { Modal, Button, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import BoPriceForm from "./BoPriceForm";

const apiUrl = process.env.REACT_APP_API_URL;

function BoPricesList({ price, handleRefresh }) {
    const [modal, setModal] = useState(false);

    const handleDelete = async () => {
        await axios
            .delete(`${apiUrl}/prices/${price.uuid}`)
            .then(res => toast("succesfully deleted"))
            .catch(err => console.log("todo : handle error", err));
        handleRefresh();
    };

    // useEffect(() => handleRefresh(), [modal]);

    return (
        <>
            <tr key={price.uuid}>
                <td>{price.name}</td>
                <td>{price.adultPrice}</td>
                <td>{price.childPrice} </td>
                <td>{price.groupPrice}</td>
                <td>{price.schoolPrice}</td>
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
                    <BoPriceForm
                        action={"edit"}
                        initialValues={price}
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

export default BoPricesList;
