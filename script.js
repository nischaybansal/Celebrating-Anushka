const music = document.getElementById("music");
let isMusicPlaying = false;

function toggleMusic() {
    if (!isMusicPlaying) {
        music.play();
        isMusicPlaying = true;
        document.getElementById("audioToggle").innerText = "🔊 Music On";
    } else {
        music.pause();
        isMusicPlaying = false;
        document.getElementById("audioToggle").innerText = "🔇 Music Off";
    }
}

function enterSite() {
    music.play();
    isMusicPlaying = true;
    document.getElementById("audioToggle").innerText = "🔊 Music On";

    document.getElementById("entry-screen").classList.remove("active");
    document.getElementById("password-screen").classList.add("active");
}

const PASSWORD = "chaipecharcha";

let realClicks = 0;
let officeClicks = 0;

let easterCounter = 0;

const photoCaptions = [

"Some memories start without anyone realizing they'll become memories.",

"Productivity levels may have suffered here.",

"Evidence suggests excessive fun was involved.",

"A completely normal photo. (Definitely not.)",

"Still not sure how this happened, but we're glad it did.",

"One of many moments that made ordinary days interesting.",

"A reminder that the best conversations rarely happen in meetings.",

"Signs of something worth celebrating have been found.",

"Scientists are still studying the amount of laughter involved.",

"The investigation continues...",

"This one deserved to make the archive.",

"One more memory added to the collection.",

"A rare sighting of everyone behaving normally.",

"This aged surprisingly well.",

"And somehow this became part of the story too.",

"Celebrating the person behind these milestones."

];

function switchScreen(from,to){

    document
        .getElementById(from)
        .classList
        .remove("active");

    document
        .getElementById(to)
        .classList
        .add("active");
}

function checkPassword(){

    const value =
    document
        .getElementById("passwordInput")
        .value;

    if(value === PASSWORD){

        switchScreen(
            "password-screen",
            "question-screen"
        );

    }else{

        document
        .getElementById("passwordError")
        .innerText =
        "Wrong password 😏";
    }
}

/* REAL FRIENDS */

function realFriends(){

    realClicks++;

    const btn =
    document.getElementById("realBtn");

    const feedback =
    document.getElementById(
        "questionFeedback"
    );

    btn.style.position="absolute";

    btn.style.left=
    Math.random()*70+"%";

    btn.style.top=
    Math.random()*70+"%";

    if(realClicks===1){

    btn.style.transform=
    "scale(0.5)";

    feedback.innerText=
    "Hmm... Too confident.";
}

else if(realClicks===2){

    btn.style.transform=
    "scale(0.25)";

    feedback.innerText=
    "Still sticking with that answer?";
}

else if(realClicks===3){

    btn.style.transform=
    "scale(0.12)";

    feedback.innerText=
    "Really committed to that answer huh?";
}

else{

    feedback.innerText=
    "Fine. Let's see what the records say 😄";

    setTimeout(
        startPreparation,
        1200
    );
}
}

/* OFFICE FRIENDS */

function officeFriends(){

    officeClicks++;

    const officeBtn =
    document.getElementById(
        "officeBtn"
    );

    const realBtn =
    document.getElementById(
        "realBtn"
    );

    const feedback =
    document.getElementById(
        "questionFeedback"
    );

    officeBtn.style.position=
    "absolute";

    officeBtn.style.left=
    Math.random()*75+"%";

    officeBtn.style.top=
    Math.random()*75+"%";

    if(officeClicks===1){

    realBtn.style.transform=
    "scale(3)";

    feedback.innerText=
    "Interesting choice...";
}

else if(officeClicks===2){

    realBtn.style.transform=
    "scale(6)";

    feedback.innerText=
    "Let's rethink that 😏";
}

else if(officeClicks===3){

    realBtn.style.transform=
    "scale(15)";

    feedback.innerText=
    "You seem determined 😂";
}

else{

    feedback.innerText=
    "There we go 😄";

    setTimeout(
        startPreparation,
        1200
    );
}
}

/* PREP */

