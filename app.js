const reportDaily = document.querySelector(".report__daily");
const reportWeekly = document.querySelector(".report__weekly");
const reportMonthly = document.querySelector(".report__monthly");

// Work
const workDailyCurrent = document.querySelector(".work__daily-current");
const workWeeklyCurrent = document.querySelector(".work__weekly-current");
const workMonthlyCurrent = document.querySelector(".work__monthly-current");
const workDailyPrevious = document.querySelector(".work__daily-previous");
const workWeeklyPrevious = document.querySelector(".work__weekly-previous");
const workMonthlyPrevious = document.querySelector(".work__monthly-previous");

// Play
const playDailyCurrent = document.querySelector(".play__daily-current");
const playWeeklyCurrent = document.querySelector(".play__weekly-current");
const playMonthlyCurrent = document.querySelector(".play__monthly-current");
const playDailyPrevious = document.querySelector(".play__daily-previous");
const playWeeklyPrevious = document.querySelector(".play__weekly-previous");
const playMonthlyPrevious = document.querySelector(".play__monthly-previous");

// Study
const studyDailyCurrent = document.querySelector(".study__daily-current");
const studyWeeklyCurrent = document.querySelector(".study__weekly-current");
const studyMonthlyCurrent = document.querySelector(".study__monthly-current");
const studyDailyPrevious = document.querySelector(".study__daily-previous");
const studyWeeklyPrevious = document.querySelector(".study__weekly-previous");
const studyMonthlyPrevious = document.querySelector(".study__monthly-previous");

// Exercise
const exerciseDailyCurrent = document.querySelector(".exercise__daily-current");
const exerciseWeeklyCurrent = document.querySelector(".exercise__weekly-current");
const exerciseMonthlyCurrent = document.querySelector(".exercise__monthly-current");
const exerciseDailyPrevious = document.querySelector(".exercise__daily-previous");
const exerciseWeeklyPrevious = document.querySelector(".exercise__weekly-previous");
const exerciseMonthlyPrevious = document.querySelector(".exercise__monthly-previous");

// Social
const socialDailyCurrent = document.querySelector(".social__daily-current");
const socialWeeklyCurrent = document.querySelector(".social__weekly-current");
const socialMonthlyCurrent = document.querySelector(".social__monthly-current");
const socialDailyPrevious = document.querySelector(".social__daily-previous");
const socialWeeklyPrevious = document.querySelector(".social__weekly-previous");
const socialMonthlyPrevious = document.querySelector(".social__monthly-previous");

// Self Care
const selfCareDailyCurrent = document.querySelector(".self-care__daily-current");
const selfCareWeeklyCurrent = document.querySelector(".self-care__weekly-current");
const selfCareMonthlyCurrent = document.querySelector(".self-care__monthly-current");
const selfCareDailyPrevious = document.querySelector(".self-care__daily-previous");
const selfCareWeeklyPrevious = document.querySelector(".self-care__weekly-previous");
const selfCareMonthlyPrevious = document.querySelector(".self-care__monthly-previous");

let currentTab = document.querySelector(".report__weekly");

function makeVisible(element) {
    element.style.display = "block";
}

function makeInvisible(element) {
    element.style.display = "none";
}

function showDaily(event) {
    currentTab.classList.remove("active");
    let newCurrent = event.currentTarget.classList[0];
    currentTab = document.querySelector("." + newCurrent);
    currentTab.classList.add("active");
    makeVisible(workDailyCurrent);
    makeVisible(workDailyPrevious);
    makeInvisible(workWeeklyCurrent);
    makeInvisible(workWeeklyPrevious);
}
reportDaily.addEventListener("click", showDaily);