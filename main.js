import { FetchUsers, FilteredFetch } from "./FetchUsers.js";
import { createTable, tableHeader, tableReset, spinnerOnOff } from "./components.js";

let filteredResult = [];
export const url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", async () => {
  const selectInput = document.getElementById("selectInput");
  let selectValue = "";
  const textInput = document.getElementById("textInput");
  let textValue = "";
  const array = await FetchUsers(url);

  createTable(array);

  selectInput.addEventListener("change", () => {
    selectValue = selectInput.value;
  });

  textInput.addEventListener("keyup", async () => {
    textValue = textInput.value;
    filteredResult = await FilteredFetch(url, selectValue, textValue);
    tableReset();
    spinnerOnOff();
    setTimeout(async () => {
      createTable(filteredResult);
    }, 2000);
  });
});
