import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
           { isAuthenticated ? 
            <div>
                <a className="navbar-brand" href="/">STA Login</a>
                <SignInButton /> 
            </div>
           :
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Logout</a>                
            </Navbar>
           }
        
            {props.children}
        </>
    );
};