const password = prompt("Admin Passwort");

if (password !== "Noxin99") {
    document.body.innerHTML = "<h1>❌ Kein Zugriff</h1>";
    throw new Error("Kein Zugriff");
}


// ========================================
// VALORANT DESIGN
// ========================================

document.body.innerHTML = `
    <div class="valo-background">

        <div class="valo-grid"></div>

        <header class="topbar">

            <div class="logo">
                <span class="logo-mark">V</span>
                <div>
                    <div class="logo-title">NOXIN99</div>
                    <div class="logo-subtitle">VALORANT CLIP QUIZ</div>
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
                        Welchen Rang hat der Spieler?
                    </h1>
                </div>

                <div class="score-box">
                    <span>SCORE</span>
                    <strong id="scoreDisplay">0 / 0</strong>
                </div>

            </div>


            <div id="clips"></div>

        </main>

    </div>
`;


// ========================================
// CSS
// ========================================

const style = document.createElement("style");

style.innerHTML = `

@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Rajdhani', Arial, sans-serif;
    background: #08090d;
    color: white;
    overflow-x: hidden;
}


/* BACKGROUND */

.valo-background {
    min-height: 100vh;
    position: relative;
    background:
        radial-gradient(
            circle at 50% 20%,
            rgba(255, 70, 85, 0.13),
            transparent 40%
        ),
        linear-gradient(
            135deg,
            #08090d 0%,
            #101117 50%,
            #08090d 100%
        );
}

.valo-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.12;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.08) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.08) 1px,
            transparent 1px
        );

    background-size: 60px 60px;
}


/* RED DECORATION */

.valo-background::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background: #ff4655;

    box-shadow:
        0 0 20px rgba(255,70,85,0.8);
}

.valo-background::after {
    content: "";
    position: fixed;
    right: -200px;
    bottom: -200px;

    width: 500px;
    height: 500px;

    border: 1px solid rgba(255,70,85,0.2);

    transform: rotate(45deg);
}


/* TOP BAR */

.topbar {
    height: 85px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 45px;

    background: rgba(8,9,13,0.88);

    border-bottom:
        1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(15px);

    position: relative;
    z-index: 5;
}


/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 14px;
}

.logo-mark {
    width: 46px;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff4655;

    color: white;

    font-weight: 700;
    font-size: 25px;

    clip-path:
        polygon(
            0 0,
            100% 0,
            82% 100%,
            18% 100%
        );

    box-shadow:
        0 0 20px rgba(255,70,85,0.35);
}

.logo-title {
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 3px;
}

.logo-subtitle {
    font-size: 11px;
    letter-spacing: 3px;
    color: #8d929d;
}


/* ADMIN */

.admin-badge {
    font-size: 13px;
    letter-spacing: 2px;

    padding: 10px 18px;

    border: 1px solid rgba(255,70,85,0.4);

    background: rgba(255,70,85,0.06);

    color: #ff7b86;
}

.status-dot {
    display: inline-block;

    width: 7px;
    height: 7px;

    margin-right: 8px;

    border-radius: 50%;

    background: #ff4655;

    box-shadow:
        0 0 10px #ff4655;
}


/* MAIN */

.main {
    width: min(1200px, calc(100% - 40px));

    margin: 0 auto;

    padding: 45px 0 80px;

    position: relative;
    z-index: 2;
}


/* HEADER */

.quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 25px;
}

.small-title {
    color: #ff4655;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 4px;
}

.quiz-header h1 {
    margin: 6px 0 0;

    font-size: clamp(28px, 4vw, 45px);

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* SCORE */

.score-box {
    min-width: 145px;

    padding: 12px 20px;

    text-align: right;

    background: rgba(255,255,255,0.035);

    border-right:
        3px solid #ff4655;
}

.score-box span {
    display: block;

    color: #777d88;

    font-size: 11px;

    letter-spacing: 3px;
}

.score-box strong {
    font-size: 25px;
}


/* CARD */

.card {
    position: relative;

    background:
        linear-gradient(
            145deg,
            rgba(24,26,34,0.98),
            rgba(13,14,19,0.98)
        );

    border:
        1px solid rgba(255,255,255,0.09);

    padding: 28px;

    box-shadow:
        0 25px 80px rgba(0,0,0,0.45);

    overflow: hidden;
}

.card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 90px;
    height: 3px;

    background: #ff4655;

    box-shadow:
        0 0 15px rgba(255,70,85,0.7);
}

.card::after {
    content: "";

    position: absolute;

    right: 0;
    bottom: 0;

    width: 70px;
    height: 70px;

    border-right:
        2px solid rgba(255,70,85,0.45);

    border-bottom:
        2px solid rgba(255,70,85,0.45);
}


/* CLIP */

.card video {
    display: block;

    width: 100% !important;

    max-height: 650px !important;

    background: #050609;

    border:
        1px solid rgba(255,255,255,0.08);

    border-radius: 0 !important;

    box-shadow:
        0 20px 50px rgba(0,0,0,0.5);
}


/* PLAYER */

.card > p {
    margin: 20px 0 5px;

    color: #a7abb4;

    font-size: 17px;
}

.card > p strong {
    color: white;
}


/* QUESTION */

.card h3 {
    margin-top: 25px;

    text-transform: uppercase;

    font-size: 20px;

    letter-spacing: 2px;
}


/* RANKS */

.ranks {
    display: grid;

    grid-template-columns:
        repeat(9, 1fr);

    gap: 10px;

    margin-top: 20px;
}

.rank-icon {
    width: 100%;

    max-width: 95px;

    aspect-ratio: 1;

    object-fit: contain;

    padding: 10px;

    cursor: pointer;

    background:
        rgba(255,255,255,0.025);

    border:
        1px solid rgba(255,255,255,0.08);

    transition:
        transform 0.15s ease,
        border 0.15s ease,
        background 0.15s ease,
        filter 0.15s ease;
}

.rank-icon:hover {
    transform:
        translateY(-7px)
        scale(1.05);

    border:
        1px solid #ff4655;

    background:
        rgba(255,70,85,0.1);

    filter:
        drop-shadow(
            0 0 12px
            rgba(255,70,85,0.45)
        );
}


/* RESULT */

#result {
    margin-top: 25px;
}

#result > div {
    background:
        rgba(255,255,255,0.035);

    border-left:
        4px solid #ff4655;

    text-align: center;

    animation:
        resultIn 0.25s ease;
}

#result h2 {
    font-size: 30px;

    text-transform: uppercase;

    letter-spacing: 3px;
}

#result img {
    filter:
        drop-shadow(
            0 0 20px
            rgba(255,255,255,0.15)
        );
}

@keyframes resultIn {

    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* BUTTON */

button {
    position: relative;

    border: none;

    padding: 14px 28px;

    background: #ff4655;

    color: white;

    font-family: inherit;

    font-size: 16px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;

    cursor: pointer;

    clip-path:
        polygon(
            0 0,
            94% 0,
            100% 30%,
            100% 100%,
            6% 100%,
            0 70%
        );

    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease;
}

button:hover {
    transform:
        translateY(-2px);

    box-shadow:
        0 8px 25px
        rgba(255,70,85,0.35);
}

button:active {
    transform:
        translateY(0);
}


/* END SCREEN */

.card h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
}


/* MOBILE */

@media (max-width: 850px) {

    .topbar {
        padding: 0 20px;
    }

    .main {
        width: calc(100% - 20px);
        padding-top: 25px;
    }

    .quiz-header {
        align-items: flex-start;
        gap: 20px;
        flex-direction: column;
    }

    .score-box {
        text-align: left;
    }

    .ranks {
        grid-template-columns:
            repeat(5, 1fr);
    }

    .card {
        padding: 18px;
    }

}

@media (max-width: 500px) {

    .logo-subtitle {
        display: none;
    }

    .admin-badge {
        font-size: 10px;
        padding: 8px;
    }

    .ranks {
        grid-template-columns:
            repeat(3, 1fr);
    }

}

`;

