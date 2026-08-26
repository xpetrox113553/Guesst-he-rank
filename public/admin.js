// ============================================================
// NOXIN99 VALORANT CLIP QUIZ
// MONSTER ADMIN PANEL
// ============================================================

const ADMIN_PASSWORD = "Noxin99";

let allClips = [];
let currentClip = 0;

let score = 0;
let total = 0;

let answered = false;
let correctAnswers = 0;
let wrongAnswers = 0;
let streak = 0;
let bestStreak = 0;


// ============================================================
// RANK SYSTEM
// ============================================================

const RANKS = [
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Ascendant",
    "Immortal",
    "Radiant"
];

const RANK_ICONS = {
    Iron: "/Iron_1_Rank.webp",
    Bronze: "/Bronze_1_Rank.webp",
    Silver: "/Silver_1_Rank.webp",
    Gold: "/Gold_1_Rank.webp",
    Platinum: "/Platinum_1_Rank.webp",
    Diamond: "/Diamond_1_Rank.webp",
    Ascendant: "/Ascendant_1_Rank.webp",
    Immortal: "/Immortal_1_Rank.webp",
    Radiant: "/Radiant_Rank.webp"
};


// ============================================================
// LOGIN
// ============================================================

function renderLogin() {

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

                <label for="adminPassword">
                    ADMIN PASSWORD
                </label>

                <input
                    id="adminPassword"
                    type="password"
                    placeholder="Enter password..."
                    autocomplete="off"
                >

                <button
                    class="login-button"
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

    document
        .getElementById("loginButton")
        .addEventListener("click", adminLogin);

    document
        .getElementById("adminPassword")
        .addEventListener("keydown", event => {

            if (event.key === "Enter") {
                adminLogin();
            }

        });

    document
        .getElementById("adminPassword")
        .focus();
}


function adminLogin() {

    const input =
        document.getElementById("adminPassword");

    const error =
        document.getElementById("loginError");

    const box =
        document.querySelector(".login-box");

    if (!input || !error) {
        return;
    }

    if (input.value === ADMIN_PASSWORD) {

        startAdminPanel();

        return;
    }

    error.textContent =
        "❌ FALSCHES PASSWORT";

    input.value = "";

    input.focus();

    if (box) {

        box.classList.remove("login-wrong");

        void box.offsetWidth;

        box.classList.add("login-wrong");
    }
}


// ============================================================
// ADMIN PANEL
// ============================================================

function startAdminPanel() {

    document.body.innerHTML = `

        <div class="valo-background">

            <div class="valo-grid"></div>

            <div class="scanlines"></div>

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
                            CLIP ANALYSIS // LIVE
                        </div>

                        <h1>
                            WELCHEN RANG HAT DER SPIELER?
                        </h1>

                        <div class="header-line"></div>

                    </div>


                    <div class="header-stats">

                        <div class="stat-box">

                            <div class="stat-label">
                                SCORE
                            </div>

                            <strong
                                class="stat-value"
                                id="scoreDisplay"
                            >
                                0
                            </strong>

                        </div>


                        <div class="stat-box">

                            <div class="stat-label">
                                ACCURACY
                            </div>

                            <strong
                                class="stat-value"
                                id="accuracyDisplay"
                            >
                                0%
                            </strong>

                        </div>


                        <div class="stat-box">

                            <div class="stat-label">
                                STREAK
                            </div>

                            <strong
                                class="stat-value"
                                id="streakDisplay"
                            >
                                0
                            </strong>

                        </div>

                    </div>

                </div>


                <div id="clips"></div>

            </main>

        </div>
    `;

    loadClips();
}


// ============================================================
// LOAD CLIPS
// ============================================================

