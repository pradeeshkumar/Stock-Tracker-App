import React from "react";
import { useMsal } from "@azure/msal-react";
import { logoutRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";



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
        <Navbar className="bg-primary mb-5">
            <Button variant="secondary" className="mr-auto" onClick={() => signOutClickHandler(instance)}>Sign Out</Button>
        </Navbar>
    );
}