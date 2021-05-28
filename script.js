const time_of_year = document.getElementById("time_of_year");
const next_time_of_year = document.getElementById("next_time_of_year");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const CD = new Date();
const YEAR = CD.getFullYear();

const newDate = () => {
    const win_sols = new Date(YEAR, 11, 22);
    const sum_sols = new Date(YEAR, 5, 21);
    const fall_equ = new Date(YEAR, 8, 22);
    const sprg_equ = new Date(YEAR, 2, 20);

    if (CD < sprg_equ) {
        time_of_year.innerHTML = "Winter Solstice (Dec 22)";
        next_time_of_year.innerHTML = "Spring / Vernal Equinox (Mar 20)"
        return sprg_equ;
    }
    else if (CD < sum_sols) {
        time_of_year.innerHTML = "Spring / Vernal Equinox (Mar 20)";
        next_time_of_year.innerHTML = "Summer Solstice (Jun 21)";

        return sum_sols;
    }
    else if (CD < fall_equ) {
        time_of_year.innerHTML = "Summer Solstice (Jun 21)";
        next_time_of_year.innerHTML = "Fall / Autumnal Equinox (Sept 22)";

        return fall_equ;
    }
    else {
        time_of_year.innerHTML = "Fall / Autumnal Equinox (Sept 22)";
        next_time_of_year.innerHTML = "Winter Solstice (Dec 22)";
        return win_sols;
    }
}

function countDown() {
    const nd = newDate();
    const cd = new Date();

    const n = (nd - cd) / 1000;
    const days = Math.floor(n / 3600 / 24);
    const hours = Math.floor(n / 3600 ) % 24;
    const mins = Math.floor(n / 60) % 60;
    const secs = Math.floor(n) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
}

setInterval(countDown, 1000);


