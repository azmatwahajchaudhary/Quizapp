// =============================================
//  QUIZMASTER — questions.js
//  All quiz questions organized by category
//  and difficulty. Each question has:
//    q    — question string
//    opts — array of 4 answer strings
//    a    — index of the correct answer (0–3)
// =============================================

const QUESTIONS = {

  // ==========================================
  //  GENERAL KNOWLEDGE
  // ==========================================
  general: {
    easy: [
      { q: "What is the capital of France?", opts: ["Berlin", "Madrid", "Paris", "Rome"], a: 2 },
      { q: "How many continents are there on Earth?", opts: ["5", "6", "7", "8"], a: 2 },
      { q: "What color are emeralds?", opts: ["Red", "Blue", "Green", "Yellow"], a: 2 },
      { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Mars", "Jupiter", "Saturn"], a: 1 },
      { q: "How many sides does a hexagon have?", opts: ["5", "6", "7", "8"], a: 1 },
      { q: "What is the largest ocean on Earth?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], a: 3 },
      { q: "Which animal is known as the King of the Jungle?", opts: ["Tiger", "Lion", "Elephant", "Leopard"], a: 1 },
      { q: "What is 7 × 8?", opts: ["54", "56", "58", "62"], a: 1 },
      { q: "In which country is the Great Wall located?", opts: ["Japan", "India", "China", "Korea"], a: 2 },
      { q: "What language do people in Brazil speak?", opts: ["Spanish", "French", "Portuguese", "English"], a: 2 },
      { q: "How many days are in a leap year?", opts: ["364", "365", "366", "367"], a: 2 },
      { q: "What is the boiling point of water in Celsius?", opts: ["90°C", "95°C", "100°C", "110°C"], a: 2 },
      { q: "Which fruit is known to keep the doctor away?", opts: ["Banana", "Apple", "Orange", "Grape"], a: 1 },
      { q: "How many colors are in a rainbow?", opts: ["5", "6", "7", "8"], a: 2 },
      { q: "What do bees produce?", opts: ["Milk", "Honey", "Wax only", "Silk"], a: 1 },
      { q: "Which is the smallest continent?", opts: ["Europe", "Australia", "Antarctica", "South America"], a: 1 },
      { q: "How many hours are in a day?", opts: ["12", "20", "24", "36"], a: 2 },
      { q: "Which shape has three sides?", opts: ["Square", "Circle", "Triangle", "Rectangle"], a: 2 },
      { q: "What season comes after winter?", opts: ["Summer", "Autumn", "Spring", "Fall"], a: 2 },
      { q: "What is the opposite of hot?", opts: ["Warm", "Cool", "Cold", "Freezing"], a: 2 },
    ],
    medium: [
      { q: "What is the chemical symbol for gold?", opts: ["Go", "Gd", "Au", "Ag"], a: 2 },
      { q: "Who painted the Mona Lisa?", opts: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], a: 2 },
      { q: "What is the longest river in the world?", opts: ["Amazon", "Nile", "Yangtze", "Mississippi"], a: 1 },
      { q: "In what year did World War II end?", opts: ["1943", "1944", "1945", "1946"], a: 2 },
      { q: "What is the square root of 144?", opts: ["11", "12", "13", "14"], a: 1 },
      { q: "Which element has the atomic number 1?", opts: ["Helium", "Oxygen", "Hydrogen", "Carbon"], a: 2 },
      { q: "Who wrote 'Romeo and Juliet'?", opts: ["Dickens", "Shakespeare", "Austen", "Tolstoy"], a: 1 },
      { q: "What is the capital of Japan?", opts: ["Kyoto", "Osaka", "Hiroshima", "Tokyo"], a: 3 },
      { q: "What is the currency of the United Kingdom?", opts: ["Euro", "Dollar", "Pound", "Franc"], a: 2 },
      { q: "How many players are in a standard soccer team?", opts: ["9", "10", "11", "12"], a: 2 },
      { q: "Which planet has the most moons?", opts: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 1 },
      { q: "What is the hardest natural substance on Earth?", opts: ["Gold", "Iron", "Diamond", "Quartz"], a: 2 },
    ],
    hard: [
      { q: "What is the capital of Kazakhstan?", opts: ["Almaty", "Astana", "Shymkent", "Aktobe"], a: 1 },
      { q: "Who developed the theory of general relativity?", opts: ["Newton", "Bohr", "Einstein", "Heisenberg"], a: 2 },
      { q: "What is the smallest country in the world by area?", opts: ["Monaco", "Nauru", "San Marino", "Vatican City"], a: 3 },
      { q: "In which year was the United Nations founded?", opts: ["1944", "1945", "1946", "1947"], a: 1 },
      { q: "What is the chemical symbol for tungsten?", opts: ["Tu", "Tg", "W", "Wn"], a: 2 },
      { q: "How many bones does an adult human have?", opts: ["196", "206", "216", "226"], a: 1 },
      { q: "Who wrote 'Crime and Punishment'?", opts: ["Tolstoy", "Chekhov", "Dostoevsky", "Turgenev"], a: 2 },
      { q: "What is the deepest lake in the world?", opts: ["Caspian Sea", "Superior", "Baikal", "Tanganyika"], a: 2 },
      { q: "What element does 'Pb' stand for on the periodic table?", opts: ["Platinum", "Lead", "Phosphorus", "Palladium"], a: 1 },
      { q: "What is the speed of light in vacuum (approx)?", opts: ["200,000 km/s", "250,000 km/s", "300,000 km/s", "350,000 km/s"], a: 2 },
    ],
  },

  // ==========================================
  //  SCIENCE
  // ==========================================
  science: {
    easy: [
      { q: "What gas do plants absorb from the air?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], a: 1 },
      { q: "What is the center of an atom called?", opts: ["Electron", "Proton", "Nucleus", "Core"], a: 2 },
      { q: "What force keeps us on the ground?", opts: ["Magnetism", "Friction", "Gravity", "Tension"], a: 2 },
      { q: "What is H₂O commonly known as?", opts: ["Salt", "Sugar", "Water", "Acid"], a: 2 },
      { q: "Which organ pumps blood in the human body?", opts: ["Lungs", "Brain", "Liver", "Heart"], a: 3 },
      { q: "What is the closest star to Earth?", opts: ["Sirius", "Alpha Centauri", "Betelgeuse", "The Sun"], a: 3 },
      { q: "What type of animal is a whale?", opts: ["Fish", "Reptile", "Mammal", "Amphibian"], a: 2 },
      { q: "What is the powerhouse of the cell?", opts: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], a: 2 },
      { q: "What is the largest organ in the human body?", opts: ["Brain", "Liver", "Lungs", "Skin"], a: 3 },
      { q: "What planet is closest to the Sun?", opts: ["Venus", "Mercury", "Earth", "Mars"], a: 1 },
      { q: "What does DNA stand for?", opts: ["Deoxyribonucleic Acid", "Digital Nucleic Acid", "Dual Nitrogen Array", "Dynamic Nuclear Atom"], a: 0 },
      { q: "Which vitamin does sunlight provide?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], a: 3 },
      { q: "What is the process by which a liquid turns into gas?", opts: ["Condensation", "Freezing", "Evaporation", "Sublimation"], a: 2 },
      { q: "What blood type is the universal donor?", opts: ["A+", "B-", "AB+", "O-"], a: 3 },
      { q: "How many chambers does the human heart have?", opts: ["2", "3", "4", "5"], a: 2 },
      { q: "What is the chemical formula for table salt?", opts: ["KCl", "NaOH", "NaCl", "HCl"], a: 2 },
      { q: "Which is the most abundant gas in Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], a: 2 },
      { q: "What do plants need to make food through photosynthesis?", opts: ["Moonlight & water", "Sunlight & CO2", "Heat & oxygen", "Wind & soil"], a: 1 },
      { q: "How many bones are in the human spine?", opts: ["24", "26", "33", "40"], a: 2 },
      { q: "What is the boiling point of water at sea level in Celsius?", opts: ["90", "95", "100", "110"], a: 2 },
    ],
    medium: [
      { q: "What is the atomic number of carbon?", opts: ["4", "6", "8", "12"], a: 1 },
      { q: "What type of bond involves sharing electrons?", opts: ["Ionic", "Covalent", "Metallic", "Hydrogen"], a: 1 },
      { q: "What organ produces insulin?", opts: ["Liver", "Kidney", "Pancreas", "Stomach"], a: 2 },
      { q: "What is the SI unit of electric current?", opts: ["Volt", "Ohm", "Ampere", "Watt"], a: 2 },
      { q: "What is the process by which cells divide?", opts: ["Meiosis", "Mitosis", "Osmosis", "Photolysis"], a: 1 },
      { q: "Who proposed the theory of evolution by natural selection?", opts: ["Mendel", "Pasteur", "Darwin", "Lamarck"], a: 2 },
      { q: "What is the name of the force that resists motion?", opts: ["Gravity", "Tension", "Friction", "Normal force"], a: 2 },
      { q: "What is the pH of a neutral solution?", opts: ["0", "5", "7", "14"], a: 2 },
      { q: "What is the most abundant element in the universe?", opts: ["Helium", "Oxygen", "Carbon", "Hydrogen"], a: 3 },
      { q: "What phenomenon explains why the sky is blue?", opts: ["Reflection", "Diffraction", "Rayleigh scattering", "Absorption"], a: 2 },
    ],
    hard: [
      { q: "What is the Heisenberg Uncertainty Principle about?", opts: ["Energy conservation", "Particle spin", "Position & momentum precision", "Wave-particle duality"], a: 2 },
      { q: "What is the half-life of Carbon-14?", opts: ["1,000 years", "3,700 years", "5,730 years", "10,000 years"], a: 2 },
      { q: "What particle mediates the electromagnetic force?", opts: ["Gluon", "W boson", "Graviton", "Photon"], a: 3 },
      { q: "What is the name of the process by which stars generate energy?", opts: ["Fission", "Fusion", "Combustion", "Radioactive decay"], a: 1 },
      { q: "What is the Chandrasekhar limit?", opts: ["Max neutron star mass", "Max white dwarf mass", "Min black hole mass", "Min galaxy size"], a: 1 },
      { q: "What does CRISPR stand for?", opts: ["Clustered Regularly Interspaced Short Palindromic Repeats", "Cytosine Repair in Short Plasmid Regions", "Chromosomal RNA Insertion System for Protein Recoding", "Complementary RNA Induced Substitution Protocol"], a: 0 },
      { q: "Which equation describes the photoelectric effect?", opts: ["E = mc²", "E = hf", "F = ma", "PV = nRT"], a: 1 },
      { q: "What is the approximate age of the universe?", opts: ["6 billion years", "10 billion years", "13.8 billion years", "20 billion years"], a: 2 },
      { q: "What is the name of the process by which a solid turns directly into gas?", opts: ["Evaporation", "Condensation", "Sublimation", "Deposition"], a: 2 },
      { q: "What is dark matter?", opts: ["Matter that doesn't emit light but has gravity", "Black holes", "Anti-matter", "Extremely cold gas clouds"], a: 0 },
    ],
  },

  // ==========================================
  //  HISTORY
  // ==========================================
  history: {
    easy: [
      { q: "Who was the first President of the United States?", opts: ["Adams", "Jefferson", "Lincoln", "Washington"], a: 3 },
      { q: "In which year did World War I begin?", opts: ["1910", "1912", "1914", "1916"], a: 2 },
      { q: "Who built the Pyramids of Giza?", opts: ["Romans", "Greeks", "Egyptians", "Persians"], a: 2 },
      { q: "What empire was Julius Caesar a part of?", opts: ["Greek", "Ottoman", "Roman", "Persian"], a: 2 },
      { q: "Which country was the first to land on the Moon?", opts: ["USSR", "UK", "China", "USA"], a: 3 },
      { q: "What event started World War II?", opts: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Attack on Pearl Harbor", "Fall of France"], a: 1 },
      { q: "Who was the first woman to win a Nobel Prize?", opts: ["Florence Nightingale", "Amelia Earhart", "Marie Curie", "Rosa Parks"], a: 2 },
      { q: "What year did the Berlin Wall fall?", opts: ["1987", "1988", "1989", "1990"], a: 2 },
      { q: "Where was Napoleon Bonaparte born?", opts: ["France", "Italy", "Corsica", "Spain"], a: 2 },
      { q: "Which ancient wonder was located in Alexandria?", opts: ["Hanging Gardens", "Colossus", "Great Lighthouse", "Statue of Zeus"], a: 2 },
    ],
    medium: [
      { q: "What was the main cause of the French Revolution?", opts: ["Religious conflict", "Famine & inequality", "Foreign invasion", "Royal succession dispute"], a: 1 },
      { q: "Who was the last Tsar of Russia?", opts: ["Alexander III", "Nicholas I", "Nicholas II", "Alexander II"], a: 2 },
      { q: "In which year did India gain independence?", opts: ["1945", "1946", "1947", "1948"], a: 2 },
      { q: "Who was the first emperor of China?", opts: ["Kublai Khan", "Qin Shi Huang", "Sun Yat-sen", "Mao Zedong"], a: 1 },
      { q: "The Renaissance began in which country?", opts: ["France", "England", "Germany", "Italy"], a: 3 },
      { q: "What ship sank after hitting an iceberg in 1912?", opts: ["Lusitania", "Britannic", "Olympic", "Titanic"], a: 3 },
      { q: "Who was the leader of the Soviet Union during WWII?", opts: ["Lenin", "Khrushchev", "Stalin", "Brezhnev"], a: 2 },
      { q: "Where did the Black Death originate?", opts: ["Europe", "Middle East", "Africa", "Central Asia"], a: 3 },
      { q: "In what year was the Magna Carta signed?", opts: ["1215", "1315", "1415", "1515"], a: 0 },
      { q: "Which civilization built Machu Picchu?", opts: ["Aztec", "Maya", "Inca", "Olmec"], a: 2 },
    ],
    hard: [
      { q: "Who was the Byzantine emperor during the fall of Constantinople?", opts: ["Justinian I", "Basil II", "Constantine XI", "Alexios I"], a: 2 },
      { q: "What treaty ended the Thirty Years' War?", opts: ["Treaty of Utrecht", "Peace of Westphalia", "Treaty of Paris", "Congress of Vienna"], a: 1 },
      { q: "Which pharaoh is credited with building the first step pyramid?", opts: ["Khufu", "Ramesses II", "Djoser", "Thutmose III"], a: 2 },
      { q: "What was the name of the first artificial satellite launched into space?", opts: ["Vostok", "Explorer 1", "Luna 1", "Sputnik 1"], a: 3 },
      { q: "The Meiji Restoration took place in which country?", opts: ["China", "Korea", "Japan", "Vietnam"], a: 2 },
      { q: "Who wrote the Communist Manifesto alongside Karl Marx?", opts: ["Lenin", "Engels", "Trotsky", "Bakunin"], a: 1 },
      { q: "In what year did the Ottoman Empire officially end?", opts: ["1918", "1920", "1922", "1924"], a: 2 },
      { q: "What battle marked the end of the Napoleonic Wars?", opts: ["Austerlitz", "Trafalgar", "Leipzig", "Waterloo"], a: 3 },
      { q: "Who was the first person to circumnavigate the globe (expedition)?", opts: ["Columbus", "Magellan", "Drake", "Vespucci"], a: 1 },
      { q: "What was the name of the operation for the D-Day landings?", opts: ["Operation Overlord", "Operation Barbarossa", "Operation Market Garden", "Operation Neptune"], a: 0 },
    ],
  },

  // ==========================================
  //  TECHNOLOGY
  // ==========================================
  tech: {
    easy: [
      { q: "What does 'CPU' stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Core Power Unit", "Central Program Utility"], a: 0 },
      { q: "What does 'WWW' stand for?", opts: ["World Wide Web", "Wide World Wire", "Web World Wide", "World Wire Web"], a: 0 },
      { q: "What company created the iPhone?", opts: ["Samsung", "Google", "Apple", "Microsoft"], a: 2 },
      { q: "What does 'USB' stand for?", opts: ["Universal Serial Bus", "Ultra Speed Broadband", "Unified System Bridge", "Universal System Bridge"], a: 0 },
      { q: "What is the most popular search engine in the world?", opts: ["Bing", "Yahoo", "DuckDuckGo", "Google"], a: 3 },
      { q: "What does 'RAM' stand for?", opts: ["Rapid Access Module", "Random Access Memory", "Read And Modify", "Runtime Application Memory"], a: 1 },
      { q: "What programming language is known as the language of the web?", opts: ["Python", "Java", "JavaScript", "C++"], a: 2 },
      { q: "What does 'OS' stand for in computing?", opts: ["Open Software", "Operating System", "Output System", "Offline Server"], a: 1 },
      { q: "Which company makes the Android operating system?", opts: ["Apple", "Microsoft", "Amazon", "Google"], a: 3 },
      { q: "What is the shortcut key for copying text?", opts: ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"], a: 2 },
    ],
    medium: [
      { q: "What does 'HTTP' stand for?", opts: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Platform", "Host Transfer Technology Protocol"], a: 0 },
      { q: "Which data structure uses LIFO (Last In, First Out)?", opts: ["Queue", "Array", "Stack", "Linked List"], a: 2 },
      { q: "What does 'SQL' stand for?", opts: ["Structured Query Language", "Simple Queue Language", "System Query Logic", "Structured Queue Lookup"], a: 0 },
      { q: "What is the binary representation of the decimal number 10?", opts: ["1000", "1010", "0110", "1100"], a: 1 },
      { q: "Which protocol is used for sending emails?", opts: ["FTP", "HTTP", "SMTP", "SSH"], a: 2 },
      { q: "What is the time complexity of binary search?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], a: 2 },
      { q: "What does 'IP' stand for in networking?", opts: ["Internet Protocol", "Internal Process", "Input Port", "Integrated Platform"], a: 0 },
      { q: "What does 'API' stand for?", opts: ["Application Programming Interface", "Automated Protocol Integration", "Advanced Program Input", "Application Process Interface"], a: 0 },
      { q: "What is a 'byte' composed of?", opts: ["4 bits", "8 bits", "16 bits", "32 bits"], a: 1 },
      { q: "Which language is primarily used for styling web pages?", opts: ["HTML", "JavaScript", "Python", "CSS"], a: 3 },
    ],
    hard: [
      { q: "What is the CAP theorem in distributed systems?", opts: ["Consistency, Availability, Partition tolerance — only 2 guaranteed", "Caching, Atomicity, Performance", "Clustering, Archiving, Processing", "Concurrency, Availability, Persistence"], a: 0 },
      { q: "What is the worst-case time complexity of QuickSort?", opts: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], a: 1 },
      { q: "What does SOLID stand for in OOP?", opts: ["Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion", "Scalable, Optimized, Lightweight, Integrated, Dynamic", "Structured, Object-oriented, Layered, Integrated, Documented", "Simple, Open, Linked, Indexed, Dynamic"], a: 0 },
      { q: "What hashing algorithm is used in Bitcoin's proof-of-work?", opts: ["MD5", "SHA-1", "SHA-256", "Keccak-256"], a: 2 },
      { q: "What is a Turing-complete language?", opts: ["A language that can simulate any Turing machine", "A language with infinite loops only", "A language designed by Alan Turing", "A language that only handles arithmetic"], a: 0 },
      { q: "Which sorting algorithm has O(n) best-case complexity?", opts: ["Merge Sort", "Heap Sort", "Insertion Sort", "Selection Sort"], a: 2 },
      { q: "What does the 'V8' engine do?", opts: ["Renders HTML in Chrome", "Compiles and executes JavaScript in Chrome/Node.js", "Manages memory in Linux", "Powers the Edge browser"], a: 1 },
      { q: "What is memoization in programming?", opts: ["Storing function results to avoid redundant computation", "Allocating memory dynamically", "A debugging technique", "A form of data encryption"], a: 0 },
      { q: "What is a closure in JavaScript?", opts: ["A function that closes the program", "A function that retains access to its outer scope after execution", "A sealed object that can't be modified", "A callback fired on page unload"], a: 1 },
      { q: "What does 'eventual consistency' mean in databases?", opts: ["Data is always immediately consistent", "System guarantees data will become consistent over time", "Consistency is never guaranteed", "Only certain nodes maintain consistency"], a: 1 },
    ],
  },

  // ==========================================
  //  SPORTS
  // ==========================================
  sports: {
    easy: [
      { q: "How many players are on a basketball team on the court?", opts: ["4", "5", "6", "7"], a: 1 },
      { q: "In soccer, how many players are on each team?", opts: ["9", "10", "11", "12"], a: 2 },
      { q: "What sport uses a shuttlecock?", opts: ["Tennis", "Squash", "Badminton", "Pickleball"], a: 2 },
      { q: "How many holes are in a standard golf course?", opts: ["9", "12", "18", "24"], a: 2 },
      { q: "What color is the center of an archery target?", opts: ["Red", "Blue", "Black", "Yellow/Gold"], a: 3 },
      { q: "In which sport would you perform a slam dunk?", opts: ["Volleyball", "Basketball", "Handball", "Netball"], a: 1 },
      { q: "What is the maximum score in a single frame of bowling?", opts: ["10", "15", "20", "30"], a: 0 },
      { q: "How long is a standard marathon (km)?", opts: ["26 km", "32 km", "42.2 km", "50 km"], a: 2 },
      { q: "What sport is played at Wimbledon?", opts: ["Squash", "Badminton", "Tennis", "Table Tennis"], a: 2 },
      { q: "In baseball, how many strikes result in an out?", opts: ["2", "3", "4", "5"], a: 1 },
    ],
    medium: [
      { q: "How many gold medals did Michael Phelps win in his Olympic career?", opts: ["18", "21", "23", "27"], a: 2 },
      { q: "What country has won the most FIFA World Cup titles?", opts: ["Germany", "Italy", "Argentina", "Brazil"], a: 3 },
      { q: "In tennis, what is a score of 40–40 called?", opts: ["Tiebreak", "Deuce", "Advantage", "Set point"], a: 1 },
      { q: "What is the diameter of a basketball hoop (inches)?", opts: ["14", "16", "18", "20"], a: 2 },
      { q: "How many periods are in a standard NHL hockey game?", opts: ["2", "3", "4", "5"], a: 1 },
      { q: "What is the highest belt in judo?", opts: ["Black", "Red-White", "Red", "Gold"], a: 2 },
      { q: "What sport takes place in a velodrome?", opts: ["Athletics", "Swimming", "Track cycling", "Gymnastics"], a: 2 },
      { q: "How many players are on a volleyball team on the court?", opts: ["5", "6", "7", "8"], a: 1 },
      { q: "What does 'par' mean in golf?", opts: ["One under", "Expected strokes for a hole", "Best score ever", "One over"], a: 1 },
      { q: "In which sport do you compete for the Stanley Cup?", opts: ["Football", "Basketball", "Ice Hockey", "Baseball"], a: 2 },
    ],
    hard: [
      { q: "Which tennis player has the most Grand Slam singles titles (men's)?", opts: ["Federer", "Djokovic", "Nadal", "Sampras"], a: 1 },
      { q: "What year were women first allowed to compete in the modern Olympics?", opts: ["1896", "1900", "1908", "1920"], a: 1 },
      { q: "In Formula 1, what is DRS?", opts: ["Dual Rear Suspension", "Drag Reduction System", "Dynamic Racing System", "Differential Rotation Selector"], a: 1 },
      { q: "How many dimples does a standard golf ball have?", opts: ["236", "336", "336–340 (varies)", "400+"], a: 2 },
      { q: "What is the Fosbury Flop?", opts: ["Ski jump technique", "High jump technique", "Gymnastics vault", "Rowing style"], a: 1 },
      { q: "Which country invented the sport of basketball?", opts: ["USA", "Canada", "UK", "Germany"], a: 0 },
      { q: "What is the 'triple double' in basketball?", opts: ["Three consecutive wins", "10+ in three stat categories in one game", "Three consecutive three-pointers", "Scoring in three different ways"], a: 1 },
      { q: "Which boxer was known as 'The Greatest'?", opts: ["Mike Tyson", "Joe Frazier", "Muhammad Ali", "Sugar Ray Leonard"], a: 2 },
      { q: "In which sport is the 'Haka' performed?", opts: ["Australian Football", "Rugby", "Cricket", "Soccer"], a: 1 },
      { q: "What is the fastest tennis serve ever recorded (approx)?", opts: ["230 km/h", "251 km/h", "263 km/h", "280 km/h"], a: 2 },
    ],
  },

};
