import { fetchUsers } from "./modules/FetchUsers.js";
import { createTable } from "./modules/Components.js";
import { selectInputListener, textInputListener } from "./modules/EventListener.js";

export const url = "https://jsonplaceholder.typicode.com/users";

const historicQuery = localStorage.getItem("query");
const query = historicQuery ? historicQuery : "";
const selectInput = document.getElementById("selectInput");
const textInput = document.getElementById("textInput");

document.addEventListener("DOMContentLoaded", async () => {
  textInput.value = query.toLowerCase();

  const array = await fetchUsers(url);

  createTable(array);

  selectInput.addEventListener("change", selectInputListener);
  textInput.addEventListener("keyup", textInputListener);
});
