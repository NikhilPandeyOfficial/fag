import React from "react";

import styles from "./FilterCard.module.css";

import { ExpandLess as ExpandLessIcon } from "@material-ui/icons";

const filterCard = (props) => {
  let options = props.options.map((id, ind) => {
    let newId = `${id} ${props.name}`.split(" ").join("_");
    let cardName = `${props.name} Radio`.split(" ").join("_");
    return (
      <React.Fragment key={`${props.name}${ind}`}>
        <input
          type="radio"
          id={newId}
          name={cardName}
          key={`input${props.name}${ind}`}
        />
        <label
          htmlFor={newId}
          className={styles.filterCapsule}
          key={`label${props.name}${ind}`}
        >
          {id}
        </label>
      </React.Fragment>
    );
  });

  return (
    <details>
      <summary onClick={props.close}>
        <div className={styles.filterHead}>
          <div className={styles.filterName}>{props.name}</div>
          <div className={styles.collapseIconContainer}>
            <ExpandLessIcon className={styles.collapseIcon} />
          </div>
        </div>
      </summary>
      <div className={styles.filterContainer}>{options}</div>
    </details>
  );
};

export default filterCard;
