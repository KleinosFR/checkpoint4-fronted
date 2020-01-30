import React, { useState } from "react";
import {
    ListGroupItem,
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Card,
    CardText,
    CardImg,
    Col,
    Row
} from "reactstrap";

function Show({ show }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <ListGroupItem onClick={toggle}>
            <ListGroupItemHeading>
                On {show.date} at {show.time} - {show.city}
                {", "}
                {show.country}
            </ListGroupItemHeading>
            <ListGroupItemText>
                <Row>
                    <Col xl={"8"}>
                        Address : {show.address} {show.zipcode} {show.city}
                        <ListGroupItemText>
                            {show.description}
                        </ListGroupItemText>
                    </Col>
                    <Col xl={"4"} className="text-right">
                        Click for more info
                    </Col>
                </Row>
            </ListGroupItemText>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    On {show.date} at {show.time} - {show.city}
                    {", "}
                    {show.country}
                </ModalHeader>
                <ModalBody>
                    <Col className="w-100">
                        <Card className="w-100">
                            <CardImg src={show.image} />
                            <CardText>{show.description}</CardText>
                            <CardText>
                                <ListGroup className="w-100 mx-5">
                                    <ListGroupItemHeading>
                                        Prices : {show.Price.name}
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Adult : {show.Price.adultPrice} €
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                        Child : {show.Price.childPrice} €
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                        Group : {show.Price.groupPrice} €
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                        Schools : {show.Price.schoolPrice} €
                                    </ListGroupItemText>
                                </ListGroup>
                            </CardText>
                        </Card>
                    </Col>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </ListGroupItem>
    );
}

export default Show;
