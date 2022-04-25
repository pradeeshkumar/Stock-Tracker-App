export const msalConfig = {
    auth: {
      clientId: "cddbc001-049f-483d-b61e-350bf6c83314",
      authority: "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
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