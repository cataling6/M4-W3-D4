let tableBody = document.getElementById("tableBody");

export const createTable = (list) => {
  tableHeader();
  tableData(list);
};

export const tableHeader = () => {
  const tableB = document.createElement("tbody");
  tableBody.innerHTML = `<thead class="thead-dark"><tr><th scope="col">Username</th><th scope="col">Mail</th><th scope="col">Name</th></tr>`;
};

const tableData = (list) => {
  if (list == 0) {
    tableBody.innerHTML = `<p class="d-flex justify-content-center">No data founded :(</p>`;
  } else {
    list.forEach((element) => {
      tableBody.innerHTML += `<tr><td>${element["username"]}</td><td>${element.email}</td><td>${element.name}</td></tr>`;
    });
  }
};

export const tableReset = () => {
  tableBody.innerHTML = "";
};

//created spinner on and off then calling first on and after 2000 ms off; the result will be that spinners will be shown only the time needed
//to fetch with interval
const spinnerOn = () => {
  const spinner = document.getElementById("spinner");
  spinner.classList.replace("d-none", "d-flex");
};
const spinnerOff = () => {
  const spinner = document.getElementById("spinner");
  spinner.classList.replace("d-flex", "d-none");
};

export const spinnerOnOff = () => {
  spinnerOn();
  setTimeout(() => {
    spinnerOff();
  }, 2000);
};

// export const setLocalStorage = (key, value) => {
//   const lsKey = key;
//   const lsValue = value;
// };