function startPreparation(){

    switchScreen(
        "question-screen",
        "prep-screen"
    );

    const checks=[

       "Checking familiar comforts ☕",

        "Opening the memory vault 📸",

        "Scanning laughter records 😂",

        "Confirming moments worth remembering ✨",

        "Loading what’s been kept hidden 🔐",

        "Preparing the reveal...",

        "Almost there..."
    ];

    let progress=0;
    let index=0;

    const bar =
    document.getElementById(
        "progress-bar"
    );

    const text =
    document.getElementById(
        "prepText"
    );

    const interval =
    setInterval(()=>{

        progress+=15;

        bar.style.width=
        progress+"%";

        text.innerText=
        checks[index];

        index++;

        if(index>=checks.length){

            clearInterval(interval);

            setTimeout(
                showVerdict,
                1200
            );
        }

    },1200);
}

function showVerdict(){

    switchScreen(
        "prep-screen",
        "verdict-screen"
    );

    setTimeout(
        startMemoryArchive,
        4000
    );
}

/* MUSIC STARTS HERE */

function startMemoryArchive(){

    switchScreen(
        "verdict-screen",
        "archive-screen"
    );


    runPhotoSequence();
}

function runPhotoSequence(){

    const image =
    document.getElementById(
        "archivePhoto"
    );

    const caption =
    document.getElementById(
        "archiveCaption"
    );

    let current=0;

    showPhoto();

    function showPhoto(){

    image.style.opacity = 0;

    setTimeout(() => {

        image.src =
        `photos/photo${current+1}.jpeg`;

        document
        .getElementById(
        "archiveBackground"
        )
        .style.backgroundImage =
        `url('photos/photo${current+1}.jpeg')`;

        image.style.opacity = 1;

        caption.innerText =
        photoCaptions[current];

    }, 1200);

    let duration =
    current < 12 ? 4500 : 6500;

    setTimeout(()=>{

        image.style.opacity = 0;

        caption.innerText = "";

        setTimeout(()=>{

            current++;

            if(current>=16){
                startTransition();
                return;
            }

            showPhoto();

        },1200);

    },duration);
}
}

/* TRANSITION */

function startTransition(){

    switchScreen(
        "archive-screen",
        "transition-screen"
    );

    const messages=[

        "One Moment...",

        "Some milestones are better viewed together...",

        "Here's the full story..."
    ];

    let i=0;

    const text =
    document.getElementById(
        "transitionText"
    );

    text.innerText=
    messages[0];

    const interval =
    setInterval(()=>{

        i++;

        if(i>=messages.length){

            clearInterval(interval);

            setTimeout(
                showMemoryBoard,
                1000
            );

            return;
        }

        text.innerText=
        messages[i];

    },2500);
}

/* POLAROID BOARD */

function showMemoryBoard(){

    switchScreen(
        "transition-screen",
        "memory-board-screen"
    );

    const photos =
    document.querySelectorAll(
        ".polaroid"
    );

    photos.forEach(
        (photo,index)=>{

            setTimeout(()=>{

                photo.classList.add(
                    "show-photo"
                );

            },index*1000);

        }
    );

    rotateMemoryMessages();
}

function rotateMemoryMessages(){

    const messages=[

        "Every photo tells a story.",

        "Some planned.",

        "Some completely accidental.",

        "Some unforgettable.",

        "Some we'll probably keep talking about for years.",

        "And some we'll never stop laughing about."
    ];

    let i=0;

    const target =
    document.getElementById(
        "memoryBoardMessage"
    );

    const interval =
    setInterval(()=>{

        i++;

        if(i>=messages.length){

            clearInterval(interval);
            return;
        }

        target.innerText=
        messages[i];

    },3000);
}

/* GIFT */

function showGiftScene(){

    switchScreen(
        "memory-board-screen",
        "gift-screen"
    );

    document
    .getElementById(
        "giftBox"
    )
    .onclick =
    openGift;
}

function openGift(){

    launchConfetti();

    setTimeout(()=>{

        switchScreen(
            "gift-screen",
            "final-screen"
        );

        startMessage();

    },2000);
}

