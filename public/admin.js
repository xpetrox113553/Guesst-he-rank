// ========================================
// NOXIN99 VALORANT CLIP QUIZ
// ADMIN PANEL - RANK 1 / 2 / 3
// ========================================


// ========================================
// LOGIN
// ========================================

document.body.innerHTML = `

<div class="login-screen">

    <div class="login-grid"></div>
    <div class="login-glow"></div>

    <div class="login-box">

        <div class="login-logo">
            V
        </div>

        <div class="login-small">
            NOXIN99
        </div>

        <h1>
            ADMIN PANEL
        </h1>

        <div class="login-line"></div>

        <p class="login-subtitle">
            VALORANT CLIP QUIZ
        </p>

        <label>
            ADMIN PASSWORD
        </label>

        <input
            id="adminPassword"
            type="password"
            placeholder="Enter password..."
            autocomplete="off"
        >

        <button
            id="loginButton"
            type="button"
        >
            ENTER ADMIN PANEL
        </button>

        <div
            id="loginError"
            class="login-error"
        ></div>

        <div class="login-status">
            <span></span>
            SECURE ADMIN ACCESS
        </div>

    </div>

</div>

`;


// ========================================
// LOGIN FUNKTION
// ========================================

function adminLogin() {

    const input =
        document.getElementById(
            "adminPassword"
        );

    const error =
        document.getElementById(
            "loginError"
        );

    const box =
        document.querySelector(
            ".login-box"
        );

    if (!input || !error) {
        return;
    }


    if (input.value === "Noxin99") {

        startAdminPanel();

    } else {

        error.textContent =
            "❌ FALSCHES PASSWORT";

        input.value = "";

        input.focus();


        if (box) {

            box.classList.remove(
                "login-wrong"
            );

            void box.offsetWidth;

            box.classList.add(
                "login-wrong"
            );

        }

    }

}


document
    .getElementById("loginButton")
    .addEventListener(
        "click",
        adminLogin
    );


document
    .getElementById("adminPassword")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                adminLogin();

            }

        }
    );


// ========================================
// QUIZ VARIABLEN
// ========================================

let allClips = [];

let currentClip = 0;

let score = 0;

let total = 0;

let answered = false;

let selectedBaseRank = null;


// ========================================
// ADMIN PANEL
// ========================================

function startAdminPanel() {

    document.body.innerHTML = `

        <div class="valo-background">

            <div class="valo-grid"></div>


            <img
                class="agent-bg waylay-bg"
                src="/Waylay_Artwork_Full.webp"
                alt=""
            >


            <img
                class="agent-bg raze-bg"
                src="/Raze_Artwork_Full.webp"
                alt=""
            >


            <img
                class="agent-icon-bg"
                src="/Waylay_icon.webp"
                alt=""
            >


            <div class="agent-overlay"></div>


            <header class="topbar">

                <div class="logo">

                    <div class="logo-mark">
                        V
                    </div>

                    <div>

                        <div class="logo-title">
                            NOXIN99
                        </div>

                        <div class="logo-subtitle">
                            VALORANT CLIP QUIZ
                        </div>

                    </div>

                </div>


                <div class="admin-badge">

                    <span class="status-dot"></span>

                    ADMIN MODE

                </div>

            </header>


            <main class="main">

                <div class="quiz-header">

                    <div>

                        <div class="small-title">
                            CLIP ANALYSIS
                        </div>

                        <h1>
                            WELCHEN RANG HAT DER SPIELER?
                        </h1>

                        <div class="header-line"></div>

                    </div>


                    <div class="score-box">

                        <span>
                            SCORE
                        </span>

                        <strong id="scoreDisplay">
                            0 / 0
                        </strong>

                    </div>

                </div>


                <div id="clips"></div>

            </main>

        </div>

    `;


    loadClips();

}


// ========================================
// CLIPS LADEN
// ========================================

