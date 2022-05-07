function addCard(event) {
  const userInputText = document.querySelector("#userInputText");
  const text = userInputText.value;
  const userInputDate = document.querySelector("#userInputDate");
  const date = userInputDate.value;
  const userInputTime = document.querySelector("#userInputTime");
  const time = userInputTime.value;
  event.preventDefault();
  printCard(text, date, time);
}

function printCard(text, date, time) {
  let card = `<div class="col-4" id="card${counter}">
  <button type="button" class="btn btn-default btn-sm">
  <span class="glyphicon glyphicon-remove"></span>
</button>
    <div class="tasks col-12"> <p>${text}</p> </div>
    <div class="col-6"> <p>${date}</p> </div>
    <div class="col-6"> <p>${time} </p> </div>
    </div>`;
  cards.push(card);
  const containerDiv = document.querySelector("#cardContainer");
  containerDiv.innerHTML += card;
  counter++;
}

function deleteCard() {}

function onWindowLoad() {
  const formSubmit = document.querySelector("#action");
  formSubmit.onsubmit = addCard;
  const deleteButton = document.querySelectorAll(`button`);
  deleteButton.onclick = deleteCard;
}

window.onload = onWindowLoad;
