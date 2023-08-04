//app.js - CONTROLADOR

//seccion logica en models
import {
  addNote, //agregar nota
  addPrice, // agregar precio
  deleteNote, //borrar  nota
  deletePrice, // borra el precio
  updateNote, // actualiza nota
  updatePrices, // actualiza el precio
  saveNotesToLocalStorage, //salvar nota en local storage
  loadNotesFromLocalStorage, // cargar nota desde local storage
  loadPriceFormLocalStorage, // carga precio desde el local storage
  savePriceToLocalStorage, // salva precio en el local storage
} from "./models/model.js"
//seccion visual en el DOM
import {
  updateNotes,
  getNoteInputValue,
  clearNoteInput,
  getPriceInputValue,
} from "./views/view.js"

let prices = loadPriceFormLocalStorage()
let notes = loadNotesFromLocalStorage()

//console.log("notes", notes)
//// SELECCION EN DOM
const noteInputElement = document.querySelector("#libro-input")
const priceElement = document.querySelector("#precio-input")
const notesElement = document.querySelector("#notes")
const addNoteButtonElement = document.querySelector("#agregar-libros-button")

// ACTUALIZAR NOTAS
updateNotes(notesElement, notes, priceElement, prices)

//// EVENTOS
/// AGREGAR NOTA
addNoteButtonElement.addEventListener("click", (event) => {
  event.preventDefault() //EVITA EL REFRESH DEL NAVEGADOR

  ///obtener la nota del input
  const note = getNoteInputValue(noteInputElement)
  const price = getPriceInputValue(priceElement)
  //agregue  la nueva nota
  notes = addNote(notes, note)
  prices = addPrice(prices, price)
  //console.log("newPrice", price)

  //salvar la nota en local storage
  saveNotesToLocalStorage(notes)
  savePriceToLocalStorage(prices)

  //actualizar las notas
  updateNotes(notesElement, notes, priceElement, prices)

  //limpiar el input
  clearNoteInput(noteInputElement)
  clearNoteInput(priceElement)
})

notesElement.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-index")) {
    const index = Number(event.target.getAttribute("data-index"))
    ///borrado
    if (event.target.classList.contains("delete-note")) {
      notes = deleteNote(notes, index)
      prices = deletePrice(prices, index)
      saveNotesToLocalStorage(notes)
      savePriceToLocalStorage(prices)
      updateNotes(notesElement, notes, priceElement, prices)
    }
    //actualizado
    if (event.target.classList.contains("save-note")) {
      const updateInputElement = event.target.parentNode.querySelector(
        "#update-name-" + index
      )

      const updatedNote = updateInputElement.value

      notes = updateNote(notes, index, updatedNote)
      saveNotesToLocalStorage(notes)
      updateNotes(notesElement, notes, priceElement, prices)

      const updateFieldElement =
        event.target.parentNode.querySelector(".update-field")
      updateFieldElement.style.display = "none"
    }

    if (event.target.classList.contains("save-price")) {
      const updateInputElement = event.target.parentNode.querySelector(
        "#update-price-" + index
      )
      const updatedPrice = updateInputElement.value

      prices = updatePrices(prices, index, updatedPrice)
      savePriceToLocalStorage(prices)
      updateNotes(notesElement, notes, priceElement, prices)

      const updateFieldElement =
        event.target.parentNode.querySelector(".update-field")
      updateFieldElement.style.display = "none"
    }
  }
})

//////////////////////////// PROCESO ALTERNO CON UN OBJETO

// const librosDestacadosElement = document.querySelector("#buscatulibro")

// //console.log(librosDestacadosElement)

// const librosPreciosElement = document.querySelector("#montodellibro")
// //console.log(librosPrecios)

// const agregarLibros = document.querySelector("#agregarlibros")
// //console.log(agregarLibros)

// const librosDestacados = librosDestacadosElement.value.split(", ")
// const librosPrecios = librosPreciosElement.value.split(", ").map(Number)

// //const librosDestacados = ["En la vorágine de la violencia", "Creatividad: Una guía breve y divertida", "Teoría del color con acuarela", "Querido Callo", "How to Talk to Your Cat About Gun Safety", "Zendegi" ];

// //const librosPrecios = [288, 340, 412, 599, 133, 470];

// class BolsaLibros {
//   constructor(librosDestacados, librosPrecios) {
//     this.librosDestacados = librosDestacados
//     this.librosPrecios = librosPrecios
//   }

//   addLibro(libro) {
//     if (!this.librosDestacados.includes(libro)) {
//       this.librosDestacados.push(libro)
//     }
//   }

//   amount(precio) {
//     if (!this.librosPrecios.includes(precio)) {
//       this.librosDestacados.push(precio)
//     }
//   }
// }
