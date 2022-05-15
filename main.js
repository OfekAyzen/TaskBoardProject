function save() {
  const userInputText = document.querySelector("#userInputText");
  const text = userInputText.value;
  const userInputDate = document.querySelector("#userInputDate");
  const date = userInputDate.value;
  const userInputTime = document.querySelector("#userInputTime");
  const time = userInputTime.value;

  const currentTasks = localStorage.getItem("allTasks");

  let arr = [];

  if (currentTasks) {
    arr = JSON.parse(currentTasks);
  }

  const task = {
    text: text,
    date: date,
    time: time,
  };

  arr.push(task);

  localStorage.setItem("allTasks", JSON.stringify(arr));

  userInputText.value = "";
  userInputDate.value = "";
  userInputTime.value = "";

  loadTasks(true);
}

function loadTasks(newNote = false) {
  const currentTasks = localStorage.getItem("allTasks");
  if (currentTasks) {
    let board = ``;

    const arr = JSON.parse(currentTasks);
    for (let i = 0; i < arr.length; i++) {
      const tasks = arr[i];
      let noteClassName = "noteDivs";
      if (newNote && i === arr.length - 1) {
        noteClassName += " new-note";
      }
      board += `<div class="${noteClassName} col-4" id="noteDivs_${i}">
      
      <a href="#" icon-index="${i}""> X </a>
      
      <div class="tasks col-12"> <p>${tasks.text}</p> </div>
      <div class="col-12 small"> <p>${tasks.date} ${tasks.time}</p> </div>
      </div>`;
    }

    const containerDiv = document.querySelector("#cardContainer");
    containerDiv.innerHTML = board;
  }
}

function deleteCard(event) {
  event.target.parentElement.remove();
  remove(event);
}

function remove(event) {
  const iconIndex = event.target.getAttribute("icon-index");
  const element = document.getElementById(`noteDivs_${iconIndex}`);

  if (element) {
    element.classList.add("delete-note");
    element.remove();
    const currentTasks = localStorage.getItem("allTasks");
    if (currentTasks) {
      const arr = JSON.parse(currentTasks);
      arr.splice(iconIndex, 1);
      localStorage.setItem("allTasks", JSON.stringify(arr));
      loadNotes();
    }
  }
}

function onWindowLoad() {
  loadTasks();

  const formSubmit = document.querySelector("#action");
  formSubmit.onsubmit = save;

  const card = document.querySelectorAll("a");
  for (const btn of card) {
    btn.onclick = remove;
  }
}

window.onload = onWindowLoad;
