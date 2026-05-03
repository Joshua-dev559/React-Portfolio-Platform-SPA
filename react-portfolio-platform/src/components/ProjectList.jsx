import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="grid-layout">
      {projects.length > 0 ? (
        projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))
      ) : (
        <p className="empty">No projects available</p>
      )}
    </div>
  );
}