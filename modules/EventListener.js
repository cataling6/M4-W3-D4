import { filteredFetch } from "./FetchUsers.js";
import { tableReset, spinnerOnOff, createTable } from "./Components.js";
import { url } from "../main.js";

const historicQuery = localStorage.getItem("query");
let query = historicQuery ? historicQuery : "";
let selectValue = "";
let textValue = "";
let filteredResult = [];

export const selectInputListener = async (event) => {
  selectValue = event.target.value;
  textValue = query;

  filteredResult = await filteredFetch(url, selectValue, textValue);
  tableReset();
  spinnerOnOff();
  setTimeout(async () => {
    createTable(filteredResult);
  }, 2000);
};

export const textInputListener = async (event) => {
  query = event.target.value;
  localStorage.setItem("query", query);
  textValue = query;

  filteredResult = await filteredFetch(url, selectValue, textValue);

  tableReset();
  spinnerOnOff();
  setTimeout(async () => {
    createTable(filteredResult);
  }, 2000);
};
