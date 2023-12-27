import React from 'react';
import styles from './MainPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getDataMainPage} from "../../redux/reducers/pagesDataReducer";
import {Header} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect} from "react";
import icon_001 from '../../assets/icons/icon_001.png'
import icon_002 from '../../assets/icons/icon_002.png'
import icon_003 from '../../assets/icons/icon_003.png'
import icon_004 from '../../assets/icons/icon_004.png'
import icon_005 from '../../assets/icons/icon_005.png'
import icon_manual_001 from '../../assets/icons/icon_manual_001.png'
import icon_manual_002 from '../../assets/icons/icon_manual_002.png'
import icon_manual_003 from '../../assets/icons/icon_manual_003.png'
import icon_manual_004 from '../../assets/icons/icon_manual_004.png'
import test_menu from '../../assets/img/test_menu.png'
import {CommonButton} from "../../components/CommonButton/CommonButton";
import {NavLink} from "react-router-dom";
import {Path} from "../../constants/path";

export const MainPage = () => {

  const dispatch = useAppDispatch()
  const mainPageData = useAppSelector(state => state.pagesData.mainPageData)

  useEffect(() => {
    dispatch(getDataMainPage())
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header/>
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.direction}>
            <div className={styles.title}>
              <h2>Прожарь свои навыки.</h2>
              <h2>Узнай слабые места.</h2>
              <h2>Доведи себя до готовности к новой должности</h2>
            </div>
            <div className={styles.directionList}>
              <div className={styles.directionItem}>
                <img src={icon_001} alt="icon"/>
                <h4>QA</h4>
              </div>
              <div className={styles.directionItem}>
                <img src={icon_002} alt="icon"/>
                <h4>Продакт менджмент</h4>
              </div>
              <div className={styles.directionItem}>
                <img src={icon_003} alt="icon"/>
                <h4>Дизайн UX/UI</h4>
              </div>
              <div className={styles.directionItem}>
                <img src={icon_004} alt="icon"/>
                <h4>Бизнес анализ </h4>
              </div>
              <div className={styles.directionItem}>
                <img src={icon_005} alt="icon"/>
                <h4>Python </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.title}>
              <h1>
                Тренажеры <span className={styles.bold}>IT Roast</span> разработаны на основе тестовых заданий
                работодателей.
                <br/> Выполняя задания и зарабатывая баллы, ты найдешь работу мечты.
              </h1>
            </div>
            <CommonButton variant={'primary'}>Продегустируй <br/> тестовое меню</CommonButton>
          </div>
        </div>
      </section>
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.manual}>
            <div className={styles.title}>
              <h2>Как это работает</h2>
            </div>
            <div className={styles.manualList}>
              <div className={styles.item}>
                <img src={icon_manual_001} alt="icon"/>
                <span>
                  1. Присоединяйся к IT Roast
                </span>
              </div>
              <div className={styles.item}>
                <img src={icon_manual_002} alt="icon"/>
                <span>
                  2. Выполняй задания и тренируйся
                </span>
              </div>
              <div className={styles.item}>
                <img src={icon_manual_003} alt="icon"/>
                <span>
                  3. Следи за статистикой и определи свой уровень  прожарки
                </span>
              </div>
              <div className={styles.item}>
                <img src={icon_manual_004} alt="icon"/>
                <span>
                  1. Поделись знаниями  и найди работу мечты
                </span>
              </div>
            </div>
            <NavLink to={Path.REGISTRATION}>
              <CommonButton variant={'primary'}>Регистрация</CommonButton>
            </NavLink>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionLight} ${styles.sectionTestMenu}`}>
        <div className={styles.container}>
          <div className={styles.testMenu}>
            <div className={styles.title}>
              <h2>Пробное меню</h2>
            </div>
            <div className={styles.testMenuList}>
              <div className={styles.item}>
                <h3 className={styles.title}>
                  SQL
                </h3>
                <span className={styles.text}>
                  Какой оператор позволяет создать таблицу?
                </span>
              </div>
              <div className={styles.item}>
                <h3 className={styles.title}>
                  SQL
                </h3>
                <span className={styles.text}>
                  Какой оператор позволяет создать таблицу?
                </span>
              </div>
            </div>
            <div className={styles.testMenuImgContainer}>
              <img src={test_menu} alt="test menu"/>
            </div>
            <div className={styles.title}>
              <h2>Устрой прожарку своей карьеры</h2>
              <div className={styles.subTitle}>
                <h2>Получи сертификат</h2>
                <NavLink to={Path.REGISTRATION}>
                  <CommonButton variant={'primary'}>Регистрация</CommonButton>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={`${styles.sectionDark} ${styles.sectionLast}`}>
        <span>Проверь насколько ты готов к
        <br/>карьерному росту</span>
        <h3>Узнай уровень своей
          <br/>прожарки</h3>
        <NavLink to={Path.REGISTRATION}>
          <CommonButton variant={'primary'} className={styles.button}>Регистрация</CommonButton>
        </NavLink>
      </section>
      <Footer mainPageData={mainPageData}/>
    </div>
  )
}