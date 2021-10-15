document.head = document.head || document.getElementsByTagName('head')[0];
const _e = {
  copyText(text) {
    navigator.clipboard.writeText(text);
  },
  capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  lowercaseString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  clearCookies() {
    document.cookie
      .split(";")
      .forEach(
        (cookie) =>
          (document.cookie = cookie
            .replace(/^ +/, "")
            .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
      );
  },
  getRandomHex() {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")}`;
  },
  removeDuplicates(arr) {
    return [...new Set(arr)];
  },
  getUrlParameters(URL) {
    return JSON.parse(
      '{"' +
        decodeURI(URL.split("?")[1])
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    return JSON.stringify(URL);
  },
  isEven(n) {
    return n % 2 === 0;
  },
  getAverage(...args) {
    return args.reduce((a, b) => a + b) / args.length;
  },
  reverse(str) {
    return str.split("").reverse().join("");
  },
  isNotEmpty(arr) {
    return Array.isArray(arr) && arr.length > 0;
  },
  getSelectedText() {
    return window.getSelection().toString();
  },
  shuffleArray(arr) {
    return arr.sort(() => 0.5 - Math.random());
  },
  isDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  },
  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  hideElements(e) {
    document.querySelectorAll(e).forEach((el) => {
      el.style.display = "none";
    });
  },
  showElements(e) {
    document.querySelectorAll(e).forEach((el) => {
      el.style.display = "";
    });
  },
  isRelative(u) {
    return !/^([a-z]+:)?[\\/]/i.test(u);
  },
  addAmPm(h) {
    return `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "am" : "pm"}`;
  },
  diffDays(date, otherDate) {
    return Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
  },
  generateRandomIP() {
    return Array(4)
      .fill(0)
      .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
      .join(".");
  },
  getRandomBoolean() {
    return Math.random() >= 0.5;
  },
  isWeekend(date) {
    [0, 6].indexOf(date.getDay()) !== -1;
  },
  scrollToTop() {
    window.scrollTo(0, 0);
  },
  getUuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  },
  getTypeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  truncateString(str, length) {
    return str.length < length ? str : `${str.slice(0, length - 3)}...`;
  },
  isTabInView() {
    return !document.hidden;
  },
  isAppleDevice() {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  },
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  },
  redirect(url) {
    window.location.href = url;
  },
  ajaxLoad(el, file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        el.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  },
	getHash() {return window.location.hash},
	setHash(url) {window.location.hash=url},
	pushState(url) {history.pushState(null,null,url)},
	addKeybind(key, callback) { window.addEventListener('keyup', (e) => { if(e.keyCode == key){e.preventDefault();callback()} }) },
	changeFavicon(src) { var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon'); link.id = 'dynamic-favicon'; link.rel = 'shortcut icon'; link.href = src; if (oldLink) { document.head.removeChild(oldLink); } document.head.appendChild(link); }
};

const E = _e;