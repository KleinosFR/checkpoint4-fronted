import React from "react";
import { Row } from "reactstrap";

import Intro from "./Intro";
import NextShow from "./NextShow";

function HomePage() {
    return (
        <>
            <Row>
                <Intro />
            </Row>
            <Row>
                <NextShow />
            </Row>
        </>
    );
}

export default HomePage;
