import styles from '../MainPage.module.scss';
import CommonButton from '../../../UI/CommonButton/CommonButton';

export function Banner() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.title}>
            <h1>
              Тренажеры <span className={styles.bold}>IT Roast</span>{' '}
              разработаны на основе тестовых заданий работодателей.
              <br /> Выполняя задания и зарабатывая баллы, ты найдешь работу
              мечты.
            </h1>
          </div>
          <CommonButton variant="primary">
            Продегустируй тестовое меню
          </CommonButton>
        </div>
      </div>
    </section>
  );
}
export default Banner;
