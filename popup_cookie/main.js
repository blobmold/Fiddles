class DefineCookie {
  constructor(cont = "", closeBtn = "") {
    this.cont = document.querySelector(cont);
    this.closeBtn = document.querySelector(closeBtn);
  }

  launch(name, value, options = {}) {
    console.log(this.checkCookie(name));
    if (!this.checkCookie(name)) {
      this.openPopup();
    }
    this.closePopup(name, value, options);
  }

  setCookie(name, value, options = {}) {
    options = {
      //Default values listed here
      path: "/",
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

  openPopup() {
    this.cont.style.display = "flex";
  }

  closePopup(name, value, options = {}) {
    this.closeBtn.addEventListener("click", () => {
      this.cont.style.display = "none";
      this.setCookie(name, value, options);
      console.log(this.checkCookie(name));
    });
  }
}

let defineCookie = new DefineCookie(".rh-bf", ".rh-bf-closeBtn_container");

let rhDate = new Date(Date.now() + 259200e3);

//rhdate records the date when user visits the page,
//adds a week to it and adds to expiery date parameter of that cookie.
defineCookie.launch("rh_bf-C", "bf_set", { secure: true, expires: rhDate.toUTCString() });