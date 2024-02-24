const inputField = document.getElementById("input");
const result_row = document.getElementById("results");

function insert_result() {
  let input = inputField.value;
  let new_row = document.createElement("td");
  new_row.append(input);
  result_row.appendChild(new_row);
}

