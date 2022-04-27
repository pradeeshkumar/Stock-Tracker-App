import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
           { isAuthenticated ? 
            <div>
                <div>STA Login</div>
                <SignInButton /> 
            </div>
           :
            <Navbar bg="primary" variant="dark">
                <SignOutButton />               
            </Navbar>
           }
        
            {props.children}
        </>
    );
};