async function loadClips() {

    try {

        const response =
            await fetch("/submissions");


        if (!response.ok) {

            throw new Error(
                "Clips konnten nicht geladen werden."
            );

        }


        allClips =
            await response.json();


        currentClip = 0;

        score = 0;

        total =
            allClips.length;

        answered = false;

        selectedBaseRank = null;


        updateScore();

        showClip();


    } catch (error) {

        console.error(error);


        const clips =
            document.getElementById(
                "clips"
            );


        if (clips) {

            clips.innerHTML = `

                <div class="card error-card">

                    <h2>
                        ❌ FEHLER
                    </h2>

                    <p>
                        Die Clips konnten nicht geladen werden.
                    </p>

                </div>

            `;

        }

    }

}


// ========================================
// CLIP ANZEIGEN
// ========================================

function showClip() {

    const clips =
        document.getElementById(
            "clips"
        );


    if (!clips) {
        return;
    }


    answered = false;

    selectedBaseRank = null;


    if (
        currentClip >=
        allClips.length
    ) {

        showComplete();

        return;

    }


    const item =
        allClips[currentClip];


    clips.innerHTML = `

        <div class="card">


            <div class="clip-header">

                <span class="clip-number">

                    CLIP
                    ${currentClip + 1}
                    /
                    ${allClips.length}

                </span>


                <span class="clip-label">

                    NOXIN99 • GUESS THE RANK

                </span>

            </div>


            <div class="video-wrapper">

                <video
                    controls
                    preload="metadata"
                    src="${escapeHTML(item.clip_url)}">
                </video>

            </div>


            <div class="player-info">

                <div>

                    <div class="player-label">
                        SPIELER
                    </div>

                    <div class="player-name">
                        ${escapeHTML(item.riot_name)}
                    </div>

                </div>


                <div class="clip-label">
                    ANALYZING CLIP
                </div>

            </div>


            <div class="question-box">

                <div class="question-label">
                    MAKE YOUR GUESS
                </div>

                <h3>
                    Welchen Rang hat der Spieler?
                </h3>

            </div>


            <div class="ranks">

                ${createRankButton(
                    "Iron",
                    "/Iron_1_Rank.webp"
                )}

                ${createRankButton(
                    "Bronze",
                    "/Bronze_1_Rank.webp"
                )}

                ${createRankButton(
                    "Silver",
                    "/Silver_1_Rank.webp"
                )}

                ${createRankButton(
                    "Gold",
                    "/Gold_1_Rank.webp"
                )}

                ${createRankButton(
                    "Platinum",
                    "/Platinum_1_Rank.webp"
                )}

                ${createRankButton(
                    "Diamond",
                    "/Diamond_1_Rank.webp"
                )}

                ${createRankButton(
                    "Ascendant",
                    "/Ascendant_1_Rank.webp"
                )}

                ${createRankButton(
                    "Immortal",
                    "/Immortal_1_Rank.webp"
                )}

                ${createRankButton(
                    "Radiant",
                    "/Radiant_Rank.webp",
                    true
                )}

            </div>


            <div
                id="tierSelection"
                class="tier-selection">
            </div>


            <div id="result"></div>


            <div class="next-button-wrapper">

                <button
                    id="nextButton"
                    onclick="nextClip()"
                    style="display:none;"
                >
                    ➡ NÄCHSTER CLIP
                </button>

            </div>


        </div>

    `;

}


// ========================================
// RANG BUTTON ERSTELLEN
// ========================================

function createRankButton(
    rank,
    image,
    direct = false
) {

    if (direct) {

        return `

            <div
                class="rank-choice"
                onclick="selectRank('${rank}')"
            >

                <img
                    class="rank-icon"
                    src="${image}"
                    alt="${rank}"
                >

                <div class="rank-name">
                    ${rank}
                </div>

            </div>

        `;

    }


    return `

        <div
            class="rank-choice"
            onclick="openTierSelection('${rank}')"
        >

            <img
                class="rank-icon"
                src="${image}"
                alt="${rank}"
            >

            <div class="rank-name">
                ${rank}
            </div>

        </div>

    `;

}


// ========================================
// TIER AUSWAHL
// ========================================

