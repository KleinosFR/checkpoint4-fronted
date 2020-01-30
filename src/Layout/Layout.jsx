import React from "react";
import { Container } from "reactstrap";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <Container fluid>{children}</Container>
        </>
    );
}

export default Layout;
