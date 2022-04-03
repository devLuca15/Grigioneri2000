const mediaQuery = window.matchMedia("(min-width: 768px)");

const nav = document.getElementById("nav");
const navContainer = document.getElementById("navContainer");
const logo = document.getElementById("grigioneriLogo");

const body = document.getElementById("body");
const closeCookieBtn = document.getElementById("cookieContainer");

const resMenuVoices = document.getElementById("resMenuVoices");
const resMenuVoicesCon = document.getElementById("resMenuVoicesCon");
const icon = document.getElementById("hamburgerIcon");

var clickControll = 0;
var countUpControll = 0;
var readCotroll = 0;
var hamburgerIconPos = true;
var carouselSlide = 0;
var menuStatus = false;

sessionStorage.setItem("cookieStatus", "true");

/* ---------- OnLoad ---------- */

window.onload = function () {
  const presentationSct = document.getElementById("presentationContainerID");
  presentationSct.classList.add("presentationContainerAnimation");

  checkCookieStatus();
};

/* ---------- OnScroll ---------- */

window.onscroll = function () {
  if (mediaQuery.matches) {
    /* Laptop - Laptop L */
    if (window.scrollY !== 0) {
      nav.style.transition = "0.5s";
      nav.style.borderBottom = "2px solid red";
      nav.style.backgroundColor = "var(--customBlack)";
    } else {
      nav.style.transition = "0.5s";
      nav.style.borderBottom = "none";
      nav.style.background = "transparent";
    }
  } else {
    /* Tablet - Phone */
    clickControll = 0;

    if (window.scrollY !== 0) {
      nav.style.transition = "0.5s";
      nav.style.borderBottom = "2px solid var(--red)";
      nav.style.backgroundColor = "var(--customBlack)";
    } else {
      nav.style.transition = "0.5s";
      nav.style.borderBottom = "none";
      nav.style.background = "transparent";
    }
  }

  /* ---------- CountUp ---------- */

  if (window.scrollY > 300 && countUpControll == 0) {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: ".",
    };

    var years = new CountUp("yearsCounter", 0, 22, 0, 5, options);
    years.start();

    var members = new CountUp("membersCounter", 0, 56, 0, 5, options);
    members.start();

    var x = new CountUp("founders", 0, 10, 0, 8, options);
    x.start();

    countUpControll = countUpControll + 1;
  }
};

/* ---------- ResponsiveHistory ---------- */

function plusSlides(value) {
  carouselSlide = carouselSlide + value;

  if (carouselSlide >= 2) {
    carouselSlide = 2;
  } else if (carouselSlide <= 0) {
    carouselSlide = 0;
  }

  const carouselHead = document.getElementById("carouselHead");
  const carouselPage = document.getElementById("carouselPage");
  const carouselText = document.getElementById("carouselText");
  const carouselImg = document.getElementById("carouselImg");
  const leftStoryRow = document.getElementById("leftStoryRow");
  const rightStoryRow = document.getElementById("rightStoryRow");

  const history = {
    head: "Il passato",
    page: "1/3",
    text:
      'Ben <span class="bolder">22 anni </span> fa <span class="italic">Enzo</span> e ' +
      '<span class="italic">Claudio Genio</span>, <span class="italic">Polo Libero</span>, <span class="italic">Nerino Fiorito</span>, ' +
      '<span class="italic">Fiori Venuti</span>, <span class="italic">Giordano Tarnold</span>, ' +
      '<span class="italic">Stefano Sudaro</span>, <span class="italic">Emilio Sich</span>, ' +
      '<span class="italic">Daniele Ghiraldo</span> e <span class="italic">Angelo Crucil</span> ' +
      "uniti dalla passione per le due ruote decisero di fondare i " +
      '<span class="bolder">Grigioneri 2000 la Torate</span>. ' +
      'Purtroppo oggi <span class="italic">Giordano Tarnold</span>, uno dei primi padri fondatori ' +
      "non è più tra noi ed è proprio a lui che i soci del team hanno deciso di dedicare la gara " +
      "sociale di mtb che ogni anno si tiene presso gli splendidi " +
      'paesaggi di <span class="bolder">Savorgnano del Torre</span>.',
    src: "./images/storia.jpg",
  };

  const merits = {
    head: "I valori",
    page: "2/3",
    text:
      '<span class="bolder">Passione</span>, <span class="bolder">amicizia</span> e ' +
      '<span class="bolder">rispetto</span> sono i valori sostenuti dalla società che con il passare degli anni ' +
      'ha vissuto grandi cambiamenti contando oggi ben <span class="bolder">56 soci</span> di tutte le età e ' +
      "coinvolgendo inoltre anche diversi amici simpatizzanti. " +
      "Al di là della passione per le due ruote è la profonda amicizia che lega i membri del gruppo e danno " +
      'vita ad un <span class="bolder">ambiente accogliente</span> e <span class="bolder">piacevole</span> ' +
      "non solo nei momenti in sella alla propria bicicletta, ma soprattutto nella quotidianità.",
    src: "./images/valori.jpg",
  };

  const competition = {
    head: "Le uscite e gare",
    page: "3/3",
    text:
      "Ogni sabato e domenica un nutrito gruppo si riunisce " +
      'per svolgere attività su strada o in mtb cercando di affrontare nuovi <span class="bolder">sentieri</span>, ' +
      '<span class="bolder">dislivelli</span> e macinando un buon numero di <span class="bolder">chilometri</span>. ' +
      'Diversi sono i soci che partecipano alle <span class="bolder">gare</span> che vengono organizzate ' +
      "sia in zona ma anche fuori regione con ottimi risultati.",
    src: "./images/uscite.jpg",
  };

  switch (carouselSlide) {
    case 0:
      carouselHead.innerHTML = history.head;
      carouselPage.innerHTML = history.page;
      carouselText.innerHTML = history.text;
      carouselImg.src = history.src;
      leftStoryRow.style.visibility = "hidden";
      break;
    case 1:
      carouselHead.innerHTML = merits.head;
      carouselPage.innerHTML = merits.page;
      carouselText.innerHTML = merits.text;
      carouselImg.src = merits.src;
      leftStoryRow.style.color = "ini";
      leftStoryRow.style.visibility = "inherit";
      rightStoryRow.style.visibility = "inherit";
      break;
    case 2:
      carouselHead.innerHTML = competition.head;
      carouselPage.innerHTML = competition.page;
      carouselText.innerHTML = competition.text;
      carouselImg.src = competition.src;
      rightStoryRow.style.visibility = "hidden";
      break;
    default:
      break;
  }
}

