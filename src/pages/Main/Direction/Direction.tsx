import React from 'react';
import styles from '../MainPage.module.scss';
import icon001 from '../../../assets/icons/icon_001.png';
import icon002 from '../../../assets/icons/icon_002.png';
import icon003 from '../../../assets/icons/icon_003.png';
import icon004 from '../../../assets/icons/icon_004.png';
import icon005 from '../../../assets/icons/icon_005.png';

interface DirectionItemProps {
  src: string;
  alt: string;
  title: string;
}

const directionItems: DirectionItemProps[] = [
  { src: icon001, alt: 'icon', title: 'QA' },
  { src: icon002, alt: 'icon', title: 'Продакт менджмент' },
  { src: icon003, alt: 'icon', title: 'Дизайн UX/UI' },
  { src: icon004, alt: 'icon', title: 'Бизнес анализ' },
  { src: icon005, alt: 'icon', title: 'Python' },
];
export function Direction() {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.container}>
        <div className={styles.direction}>
          <div className={styles.title}>
            <h2>Прожарь свои навыки.</h2>
            <h2>Узнай слабые места.</h2>
            <h2>Доведи себя до готовности к новой должности</h2>
          </div>
          <div className={styles.directionList}>
            {directionItems.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className={styles.directionItem}>
                <img src={item.src} alt={item.alt} />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Direction;
