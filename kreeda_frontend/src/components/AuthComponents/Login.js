import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import image1 from '../../resorses/imges/signin.png';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(""); // Separate error state for email
  const [passwordError, setPasswordError] = useState(""); // Separate error state for password

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    // Clear individual error messages when typing
    if (name === 'email') {
      setEmailError("");
    }
    if (name === 'password') {
      setPasswordError("");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(user, process.env.REACT_APP_BASE_URL);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/login`
        ,user,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("log in success");
        navigate("/dashboard");
      } else if (response.status === 201) {
        setPasswordError("Incorrect password"); // Set password error message
      } else {
        setEmailError("Entered mail doesn't exist"); // Set email error message
      }
    } catch (error) {
      console.log(error);
      setEmailError("Entered mail doesn't exist"); // General error for email
      setPasswordError("Incorrect password"); // General error for password
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image1} alt="Sign In" className={styles.signinImage} />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign In</h2>
        <p className={styles.text}>
          Please <span className={styles.highlight}>Sign In</span> using the credentials sent to your mail
        </p>
        <form className={styles.loginform} onSubmit={login}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="xyz@gmail.com"
            required
            variant="outlined"
            fullWidth
            margin="none"
            helperText={emailError} // Display email error as helper text
            error={!!emailError} // Set error prop to change TextField style when there's an error
            InputProps={{
              style: { color: 'white', padding: '8px' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%', },
            }}
            sx={{
              marginBottom: '5%',
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '0.875rem',
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="********"
            required
            variant="outlined"
            fullWidth
            margin="none"
            helperText={passwordError} // Display password error as helper text
            error={!!passwordError} // Set error prop to change TextField style when there's an error
            InputProps={{
              style: { color: 'white', padding: '8px' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%', },
            }}
            sx={{
              marginBottom: '5%',
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '0.875rem',
                padding: '10px',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            className={styles.button}
            sx={{
              textTransform: 'none',
              borderRadius: '40px',
            }}
          >
            Sign In
          </Button>
          <div className={styles.linksline}>
            <a href="/ForgetPwd" className={styles.link}>Forgot password?</a>
            <a href="/Signup" className={styles.signuplink}>Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
