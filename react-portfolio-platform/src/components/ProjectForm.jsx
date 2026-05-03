import { useState } from "react";

export default function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      id: Date.now(),
      title,
      description
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="btn">Add Project</button>
    </form>
  );
}