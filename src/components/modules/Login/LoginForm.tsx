"use client";
import Link from "next/link";
import Logo from "..//..//..//assets/v987-18a-removebg-preview.png";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
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
import { logingUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

const LoginForm = () => {
  const form = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await logingUser(data);
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
      <div className="flex items-center  space-x-4 mb-6 ">
        <Image src={Logo} alt="logo" height={50} width={50} />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <div className="mt-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex mt-3 w-full">
            {/* <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
              onChange={handleReCaptcha}
              className="mx-auto"
            /> */}
          </div>

          <Button
            // disabled={reCaptchaStatus ? false : true}
            type="submit"
            className="mt-5 cursor-pointer bg-[#ff7046] w-full"
          >
            {isSubmitting ? "Logging...." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Do not have any account ?
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
