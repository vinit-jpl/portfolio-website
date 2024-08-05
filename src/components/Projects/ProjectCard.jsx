import React, { useState } from 'react'
import {getImageUrl} from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project : {title, imgSrc, description, skills, demo, source} }) => {
  // const [isReadmore, setReadmore] = useState(true);

  // const toggleReadMore = () => {
  //   setReadmore(!isReadmore);
  // }
  
  return (
    <div className={styles.container}>
      <img
        className ={styles.image}
        src={getImageUrl(imgSrc)}
        alt={`image of ${title}`}
      />
      <h3 className ={styles.title}>{title}</h3>
      <p className ={styles.description}>
        {description}
        {/* {console.log(description.slice(0,20))} */}
        {/* {isReadmore ? description.slice(0, 100) : description}
        <span
            onClick={toggleReadMore}
            className={styles.readOrHide}
          >
          {isReadmore ? "...read more" : " show less"}
        </span> */}

      </p>
      <ul className ={styles.skills}>
        {
          skills.map((skill, id) => {
            return <li className ={styles.skill} key={id}>{skill}</li>
          })
        }
      </ul>
      <div className ={styles.links}>
        <li className ={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt='github-icon'
          />
          <a className={ styles.srcLink }href={source}>Source</a>
        </li>
      </div>
    </div>
  )
}

