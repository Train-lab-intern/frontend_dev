import './AllTests.scss';
import iconQAWhite from '../../assets/icons/iconQAWhite.png';
import iconTest1 from '../../assets/icons/icon_test1.png';

export default function AllTests() {
  return (
    <div className="mainContainerTests">
      <section className="sectionDark">
        <div className="sectionDarkContainer">
          <div className="sectionImgContainerTests">
            <img src={iconQAWhite} alt="icon" />
          </div>
          <div className="sectionContainerTests">
            <h2>Тест</h2>
            <p>QA manual</p>
          </div>
        </div>
      </section>
      <div className="containerTest">
        <div className="question">
          <h2>10. В чем отличия между глобальной и локальной переменной? </h2>
          <p>один вариант</p>
        </div>
        <div className="answersAndImage">
          <form>
            <div className="answers">
              <label htmlFor="giveAnswer">
                <input type="radio" name="giveAnswer" /> Отличий нет
              </label>
              <label htmlFor="giveAnswer">
                <input type="radio" name="giveAnswer" /> Локальные видно везде,
                глобальные только внутри функций
              </label>
              <label htmlFor="giveAnswer">
                <input type="radio" name="giveAnswer" /> Глобальные можно
                переопределить, локальные нельзя
              </label>
              <label htmlFor="giveAnswer">
                <input type="radio" name="giveAnswer" /> Глобальные можно
                переопределить, локальные нельзя
              </label>
            </div>
            <div className="btn">
              <button type="submit">Закончить тест</button>
              <button type="submit">Следующий вопрос </button>
              <button type="submit">Начать заново</button>
            </div>
          </form>
          <div className="image">
            <img src={iconTest1} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
