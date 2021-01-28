import React from 'react'
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

import {
    Link
  } from "react-router-dom"; 
function NavbarHeader() {
    return (
        <HeaderWarp>
            <Navbar expand="md">
                <NavbarBrand className="font-root-title">reactstrap</NavbarBrand>
                <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink ><Link to="/product">Product</Link></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink >GitHub</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </HeaderWarp>
    )
}

export default NavbarHeader
const HeaderWarp = styled.div`
    background:var(--mainBlue);
    color:var(--mainWhite);
    position:absolute;
    top:0;
    width: 100%;
    position: fixed;
    z-index:9;
`