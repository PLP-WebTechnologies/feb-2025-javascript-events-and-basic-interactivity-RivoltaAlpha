const heroes = [
    {
      name: "Luffy",
      power: "Gear 5 🌀",
      image: "https://th.bing.com/th/id/OIP.WRtzvEiRLYiZ1kUhhOOTOwHaEK?w=286&h=181&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Gojo",
      power: "Limitless + Infinity 🧿",
      image: "https://th.bing.com/th/id/OIP.JBKabovmlAFz44Bt1RTe9gHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Kakashi",
      power: "Chidori ⚡",
      image: "https://th.bing.com/th/id/OIP.tIclBla7uqvIg_u1ckTKfQHaEK?w=271&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Zoro",
      power: "Three Sword Style 🗡️",
      image: "https://th.bing.com/th/id/OIP.ROoQvqOPtB6VAIYkilGnOAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Trafalgar D. Water Law",
      power: "ROOM - Op Op Fruit 💉",
      image: "https://th.bing.com/th/id/OIP.6xctekG-_sqQod_E6cnyMQHaEK?w=288&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Kilua",
        power: "Godspeed ⚡",
        image: "https://th.bing.com/th/id/OIP.eQImgwNO5zO5rJKuAiLM8QHaFD?w=263&h=180&c=7&r=0&o=5&pid=1.7"
    }
  ];
  
  // Event Handling for Summoning a Hero
  document.getElementById("summonBtn").addEventListener("click", () => {
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    document.getElementById("heroContainer").innerHTML = `
      <h3>${hero.name}</h3>
      <img src="${hero.image}" alt="${hero.name}" />
      <p class="power">Power: ${hero.power}</p>
    `;
  });
  
  // Image Slideshow (auto change every 3 sec)
  const slideshowImages = [
    "https://th.bing.com/th/id/OIP.zLMYPtWtnYrvXSrlhjpwKQHaEJ?w=320&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.EXpVEeFlU3fKXUg-fNhfGAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.G6c56dhN4Hibr6LouQuC8gHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7"
  ];
  let slideIndex = 0;
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slideshowImages.length;
    document.getElementById("animeImage").src = slideshowImages[slideIndex];
  }, 3000);
  
  // Tabs logic
  function showTab(tabId) {
    // Hide all tab-content elements
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected tab-content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
  }
  
  // Keypress Detection
  document.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Secret double-click Easter egg
  document.getElementById("heroContainer").addEventListener("dblclick", () => {
    alert("🧠 Secret Technique Activated!");
  });
  
  // Form Validation
  document.getElementById("ninjaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let message = "";
  
    if (!name || !email || password.length < 8) {
      message = "⚠️ Please fill in all fields correctly!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      message = "✉️ Invalid email format!";
    } else {
      message = `✅ Welcome, ${name}-san! You’ve joined the academy.`;
    }
  
    document.getElementById("formFeedback").innerText = message;
  });
  