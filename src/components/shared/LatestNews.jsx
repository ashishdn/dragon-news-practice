import React from "react";
import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    id: 1,
    title: "Global AI Summit 2026 Launches with Focus on Ethics and Governance"
  },
  {
    id: 2,
    title: "Tech Giants Announce Strategic Partnership for Next-Gen Semiconductor Tech"
  },
  {
    id: 3,
    title: "Global Central Banks Signal Interest Rate Adjustments Amid Economic Shift"
  },
  {
    id: 4,
    title: "NASA Unveils New Deep Space Exploration Mission for 2027"
  },
  {
    id: 5,
    title: "Renewable Energy Capacity Reaches All-Time Record Global High"
  }
];
export default function LatestNews() {

  return (
    <div className="flex gap-3  bg-gray-200 py-4 rounded-sm my-10">
        <button className="btn bg-[#D72050] text-white py-3 px-8 ml-5 text-xl font-semibold rounded-sm">latest</button>
      <Marquee pauseOnHover={true}>
        {
            breakingNews.map(n =>(<span key={n.id} className="mr-6 flex item-center text-[18px]">{n.title}</span>))
        }
      </Marquee>
    </div>
  );
}
