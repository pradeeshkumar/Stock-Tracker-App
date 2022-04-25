export const msalConfig = {
    auth: {
      clientId: "63216814-8e72-4d06-8e72-a9d35f5e633b",
      authority: "https://login.microsoftonline.com/f5ed7255-38c4-4862-966f-ad4a32cc989d", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://dainty-licorice-4d88aa.netlify.app",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/User.Read"
  };