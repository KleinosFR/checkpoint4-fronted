import React, { useState } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

import introPic from "../Assets/Images/title-background.jpg";

const item = {
    src: introPic,
    altText: "inside the circus"
};

function Intro() {
    return (
        <div>
            <Card inverse style={{ height: "60vh" }}>
                <CardImg
                    src={item.src}
                    alt={item.altText}
                    style={{
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
                <CardImgOverlay>
                    <CardText
                        className="text-center m-5 font-weight-bold"
                        style={{
                            fontFamily: "Amatic SC",
                            fontSize: "4em",
                            color: "yellow",
                            textShadow: "black 2px 2px"
                        }}
                    >
                        Welcome to
                    </CardText>
                    <CardText
                        className="text-center m-5 font-weight-bold"
                        style={{
                            fontFamily: "Amatic SC",
                            fontSize: "6em",
                            color: "yellow",
                            textShadow: "black 2px 2px"
                        }}
                    >
                        the Wild Circus
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default Intro;
