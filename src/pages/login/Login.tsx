import React from "react";
import Input from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormProps = {
  username: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormProps) => {
    console.log(data);
    // fetch("http://localhost:3000/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => console.log(res));
  };

  return (
    <>
      <div className=" bg-white rounded-3xl p-10 flex gap-14">
        <div className="login-form-wrapper flex flex-col px-20 mt-5">
          <div className="flex justify-center items-center mt-10">
            <img src="images/karma-store.png" className="w-52 h-auto" alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 justify-center items-center mt-[30px]"
          >
            <Input
              className="form-input"
              type="text"
              placeholder="نام کاربری"
              {...register("username")}
            />
            <Input
              className="form-input"
              type="password"
              placeholder="رمز عبور"
              {...register("password")}
            />

            <Link to="/login/forgetpassword" className="forget-password-btn">
              فراموشی رمز عبور
            </Link>
            <Input className="login-btn" type="submit" value="ورود" />
          </form>
          <p className="copy-right">نسخه تحت وب ورژن ۰.۱</p>
        </div>
        <div className="login-logo-wrappe">
          <img
            src="images/login-logo.jpg"
            alt="لوگوی"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
}
