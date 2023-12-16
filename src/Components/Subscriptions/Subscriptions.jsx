import  { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useSubYouRegister from './useSubyouRegister.jsx';

const Subscriptions = () => {
  const {
    firstName,
    email,
    password,
    error,
    isValid,
    handleFirstNameChange,
    handleEmailChange,
    handlePasswordChange,
    clearError,
    handleSubmit,
  } = useSubYouRegister();

  const [isLoading, setIsLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const navigate = useNavigate();

  const saveUserDataToLocal = () => {
    const userData = { email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    clearError();
    setRegistrationError(null);

    setIsLoading(true);

    try {
      await handleSubmit(e);

      if (isValid) {
        saveUserDataToLocal();
        navigate('/Tranding'); // Use navigate to redirect the user
      }
    } catch (error) {
      // Handle registration error, display error message, etc.
      console.error('Registration failed:', error);
      setRegistrationError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // If the user is registered and all fields are valid, navigate to '/'
    if (isValid) {
      navigate('/');
    }
  }, [isValid, navigate]);

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleRegistration}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Username"
              onChange={handleFirstNameChange}
              onFocus={clearError}
              value={firstName}
              className="form-control"
              style={{ width: '100%', height: '50px' }}
            />
            {error.firstName && <p className="errorTitle">{error.firstName}</p>}
          </div>
          <div className="form-group">
            <input
              placeholder="Phone number, email address"
              type="email"
              onChange={handleEmailChange}
              onFocus={clearError}
              value={email}
              className="form-control"
              style={{ width: '100%', height: '50px' }}
            />
            {error.email && <p className="errorTitle">{error.email}</p>}
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
              onFocus={clearError}
              value={password}
              className="form-control"
              style={{ width: '100%', height: '50px' }}
            />
            {error.password && <p className="errorTitle">{error.password}</p>}
          </div>
          {registrationError && <p className="errorTitle">{registrationError}</p>}
          <button type="submit" className="Btn" disabled={isLoading}>
            Register
          </button>

          <NavLink to='/'><button  className="Btns" disabled={isLoading}>
            Home Ga qaytish
            </button></NavLink>
        </form>
      </div>
    </div>
  );
};

export default Subscriptions;
