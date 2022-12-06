import { stringify } from "querystring";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Comment } from "../../types/comment";

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputComment, setInputComment] = useState<string>("");

  const fetchCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data: Comment[] = await response.json();

    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ inputComment }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
  };

  const deleteComment = async (id: number) => {
    const response = await fetch(`/api/comments/${id}`, { method: "DELETE" });

    const data = await response.json();
    fetchCommentsHandler();
  };

  return (
    <div>
      <h1>Comments Page</h1>
      <div>
        <input
          type="text"
          value={inputComment!}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputComment(e.currentTarget.value)
          }
        />
        <button onClick={submitComment}>Submit Comment</button>
      </div>
      <button onClick={fetchCommentsHandler}>Load Comments</button>
      {comments.map((c) => {
        return (
          <div key={c.id}>
            {c.id} - {c.text}
            <button onClick={() => deleteComment(c.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;
