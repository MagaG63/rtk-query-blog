import { useGetPostsQuery } from "../services/postsApi";

function PostsList() {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Error</h2>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <br />
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostsList;
