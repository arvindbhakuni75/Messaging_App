import { useState } from "react";
import toast from "react-hot-toast";

import { SignupInputTypes } from "../pages/signup/Signup";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: SignupInputTypes) => {
    const success: boolean = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data?.error) {
        throw new Error(data.error);
      }

      // localstorage
      localStorage.setItem("app_user", JSON.stringify(data));
      // context
      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: SignupInputTypes) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password.length < 4) {
    toast.error("Password must be at least 4 characters");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password do not match");
    return false;
  }

  return true;
}
