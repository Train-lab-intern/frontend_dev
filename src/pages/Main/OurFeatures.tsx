import React from 'react';
import styles from './OurFeatures.module.scss'
import {NavLink} from "react-router-dom";


type PropsType = {
  items: string[];
};

const OurFeatures: React.FC<PropsType> = ({items}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.list}>
            {items && items.map((item, i) => (
              <div className={styles.item}>
                <div className={i % 2 === 0 ? styles.block_2 : styles.block_1}>
                  <span>{item}</span>
                </div>
              </div>
            ))
            }
          </div>
          <NavLink to={''} className={styles.link}>
            Задай нам вопрос
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;