export const validate = values => {
  let errors = {};

  // EMAIL VALIDATION
  if (!values.email) {
    errors.email = "Shouldn't be empty!";
  } else {
    let emailPattern = /[a-zA-Z0-9]+@+[a-z0-9]+.+[a-z0-9]/;
    if (!emailPattern.test(values.email)) {
      errors.email = "Not email format!";
    }
  }

  // NAME VALIDATION
  if (!values.name) {
    errors.name = "Shouldn't be empty!";
  } else {
    let namePattern = /[a-zA-Z]\s[a-zA-Z]/;
    if (!namePattern.test(values.name)) {
      errors.name = "Not name format!";
    }
  }

  // PHONE VALIDATION
  if (!values.phone) {
    errors.phone = "Shouldn't be empty!";
  } else {
    let phonePattern = /\d{10}/;
    if (!phonePattern.test(values.phone)) {
      errors.phone = "Not phone format!";
    }
  }

  return errors;
};
