import React, {useState} from 'react';
import styles from './ProfileSettings.module.scss'
import {Header} from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import {SettingsForm} from "./SettingsForm/SettingsForm";
import {iconProfile} from "../../../assets/icons/iconProfile";

type DataType = {
  userName?: string
  login?: string
  avatar?: any
  level?: string
  direction?: string
}

export const ProfileSettings = () => {

  const [img, setImg] = useState<any>(null)
  const [data, setData] = useState<DataType>({})

  const handleChangeAvatar = (img: any) => {
    setImg(img)
  }
  const handleSaveNewData = (data: DataType) => {
    setData(data)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.userDataWrapper}>
            <div className={styles.avatar}>
              {img ?
                <img src={img} alt="img" style={{height: '200px', width: 'fit-content'}}/> :
                <div className={styles.iconProfile}>{iconProfile}</div>
              }
            </div>
            <span className={styles.dataItem}>{'Имя пользователя: '}<span>{!!data.userName ? data.userName : '-----'}</span></span>
            <span className={styles.dataItem}>{'Логин: '}<span>{!!data.login ? data.login : '-----'}</span></span>
            <span className={styles.dataItem}>{'Уровень пользователя: '}<span>{!!data.level ? data.level : '-----'}</span></span>
            <span className={styles.dataItem}>{'Направление в IT: '}<span>{!!data.direction ? data.direction : '-----'}</span></span>
          </div>
          <div className={styles.formWrapper}>
            <SettingsForm changeAvatar={handleChangeAvatar} saveNewData={handleSaveNewData} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer mainPageData={[]}/>
      </div>

    </div>
  );
}