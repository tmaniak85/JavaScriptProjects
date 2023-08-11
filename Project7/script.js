let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewToDo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewToDo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()

        ulList.appendChild(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    let toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.appendChild(toolsPanel)

    let completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    let editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    }
    if (e.target.matches('.edit')) {
        editTodo(e)
    }
    if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    errorInfo.textContent = ''
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')

    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście'
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter') {
        addNewToDo()
    }
}

document.addEventListener('DOMContentLoaded', main)

