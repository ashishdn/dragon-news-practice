"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const { register, handleSubmit } = useForm();

  const handleRegister = async (data) => {
    const { email, name, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required, The name of the user.
      email: email, // required, The email address of the user.
      password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      callbackURL: "/", // An optional URL to redirect to after the user signs up.
    });
    console.log(res, error);
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-md items-center px-4 py-10">
      <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
          Dragon News
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-950">
          Create account
        </h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Join Dragon News and stay up to date.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Full name
            </label>
            <input
              id="name"
              {...register("name")}
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
              className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Email address
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              required
              className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold text-red-700 hover:text-red-800"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
