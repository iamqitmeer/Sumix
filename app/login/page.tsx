"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Component() {
  let [formMode, setFormMode] = useState();

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              {formMode === "login" ? "Login" : "Sign Up"}
            </CardTitle>
            <CardDescription>
              {formMode === "login"
                ? "Enter your email and password to access your account."
                : "Enter your email and create a new password."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {formMode === "login" && (
                  <Link
                    href="#"
                    className="text-sm font-medium underline underline-offset-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    prefetch={false}
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              {formMode === "login" ? "Login" : "Sign Up"}
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            {formMode === "login" ? (
              <>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => setFormMode("signup")}
                  className="font-medium underline underline-offset-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Sign up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => setFormMode("login")}
                  className="font-medium underline underline-offset-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Login
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
