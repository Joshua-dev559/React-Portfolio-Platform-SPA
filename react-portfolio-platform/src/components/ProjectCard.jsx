export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h2 className="card-title">{project.title}</h2>
      <p className="card-desc">{project.description}</p>
    </div>
  );
}