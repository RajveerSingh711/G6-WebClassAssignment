let blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

function saveBlogs() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function addBlog() {
  const title = document.getElementById("title")?.value.trim();
  const description = document.getElementById("description")?.value.trim();
  const category = document.getElementById("category")?.value.trim();
  const date = document.getElementById("date")?.value;
  const url = document.getElementById("url")?.value.trim();
  const publishedBy = document.getElementById("publishedBy")?.value.trim();
  const author = document.getElementById("author")?.value.trim();

  if (!title || !description || !category || !date) {
    alert("Please fill out all required fields.");
    return;
  }

  blogs.unshift({ title, description, category, date, url, publishedBy, author, timestamp: new Date().toISOString() });
  saveBlogs();

  if (document.getElementById("title")) document.getElementById("title").value = '';
  if (document.getElementById("description")) document.getElementById("description").value = '';
  if (document.getElementById("category")) document.getElementById("category").value = '';
  if (document.getElementById("date")) document.getElementById("date").value = '';
  if (document.getElementById("url")) document.getElementById("url").value = '';
  if (document.getElementById("publishedBy")) document.getElementById("publishedBy").value = '';
  if (document.getElementById("author")) document.getElementById("author").value = '';
  alert("Blog posted successfully!");
}

function displayBlogs(data) {
  const blogList = document.getElementById("blogList");
  if (!blogList) return;

  blogList.innerHTML = "";

  if (data.length === 0) {
    blogList.innerHTML = "<p>No blog posts yet.</p>";
    return;
  }

  data.forEach(blog => {
    const div = document.createElement("div");
    div.className = "blog-card";
    div.innerHTML = `
      <h3>${blog.url ? `<a href='${blog.url}' target='_blank'>${blog.title}</a>` : blog.title}</h3>
      <p>${blog.description}</p>
      <div><b>Category:</b> ${blog.category} | <b>Date:</b> ${blog.date}</div>
      ${blog.author ? `<div><b>Author:</b> ${blog.author}</div>` : ''}
      ${blog.publishedBy ? `<div><b>Published By:</b> ${blog.publishedBy}</div>` : ''}
      <small>Posted on ${new Date(blog.timestamp).toLocaleString()}</small>
    `;
    blogList.appendChild(div);
  });
}

let debounceTimer;
function debounceSearch() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const query = document.getElementById("searchInput")?.value.toLowerCase() || "";
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(query) ||
      blog.description.toLowerCase().includes(query)
    );
    displayBlogs(filtered);
  }, 300);
}

if (document.getElementById("blogList")) {
  displayBlogs(blogs);
}
if (document.getElementById("addBlogBtn")) {
  document.getElementById("addBlogBtn").onclick = addBlog;
}
if (document.getElementById("searchInput")) {
  document.getElementById("searchInput").oninput = debounceSearch;
} 