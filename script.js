// TODO:
//      Make it responsive
//      Add a ClearEvent list button
//      Figure out how to apply the event listener only to the backdrop and not the child elements

import Entry from "./entry.js"

const storedEntries = localStorage.getItem('entries')
let entryList = storedEntries ? JSON.parse(storedEntries) : []

const newEntryButton = document.getElementById('newEntryButton')
const modalCancelButton = document.getElementById('cancelButton')

const modalBackdrop = document.getElementById('modalBackdrop')

const titleInput = document.querySelector('input')
const descriptionInput = document.querySelector('textarea')

newEntryButton.addEventListener('click', () => {
    modalBackdrop.style.display = 'flex'
})

modalCancelButton.addEventListener('click', (e) => {
    modalBackdrop.style.display = 'none'
})

// modalBackdrop.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (e === e.target) {

//         noBackdrop()
//     }
// })

function noBackdrop() {
    modalBackdrop.style.display = 'none'
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const eventEntry = {
        title: titleInput.value,
        description: descriptionInput.value
    }

    titleInput.value = ''
    descriptionInput.value = ''

    entryList.push(eventEntry)
    localStorage.setItem('entries', JSON.stringify(entryList))
    document.getElementById('modalBackdrop').style.display = 'none'
    generateList()
})

function generateList() {
    document.querySelector('main').innerHTML = ''
    if (entryList) {
        for(let i = 0; i < entryList.length; i++) {
            const postas = new Entry(entryList[i])
            postas.deleteButton.addEventListener('click', (e) => {
                e.preventDefault()
                postas.deletepost(entryList)
                generateList()
            })
        }
    }
}
generateList()