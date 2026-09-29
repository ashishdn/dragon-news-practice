import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4 text-center">
      
      <h1 className="text-8xl md:text-9xl font-extrabold text-gray-900 tracking-widest">
        404
      </h1>
      
      <div className="bg-red-500 px-3 py-1 text-sm md:text-base rounded rotate-12 absolute text-white shadow-md font-semibold">
        Page Not Found
      </div>
      
      <p className="mt-10 text-base md:text-lg text-gray-600 max-w-md">
        Oops! The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
      </p>
      
      <div className="mt-8">
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-700 transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
      
    </main>
  );
}