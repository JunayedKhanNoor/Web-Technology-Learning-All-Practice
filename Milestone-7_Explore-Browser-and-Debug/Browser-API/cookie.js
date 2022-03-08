document.cookie;
document.cookie.split(";");
document.cookie.split(";").map((c) => console.log(c));
document.cookie.split(";").map((c) => console.log(c.split("=")));
document.cookie.split(";").find((c) => c.includes("country"));
document.cookie
  .split(";")
  .find((c) => c.includes("country"))
  .split("=")[1];

const getCookie = (name) => {
  const cookie = document.cookie;
  const allCookie = cookie.split(";");
  const findCookie = allCookie.find((c) => c.includes(name));
  if (findCookie) {
    const cookieNameValue = findCookie.split("=");
    console.log(cookieNameValue[1]);
  }
};
// Local storage a kichu set kora
localStorage.setItem("ami,420");
localStorage.setItem("ami", 420);
localStorage.getItem("ami");
localStorage.getItem("yt-player-headers-readable");
localStorage.getItem("yt-player-bandwidth");
const convertJSOn = localStorage.getItem("yt-player-bandwidth");
//data dekhar jonno parse korte hoi
const converted = JSON.parse(convertJSOn);
converted.user = "PHERO";
converted.user;
converted.assign = "Web Course";
// object change korte, mani data pathanor jonno stringgify korte hoi
const stringified = JSON.stringify(converted);
localStorage.setItem("yt-player-bandwidth", stringified);
