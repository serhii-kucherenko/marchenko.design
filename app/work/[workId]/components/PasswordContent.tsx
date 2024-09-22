"use client";
import React, { useState } from "react";

import ArrowRightIcon from "../../../../public/images/arrow-right-icon.svg";

import { useLocalStorage } from "@uidotdev/usehooks";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export function PasswordContent() {
  const [password, setPassword] = useState("");
  const [, setPasswordToLocalStorage] = useLocalStorage("password", "");

  const isPasswordValid = password.length >= 8;

  return (
    <div className="flex justify-center w-full min-h-screen fadeIn py-[88px]">
      <div className="flex flex-col items-start w-max-[600px] justify-between">
        <Link href="/work">
          <Typography
            variant="subtitle2"
            textTransform="uppercase"
            color="primary.main"
            fontWeight="400"
          >
            BACK
          </Typography>
        </Link>

        <div>
          <Typography
            variant="subtitle2"
            textTransform="uppercase"
            color="text.secondary"
            fontWeight="400"
          >
            Let&apos;s check if you have access
          </Typography>

          <Typography variant="h1" fontWeight="500">
            Please, enter the password
          </Typography>

          <div className="mt-6 relative flex items-center w-full max-w-md">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-lg focus:outline-none"
              placeholder="Enter password"
              style={{
                borderRadius: "80px",
                borderWidth: "2px",
                borderColor: "#02040599",
                padding: "20px",
              }}
            />

            <Box
              onClick={() => {
                if (isPasswordValid) {
                  alert("Password is valid");
                } else {
                  setPasswordToLocalStorage(password);
                }
              }}
              component="span"
              className={`absolute right-3 transform -translate-y-1/2 top-1/2 transition-colors duration-300 ${
                isPasswordValid ? "text-red-600" : "text-gray-400"
              }`}
              sx={{
                "& .colored": {
                  transition: "fill 300ms",
                  fill: isPasswordValid ? "#C42D1C" : "#02040599",
                },
              }}
            >
              <ArrowRightIcon width={24} height={24} />
            </Box>
          </div>
        </div>

        <div className="mt-10 flex space-x-8">
          <p className="text-sm">
            Request access:{" "}
            <a href="mailto:hi.marchenko@gmail.com" className="text-red-600">
              hi.marchenko@gmail.com
            </a>
          </p>
          <p className="text-sm">
            More on Dribbble:{" "}
            <a href="#" className="text-red-600">
              A March
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
