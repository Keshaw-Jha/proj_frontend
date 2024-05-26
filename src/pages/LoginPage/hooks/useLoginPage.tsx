import { useState } from "react";
import { SignIn } from "../../../model/HomeformData";

import { logInUser, signInUser } from "../../../api/logIn-ep";
import AppToast from "../../../utils/AppToast";

export const useLogInPage = () => {
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState<SignIn>({} as SignIn);

  const validateForm = (data: FormData) => {
    const newErrors: SignIn = {} as SignIn;
    if (!data.get("email")) {
      newErrors.email = "Email is required";
    }
    if (!data.get("password")) {
      newErrors.password = "Password is required";
    }
    if (!isUser && !data.get("name")) {
      newErrors.name = "Name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateForm(data)) {
      const tempUserObj = {
        email: (data.get("email") as string) || "",
        password: (data.get("password") as string) || "",
        name: (data.get("name") as string) || "",
      };
      const result = isUser
        ? await logInUser({
            email: tempUserObj.email,
            password: tempUserObj.password,
          })
        : await signInUser(tempUserObj).then(() =>
            AppToast.success("User logged in!")
          );
      console.log("result", result);
      setLoggedIn(true);
    }
  };

  return {
    handleSubmit,
    isUser,
    setIsUser,
    showPassword,
    setShowPassword,
    isLoggedIn,
    errors,
  };
};
