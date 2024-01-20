export const fetchUsers = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    return await response.json();
  } catch (e) {
    console.error("Si è verificato un errore:", e);
  }
};

export const filteredFetch = async (url, selectedInput, textedInput) => {
  const filtered = await fetchUsers(url);
  //if select option = "Select option" => value = 0, I will return all rows, else filtered result
  if (selectedInput == 0) {
    return filtered;
  } else {
    return await filtered.filter((x) => x[selectedInput].toLowerCase().includes(textedInput));
  }
};
