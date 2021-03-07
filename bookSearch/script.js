const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const categoryItens = booksByCategory.length;

function checkCategory() {
    console.log('We have ' + categoryItens + ' categories')

    for (let category of booksByCategory) {
        console.log('Total books in category:', category.category)
        console.log(category.books.length)
    }
}

function checkAuthor() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log('Total authors:', authors.length)
}

function CheckAugusto() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === "Augusto Cury") {
                books.push(book.title)
            }
        }
    }
    console.log("Books of Augusto Cury: ", books)
}

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Books writed by the author, ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')
CheckAugusto()
checkAuthor()
checkCategory()