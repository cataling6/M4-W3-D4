const tableContainer = document.getElementById("userTable");
let tableBody = document.getElementById("tableBody");
import { url } from "./main.js";
import { FetchUsers } from "./FetchUsers.js";
export const createTable = (list) => {
  tableHeader();
  tableData(list);
};

export const tableHeader = () => {
  tableBody.innerHTML = `<thead class="thead-dark"><tr><th scope="col">Username</th><th scope="col">Mail</th><th scope="col">Name</th></tr>`;
};

const tableData = (list) => {
  const tableData = document.getElementById("rows");
  list.forEach((element) => {
    tableBody.innerHTML += `<tr><td>${element["username"]}</td><td>${element.email}</td><td>${element.name}</td></tr>`;
  });
};
