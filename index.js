const objectArray = [];
let rowID = 1;
function getData(e) {
e.preventDefault();

   const name = document.getElementById("userName").value;
   const email = document.getElementById("userEmail").value;
   const phone = document.getElementById("userPhone").value;
   console.log(name + " " + email + " " + phone);

   const myTable = document
      .getElementById("myContectsTable")
      .getElementsByTagName("tbody")[0];
   const newRow = myTable.insertRow(0);

   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(0);
   const cell3 = newRow.insertCell(0);
   const cell4 = newRow.insertCell(0);

   cell1.innerHTML = rowID;
   rowID++;
   cell2.innerHTML = name;
   cell3.innerHTML = email;
   cell4.innerHTML = phone;
}
