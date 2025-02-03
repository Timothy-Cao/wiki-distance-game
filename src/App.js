import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, CardMedia, CircularProgress } from "@mui/material";

function App() {
  const [pages, setPages] = useState([]);
  const [nextPages, setNextPages] = useState([]); // Store next pages for preload
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0); // Track user score

  // Fetch a random pair of pages
  const loadPages = async () => {
    setLoading(true); // Set loading state
    try {
      const response = await axios.get("/api/fetchWikipediaPages");
      setPages(response.data); // Set the current pages data
      setNextPages(await axios.get("/api/fetchWikipediaPages").then(res => res.data)); // Preload the next pages
      setLoading(false); // Turn off loading state
    } catch (error) {
      console.error("Error loading pages:", error);
      setLoading(false); // Turn off loading state on error
    }
  };

  // Handle the "High" and "Low" button clicks
  const handleButtonClick = (userGuess) => {
    // You can later use `userGuess` to check against some correct condition.
    // For now, just load the next pair.
    loadPages(); // Fetch new pages
  };

  useEffect(() => {
    loadPages();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      {loading ? (
        <CircularProgress /> // Show spinner while loading
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around", width: "80%" }}>
          {/* Display each page as a card */}
          {pages.map((page, index) => (
            <Card key={index} sx={{ width: 250, margin: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={page.imageUrl}
                alt={page.title}
              />
              <CardContent>
                <Typography variant="h6">{page.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Popularity: {page.pageViews ? page.pageViews : "N/A"} views
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Inbound Links: {page.inboundLinks ? page.inboundLinks : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Page Length: {page.pageLength} bytes
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Buttons for High/Low */}
      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick("high")}>
          High
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleButtonClick("low")}>
          Low
        </Button>
      </div>

      {/* Display score (optional) */}
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Score: {score}</Typography>
      </div>
    </div>
  );
}

export default App;
