// ========================================
// ADMIN PASSWORT
// ========================================

const password = prompt("Admin Passwort");

if (password !== "Noxin99") {
    document.body.innerHTML = "<h1>❌ Kein Zugriff</h1>";
    throw new Error("Kein Zugriff");
}


// ========================================
// QUIZ VARIABLEN
// ========================================

let allClips = [];
let currentClip = 0;
let score = 0;
let total = 0;
let answered = false;


// ========================================
// RANG-BILDER
// ========================================

const rankImages = {

    Iron: {
        1: "/Iron_1_Rank.webp",
        2: "/Iron_2_Rank.webp",
        3: "/Iron_3_Rank.webp"
    },

    Bronze: {
        1: "/Bronze_1_Rank.webp",
        2: "/Bronze_2_Rank.webp",
        3: "/Bronze_3_Rank.webp"
    },

    Silver: {
        1: "/Silver_1_Rank.webp",
        2: "/Silver_2_Rank.webp",
        3: "/Silver_3_Rank.webp"
    },

    Gold: {
        1: "/Gold_1_Rank.webp",
        2: "/Gold_2_Rank.webp",
        3: "/Gold_3_Rank.webp"
    },

    Platinum: {
        1: "/Platinum_1_Rank.webp",
        2: "/Platinum_2_Rank.webp",
        3: "/Platinum_3_Rank.webp"
    },

    Diamond: {
        1: "/Diamond_1_Rank.webp",
        2: "/Diamond_2_Rank.webp",
        3: "/Diamond_3_Rank.webp"
    },

    Ascendant: {
        1: "/Ascendant_1_Rank.webp",
        2: "/Ascendant_2_Rank.webp",
        3: "/Ascendant_3_Rank.webp"
    },

    Immortal: {
        1: "/Immortal_1_Rank.webp",
        2: "/Immortal_2_Rank.webp",
        3: "/Immortal_3_Rank.webp"
    },

    Radiant: {
        1: "/Radiant_Rank.webp"
    }

};


// ========================================
// RANG-NAMEN
// ========================================