document.head.appendChild(style);


// ========================================
// QUIZ
// ========================================

let allClips = [];
let currentClip = 0;
let score = 0;
let total = 0;


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
        total = allClips.length;

        updateScore();

        showClip();

    } catch (error) {

        console.error(error);

        const clips =
            document.getElementById("clips");

        if (clips) {

            clips.innerHTML = `
                <div class="card">

                    <h2>❌ Fehler</h2>

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
        document.getElementById("clips");

    if (!clips) {
        return;
    }


    if (currentClip >= allClips.length) {

        clips.innerHTML = `

            <div class="card">

                <div class="small-title">
                    QUIZ COMPLETE
                </div>

                <h1>
                    🏆 Alle Clips gespielt!
                </h1>

                <h2>
                    Ergebnis:
                    ${score} / ${total}
                </h2>

                <br>

                <button onclick="restartQuiz()">
                    🔄 Nochmal spielen
                </button>

            </div>

        `;

        return;
    }


    const item =
        allClips[currentClip];


    clips.innerHTML = `

        <div class="card">

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:15px;
            ">

                <span style="
                    color:#ff4655;
                    font-weight:700;
                    letter-spacing:2px;
                ">
                    CLIP ${currentClip + 1}
                    /
                    ${allClips.length}
                </span>

                <span style="
                    color:#777d88;
                    letter-spacing:1px;
                ">
                    NOXIN99 QUIZ
                </span>

            </div>


            <video
                controls
                src="${item.clip_url}">
            </video>


            <p>
                <strong>SPIELER:</strong>
                ${item.riot_name}
            </p>


            <h3>
                Welchen Rang hat der Spieler?
            </h3>


            <div class="ranks">

                <img
                    class="rank-icon"
                    src="/Iron_1_Rank.webp"
                    onclick="guess('${item.rank}','Iron')"
                >

                <img
                    class="rank-icon"
                    src="/Bronze_1_Rank.webp"
                    onclick="guess('${item.rank}','Bronze')"
                >

                <img
                    class="rank-icon"
                    src="/Silver_1_Rank.webp"
                    onclick="guess('${item.rank}','Silver')"
                >

                <img
                    class="rank-icon"
                    src="/Gold_1_Rank.webp"
                    onclick="guess('${item.rank}','Gold')"
                >

                <img
                    class="rank-icon"
                    src="/Platinum_1_Rank.webp"
                    onclick="guess('${item.rank}','Platinum')"
                >

                <img
                    class="rank-icon"
                    src="/Diamond_1_Rank.webp"
                    onclick="guess('${item.rank}','Diamond')"
                >

                <img
                    class="rank-icon"
                    src="/Ascendant_1_Rank.webp"
                    onclick="guess('${item.rank}','Ascendant')"
                >

                <img
                    class="rank-icon"
                    src="/Immortal_1_Rank.webp"
                    onclick="guess('${item.rank}','Immortal')"
                >

                <img
                    class="rank-icon"
                    src="/Radiant_Rank.webp"
                    onclick="guess('${item.rank}','Radiant')"
                >

            </div>


            <div id="result"></div>


            <br>


            <button
                id="nextButton"
                onclick="nextClip()"
                style="display:none;"
            >
                ➡️ Nächster Clip
            </button>

        </div>

    `;
}


// ========================================
// RANG RATEN
// ========================================

function guess(realRank, selectedRank) {

    realRank =
        realRank
            .replace("Diamant", "Diamond")
            .replace("Platin", "Platinum");


    const result =
        document.getElementById("result");


    const img =
        rankImages[realRank];


    if (realRank === selectedRank) {

        score++;

        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:20px;
                border-radius:12px;
            ">

                <h2>
                    ✅ RICHTIG!
                </h2>

                <img
                    src="${img}"
                    width="180"
                >

                <p>
                    Der echte Rang ist:
                    <strong>
                        ${realRank}
                    </strong>
                </p>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:20px;
                border-radius:12px;
            ">

                <h2>
                    ❌ FALSCH!
                </h2>

                <p>
                    Dein Tipp:
                    <strong>
                        ${selectedRank}
                    </strong>
                </p>

                <img
                    src="${img}"
                    width="180"
                >

                <p>
                    Echter Rang:
                    <strong>
                        ${realRank}
                    </strong>
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


    const rankIcons =
        document.querySelectorAll(".rank-icon");


    rankIcons.forEach(icon => {

        icon.style.pointerEvents =
            "none";

        icon.style.opacity =
            "0.45";

    });
}


// ========================================
// SCORE
// ========================================

function updateScore() {

    const scoreDisplay =
        document.getElementById(
            "scoreDisplay"
        );

    if (scoreDisplay) {

        scoreDisplay.textContent =
            `${score} / ${total}`;
    }
}


// ========================================
// NÄCHSTER CLIP
// ========================================

function nextClip() {

    currentClip++;

    showClip();
}


// ========================================
// NEUSTART
// ========================================

function restartQuiz() {

    currentClip = 0;
    score = 0;

    updateScore();

    showClip();
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
        "/Radiant_Rank.webp",

    "Platin":
        "/Platinum_1_Rank.webp",

    "Diamant":
        "/Diamond_1_Rank.webp"

};


// ========================================
// START
// ========================================

loadClips();
