import React from 'react';
import { useFormik } from 'formik';

const SignUp = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name :'',
      email: '',
      password:''
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({values:""});
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
                id="name"
                name="name"
                type="name"
                placeholder='Enter your name'
                onChange={formik.handleChange}
                value={formik.values.name}
                required
            />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter your Email number'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input
                id="password"
                name="password"
                type="password"
                placeholder='Enter your password'
                onChange={formik.handleChange}
                value={formik.values.password}
                required
            />
        </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;