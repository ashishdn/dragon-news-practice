import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center max-w-sm w-full p-8 text-center rounded-2xl bg-base-100/80 backdrop-blur-sm border border-base-200 shadow-sm">
        {/* DaisyUI Spinner */}
        <div className="relative mb-5 flex items-center justify-center">
          <span className="loading loading-spinner text-error w-14 h-14"></span>
        </div>

        {/* Brand Title & Subtitle */}
        <h3 className="text-xl font-bold tracking-tight text-gray-800 mb-1">
          Loading Dragon News
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Fetching the latest headlines and stories...
        </p>

        {/* DaisyUI Indeterminate Progress Bar */}
        <progress className="progress progress-error w-48 h-1.5"></progress>

        {/* Subtle Dots indicator */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
          <span>Please wait a moment</span>
          <span className="loading loading-dots loading-xs"></span>
        </div>
      </div>
    </div>
  );
}
