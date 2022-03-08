let second = 0;
const timeID = setInterval(() => {
    console.log(++second);
    if (second>10) {
        clearInterval(timeID)
    }
}, 1000);
