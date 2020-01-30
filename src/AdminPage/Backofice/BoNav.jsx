import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function BoNav({ setNavTab }) {
    return (
        <Nav tabs style={{ cursor: "pointer" }}>
            <NavItem>
                <NavLink onClick={() => setNavTab("shows")}>See Shows</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => setNavTab("prices")}>
                    See Prices
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => setNavTab("artists")}>
                    See Artist
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => setNavTab("acts")}>See Acts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => setNavTab("gallery")}>
                    See Gallery
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default BoNav;
