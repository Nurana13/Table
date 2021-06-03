// Add new row

function create() {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "<th>3</th>";
    cell1.style.paddingLeft = "0px"
    cell1.style.paddingRight = "0px"
    cell1.style.textAlign = "center"
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "<td class='icon'><i class='fas fa-edit icons'></i><i class='fas fa-trash icons'  onclick='deleteRow(this)'></i></td>"
    cell5.style.textAlign = "center"
  }

//   Delete row
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }





