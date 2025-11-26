// -------------------- Greeting App --------------------

// Store user name
let userName = "";
try {
  if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    const nameInput = document.getElementById("nameInput");
    if (nameInput) nameInput.value = userName;
  }
} catch (e) {
  console.error("Error accessing localStorage:", e);
}

// Track current background class
let currentBackground = "";

// Enhanced Bible verses with categories
const versesMorning = [
  {text: "Lamentations 3:22-23 - 'Mohlomong wa Morena o mebile mesong ka mehla.'", category: "hope"},
  {text: "Psalm 5:3 - 'Mesong, Morena, o kwa lentswe la ka.'", category: "faith"},
  {text: "Psalm 59:16 - 'Ke tla opela ka maatla a gago mesong.'", category: "strength"},
  {text: "Psalm 30:5 - 'Mehla ya go lla e ka tšwela pele bosiu, eupša thabo e tla mesong.'", category: "joy"},
  {text: "Psalm 143:8 - 'A mesong e tle le mafoko a lerato la gago le sa felego.'", category: "love"},
  {text: "Psalm 90:14 - 'Re kgotsofatše mesong ka lerato la gago le sa felego.'", category: "love"},
  {text: "Psalm 119:147 - 'Ke tsoga pele ga khutšo ya mesong ke lla ka thušo.'", category: "faith"},
  {text: "Psalm 92:2 - 'Ditiro tša gago ke dikgolo; ke tla bolela ka mešomo ya gago.'", category: "joy"},
  {text: "Psalm 63:1 - 'Modimo, wena ke wena Modimo wa ka; ke go nyaka ka mafolofolo.'", category: "faith"},
  {text: "Psalm 88:13 - 'Le gona ke go bitša, Morena, letšatši le letšatši.'", category: "faith"}
];

const versesDay = [
  {text: "Psalm 118:24 - 'Letšatši le ke la Morena; itumelele o thabe.'", category: "joy"},
  {text: "Colossians 3:23 - 'Šoma ka pelo yohle, bjalo ka go šoma go Morena.'", category: "strength"},
  {text: "Proverbs 16:3 - 'Abela Morena mošomo wa gago, gomme maano a gago a tla atlega.'", category: "guidance"},
  {text: "Ecclesiastes 9:10 - 'Selo se sengwe le se sengwe seo seatla sa gago se se hweditšego se se dirago, se se dire ka maatla ohle a gago.'", category: "strength"},
  {text: "Psalm 37:5 - 'Abela Morena tsela ya gago.'", category: "faith"},
  {text: "Isaiah 41:10 - 'O seke wa boifa, ka ge ke le le wena.'", category: "strength"},
  {text: "Philippians 4:13 - 'Ke kgona dilo tsohle ka Kriste.'", category: "strength"},
  {text: "Joshua 1:9 - 'Eba maatla le sebete.'", category: "strength"},
  {text: "Psalm 34:8 - 'Latša o bone gore Morena ke mo go botse.'", category: "joy"},
  {text: "Proverbs 3:6 - 'Mo ditseleng tšohle tse o di dirago o mo lemoge.'", category: "guidance"}
];

const versesAfternoon = [
  {text: "Isaiah 40:31 - 'Bao ba tshepang go Morena ba tla oketša maatla a bona.'", category: "hope"},
  {text: "Psalm 27:14 - 'Emela Morena; eba maatla.'", category: "strength"},
  {text: "Philippians 4:6 - 'O seke wa tshwenyega ka selo le sengwe.'", category: "anxiety"},
  {text: "Psalm 46:10 - 'Dumella, o be le tsebo gore ke Modimo.'", category: "peace"},
  {text: "Psalm 119:105 - 'Lefoko la gago ke lebone mo maotong a ka.'", category: "guidance"},
  {text: "Psalm 34:18 - 'Morena o haufi le ba pelo e senyegilego.'", category: "comfort"},
  {text: "Psalm 55:22 - 'Rasa boima bja gago go Morena.'", category: "anxiety"},
  {text: "Matthew 11:28 - 'Tla go nna, le lona bohle ba lapilego.'", category: "peace"},
  {text: "Psalm 9:10 - 'Bao ba tsebago leina la gago ba go tshepa.'", category: "faith"},
  {text: "Psalm 31:24 - 'Eba maatla gomme pelo ya gago e tshepe, le lona ba tshepang go Morena.'", category: "hope"}
];

const versesEvening = [
  {text: "Psalm 141:2 - 'Thapelo ya ka a e be pele ga gago bjalo ka phofo ya monko.'", category: "faith"},
  {text: "Psalm 119:148 - 'Maotong a ka a tsoga ka mehla nakong ya diphantšho tša bosiu.'", category: "faith"},
  {text: "Psalm 4:8 - 'Ka kgotso ke tla robala ke robala.'", category: "peace"},
  {text: "Psalm 63:6 - 'Mo beteng ya ka ke go gopola.'", category: "faith"},
  {text: "Psalm 16:7 - 'Ke tla leboga Morena, yo a ngethago kgothatso.'", category: "joy"},
  {text: "Psalm 121:3 - 'O ka se letle maoto a gago a thebe.'", category: "peace"},
  {text: "Psalm 91:1-2 - 'Yo mongwe le yo mongwe yo a dulago mo lefelong la Godimo ka moka.'", category: "peace"},
  {text: "Psalm 27:1 - 'Morena ke lesedi la ka le pholo ya ka.'", category: "strength"},
  {text: "Psalm 145:18 - 'Morena o haufi le bohle ba mo bitšago.'", category: "faith"},
  {text: "Psalm 34:4 - 'Ke nyakile Morena, gomme o nkgopetše.'", category: "faith"}
];

const versesNight = [
  {text: "Psalm 4:8 - 'Ka kgotso ke tla robala ke robala.'", category: "peace"},
  {text: "Psalm 127:2 - 'Go se na mohola go tsoga ka dihlong tša mathomo a letšatši.'", category: "peace"},
  {text: "Proverbs 3:24 - 'Ge o robala, o se ke wa boifa.'", category: "peace"},
  {text: "Psalm 91:1 - 'Yo a dulago mo lefelong la yo Godimo ka moka.'", category: "peace"},
  {text: "Psalm 63:6 - 'Mo beteng ya ka ke go gopola.'", category: "faith"},
  {text: "Psalm 16:8 - 'Maotong a ka a dule a le go Morena ka mehla.'", category: "faith"},
  {text: "Psalm 121:7 - 'Morena o tla go boloka go tšwa mo gohle go senya.'", category: "peace"},
  {text: "Psalm 91:5 - 'O se ke wa boifa tšhabo ya bosiu.'", category: "peace"},
  {text: "Psalm 119:148 - 'Maotong a ka a tsoga pele ga diphantšho tša bosiu.'", category: "faith"},
  {text: "Psalm 31:20 - 'O ba boloka ka kgotso e phethahetseng bao menagano ya bona e lego go wena.'", category: "peace"}
];

// Additional categorized verses
const additionalVerses = [
  {text: "Jeremiah 29:11 - 'Ka ge ke tseba maano ao ke a nago le wona a gago, go bolela Morena, maano a go lokisa bophelo bja gago le go se diragatše selo se se bose, go go fa bokamoso le tsholofelo.'", category: "hope"},
  {text: "Romans 15:13 - 'Modimo wa tsholofelo a go tletse ka thabo le kgotso ka tumelo, gore ka maatla a Moya o Mophadimakgolo o tle o go tlišetše tsholofelo e kgolo.'", category: "hope"},
  {text: "Psalm 34:17 - 'Ge ba lokile ba lla ba kopa thušo, Morena o a kwa gomme o ba phološa go tšwa mo dikgwetlong tšohle.'", category: "hope"},
  {text: "John 14:27 - 'Kgotso ke go tlošetsa; kgotso ya ka ke ke go nea. E sego bjalo ka ge lefase le nea, ke go nea. Pelo ya lena e se ke ya tshwenyega, le seke la boifa.'", category: "peace"},
  {text: "Philippians 4:7 - 'Gomme kgotso ya Modimo, yeo e fetago kutlwelobotlhoko ka moka, e tla bewa pelo ya lena le monagano wa lena ka Kriste Jesu.'", category: "peace"},
  {text: "Isaiah 26:3 - 'O mo boloka ka kgotso e phethahetseng yo monagano wa gagwe o bego o tshepa go wena, ka ge a tshepa go wena.'", category: "peace"},
  {text: "Deuteronomy 31:6 - 'Eba maatla le sebete. O seke wa boifa goba go šala ke tšona; ka ge Morena Modimo wa gago ke yena yo a sepela le wena. O ka se go tloše goba go go lahle.'", category: "strength"},
  {text: "Isaiah 41:10 - 'O seke wa boifa, ka ge ke le le wena; o seke wa nyaka tshwelopele, ka ge ke Modimo wa gago; ke tla go matlafatša, ke tla go thuša, ke tla go tshegetsa ka letsoho la ka le le lokilego.'", category: "strength"},
  {text: "Psalm 28:7 - 'Morena ke maatla a ka le tshireletso ya ka; mo go yena pelo ya ka e tshepa, gomme ke a thušwa; pelo ya ka e a thaba, gomme ka pina ya ka ke leboga yena.'", category: "strength"},
  {text: "1 Peter 5:7 - 'Rasa ditlhobolo tša gago ka moka go yena, ka ge o go hlokomela.'", category: "anxiety"},
  {text: "Matthew 6:34 - 'Ka fao o seke wa tshwenyega ka kamoso, ka ge kamoso go tla tshwenya yona; mathata a letšatši a lekana le lona.'", category: "anxiety"},
  {text: "Psalm 94:19 - 'Ge ditlhong tša pelo ya ka di le dintši, ditlhokomelo tša gago di a thabela moya wa ka.'", category: "anxiety"},
  {text: "Psalm 16:11 - 'O mpontšha tsela ya bophelo; mo go gago go tletse thabo; mo letsohong la gago le le letona go tletse boithabišo ka mo nakong ka moka.'", category: "joy"},
  {text: "Nehemiah 8:10 - 'Thabo ya Morena ke maatla a gago.'", category: "joy"},
  {text: "Romans 12:12 - 'Itumelele ka tsholofelo, o be le mamello mo dikgweding tša mathata, o dule o rapela.'", category: "joy"},
  {text: "1 John 4:19 - 'Re rata ka ge yena a re ratile pele.'", category: "love"},
  {text: "John 3:16 - 'Ka ge Modimo a ratile lefase ka mo go kgotsofatšago, a fa Morwa wa gagwe o tee, gore yo a dumelago go yena a se ka a senyega, eupša a phele ka boswa.'", category: "love"},
  {text: "1 Corinthians 13:4 - 'Lerato le na le mamello le botho; lerato ga le ikwa le go kgotsofala, ga le boifa, ga le ikgolele.'", category: "love"},
  {text: "Proverbs 3:5-6 - 'Tlhompho go Morena ka pelo yotlhe ya gago, gomme o seke wa itlhompha ka kutlwelobotlhoko ya gago; mo ditseleng tšohle tse o di dirago o mo lemoge, gomme o tla straight ditaelo tša gago.'", category: "faith"},
  {text: "Hebrews 11:1 - 'Tumelo ke netefatso ya dilo tšeo o di tshwanelago go di tšepa, tumelo ya dilo tšeo di sa bonwego.'", category: "faith"},
  {text: "James 1:5 - 'Ge yo mongwe wa lena a hloka bohlale, a botse Modimo, yo a fanago ka go se šalele go bohle, gomme a tla mo fa yona.'", category: "guidance"}
];

// -------------------- Daily Quotes --------------------
const dailyQuotes = [
  "Tlhompho go Morena ka pelo yotlhe ya gago. – Proverbs 3:5",
  "O seke wa tshwenyega ka selo le sengwe. – Philippians 4:6",
  "Ke kgona dilo tsohle ka Kriste. – Philippians 4:13",
  "Morena ke morena wa ka; ke ka se nyake selo. – Psalm 23:1",
  "Eba maatla le sebete. – Joshua 1:9",
  "Abela Morena mošomo wa gago, mme maano a gago a tla atlega. – Proverbs 16:3",
  "Morena ke lesedi la ka le pholo ya ka—ke ka se tshwenyega? – Psalm 27:1",
  "Ke a tseba maano ao ke a nago le wona a gago, ho bolela Morena, maano a go lokisa bophelo bja gago le go go fa tsholofelo. – Jeremiah 29:11",
  "Rasa pelo ya gago go yena, ka ge o a go hlokomela. – 1 Peter 5:7",
  "Lefoko la lerato la Morena le a hlola go fela. – Lamentations 3:22",
  "Itumelele go Morena, gomme o tla go nea seo pelo ya gago e se nyakago. – Psalm 37:4",
  "Dumella, o be le tsebo gore ke Modimo. – Psalm 46:10",
  "Morena o haufi le bohle ba mo bitšago. – Psalm 145:18",
  "Modimo ke setšhaba sa rena le maatla a rena, thuso e kgotsofatšago nakong ya mathata. – Psalm 46:1",
  "Dilo tsohle tše o di dirago di be ka lerato. – 1 Corinthians 16:14",
  "Thabo ya Morena ke maatla a gago. – Nehemiah 8:10",
  "Itumelele ka mehla, rapela ka mehla. – 1 Thessalonians 5:16-17",
  "O fa maatla bao ba tlaišego, gomme go yena yo a se nago maatla, o oketša maatla. – Isaiah 40:29",
  "Lefa boima bja gago go Morena, mme o tla go tshegetsa. – Psalm 55:22",
  "Etsa gore lesedi la gago le phadime pele ga batho. – Matthew 5:16",
  "Ke tla go ruta le go go ruta ka tsela yeo o swanetšego go e sepela. – Psalm 32:8",
  "Morena ke mo go botse go bohle. – Psalm 145:9",
  "Lefoko la gago ke lebone mo maotong a ka, le lesedi mo tseleng ya ka. – Psalm 119:105",
  "O seke wa boifa, ka ge ke le le wena. – Isaiah 41:10",
  "Mo dilong ka moka o leboge. – 1 Thessalonians 5:18",
  "O se ke wa fenya ke sebe, eupša fenya sebe ka botse. – Romans 12:21",
  "Ratang moagi wa gago bjalo ka ge o ipheta. – Matthew 22:39",
  "Morena o lokile mo ditseleng tsa gagwe ka moka. – Psalm 145:17",
  "Emela Morena; eba maatla, gomme pelo ya gago e tshepe. – Psalm 27:14",
  "Kgotso ke go tlošetsa; kgotso ya ka ke ke go nea. – John 14:27",
  "Modimo o tšepahala; ga a tlo go tliša tlhahlobo go feta maatla a gago. – 1 Corinthians 10:13"
];


// -------------------- App State --------------------
let currentVerse = "";
let currentQuote = "";
let currentVerseObj = null;
let favorites = [];
let readingHistory = [];
let currentCategory = "all";

// Journal Data
let prayerEntries = [];
let gratitudeEntries = [];
let prayerRequests = [];

// -------------------- Initialize Data --------------------
function initializeData() {
  try {
    // Load user data
    const savedFavorites = localStorage.getItem("bibleAppFavorites");
    if (savedFavorites) favorites = JSON.parse(savedFavorites);

    const savedHistory = localStorage.getItem("bibleAppHistory");
    if (savedHistory) readingHistory = JSON.parse(savedHistory);

    // Load journal data
    const savedPrayers = localStorage.getItem("bibleAppPrayers");
    if (savedPrayers) prayerEntries = JSON.parse(savedPrayers);

    const savedGratitude = localStorage.getItem("bibleAppGratitude");
    if (savedGratitude) gratitudeEntries = JSON.parse(savedGratitude);

    const savedRequests = localStorage.getItem("bibleAppRequests");
    if (savedRequests) prayerRequests = JSON.parse(savedRequests);

    updateFavoritesDisplay();
    updateJournalDisplays();
  } catch (e) {
    console.error("Error initializing data:", e);
  }
}

// -------------------- Helper Functions --------------------
function getRandomVerse(array) {
  try {
    let filteredArray = array;
    
    // Filter by category if not "all"
    if (currentCategory !== "all") {
      filteredArray = array.filter(verse => verse.category === currentCategory);
    }
    
    // If filtered array is empty, fall back to all verses
    if (filteredArray.length === 0) {
      filteredArray = array;
    }
    
    const index = Math.floor(Math.random() * filteredArray.length);
    return filteredArray[index];
  } catch (e) {
    console.error("Error selecting random verse:", e);
    return {text: "Error loading verse.", category: "faith"};
  }
}

function getDailyQuote() {
  try {
    const today = new Date();
    const index = (today.getDate() - 1) % dailyQuotes.length;
    return dailyQuotes[index];
  } catch (e) {
    console.error("Error selecting daily quote:", e);
    return "Error loading quote.";
  }
}

function getAllVerses() {
  return [...versesMorning, ...versesDay, ...versesAfternoon, ...versesEvening, ...versesNight, ...additionalVerses];
}

// -------------------- Favorites Management --------------------
function toggleFavorite() {
  try {
    if (!currentVerseObj) return;

    const favoriteIndex = favorites.findIndex(fav => fav.text === currentVerseObj.text);
    
    if (favoriteIndex > -1) {
      // Remove from favorites
      favorites.splice(favoriteIndex, 1);
    } else {
      // Add to favorites
      favorites.push({
        text: currentVerseObj.text,
        category: currentVerseObj.category,
        timestamp: new Date().toISOString()
      });
    }

    // Save to localStorage
    localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
    
    updateFavoritesDisplay();
    updateFavoriteButton();
    showSuccessMessage(favoriteIndex > -1 ? "Removed from favorites" : "Added to favorites! ❤️");
  } catch (e) {
    console.error("Error toggling favorite:", e);
  }
}

function updateFavoriteButton() {
  try {
    const favoriteBtn = document.getElementById("favoriteButton");
    if (!favoriteBtn || !currentVerseObj) return;

    const isFavorite = favorites.some(fav => fav.text === currentVerseObj.text);
    favoriteBtn.classList.toggle("active", isFavorite);
  } catch (e) {
    console.error("Error updating favorite button:", e);
  }
}

function updateFavoritesDisplay() {
  try {
    const favoritesSection = document.querySelector(".favorites-section");
    const favoritesList = document.getElementById("favoritesList");

    if (!favoritesSection || !favoritesList) return;

    if (favorites.length > 0) {
      favoritesList.innerHTML = favorites.map((favorite, index) => `
        <div class="favorite-item">
          <div class="favorite-text">${favorite.text}</div>
          <div class="entry-actions">
            <button class="entry-action" onclick="shareFavorite(${index})" title="Share">📤</button>
            <button class="entry-action" onclick="removeFavorite(${index})" title="Remove">🗑️</button>
          </div>
        </div>
      `).join('');
    } else {
      favoritesList.innerHTML = '<div class="empty-state">No favorite verses yet. Click the heart button to save verses!</div>';
    }
  } catch (e) {
    console.error("Error updating favorites display:", e);
  }
}

function removeFavorite(index) {
  try {
    favorites.splice(index, 1);
    localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
    updateFavoritesDisplay();
    updateFavoriteButton();
    showSuccessMessage("Removed from favorites");
  } catch (e) {
    console.error("Error removing favorite:", e);
  }
}

function clearAllFavorites() {
  try {
    if (confirm("Are you sure you want to clear all favorites?")) {
      favorites = [];
      localStorage.setItem("bibleAppFavorites", JSON.stringify(favorites));
      updateFavoritesDisplay();
      updateFavoriteButton();
      showSuccessMessage("All favorites cleared");
    }
  } catch (e) {
    console.error("Error clearing favorites:", e);
  }
}

function shareFavorite(index) {
  try {
    const favorite = favorites[index];
    currentVerse = favorite.text;
    openShareModal();
  } catch (e) {
    console.error("Error sharing favorite:", e);
  }
}

// -------------------- Update Greeting --------------------
function updateGreeting() {
  try {
    const hour = new Date().getHours();
    let greeting, icon, verseArray, newBackground;

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
      icon = "🌅";
      verseArray = versesMorning;
      newBackground = "morning";
    } else if (hour >= 12 && hour < 15) {
      greeting = "Good Day";
      icon = "☀️";
      verseArray = versesDay;
      newBackground = "day";
    } else if (hour >= 15 && hour < 18) {
      greeting = "Good Afternoon";
      icon = "🌤️";
      verseArray = versesAfternoon;
      newBackground = "afternoon";
    } else if (hour >= 18 && hour < 22) {
      greeting = "Good Evening";
      icon = "🌇";
      verseArray = versesEvening;
      newBackground = "evening";
    } else {
      greeting = "Good Night";
      icon = "🌙";
      verseArray = versesNight;
      newBackground = "night";
    }

    if (currentBackground !== newBackground) {
      document.body.className = newBackground;
      currentBackground = newBackground;
    }

    const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;

    const iconElement = document.getElementById("icon");
    const textElement = document.getElementById("text");

    if (iconElement) iconElement.innerText = icon;
    if (textElement) textElement.innerText = displayGreeting;

    currentVerseObj = getRandomVerse(verseArray);
    currentQuote = getDailyQuote();

    updateVerseDisplay();
    updateFavoriteButton();
    addToReadingHistory(currentVerseObj);
    
  } catch (e) {
    console.error("Error updating greeting:", e);
  }
}

function updateVerseDisplay() {
  try {
    const verseElement = document.getElementById("verse");
    if (verseElement && currentVerseObj) {
      currentVerse = currentVerseObj.text;
      verseElement.innerHTML = `
        <div class="verse-with-actions">
          <div class="verse-main-text">${currentVerse}</div>
          <div class="verse-stats">
            <span class="verse-stat">${currentVerseObj.category.charAt(0).toUpperCase() + currentVerseObj.category.slice(1)}</span>
            <span class="verse-stat">Favorites: ${favorites.length}</span>
          </div>
        </div>
        <div class="daily-quote-section">
          <strong>Daily Quote:</strong> ${currentQuote}
        </div>
      `;
    }
  } catch (e) {
    console.error("Error updating verse display:", e);
  }
}

function addToReadingHistory(verse) {
  try {
    const historyItem = {
      text: verse.text,
      category: verse.category,
      timestamp: new Date().toISOString()
    };
    
    readingHistory.unshift(historyItem);
    
    // Keep only last 50 items
    if (readingHistory.length > 50) {
      readingHistory = readingHistory.slice(0, 50);
    }
    
    localStorage.setItem("bibleAppHistory", JSON.stringify(readingHistory));
  } catch (e) {
    console.error("Error adding to reading history:", e);
  }
}

function nextVerse() {
  try {
    const hour = new Date().getHours();
    let verseArray;

    if (hour >= 5 && hour < 12) verseArray = versesMorning;
    else if (hour >= 12 && hour < 15) verseArray = versesDay;
    else if (hour >= 15 && hour < 18) verseArray = versesAfternoon;
    else if (hour >= 18 && hour < 22) verseArray = versesEvening;
    else verseArray = versesNight;

    currentVerseObj = getRandomVerse(verseArray);
    updateVerseDisplay();
    updateFavoriteButton();
    addToReadingHistory(currentVerseObj);
    showSuccessMessage("New verse loaded! ✨");
  } catch (e) {
    console.error("Error getting next verse:", e);
  }
}

function filterByCategory() {
  try {
    const categorySelect = document.getElementById("verseCategory");
    if (categorySelect) {
      currentCategory = categorySelect.value;
      updateGreeting();
      showSuccessMessage(`Showing ${currentCategory === 'all' ? 'all categories' : currentCategory} verses`);
    }
  } catch (e) {
    console.error("Error filtering by category:", e);
  }
}

// -------------------- Journal Functions --------------------
function savePrayerEntry() {
  try {
    const prayerText = document.getElementById("prayerEntry").value.trim();
    if (!prayerText) {
      showSuccessMessage("Please write a prayer first");
      return;
    }

    const entry = {
      text: prayerText,
      date: new Date().toISOString(),
      verse: currentVerse
    };

    prayerEntries.unshift(entry);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    
    document.getElementById("prayerEntry").value = "";
    updatePrayerDisplay();
    
    showSuccessMessage("Prayer saved successfully! 🙏");
  } catch (e) {
    console.error("Error saving prayer:", e);
  }
}

function saveGratitudeEntry() {
  try {
    const gratitudeText = document.getElementById("gratitudeEntry").value.trim();
    if (!gratitudeText) {
      showSuccessMessage("Please write what you're thankful for");
      return;
    }

    const entry = {
      text: gratitudeText,
      date: new Date().toISOString()
    };

    gratitudeEntries.unshift(entry);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    
    document.getElementById("gratitudeEntry").value = "";
    updateGratitudeDisplay();
    
    showSuccessMessage("Gratitude saved successfully! 😊");
  } catch (e) {
    console.error("Error saving gratitude:", e);
  }
}

function addPrayerRequest() {
  try {
    const requestText = document.getElementById("prayerRequest").value.trim();
    if (!requestText) {
      showSuccessMessage("Please enter a prayer request");
      return;
    }

    const request = {
      text: requestText,
      date: new Date().toISOString(),
      status: "praying"
    };

    prayerRequests.unshift(request);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    
    document.getElementById("prayerRequest").value = "";
    updatePrayerRequestsDisplay();
    
    showSuccessMessage("Prayer request added! 📝");
  } catch (e) {
    console.error("Error adding prayer request:", e);
  }
}

function updateJournalDisplays() {
  updatePrayerDisplay();
  updateGratitudeDisplay();
  updatePrayerRequestsDisplay();
}

function updatePrayerDisplay() {
  const container = document.getElementById("prayerHistory");
  if (!container) return;

  if (prayerEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayers yet. Write your first prayer above!</div>';
    return;
  }

  container.innerHTML = prayerEntries.map((entry, index) => `
    <div class="journal-entry prayer">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deletePrayerEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
      ${entry.verse ? `<div class="entry-verse"><em>Inspired by: ${entry.verse}</em></div>` : ''}
    </div>
  `).join('');
}

function updateGratitudeDisplay() {
  const container = document.getElementById("gratitudeHistory");
  if (!container) return;

  if (gratitudeEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No gratitude entries yet. What are you thankful for today?</div>';
    return;
  }

  container.innerHTML = gratitudeEntries.map((entry, index) => `
    <div class="journal-entry gratitude">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deleteGratitudeEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
    </div>
  `).join('');
}

function updatePrayerRequestsDisplay() {
  const container = document.getElementById("requestsList");
  if (!container) return;

  if (prayerRequests.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayer requests yet. Add your first request above!</div>';
    return;
  }

  container.innerHTML = prayerRequests.map((request, index) => `
    <div class="prayer-request">
      <div class="request-header">
        <span class="entry-date">${formatDate(request.date)}</span>
        <span class="request-status status-${request.status}">
          ${request.status === 'praying' ? '🙏 Praying' : '✅ Answered'}
        </span>
      </div>
      <div class="request-content">${request.text}</div>
      <div class="request-actions">
        <button class="request-btn answered" onclick="markRequestAnswered(${index})">
          ${request.status === 'praying' ? 'Mark Answered' : 'Answered 🙏'}
        </button>
        <button class="request-btn delete" onclick="deletePrayerRequest(${index})">Delete</button>
      </div>
    </div>
  `).join('');
}

function deletePrayerEntry(index) {
  if (confirm("Delete this prayer entry?")) {
    prayerEntries.splice(index, 1);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    updatePrayerDisplay();
    showSuccessMessage("Prayer deleted");
  }
}

function deleteGratitudeEntry(index) {
  if (confirm("Delete this gratitude entry?")) {
    gratitudeEntries.splice(index, 1);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    updateGratitudeDisplay();
    showSuccessMessage("Gratitude entry deleted");
  }
}

function deletePrayerRequest(index) {
  if (confirm("Delete this prayer request?")) {
    prayerRequests.splice(index, 1);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    updatePrayerRequestsDisplay();
    showSuccessMessage("Prayer request deleted");
  }
}

function markRequestAnswered(index) {
  prayerRequests[index].status = "answered";
  localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
  updatePrayerRequestsDisplay();
  showSuccessMessage("Prayer request marked as answered! 🙏");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function showSuccessMessage(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = message;
  successDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #4CAF50, #45a049);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    animation: slideInRight 0.3s ease;
    font-weight: 600;
  `;
  
  document.body.appendChild(successDiv);
  
  setTimeout(() => {
    successDiv.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => {
      successDiv.remove();
    }, 300);
  }, 3000);
}

// -------------------- Tab Management --------------------
function setupJournalTabs() {
  const tabs = document.querySelectorAll('.journal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.journal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.journal-tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// -------------------- Search Functionality --------------------
function searchVerses(query) {
  try {
    const allVerses = getAllVerses();
    const searchResults = allVerses.filter(verse => 
      verse.text.toLowerCase().includes(query.toLowerCase())
    );
    
    return searchResults;
  } catch (e) {
    console.error("Error searching verses:", e);
    return [];
  }
}

function displaySearchResults(results) {
  try {
    const searchResults = document.getElementById("searchResults");
    if (!searchResults) return;

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="empty-state">No verses found. Try different keywords.</div>';
      return;
    }

    searchResults.innerHTML = results.map(verse => `
      <div class="search-result-item" onclick="selectSearchResult('${verse.text.replace(/'/g, "\\'")}')">
        <div class="verse-text">${verse.text}</div>
        <div class="verse-reference">${verse.category.charAt(0).toUpperCase() + verse.category.slice(1)}</div>
      </div>
    `).join('');
  } catch (e) {
    console.error("Error displaying search results:", e);
  }
}

function selectSearchResult(verseText) {
  try {
    const allVerses = getAllVerses();
    currentVerseObj = allVerses.find(verse => verse.text === verseText);
    if (currentVerseObj) {
      currentVerse = currentVerseObj.text;
      updateVerseDisplay();
      closeSearchModal();
      showSuccessMessage("Verse loaded from search! 🔍");
    }
  } catch (e) {
    console.error("Error selecting search result:", e);
  }
}

function openSearchModal() {
  try {
    const modal = document.getElementById("searchModal");
    if (modal) {
      modal.style.display = "block";
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      document.getElementById("searchResults").innerHTML = "";
    }
  } catch (e) {
    console.error("Error opening search modal:", e);
  }
}

function closeSearchModal() {
  try {
    const modal = document.getElementById("searchModal");
    if (modal) {
      modal.style.display = "none";
    }
  } catch (e) {
    console.error("Error closing search modal:", e);
  }
}

// -------------------- Sharing Functions --------------------
function openShareModal() {
  try {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "block";
      // Reset to main options view
      document.getElementById("imageOptions").classList.add("hidden");
      document.getElementById("imagePreview").classList.add("hidden");
    }
  } catch (e) {
    console.error("Error opening share modal:", e);
  }
}

function closeShareModal() {
  try {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "none";
    }
  } catch (e) {
    console.error("Error closing share modal:", e);
  }
}

function copyVerseToClipboard() {
  try {
    const verseText = currentVerse;
    const textToCopy = `${verseText}\n\nShared via Greeter Bible App • https://mashifmj-prog.github.io/greeter-bible/`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      showSuccessMessage("Verse copied to clipboard! 📋");
      closeShareModal();
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy verse to clipboard. Please try again.");
    });
  } catch (e) {
    console.error("Error copying verse to clipboard:", e);
  }
}

// -------------------- WhatsApp Sharing --------------------
function shareToWhatsAppEnhanced() {
  try {
    if (!currentVerse) {
      showSuccessMessage("No verse to share");
      return;
    }

    const verseText = currentVerse;
    const appUrl = "https://mashifmj-prog.github.io/greeter-bible/";
    const shareText = `✨ Bible Inspiration ✨\n\n${verseText}\n\n- Shared via Greeter Bible App\n${appUrl}`;
    
    const encodedText = encodeURIComponent(shareText);
    
    // Multiple WhatsApp URL formats for better compatibility
    const whatsappUrls = [
      `https://wa.me/?text=${encodedText}`,
      `https://api.whatsapp.com/send?text=${encodedText}`,
      `whatsapp://send?text=${encodedText}`
    ];
    
    // Try to open WhatsApp
    let success = false;
    
    // Try deep link first (for mobile devices)
    try {
      window.location.href = whatsappUrls[2];
      success = true;
    } catch (e) {
      // Fallback to web version
      try {
        window.open(whatsappUrls[0], '_blank', 'noopener,noreferrer');
        success = true;
      } catch (e2) {
        // Final fallback
        window.open(whatsappUrls[1], '_blank', 'noopener,noreferrer');
        success = true;
      }
    }
    
    if (success) {
      showSuccessMessage("Sharing to WhatsApp... 💚");
      closeShareModal();
    } else {
      throw new Error("All WhatsApp methods failed");
    }
    
  } catch (e) {
    console.error("Error sharing to WhatsApp:", e);
    // Ultimate fallback - copy to clipboard
    showSuccessMessage("Opening WhatsApp failed. Verse copied to clipboard! 📋");
    copyVerseToClipboard();
  }
}

