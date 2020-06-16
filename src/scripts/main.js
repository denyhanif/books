function main() {

    const getBook = () => {
        // fungsi untuk mendapatkan buku
        //membuat instance dari xmlhttprequest
        const xhr = new XMLHttpRequest
        //menetapkan callback jika response succes dan eror
        xhr.onload = function () {
            const responseJson = JSON.parse(this.responseText);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.books);
            }
        }
        xhr.onerror = function () {
            showResponseMessage();
        }
        //membuat get req dan menatapkakn target url
        xhr.open("GET", "https://web-server-book-dicoding.appspot.com/list");
        //mengirm request
        xhr.send();
    };


    const insertBook = (book) => {
        // tuliskan kode di sini!
    };

    const updateBook = (book) => {
        // tuliskan kode di sini!
    };

    const removeBook = (bookId) => {
        // tuliskan kode di sini!
    };






    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => { //menampilkan data buku
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;