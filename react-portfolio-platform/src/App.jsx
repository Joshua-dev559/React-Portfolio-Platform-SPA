import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React."
    },
    {
      id: 2,
      title: "E-commerce UI",
      description: "Online store interface design."
    }
  ]);

  const [search, setSearch] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Creative Portfolio</h1>
      <p className="subtitle">Showcasing our latest work</p>

      <SearchBar setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}