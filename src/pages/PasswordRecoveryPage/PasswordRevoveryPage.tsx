import { Fragment } from "react/jsx-runtime";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import PasswordRecovery from "../../modules/PasswordRecovery/PasswordRecovery";

export default function PasswordRecoveryPage () {
  return (
    <Fragment>
      <Header/>
      <PasswordRecovery />
      <Footer mainPageData={undefined}/>
    </Fragment>
  )
}