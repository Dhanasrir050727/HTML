function addNote() {
  let noteInput = document.getElementById("noteInput");
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  if (noteInput.value.trim() !== "") {
    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    showNotes();
  }
}

function showNotes() {
  let notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((noteText, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    let span = document.createElement("span");
    span.innerText = noteText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
      deleteNote(index);
    };

    noteDiv.appendChild(span);
    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
