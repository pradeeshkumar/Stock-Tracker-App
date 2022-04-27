import React from "react";
import { useMsal } from "@azure/msal-react";
import { logoutRequest } from "../authConfig";
import Button from "react-bootstrap/Button";


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
        <Button variant="secondary" className="mr-auto" onClick={() => signOutClickHandler(instance)}>Sign Out</Button>
    );
}