import React, { useEffect, useState, useCallback } from "react";
import { fetchAllNews } from "../../../services/api";
import NewsCard from "../../../Components/NewsCard/NewsCard";
import { NavLink } from "react-router";
import { BiChevronDown, BiSearch } from "react-icons/bi";

// Debounce Hook: এটি অতিরিক্ত এপিআই কল কমাবে
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedSearch = useDebounce(searchTerm, 500);

  // নিউজ ফেচ করার মেইন ফাংশন
  const getNews = useCallback(async () => {
    try {
      setLoading(true);
      const params = {
        search: debouncedSearch,
        category: selectedCategory,
        page: page,
        limit: 9, // প্রতি পেজে ৯টি করে কার্ড
      };
      const response = await fetchAllNews(params);
      setNews(response.data.data);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, selectedCategory, page]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  // সার্চ বা ক্যাটাগরি চেঞ্জ হলে পেজ ১-এ নিয়ে আসা
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const categories = [
    { name: "All", color: "bg-primary", value: "" },
    { name: "Technology", color: "bg-info", value: "technology" },
    { name: "Business", color: "bg-success", value: "business" },
    { name: "Sports", color: "bg-warning", value: "sports" },
    { name: "Entertainment", color: "bg-error", value: "entertainment" },
  ];

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-base-100 p-4 rounded-2xl shadow-sm border border-base-200">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl opacity-50" />
          <input
            type="text"
            placeholder="Search news by title..."
            className="input input-bordered w-full pl-10 bg-base-200 focus:input-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories Dropdown */}
        <div className="relative group z-50">
          <button className="btn btn-ghost border border-base-300 flex items-center gap-2">
            {selectedCategory ? selectedCategory.toUpperCase() : "CATEGORIES"}
            <BiChevronDown className="group-hover:rotate-180 transition-transform" />
          </button>

          <div className="absolute right-0 top-full mt-2 w-48 bg-base-100 border border-base-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className="menu p-2">
              {categories.map((cat, i) => (
                <li key={i}>
                  <button
                    className={`flex items-center gap-3 ${selectedCategory === cat.value ? "active" : ""}`}
                    onClick={() => handleCategoryChange(cat.value)}
                  >
                    <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="flex justify-center h-96 items-center">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.length > 0 ? (
              news.map((item) => <NewsCard key={item._id} article={item} />)
            ) : (
              <div className="col-span-full text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                <p className="text-xl opacity-50">
                  No news articles found for this search.
                </p>
              </div>
            )}
          </div>

          {/* Pagination UI */}
          {news.length > 0 && (
            <div className="flex justify-center join">
              <button
                className="join-item btn btn-outline btn-md"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                Prev
              </button>
              <button className="join-item btn btn-md bg-base-200 no-animation">
                Page {page} of {totalPages}
              </button>
              <button
                className="join-item btn btn-outline btn-md"
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
