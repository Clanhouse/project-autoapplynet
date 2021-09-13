export type Values = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export const validate = (values: Values) => {
  const errors: Errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters long";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password must by equal";
  }

  return errors;
};
