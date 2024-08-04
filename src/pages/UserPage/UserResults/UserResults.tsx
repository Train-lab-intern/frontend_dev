import { CustomSlider } from '../../../components/CustomSlider/CustomSlider';
import TestCard from '../../../components/TestCard/TestCard';
import './UserResults.scss';

export default function UserResults() {
  return (
    <section className="Tests">
      <div className="container SwiperWrapper">
        <CustomSlider
          pagination
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          slides={[1, 2, 3, 4].map(() => (
            <TestCard />
          ))}
        />
      </div>
    </section>
  );
}
