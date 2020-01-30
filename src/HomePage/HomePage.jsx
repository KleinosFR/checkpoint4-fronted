import React, { useEffect, useState } from "react";
import { Card, Row, CardText, CardHeader, CardImg } from "reactstrap";
import axios from "axios";

import Intro from "./Intro";
import NextShow from "./NextShow";
import ListOfNextShows from "./ListOfNextShows";

const apiUrl = process.env.REACT_APP_API_URL;

function HomePage() {
    const [nextShowInfo, setNextShowInfo] = useState({});
    const [allNextShows, setAllNextShows] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/shows`).then(res => {
            const allShows = res.data;
            let today = new Date(Date.now());
            today = Date.parse(today);
            const nextOne = allShows.find(show => {
                const parsedShowDate = Date.parse(`${show.date} ${show.time}`);
                return parsedShowDate >= today;
            });
            const listNextShows = allShows.filter(show => {
                const parsedShowDate = Date.parse(`${show.date} ${show.time}`);
                return parsedShowDate >= today;
            });
            setNextShowInfo(nextOne);
            setAllNextShows(listNextShows);
            console.log(listNextShows);
        });
    }, []);

    return (
        <>
            <Row>
                <Intro />
            </Row>
            <Row>
                {nextShowInfo ? (
                    <NextShow nextShowInfo={nextShowInfo} />
                ) : (
                    <Card>
                        <CardHeader>
                            Come back soon to see our next shows
                        </CardHeader>
                        <CardImg src="" />
                    </Card>
                )}
            </Row>
            <Row>
                <ListOfNextShows shows={allNextShows} />
            </Row>
        </>
    );
}

export default HomePage;
