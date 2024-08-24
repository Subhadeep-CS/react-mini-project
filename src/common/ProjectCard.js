import { useState } from "react";

const ProjectCard = ({ projectName, contributorName }) => {
  return (
    <div
      id="card"
      className="h-14 w-1/5 bg-cyan-200 mx-4 my-4 p-1 shadow-lg flex items-center justify-center"
    >
      <p>{projectName}</p>
    </div>
  );
};

export default ProjectCard;