/* ---------- Cookie Section ---------- */

function cookieStatus() {
  if (document.cookie.cookieStatus == "false") {
    console.log("false cookie");
  } else if (document.cookie.cookieStatus == "true") {
    console.log("true cookie");
  }
}

function checkCookieStatus() {
  if (localStorage.getItem("cookieStatus") == "false") {
    closeCookieBtn.style.display = "none";
    body.style.position = "relative";
    //pageReload();
  } else {
    body.style.position = "fixed";
    //pageReload();
  }
}

function pageReload() {
  window.pageReload();
}

function closeCookieSection() {
  closeCookieBtn.style.display = "none";
  body.style.position = "relative";
  localStorage.setItem("cookieStatus", "false");
}

/* ---------- Hamburger menù ---------- */

function resHamburgerMenu() {
  if (!menuStatus) {
    icon.setAttribute("name", "close-sharp");
    window.history.pushState("", "", "/#menu");

    //apre il menu
    resMenuVoices.style.transition = "1s";
    resMenuVoices.style.width = "100%";
    resMenuVoices.style.position = "fixed";
    resMenuVoices.style.visibility = "visible";

    body.style.height = "100%";
    body.style.overflow = "hidden";

    setTimeout(() => {
      nav.style.borderBottom = "2px solid var(--red)";

      resMenuVoicesCon.style.transition = "1s";
      resMenuVoicesCon.style.visibility = "visible";
      resMenuVoicesCon.style.marginLeft = "0%";
    }, 500);

    menuStatus = true;
  } else {
    icon.setAttribute("name", "menu-sharp");
    window.history.pushState("", "", "/");

    //chiude il menu
    resMenuVoicesCon.style.transition = "0s";
    resMenuVoicesCon.style.visibility = "hidden";
    resMenuVoicesCon.style.marginLeft = "-100%";

    resMenuVoices.style.transition = "1s";
    resMenuVoices.style.width = "0%";
    resMenuVoices.style.position = "fixed";
    resMenuVoices.style.visibility = "hidden";

    body.style.height = "100%";
    body.style.overflow = "initial";

    if (scrollY === 0) {
      nav.style.borderBottom = "transparent";
    }

    menuStatus = false;
  }
}

function instantHamburgerMenu() {
  setTimeout(() => {
    //chiude il menu
    resMenuVoicesCon.style.transition = "0s";
    resMenuVoicesCon.style.visibility = "hidden";
    resMenuVoicesCon.style.marginLeft = "-100%";

    resMenuVoices.style.transition = "0.5s";
    resMenuVoices.style.width = "0%";
    resMenuVoices.style.position = "fixed";
    resMenuVoices.style.visibility = "hidden";

    body.style.height = "100%";
    body.style.overflow = "initial";

    icon.setAttribute("name", "menu-sharp");
  }, 700);

  menuStatus = false;
}