function openTierSelection(rank) {

    if (answered) {
        return;
    }


    selectedBaseRank = rank;


    const container =
        document.getElementById(
            "tierSelection"
        );


    if (!container) {
        return;
    }


    const image =
        rankImages[rank];


    container.innerHTML = `

        <div class="tier-panel">

            <div class="tier-title">

                ${rank.toUpperCase()}
                AUSWÄHLEN

            </div>


            <div class="tier-buttons">


                <button
                    class="tier-button"
                    onclick="selectRank('${rank} 1')"
                >

                    <img
                        src="${image}"
                        alt="${rank} 1"
                    >

                    <span>
                        ${rank} 1
                    </span>

                </button>


                <button
                    class="tier-button"
                    onclick="selectRank('${rank} 2')"
                >

                    <img
                        src="${image}"
                        alt="${rank} 2"
                    >

                    <span>
                        ${rank} 2
                    </span>

                </button>


                <button
                    class="tier-button"
                    onclick="selectRank('${rank} 3')"
                >

                    <img
                        src="${image}"
                        alt="${rank} 3"
                    >

                    <span>
                        ${rank} 3
                    </span>

                </button>


            </div>

        </div>

    `;


    container.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ========================================
// RANG AUSWÄHLEN
// ========================================

function selectRank(selectedRank) {

    if (answered) {
        return;
    }


    const item =
        allClips[currentClip];


    if (!item) {
        return;
    }
    
  const realRank = item.rank;
    
    const selected = selectedRank;

    guess(
        realRank,
        selected
    );

}


// ========================================
// RANG NORMALISIEREN
// ========================================

function normalizeRank(rank) {

    if (!rank) {
        return "";
    }


    let value =
        String(rank)
            .trim()
            .replace(
                /Diamant/gi,
                "Diamond"
            )
            .replace(
                /Platin/gi,
                "Platinum"
            );


    value =
        value
            .replace(
                /^Diamond\s*I$/i,
                "Diamond 1"
            )
            .replace(
                /^Diamond\s*II$/i,
                "Diamond 2"
            )
            .replace(
                /^Diamond\s*III$/i,
                "Diamond 3"
            )
            .replace(
                /^([A-Za-z]+)\s*I$/i,
                "$1 1"
            )
            .replace(
                /^([A-Za-z]+)\s*II$/i,
                "$1 2"
            )
            .replace(
                /^([A-Za-z]+)\s*III$/i,
                "$1 3"
            );


    return value;

}


// ========================================
// RANG RATEN
// ========================================

function guess(realRank, selectedRank) {

    // Rangnamen vereinheitlichen
   realRank = String(realRank)
    .trim()
    .replace(/Platinumum/gi, "Platinum")
    .replace(/Platinumumm?/gi, "Platinum")
    .replace(/Platin/gi, "Platinum")
    .replace(/Diamant/gi, "Diamond");

    const result =
        document.getElementById("result");

    if (!result) {
        return;
    }

    // Nur den Grundrang für das Bild verwenden
    const rankBase =
        realRank
            .replace(/\s*[123]\s*$/, "")
            .trim();

    const img =
        rankImages[rankBase] ||
        rankImages[realRank];

   const isCorrect =
    realRank.toLowerCase() ===
    selectedRank.toLowerCase();

answered = true;
    
    if (isCorrect) {

        score++;

        result.innerHTML = `

            <div class="result-box correct">

                <h2 class="result-title">
                    ✓ RICHTIG!
                </h2>

                ${
                    img
                    ? `
                    <img
                        src="${img}"
                        alt="${realRank}"
                    >
                    `
                    : ""
                }

                <div class="result-rank">
                    ${realRank}
                </div>

                <p class="result-text">
                    Dein Tipp:
                    <strong>${selectedRank}</strong>
                </p>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div class="result-box wrong">

                <h2 class="result-title">
                    ✕ FALSCH!
                </h2>

                ${
                    img
                    ? `
                    <img
                        src="${img}"
                        alt="${realRank}"
                    >
                    `
                    : ""
                }

                <div class="result-rank">
                    ${realRank}
                </div>

                <p class="result-text">
                    Dein Tipp:
                    <strong>${selectedRank}</strong>
                </p>

                <p class="result-text">
                    Echter Rang:
                    <strong>${realRank}</strong>
                </p>

            </div>

        `;

    }

    updateScore();

    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {
        nextButton.style.display =
            "inline-block";
    }

    document
        .querySelectorAll(".rank-choice")
        .forEach(choice => {

            choice.style.pointerEvents =
                "none";

            choice.style.opacity =
                "0.45";

        });

}


// ========================================
// BASIS-RANG ERMITTELN
// ========================================

function getBaseRank(rank) {

    return String(rank)
        .replace(
            /\s[123]$/,
            ""
        );

}


// ========================================
// AUSWAHL SPERREN
// ========================================

function disableChoices() {

    const choices =
        document.querySelectorAll(
            ".rank-choice"
        );


    choices.forEach(
        choice => {

            choice.style.pointerEvents =
                "none";

            choice.style.opacity =
                "0.35";

        }
    );


    const buttons =
        document.querySelectorAll(
            ".tier-button"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

            button.style.pointerEvents =
                "none";

            button.style.opacity =
                "0.35";

        }
    );

}


