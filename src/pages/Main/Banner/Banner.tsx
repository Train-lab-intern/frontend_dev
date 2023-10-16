import styles from './Banner.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";
import {Path} from "../../../constants/path";

type PropsType = {
  title: string
  text: string
};

const Banner: React.FC<PropsType> = ({title, text}) => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h3 className={styles.title}>{title ? title : ''}</h3>
              <span className={styles.text}>{text ? text : ''}</span>
            </div>
            <NavLink to={Path.REGISTRATION} className={styles.link}>
              Начать&nbsp;путь
            </NavLink>
          </div>
        </div>
      </div>
  );
}

export default Banner;