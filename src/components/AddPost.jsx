import { useState } from "react";
import { useAddPostMutation } from "../services/postsApi";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [addPost] = useAddPostMutation();

  function handleAdd() {
    addPost({
      title,
      body,
    });

    setTitle("");
    setBody("");
  }

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default AddPost;
