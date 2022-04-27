import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
            <div className="text-center">
                <div  className="mt-5 mb-2 pt-5 pb-2">Sign In to StockTrackerApp</div>
                <Button variant="secondary" className="mr-auto w-25" onClick={() => handleLogin(instance)}>Sign in</Button>
            </div>
    );
}