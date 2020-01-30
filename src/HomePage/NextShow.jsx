import React from "react";
import {
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardImgOverlay,
    Col
} from "reactstrap";

import defaultImage from "../Assets/Images/about2.jpg";

function NextShow({ nextShowInfo }) {
    return (
        <Col
            className="my-xl-3 mx-0"
            style={{ maxHeight: "45vh", width: "100%" }}
        >
            <Card inverse>
                <CardImg
                    src={nextShowInfo.image ? nextShowInfo.image : defaultImage}
                    alt="new show"
                    style={{
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
                <CardImgOverlay className="p-lg-5">
                    <CardTitle
                        className="text-center m-s-0 p-0 h3"
                        style={{
                            color: "pink",
                            textShadow: "black 2px 2px"
                        }}
                    >
                        Don't wait and come to see our next show in{" "}
                        {nextShowInfo.city}, {nextShowInfo.country}
                    </CardTitle>
                    <CardText
                        className="text-center h5"
                        style={{
                            color: "yellow",
                            textShadow: "black 2px 2px"
                        }}
                    >
                        Our next show will take place at {nextShowInfo.address}{" "}
                        {nextShowInfo.zipcode} {nextShowInfo.city}
                    </CardText>
                    <CardText
                        className="text-center h5"
                        style={{
                            color: "yellow",
                            textShadow: "black 2px 2px"
                        }}
                    >
                        Save the date on {nextShowInfo.date} at{" "}
                        {nextShowInfo.time}{" "}
                    </CardText>
                </CardImgOverlay>
            </Card>
        </Col>
    );
}

export default NextShow;
