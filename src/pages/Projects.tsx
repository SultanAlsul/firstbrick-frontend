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
        console.log("Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Projects</h1>

      {projects.length === 0 && <p>No projects available</p>}

      {projects.map((project) => (
        <div key={project.id} style={{ border: "1px solid white", margin: 10 }}>
          <h3>{project.title}</h3>
          <p>Location: {project.location}</p>
          <p>Total: {project.totalPrice}</p>
          <p>Raised: {project.currentAmount}</p>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
}