// Share app link for publicity
function shareAppLink() {
  try {
    const appUrl = "https://mashifmj-prog.github.io/greeter-bible/";
    const shareText = `Check out this beautiful Bible app with daily verses, prayer journal, and more! ${appUrl}`;
    
    // Try native sharing first
    if (navigator.share) {
      navigator.share({
        title: 'Greeter Bible App',
        text: 'Beautiful Bible app with daily verses and prayer journal',
        url: appUrl
      }).then(() => {
        showSuccessMessage("App shared successfully! 🚀");
        closeShareModal();
      }).catch(err => {
        // Fallback to clipboard
        fallbackShareAppLink(shareText);
      });
    } else {
      // Fallback to clipboard
      fallbackShareAppLink(shareText);
    }
  } catch (e) {
    console.error("Error sharing app link:", e);
    fallbackShareAppLink(shareText);
  }
}

function fallbackShareAppLink(shareText) {
  navigator.clipboard.writeText(shareText).then(() => {
    showSuccessMessage("App link copied to clipboard! 📋\nPaste it anywhere to share!");
    closeShareModal();
  }).catch(err => {
    // Ultimate fallback
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showSuccessMessage("App link copied to clipboard! 📋\nPaste it anywhere to share!");
    closeShareModal();
  });
}

function showImageOptions() {
  try {
    const imageOptions = document.getElementById("imageOptions");
    const shareOptions = document.querySelector(".share-options");
    
    if (imageOptions && shareOptions) {
      shareOptions.classList.add("hidden");
      imageOptions.classList.remove("hidden");
      
      // Select first theme by default
      const firstTheme = document.querySelector(".theme-option");
      if (firstTheme) {
        document.querySelectorAll(".theme-option").forEach(opt => opt.classList.remove("active"));
        firstTheme.classList.add("active");
      }
    }
  } catch (e) {
    console.error("Error showing image options:", e);
  }
}

function generateVerseImage(theme) {
  try {
    const canvas = document.getElementById("verseCanvas");
    const ctx = canvas.getContext("2d");
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background based on theme
    let gradient;
    switch(theme) {
      case "minimal":
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
        break;
      case "dark":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#2c3e50");
        gradient.addColorStop(1, "#34495e");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "sunrise":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#ff9a9e");
        gradient.addColorStop(1, "#fecfef");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "ocean":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#4facfe");
        gradient.addColorStop(1, "#00f2fe");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "sunset":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#fa709a");
        gradient.addColorStop(1, "#fee140");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
      case "night":
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#2c3e50");
        gradient.addColorStop(1, "#4ca1af");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
    }
    
    // Set text color based on theme
    const textColor = theme === "minimal" || theme === "sunrise" ? "#333333" : "#ffffff";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    
    // Add verse text with better word wrapping
    const maxWidth = canvas.width - 100; // More padding
    const lineHeight = 30; // Slightly more spacing
    const verseLines = wrapText(ctx, currentVerse, maxWidth);
    
    // Calculate starting position to center text vertically
    const totalTextHeight = verseLines.length * lineHeight;
    let y = (canvas.height - totalTextHeight) / 2 + lineHeight / 2;
    
    // Set font
    ctx.font = "bold 22px 'Inter', sans-serif";
    
    verseLines.forEach(line => {
      ctx.fillText(line.trim(), canvas.width / 2, y);
      y += lineHeight;
    });
    
    // Add watermark
    ctx.font = "14px 'Inter', sans-serif";
    ctx.fillStyle = textColor + "80"; // 50% opacity
    ctx.fillText("Shared via Greeter Bible App", canvas.width / 2, canvas.height - 40);
    
    // Add attribution link if enabled
    const includeAttribution = document.getElementById("includeAttribution").checked;
    if (includeAttribution) {
      ctx.font = "12px 'Inter', sans-serif";
      ctx.fillText("mashifmj-prog.github.io/greeter-bible/", canvas.width / 2, canvas.height - 20);
    }
    
    return canvas.toDataURL("image/png");
  } catch (e) {
    console.error("Error generating verse image:", e);
    return null;
  }
}

function wrapText(context, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  // Set font for accurate measurement
  context.font = "bold 22px 'Inter', sans-serif";
  
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + words[i] + ' ';
    const metrics = context.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = words[i] + ' ';
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine.trim());
  return lines;
}

function previewImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    generateVerseImage(selectedTheme);
    document.getElementById("imagePreview").classList.remove("hidden");
    
    // Scroll to preview
    document.getElementById("imagePreview").scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  } catch (e) {
    console.error("Error previewing image:", e);
  }
}

function downloadImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    const dataUrl = generateVerseImage(selectedTheme);
    if (!dataUrl) return;
    
    const link = document.createElement("a");
    link.download = `bible-verse-${new Date().getTime()}.png`;
    link.href = dataUrl;
    link.click();
    
    closeShareModal();
    showSuccessMessage("Image downloaded! 🖼️");
  } catch (e) {
    console.error("Error downloading image:", e);
  }
}

