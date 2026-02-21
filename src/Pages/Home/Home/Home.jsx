import React, { useEffect, useState } from "react";
import { fetchAllNews } from "../../../services/api";
import NewsCard from "../../../Components/NewsCard/NewsCard";
// import Loader from "../../../Components/Loader/Loader";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(news);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await fetchAllNews();
        setNews(response.data.data);
      } catch (error) {
        console.error("There is a error", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);
  return (
    <div>
      {" "}
      {loading ? (
        <div className="flex justify-center h-64 items-center">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.length > 0 ? (
            news.map((item) => <NewsCard key={item.newsId} article={item} />)
          ) : (
            <p className="col-span-full text-center py-10">
              Sorry no news found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