async function loadClips() {

    const clips =
        document.getElementById("clips");

    if (!clips) {
        return;
    }

    clips.innerHTML = `
        <div class="card">
            <div class="question-box">
                <div class="question-label">
                    SYSTEM
                </div>

                <h3>
                    CLIPS WERDEN GELADEN...
                </h3>
            </div>
        </div>
    `;

    try {

        const response =
            await fetch("/submissions");

        if (!response.ok) {
            throw new Error(
                "HTTP " + response.status
            );
        }

        const data =
            await response.json();

        if (!Array.isArray(data)) {
            throw new Error(
                "Ungültige Clip-Daten."
            );
        }

        allClips = data;

        currentClip = 0;
        score = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        streak = 0;
        bestStreak = 0;

        total = allClips.length;

        updateStats();

        showClip();

    }

    catch (error) {

        console.error(
            "Clip loading error:",
            error
        );

        clips.innerHTML = `

            <div class="card error-card">

                <h2>
                    ❌ SYSTEM ERROR
                </h2>

                <p>
                    Die Clips konnten nicht geladen werden.
                </p>

                <p>
                    ${escapeHTML(error.message)}
                </p>

                <button
                    onclick="loadClips()"
                >
                    🔄 ERNEUT VERSUCHEN
                </button>

            </div>
        `;
    }
}


// ============================================================
// SHOW CLIP
// ============================================================

