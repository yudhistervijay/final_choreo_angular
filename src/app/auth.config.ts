import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    clientId: 'cMiX7ul5LdNI8CNVEeNqFMcFpvEa',
    responseType: 'code',
    redirectUri: 'https://0429ca28-f68d-4536-98e6-497f85bb47b1.e1-us-cdp-2.choreoapps.dev/dashboard',
   //redirectUri:'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/orgenox1/oidc/logout',
    postLogoutRedirectUri: 'https://0429ca28-f68d-4536-98e6-497f85bb47b1.e1-us-cdp-2.choreoapps.dev/dashboard',
    scope: 'openid profile internal_user_mgt_view', 
    useSilentRefresh: false,
    silentRefreshTimeout: 50000000,
    timeoutFactor: 0.25, 
    sessionChecksEnabled: true,
    showDebugInformation: true,
    clearHashAfterLogin: true,
    nonceStateSeparator : 'semicolon',
    strictDiscoveryDocumentValidation:false,
  
   };
   