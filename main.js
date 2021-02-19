$(document).ready(function () {
    let initial_data = localStorage.getItem("students") || "[]";
    initial_data = JSON.parse(initial_data);
    loadTable(initial_data);
    document.getElementById("add-btn").addEventListener("click", function () {
      let code = document.getElementById("code").value;
      let name = document.getElementById("name").value;
      let second_name = document.getElementById("second_name").value;
      let note = document.getElementById("note").value;
      let age = document.getElementById("age").value;
  
      if (
        code == "" ||
        name == "" ||
        second_name == "" ||
        note == "" ||
        age == ""
      ) {
        alert("Ingrese todos los datos");
      } else {
        let current_data = localStorage.getItem("students") || "[]";
        current_data = JSON.parse(current_data);
  
        let student = {
          code,
          name,
          second_name,
          note,
          age,
        };
  
        current_data.push(student);
        localStorage.setItem("students", JSON.stringify(current_data));
        loadTable(current_data);
      }
    });
  
    function loadTable(data) {
      document.getElementById("table-container").innerHTML =
        '<table id="student_table"></table>';
      $("#student_table").DataTable({
        data: data,
        columns: [
          { title: "Código", data: "code" },
          { title: "Nombre", data: "name" },
          { title: "Apellido", data: "second_name" },
          { title: "Nota", data: "note" },
          { title: "Edad", data: "age" },
        ],
      });
    }
  });
  