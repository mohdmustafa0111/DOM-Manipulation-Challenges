const container = document.getElementById(`container`);
const loadMoreBtn = document.getElementById(`loadMoreBtn`);

let limit = 10;
let page = 1;

// Fetch posts from Fake API
async function fetchPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  return res.json();
}

// Render a post on the screen
function renderPost(post) {
  const div = document.createElement("div");
  div.classList.add("post");

  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;

  container.appendChild(div);
}

// Load items on button click
async function loadPosts() {
  const posts = await fetchPosts();

  posts.forEach(renderPost);

  // If API returned less than limit → no more posts
  if (posts.length < limit) {
    loadMoreBtn.textContent = "No More Posts";
    loadMoreBtn.disabled = true;
  }

  page++; // next batch
}

// Initial load
loadPosts();

// Button click → load next posts
loadMoreBtn.addEventListener("click", loadPosts);
