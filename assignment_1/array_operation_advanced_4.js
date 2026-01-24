// ASSIGNMENT 4: Movie Streaming Platform
//--------------------------------------

// Test Data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only Sci-Fi movies
let m1 = movies.filter(movie => movie.genre === "Sci-Fi");
console.log(m1);

// 2. map() → "Title (rating)"
let m2 = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log(m2);

// 3. reduce() average movie rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
let avgRating = totalRating / movies.length;
console.log(avgRating);

// 4. find() movie "Joker"
let m4 = movies.find(movie => movie.title === "Joker");
console.log(m4);

// 5. findIndex() of "Avengers"
let m5 = movies.findIndex(movie => movie.title === "Avengers");
console.log(m5);