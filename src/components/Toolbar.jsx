import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className="toolbar">{filters.map(f =>
      <div className={f === selected ? "active filter" : "filter"} key={nanoid()} onClick={onSelectFilter}>{f}</div>
    )}
    </div>
  )

}