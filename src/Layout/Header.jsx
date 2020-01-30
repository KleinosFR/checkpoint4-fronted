import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from "reactstrap";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "Acts", path: "/acts" },
    { name: "Gallery", path: "/gallery" },
    { name: "Prices", path: "/prices" }
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const history = useHistory();

    return (
        <>
            <Navbar
                color="danger"
                light
                expand="md"
                style={{
                    fontWeight: "bold",
                    fontSize: "50px"
                }}
            >
                <NavbarBrand
                    style={{
                        fontFamily: "Amatic SC",
                        fontSize: "0.75em"
                    }}
                >
                    <span style={{ color: "yellow" }}>W</span>ild{" "}
                    <span style={{ color: "yellow" }}>C</span>
                    ircus
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {menuItems.map(item => (
                            <NavItem
                                onClick={() => history.push(item.path)}
                                style={{ cursor: "pointer" }}
                                color="secondary"
                            >
                                <NavLink
                                    active
                                    style={{
                                        fontFamily: "Amatic SC",
                                        fontWeight: "bold",
                                        fontSize: "0.5em",
                                        color: "white",
                                        textShadow: "black 2px 2px"
                                    }}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <Button color="secondary">Admin</Button>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header;
