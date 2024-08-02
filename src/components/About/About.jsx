import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt='man-sitting with laptop'
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt='cursor-icon'
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Hyperautomation Engineer</h3>
                            <p>
                                I'm working as a Hyperautomation Engineer for JIO Platforms Ltd.
                                I am currently working on a project that automatically generates a report on the health of MySQL and other databases.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt='server-icon'
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p >
                                I have experience in developing fast and optimised backend systems and API's.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cameraIcon.png")}
                            alt='camera-icon'
                        />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.photoDesc}>Landscape and Portrait Photographer</h3>
                            <p className={styles.photoDesc}>
                                Apart from my technical interests, I am also a photography enthusiast.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}
