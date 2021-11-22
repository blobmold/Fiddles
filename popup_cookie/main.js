class DefineCookie {
  constructor(cont = "", closeBtn = "") {
    this.cont = document.querySelector(cont);
    this.closeBtn = document.querySelector(closeBtn);
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
}

class PopupFunctions extends DefineCookie {
  constructor(...args) {
    super(...args);
  }
  launch(name, value, options = {}) {
    window.addEventListener("DOMContentLoaded", (e) => {
      if (!this.checkCookie(name)) {
        this.openPopup(this.cont);
      }
      this.closePopup(name, value, options);
    });
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
      path: "/",
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
      path: "/",
    },
  },
];

for (let obj of cookieArr) {
  let cMap = new Map(Object.entries(obj));
  let defineCookie = new PopupFunctions(cMap.get("parentElement"), cMap.get("closeBtnContainer"));
  defineCookie.launch(cMap.get("cookieName"), cMap.get("cookieValue"), cMap.get("cookieOptions"));
}
