// ========================================
// NOXIN99 VALORANT CLIP QUIZ
// ADMIN PANEL
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
// CSS
// ========================================

const style = document.createElement("style");

style.innerHTML = `

@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');


* {
    box-sizing: border-box;
}


html,
body {
    margin: 0;
    padding: 0;
    min-height: 100%;
}


body {
    min-height: 100vh;

    font-family:
        'Rajdhani',
        Arial,
        sans-serif;

    background: #08090d;

    color: white;

    overflow-x: hidden;
}


/* ========================================
   LOGIN
======================================== */

.login-screen {

    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(255,70,85,0.14),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #08090d,
            #111219,
            #08090d
        );
}


.login-screen::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background: #ff4655;

    box-shadow:
        0 0 25px #ff4655;
}


.login-grid {

    position: absolute;

    inset: 0;

    opacity: 0.10;

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


.login-glow {

    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    background:
        rgba(255,70,85,0.08);

    filter: blur(100px);
}


.login-box {

    width:
        min(440px, calc(100% - 35px));

    padding:
        45px 42px;

    position: relative;

    z-index: 2;

    text-align: center;

    background:
        linear-gradient(
            145deg,
            rgba(24,26,34,0.98),
            rgba(10,11,16,0.98)
        );

    border:
        1px solid rgba(255,255,255,0.10);

    box-shadow:
        0 30px 100px rgba(0,0,0,0.65),
        0 0 50px rgba(255,70,85,0.06);
}


.login-box::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 120px;
    height: 3px;

    background: #ff4655;

    box-shadow:
        0 0 20px #ff4655;
}


.login-box::after {

    content: "";

    position: absolute;

    right: 0;
    bottom: 0;

    width: 55px;
    height: 55px;

    border-right:
        2px solid rgba(255,70,85,0.5);

    border-bottom:
        2px solid rgba(255,70,85,0.5);
}


.login-logo {

    width: 65px;
    height: 65px;

    margin:
        0 auto 14px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #ff4655;

    font-size: 34px;

    font-weight: 700;

    clip-path:
        polygon(
            0 0,
            100% 0,
            82% 100%,
            18% 100%
        );

    box-shadow:
        0 0 30px rgba(255,70,85,0.45);
}


.login-small {

    color: #ff4655;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 5px;
}


.login-box h1 {

    margin:
        5px 0 0;

    font-size: 36px;

    letter-spacing: 3px;

    text-transform: uppercase;
}


.login-line {

    width: 70px;
    height: 3px;

    margin:
        14px auto;

    background: #ff4655;

    box-shadow:
        0 0 12px rgba(255,70,85,0.7);
}


.login-subtitle {

    margin:
        0 0 35px;

    color: #777d88;

    font-size: 12px;

    letter-spacing: 3px;
}


.login-box label {

    display: block;

    margin-bottom: 8px;

    text-align: left;

    color: #8d929d;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 2px;
}


#adminPassword {

    width: 100%;

    height: 52px;

    padding:
        0 16px;

    outline: none;

    border:
        1px solid rgba(255,255,255,0.10);

    background:
        rgba(255,255,255,0.035);

    color: white;

    font-family: inherit;

    font-size: 16px;

    letter-spacing: 1px;

    transition:
        border 0.2s ease,
        box-shadow 0.2s ease;
}


#adminPassword:focus {

    border-color: #ff4655;

    box-shadow:
        0 0 20px rgba(255,70,85,0.15);
}


#adminPassword::placeholder {
    color: #555a64;
}


.login-box button {

    width: 100%;

    height: 52px;

    margin-top: 18px;

    border: none;

    background: #ff4655;

    color: white;

    font-family: inherit;

    font-size: 15px;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;

    cursor: pointer;

    clip-path:
        polygon(
            0 0,
            96% 0,
            100% 25%,
            100% 100%,
            4% 100%,
            0 75%
        );

    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease;
}


.login-box button:hover {

    transform:
        translateY(-2px);

    box-shadow:
        0 10px 30px
        rgba(255,70,85,0.35);
}


.login-error {

    min-height: 22px;

    margin-top: 14px;

    color: #ff4655;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 1px;
}


.login-status {

    margin-top: 25px;

    color: #555a64;

    font-size: 10px;

    letter-spacing: 2px;
}


.login-status span {

    display: inline-block;

    width: 6px;
    height: 6px;

    margin-right: 7px;

    border-radius: 50%;

    background: #ff4655;

    box-shadow:
        0 0 8px #ff4655;
}


.login-wrong {

    animation:
        loginShake 0.25s ease;
}


@keyframes loginShake {

    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-7px);
    }

    50% {
        transform: translateX(7px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }

}


/* ========================================
   ADMIN BACKGROUND
======================================== */

.valo-background {

    min-height: 100vh;

    position: relative;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 50% 15%,
            rgba(255,70,85,0.15),
            transparent 38%
        ),
        linear-gradient(
            135deg,
            #08090d 0%,
            #101117 50%,
            #08090d 100%
        );
}


.valo-background::before {

    content: "";

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background: #ff4655;

    box-shadow:
        0 0 25px rgba(255,70,85,0.9);

    z-index: 20;
}


.valo-background::after {

    content: "";

    position: fixed;

    right: -250px;
    bottom: -250px;

    width: 600px;
    height: 600px;

    border:
        1px solid rgba(255,70,85,0.22);

    transform:
        rotate(45deg);

    pointer-events: none;
}


.valo-grid {

    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: 0.10;

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


/* ========================================
   AGENTS
======================================== */

.agent-bg {

    position: fixed;

    z-index: 1;

    pointer-events: none;

    user-select: none;

    object-fit: contain;

    opacity: 0.42;

    filter:
        saturate(0.8)
        brightness(0.65)
        contrast(1.08)
        drop-shadow(
            0 0 35px
            rgba(255,70,85,0.12)
        );

    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
}


/* WAYLAY */

.waylay-bg {

    left: -125px;

    bottom: -90px;

    width: 560px;

    max-height: 82vh;

    object-position:
        bottom left;
}


/* RAZE */

.raze-bg {

    right: -135px;

    bottom: -80px;

    width: 570px;

    max-height: 82vh;

    object-position:
        bottom right;
}


/* WAYLAY ICON */

.agent-icon-bg {

    position: fixed;

    right: 38px;

    top: 112px;

    width: 72px;
    height: 72px;

    object-fit: contain;

    opacity: 0.16;

    z-index: 1;

    pointer-events: none;

    filter:
        drop-shadow(
            0 0 15px
            rgba(255,70,85,0.4)
        );
}


/* DARK OVERLAY */

.agent-overlay {

    position: fixed;

    inset: 0;

    z-index: 2;

    pointer-events: none;

    background:
        linear-gradient(
            90deg,
            rgba(8,9,13,0.12),
            rgba(8,9,13,0.70) 25%,
            rgba(8,9,13,0.70) 75%,
            rgba(8,9,13,0.12)
        );
}


/* ========================================
   TOPBAR
======================================== */

.topbar {

    height: 88px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding:
        0 45px;

    background:
        rgba(8,9,13,0.90);

    border-bottom:
        1px solid rgba(255,255,255,0.08);

    backdrop-filter:
        blur(18px);

    position: relative;

    z-index: 10;
}


.logo {

    display: flex;

    align-items: center;

    gap: 14px;
}


.logo-mark {

    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #ff4655;

    color: white;

    font-weight: 700;

    font-size: 26px;

    clip-path:
        polygon(
            0 0,
            100% 0,
            82% 100%,
            18% 100%
        );

    box-shadow:
        0 0 25px rgba(255,70,85,0.40);
}


.logo-title {

    font-size: 22px;

    font-weight: 700;

    letter-spacing: 4px;
}


.logo-subtitle {

    font-size: 11px;

    letter-spacing: 3px;

    color: #8d929d;
}


.admin-badge {

    font-size: 13px;

    letter-spacing: 2px;

    padding:
        11px 19px;

    border:
        1px solid rgba(255,70,85,0.4);

    background:
        rgba(255,70,85,0.07);

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
        0 0 12px #ff4655;

    animation:
        pulseDot 1.5s infinite;
}


@keyframes pulseDot {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

}


/* ========================================
   MAIN
======================================== */

.main {

    width:
        min(1250px, calc(100% - 40px));

    margin:
        0 auto;

    padding:
        48px 0 90px;

    position: relative;

    z-index: 5;
}


.quiz-header {

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    gap: 30px;

    margin-bottom: 30px;
}


.small-title {

    color: #ff4655;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 5px;
}


.quiz-header h1 {

    margin:
        7px 0 0;

    font-size:
        clamp(28px, 4vw, 48px);

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 1px;
}


.header-line {

    width: 100px;

    height: 3px;

    margin-top: 15px;

    background: #ff4655;

    box-shadow:
        0 0 15px rgba(255,70,85,0.7);
}


.score-box {

    min-width: 155px;

    padding:
        13px 20px;

    text-align: right;

    background:
        rgba(255,255,255,0.035);

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

    display: block;

    margin-top: 2px;

    font-size: 28px;
}


/* ========================================
   CARD
======================================== */

.card {

    position: relative;

    background:
        linear-gradient(
            145deg,
            rgba(24,26,34,0.98),
            rgba(12,13,18,0.98)
        );

    border:
        1px solid rgba(255,255,255,0.09);

    padding: 28px;

    box-shadow:
        0 30px 90px rgba(0,0,0,0.55);

    overflow: hidden;
}


.card::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 150px;
    height: 3px;

    background: #ff4655;

    box-shadow:
        0 0 20px rgba(255,70,85,0.8);
}


.card::after {

    content: "";

    position: absolute;

    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;

    border-right:
        2px solid rgba(255,70,85,0.45);

    border-bottom:
        2px solid rgba(255,70,85,0.45);
}


/* ========================================
   CLIP HEADER
======================================== */

.clip-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 18px;

    padding-bottom: 14px;

    border-bottom:
        1px solid rgba(255,255,255,0.07);
}


.clip-number {

    color: #ff4655;

    font-size: 15px;

    font-weight: 700;

    letter-spacing: 3px;
}


.clip-label {

    color: #777d88;

    font-size: 12px;

    letter-spacing: 2px;
}


/* ========================================
   VIDEO
======================================== */

.video-wrapper {

    position: relative;

    width: 100%;

    background: #050609;

    border:
        1px solid rgba(255,255,255,0.10);

    box-shadow:
        0 25px 60px rgba(0,0,0,0.55);
}


.card video {

    display: block;

    width: 100% !important;

    max-height: 650px !important;

    min-height: 300px;

    object-fit: contain;

    background: #050609;

    border-radius: 0 !important;
}


/* ========================================
   PLAYER
======================================== */

.player-info {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 20px;

    padding:
        14px 18px;

    background:
        rgba(255,255,255,0.035);

    border-left:
        3px solid #ff4655;
}


.player-label {

    color: #777d88;

    font-size: 11px;

    letter-spacing: 3px;
}


.player-name {

    color: white;

    font-size: 20px;

    font-weight: 700;

    letter-spacing: 1px;
}


/* ========================================
   QUESTION
======================================== */

.question-box {

    margin-top: 28px;

    padding:
        22px;

    text-align: center;

    background:
        rgba(255,255,255,0.025);

    border:
        1px solid rgba(255,255,255,0.06);
}


.question-label {

    color: #ff4655;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 4px;

    margin-bottom: 5px;
}


.card h3 {

    margin: 0;

    text-transform: uppercase;

    font-size: 25px;

    letter-spacing: 2px;
}


/* ========================================
   RANKS
======================================== */

.ranks {

    display: grid;

    grid-template-columns:
        repeat(9, 1fr);

    gap: 12px;

    margin-top: 20px;
}


.rank-choice {

    position: relative;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    min-height: 120px;

    padding: 10px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.015)
        );

    border:
        1px solid rgba(255,255,255,0.08);

    cursor: pointer;

    transition:
        transform 0.18s ease,
        border 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease;
}


.rank-choice:hover {

    transform:
        translateY(-7px);

    border:
        1px solid #ff4655;

    background:
        rgba(255,70,85,0.10);

    box-shadow:
        0 12px 30px rgba(255,70,85,0.18);
}


.rank-icon {

    width: 78px;
    height: 78px;

    object-fit: contain;

    transition:
        transform 0.18s ease,
        filter 0.18s ease;
}


.rank-choice:hover .rank-icon {

    transform:
        scale(1.10);

    filter:
        drop-shadow(
            0 0 12px
            rgba(255,70,85,0.55)
        );
}


.rank-name {

    margin-top: 4px;

    color: #8d929d;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;
}


/* ========================================
   RESULT
======================================== */

#result {

    margin-top: 25px;
}


.result-box {

    padding:
        25px;

    text-align: center;

    background:
        rgba(255,255,255,0.035);

    border:
        1px solid rgba(255,255,255,0.08);

    border-left:
        4px solid #ff4655;

    animation:
        resultIn 0.25s ease;
}


.result-title {

    margin:
        0 0 10px;

    font-size: 32px;

    text-transform: uppercase;

    letter-spacing: 4px;
}


.result-box img {

    width: 140px;

    height: 140px;

    object-fit: contain;

    filter:
        drop-shadow(
            0 0 22px
            rgba(255,255,255,0.15)
        );
}


.result-text {

    margin:
        8px 0 0;

    color: #a7abb4;

    font-size: 17px;
}


.result-text strong {

    color: white;
}


@keyframes resultIn {

    from {

        opacity: 0;

        transform:
            translateY(15px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }

}


/* ========================================
   BUTTON
======================================== */

button {

    position: relative;

    border: none;

    padding:
        15px 30px;

    background:
        #ff4655;

    color: white;

    font-family: inherit;

    font-size: 16px;

    font-weight: 700;

    letter-spacing: 2px;

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
        0 10px 30px
        rgba(255,70,85,0.40);
}


button:active {

    transform:
        translateY(0);
}


.next-button-wrapper {

    display: flex;

    justify-content: flex-end;

    margin-top: 22px;
}


/* ========================================
   COMPLETE
======================================== */

.complete-card {

    text-align: center;

    padding:
        60px 30px;
}


.complete-card .trophy {

    font-size: 65px;

    margin-bottom: 15px;
}


.complete-card h1 {

    margin:
        5px 0;

    font-size: 42px;

    text-transform: uppercase;

    letter-spacing: 3px;
}


.complete-score {

    margin:
        20px 0 30px;

    font-size: 26px;

    color: #a7abb4;
}


.complete-score strong {

    color: #ff4655;

    font-size: 35px;
}


.error-card {

    text-align: center;

    padding:
        45px 25px;
}


.error-card h2 {

    color: #ff4655;

    font-size: 30px;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 1000px) {

    .ranks {

        grid-template-columns:
            repeat(5, 1fr);
    }


    .waylay-bg {

        left: -190px;

        opacity: 0.25;

        width: 480px;
    }


    .raze-bg {

        right: -190px;

        opacity: 0.25;

        width: 490px;
    }

}


@media (max-width: 700px) {

    .topbar {

        padding:
            0 20px;
    }


    .main {

        width:
            calc(100% - 20px);

        padding-top:
            30px;
    }


    .quiz-header {

        align-items:
            flex-start;

        flex-direction:
            column;
    }


    .score-box {

        text-align:
            left;
    }


    .card {

        padding:
            18px;
    }


    .card video {

        min-height:
            220px;
    }


    .ranks {

        grid-template-columns:
            repeat(3, 1fr);
    }


    .waylay-bg,
    .raze-bg {

        opacity: 0.12;
    }


    .agent-icon-bg {

        display: none;
    }

}


@media (max-width: 450px) {

    .logo-subtitle {

        display:
            none;
    }


    .admin-badge {

        font-size:
            9px;

        padding:
            8px;
    }


    .logo-title {

        font-size:
            18px;
    }


    .ranks {

        grid-template-columns:
            repeat(3, 1fr);
    }


    .rank-choice {

        min-height:
            100px;
    }


    .rank-icon {

        width:
            62px;

        height:
            62px;
    }

}

`;

