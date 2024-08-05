import React, { useState } from 'react';
import styles from './ProfileSettings.module.scss';
import Header from '../../components/Header/Header';
import { SettingsForm } from './SettingsForm/SettingsForm';
import { iconProfile } from '../../assets/icons/iconProfile';
import { iconSettings } from '../../assets/icons/iconSettings';
import { Footer } from '../../components/Footer/Footer';

type DataType = {
  userName?: string;
  login?: string;
  avatar?: string;
  level?: string;
  direction?: string;
};

export default function ProfileSettings() {
  const [img, setImg] = useState<string>('');
  const [data, setData] = useState<DataType>({});
  const [showSettings, setShowSettings] = useState(false);

  const handleChangeAvatar = (newImg: string) => {
    setImg(newImg);
  };
  const handleSaveNewData = (newData: DataType) => {
    setData(newData);
    setShowSettings(!showSettings);
  };

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.userDataWrapper}>
            <button
              type="button"
              className={styles.showSettings}
              onClick={handleShowSettings}
            >
              {iconSettings}
            </button>
            <div className={styles.avatar}>
              {img ? (
                <img
                  src={img}
                  alt="img"
                  style={{ height: '200px', width: 'fit-content' }}
                />
              ) : (
                <div className={styles.iconProfile}>{iconProfile}</div>
              )}
            </div>
            <span className={styles.dataItem}>
              {'Имя пользователя: '}
              <span>{data.userName ? data.userName : '-----'}</span>
            </span>
            <span className={styles.dataItem}>
              {'Логин: '}
              <span>{data.login ? data.login : '-----'}</span>
            </span>
            <span className={styles.dataItem}>
              {'Уровень пользователя: '}
              <span>{data.level ? data.level : '-----'}</span>
            </span>
            <span className={styles.dataItem}>
              {'Направление в IT: '}
              <span>{data.direction ? data.direction : '-----'}</span>
            </span>
          </div>
          <div
            className={`${styles.formWrapper} ${showSettings ? styles.showForm : ''}`}
          >
            <SettingsForm
              changeAvatar={handleChangeAvatar}
              saveNewData={handleSaveNewData}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}
