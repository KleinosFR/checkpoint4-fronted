import React from "react";
import BoShows from "./BoShows/BoShows";
import BoPrices from "./BoPrices/BoPrices";

function BoListsRouter({ navTab }) {
    switch (navTab) {
        case "shows":
            return <BoShows />;
        case "prices":
            return <BoPrices />;
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
