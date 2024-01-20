import { fetchUsers } from "./modules/FetchUsers";
import { createTable } from "./modules/Components";
import { selectInputListener, textInputListener } from "./modules/EventListener";

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
