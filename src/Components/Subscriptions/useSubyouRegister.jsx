import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSubyouRegister = () => {
const Navigate =useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const validateEmail = () => {
    return /\S+@\S+\S+/.test(email);
  };

  const passwordValidate = (password) => {
    return password.length >= 8;
  };

  const clearError = () => {
    setError({});
  };

  const handleLogout = () => {
    localStorage.removeItem("registeredEmail");
    localStorage.removeItem("registeredPassword");
    console.log("User logged out");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formValid = true;
    const updateError = {
      firstName: firstName ? "" : "Iltimos Ismingizni kiriting",
      lastName: lastName ? "" : "Iltimos Familyangizni kiriting",
      email: validateEmail(email) ? "" : "Xato elektron pochta kiritingiz",
      password: passwordValidate(password)
        ? ""
        : "Parol kamida 8 ta belgidan iborat bo`lishi kerak",
      confirmPassword: password === confirmPassword ? "" : "Parollar mos kelmadi",
    };

    Object.keys(updateError).forEach((key) => {
      if (updateError[key]) {
        formValid = false;
      }
    });

    if (!formValid) {
      setError(updateError);
      return;
    }

    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError({});

    console.log("Yuborildi");
    Navigate('/'); // Redirect to the home route
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    clearError();
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    handleFirstNameChange: (event) => {
      setFirstName(event.target.value);
      setError({ ...error, firstName: "" });
    },
    handleLastNameChange: (event) => {
      setLastName(event.target.value);
      setError({ ...error, lastName: "" });
    },
    handleEmailChange: (event) => {
      setEmail(event.target.value);
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value);
      setError({ ...error, password: "" });
    },
    handleConfirmPasswordChange: (event) => {
      setConfirmPassword(event.target.value);
      setError({ ...error, confirmPassword: "" });
    },
    clearError,
    handleSubmit,
    handleLogout,
    handleReset,
  };
};

export default useSubyouRegister;
