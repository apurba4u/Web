import LeftSideBar from "@/app/components/homepage/LeftSideBar"
import NewsCard from "@/app/components/homepage/NewsCard";
import RightSideBar from "@/app/components/homepage/RightSideBar"
import { getCategories, getNewsByCategoryId } from "@/lib/data";




const NewsCategoryPage = async ({ params }) => {
  // get param number
  const {id} = await params
  console.log('ParamsRes: ',id)

  const categories = await getCategories()
  const news = await getNewsByCategoryId(id)
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
      <div className="col-span-3">
        <h2 className="text-lg font-bold">All Categories</h2>
        <LeftSideBar categories={categories} activeId = {id}/>
      </div>
      <div className="text-3xl col-span-6">
        <h2 className="text-lg font-bold mb-6">News by Category</h2>
        {news.length ?  news.map((n) => {
          return <NewsCard key={n._id} news={n} />
        }) : <h2 className="font-bold text-4xl text-center my-7">No News Found</h2>}
      </div>
      <div className="font-bold text-3xl col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;