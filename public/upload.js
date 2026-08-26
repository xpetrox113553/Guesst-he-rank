async function uploadClip() {

    const riotName =
        document.getElementById("riotName")
        .value
        .trim();


    const rank =
        document.getElementById("rank")
        .value;


    const tierElement =
        document.getElementById("tier");


    const tier =
        tierElement
            ? tierElement.value
            : "1";


    const file =
        document.getElementById("clip")
        .files[0];


    const status =
        document.getElementById("status");


    // ========================================
    // EINGABEN PRÜFEN
    // ========================================

    if (
        !riotName ||
        !rank ||
        !file
    ) {

        status.textContent =
            "Bitte alles ausfüllen.";

        return;

    }


    // ========================================
    // RANG ZUSAMMENBAUEN
    // ========================================

    let selectedRank;


    if (rank === "Radiant") {

        selectedRank =
            "Radiant";

    } else {

        selectedRank =
            `${rank} ${tier}`;

    }


    // ========================================
    // FORM DATA
    // ========================================

    const formData =
        new FormData();


    formData.append(
        "riotName",
        riotName
    );


    formData.append(
        "rank",
        selectedRank
    );


    formData.append(
        "clip",
        file
    );


    // ========================================
    // UPLOAD
    // ========================================

    status.textContent =
        "Upload läuft...";


    try {

        const response =
            await fetch(
                "/upload",
                {
                    method: "POST",
                    body: formData
                }
            );


        const result =
            await response.json();


        if (result.success) {

            status.textContent =
                `✅ Clip erfolgreich hochgeladen – ${selectedRank}`;


            // Felder zurücksetzen

            document.getElementById(
                "riotName"
            ).value = "";


            document.getElementById(
                "clip"
            ).value = "";


        } else {

            status.textContent =
                "❌ Upload fehlgeschlagen";

        }

    }

    catch (error) {

        console.error(error);

        status.textContent =
            "❌ Fehler beim Upload.";

    }

}
