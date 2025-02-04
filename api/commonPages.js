// commonPages.js
export const commonPages = [
  "Python (programming language)", "JavaScript", "HTML", "United States", "Apple Inc.",
  "World War II", "Albert Einstein", "Wikipedia", "Barack Obama", "Tesla, Inc.",
  "New York City", "Google", "The Beatles", "London", "Mars",
  "Albert Einstein", "Einstein's theory of relativity", "Apple", "Microsoft", "Amazon",
  "Football", "Basketball", "Soccer", "World Cup", "Mount Everest",
  "History of the United States", "Space exploration", "The Moon", "Music", "The Internet",
  "Artificial intelligence", "Machine learning", "Quantum computing", "Blockchain", "Bitcoin",
  "Facebook", "Instagram", "Twitter", "YouTube", "TikTok",
  "Shakespeare", "Newton", "Darwin", "Galileo", "Tesla",
  "Star Wars", "The Matrix", "Harry Potter", "Game of Thrones", "Marvel Cinematic Universe",
  "Earth", "Sun", "Moon landing", "Apollo 11", "Saturn",
  "Black hole", "Milky Way", "Mars rover", "SpaceX", "NASA",
  "History of the world", "Renaissance", "Ancient Greece", "Roman Empire", "Egyptian civilization",
  "The Renaissance", "World War I", "French Revolution", "American Revolution", "Cold War",
  "The Great Wall of China", "Eiffel Tower", "Grand Canyon", "Machu Picchu", "Pyramids of Giza",
  "Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Claude Monet", "Pablo Picasso",
  "London Eye", "Sydney Opera House", "Taj Mahal", "Colosseum", "Sagrada Familia",
  "Harry Potter and the Philosopher's Stone", "Lord of the Rings", "Twilight", "The Hunger Games", "Jurassic Park",
  "Barack Obama", "Donald Trump", "Bill Clinton", "George Washington", "Abraham Lincoln",
  "Tesla Model S", "Ford Mustang", "Chevrolet Camaro", "Toyota Prius", "BMW i8",
  "Paris", "Rome", "Berlin", "Tokyo", "Beijing",
  "Amazon River", "Nile River", "Yangtze River", "Mississippi River", "Ganges River",
  "Kilimanjaro", "Alps", "Andes", "Himalayas", "Rocky Mountains",
  "Tesla Motors", "Google Maps", "Google Search", "Apple Store", "Microsoft Office",
  "Marvel Comics", "DC Comics", "Superman", "Batman", "Spider-Man",
  "Facebook", "LinkedIn", "Pinterest", "Reddit", "Snapchat",
  "Queen Elizabeth II", "Princess Diana", "Elvis Presley", "Michael Jackson", "Beyoncé",
  "Paris Hilton", "Kanye West", "Oprah Winfrey", "Jay-Z", "Rihanna",
  "David Beckham", "Lionel Messi", "Cristiano Ronaldo", "Serena Williams", "Usain Bolt",
  "Soccer World Cup", "NBA Finals", "Olympics", "Super Bowl", "Wimbledon",
  "Paris", "Rome", "Berlin", "Tokyo", "London",
  "Football World Cup", "Basketball World Cup", "Formula 1", "The Masters", "Tour de France",
  "Olympics", "Nobel Prize", "Emmy Awards", "Academy Awards", "Grammy Awards",
  "Madonna", "Lady Gaga", "Ariana Grande", "Katy Perry", "Taylor Swift",
  "Lady Diana", "Princess Leia", "Princess Elsa", "Wonder Woman", "Harley Quinn",
  "Elvis Presley", "Bob Dylan", "The Rolling Stones", "Led Zeppelin", "The Beatles",
  "Michael Jackson", "Whitney Houston", "Madonna", "David Bowie", "Prince",
  "Freddie Mercury", "Janis Joplin", "Kurt Cobain", "Jim Morrison", "Amy Winehouse",
  "Sigmund Freud", "Carl Jung", "Albert Bandura", "Erik Erikson", "Jean Piaget",
  "Cognitive psychology", "Behavioral psychology", "Psychology of learning", "Psychology of memory", "Psychology of perception",
  "Artificial Intelligence", "Deep learning", "Natural language processing", "Neural networks", "Machine learning algorithms",
  "Neural networks", "Reinforcement learning", "Supervised learning", "Unsupervised learning", "Generative adversarial networks",
  "Quantum mechanics", "Quantum computing", "Particle physics", "Theoretical physics", "String theory",
  "Albert Einstein", "Max Planck", "Niels Bohr", "Isaac Newton", "Galileo Galilei",
  "Beethoven", "Mozart", "Bach", "Chopin", "Tchaikovsky",
  "Yoga", "Meditation", "Mindfulness", "Tai chi", "Pilates",
  "Social media", "Influencers", "Streaming platforms", "Social networking", "Content creation",
  "Digital marketing", "SEO", "Google Ads", "Facebook Ads", "Social media algorithms",
  "E-commerce", "Amazon", "Alibaba", "eBay", "Etsy",
  "Cryptocurrency", "Bitcoin", "Ethereum", "Litecoin", "Ripple",
  "Gaming", "Game development", "Video games", "Esports", "Gaming consoles",
  "Minecraft", "Fortnite", "Call of Duty", "League of Legends", "Grand Theft Auto",
  "Nintendo", "PlayStation", "Xbox", "PC gaming", "Mobile gaming",
  "Cryptocurrency", "Bitcoin", "Ethereum", "Blockchain", "Ripple",
  "Ethereum", "Bitcoin Cash", "Litecoin", "Cardano", "Polkadot",
  "Dogecoin", "Shiba Inu", "Solana", "Tezos", "Chainlink",
  "London Underground", "New York Subway", "Tokyo Metro", "Paris Metro", "Moscow Metro",
  "Airplane", "Jet engine", "Aviation", "Aerospace engineering", "Space travel",
  "Flight simulator", "SpaceX", "Blue Origin", "NASA", "Space station",
  "GPS", "Satellite", "Aerospace technology", "Rocket science", "Orbit",
  "Smartphone", "Smartwatch", "Tablet", "Laptop", "Wearables",
  "Google", "Apple", "Microsoft", "Amazon", "Facebook",
  "Windows", "Android", "iOS", "Linux", "macOS",
  "SpaceX", "Space tourism", "Tesla", "Boeing", "NASA",
  "Solar power", "Wind energy", "Renewable energy", "Electric cars", "Climate change",
  "Global warming", "Sustainability", "Eco-friendly", "Carbon footprint", "Green energy",
  "Energy efficiency", "Zero waste", "Recycling", "Electric vehicles", "Hydrogen fuel cells",
  "Electric car", "Tesla Model S", "Electric motor", "Electric vehicle charging", "Electric vehicle battery",
  "Wireless charging", "Hydrogen fuel cell", "Tesla Model X", "Tesla Model 3", "Electric bicycle",
  "Autonomous vehicle", "Self-driving car", "Automotive technology", "Car safety", "Vehicle-to-vehicle communication",
  "Driverless car", "Tesla Autopilot", "Waymo", "Uber self-driving car", "Automated transportation"
];


export function getRandomPair() {
  const shuffledPages = commonPages.sort(() => Math.random() - 0.5);
  return shuffledPages.slice(0, 2); // Return the first 2 pages after shuffling
}
