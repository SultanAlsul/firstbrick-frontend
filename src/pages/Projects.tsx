import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.log("Error loading projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div>
      <h1>Projects</h1>

      {projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} style={{ border: "1px solid gray", marginBottom: 12, padding: 12 }}>
            <h3>{project.title}</h3>
            <p>Location: {project.location}</p>
            <p>Total Price: {project.totalPrice}</p>
            <p>Current Amount: {project.currentAmount}</p>
            <p>Minimum Investment: {project.minimumInvestment}</p>
            <p>Status: {project.status}</p>
          </div>
        ))
      )}
    </div>
  );
}