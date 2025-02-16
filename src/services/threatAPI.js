const API_URL = "https://api.cyberthreatintel.com/v1/threats?apiKey=YOUR_THREAT_API_KEY";

/**
 * Fetches real-time cyber threat intelligence data.
 * @returns {Promise<Array>} A promise that resolves to an array of threat reports.
 */
export const fetchThreatData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching threat data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.threats || []; // Return threats or empty array if undefined
  } catch (error) {
    console.error("Failed to fetch threat intelligence data:", error);
    return [];
  }
};
