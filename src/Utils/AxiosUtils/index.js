import axios from "axios";
import getCookie from "../CustomFunctions/GetCookie";

//create an Axios instance with baseURL and header.
const client = axios.create({
  baseURL: process.env.API_PROD_URL,
  headers: {
    Accept: "application/json",
  },
});

const request = async ({ ...options }, router) => {
  //set bearer token in header for authentication.
  client.defaults.headers.common.Authorization = `Bearer ${getCookie("uat")}`;

  //decalre the onSuccess and onError functions.
  //function to handle success. just return the data on success.
  const onSuccess = (response) => response;

  //Function to handle errors thrown by Axios. If error status is 403, redirect user to page 403. Else, redirect user to page 404. 
  const onError = (error) => {
    if (error?.response?.status == 403) {
      router && router.push("/403")
    }
    router && router.push('/404')
    console.log("error axios-utils", error?.response?.status);
    return error;
  };

  //Call the created axios instance with options and pass onSuccess and onError functions.
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
