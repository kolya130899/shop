import { Fragment } from "react";
import { Header } from "./components/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Beers } from "./components/Beers/Beers";
import { FormWithYupValidation } from "./components/Form/FormWithYupValidation";
import { Footer } from "./components/Footer";
// import { FormWithComponent } from "./components/Form/FormWithComponent";
// import { FormWithHook } from "./components/Form/FormWithHook";

import "./scss/style.scss";
import { useFetchData } from "./hooks/useFetchData";
function App() {
  const URL = process.env.REACT_APP_API_URL;
  const beers = useFetchData(URL);

  return (
    <Fragment>
      <Header />
      <Catalog {...{ beers }} />
      <Beers {...{ beers }} />
      <FormWithYupValidation title="Yup validation Form" />
      {/* <FormWithComponent title="Form" /> */}
      {/* <FormWithHook /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
