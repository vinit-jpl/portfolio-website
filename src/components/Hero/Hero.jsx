import React from 'react';
import styles from './Hero.module.css';
import Typewriter from 'typewriter-effect';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinit !</h1>

        {/* <p className={styles.description}>
          Hi, I'm Vinit Jogi, a Hyperautomation Engineer at Jio Platforms Ltd. 
          I specialize in backend web development using Nodejs, also have hands on experience on 
          working with Ansible and Shell scripting.
        </p> */}
        <div className={styles.description}>
          <Typewriter className= {styles.description}
            options={{
              strings: [
                "Hi, I'm Vinit Jogi, a Hyperautomation Engineer at Jio Platforms Ltd. I specialize in backend web development using Nodejs. I also have hands-on experience working with Ansible and Shell scripting."
              ],
              autoStart: true,
              loop: false,
              delay: 40,
              deleteSpeed: Infinity,
            }}
          />
        </div>
        <a href="mailto:vinit.jpl@gmail.com"  className={styles.contactBtn}>Contact Me</a>
      </div>

      <img className={styles.heroImg} src={getImageUrl("hero/heroImageMan.png")} alt="Hero-Image"/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
}
