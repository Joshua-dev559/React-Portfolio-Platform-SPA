import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

test("renders project title", () => {
  render(
    <ProjectCard project={{ title: "Test Project", description: "Desc" }} />
  );

  expect(screen.getByText("Test Project")).toBeInTheDocument();
});