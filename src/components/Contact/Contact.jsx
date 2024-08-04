import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img
                    src={getImageUrl("contact/emailIcon.png")}
                    alt='email-icon'
                />
                <a href='mailto:vinit.jpl@gmail.com'>vinit.jpl@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt='linkedin-icon'
                />
                <a href='https://www.linkedin.com/in/vinit-jogi-7155a4197'>Connect on linkedin</a>
            </li>

            <li className={styles.link}>
                <img
                    src={getImageUrl("contact/githubIcon.png")}
                    alt='email-icon'
                />
                <a href='https://github.com/vinit-jpl'>Github</a>
            </li>
        </ul>
    </footer>
  )
}