// ========================================
// SCORE
// ========================================

function updateScore() {

    const display =
        document.getElementById(
            "scoreDisplay"
        );


    if (!display) {
        return;
    }


    display.textContent =
        `${score} / ${total}`;

}


// ========================================
// NÄCHSTER CLIP
// ========================================

function nextClip() {

    if (!answered) {
        return;
    }


    currentClip++;


    showClip();

}


// ========================================
// QUIZ ENDE
// ========================================

function showComplete() {

    const clips =
        document.getElementById(
            "clips"
        );


    if (!clips) {
        return;
    }


    const percentage =
        total > 0
            ? Math.round(
                (score / total) * 100
            )
            : 0;


    clips.innerHTML = `

        <div class="card complete-card">

            <div class="trophy">
                🏆
            </div>

            <div class="small-title">
                QUIZ COMPLETE
            </div>

            <h1>
                ALLE CLIPS GESPIELT!
            </h1>

            <div class="complete-score">

                Ergebnis:

                <strong>
                    ${score} / ${total}
                </strong>

                <br>

                ${percentage}% ACCURACY

            </div>


            <button
                onclick="restartQuiz()"
            >
                🔄 NOCHMAL SPIELEN
            </button>

        </div>

    `;

}


// ========================================
// NEUSTART
// ========================================

function restartQuiz() {

    currentClip = 0;

    score = 0;

    answered = false;

    selectedBaseRank = null;


    updateScore();

    showClip();

}


// ========================================
// HTML SICHER MACHEN
// ========================================

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


// ========================================
// RANG-BILDER
// ========================================

const rankImages = {

    "Iron":
        "/Iron_1_Rank.webp",

    "Bronze":
        "/Bronze_1_Rank.webp",

    "Silver":
        "/Silver_1_Rank.webp",

    "Gold":
        "/Gold_1_Rank.webp",

    "Platinum":
        "/Platinum_1_Rank.webp",

    "Diamond":
        "/Diamond_1_Rank.webp",

    "Ascendant":
        "/Ascendant_1_Rank.webp",

    "Immortal":
        "/Immortal_1_Rank.webp",

    "Radiant":
        "/Radiant_Rank.webp"

};
const RANK_NAMES = {
    "Iron 1": "Iron 1",
    "Iron 2": "Iron 2",
    "Iron 3": "Iron 3",

    "Bronze 1": "Bronze 1",
    "Bronze 2": "Bronze 2",
    "Bronze 3": "Bronze 3",

    "Silver 1": "Silver 1",
    "Silver 2": "Silver 2",
    "Silver 3": "Silver 3",

    "Gold 1": "Gold 1",
    "Gold 2": "Gold 2",
    "Gold 3": "Gold 3",

    "Platinum 1": "Platinum 1",
    "Platinum 2": "Platinum 2",
    "Platinum 3": "Platinum 3",

    "Diamond 1": "Diamond 1",
    "Diamond 2": "Diamond 2",
    "Diamond 3": "Diamond 3",

    "Ascendant 1": "Ascendant 1",
    "Ascendant 2": "Ascendant 2",
    "Ascendant 3": "Ascendant 3",

    "Immortal 1": "Immortal 1",
    "Immortal 2": "Immortal 2",
    "Immortal 3": "Immortal 3",

    "Radiant": "Radiant"
};
const displayRank = RANK_NAMES[item.rank] || item.rank;
