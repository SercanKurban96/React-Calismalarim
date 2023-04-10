import { useFormik } from "formik";

import validationSchema from "./validations";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <br />
      <br /> */}
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />

        {/* <span>Male</span>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
        checked={values.gender === "male"}
      />
      <span>Female</span>
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={values.gender === "female"}
      />
      <br />
      <br />
      <div>
        <input
          type="checkbox"
          name="hobbies"
          value="Visit Museums"
          onChange={handleChange}
        />
        Visit Museums
      </div>
      <div>
        <input
          type="checkbox"
          name="hobbies"
          value="Photography"
          onChange={handleChange}
        />
        Photography
      </div>
      <div>
        <input
          type="checkbox"
          name="hobbies"
          value="Cinema"
          onChange={handleChange}
        />
        Cinema
      </div>
      <br />
      <br />

      <select name="country" value={values.country} onChange={handleChange}>
        <option value="turkey">Turkey</option>
        <option value="england">England</option>
        <option value="usa">USA</option>
      </select> */}

        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
