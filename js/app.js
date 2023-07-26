//app.js - CONTROLADOR
// COMBINA LA PARTE LOGICA CON LA VISUAL

//seccion logica en models
import {
  addNote, //agregar nota
  deleteNote, //borrar  nota
  updateNote, // actualiza nota
  saveNotesToLocalStorage, //salvar elemento en local storage
  loadNotesFromLocalStorage, // cargar elemento desde local storage
} from "./models/model.js"
//seccion visual en el DOM
import { updateNotes, getNoteInputValue, clearNoteInput } from "./views/view.js"

let notes = loadNotesFromLocalStorage()

//console.log("notes", notes)
//// SELECCION EN DOM
const noteInputElement = document.querySelector("#libro-input")
//const notepriceInputElement = document.querySelector("#monto-input")
const notesElement = document.querySelector("#notes")
const addNoteButtonElement = document.querySelector("#agregar-libros-button")

// ACTUALIZAR NOTAS
updateNotes(notesElement, notes)

//// EVENTOS
/// AGREGAR NOTA
addNoteButtonElement.addEventListener("click", (event) => {
  event.preventDefault() //EVITA EL REFRESH DEL NAVEGADOR

  ///obtener la nota del input
  const note = getNoteInputValue(noteInputElement)
  //const price = getPriceInputValue(notepriceInputElement)
  //agregue  la nueva nota
  notes = addNote(notes, note)
  //console.log("newNotes", notes)
  //salvar la nota en local storage
  saveNotesToLocalStorage(notes)

  //actualizar las notas
  updateNotes(notesElement, notes)

  //limpiar el input
  clearNoteInput(noteInputElement)
})

notesElement.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-index")) {
    const index = Number(event.target.getAttribute("data-index"))
    ///borrado
    if (event.target.classList.contains("delete-note")) {
      notes = deleteNote(notes, index)
      saveNotesToLocalStorage(notes)
      updateNotes(notesElement, notes)
    }
    //actualiza
    //if (event.target.classList.contains("update-note")) {
    // const updateFieldElement =
    // event.target.parentNode.querySelector(".update.field")
    //updateFieldElement.style.display = "block"
    // }
    //salva despue de la edicion  - actualiza
    if (event.target.classList.contains("save-note")) {
      const updateInputElement = event.target.parentNode.querySelector("input")
      const updatedNote = updateInputElement.value

      notes = updateNote(notes, index, updatedNote)
      saveNotesToLocalStorage(notes)
      updateNotes(notesElement, notes)

      const updateFieldElement =
        event.target.parentNode.querySelector(".update-field")
      updateFieldElement.style.display = "none"
    }
  }
})

////MANIPULAR NOTA
//ACTUALIZAR NOTA
//BORRAR NOTA

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
