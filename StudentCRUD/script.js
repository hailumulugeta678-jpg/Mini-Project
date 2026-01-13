let students = [];
let editIndex = -1;

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let email = document.getElementById("email").value;

    if (id === "" || name === "" || dept === "" || email === "") {
        alert("All fields are required!");
        return;
    }

    if (editIndex === -1) {
        students.push({ id, name, dept, email });
    } else {
        students[editIndex] = { id, name, dept, email };
        editIndex = -1;
    }

    clearForm();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.dept}</td>
            <td>${student.email}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("dept").value = student.dept;
    document.getElementById("email").value = student.email;

    editIndex = index;
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        displayStudents();
    }
}

function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("email").value = "";
}
