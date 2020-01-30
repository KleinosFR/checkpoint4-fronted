import React from "react";
import { ListGroup, Row } from "reactstrap";
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
