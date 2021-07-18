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


document.getElementById("hideCreateCardBox").addEventListener("click", () => {
    hideCreateCardBox();
  });


  contentArray.forEach(newDiv);


  function newDiv(text){
    let div = document.createElement("div");
    let h2_question = document.createElement('h2');
    let h2_answer = document.createElement('h2');  
    div.className = 'flashcard';

    h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
    h2_question.innerHTML = text.my_question;
  
    h2_answer.setAttribute("style", "text-align:center; display:none; color:blue");
    h2_answer.innerHTML = text.my_answer;
  
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", () => {
        if(h2_answer.style.display == "none")
          h2_answer.style.display = "block";
        else
          h2_answer.style.display = "none";
      })

      flashcards.appendChild(div);
}

addFlashcard = () => {
    let flashcard_info = {
      'my_question' : question.value,
      'my_answer'  : answer.value
    }


    