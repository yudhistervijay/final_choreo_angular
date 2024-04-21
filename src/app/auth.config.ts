import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    clientId: 'scUl4btnf6Wujm3pdiJgGWwV8IEa',
    responseType: 'code',
    redirectUri: 'https://dc22e466-8476-4fbb-b9a1-aac39c2de156.e1-us-cdp-2.choreoapps.dev/dashboard',
   //redirectUri:'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/orgenox1/oidc/logout',
    postLogoutRedirectUri: 'https://dc22e466-8476-4fbb-b9a1-aac39c2de156.e1-us-cdp-2.choreoapps.dev/dashboard',
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
