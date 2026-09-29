import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

export default function NewsCard({ news }) {
  const { title, author, thumbnail_url, total_view, rating, details } = news;

  return (
    <div>
      <div className=" mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* <!-- Header / Author Section --> */}
        <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src={author.img}
              alt="Author Image"
              height={40}
              width={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                {author.name}
              </h4>
              <p className="text-xs text-gray-500">{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            {/* <!-- Bookmark Icon --> */}
            <button className="hover:text-gray-700 transition">
              <FaRegBookmark />
            </button>
            {/* <!-- Share Icon --> */}
            <button className="hover:text-gray-700 transition">
              <FaShareAlt />
            </button>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div className="p-5">
          {/* <!-- Title --> */}
          <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 hover:text-blue-600 cursor-pointer">
            {title}
          </h2>

          {/* <!-- Thumbnail Image --> */}
          <div className="relative w-full h-[400px] rounded-md overflow-hidden">
            <Image
              src={thumbnail_url}
              alt="News Image"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* <!-- Description --> */}
          <p className="text-md text-gray-500 leading-relaxed mb-3 mt-5 line-clamp-3">
            {details}
          </p>

          {/* <!-- Read More Button --> */}
          <Link href={`/news/${news._id}`}>
            <button className="btn bg-gray-300 py-2 px-4 rounded-sm mb-5">See Details</button>
          </Link>

          <hr className="border-gray-200 mb-4" />

          {/* <!-- Footer: Rating & Views --> */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            {/* <!-- Rating --> */}
            <div className="flex items-center gap-1">
              <div className="flex text-orange-400 text-base">★ ★ ★ ★ ★</div>
              <span className="font-medium text-gray-700 ml-1">
                {rating.number}
              </span>
            </div>

            {/* <!-- Views --> */}
            <div className="flex items-center gap-2">
              <FaEye />

              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
