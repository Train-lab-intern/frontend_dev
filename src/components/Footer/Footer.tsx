import styles from "./Footer.module.scss";
import React from "react";
import logo from '../../assets/img/logo_footer.png'
import {NavLink} from "react-router-dom";
import {githubIcon} from "../../assets/icons/githubIcon";
import {linkedinIcon} from "../../assets/icons/linkedinIcon";

type PropsType = {
  mainPageData: any;
}

export const Footer: React.FC<PropsType> = () => {


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <NavLink to={''}> О нас</NavLink>
              </li>
              <li>
                <NavLink to={''}>Продегустируй бесплатно</NavLink>
              </li>
              <li>
                <NavLink to={''}>Меню тестов</NavLink>
              </li>
              <li>
                <NavLink to={''}>Обратная связь</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.search}>
            <span>Поиск по сайту</span>
            <label>
              <input type="text" placeholder="введите текст "/>
            </label>
          </div>
          <div className={styles.links}>
            <div className={styles.iconLinks}>
              <a href="">
                {githubIcon}
              </a>
              <a href=''>
                {linkedinIcon}
              </a>
            </div>
            <div className={styles.mail}>
              <a href="mailto:train-lab@gmail.com">train-lab@gmail.com</a>
            </div>
          </div>
          <div className={styles.info}>
            <span>© 2023 ООО “ХХХХХХХХ” </span>
            <p>
              Все права защищены. Любое использование либо копирование материалов и (или) подборки материалов сайта,
              элементов дизайна и оформления допускается лишь с письменного разрешения правообладателя и только со
              ссылкой на источник: URL
            </p>
          </div>
        </div>
      </div>
    </footer>
    // <div className={styles.footer}>
    //   <Container>
    //     <Row>
    //       <Col md="3">
    //         <div className={styles.right_block}>
    //           <a href="mailto:train.lab@gmail.com">
    //             <div className={styles.email}>train.lab@gmail.com</div>
    //           </a>
    //
    //           <div className={`${styles.icons} flex flex-row `}>
    //             <a href="https://www.linkedin.com/company/train-lab-interns/mycompany/" target='_blank'>
    //               <img src={linkedin} alt="linkedin"/>
    //             </a>
    //             <a href="https://github.com/Train-lab-intern"><img src={github} alt="github"/></a>
    //           </div>
    //         </div>
    //       </Col>
    //
    //
    //       <Col md="6">
    //         <p className={styles.rights}> Все права защищены. Любое использование либо копирование
    //           материалов
    //           и (или) подборки материалов сайта, элементов дизайна и оформления
    //           допускается лишь с письменного разрешения правообладателя и только
    //           со ссылкой на источник: URL</p>
    //       </Col>
    //
    //
    //       <Col md="3">
    //         <div className={styles.right_block}>
    //           <a href="src/components/Footer/Footer#" className={styles.tooltip}
    //              data-tooltip="здесь будет переход на страницу о защите персональных данных">
    //             <div>Персональные данные</div>
    //           </a>
    //           <div>{mainPageData ? mainPageData['1.9'] : ''}</div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}