import './UserPage.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { getDataMainPage } from '../../redux/reducers/pagesDataReducer';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserInfo from './UserInfo/UserInfo';
import Recomendation from '../../components/Recomendation/Recomendation';
import UserWelcome from './UserWelcome/UserWelcome';
import UserResults from './UserResults/UserResults';

export default function UserPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataMainPage());
  }, []);

  return (
    <>
      <Header />
      <UserInfo />
      <UserWelcome />
      <UserResults />
      <Recomendation />
      <Footer />
    </>
  );
}
