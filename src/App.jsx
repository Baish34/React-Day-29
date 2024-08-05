import "./App.css";

const FoodBlogWordCount = ({ blogPosts }) => {
  const foodBlogPosts = blogPosts.filter((post) => post.category === "Food");

  const totalWordCount = foodBlogPosts.reduce((sum, post) => {
    const words = post.content.split(" ");
    return sum + words.length;
  }, 0);

  return (
    <div>
      <h2>Total Word Count of Food Blog Posts: </h2>
      {totalWordCount}
    </div>
  );
};

const Laptops = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of Laptops</h2>
      <p>{totalPrice}</p>
    </div>
  );
};

const CafeAverageRating = ({ cafes }) => {
  const cafeRatings = cafes.filter((cafe) => cafe.type === "cafe");

  const totalRatings = cafeRatings.reduce((acc, cafe) => acc + cafe.rating, 0);
  const averageRating = totalRatings / cafeRatings.length;

  return (
    <div>
      <h2>Average Cafe Rating</h2>
      <p>{averageRating.toFixed(1)}</p>
    </div>
  );
};

const Books = ({ books }) => {
  const totalPages = books.reduce((acc, curr) => acc + curr.pages, 0);

  return (
    <div>
      <h2>Total Number of Pages</h2>
      <p>{totalPages}</p>
    </div>
  );
};

const Tweets = ({ tweets }) => {
  const totalLikesMorning = tweets.reduce(
    (acc, curr) => (curr.schedule === "Morning tweet" ? acc + curr.likes : acc),
    0,
  );
  const totalLikesEvening = tweets.reduce(
    (acc, curr) => (curr.schedule === "Evening tweet" ? acc + curr.likes : acc),
    0,
  );

  return (
    <div>
      <h2>Total likes on Morning Tweets</h2>
      <p>{totalLikesMorning}</p>

      <h2>Total likes on Evening Tweets</h2>
      <p>{totalLikesEvening}</p>
    </div>
  );
};

const Podcasts = ({ podcasts }) => {
  const totalListeners = podcasts.reduce(
    (acc, curr) => (curr.type === "verified" ? acc + curr.listeners : acc),
    0,
  );

  return (
    <div>
      <h2>Total Number of Listeners of Verified Podcasts</h2>
      <p>{totalListeners}</p>
    </div>
  );
};

export default function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },
    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },
    {
      id: 3,
      title: "Blog Post 3",
      content: "Content 3",
      category: "Technology",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content: "New content of food called Content 4",
      category: "Food",
    },
  ];

  const laptops = [
    { id: 1, brand: "Dell", price: 8999.99 },
    { id: 2, brand: "HP", price: 7999.99 },
    { id: 3, brand: "MacBook", price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },
    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },
    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },
    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },
  ];

  const books = [
    { id: 1, title: "Book 1", pages: 300 },
    { id: 2, title: "Book 2", pages: 250 },
    { id: 3, title: "Book 3", pages: 400 },
  ];

  const tweets = [
    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },
    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },
    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },
    { id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },
    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },
    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },
  ];

  return (
    <main>
      <FoodBlogWordCount blogPosts={blogPosts} />
      <hr />
      <Laptops laptops={laptops} />
      <hr />
      <CafeAverageRating cafes={cafes} />
      <hr />
      <Books books={books} />
      <hr />
      <Tweets tweets={tweets} />
      <hr />
      <Podcasts podcasts={podcasts} />
    </main>
  );
}
