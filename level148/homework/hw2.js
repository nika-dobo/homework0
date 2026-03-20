const posts = [
  { id: 1, title: "JavaScript Basics", likes: 150 },
  { id: 2, title: "CSS Tricks", likes: 75 },
  { id: 3, title: "React Guide", likes: 200 },
  { id: 4, title: "Node.js Tips", likes: 50 },
];

const popularPosts = posts.filter((post) => post.likes > 100);

console.log(popularPosts);
