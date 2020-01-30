import React, { useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function NextShow() {
    useEffect(() => {
        axios.get(`${apiUrl}/shows`).then(res => {
            const allShows = res.data;
            let today = new Date(Date.now());
            today = Date.parse(today);

            const nextOne = allShows.find(show => {
                const parsedShowDate = Date.parse(`${show.date} ${show.time}`);
                return parsedShowDate >= today;
            });
            console.log(nextOne);
        });
    }, []);

    return <div>Toto</div>;
}

export default NextShow;
