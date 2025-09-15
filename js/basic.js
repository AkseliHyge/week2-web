console.log("koodi pyörii");

const addDataButton = document.getElementById("submit-data");
const emptyTableButton = document.getElementById("empty-table");

addDataButton.addEventListener("click", function() {
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";

    const table = document.querySelector("table");

    let trNew = document.createElement("tr");
    let newName = document.createElement("td");
    let NewEmail = document.createElement("td");
    let NewAdmin = document.createElement("td");

    newName.textContent = username;
    NewEmail.textContent = email;
    NewAdmin.textContent = admin;

    trNew.appendChild(newName);
    trNew.appendChild(NewEmail);
    trNew.appendChild(NewAdmin);

    table.appendChild(trNew);

    
});

emptyTableButton.addEventListener("click", function() {
    const tableBody = document.getElementById("user-table");
    tableBody.innerHTML = '';
});
