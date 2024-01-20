import { FetchUsers, FilteredFetch } from "./FetchUsers.js";
import { createTable, tableHeader } from "./components.js";

let filteredResult = [];
export const url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", async () => {
  const selectInput = document.getElementById("selectInput");
  const textInput = document.getElementById("textInput");
  let textValue = "";

  const array = await FetchUsers(url);
  createTable(array);

  selectInput.addEventListener("change", async () => {
    const selectValue = selectInput.value;
    filteredResult = await FilteredFetch(url, selectValue, textValue);
    tableHeader();
    createTable(filteredResult);
  });

  textInput.addEventListener("change", () => {
    textValue = textInput.value;
  });
});