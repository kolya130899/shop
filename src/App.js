import { Fragment } from "react";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

import "./scss/style.scss";
function App() {
  return (
    <Fragment>
      <Header />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
