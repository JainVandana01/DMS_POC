/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { atom, useAtom } from "jotai";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { loginData } from "../store";

const usernameAtom = atom<string>("");
const passwordAtom = atom<string>("");
const showPasswordAtom = atom<boolean>(false);

const Login: NextPage = () => {
  const [username, setUsername] = useAtom(usernameAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const router = useRouter();

  const [, setLoginData] = useAtom(loginData);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onLoginClick = (e: any) => {
    setLoginData({ username, password });
    e.preventDefault();
    router.push("/home");
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
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            style={{ marginTop: 24 }}
          />
        </div>

        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
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
            style={{
              backgroundColor: "red",
              width: "100%",
              padding: 12,
              borderRadius: 8,
            }}
            onClick={onLoginClick}
          >
            <div style={{ color: "white" }}>LOGIN</div>
          </button>
        </div>
        <p
          className="forgot-password text-center"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          <a href="#">Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
