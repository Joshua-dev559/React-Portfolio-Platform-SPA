import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Platform",
      description: "A personal portfolio built with React."
    },
    {
      id: 2,
      title: "Car Shipment Company",
      description: "Online car website."
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
      <h1>React-Portfolio Platform</h1>
      <p className="subtitle">Listing of different projects</p>

      <SearchBar setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}