function showClip() {

    const clips =
        document.getElementById("clips");

    if (!clips) {
        return;
    }

    if (currentClip >= allClips.length) {

        showComplete();

        return;
    }

    answered = false;

    const item =
        allClips[currentClip];

    const progress =
        total > 0
            ? ((currentClip) / total) * 100
            : 0;

    const playerName =
        escapeHTML(
            item.riot_name || "UNKNOWN PLAYER"
        );

    const clipUrl =
        escapeAttribute(
            item.clip_url || ""
        );

    clips.innerHTML = `

        <div class="card clip-enter">

            <div class="progress-area">

                <div class="progress-info">

                    <span>
                        QUIZ PROGRESS
                    </span>

                    <span>
                        ${currentClip} / ${total}
                    </span>

                </div>

                <div class="progress-track">

                    <div
                        class="progress-fill"
                        style="width:${progress}%"
                    ></div>

                </div>

            </div>


            <div class="clip-header">

                <span class="clip-number">
                    CLIP ${currentClip + 1}
                    /
                    ${total}
                </span>

                <span class="clip-label">
                    NOXIN99 • GUESS THE RANK
                </span>

            </div>


            <div class="video-wrapper">

                <video
                    controls
                    preload="metadata"
                    playsinline
                    src="${clipUrl}"
                ></video>

            </div>


            <div class="player-info">

                <div>

                    <div class="player-label">
                        SPIELER
                    </div>

                    <div class="player-name">
                        ${playerName}
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

                ${createRankButtons()}

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


// ============================================================
// CREATE RANK BUTTONS
// ============================================================

function createRankButtons() {

    let html = "";

    for (const rank of RANKS) {

        const icon =
            RANK_ICONS[rank];

        /*
         * Jeder Rang bekommt drei Stufen.
         *
         * Radiant und Immortal haben in VALORANT
         * besondere Regeln. Für das Quiz behandeln
         * wir sie trotzdem als 1 / 2 / 3 Auswahl,
         * damit das UI einheitlich bleibt.
         */

        for (let tier = 1; tier <= 3; tier++) {

            html += `

                <div
                    class="rank-choice"
                    data-rank="${rank}"
                    data-tier="${tier}"
                    onclick="guess('${rank}', ${tier})"
                >

                    <img
                        class="rank-icon"
                        src="${icon}"
                        alt="${rank} ${tier}"
                    >

                    <div class="rank-name">
                        ${rank} ${tier}
                    </div>

                </div>
            `;
        }
    }

    return html;
}


// ============================================================
// GUESS
// ============================================================

function guess(selectedRank, selectedTier) {

    if (answered) {
        return;
    }

    const item =
        allClips[currentClip];

    if (!item) {
        return;
    }

    answered = true;

    const real =
        parseRank(
            item.rank
        );

    const selected = {
        rank: selectedRank,
        tier: selectedTier
    };

    const isCorrect =
        ranksMatch(real, selected);

    const choices =
        document.querySelectorAll(
            ".rank-choice"
        );

    choices.forEach(choice => {

        choice.style.pointerEvents =
            "none";

        const choiceRank =
            choice.dataset.rank;

        const choiceTier =
            Number(choice.dataset.tier);

        if (
            choiceRank === selected.rank &&
            choiceTier === selected.tier
        ) {

            choice.classList.add(
                isCorrect
                    ? "correct"
                    : "wrong"
            );

        }

        if (
            real.rank === choiceRank &&
            real.tier === choiceTier
        ) {

            choice.classList.add("correct");
        }

    });


    if (isCorrect) {

        score++;

        correctAnswers++;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

    }

    else {

        wrongAnswers++;

        streak = 0;
    }


    updateStats();


    document
        .querySelector(".valo-background")
        ?.classList.add("result-flash");

    setTimeout(() => {

        document
            .querySelector(".valo-background")
            ?.classList.remove("result-flash");

    }, 350);


    showResult(
        real,
        selected,
        isCorrect
    );
}


// ============================================================
// PARSE RANK
// ============================================================

function parseRank(value) {

    if (value === undefined || value === null) {

        return {
            rank: "Unknown",
            tier: null,
            generic: true
        };
    }

    let text =
        String(value)
            .trim()
            .toLowerCase();

    text =
        text
            .replace(/diamant/g, "diamond")
            .replace(/platin/g, "platinum")
            .replace(/aufsteigend/g, "ascendant")
            .replace(/unsterblich/g, "immortal")
            .replace(/strahlend/g, "radiant");

    let rank =
        RANKS.find(
            r =>
                text.startsWith(
                    r.toLowerCase()
                )
        );

    if (!rank) {

        return {
            rank: String(value),
            tier: null,
            generic: true
        };
    }

    const tierMatch =
        text.match(
            /(?:^|\s)([123])(?:\s|$)/
        );

    const tier =
        tierMatch
            ? Number(tierMatch[1])
            : null;

    return {
        rank,
        tier,
        generic: tier === null
    };
}


// ============================================================
// RANK MATCH
// ============================================================

function ranksMatch(real, selected) {

    if (
        real.rank === "Unknown"
    ) {
        return false;
    }

    if (
        real.rank !== selected.rank
    ) {
        return false;
    }

    /*
     * Falls dein Upload-System momentan nur
     * "Diamond" statt "Diamond 1" speichert,
     * wird jede Diamond-Stufe als Diamond gewertet.
     *
     * Sobald "Diamond 1/2/3" gespeichert wird,
     * wird exakt verglichen.
     */

    if (real.generic) {
        return true;
    }

    return real.tier === selected.tier;
}


// ============================================================
// RESULT
// ============================================================

function showResult(
    real,
    selected,
    isCorrect
) {

    const result =
        document.getElementById("result");

    if (!result) {
        return;
    }

    const image =
        RANK_ICONS[real.rank];

    const realText =
        real.tier
            ? `${real.rank} ${real.tier}`
            : real.rank;

    const selectedText =
        `${selected.rank} ${selected.tier}`;


    if (isCorrect) {

        result.innerHTML = `

            <div class="result-box correct-result">

                <h2 class="result-title">
                    ✅ RICHTIG!
                </h2>

                <img
                    src="${image || ""}"
                    alt="${escapeAttribute(realText)}"
                >

                <p class="result-text">

                    Dein Tipp:

                    <strong>
                        ${escapeHTML(selectedText)}
                    </strong>

                </p>

                <p class="result-text">

                    Echter Rang:

                    <strong>
                        ${escapeHTML(realText)}
                    </strong>

                </p>

                <div class="result-points">
                    +1 PUNKT
                </div>

            </div>
        `;

    }

    else {

        result.innerHTML = `

            <div class="result-box">

                <h2 class="result-title">
                    ❌ FALSCH!
                </h2>

                <p class="result-text">

                    Dein Tipp:

                    <strong>
                        ${escapeHTML(selectedText)}
                    </strong>

                </p>

                <img
                    src="${image || ""}"
                    alt="${escapeAttribute(realText)}"
                >

                <p class="result-text">

                    Echter Rang:

                    <strong>
                        ${escapeHTML(realText)}
                    </strong>

                </p>

                <div class="result-points">
                    +0 PUNKTE
                </div>

            </div>
        `;
    }


    const nextButton =
        document.getElementById(
            "nextButton"
        );

    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }
}


// ============================================================
// STATS
// ============================================================

function updateStats() {

    const scoreDisplay =
        document.getElementById(
            "scoreDisplay"
        );

    const accuracyDisplay =
        document.getElementById(
            "accuracyDisplay"
        );

    const streakDisplay =
        document.getElementById(
            "streakDisplay"
        );

    const answeredCount =
        correctAnswers +
        wrongAnswers;

    const accuracy =
        answeredCount > 0
            ? Math.round(
                (correctAnswers /
                answeredCount) *
                100
            )
            : 0;

    if (scoreDisplay) {

        scoreDisplay.textContent =
            `${score} / ${total}`;
    }

    if (accuracyDisplay) {

        accuracyDisplay.textContent =
            `${accuracy}%`;
    }

    if (streakDisplay) {

        streakDisplay.textContent =
            streak;
    }
}


// ============================================================
// NEXT CLIP
// ============================================================

function nextClip() {

    if (!answered) {
        return;
    }

    currentClip++;

    showClip();
}


// ============================================================
// COMPLETE SCREEN
// ============================================================

function showComplete() {

    const clips =
        document.getElementById("clips");

    if (!clips) {
        return;
    }

    const accuracy =
        total > 0
            ? Math.round(
                (correctAnswers /
                total) *
                100
            )
            : 0;

    const title =
        getFinalTitle(
            accuracy
        );


    clips.innerHTML = `

        <div class="card complete-card clip-enter">

            <div class="complete-trophy">
                🏆
            </div>

            <div class="small-title">
                QUIZ COMPLETE
            </div>

            <h1>
                ALLE CLIPS GESPIELT
            </h1>

            <div class="complete-rank">
                ${title}
            </div>

            <div class="complete-score">

                Ergebnis:

                <strong>
                    ${score} / ${total}
                </strong>

            </div>


            <div class="complete-stats">

                <div class="complete-stat">

                    <span>
                        ACCURACY
                    </span>

                    <strong>
                        ${accuracy}%
                    </strong>

                </div>


                <div class="complete-stat">

                    <span>
                        RICHTIG
                    </span>

                    <strong>
                        ${correctAnswers}
                    </strong>

                </div>


                <div class="complete-stat">

                    <span>
                        FALSCH
                    </span>

                    <strong>
                        ${wrongAnswers}
                    </strong>

                </div>


                <div class="complete-stat">

                    <span>
                        BEST STREAK
                    </span>

                    <strong>
                        ${bestStreak}
                    </strong>

                </div>

            </div>


            <button
                onclick="restartQuiz()"
            >
                🔄 NOCHMAL SPIELEN
            </button>

        </div>
    `;
}


// ============================================================
// FINAL TITLE
// ============================================================

function getFinalTitle(accuracy) {

    if (accuracy >= 95) {
        return "🔥 RADIANT GUESSER";
    }

    if (accuracy >= 90) {
        return "💎 IMMORTAL GUESSER";
    }

    if (accuracy >= 80) {
        return "🌿 ASCENDANT GUESSER";
    }

    if (accuracy >= 70) {
        return "💠 DIAMOND GUESSER";
    }

    if (accuracy >= 60) {
        return "🏆 PLATINUM GUESSER";
    }

    if (accuracy >= 50) {
        return "🥇 GOLD GUESSER";
    }

    if (accuracy >= 40) {
        return "🥈 SILVER GUESSER";
    }

    if (accuracy >= 25) {
        return "🥉 BRONZE GUESSER";
    }

    return "⚙️ IRON GUESSER";
}


// ============================================================
// RESTART
// ============================================================

function restartQuiz() {

    currentClip = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    streak = 0;

    bestStreak = 0;

    answered = false;

    updateStats();

    showClip();
}


// ============================================================
// HTML SAFETY
// ============================================================

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function escapeAttribute(value) {

    return escapeHTML(value);
}


// ============================================================
// START
// ============================================================

renderLogin();
