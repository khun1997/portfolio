"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProjectDetail from "@/components/sections/projects/ProjectDetail";
import { projectsData } from "@/components/sections/projects/projectData";

const ProjectPage = () => {
  const params = useParams();
  const [project, setProject] = useState<null | (typeof projectsData)[0]>(null);

  useEffect(() => {
    if (params?.projectId) {
      const foundProject = projectsData.find(
        (p) => p.id === Number(params.projectId)
      );
      setProject(foundProject || null);
    }
  }, [params]);

  if (!project) return <div>Project not found</div>;

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
