"use client";
import Link from "next/link";
import Logo from "..//..//..//assets/v987-18a-removebg-preview.png";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "@/services/auth";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/redux/features/auth/authSlice";
const RegisterForm = () => {
  const form = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createUser(data);
      const token = res?.data?.accessToken;
      const user = jwtDecode(token);
      dispatch(setUser({ user: user, token: token }));
      console.log(token, user);
      if (token) {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex mb-6 items-center space-x-4 ">
        <Image src={Logo} alt="logo" height={50} width={50} />
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" my-3 ">
            {" "}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5 bg-[#ff7046] w-full">
            {isSubmitting ? "Register...." : "Register Now"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Already have a account ?
        <Link href="/login" className="text-blue-600 ">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
