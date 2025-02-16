const MAP_API_URL = "https://api.cyberthreatmap.com/v1/incidents?apiKey=YOUR_MAP_API_KEY";

/**
 * Fetches real-time cyber threat map data.
 * @returns {Promise<Array>} A promise that resolves to an array of cyber incidents.
 */
export const fetchMapData = async () => {
  try {
    const response = await fetch(MAP_API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching map data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.incidents || []; // Return incidents or an empty array if undefined
  } catch (error) {     
    console.error("Failed to fetch cyber threat map data:", error);
    return [];
  }
};
