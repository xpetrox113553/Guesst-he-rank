async function loadClips() {

    const clips =
        document.getElementById("clips");

    clips.innerHTML =
        "Lade Clips...";

    const response =
        await fetch("/submissions");

    const data =
        await response.json();

    clips.innerHTML = "";

    data.forEach(item => {

        clips.innerHTML += `

            <div style="
                margin-top:20px;
                padding:15px;
                border:1px solid #444;
                border-radius:10px;
            ">

                <video
                    controls
                    width="100%"
                    src="${item.clip_url}">
                </video>

                <p>
                    Spieler:
                    ${item.riot_name}
                </p>

               <div class="ranks">

<button onclick="guess('${item.rank}','Iron')">Iron</button>
<button onclick="guess('${item.rank}','Bronze')">Bronze</button>
<button onclick="guess('${item.rank}','Silver')">Silver</button>
<button onclick="guess('${item.rank}','Gold')">Gold</button>
<button onclick="guess('${item.rank}','Platin')">Platin</button>
<button onclick="guess('${item.rank}','Diamant')">Diamant</button>
<button onclick="guess('${item.rank}','Ascendant')">Ascendant</button>
<button onclick="guess('${item.rank}','Immortal')">Immortal</button>
<button onclick="guess('${item.rank}','Radiant')">Radiant</button>

</div>
                </button>

            </div>

        `;

    });

}
function guess(realRank, selectedRank) {

    const result =
        document.getElementById("result");

    if (realRank === selectedRank) {

        result.innerHTML = `
            <h2>✅ RICHTIG!</h2>
            <p>Rang: ${realRank}</p>
        `;

    } else {

        result.innerHTML = `
            <h2>❌ FALSCH!</h2>
            <p>Dein Tipp: ${selectedRank}</p>
            <p>Echter Rang: ${realRank}</p>
        `;

    }

}
const rankImages = {
    "Iron": "/ranks/iron.png",
    "Bronze": "/ranks/bronze.png",
    "Silver": "/ranks/silver.png",
    "Gold": "/ranks/gold.png",
    "Platin": "/ranks/platinum.png",
    "Diamant": "/ranks/diamond.png",
    "Ascendant": "/ranks/ascendant.png",
    "Immortal": "/ranks/immortal.png",
    "Radiant": "/ranks/radiant.png"
};
