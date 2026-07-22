/* ============================================
   GIFT WEBSITE FOR ELVI
   Author : Muhammad Riski
============================================ */

const PASSWORD = "21072001";

const $ = (id) => document.getElementById(id);

/* ============================================
   SURAT
============================================ */

const letter = `Dear Elvi,

Kalau kamu sedang membaca surat ini...

Selamat!

Berarti password yang kamu masukkan benar.

Aku bangga.


😂

Website ini memang sederhana.

Tidak mahal.

Tidak mewah.

Tapi lumayan banyak begadang.

Jadi anggap saja...

setiap baris kode di website ini adalah
versi digital dari ucapan...

"Semoga harimu selalu menyenangkan."

Kalau nanti kamu tersenyum sedikit saja...

berarti semua coding semalam tidak sia-sia.

Dan kalau ternyata kamu ketawa...

wah...

berarti bug-nya berhasil berubah menjadi fitur.

🤣💙

Semoga semua hal baik selalu datang kepadamu.

Semoga impianmu tercapai.

Semoga selalu sehat.

Dan semoga...

setiap kali hidup terasa berat...

selalu ada alasan untuk kembali tersenyum.

Terima kasih sudah meluangkan waktu
membuka hadiah kecil ini.

💙

- Hope get little kiss `;

/* ============================================
   SAAT WEBSITE DIBUKA
============================================ */

window.addEventListener("DOMContentLoaded", () => {

    openingScreen();

    loginSystem();

    musicPlayer();

    surpriseButton();

    scrollTopButton();

    imageModal();

    startCountdown();

});

/* ============================================
   OPENING SCREEN
============================================ */

function openingScreen(){

    const opening = $("opening");

    if(!opening) return;

    opening.addEventListener("click",()=>{

        opening.style.opacity="0";

        setTimeout(()=>{

            opening.style.display="none";

        },800);

    },{once:true});

}

/* ============================================
   LOGIN
============================================ */

function loginSystem(){

    const btn=$("loginBtn");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        const pass=$("password").value.trim();

        if(pass!==PASSWORD){

            $("warning").innerHTML="Password masih salah 😆";

            $("warning").style.color="#ffb4b4";

            return;

        }

        $("loginPage").style.display="none";

        $("mainPage").style.display="block";

        typingLetter();

    });
  /* ============================================
   MUSIC PLAYER
============================================ */

function musicPlayer(){

    const music = $("music");
    const button = $("musicBtn");

    if(!music || !button) return;

    button.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            button.innerHTML="⏸ Pause Musik";

        }else{

            music.pause();

            button.innerHTML="🎵 Putar Musik";

        }

    });

}

/* ============================================
   TYPING LETTER
============================================ */

function typingLetter(){

    const output = $("typingText");

    if(!output) return;

    output.innerHTML="";

    let i = 0;

    function type(){

        if(i < letter.length){

            output.innerHTML += letter.charAt(i);

            output.scrollTop = output.scrollHeight;

            i++;

            setTimeout(type,28);

        }

    }

    type();

}

/* ============================================
   COUNTDOWN
============================================ */

function startCountdown(){

    const target = new Date("2027-07-21T00:00:00");

    function update(){

        const now = new Date();

        let diff = target - now;

        if(diff < 0){

            diff = 0;

        }

        const days = Math.floor(diff / (1000*60*60*24));

        const hours = Math.floor(diff / (1000*60*60)) % 24;

        const minutes = Math.floor(diff / (1000*60)) % 60;

        const seconds = Math.floor(diff / 1000) % 60;

        if($("days")) $("days").textContent = days;

        if($("hours")) $("hours").textContent = hours;

        if($("minutes")) $("minutes").textContent = minutes;

        if($("seconds")) $("seconds").textContent = seconds;

    }

    update();

    setInterval(update,1000);

}

/* ============================================
   SURPRISE BUTTON
============================================ */

function surpriseButton(){

    const btn = $("surpriseBtn");

    const box = $("secretMessage");

    if(!btn || !box) return;

    btn.addEventListener("click",()=>{

        box.style.display="block";

        box.style.opacity="0";

        box.style.transform="translateY(40px)";

        setTimeout(()=>{

            box.style.transition=".8s";

            box.style.opacity="1";

            box.style.transform="translateY(0px)";

        },50);

    });

}

}
/* ============================================
   GALLERY SLIDER
============================================ */

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    if(slides.length===0) return;

    if(index >= slides.length){

        currentSlide = 0;

    }

    else if(index < 0){

        currentSlide = slides.length-1;

    }

    else{

        currentSlide = index;

    }

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

    if(dots[currentSlide]){

        dots[currentSlide].classList.add("active");

    }

}

const nextBtn = $("next");
const prevBtn = $("prev");

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        showSlide(currentSlide+1);

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        showSlide(currentSlide-1);

    });

}

/* ============================================
   AUTO SLIDER
============================================ */

setInterval(()=>{

    if(slides.length>0){

        showSlide(currentSlide+1);

    }

},5000);

/* ============================================
   MODAL FOTO
============================================ */

function imageModal(){

    const modal = $("imageModal");

    const modalImage = $("modalImage");

    const close = $("closeModal");

    if(!modal) return;

    slides.forEach((img)=>{

        img.addEventListener("click",()=>{

            modal.style.display="flex";

            modalImage.src=img.src;

        });

    });

    close.addEventListener("click",()=>{

        modal.style.display="none";

    });

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            modal.style.display="none";

        }

    });

}

/* ============================================
   SCROLL TOP
============================================ */

function scrollTopButton(){

    const button = $("topButton");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>350){

            button.style.display="block";

        }

        else{

            button.style.display="none";

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ============================================
   SCROLL REVEAL
============================================ */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".gallery,.letter,.countdown,.surprise").forEach(el=>{

    observer.observe(el);

});
/* ============================================
   PART 4 - FINAL EFFECTS
============================================ */

/* ========= CONFETTI ========= */

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay = Math.random() * 2 + "s";

        confetti.style.animationDuration = (3 + Math.random() * 3) + "s";

        confetti.style.background =
            ["#60A5FA", "#93C5FD", "#DBEAFE", "#FFFFFF"][
                Math.floor(Math.random() * 4)
            ];

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}

/* ========= FLOWER ========= */

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (8 + Math.random() * 6) + "s";

    flower.style.opacity = Math.random();

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 15000);

}

setInterval(createFlower, 600);

/* ========= LOGIN SUCCESS ========= */

const loginButton = $("loginBtn");

if (loginButton) {

    loginButton.addEventListener("click", () => {

        if ($("password").value.trim() === PASSWORD) {

            launchConfetti();

        }

    });

}

/* ========= BUTTON HOVER ========= */

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

        btn.style.transition = ".3s";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/* ========= FLOATING EFFECT ========= */

document.querySelectorAll(".login-card,.letter-box,.gallery,.countdown,.surprise").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

        card.style.transition = ".35s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ========= OPENING TITLE ========= */

const title = $("openingName");

if (title) {

    let visible = true;

    setInterval(() => {

        title.style.opacity = visible ? "0.5" : "1";

        visible = !visible;

    }, 800);

}

/* ========= FOOTER YEAR ========= */

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML +=
        "<br><br>© " +
        new Date().getFullYear() +
        " • Made with 💙";

}

/* ========= WELCOME ========= */

setTimeout(() => {

    console.log("Welcome Elvi 💙");

}, 1000);

/* ========= END ========= */

console.log("Gift Website Loaded Successfully 💙");
