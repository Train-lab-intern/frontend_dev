import './RegisterPage.scss';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserAuthorization from '../../modules/Authorization/Authorization';
import imageCard from '../../assets/img/sparks.png';

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="main">
        <img
          src={imageCard}
          alt="картинка искрами"
          className="imageCard"
        />
        <UserAuthorization  register/>
      </main>
      <Footer />
    </>
  );
}
