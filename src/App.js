import { Fragment } from "react";
import { Footer } from "./components/Footer";
import { FormWithYupValidation } from "./components/FormWithYupValidation";
// import { FormWithComponent } from "./components/FormWithComponent";
// import { FormWithHook } from "./components/FormWithHook";
import { Header } from "./components/Header";
import { Beers } from "./components/Beers";

import "./scss/style.scss";
function App() {
  return (
    <Fragment>
      <Header />
      <Beers />
      <FormWithYupValidation title="Yup validation Form" />
      {/* <FormWithComponent title="Form" /> */}
      {/* <FormWithHook /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
