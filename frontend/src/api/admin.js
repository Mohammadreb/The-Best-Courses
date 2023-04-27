import { catchError, getToken } from "../utils/helper";
import client from "./client";

// sending   HTTP request with the Bearer Token 
// Bearer Token is a cryptic string typically generated by the server 
// The client must send this Bearer Token in the Authorization header on every request it makes to obtain a protected resource

//......................................  Get App Info     .....................................................

export const getAppInfo = async () => {
  try {
    const token = getToken();
    const { data } = await client("/admin/app-info", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

//......................................  Get Most Rated Courses     .....................................................

export const getMostRatedCourses = async () => {
  try {
    const token = getToken();
    const { data } = await client("/admin/most-rated", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};