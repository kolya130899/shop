import { Fragment } from "react";
import { Footer } from "./components/Footer";
// import { FormWithComponent } from "./components/FormWithComponent";
import { FormWithYupValidation } from "./components/FormWithYupValidation";
// import { FormWithHook } from "./components/FormWithHook";
import { Header } from "./components/Header";

import "./scss/style.scss";
function App() {
  return (
    <Fragment>
      <Header />
      <FormWithYupValidation title="Yup validation Form" />
      {/* <FormWithComponent title="Form" /> */}
      {/* <FormWithHook /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
