import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    id: "1",
    year: "2020",
    title: "Convergence Business Systems",
    duration: "1 year",
    details: "will write detail soon, stay tuned .... ",
  },
  {
    id: "1",
    year: "2021",
    title: "OptimusFox",
    duration: "1 year",
    details: "will write detail soon, stay tuned .... ",
  },
  {
    id: "1",
    year: "2022",
    title: "Developers Studio",
    duration: "1 year",
    details: "will write detail soon, stay tuned .... ",
  },
  {
    id: "1",
    year: "2023",
    title: "TekHQS",
    duration: "Presently working",
    details: "will write detail soon, stay tuned .... ",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#081b53]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Work;
