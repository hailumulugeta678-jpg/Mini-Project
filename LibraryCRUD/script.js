let books = [];
let editBookIndex = -1;

function addBook() {
    let bookId = document.getElementById("bookId").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;

    if (bookId === "" || title === "" || author === "" || year === "") {
        alert("Please fill all fields");
        return;
    }

    if (editBookIndex === -1) {
        books.push({ bookId, title, author, year });
    } else {
        books[editBookIndex] = { bookId, title, author, year };
        editBookIndex = -1;
    }

    clearForm();
    displayBooks();
}

function displayBooks() {
    let table = document.getElementById("bookTable");
    table.innerHTML = "";

    books.forEach((book, index) => {
        table.innerHTML += `
        <tr>
            <td>${book.bookId}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function editBook(index) {
    let book = books[index];
    document.getElementById("bookId").value = book.bookId;
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;

    editBookIndex = index;
}

function deleteBook(index) {
    if (confirm("Delete this book?")) {
        books.splice(index, 1);
        displayBooks();
    }
}

function clearForm() {
    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
}
