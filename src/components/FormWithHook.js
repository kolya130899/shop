import { useFormik } from "formik";
import { validate } from "../features/validation";

export const FormWithHook = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-wrapper block">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2 className="form__title page-title">Form</h2>

        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="validation-error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="validation-error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form__item">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="validation-error">{formik.errors.phone}</div>
          ) : null}
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
