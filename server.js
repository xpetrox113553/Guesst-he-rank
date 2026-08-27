require("dotenv").config();

const express = require("express");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");

const app = express();

const upload = multer({
    storage: multer.memoryStorage()
});

app.use(express.json());
app.use(express.static("public"));

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

/* =========================
   CLIP HOCHLADEN
========================= */

app.post(
    "/upload",
    upload.single("clip"),
    async (req, res) => {

        try {

            const riotName =
                req.body.riotName;

            let rank =
    req.body.rank;

rank = String(rank)
    .trim()
    .replace(/Platinumum/gi, "Platinum")
    .replace(/Platinuminum/gi, "Platinum")
    .replace(/Platininum/gi, "Platinum")
    .replace(/Platin(?!um)/gi, "Platinum")
    .replace(/Diamant/gi, "Diamond");

            const file =
                req.file;

            if (
                !riotName ||
                !rank ||
                !file
            ) {
                return res
                    .status(400)
                    .json({
                        error: "Fehlende Daten"
                    });
            }

            const filename =
                Date.now() +
                "-" +
                file.originalname;

            const { error: uploadError } =
                await supabase
                    .storage
                    .from("clips")
                    .upload(
                        filename,
                        file.buffer,
                        {
                            contentType:
                                file.mimetype
                        }
                    );

            if (uploadError) {
                throw uploadError;
            }

            const {
                data: publicData
            } =
                supabase
                    .storage
                    .from("clips")
                    .getPublicUrl(
                        filename
                    );

            const clipUrl =
                publicData.publicUrl;

            const {
                error: insertError
            } =
                await supabase
                    .from("submissions")
                    .insert({
                        riot_name:
                            riotName,
                        rank:
                            rank,
                        clip_url:
                            clipUrl
                    });

            if (insertError) {
                console.error("INSERT ERROR:", insertError);
                throw insertError;
            }

            console.log("INSERT OK");

            res.json({
                success: true
            });

        } catch (err) {

            console.error(err);

            res
                .status(500)
                .json({
                    error:
                        "Upload fehlgeschlagen"
                });
        }

    }
);

/* =========================
   ALLE CLIPS
========================= */

app.get(
    "/submissions",
    async (req, res) => {

        const {
            data,
            error
        } =
            await supabase
                .from("submissions")
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );

        if (error) {
            return res
                .status(500)
                .json(error);
        }

        res.json(data);

    }
);

const PORT =
    process.env.PORT || 3000;

app.listen(
    PORT,
    () => {
        console.log(
            "Server läuft auf Port",
            PORT
        );
    }
);
