import styled from "../views/Form.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "Email vacío" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email inválido" });
  }
};

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    username:"",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username:"",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value }); 
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("LOGIN EXITOSO");
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
            value={form.email}
            onChange={handleChange}
          // className={errors.email ? style.error : style.success}
          />
        </div>

        {/* <div className={styled.fusername}>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div> */}

        <div className={styled.fpassword}>
          {/* <label htmlFor="">Password:</label> */}
          <input
            placeholder="Enter your password"
            type="Password"
            name="password"
              value={form.password}
            onChange={handleChange}
          />
        </div>

        <Link to="/home">
        <button className={styled.fButton} type="submit">
          Login
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
