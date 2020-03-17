const textInput = document.querySelector("#textInput");
const dateInput = document.querySelector("#dateInput");
const buttonAdd = document.querySelector(".addCard");

buttonAdd.addEventListener('click',()=>{
    // make newCardHtml
    const newCardHtml = `<h2>${textInput.value}</h2> 
    <input type="text" value="${textInput.value}" class="inputChange hidden"/>
    <div class="containerCard">
      <p>Date: ${dateInput.value}</p>
      <button class="deleteCard">❌ Deleted</button>
    </div>`
    // Make newCard
    const newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.innerHTML = newCardHtml;
    // insertNewCard
    const containerMain = document.querySelector('.containerMain')
    containerMain.insertAdjacentElement('afterbegin',newCard);
    // checkDeleteButton
    const deleteButton = document.querySelectorAll('.deleteCard');
    deleteButton.forEach(button => button.addEventListener('click',()=>{
    const buttonDeleteCurrent = event.currentTarget;
    buttonDeleteCurrent.closest('.card').remove();
  }))
});

// makeToggle
// const textCard = document.querySelectorAll("h2")
// textCard.forEach(text => text.addEventListener("click",()=>{
//     const textCardCurrent = event.currentTarget;
//     textCardCurrent.closest(".inputChange").classList.toggle("hidden");
//     textCardCurrent.classList.toggle("hidden");
// }))