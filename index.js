let rowId = 0;
let selectedRow = null;
let objectsArray = [];
document.getElementById("updateBtn").disabled = true;

function submitData() {
   let formData = getData();
   if (
      formData.UserName === "" &&
      formData.UserEmail === "" &&
      formData.UserPhone === ""
   )
      alert("please fill all the fields");
   else {
      insertData(formData);
      // formData["UserID"] = rowId;
      // objectsArray[rowId - 1] = formData;
      objectsArray.push(formData);
      resetFields();
   }
}
function getData() {
   let dataObject = {};
   dataObject["UserName"] = document.getElementById("userName").value;
   dataObject["UserEmail"] = document.getElementById("userEmail").value;
   dataObject["UserPhone"] = document.getElementById("userPhone").value;
   return dataObject;
}
function insertData(data) {
   // rowId++;
   let myTable = document
      .getElementById("myContectsTable")
      .getElementsByTagName("tbody")[0];
   let newRow = myTable.insertRow(myTable.lenght);
   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(1);
   const cell3 = newRow.insertCell(2);
   const cell4 = newRow.insertCell(3);
   const cell5 = newRow.insertCell(4);
   // const cell6 = newRow.insertCell(5);

   // cell1.innerHTML = rowId;
   cell1.innerHTML = data.UserName;
   cell2.innerHTML = data.UserEmail;
   cell3.innerHTML = data.UserPhone;
   cell4.innerHTML = "<button onclick='editEntry(this)'> Edit</button >";
   cell5.innerHTML = "<button onclick='deleteEntry(this)'> Delete</button >";
}
function resetFields() {
   document.getElementById("userName").value = "";
   document.getElementById("userEmail").value = "";
   document.getElementById("userPhone").value = "";
}

function editEntry(td) {
   selectedRow = td.parentElement.parentElement;
   document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
   document.getElementById("userEmail").value = selectedRow.cells[1].innerHTML;
   document.getElementById("userPhone").value = selectedRow.cells[2].innerHTML;
   document.getElementById("updateBtn").disabled = false;
   document.getElementById("submitBtn").disabled = true;
}
function updateData() {
   alert("hello this is updateData funcion");
   let editedData = getData();
   selectedRow.cells[0].innerHTML = editedData.UserName;
   selectedRow.cells[1].innerHTML = editedData.UserEmail;
   selectedRow.cells[2].innerHTML = editedData.UserPhone;
   document.getElementById("updateBtn").disabled = true;
   document.getElementById("submitBtn").disabled = false;
   resetFields();
}
function deleteEntry(td) {
   // console.log(td);
   selectedRow = td.parentElement.parentElement;
   document.getElementById("myContectsTable").deleteRow(selectedRow.rowIndex);
   objectsArray.splice(selectedRow.rowIndex, 1);
   // console.log(selectedRow);
}
