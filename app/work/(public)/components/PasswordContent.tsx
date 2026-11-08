"use client";
import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IProps {
  password: string;
  setPassword: (password: string) => void;
}

export function PasswordContent({ password, setPassword }: IProps) {
  const [localPassword, setLocalPassword] = useState(password);
  const [error, setError] = useState<string>();

  const fullPassword = localPassword.length >= 8;

  const onSubmit = () => {
    if (fullPassword) {
      const passwords = (process.env.NEXT_PUBLIC_MARCH || "").split(",");

      if (passwords.includes(localPassword)) {
        setPassword(localPassword);
      } else {
        setError("Password is incorrect");
      }
    } else {
      setError("Password must be at least 8 characters");
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen animate-fadeIn py-[88px]">
      <div className="flex flex-col items-start w-max-[600px] justify-between">
        <Typography
          variant="subtitle2"
          textTransform="uppercase"
          color="primary.main"
          fontWeight="400"
          component={Link}
          href="/"
        >
          BACK TO WORKS
        </Typography>

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
              value={localPassword}
              onChange={(e) => {
                setLocalPassword(e.target.value);

                if (!fullPassword && error) {
                  setError(undefined);
                  return;
                }
              }}
              className="w-full text-lg focus:outline-none bg-background"
              style={{
                borderRadius: "80px",
                borderWidth: "2px",
                borderColor: error ? "#C42D1C" : "#02040599",
                padding: "16px 24px",
                height: "56px",
                fontWeight: 700,
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit();
                }
              }}
            />
            {error && (
              <Typography
                variant="subtitle2"
                fontWeight="400"
                className="absolute left-3 transform translate-y-[36px] top-1/2 "
                sx={{ color: "#C42D1C" }}
              >
                {error}
              </Typography>
            )}

            <Box
              onClick={onSubmit}
              component="span"
              className="absolute right-6 cursor-pointer transform -translate-y-1/2 top-1/2 transition-colors duration-300"
              sx={{
                color: fullPassword || error ? "#C42D1C" : "#020405",
                "&:hover": {
                  color: fullPassword || error ? "#A72618" : "#020405",
                },
              }}
            >
              <ArrowRight size={24} strokeWidth={1.5} />
            </Box>
          </div>
        </div>

        <div className="mt-10 flex space-x-8">
          <Typography variant="h4" fontSize="16px" fontWeight="500">
            Request access:{" "}
            <Typography
              variant="h4"
              component={Link}
              href="mailto:hi.marchenko@gmail.com"
              fontWeight="400"
              fontSize="16px"
              color="primary.main"
              className="underline"
            >
              hi.marchenko@gmail.com
            </Typography>
          </Typography>
          <Typography variant="h4" fontSize="16px" fontWeight="500">
            More on Dribbble:{" "}
            <Typography
              variant="h4"
              component={Link}
              href="https://dribbble.com/A_March"
              target="_blank"
              fontSize="16px"
              fontWeight="400"
              color="primary.main"
              className="underline"
            >
              A_March
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
