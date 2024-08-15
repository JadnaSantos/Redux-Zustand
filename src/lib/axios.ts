import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const featchCourses: Promise<any> = api
  .get("/courses/1")
  .then((response) => response.data);
