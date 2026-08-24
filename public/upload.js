async function uploadClip() {

    const riotName =
        document.getElementById("riotName")
        .value
        .trim();

    const rank =
        document.getElementById("rank")
        .value;

    const file =
        document.getElementById("clip")
        .files[0];

    const status =
        document.getElementById("status");

    if (
        !riotName ||
        !rank ||
        !file
    ) {
        status.textContent =
            "Bitte alles ausfüllen.";
        return;
    }

    const formData =
        new FormData();

    formData.append(
        "riotName",
        riotName
    );

    formData.append(
        "rank",
        rank
    );

    formData.append(
        "clip",
        file
    );

    status.textContent =
        "Upload läuft...";

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
            "✅ Clip erfolgreich hochgeladen";

    } else {

        status.textContent =
            "❌ Upload fehlgeschlagen";
    }

}
