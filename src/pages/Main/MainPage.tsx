import React, { useEffect } from 'react';
import styles from './MainPage.module.scss';
// import { useAppDispatch } from '../../redux/store';
// import { getDataMainPage } from '../../redux/reducers/pagesDataReducer';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Banner from './Banner/Banner';
import Manual from './Manual/Manual';
import TestMenu from './TestMenu/TestMenu';
import LastSection from './LastSection/LastSection';
import Direction from './Direction/Direction';


// eslint-disable-next-line
export function MainPage() {
  // const dispatch = useAppDispatch();
  // const mainPageData = useAppSelector((state) => state.pagesData.mainPageData);

  useEffect(() => {
    // dispatch(getDataMainPage());
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Direction />
      <Banner />
      <Manual />
      <TestMenu />
      <LastSection />
      <Footer />
    </div>
  );
}
export default MainPage;
