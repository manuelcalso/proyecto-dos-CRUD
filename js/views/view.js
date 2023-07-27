export function updateNotes(notesElements, notes, priceElement, prices) {
  const elements = notes.map((note, index) => {
    const price = prices[index]
    return /*HMTL*/ `
      <div class="style-component">
          <p>${note}</p>
          <p>${price}</p>
        <div class="update-field">
          <input type="text" id="update-name-${index}" placeholder="Actualiza el nombre"/>
          <button class="save-note" data-index="${index}">Actualizar Nombre</button>
          <input type="text" id="update-price-${index}" placeholder="Actualiza el precio"/>
          <button class="save-price" data-index="${index}">Actualizar Precio</button>
        </div>
        <button class="delete-note" data-index="${index}">Borrar</button>
      </div>`
  })

  notesElements.innerHTML = elements.join("")
  priceElement.innerHTML = elements.join("")
}
export function getNoteInputValue(noteInputElement) {
  return noteInputElement.value
}

export function getPriceInputValue(notepriceInputElement) {
  return notepriceInputElement.value
}

export function clearNoteInput(noteInputElement) {
  return (noteInputElement.value = "")
}
