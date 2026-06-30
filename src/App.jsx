import { useGetPostsQuery } from "./services/postsApi";

function App() {
  const { data, isLoading, error } = useGetPostsQuery();

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>

      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
