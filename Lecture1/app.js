const MAIN_URL = 'https://jsonplaceholder.typicode.com';
const POSTS='/posts';
const SINGLEPOST = '/posts?id=';
const USER = '/users?id=';
const COMMENTS = '/comments';

let output = '';

//SETTING THE SIMPLE TEMPLATE MODELS TO RENDER..
let ERRORSCREEN = `
<h1>ERROR<h1>
`

let postsTemplate = (post) =>`
<div class = "main post-list-item">
  <h4 class="post-list-title">${post.title}</h4>
  <p class="post-list-body">${post.body}</p>
  <a href="#posts?id=${post.id}">
    <button class="nav-but read-post">Read...</button>
  </a>
  <a href="#users?id=${post.userId}">
    <button class ="nav-but read-user">Go to authors page</button>
  </a>
</div>
`;

let singlePostTemplate = (singlePost) =>
`
<div class = "main single-post">
  <h3 class="post-title">${singlePost.title}</h3>
  <p class="post-body">${singlePost.body}</p>
  <a href="#users?id=${singlePost.userId}">
    <button class ="nav-but read-user">About the Author</button>
  </a>
  <a href="#">
    <button class="nav-but read-all">Go back to all posts</button>
  </a>
  <p>Comments: </p>
  <div class="main comment-section">
`;

let commentTemplate = (comment) =>
`
<div class = "single-comment">
  <p class="comment comment-name">${comment.name}</p>
  <p class="comment comment-body">${comment.body}</p>
  <p class="comment comment-email">Written By ${comment.email}</p>
</div>
`;

let userTemplate = (user) =>
`
<div class="main user">
  <h3>${user.name}</h3>
  <h4> Username: ${user.username}</h4>
  <p>Email: ${user.email}<br/> Phone: ${user.phone}<br/> Website: ${user.website}</p>
  <a href="#">
    <button class ="nav-but read-all">Go back to all posts</button>
  </a>
  <p>Posts by ${user.name}: <p>
  <div class="user-post-list">
`;

let userPostsTemplate = (post) =>
`
<div class="main user-post">
  <p class="user-post-title">${post.title}</p>
  <a href="#posts?id=${post.id}">
    <button class="nav-but read-post"> Read...</button>
  </a>
</div>
`;

//SETTING CONTROLLERS FOR RENDERING DIFFERENT TYPE OF QUERIES
let renderMultiple = (data, template) => data.map(template).join('');
let renderSingle = (data, template) => template(data[0]);

//Main controller - fetching and powers up the renders depending on the url endpoint
async function renderer(){
  var hash = window.location.hash.substring(1);
  if (hash==='') {
   endpoint = `${MAIN_URL}${POSTS}`
} else  endpoint = `${MAIN_URL}/${hash}`;

  let response = await fetch(endpoint);
  let data = await response.json();

    if (endpoint.includes(SINGLEPOST)) {
        let commentsUrl = `${MAIN_URL}${COMMENTS}?postId=${hash.split('=')[1]}`;
        let commentsResponse = await fetch(commentsUrl);
        let filteredComments = await commentsResponse.json();
        output = `${renderSingle(data, singlePostTemplate)}${renderMultiple(filteredComments, commentTemplate)}</div></div>`;

    } else if (endpoint.includes(USER)) {

      let userPostUrl = `${MAIN_URL}${POSTS}?userId=${hash.split('=')[1]}`;
      let userPostResponse = await fetch(userPostUrl);
      let filteredUserPosts = await userPostResponse.json();
      output = `${renderSingle(data, userTemplate)}${renderMultiple(filteredUserPosts, userPostsTemplate)}</div></div>`;

    } else if (endpoint.endsWith(POSTS)) {
      output = `<h3>All posts</h3>${renderMultiple(data, postsTemplate)}`;

    } else output = ERRORSCREEN;

    //after the output is ready - pushing it to html page.
    document.getElementById('app').innerHTML = output;
}

//firing the renderer onload and refreshing it every time the hash is changed
renderer();
window.addEventListener('hashchange', function() {
  renderer();
});
