import styled from "../views/Form.module.css";
import { useState } from "react";
import validation from "./validation";


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
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
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
    <div>
      <div>
        <p className={styled.navv}>Register to enter the page!</p>
      </div>


      <form onSubmit={submitHandler} style={{ color: "green" }} className={styled.formP}>

        <h2 className={styled.login}>Login</h2>

        <div className={styled.fgmail}>
          {/* <label htmlFor="">Email:</label> */}
          <input
            placeholder="Enter your email"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          // className={errors.email ? style.error : style.success}
          />
        </div>

        <div className={styled.fpassword}>
          {/* <label htmlFor="">Password:</label> */}
          <input
            placeholder="Enter your password"
            type="Password"
            name="password"
              value={userData.password}
            onChange={handleChange}
          />
        </div>

        <button className={styled.fButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
