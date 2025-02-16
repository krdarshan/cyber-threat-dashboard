import { useEffect, useState } from "react";
import "../styles/NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=cybersecurity&apiKey=YOUR_NEWS_API_KEY"
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 6)); // Fetch only 6 latest news articles
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>Latest Cyber Threats</h2>

      {loading ? (
        <p className="loading-text">Fetching latest news...</p>
      ) : (
        <div className="news-container">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div className="news-card" key={index}>
                <img src={article.urlToImage} alt={article.title} />
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="no-news">No news available at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
