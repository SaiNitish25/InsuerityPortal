export const ApiRoutes =
{
    LoginRoute:
    //"https://localhost:44365/api/Auth/Login",
    "https://authorizationmicroservicepas.azurewebsites.net/api/Auth/Login",

    CreateCustomerBusiness:
    //"https://localhost:44312/api/Consumer/CreateConsumerBusiness",
    "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/CreateConsumerBusiness",
    UpdateCustomerBusiness:
    //"https://localhost:44312/api/Consumer/UpdateConsumerBusiness",
    "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/UpdateConsumerBusiness",
    CreateBusinessProperty:
    //"https://localhost:44312/api/Consumer/CreateBusinessProperty",
    "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/CreateBusinessProperty",
    UpdateBusinessProperty:
   //"https://localhost:44312/api/Consumer/UpdateBusinessProperty",
   "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/UpdateBusinessProperty",
    GetCustomerBusiness:
    //"https://localhost:44312/api/Consumer/viewConsumerBusiness",
    "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/viewConsumerBusiness",
    GetBusinessProperty: //"https://localhost:44312/api/Consumer/viewConsumerProperty", 
    "https://pasconsumermicroservice.azurewebsites.net/api/Consumer/viewConsumerProperty",

    //GetPolicyMaster: "",
    GetQuotes: 
    "https://localhost:44305/api/Policy/GetQuotes?businessValue=8&propertyValue=8",
    CreatePolicy: 
    "https://paspolicymicroservice.azurewebsites.net/api/Policy/createPolicy",
    IssuePolicy:
    "https://paspolicymicroservice.azurewebsites.net/api/Policy/issuePolicy",
    GetPolicy:
    "https://paspolicymicroservice.azurewebsites.net/api/Policy/viewPolicy"
}
