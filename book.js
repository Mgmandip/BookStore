// Search Function

function searchBook() {
    clearSearchHighlights();

    let searchTerm = document.getElementById('search-bar').value.trim().toLowerCase();
    let bookCards = document.querySelectorAll('.book1'); 

    bookCards.forEach(card => {
        let titleElement = card.querySelector('h3');
        let titleText = titleElement.textContent.toLowerCase();

        if (titleText.includes(searchTerm)) {
            card.style.backgroundColor = '#db9758'; 
        }
    });
}

function clearSearchHighlights() {
    let bookCards = document.querySelectorAll('.book1');
    bookCards.forEach(card => {
        card.style.backgroundColor = ''; 
    });
}


// Add function (I used this function so that it creates a new card as book)

function addBook() {
    let bookName = prompt("Add new book Title:");
    let bookImage = prompt("Add book image link:");

    if (bookName && bookImage) {

        let newBookCard = document.createElement('div');
        newBookCard.classList.add('book1'); 
        newBookCard.id = 'book5'; 
        newBookCard.style.gridTemplateColumns = '1fr 2fr'; 

        // For card image
        let imgElement = document.createElement('img');
        imgElement.src = bookImage;
        imgElement.id = 'img'; 
        imgElement.style.height = '150px'; 
        imgElement.style.width = '200px';
        imgElement.style.borderRadius = '20px'; 

        // For card title
        let titleElement = document.createElement('div');
        titleElement.classList.add('title');
        let titleHeader = document.createElement('h3');
        titleHeader.textContent = bookName;

        // For butotn
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttondiv');
        let readButton = document.createElement('button');
        readButton.classList.add('button');
        readButton.textContent = 'Read';

        titleElement.appendChild(titleHeader);
        buttonDiv.appendChild(readButton);
        newBookCard.appendChild(imgElement);
        newBookCard.appendChild(titleElement);
        newBookCard.appendChild(buttonDiv);

        
        let bookSection = document.querySelector('.booksection');
        bookSection.appendChild(newBookCard);
    } else {
        alert('Please enter both the book title and image link.');
    }
}


// Remove function

function removeBook(){
    let bookList = document.querySelector('.booksection');

    if(bookList.children.length > 0){
        let bookRemove = confirm("Do you want to remove the last book?");
        if(bookRemove){
            let lastBook = bookList.lastElementChild;
            bookList.removeChild(lastBook);
        }
        else{
            alert("Erorr");
        }
    }
    else{
        alert("Book section is empty.")
    }
}

// Favourite function

function toggleFavorite(button) {
    button.classList.toggle('favorite');

    let bookCard = button.closest('.favorite');
    if (button.classList.contains('favorite')) {
        bookCard.classList.add('favorite-book');
    } else {
        bookCard.classList.remove('favorite-book');
    }
}

