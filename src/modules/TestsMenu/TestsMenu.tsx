import { NavLink } from 'react-router-dom';
import { Path } from '../../pages/constants/path';
import iconQA from '../../assets/icons/iconQA.png';
import './TestsMenu.scss';

export default function TestsMenu() {
  return (
    <div className="mainContainer">
      <section className="sectionConteinerDark">
        <div className="sectionContainer">
          <p>
            Как QA engineer ты можешь специализироваться в одной области или
            нескольких. Выбирай нужный раздел тренажеров IT Roast и прожаривай
            свою компетенцию{' '}
          </p>
          <NavLink to={Path.HOME}>
            <h2>QA manual</h2>
          </NavLink>
          <NavLink to={Path.HOME}>
            <h2>AQA Python</h2>
          </NavLink>
          <NavLink to={Path.HOME}>
            <h2>QA/AQA</h2>
            </NavLink>
          
        </div>
        <div className="sectionImgContainer">
          <img src={iconQA} alt="icon" />
        </div>
      </section>
    </div>
  );
}