document.head.appendChild(style);


// ========================================
// LOGIN
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

    }

    else {

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

        total =
            allClips.length;


        updateScore();

        showClip();

    }

    catch (error) {

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


    if (currentClip >= allClips.length) {

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

                </div>

                <button
                    onclick="restartQuiz()"
                >
                    🔄 NOCHMAL SPIELEN
                </button>

            </div>

        `;

        return;
    }


    const item =
        allClips[currentClip];


    clips.innerHTML = `

        <div class="card">


            <div class="clip-header">

                <span class="clip-number">

                    CLIP ${currentClip + 1}
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
                    src="${item.clip_url}">
                </video>

            </div>


            <div class="player-info">

                <div>

                    <div class="player-label">
                        SPIELER
                    </div>

                    <div class="player-name">
                        ${item.riot_name}
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


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Iron')"
                >

                    <img
                        class="rank-icon"
                        src="/Iron_1_Rank.webp"
                        alt="Iron"
                    >

                    <div class="rank-name">
                        Iron
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Bronze')"
                >

                    <img
                        class="rank-icon"
                        src="/Bronze_1_Rank.webp"
                        alt="Bronze"
                    >

                    <div class="rank-name">
                        Bronze
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Silver')"
                >

                    <img
                        class="rank-icon"
                        src="/Silver_1_Rank.webp"
                        alt="Silver"
                    >

                    <div class="rank-name">
                        Silver
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Gold')"
                >

                    <img
                        class="rank-icon"
                        src="/Gold_1_Rank.webp"
                        alt="Gold"
                    >

                    <div class="rank-name">
                        Gold
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Platinum')"
                >

                    <img
                        class="rank-icon"
                        src="/Platinum_1_Rank.webp"
                        alt="Platinum"
                    >

                    <div class="rank-name">
                        Platinum
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Diamond')"
                >

                    <img
                        class="rank-icon"
                        src="/Diamond_1_Rank.webp"
                        alt="Diamond"
                    >

                    <div class="rank-name">
                        Diamond
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Ascendant')"
                >

                    <img
                        class="rank-icon"
                        src="/Ascendant_1_Rank.webp"
                        alt="Ascendant"
                    >

                    <div class="rank-name">
                        Ascendant
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Immortal')"
                >

                    <img
                        class="rank-icon"
                        src="/Immortal_1_Rank.webp"
                        alt="Immortal"
                    >

                    <div class="rank-name">
                        Immortal
                    </div>

                </div>


                <div
                    class="rank-choice"
                    onclick="guess('${item.rank}', 'Radiant')"
                >

                    <img
                        class="rank-icon"
                        src="/Radiant_Rank.webp"
                        alt="Radiant"
                    >

                    <div class="rank-name">
                        Radiant
                    </div>

                </div>


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
// RANG RATEN
// ========================================

function guess(realRank, selectedRank) {

    realRank =
        realRank
            .replace(
                "Diamant",
                "Diamond"
            )
            .replace(
                "Platin",
                "Platinum"
            );


    const result =
        document.getElementById(
            "result"
        );


    if (!result) {
        return;
    }


    const img =
        rankImages[realRank];


    if (realRank === selectedRank) {

        score++;


        result.innerHTML = `

            <div class="result-box">

                <h2 class="result-title">
                    ✅ RICHTIG!
                </h2>

                <img
                    src="${img}"
                    alt="${realRank}"
                >

                <p class="result-text">

                    Der echte Rang ist:

                    <strong>
                        ${realRank}
                    </strong>

                </p>

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
                        ${selectedRank}
                    </strong>

                </p>

                <img
                    src="${img}"
                    alt="${realRank}"
                >

                <p class="result-text">

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
        document.getElementById(
            "nextButton"
        );


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }


    const rankIcons =
        document.querySelectorAll(
            ".rank-choice"
        );


    rankIcons.forEach(choice => {

        choice.style.pointerEvents =
            "none";

        choice.style.opacity =
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