function shareImage() {
  try {
    const selectedTheme = document.querySelector(".theme-option.active")?.dataset.theme;
    if (!selectedTheme) return;
    
    const dataUrl = generateVerseImage(selectedTheme);
    if (!dataUrl) return;
    
    // Convert data URL to blob
    fetch(dataUrl)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "bible-verse.png", { type: "image/png" });
        
        if (navigator.share && navigator.canShare({ files: [file] })) {
          navigator.share({
            files: [file],
            title: "Bible Verse",
            text: currentVerse
          }).then(() => {
            closeShareModal();
            showSuccessMessage("Shared successfully! 📤");
          }).catch(err => {
            console.error("Error sharing:", err);
            downloadImage(); // Fallback to download
          });
        } else {
          downloadImage(); // Fallback to download
        }
      });
  } catch (e) {
    console.error("Error sharing image:", e);
    downloadImage(); // Fallback to download
  }
}

// -------------------- Clock --------------------
function updateClock() {
  try {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.innerText = `${h}:${m}:${s}`;
    }
  } catch (e) {
    console.error("Error updating clock:", e);
  }
}

// -------------------- Swipe Gestures --------------------
function initializeSwipeGestures() {
  const verseSection = document.querySelector('.verse-section');
  let touchStartX = 0;
  let touchEndX = 0;

  if (!verseSection) return;

  verseSection.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  verseSection.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next verse
        nextVerse();
        showSwipeFeedback('← Swiped for new verse');
      } else {
        // Swipe right - previous (optional, or share)
        openShareModal();
        showSwipeFeedback('→ Swiped to share');
      }
    }
  }
}

function showSwipeFeedback(message) {
  const feedback = document.createElement('div');
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 10000;
    font-size: 14px;
    animation: fadeInOut 2s ease-in-out;
  `;
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.remove();
  }, 2000);
}

// -------------------- Event Listeners --------------------
function initializeEventListeners() {
  try {
    // Name input listener
    const nameInput = document.getElementById("nameInput");
    if (nameInput) {
      nameInput.addEventListener("input", e => {
        userName = e.target.value.trim();
        localStorage.setItem("userName", userName);
        updateGreeting();
      });
    }

    // Reset name button
    const resetButton = document.getElementById("resetButton");
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        userName = "";
        const nameInput = document.getElementById("nameInput");
        if (nameInput) nameInput.value = "";
        updateGreeting();
        showSuccessMessage("Name reset");
      });
    }

    // Control buttons
    document.getElementById('shareButton')?.addEventListener('click', openShareModal);
    document.getElementById('favoriteButton')?.addEventListener('click', toggleFavorite);
    document.getElementById('nextVerseButton')?.addEventListener('click', nextVerse);
    document.getElementById('searchButton')?.addEventListener('click', openSearchModal);
    
    // Category filter
    document.getElementById('verseCategory')?.addEventListener('change', filterByCategory);
    
    // Journal functionality
    document.getElementById('savePrayer')?.addEventListener('click', savePrayerEntry);
    document.getElementById('saveGratitude')?.addEventListener('click', saveGratitudeEntry);
    document.getElementById('addRequest')?.addEventListener('click', addPrayerRequest);
    
    // Clear favorites
    document.getElementById('clearFavorites')?.addEventListener('click', clearAllFavorites);
    
    // Tab management
    setupJournalTabs();
    
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const results = searchVerses(e.target.value);
        displaySearchResults(results);
      });
    }

    // Modal close buttons
    const closeButtons = document.querySelectorAll(".close-btn, #closeModalBtn");
    closeButtons.forEach(btn => {
      btn.addEventListener("click", closeShareModal);
    });

    // Share option buttons - UPDATED WITH WHATSAPP
    document.getElementById('shareImageBtn')?.addEventListener('click', showImageOptions);
    document.getElementById('copyTextBtn')?.addEventListener('click', copyVerseToClipboard);
    
    // NEW: WhatsApp Share button
    document.getElementById('shareWhatsAppBtn')?.addEventListener('click', shareToWhatsAppEnhanced);
    
    document.getElementById('shareTextBtn')?.addEventListener('click', shareAppLink);
    document.getElementById('closeModalBtn')?.addEventListener('click', closeShareModal);

    // Theme selection
    const themeOptions = document.querySelectorAll(".theme-option");
    themeOptions.forEach(option => {
      option.addEventListener("click", () => {
        themeOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
      });
    });

    // Image action buttons
    document.getElementById('previewImageBtn')?.addEventListener('click', previewImage);
    document.getElementById('downloadImageBtn')?.addEventListener('click', downloadImage);
    document.getElementById('shareImageFinalBtn')?.addEventListener('click', shareImage);

    // Close modal when clicking outside
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Space bar for next verse
      if (e.code === 'Space' && !e.target.matches('textarea, input')) {
        e.preventDefault();
        nextVerse();
      }
      // Escape key to close modals
      if (e.code === 'Escape') {
        closeShareModal();
        closeSearchModal();
      }
    });

  } catch (e) {
    console.error("Error initializing event listeners:", e);
  }
}

// -------------------- Initialize --------------------
document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeData();
    updateGreeting();
    updateClock();
    setInterval(updateClock, 1000);
    setInterval(updateGreeting, 60000);
    initializeEventListeners();
    initializeSwipeGestures();
    
    // Add swipe CSS
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      }
      .verse-section {
        cursor: grab;
        user-select: none;
      }
      .verse-section:active {
        cursor: grabbing;
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Add fade-in animation to container
    const container = document.querySelector('.container');
    if (container) {
      container.style.opacity = '0';
      container.style.transform = 'translateY(20px)';
      container.style.transition = 'all 0.8s ease';
      
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 100);
    }
  } catch (e) {
    console.error("Error during initialization:", e);
  }
});
