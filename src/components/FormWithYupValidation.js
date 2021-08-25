import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormWithYupValidation = props => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("The field is required")
      .email("Not email format"),
    name: Yup.string().required("The field is required"),
    phone: Yup.string()
      .required("The field is required")
      .min(10, "The phone is too short")
      .max(12, "The phone is too long")
      .matches(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
        "Not phone format"
      ),
  });

  return (
    <div className="form-wrapper block">
      <Formik
        initialValues={{ email: "", name: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
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
              <Field
                name="phone"
                type="tel"
                placeholder="Enter your phone"
                inputMode="numeric"
              />
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