const ranks = [
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


// ========================================
// DESIGN FÜR DIE RANG-AUSWAHL
// ========================================

const extraStyle = document.createElement("style");

extraStyle.innerHTML = `

.rank-select-container {
    margin-top: 25px;
}

.rank-select-title {
    margin-bottom: 15px;
    color: #8d929d;
    font-size: 12px;
    letter-spacing: 3px;
    font-weight: 700;
}

.rank-main-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 10px;
}

.rank-main {
    position: relative;
    min-height: 105px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.08);

    cursor: pointer;

    transition:
        transform 0.15s ease,
        border 0.15s ease,
        background 0.15s ease;
}

.rank-main:hover {
    transform: translateY(-5px);

    border-color: #ff4655;

    background: rgba(255,70,85,0.08);

    box-shadow:
        0 10px 25px rgba(255,70,85,0.15);
}

.rank-main img {
    width: 75px;
    height: 75px;
    object-fit: contain;
}

.rank-name {
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;

    text-align: center;

    font-size: 10px;
    letter-spacing: 1px;
    color: #9ca1ab;
    font-weight: 700;
}

.rank-tier-panel {
    margin-top: 20px;

    padding: 20px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,70,85,0.2);

    animation: tierOpen 0.2s ease;
}

.rank-tier-title {
    color: #ff4655;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 15px;
}

.rank-tier-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 15px;
}

.rank-tier {
    min-height: 130px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    gap: 5px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.08);

    cursor: pointer;

    transition:
        transform 0.15s ease,
        border 0.15s ease,
        background 0.15s ease;
}

.rank-tier:hover {
    transform: translateY(-5px);

    border-color: #ff4655;

    background: rgba(255,70,85,0.1);

    box-shadow:
        0 10px 30px rgba(255,70,85,0.2);
}

.rank-tier img {
    width: 85px;
    height: 85px;
    object-fit: contain;
}

.rank-tier span {
    font-weight: 700;

    letter-spacing: 2px;

    font-size: 13px;
}

@keyframes tierOpen {

    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

@media (max-width: 900px) {

    .rank-main-grid {
        grid-template-columns: repeat(5, 1fr);
    }

}

@media (max-width: 550px) {

    .rank-main-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .rank-tier-grid {
        grid-template-columns: 1fr;
    }

}

`;

document.head.appendChild(extraStyle);


// ========================================
// SCORE
// ========================================

function updateScore() {

    const scoreDisplay =
        document.getElementById("score");

    if (scoreDisplay) {

        scoreDisplay.textContent =
            `🏆 Punkte: ${score} / ${total}`;

    }

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

        total = allClips.length;

        updateScore();

        showClip();

    }

    catch (error) {

        console.error(error);

        const clips =
            document.getElementById("clips");

        if (clips) {

            clips.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        ❌
                    </div>

                    <h2>
                        Fehler beim Laden
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
        document.getElementById("clips");

    if (!clips) {
        return;
    }


    answered = false;


    // QUIZ FERTIG

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
                src="${item.clip_url}"
            ></video>


            <p>

                <strong>
                    SPIELER:
                </strong>

                ${item.riot_name}

            </p>


            <h3>
                Welchen Rang hat der Spieler?
            </h3>


            <div class="rank-select-container">

                <div class="rank-select-title">
                    1. RANG AUSWÄHLEN
                </div>


                <div class="rank-main-grid">

                    ${createRankButtons()}

                </div>


                <div id="tierPanel"></div>

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
// RANG-BUTTONS ERSTELLEN
// ========================================

function createRankButtons() {

    return ranks.map(rank => {

        return `

            <div
                class="rank-main"
                onclick="openTiers('${rank}')"
            >

                <img
                    src="${rankImages[rank][1]}"
                    alt="${rank}"
                >

                <div class="rank-name">
                    ${rank.toUpperCase()}
                </div>

            </div>

        `;

    }).join("");

}


// ========================================
// STUFEN ÖFFNEN
// ========================================

function openTiers(rank) {

    if (answered) {
        return;
    }


    const panel =
        document.getElementById("tierPanel");

    if (!panel) {
        return;
    }


    // RADIANT

    if (rank === "Radiant") {

        panel.innerHTML = `

            <div class="rank-tier-panel">

                <div class="rank-tier-title">
                    RADIANT AUSWÄHLEN
                </div>

                <div class="rank-tier-grid">

                    <div
                        class="rank-tier"
                        onclick="guessRank('Radiant', 1)"
                    >

                        <img
                            src="/Radiant_Rank.webp"
                            alt="Radiant"
                        >

                        <span>
                            RADIANT
                        </span>

                    </div>

                </div>

            </div>

        `;

        return;
    }


    // 1 / 2 / 3

    panel.innerHTML = `

        <div class="rank-tier-panel">

            <div class="rank-tier-title">
                ${rank.toUpperCase()} – STUFE AUSWÄHLEN
            </div>


            <div class="rank-tier-grid">

                <div
                    class="rank-tier"
                    onclick="guessRank('${rank}', 1)"
                >

                    <img
                        src="${rankImages[rank][1]}"
                        alt="${rank} 1"
                    >

                    <span>
                        ${rank.toUpperCase()} 1
                    </span>

                </div>


                <div
                    class="rank-tier"
                    onclick="guessRank('${rank}', 2)"
                >

                    <img
                        src="${rankImages[rank][2]}"
                        alt="${rank} 2"
                    >

                    <span>
                        ${rank.toUpperCase()} 2
                    </span>

                </div>


                <div
                    class="rank-tier"
                    onclick="guessRank('${rank}', 3)"
                >

                    <img
                        src="${rankImages[rank][3]}"
                        alt="${rank} 3"
                    >

                    <span>
                        ${rank.toUpperCase()} 3
                    </span>

                </div>

            </div>

        </div>

    `;

}


// ========================================
// RANG RATEN
// ========================================

function guessRank(selectedRank, selectedTier) {

    if (answered) {
        return;
    }

    answered = true;


    const item =
        allClips[currentClip];


    let realRank =
        item.rank;


    // Alte Schreibweisen umwandeln

    realRank =
        realRank
            .replace("Diamant", "Diamond")
            .replace("Platin", "Platinum")
            .replace("Aufstieg", "Ascendant");


    // Rang und Stufe auslesen

    let realRankName = realRank;
    let realTier = null;


    // Beispiel:
    // "Diamond 2"

    const match =
        realRank.match(
            /^(Iron|Bronze|Silver|Gold|Platinum|Diamond|Ascendant|Immortal|Radiant)\s*([123])?$/i
        );


    if (match) {

        realRankName =
            match[1];

        if (match[2]) {

            realTier =
                Number(match[2]);

        }

    }


    const result =
        document.getElementById("result");


    const correct =
        realRankName.toLowerCase() ===
        selectedRank.toLowerCase()
        &&
        (
            realTier === null ||
            realTier === selectedTier
        );


    let image;


    if (realRankName === "Radiant") {

        image =
            rankImages.Radiant[1];

    } else {

        image =
            rankImages[realRankName][realTier || 1];

    }


    // ========================================
    // RICHTIG
    // ========================================

    if (correct) {

        score++;


        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:25px;
            ">

                <h2>
                    ✅ RICHTIG!
                </h2>


                <img
                    src="${image}"
                    width="180"
                >


                <p>

                    Der echte Rang ist:

                    <strong>
                        ${realRankName}
                        ${realTier ? realTier : ""}
                    </strong>

                </p>

            </div>

        `;

    }


    // ========================================
    // FALSCH
    // ========================================

    else {

        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:25px;
            ">

                <h2>
                    ❌ FALSCH!
                </h2>


                <p>

                    Dein Tipp:

                    <strong>
                        ${selectedRank}
                        ${selectedTier}
                    </strong>

                </p>


                <img
                    src="${image}"
                    width="180"
                >


                <p>

                    Echter Rang:

                    <strong>
                        ${realRankName}
                        ${realTier ? realTier : ""}
                    </strong>

                </p>

            </div>

        `;

    }


    updateScore();


    // Icons deaktivieren

    document
        .querySelectorAll(".rank-main, .rank-tier")
        .forEach(element => {

            element.style.pointerEvents =
                "none";

            element.style.opacity =
                "0.45";

        });


    // Nächster Clip

    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {

        nextButton.style.display =
            "inline-block";

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

    answered = false;

    updateScore();

    showClip();

}


// ========================================
// START
// ========================================

updateScore();

loadClips();
