import { IconButton, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex items-center cursor-pointer">
        <Image layout="fill" src="/bg.png" alt="bg" />
      </div>
      <div
        style={{
          position: "absolute",
          right: 40,
          top: 120,
          bottom: 120,
          width: "25%",
          backgroundColor: "#ffffff",
          padding: 40,
          borderRadius: 16,
        }}
      >
        <div className="flex items-center cursor-pointer">
          <Image
            width="250"
            height="50"
            src="/Suzuki-logo.png"
            alt="suzuki-logo"
          />
        </div>

        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            data-testid={'test-name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            style={{ marginTop: 24 }}
          />
        </div>

        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            data-testid={'test-email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            data-testid={'test-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    data-testid="test-toggle"
                    edge="end"
                  >
                    {showPassword ? (
                      <div className="forgot-password text-center">Hide</div>
                    ) : (
                      <div className="forgot-password text-center">Show</div>
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="d-grid" style={{ marginTop: 24 }}>
          <button
            type="submit"
            className="btn btn-primary"
            data-testid={'test-signup'}
            style={{
              backgroundColor: "red",
              width: "100%",
              padding: 12,
              borderRadius: 8,
            }}
          >
            <div style={{ color: "white" }}>SIGNUP</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
