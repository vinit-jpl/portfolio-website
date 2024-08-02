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
          I specialize in backend web development using Nodejs, also have hands on experience on 
          working with Ansible and Shell scripting.
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
