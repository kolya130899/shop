import { Formik, Field, Form, ErrorMessage } from "formik";
import { validate } from "../../features/validation";

export const FormWithComponent = props => {
  return (
    <div className="form-wrapper block">
      <Formik
        initialValues={{ email: "", name: "", phone: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <Form className="form">
            <h2 className="form__title page-title">{props.title}</h2>

            <div className="form__item">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Enter your email" />
              <ErrorMessage
                name="email"
                className="validation-error"
                component="div"
              />
            </div>

            <div className="form__item">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" placeholder="Enter your name" />
              <ErrorMessage
                name="name"
                className="validation-error"
                component="div"
              />
            </div>

            <div className="form__item">
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="tel" placeholder="Enter your phone" />
              <ErrorMessage
                name="phone"
                className="validation-error"
                component="div"
              />
            </div>

            <button disabled={isSubmitting} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