function launchConfetti(){

    confetti({

        particleCount:250,
        spread:180,
        origin:{y:.6}
    });

    for(let i=0;i<10;i++){

        setTimeout(()=>{

            confetti({

                particleCount:80,
                spread:120,
                origin:{
                    x:Math.random(),
                    y:Math.random()
                }

            });

        },i*300);

    }
}

/* FINAL MESSAGE */

function startMessage(){

const target =
document.getElementById(
"birthdayMessage"
);

target.innerHTML =

`
<h1>✨ A Moment Worth Celebrating ✨</h1>

<p>
A toast to
the milestones,
the laughter,
the conversations,
the support,
and the memories.
</p>

<p>
For making ordinary days a little more meaningful.
</p>

<p>
For giving us stories we’ll keep bringing up years later.
</p>

<p>
(You know exactly which ones we mean 😄)
</p>

<p>
And for simply being "you".
</p>

<p>Here’s to more of:</p>

<ul>
<li>More reasons to laugh</li>
<li>More memories worth keeping</li>
<li>More adventures worth taking</li>
<li>More moments worth celebrating</li>
</ul>

<h2>Always ❤️</h2>

<h3>To everything that has been… and everything still to come 🥂</h3>
`;

document
.getElementById(
"giftButton"
)
.style.display=
"inline-block";
}

    let index=0;

    const interval =
    setInterval(()=>{

        target.innerText +=
        message[index];

        index++;

        if(index>=message.length){

            clearInterval(interval);

            document
            .getElementById(
                "giftButton"
            )
            .style.display=
            "inline-block";
        }

    },35);


/* FLOATING ITEMS */

const floatingIcons=[

"☕",   // shared rituals / comfort
"😂",   // laughter
"✨",   // milestones / magic
"🔐",   // secrets / hidden reveal
"📸",   // memories
"🥂",   // celebration
"❤️",   // warmth / connection
"🌙",   // mystery / intimate vibe
"🫖",   // chai / personal touch
"📖",   // story / journey
"🎇",   // big moment / achievement
"🧩"    // pieces of the story
];

setInterval(()=>{

    const item =
    document.createElement("div");

    item.className=
    "floating-item";

    item.innerHTML=

    floatingIcons[
        Math.floor(
            Math.random()*
            floatingIcons.length
        )
    ];

    item.style.left=
    Math.random()*100+"vw";

    item.style.bottom=
    "-30px";

    item.style.fontSize=
    (20+Math.random()*20)
    +"px";

    document.body.appendChild(
        item
    );

    setTimeout(()=>{

        item.remove();

    },10000);

},1200);

/* EASTER EGG */

document.addEventListener(
"click",
function(){

    const finalScreen =
    document.getElementById(
        "final-screen"
    );

    if(
        finalScreen.classList.contains(
            "active"
        )
    ){

        easterCounter++;

        if(easterCounter>=5){

            alert(

`🏆 Achievement Unlocked

Certified Chai Pe Charkha Member ☕

Lifetime Membership Granted

Benefits Include:

Unlimited Chai Discussions

Unsolicited Advice

Questionable Decisions

Premium Friendship Access`

            );

            easterCounter=0;
        }
    }
});
document
.getElementById(
    "passwordInput"
)
.addEventListener(
    "keypress",
    function(event){

        if(event.key==="Enter"){

            checkPassword();
        }
    }
);

window.addEventListener("load", () => {
    const music = document.getElementById("music");

    music.currentTime = 0; // always starts from beginning
    music.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
    });
});

function showCompilation(){

    switchScreen(
        "memory-board-screen",
        "video-screen"
    );

    const music =
    document.getElementById("music");

    const video =
    document.getElementById("finalCompilation");

    // lower background music
    music.volume = 0.4;

    video.play();

    // request fullscreen
    video.requestFullscreen?.();
    video.webkitEnterFullscreen?.();

    // when video ends
    video.onended = async () => {

        if(document.fullscreenElement){
            await document.exitFullscreen();
        }

        music.volume = 0.7;

        switchScreen(
            "video-screen",
            "gift-screen"
        );

        video.pause();
        video.currentTime = 0;

        document
        .getElementById("giftBox")
        .onclick = openGift;
    };
}