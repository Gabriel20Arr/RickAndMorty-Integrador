// username
const validation = (userData, errors, setErrors) => {
  if (!userData.email) setErrors({ ...errors, email: "Required field" });
  else if (userData.email.length > 35)
    setErrors({ ...errors, email: "No puede superar los 35 caracteres" });
  else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
    setErrors({ ...errors, email: "Invalid email" });
  } else {
    setErrors({ ...errors, email: "" });
  }

  // if (!userData.password)
  //   setErrors({ ...errors, password: "Por favor completa este campo" });
  // else if (userData.password.length < 6 || userData.password.length > 10) {
  //   setErrors({ ...errors, password: "Longitud de password de 6 to 10" });
  // } else if (!/\d/.test(userData.password)) {
  //   setErrors({ ...errors, password: "Debe contener al menos un número" });
  // } else {
  //   setErrors({ ...errors, password: "" });
  // }
};

export default validation;
