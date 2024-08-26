import './LoginPage.scss';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserAuthorization from '../../modules/Authorization/Authorization';
import imageCard from '../../assets/img/author.png';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="main">
        <img
          src={imageCard}
          alt="картинка с сине-голубым оттенком"
          className="imageCard"
        />
        <UserAuthorization />
      </main>
      <Footer />
    </>
  );
}
