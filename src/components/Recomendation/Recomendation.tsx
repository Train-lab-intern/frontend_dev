import { CustomSlider } from '../CustomSlider/CustomSlider';
import RecomendationCard from '../RecomendationCard/RecomendationCard';
import './Recomendation.scss';

export default function Recomendation() {
  return (
    <section className="Recomendation">
      <div className="container">
        <div className="Recomendation-Title">
          Полезные материалы для прожарки знаний
        </div>
        <CustomSlider
          loop
          spaceBetween={64}
          pagination
          slidesPerView={1}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          slides={[1, 2, 3, 4, 5].map(() => (
            <RecomendationCard />
          ))}
          lightTheme
        />
      </div>
    </section>
  );
}
