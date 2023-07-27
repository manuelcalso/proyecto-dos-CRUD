export function addNote(notes, note) {
  return [...notes, note]
}

export function addPrice(prices, price) {
  return [...prices, price]
}

export function deleteNote(notes, index) {
  return notes.filter((note, noteIndex) => noteIndex != index)
}

export function deletePrice(prices, index) {
  return prices.filter((prices, priceIndex) => priceIndex != index)
}

export function updateNote(notes, index, updateNote) {
  return notes.map((note, noteIndex) => {
    if (noteIndex === index) {
      return updateNote
    }
    return note
  })
}

export function updatePrices(prices, index, updatePrice) {
  return prices.map((price, priceIndex) => {
    if (priceIndex === index) {
      return updatePrice
    }
    return price
  })
}

export function saveNotesToLocalStorage(notes) {
  localStorage.setItem("notes", JSON.stringify(notes))
}
export function savePriceToLocalStorage(prices) {
  localStorage.setItem("prices", JSON.stringify(prices))
}
export function loadNotesFromLocalStorage() {
  const notes = localStorage.getItem("notes")
  if (notes) {
    return JSON.parse(notes)
  }
  return []
}
export function loadPriceFormLocalStorage() {
  const prices = localStorage.getItem("prices")
  if (prices) {
    return JSON.parse(prices)
  }
  return []
}
