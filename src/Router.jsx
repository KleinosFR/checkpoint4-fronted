import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ActsPage from "./ActsPage/ActsPage";
import GalleryPage from "./GalleryPage/GalleryPage";
import PricesPage from "./PricesPage/PricesPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/acts" component={ActsPage} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/prices" component={PricesPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
