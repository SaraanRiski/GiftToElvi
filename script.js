/* ============================================
   GIFT WEBSITE FOR ELVI
   Author : Muhammad Riski
============================================ */

const PASSWORD = "21-07-2026";

const $ = (id) => document.getElementById(id);

/* ============================================
   SURAT
============================================ */

const letter = `Dear Elvi,

Kalau kamu sedang membaca surat ini...

Selamat!

Berarti password yang kamu masukkan benar.

Aku bangga.

Karena setidaknya hari ini ada satu password
yang berhasil diingat. 😆

Aku sempat bingung...

Mau bikin website...

atau bikin PowerPoint.

Untung pilih website.

Kalau PowerPoint nanti kamu malah nunggu
tombol "Next Slide".

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

- Muhammad Riski`;

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
