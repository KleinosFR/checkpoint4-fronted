import React, { useState } from "react";
import {
    ListGroupItem,
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Card,
    CardText,
    CardImg,
    Col
} from "reactstrap";
import Show from "./Show";

function ListOfNextShows({ shows }) {
    return (
        <Row className="w-100 mx-0">
            <ListGroup className="w-100 mx-3">
                {shows.map(show => (
                    <>
                        <Show show={show} />
                    </>
                ))}
            </ListGroup>
        </Row>
    );
}

export default ListOfNextShows;
