import { fetchUsers } from "./FetchUsers.js";
import { createTable } from "./Components.js";
import { selectInputListener, textInputListener } from "./EventListener.js";

export const url = "https://jsonplaceholder.typicode.com/users";

const historicQuery = localStorage.getItem("query");
const query = historicQuery ? historicQuery : "";
const selectInput = document.getElementById("selectInput");
const textInput = document.getElementById("textInput");

document.addEventListener("DOMContentLoaded", async () => {
  textInput.value = query;

  const array = await fetchUsers(url);

  createTable(array);

  selectInput.addEventListener("change", selectInputListener);
  textInput.addEventListener("keyup", textInputListener);
});
