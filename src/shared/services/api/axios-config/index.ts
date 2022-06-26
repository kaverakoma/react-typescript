import axios from "axios";
import {Environment} from "../../../../environment/index"
import { reponseInterceptor, errorInterceptor } from "./interseptors";

const ApiRota = axios.create({
  baseURL: Environment.URL_BASE,
});

ApiRota.interceptors.response.use(
  (response) => reponseInterceptor(response),
  (error) => errorInterceptor(error)
);

export {ApiRota}