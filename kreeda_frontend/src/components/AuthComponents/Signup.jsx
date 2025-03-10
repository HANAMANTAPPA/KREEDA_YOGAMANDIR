import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import signupstyles from "./Signup.module.css";
import image from '../../resorses/imges/signin.png';

function Signup() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    height: "",
    weight: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // New state for password mismatch

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    // Check if passwords match whenever confirmPassword changes
    if (name === "confirmPassword") {
      setConfirmPasswordError(
        value !== user.password ? "Passwords do not match" : ""
      );
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const points = 0;
    const { name, height, weight, email, password, confirmPassword } = user;
    if (
      name &&
      height &&
      weight &&
      email &&
      password &&
      password === confirmPassword
    ) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/register`,
          user
        );

        if (response.status === 400) {
          alert("Error: " + response.data.message);
        } else if (response.status === 200) {
          navigate("/login");
        } else {
          alert("Unexpected response: " + response.data.message);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/addOrUpdateUserExerciseProfile`,
          {
            userName: name,
            points: points
          },
          { withCredentials: true }
        );
        console.log(response);
        
      } catch (error) {
        console.log("Error while adding points: ",error)
      }
    } else {
    }
  };

  return (
    <div className={signupstyles.signupContainer}>
      <div className={signupstyles.imageSection}>
        <img src={image} alt="Signup Visual" />
      </div>
      <div className={signupstyles.formSection}>
        <h2>Sign Up</h2>
        <p>
          Please <span>Sign Up</span> to create a new Kreeda.ai Account
        </p>
        <form onSubmit={register} className={signupstyles.form}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            variant="outlined"
            margin="none"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
            }}
            sx={{
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

          <div className={signupstyles.fieldRow}>
            <TextField
              label="Height (cm)"
              name="height"
              type="number"
              value={user.height}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
              }}
              sx={{
                marginBottom: 0,
                marginTop: 0,
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

            <TextField
              label="Weight (kg)"
              name="weight"
              type="number"
              value={user.weight}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
              }}
              sx={{
                marginBottom: 0,
                marginTop: 0,
                width: '50%',
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
          </div>

          <TextField
            label="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            margin="none"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
            }}
            sx={{
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

          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            margin="none"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
            }}
            sx={{
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

          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            variant="outlined"
            fullWidth
            margin="none"
            error={!!confirmPasswordError} // Set error state if passwords do not match
            helperText={confirmPasswordError} // Display password mismatch helper text
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white', fontSize: '12px', lineHeight: '100%' },
            }}
            sx={{
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
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              textTransform: 'none',
              borderRadius: '40px',
            }}
          >
            Sign Up
          </Button>
          <p>Already have an account? <a href="/Login" className={signupstyles.link}>Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
