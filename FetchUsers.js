export const FetchUsers = async (url) => {
  //const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Si è verificato un errore:", e);
  }
};

export const FilteredFetch = async (url, selectedInput, textedInput) => {
  let res = [];

  const filtered = await FetchUsers(url);

  //if select option = "Select option" => value = 0, I will return all rows, else filtered result
  if (selectedInput == 0) {
    res = filtered;
  } else {
    res = await filtered.filter((x) => x[selectedInput].toLowerCase().includes(textedInput));
  }
  return res;
};
