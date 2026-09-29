"use client"

import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function SigninPage() {

  const {register, handleSubmit } = useForm()
  
  const handleLogin = (data) =>{
     console.log(data)
  }


  return (
    <section className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-md items-center px-4 py-10">
      <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
          Dragon News
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-950">Welcome back</h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Sign in to continue to your account.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Email address
            </label>
            <input
              id="email"
              {...register("name")}
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
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
            />
          </div>

          <label className="flex items-center gap-2.5 text-sm text-gray-600">
            <input
              type="checkbox"
              name="remember"
              className="size-4 rounded border-gray-300 accent-red-700"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="font-semibold text-red-700 hover:text-red-800"
          >
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
