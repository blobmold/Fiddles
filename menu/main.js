class RHMenu {
  constructor() {
    this.nav = document.querySelector(".rh-gn");
    this.menuBtn = document.querySelector(".rh-gn-burger");
    this.sideMenu = document.querySelector(".rh-hamburger-container");
    this.hBSub = document.querySelector('.rh-hamburger .sub-menu');
    this.hBmenuLst = document.querySelectorAll('.rh-hamburger li');
  }

  launch() {
    this.menuToggle();
    this.unfoldHB();
  }

  unfoldHB() {
    for(let el of this.hBmenuLst) {
      el.addEventListener('click', (e) => {
        for(let item of this.hBmenuLst) {
          if(item.children.length === 2) {
            if(item == el) {
              continue;
            }
            item.children[1].classList.remove('active');
          }
        }
        el.children[1].classList.toggle('active');
      })
    }
  }

  menuToggle() {
    this.menuBtn.addEventListener("click", (e) => {
      this.nav.classList.toggle("open");
      this.sideMenu.classList.toggle("open");
    });
  }
}

let rhMenu = new RHMenu();
rhMenu.launch();



//COOKIES
class DefineCookie {
  constructor(cont = "", closeBtn = "") {
    this.cont = document.querySelector(cont);
    this.closeBtn = document.querySelector(closeBtn);
  }

  launch(name, value, options = {}) {
    window.addEventListener("DOMContentLoaded", (e) => {
      if (!this.checkCookie(name)) {
        this.openPopup(this.cont);
      }
      this.closePopup(name, value, options);
    });
  }

  setCookie(name, value, options = {}) {
    options = {
      //Default values listed here
      // path: "/",
      ...options,
    };
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue != true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }

  checkCookie(search) {
    let cookieArr = document.cookie.split("; ");
    let list = new Map();
    for (let cookie of cookieArr) {
      let splittedCookie = cookie.split("=");
      list.set(splittedCookie[0], splittedCookie[1]);
    }

    return list.get(search) ? true : false;
  }

  openPopup(cont) {
    cont.classList.add("visible");
  }

  closePopup(name, value, options = {}) {
    this.closeBtn.addEventListener("click", () => {
      this.cont.classList.remove("visible");
      this.setCookie(name, value, options);
    });
  }
}

let cookieArr = [
  {
    optName: "Black Friday",
    parentElement: ".rh-bf",
    closeBtnContainer: ".rh-bf-closeBtn_container",
    cookieName: "rh_bf-C",
    cookieValue: "bf_set",
    cookieOptions: {
      secure: true,
      expires: new Date(Date.now() + 259200e3).toUTCString(),
    },
  },
  {
    optName: "Privacy Policy",
    parentElement: ".header__bottom_privacy",
    closeBtnContainer: ".privacy_close_btn",
    cookieName: "privacy_cookie",
    cookieValue: "set",
    cookieOptions: {
      secure: true,
      expires: new Date(Date.now() + 2592000e3).toUTCString(),
    },
  },
  {
    optName: "Covid 19",
    parentElement: ".header__bottom_covid",
    closeBtnContainer: ".covid_close_btn",
    cookieName: "covid_cookie",
    cookieValue: "set",
    cookieOptions: {
      secure: true,
      expires: new Date(Date.now() + 2592000e3).toUTCString(),
    },
  },
];

for (let obj of cookieArr) {
  let cMap = new Map(Object.entries(obj));
  let defineCookie = new DefineCookie(cMap.get("parentElement"), cMap.get("closeBtnContainer"));
  defineCookie.launch(cMap.get("cookieName"), cMap.get("cookieValue"), cMap.get("cookieOptions"));
}
// // takes pop-up interface and close button as arguments
// let defineCookie = new DefineCookie(".rh-bf", ".rh-bf-closeBtn_container");
// let bfd = new Date(Date.now() + 259200e3);
// //rhdate records the date when user visits the page,
// //adds a week to it and adds to expiery date parameter of that cookie.
// //Launch takes three arguments - name, value and options for a cookie.
// defineCookie.launch("rh_bf-C", "bf_set", {
//     secure: true,
//     expires: bfd.toUTCString(),
// });

// //Launch Covid-19 Popup
// let covidCookie = new DefineCookie('.header__bottom_covid', '.covid_close_btn')
// let covidCD = new Date(Date.now() + 2592000e3);
// covidCookie.launch("covid_cookie", "set", {
//     secure: true,
//     expires: covidCD.toUTCString(),
// });

// //Launch Privacy Policy Popup
// let privacyCookie = new DefineCookie('.header__bottom_privacy', '.privacy_close_btn')
// let privacyCD = new Date(Date.now() + 2592000e3);
// privacyCookie.launch("privacy_cookie", "set", {
//     secure: true,
//     expires: privacyCD.toUTCString(),
// });
