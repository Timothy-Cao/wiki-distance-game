// api/fetchWikipediaPages.js
import { getRandomPair } from './commonPages';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const pair = getRandomPair(); // Get a random pair of Wikipedia pages

      // Fetch data for both pages using an external API (Wikipedia)
      const pageDataPromises = pair.map(async (page) => {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info|pageimages|categories|links&titles=${page}&inprop=url&piprop=thumbnail&pithumbsize=500`);
        const data = await response.json();
        const pageInfo = data.query.pages;
        
        // Extract relevant data
        const pageDetails = pageInfo[Object.keys(pageInfo)[0]];

        const pageViews = pageDetails.pageviews || 0; // Set default value for page views if not available
        const inboundLinks = pageDetails.inlinks ? pageDetails.inlinks.length : 0; // Calculate inbound links length
        const pageLength = pageDetails.length || 0;

        return {
          title: pageDetails.title,
          imageUrl: pageDetails.thumbnail?.source || '',
          pageViews,
          inboundLinks,
          pageLength,
        };
      });

      const pagesData = await Promise.all(pageDataPromises);

      // Return the page data for the two random pages
      res.status(200).json(pagesData);
    } catch (error) {
      console.error("Error fetching Wikipedia page data:", error);
      res.status(500).json({ error: "Error fetching page data" });
    }
  }
}
