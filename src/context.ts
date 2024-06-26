
import { environment } from "./environments/environment";

//with angular environment
    
// const contextPaths = {
//     appraisal: environment.apiUrl+"/keyassure/api/appraisal/1.0/appraisal",
//     configcodes: environment.apiUrl+"/keyassure/api/configcodes/1.0/configcodes",
//     inventory: environment.apiUrl+"/keyassure/api/inventoryvehicle/1.0/inventory",
//     offers:environment.apiUrl+ "/keyassure/api/offers/1.0/offers",
//     shipment: environment.apiUrl+"/keyassure/api/shipment/1.0/shipment",
//     tradeBuy: environment.apiUrl+"/keyassure/api/tradebuyvehicles/1.0/tradeBuy",
//     trainingportal: environment.apiUrl+"/keyassure/api/factorytraining/1.0/trainingportal",
//     userregistration: environment.apiUrl+"/keyassure/api/userregistration/1.0/user",
//     dealerregistration: environment.apiUrl+"/keyassure/api/dealerregistration/1.0/dealer"
// }

//for server

// const contextPaths = {
//     appraisal: "/keyassure/api/appraisal/1.0/appraisal",
//     configcodes: "/keyassure/api/configcodes/1.0/configcodes",
//     inventory: "/keyassure/api/inventoryvehicle/1.0/inventory",
//     offers:"/keyassure/api/offers/1.0/offers",
//     shipment: "/keyassure/api/shipment/1.0/shipment",
//     tradeBuy: "/keyassure/api/tradebuyvehicles/1.0/tradeBuy",
//     trainingportal: "/keyassure/api/factorytraining/1.0/trainingportal",
//     userregistration: "/keyassure/api/userregistration/1.0/user",
//     dealerregistration: "/keyassure/api/dealerregistration/1.0/dealer"
// }

//for local

// const contextPaths = {
//     appraisal: "https://services-test.keyassure.live/appraisal",
//     configcodes: "https://services-test.keyassure.live/configcodes",
//     inventory: "https://services-test.keyassure.live/inventory",
//     offers:"https://services-test.keyassure.live/offers",
//     shipment: "https://services-test.keyassure.live/shipment",
//     tradeBuy: "https://services-test.keyassure.live/tradeBuy",
//     trainingportal:"https://services-test.keyassure.live/trainingportal",
//     userregistration: "https://services-test.keyassure.live/user",
//     dealerregistration: "https://services-test.keyassure.live/dealer"
// }


// for ballarina

// const contextPaths = {
   
//     appraisal: "http://10.175.1.73:8080/appraisal",
//     configcodes: "http://10.175.1.73:8080/configcodes",
//     inventory: "http://10.175.1.73:8080/inventory",
//     searchfactory:"http://10.175.1.73:8080/searchFactory",
//     shipment: "http://10.175.1.73:8080/shipment",
//     userregistration: "http://10.175.1.73:8080/user",
//     dashboard:"http://10.175.1.73:8080/dash",
// }

//for choreo deployment
declare global {
    interface Window {
      configs: {
        apiUrlConfig: any;
        apiUrlInv: any;
        apiUrl: string;
        apiUrlShipment:any;
        apiUrlUser:any;
        apiUrlDashboard:any;
        apiUrlAppraisal:any;
        apiUrlSrchFtry:any;
      };
    }
  }
  
  export const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/choreo-apis/bigbillioncars/reading-list-service/books-rest-endpoint-d70/v1.0";

  const inv= window?.configs?.apiUrl ? window.configs.apiUrlInv :"/choreo-apis/bigbillioncars/ballerina/inventory-a4c/v1.0";
  const config= window?.configs?.apiUrl ? window.configs.apiUrlConfig :"/choreo-apis/bigbillioncars/ballerina/configcodes-631/v1.0";
  const shipment= window?.configs?.apiUrl ? window.configs.apiUrlShipment :"/choreo-apis/bigbillioncars/ballerina/shipment-ec9/v1.0";
  const user= window?.configs?.apiUrl ? window.configs.apiUrlUser :"/choreo-apis/bigbillioncars/ballerina/user-27c/v1.0";
  const appraisal= window?.configs?.apiUrl ? window.configs.apiUrlAppraisal :"/choreo-apis/bigbillioncars/ballerina/appraisal-a0e/v1.0";
  const dashboard= window?.configs?.apiUrl ? window.configs.apiUrlDashboard :"/choreo-apis/bigbillioncars/ballerina/dash-ecb/v1.0";
  const srchFtry= window?.configs?.apiUrl ? window.configs.apiUrlSrchFtry :"/choreo-apis/bigbillioncars/ballerina/searchfactory-008/v1.0";                                                                        

  
const contextPaths = {
   
    appraisal: `${appraisal}`,
    configcodes:`${config}`,
    inventory: `${inv}`,
    searchfactory: `${srchFtry}`,
    shipment: `${shipment}`,
    userregistration: `${user}`,
    dashboard:`${dashboard}`,
}


// const contextPaths="https://services-test.keyassure.live"
export default contextPaths;