function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
}
function loadPost() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayPost(data))
}

function displayPost(posts) {
  // get the element
  const postContainer = document.querySelector("#post-container")
  postContainer.innerHTML = ''
  posts.forEach((elem) => {
    // create element
    const postCard = document.createElement('div')
    postCard.innerHTML = `<div class="post-card">
      <h2>${elem.title}</h2>
      <p>${elem.body}</p>
    </div>
    `
    // add to the container
    postContainer.appendChild(postCard)
  })
}
loadPost()