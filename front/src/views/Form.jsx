import styled from "../views/Form.module.css";
import { useState } from "react";
import validation from "../views/validaciones/validation";

// const validate = (form, setErrors, errors) => {
//   if (!form.email) setErrors({ ...errors, email: "Email vacío" });
//   else {
//     if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{3})+$/.test(form.email))
//       setErrors({ ...errors, email: "" });
//     else setErrors({ ...errors, email: "Email inválido" });
//   }
// };

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styled.conteiner11}>
      <p className={styled.navv}>Register to enter the page!</p>

      <form
        onSubmit={submitHandler}
        // style={{ color: "red" }}
        className={styled.formP}
      >
        <h2 className={styled.login}>Log in</h2>

        <div className={styled.fgmail}>
          {/* <label htmlFor="">Email</label> */}
          <input
            placeholder="Enter your email"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            // className={errors.email ? style.error : style.success}
          />
          <p className={styled.p}> {errors.email} </p>
        </div>

        <div className={styled.fpassword}>
          {/* <label htmlFor="">Password</label> */}
          <input
            placeholder="Enter your password"
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {/* <p style={{ color: "red" }}>{errors.password}</p> */}
        </div>

        <button className={styled.fButton} type="submit">
          Login
        </button>
      </form>

      <p className={styled.footer}>
        Credenciales: gabriel@gmail.com - mipass123
      </p>
    </div>
  );
};

export default Form;
