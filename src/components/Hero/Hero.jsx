import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinit !</h1>
        <p className={styles.description}>
          Hi, I'm Vinit Jogi, a Hyperautomation Engineer at Jio Platforms Ltd. 
          I specialize in Node.js, Ansible, Bash scripting, and Python.
          My expertise lies in backend web development.
        </p>
        <a href="vinit.jpl@gmail.com"  className={styles.contactBtn}>Contact Me</a>
      </div>

      <img className={styles.heroImg} src={getImageUrl("hero/heroImageMan.png")} alt="Hero-Image"/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
}

export default Hero;
