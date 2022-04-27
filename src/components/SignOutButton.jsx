import React from "react";
import { useMsal } from "@azure/msal-react";
import { logoutRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import {Container} from 'react-bootstrap';




function signOutClickHandler(instance) {
    instance.logoutPopup(logoutRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">STA</Navbar.Brand>
                <Button variant="secondary" className="float-end" onClick={() => signOutClickHandler(instance)}>Sign Out</Button>
            </Container>
        </Navbar>
    );
}