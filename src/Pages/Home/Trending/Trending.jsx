import { useEffect, useState } from "react";
// import { fetchAllNews } from "../services/api";
// import NewsCard from "../components/NewsCard";
import { fetchAllNews } from "../../../services/api";
import NewsCard from "../../../Components/NewsCard/NewsCard";

const Trending = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(news);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setLoading(true);

        const response = await fetchAllNews({ trending: "true" });
        setNews(response.data.data);
      } catch (error) {
        console.error("Trending fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrending();
  }, []);

  return (
    <div className="p-6 md:p-10 bg-base-200 min-h-screen">
      {/* হেডার সেকশন */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic flex items-center gap-3">
          <span className="bg-error text-error-content p-2 rounded-xl animate-pulse">
            🔥
          </span>
          TRENDING NOW
        </h1>
        <p className="text-base-content/60 mt-2 font-medium">
          The most talked about stories in the last 24 hours.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-ring loading-lg text-error"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length > 0 ? (
            news.map((item, index) => (
              <div key={item._id} className="relative">
                {/* র‍্যাঙ্কিং নাম্বার (১, ২, ৩...) */}
                <div className="absolute -top-4 -left-4 z-10 size-10 bg-base-100 border-2 border-error text-error rounded-full flex items-center justify-center font-black shadow-lg">
                  #{index + 1}
                </div>
                <NewsCard article={item} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 opacity-50">
              No trending news at the moment. Check back later!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Trending;
