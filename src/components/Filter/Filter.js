import React from "react";

import FilterCard from "../FilterCard/FilterCard";

const filter = (props) => {
  return (
    <React.Fragment>
      {/* Gender */}
      <FilterCard
        close={props.close}
        name={"gender"}
        options={["male", "female"]}
      ></FilterCard>

      {/* Age */}
      <FilterCard
        close={props.close}
        name={"age"}
        options={["child", "young adult", "adult", "old"]}
      ></FilterCard>

      {/* Ethnicity */}
      <FilterCard
        close={props.close}
        name={"ethnicity"}
        options={["asian", "black", "latino", "white"]}
      ></FilterCard>

      {/* Hair color */}
      <FilterCard
        close={props.close}
        name="hair color"
        options={["black", "blonde", "brown", "gray"]}
      ></FilterCard>

      {/* Eye Color */}
      <FilterCard
        close={props.close}
        name={"eye color"}
        options={["black", "blue", "brown", "green"]}
      ></FilterCard>

      {/* Facial Hair */}
      <FilterCard
        close={props.close}
        name={"facial hair"}
        options={["beard", "no beard"]}
      ></FilterCard>
    </React.Fragment>
  );
};

export default filter;
