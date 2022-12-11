import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export default function ProjectList({projects, selected}) {

  const projectsView = () => {
    if (projects.lenght === 0 ) return null;
    if (selected === "All") return projects;
    return projects.filter(f => f.category === selected);
  }

  return (
    <div className="projectList">{
      projectsView().map(i => 
        <div className="project" key={nanoid()}>
          <img alt="" src={i.img}></img>
        </div>)
    }</div>
  )
}