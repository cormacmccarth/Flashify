const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let light = document.getElementById("light");


document.getElementById("add-flashcard").addEventListener("click", () => {
    addFlashcard();
  });


  document.getElementById("showCreateCardBox").addEventListener("click", () => {
    showCreateCardBox();
  });


document.getElementById("deleteFlashcards").addEventListener("click", () => {
  deleteFlashcards();
});


