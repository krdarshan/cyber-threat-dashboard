const API_URL = "https://newsapi.org/v2/everything?q=cybersecurity&sortBy=publishedAt&apiKey=YOUR_NEWS_API_KEY";

/**
 * Fetches cybersecurity news from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of news articles.
 */
export const fetchCyberNews = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }
    const data = await response.json();
    return data.articles || []; // Return articles or empty array if undefined
  } catch (error) {
    console.error("Failed to fetch cyber news:", error);
    return [];
  }
};
