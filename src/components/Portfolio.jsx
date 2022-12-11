import React, {useState} from "react";
import PropTypes from "prop-types"
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import data from './data';

export default function Portfolio() {
  const [selected, setSelected] = useState("All");

  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const onSelectFilter = (evt) => {
    const value = evt.currentTarget.innerText;
    setSelected(prev => prev = value)
  }

  return (
    <>
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList projects={data} selected={selected}/>
    </>
  );
}