setInterval(() => {
    d = new Date();
    hrs = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hours = 30 * hrs + min/2;
    minutes = 6 * min;
    seconds = 6 * sec;

    hr.style.transform = `rotate(${hours}deg)`;
    mnu.style.transform = `rotate(${minutes}deg)`;
    soc.style.transform = `rotate(${seconds}deg)`;
  });
