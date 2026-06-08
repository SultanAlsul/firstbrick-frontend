import api from "./client";

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};