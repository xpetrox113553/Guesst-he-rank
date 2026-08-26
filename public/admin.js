const password = prompt("Admin Passwort");

if (password !== "Noxin99") {
    document.body.innerHTML = "<h1>❌ Kein Zugriff</h1>";
    throw new Error("Kein Zugriff");
}

let allClips = [];
let currentClip = 0;
let score = 0;
let total = 0;


// ===============================
// CLIPS LADEN
// ===============================

async function loadClips() {

    try {

        const response = await fetch("/submissions");

        if (!response.ok) {
            throw new Error("Clips konnten nicht geladen werden.");
        }

        allClips = await response.json();

        currentClip = 0;
        score = 0;
        total = allClips.length;

        showClip();

    } catch (error) {

        console.error(error);

        const clips = document.getElementById("clips");

        if (clips) {
            clips.innerHTML = `
                <h2>❌ Fehler</h2>
                <p>Die Clips konnten nicht geladen werden.</p>
            `;
        }
    }
}


// ===============================
// CLIP ANZEIGEN
// ===============================

function showClip() {

    const clips = document.getElementById("clips");

    if (!clips) {
        console.error("Element #clips wurde nicht gefunden.");
        return;
    }

    // Alle Clips fertig
    if (currentClip >= allClips.length) {

        clips.innerHTML = `
            <div class="card">

                <h1>🏆 Alle Clips gespielt!</h1>

                <h2>
                    Ergebnis: ${score} / ${total}
                </h2>

                <button onclick="restartQuiz()">
                    🔄 Nochmal spielen
                </button>

            </div>
        `;

        return;
    }


    const item = allClips[currentClip];


    clips.innerHTML = `

        <div class="card">

            <h2>
                🎬 Clip ${currentClip + 1} / ${allClips.length}
            </h2>

            <video
                controls
                style="
                    width:100%;
                    max-height:700px;
                    border-radius:15px;
                "
                src="${item.clip_url}">
            </video>

            <p>
                <strong>Spieler:</strong>
                ${item.riot_name}
            </p>

            <h3>
                Welchen Rang hat der Spieler?
            </h3>

            <div class="ranks">

                <img
                    class="rank-icon"
                    src="/Iron_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Iron')"
                >

                <img
                    class="rank-icon"
                    src="/Bronze_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Bronze')"
                >

                <img
                    class="rank-icon"
                    src="/Silver_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Silver')"
                >

                <img
                    class="rank-icon"
                    src="/Gold_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Gold')"
                >

                <img
                    class="rank-icon"
                    src="/Platinum_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Platinum')"
                >

                <img
                    class="rank-icon"
                    src="/Diamond_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Diamond')"
                >

                <img
                    class="rank-icon"
                    src="/Ascendant_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Ascendant')"
                >

                <img
                    class="rank-icon"
                    src="/Immortal_1_Rank.webp"
                    onclick="guess('${item.rank}', 'Immortal')"
                >

                <img
                    class="rank-icon"
                    src="/Radiant_Rank.webp"
                    onclick="guess('${item.rank}', 'Radiant')"
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


// ===============================
// RANG RATEN
// ===============================

function guess(realRank, selectedRank) {

    // Deutsche Rangnamen korrigieren
    realRank = realRank
        .replace("Diamant", "Diamond")
        .replace("Platin", "Platinum");


    const result =
        document.getElementById("result");


    if (!result) {
        console.error("Element #result wurde nicht gefunden.");
        return;
    }


    console.log("Echter Rang:", realRank);
    console.log("Getippter Rang:", selectedRank);


    const img = rankImages[realRank];


    // Richtig
    if (realRank === selectedRank) {

        score++;

        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:20px;
                border-radius:15px;
            ">

                <h2>✅ RICHTIG!</h2>

                <img
                    src="${img}"
                    width="180"
                >

                <p>
                    Der echte Rang ist:
                    <strong>${realRank}</strong>
                </p>

            </div>

        `;

    }

    // Falsch
    else {

        result.innerHTML = `

            <div style="
                margin-top:20px;
                padding:20px;
                border-radius:15px;
            ">

                <h2>❌ FALSCH!</h2>

                <p>
                    Dein Tipp:
                    <strong>${selectedRank}</strong>
                </p>

                <img
                    src="${img}"
                    width="180"
                >

                <p>
                    Echter Rang:
                    <strong>${realRank}</strong>
                </p>

            </div>

        `;
    }


    // Nächster-Clip-Button anzeigen
    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {
        nextButton.style.display = "inline-block";
    }


    // Rangbilder deaktivieren
    const rankIcons =
        document.querySelectorAll(".rank-icon");

    rankIcons.forEach(icon => {
        icon.style.pointerEvents = "none";
        icon.style.opacity = "0.5";
    });
}


// ===============================
// NÄCHSTER CLIP
// ===============================

function nextClip() {

    currentClip++;

    showClip();
}


// ===============================
// QUIZ NEUSTARTEN
// ===============================

function restartQuiz() {

    currentClip = 0;
    score = 0;

    showClip();
}


// ===============================
// RANG-BILDER
// ===============================

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

    // Deutsche Namen
    "Platin":
        "/Platinum_1_Rank.webp",

    "Diamant":
        "/Diamond_1_Rank.webp"
};


// ===============================
// START
// ===============================

loadClips();
