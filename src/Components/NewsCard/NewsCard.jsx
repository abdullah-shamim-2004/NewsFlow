const NewsCard = ({ article }) => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all duration-300 group">
      {/* Image section */}
      <figure className="relative h-44 overflow-hidden bg-base-300">
        <img
          src={
            article.image_url ||
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=500"
          }
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Source */}
        <div className="absolute top-3 left-3">
          <span className="badge badge-primary font-bold text-[10px] uppercase shadow-sm">
            {article.source}
          </span>
        </div>
      </figure>

      {/* content */}
      <div className="card-body p-4 gap-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-base-content/50 uppercase tracking-wider">
          <span>{article.category[0]}</span>
          <span>•</span>
          <span>{new Date(article.pubDate).toLocaleDateString()}</span>
        </div>

        <h2 className="card-title text-[15px] font-bold leading-snug h-12 line-clamp-2 mt-1">
          {article.title}
        </h2>

        <p className="text-xs text-base-content/70 line-clamp-3 mt-2">
          {article.description}
        </p>

        {/* footer */}
        <div className="card-actions justify-between items-center mt-4 pt-3 border-t border-base-100">
          <div className="flex flex-col">
            <span className="text-[10px] opacity-60 italic">
              By {article.author || "Staff Writer"}
            </span>
          </div>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-xs lowercase font-medium"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
