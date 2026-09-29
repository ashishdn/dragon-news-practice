import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import getCategoryById, { getNewsByCategoryId } from "@/lib/data";
import React from "react";

export default async function CategoryIdPage({params}) {
    const {id} = await params;
  const news = await getNewsByCategoryId(id);


  const categoriesById = await getCategoryById()
    const categories = categoriesById.data.news_category

  return (
    <div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
        </div>
        <div className="col-span-6">
          <h2 className="text-xl font-semibold mb-5">This is my News Feed</h2>
          <div className="flex flex-col gap-3">
                {
                  news.length > 0 ? (news.map((n)=>(<NewsCard key={n._id} news={n}></NewsCard>))) : (<h2 className="text-xl font-semibold">No News Found</h2>)
                }
              </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">This is my Right sidebar</h2>
        </div>
      </div>
    </div>
  );
}
