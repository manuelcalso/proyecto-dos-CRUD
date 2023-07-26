export function updateNotes(notesElements, notes) {
  const elements = notes.map((note, index) => {
    return /*HMTL*/ `
      <div class="style-component">
          <p>${note}</p>
        <div class="update-field">
          <input type="text" id="update-input-${index}" placeholder="Actualiza el nombre"/>
          <button class="save-note" data-index="${index}">Actualizar</button>
        </div>
        <button class="delete-note" data-index="${index}">Borrar</button>
      </div>`
  })

  notesElements.innerHTML = elements.join("")
}
export function getNoteInputValue(noteInputElement) {
  return noteInputElement.value
}

//export function getPriceInputValue(notepriceInputElement){
// return notepriceInputElement.value
//}

export function clearNoteInput(noteInputElement) {
  return (noteInputElement.value = "")
}
