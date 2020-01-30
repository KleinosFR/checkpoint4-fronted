import React from "react";
import { Card, CardText, CardImg, CardImgOverlay, Col } from "reactstrap";

import introPic from "../Assets/Images/title-background.jpg";

const item = {
    src: introPic,
    altText: "inside the circus"
};

function Intro() {
    return (
        <div>
            <Card inverse style={{ height: "25vh" }} className="m-3">
                <CardImg
                    src={item.src}
                    alt={item.altText}
                    style={{
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
                <CardImgOverlay>
                    <Col>
                        <CardText className="text-center font-weight-bold">
                            <h2
                                className="text-center font-weight-bold"
                                style={{
                                    fontFamily: "Amatic SC",
                                    color: "yellow",
                                    textShadow: "black 2px 2px",
                                    fontSize: "35px"
                                }}
                            >
                                Welcome to
                            </h2>
                        </CardText>
                        <CardText className="text-center font-weight-bold col-12 m-0">
                            <h1
                                className="text-center font-weight-bold"
                                style={{
                                    fontFamily: "Amatic SC",
                                    color: "yellow",
                                    textShadow: "black 2px 2px",
                                    fontSize: "45px"
                                }}
                            >
                                the Wild Circus
                            </h1>
                        </CardText>
                    </Col>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default Intro;
