import React from "react";
import { Container } from "reactstrap";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
