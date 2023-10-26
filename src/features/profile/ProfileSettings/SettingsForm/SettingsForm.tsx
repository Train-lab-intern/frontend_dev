import React, {useState} from 'react';
import styles from './SettingsForm.module.scss'
import {SubmitHandler, useForm } from "react-hook-form";

type DataType = {
  userName?: string
  login?: string
  avatar?: any
  level?: string
  direction?: string
}

type InputsType = {
  userName: string
  login: string
  avatar: string
  level: string
  direction: string
}

type PropsType = {
  changeAvatar: (img: any) => void
  saveNewData: (data: DataType) => void
}

export const SettingsForm: React.FC<PropsType> = ({changeAvatar, saveNewData}) => {

  const [imgName, setImgName] = useState<null | string>(null)

  const {
    register, handleSubmit, formState, watch, reset
  } = useForm<InputsType>()


  const onSubmit: SubmitHandler<InputsType> = (data) => {
    if(data['avatar'][0]){
      const file = data['avatar'][0]
      // @ts-ignore
      let blob = new Blob([file], {type: file.type})
      changeAvatar(URL.createObjectURL(blob))
      // @ts-ignore
      setImgName(data['avatar'][0].name)
    }
    saveNewData(data)
    reset()
  }

  const handleResetForm = () => {
    reset()
    setImgName('')
  }

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if(watch('avatar')?.length){
        // @ts-ignore
        setImgName(watch('avatar')[0].name)
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <input
          className={styles.inputText}
          type={'text'}
          placeholder={'Введите ваше имя'}
          {...register('userName')}
        />
      </label>
      <label className={styles.label}>
        <input
          className={styles.inputText}
          type={'text'}
          placeholder={'Введите ваш логин'}
          {...register('login')}
        />
      </label>
      <label className={styles.label}>
        <input
          className={styles.inputFile}
          type='file' {...register('avatar')}
        />
        <span className={styles.customInputFile}>
          <span className={styles.loadFileButton}>Загрузить&nbsp;фото</span>
          <span className={styles.nameFile}>{imgName}</span>
        </span>
      </label>
      <label className={styles.label}>
        <select defaultValue={''} className={styles.select} {...register('level')}>
          <option disabled value={''}>level</option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
        </select>
      </label>
      <label className={styles.label}>
        <select defaultValue={''} className={styles.select} {...register('direction')}>
          <option disabled value={''} >direction</option>
          <option value="Java">Java</option>
          <option value="QA">QA</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
      </label>
      <div className={styles.buttons}>
        <button type="submit">Сохранить&nbsp;изменения</button>
        <button type="button" onClick={handleResetForm}>Очистить</button>
      </div>
    </form>
  );
}