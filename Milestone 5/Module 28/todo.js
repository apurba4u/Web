function loadTodo () {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayPost(data))
}
function displayPost(posts) {
  // 1. get the element
  const todoContainer = document.querySelector('#todo-container')
  todoContainer.innerHTML = ''
  posts.forEach((elem) => {
    //2. create element
    const todoCard = document.createElement('div')
    todoCard.innerHTML = `<div class="todo-card">
      <p>${elem.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
      <h4>${elem.title}</h4>
    </div>`
    // 3. add to the container
    todoContainer.appendChild(todoCard)
  })
}
loadTodo()

/**
 * GET --> is used to request data from a specific resources
 * POST --> is used to send data to a server to create a resource
 * DELETE --> is used to deletes the specified resources
 * 
 * PUT & PATCH --> is used to update the data
 * 
 * PUT --> 100 number data nah paile create korbe
 * PUT --> Create a new resources or replace if the resource exists
 * PATCH --> 100 number data nah paile kisui korbe nah
 * PATCH --> partially update an existing resource
 */