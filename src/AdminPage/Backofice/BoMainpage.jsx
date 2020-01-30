import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import BoNav from "./BoNav";
import BoListsRouter from "./BoListsRouter";

function BoMainpage() {
    const [navTab, setNavTab] = useState("shows");

    return (
        <Row>
            <Col xs={12}>
                <BoNav setNavTab={tab => setNavTab(tab)} />
            </Col>
            <Col>
                <BoListsRouter navTab={navTab} />
            </Col>
        </Row>
    );
}

export default BoMainpage;
