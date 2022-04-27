import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import {Container , Row, Col} from 'react-bootstrap';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <>
           { isAuthenticated ? 
            <div className="container-fluid">  
                <Container>
                <SignOutButton />
                <Row>                      
                    <Col>{props.children}</Col>
                </Row> 
                </Container>
            </div>  
            :
            <div className="container-fluid"> 
                <Container>
                <Row className="justify-content-center"> 
                    <SignInButton /> 
                </Row>
                </Container>
            </div> 
            }
        </>
    );
};