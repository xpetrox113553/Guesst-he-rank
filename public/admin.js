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
    font-family: 'Rajdhani', Arial, sans-serif;
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
    width: min(440px, calc(100% - 35px));

    padding: 45px 42px;

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

    margin: 0 auto 14px;

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
    margin: 5px 0 0;

    font-size: 36px;

    letter-spacing: 3px;

    text-transform: uppercase;
}

.login-line {
    width: 70px;
    height: 3px;

    margin: 14px auto;

    background: #ff4655;

    box-shadow:
        0 0 12px rgba(255,70,85,0.7);
}

.login-subtitle {
    margin: 0 0 35px;

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

    padding: 0 16px;

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
    transform: translateY(-2px);

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
}

.waylay-bg {
    left: -125px;

    bottom: -90px;

    width: 560px;

    max-height: 82vh;
}

.raze-bg {
    right: -135px;

    bottom: -80px;

    width: 570px;

    max-height: 82vh;
}

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

    padding: 0 45px;

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

    padding: 11px 19px;

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

    padding: 22px;

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
   RANK GROUPS
======================================== */

.rank-groups {

    display: grid;

    grid-template-columns:
        repeat(9, 1fr);

    gap: 10px;

    margin-top: 22px;
}


.rank-group {

    position: relative;

    min-height: 120px;

    padding: 8px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

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


.rank-group:hover {

    transform:
        translateY(-6px);

    border-color:
        #ff4655;

    background:
        rgba(255,70,85,0.10);

    box-shadow:
        0 12px 30px
        rgba(255,70,85,0.18);
}


.rank-group.active {

    border-color:
        #ff4655;

    background:
        rgba(255,70,85,0.10);

    box-shadow:
        0 0 25px
        rgba(255,70,85,0.15);
}


.rank-main-icon {

    width: 70px;
    height: 70px;

    object-fit: contain;

    transition:
        transform 0.18s ease;
}


.rank-group:hover
.rank-main-icon {

    transform:
        scale(1.08);
}


.rank-group-name {

    margin-top: 4px;

    color: #b8bbc2;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;
}


/* ========================================
   SUB RANKS
======================================== */

.sub-ranks {

    display: none;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 12px;

    margin-top: 18px;

    padding: 18px;

    background:
        rgba(0,0,0,0.30);

    border:
        1px solid rgba(255,255,255,0.07);

    border-top:
        2px solid #ff4655;

    animation:
        subRankIn 0.2s ease;
}


.sub-ranks.open {

    display: grid;
}


@keyframes subRankIn {

    from {

        opacity: 0;

        transform:
            translateY(-8px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}


.sub-rank {

    min-height: 150px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    padding: 12px;

    background:
        rgba(255,255,255,0.035);

    border:
        1px solid rgba(255,255,255,0.08);

    cursor: pointer;

    transition:
        transform 0.18s ease,
        border 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease;
}


.sub-rank:hover {

    transform:
        translateY(-5px);

    border-color:
        #ff4655;

    background:
        rgba(255,70,85,0.10);

    box-shadow:
        0 10px 25px
        rgba(255,70,85,0.18);
}


.sub-rank img {

    width: 90px;
    height: 90px;

    object-fit: contain;

    transition:
        transform 0.18s ease;
}


.sub-rank:hover img {

    transform:
        scale(1.08);

    filter:
        drop-shadow(
            0 0 14px
            rgba(255,70,85,0.45)
        );
}


.sub-rank-name {

    margin-top: 6px;

    color: white;

    font-size: 14px;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;
}


/* ========================================
   RADIANT
======================================== */

.radiant-choice {

    min-height: 150px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    margin-top: 18px;

    padding: 15px;

    background:
        rgba(255,255,255,0.035);

    border:
        1px solid rgba(255,255,255,0.08);

    cursor: pointer;

    transition:
        transform 0.18s ease,
        border 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease;
}


.radiant-choice:hover {

    transform:
        translateY(-5px);

    border-color:
        #ff4655;

    background:
        rgba(255,70,85,0.10);

    box-shadow:
        0 10px 30px
        rgba(255,70,85,0.20);
}


.radiant-choice img {

    width: 100px;
    height: 100px;

    object-fit: contain;
}


.radiant-choice span {

    margin-top: 5px;

    font-size: 14px;

    font-weight: 700;

    letter-spacing: 2px;
}


/* ========================================
   RESULT
======================================== */

#result {
    margin-top: 25px;
}


.result-box {

    padding: 25px;

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

    width: 150px;
    height: 150px;

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
   NEXT BUTTON
======================================== */

.next-button-wrapper {

    display: flex;

    justify-content: flex-end;

    margin-top: 22px;
}


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

@media (max-width: 1050px) {

    .rank-groups {

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

    .rank-groups {

        grid-template-columns:
            repeat(3, 1fr);
    }

    .waylay-bg,
    .raze-bg {

        opacity:
            0.12;
    }

    .agent-icon-bg {

        display:
            none;
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

    .rank-groups {

        grid-template-columns:
            repeat(3, 1fr);
    }

    .rank-main-icon {

        width:
            58px;

        height:
            58px;
    }

    .sub-ranks {

        grid-template-columns:
            repeat(3, 1fr);

        padding:
            10px;

        gap:
            7px;
    }

    .sub-rank {

        min-height:
            120px;

        padding:
            5px;
    }

    .sub-rank img {

        width:
            65px;

        height:
            65px;
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

let answered = false;


// ========================================
// RANG-DATEN
// ========================================

const rankData = {

    Iron: {
        icon: "/Iron_1_Rank.webp",
        levels: [
            {
                name: "Iron 1",
                value: "Iron 1",
                icon: "/Iron_1_Rank.webp"
            },
            {
                name: "Iron 2",
                value: "Iron 2",
                icon: "/Iron_2_Rank.webp"
            },
            {
                name: "Iron 3",
                value: "Iron 3",
                icon: "/Iron_3_Rank.webp"
            }
        ]
    },


    Bronze: {
        icon: "/Bronze_1_Rank.webp",
        levels: [
            {
                name: "Bronze 1",
                value: "Bronze 1",
                icon: "/Bronze_1_Rank.webp"
            },
            {
                name: "Bronze 2",
                value: "Bronze 2",
                icon: "/Bronze_2_Rank.webp"
            },
            {
                name: "Bronze 3",
                value: "Bronze 3",
                icon: "/Bronze_3_Rank.webp"
            }
        ]
    },


    Silver: {
        icon: "/Silver_1_Rank.webp",
        levels: [
            {
                name: "Silver 1",
                value: "Silver 1",
                icon: "/Silver_1_Rank.webp"
            },
            {
                name: "Silver 2",
                value: "Silver 2",
                icon: "/Silver_2_Rank.webp"
            },
            {
                name: "Silver 3",
                value: "Silver 3",
                icon: "/Silver_3_Rank.webp"
            }
        ]
    },


    Gold: {
        icon: "/Gold_1_Rank.webp",
        levels: [
            {
                name: "Gold 1",
                value: "Gold 1",
                icon: "/Gold_1_Rank.webp"
            },
            {
                name: "Gold 2",
                value: "Gold 2",
                icon: "/Gold_2_Rank.webp"
            },
            {
                name: "Gold 3",
                value: "Gold 3",
                icon: "/Gold_3_Rank.webp"
            }
        ]
    },


    Platinum: {
        icon: "/Platinum_1_Rank.webp",
        levels: [
            {
                name: "Platinum 1",
                value: "Platinum 1",
                icon: "/Platinum_1_Rank.webp"
            },
            {
                name: "Platinum 2",
                value: "Platinum 2",
                icon: "/Platinum_2_Rank.webp"
            },
            {
                name: "Platinum 3",
                value: "Platinum 3",
                icon: "/Platinum_3_Rank.webp"
            }
        ]
    },


    Diamond: {
        icon: "/Diamond_1_Rank.webp",
        levels: [
            {
                name: "Diamond 1",
                value: "Diamond 1",
                icon: "/Diamond_1_Rank.webp"
            },
            {
                name: "Diamond 2",
                value: "Diamond 2",
                icon: "/Diamond_2_Rank.webp"
            },
            {
                name: "Diamond 3",
                value: "Diamond 3",
                icon: "/Diamond_3_Rank.webp"
            }
        ]
    },


    Ascendant: {
        icon: "/Ascendant_1_Rank.webp",
        levels: [
            {
                name: "Ascendant 1",
                value: "Ascendant 1",
                icon: "/Ascendant_1_Rank.webp"
            },
            {
                name: "Ascendant 2",
                value: "Ascendant 2",
                icon: "/Ascendant_2_Rank.webp"
            },
            {
                name: "Ascendant 3",
                value: "Ascendant 3",
                icon: "/Ascendant_3_Rank.webp"
            }
        ]
    },


    Immortal: {
        icon: "/Immortal_1_Rank.webp",
        levels: [
            {
                name: "Immortal 1",
                value: "Immortal 1",
                icon: "/Immortal_1_Rank.webp"
            },
            {
                name: "Immortal 2",
                value: "Immortal 2",
                icon: "/Immortal_2_Rank.webp"
            },
            {
                name: "Immortal 3",
                value: "Immortal 3",
                icon: "/Immortal_3_Rank.webp"
            }
        ]
    },


    Radiant: {
        icon: "/Radiant_Rank.webp",
        levels: [
            {
                name: "Radiant",
                value: "Radiant",
                icon: "/Radiant_Rank.webp"
            }
        ]
    }

};


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

                    <p>
                        ${error.message}
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


            <div class="rank-groups">

                ${createRankGroups()}

            </div>


            <div id="subRankContainer"></div>


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
// HAUPT-RÄNGE ERSTELLEN
// ========================================

function createRankGroups() {

    let html = "";

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


    ranks.forEach(rank => {

        const data =
            rankData[rank];


        html += `

            <div
                class="rank-group"
                onclick="openRank('${rank}')"
            >

                <img
                    class="rank-main-icon"
                    src="${data.icon}"
                    alt="${rank}"
                >

                <div class="rank-group-name">
                    ${rank}
                </div>

            </div>

        `;

    });


    return html;

}


// ========================================
// RANG ÖFFNEN
// ========================================

function openRank(rank) {

    if (answered) {
        return;
    }


    const container =
        document.getElementById(
            "subRankContainer"
        );


    if (!container) {
        return;
    }


    const data =
        rankData[rank];


    document
        .querySelectorAll(".rank-group")
        .forEach(group => {

            group.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".rank-group")
        .forEach(group => {

            const name =
                group.querySelector(
                    ".rank-group-name"
                );

            if (
                name &&
                name.textContent
                    .trim()
                    .toLowerCase() ===
                    rank.toLowerCase()
            ) {

                group.classList.add(
                    "active"
                );

            }

        });


    if (rank === "Radiant") {

        container.innerHTML = `

            <div
                class="radiant-choice"
                onclick="selectRank('Radiant')"
            >

                <img
                    src="/Radiant_Rank.webp"
                    alt="Radiant"
                >

                <span>
                    RADIANT
                </span>

            </div>

        `;

        return;
    }


    let html = `

        <div class="sub-ranks open">

    `;


    data.levels.forEach(level => {

        html += `

            <div
                class="sub-rank"
                onclick="selectRank('${level.value}')"
            >

                <img
                    src="${level.icon}"
                    alt="${level.name}"
                >

                <div class="sub-rank-name">
                    ${level.name}
                </div>

            </div>

        `;

    });


    html += `

        </div>

    `;


    container.innerHTML =
        html;

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


    guess(
        item.rank,
        selectedRank
    );

}


// ========================================
// RANG RATEN
// ========================================

function guess(realRank, selectedRank) {

    if (answered) {
        return;
    }


    answered = true;


    realRank =
        normalizeRank(realRank);


    selectedRank =
        normalizeRank(selectedRank);


    const result =
        document.getElementById(
            "result"
        );


    if (!result) {
        return;
    }


    const img =
        getRankImage(realRank);


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


    document
        .querySelectorAll(".rank-group")
        .forEach(group => {

            group.style.pointerEvents =
                "none";

            group.style.opacity =
                "0.45";

        });


    document
        .querySelectorAll(".sub-rank")
        .forEach(rank => {

            rank.style.pointerEvents =
                "none";

            rank.style.opacity =
                "0.45";

        });


    const radiant =
        document.querySelector(
            ".radiant-choice"
        );


    if (radiant) {

        radiant.style.pointerEvents =
            "none";

        radiant.style.opacity =
            "0.45";

    }

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
                "Diamant",
                "Diamond"
            )
            .replace(
                "Platin",
                "Platinum"
            );


    return value;

}


// ========================================
// RANG-BILD
// ========================================

function getRankImage(rank) {

    const normalized =
        normalizeRank(rank);


    const images = {

        "Iron 1":
            "/Iron_1_Rank.webp",

        "Iron 2":
            "/Iron_2_Rank.webp",

        "Iron 3":
            "/Iron_3_Rank.webp",


        "Bronze 1":
            "/Bronze_1_Rank.webp",

        "Bronze 2":
            "/Bronze_2_Rank.webp",

        "Bronze 3":
            "/Bronze_3_Rank.webp",


        "Silver 1":
            "/Silver_1_Rank.webp",

        "Silver 2":
            "/Silver_2_Rank.webp",

        "Silver 3":
            "/Silver_3_Rank.webp",


        "Gold 1":
            "/Gold_1_Rank.webp",

        "Gold 2":
            "/Gold_2_Rank.webp",

        "Gold 3":
            "/Gold_3_Rank.webp",


        "Platinum 1":
            "/Platinum_1_Rank.webp",

        "Platinum 2":
            "/Platinum_2_Rank.webp",

        "Platinum 3":
            "/Platinum_3_Rank.webp",


        "Diamond 1":
            "/Diamond_1_Rank.webp",

        "Diamond 2":
            "/Diamond_2_Rank.webp",

        "Diamond 3":
            "/Diamond_3_Rank.webp",


        "Ascendant 1":
            "/Ascendant_1_Rank.webp",

        "Ascendant 2":
            "/Ascendant_2_Rank.webp",

        "Ascendant 3":
            "/Ascendant_3_Rank.webp",


        "Immortal 1":
            "/Immortal_1_Rank.webp",

        "Immortal 2":
            "/Immortal_2_Rank.webp",

        "Immortal 3":
            "/Immortal_3_Rank.webp",


        "Radiant":
            "/Radiant_Rank.webp",


        /* Falls alte Clips noch
           keinen Level haben */

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
            "/Immortal_1_Rank.webp"

    };


    return (
        images[normalized] ||
        "/Radiant_Rank.webp"
    );

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

    answered = false;

    updateScore();

    showClip();

}
