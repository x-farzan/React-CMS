import React from "react";
import ProjectItem from "./ProjectItem";
import image from "../assets/image.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In iusto
        corrupti quae quas neque inventore repudiandae! Aliquid voluptas, nulla
        hic cupiditate asperiores sint similique, nesciunt impedit aliquam fuga
        placeat provident.
      </p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem img={image} title={"App 1"} />
        <ProjectItem img={image} title={"App 2"} />
        <ProjectItem img={image} title={"App 3"} />
        <ProjectItem img={image} title={"App 4"} />
      </div>
    </div>
  );
};

export default Project;
