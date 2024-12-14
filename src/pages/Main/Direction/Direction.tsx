import styles from '../MainPage.module.scss';
import iconQA from '../../../assets/icons/iconQA.png';
import iconPM from '../../../assets/icons/iconPM.png';
import iconUIUX from '../../../assets/icons/iconUIUX.png';
import iconBA from '../../../assets/icons/iconBA.png';

interface DirectionItemProps {
  src: string;
  alt: string;
  title: string;
}

const directionItems: DirectionItemProps[] = [
  { src: iconQA, alt: 'icon', title: 'QA' },
  { src: iconPM, alt: 'icon', title: 'Developer' },
  { src: iconBA, alt: 'icon', title: 'BA' },
  { src: iconUIUX, alt: 'icon', title: 'PM' },

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
            {directionItems.map((item) => (
              <div key={crypto.randomUUID()} className={styles.directionItem}>
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
