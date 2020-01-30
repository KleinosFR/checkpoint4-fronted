import React from "react";
import BoShows from "./BoShows/BoShows";

function BoListsRouter({ navTab }) {
    switch (navTab) {
        case "shows":
            return <BoShows />;
        case "prices":
            return <div>prices</div>;
        case "artists":
            return <div>artists</div>;
        case "acts":
            return <div>acts</div>;
        case "gallery":
            return <div>gallery</div>;
        default:
            return <BoShows />;
            break;
    }
}

export default BoListsRouter;
