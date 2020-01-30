import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ActsPage from "./ActsPage/ActsPage";
import GalleryPage from "./GalleryPage/GalleryPage";
import PricesPage from "./PricesPage/PricesPage";
import Layout from "./Layout/Layout";
import AdminPage from "./AdminPage/AdminPage";

function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/acts" component={ActsPage} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/prices" component={PricesPage} />
                    <Route path="/admin" component={AdminPage} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;
