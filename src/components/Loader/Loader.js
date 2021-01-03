import React from "react";

import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    <svg
      className={styles.loading}
      version="1.1"
      id="loading"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1080 1080"
    >
      <g>
        <path
          className={styles.box0}
          d="M503.3,528H337.7c-13.1,0-23.7-10.6-23.7-23.7V338.7c0-13.1,10.6-23.7,23.7-23.7h165.6
     c13.1,0,23.7,10.6,23.7,23.7v165.6C527,517.4,516.4,528,503.3,528z"
        />
      </g>
      <g>
        <path
          className={styles.box1}
          d="M503.3,767H337.7c-13.1,0-23.7-10.6-23.7-23.7V577.7c0-13.1,10.6-23.7,23.7-23.7h165.6
     c13.1,0,23.7,10.6,23.7,23.7v165.6C527,756.4,516.4,767,503.3,767z"
        />
      </g>
      <g>
        <path
          className={styles.box2}
          d="M743.3,528H577.7c-13.1,0-23.7-10.6-23.7-23.7V338.7c0-13.1,10.6-23.7,23.7-23.7h165.6
     c13.1,0,23.7,10.6,23.7,23.7v165.6C767,517.4,756.4,528,743.3,528z"
        />
      </g>
    </svg>
  );
};

export default Loader;
