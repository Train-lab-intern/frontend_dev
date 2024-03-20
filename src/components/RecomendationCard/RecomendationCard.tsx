import { IconUserLevel } from "../../assets/icons/icon_user_level"
import "./Recomendation.scss"

export const RecomendationCard = () => {
  return (
    <div className='RecomendationCard'>
      <div className='RecomendationCard-Title'>Java без опыта!</div>
      <div className='RecomendationCard-Description'>
        <div>В Java-программирование можно прийти практически из любой сферы: это подтверждают результаты опроса. Для начала мы решили узнать, чем наши</div>
        <div className='RecomendationCard-Icon'>{IconUserLevel}</div>
      </div>
      <div className='RecomendationCard-Time'>
        <div>10 дек 2023</div>
        <div>Время чтения 10мин</div>
      </div>
    </div>
  )
}