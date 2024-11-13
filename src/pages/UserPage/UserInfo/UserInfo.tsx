import './UserInfo.scss';
import iconUserLevel from '../../../assets/icons/icon_user_level';
// import UserPhoto from '../../../assets/img/userImg.png';
import UserPhoto from '../../../assets/img/userImg.png';

export default function UserInfo() {
  return (
    <section className="UserInfo">
      <div className="container">
        <div className="UserPhoto">
          <img src={UserPhoto} alt="userPhoto" />
        </div>
        <div className="UserDescription">
          <div className="UserDescription-name">Алена Павлова</div>
          <ul className="UserDescription-shortResults">
            {[1, 2, 3].map((el) => (
              <li key={el}>
                <div className="UserDescription-shortResults-speciality">
                  QA Manual
                </div>
                <div className="UserDescription-shortResults-level">
                  Уровень прожарки
                </div>
                <div className="UserDescription-shortResults-levelIcon">
                  {iconUserLevel}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
