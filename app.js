// Tab buttons
const reportDaily = document.querySelector(".report__daily");
const reportWeekly = document.querySelector(".report__weekly");
const reportMonthly = document.querySelector(".report__monthly");

// Daily elements
const daily = {
    workCurrent: document.querySelector(".work__daily-current"),
    workPrevious: document.querySelector(".work__daily-previous"),
    playCurrent: document.querySelector(".play__daily-current"),
    playPrevious: document.querySelector(".play__daily-previous"),
    studyCurrent: document.querySelector(".study__daily-current"),
    studyPrevious: document.querySelector(".study__daily-previous"),
    exerciseCurrent: document.querySelector(".exercise__daily-current"),
    exercisePrevious: document.querySelector(".exercise__daily-previous"),
    socialCurrent: document.querySelector(".social__daily-current"),
    socialPrevious: document.querySelector(".social__daily-previous"),
    selfCareCurrent: document.querySelector(".self-care__daily-current"),
    selfCarePrevious: document.querySelector(".self-care__daily-previous")
};

// Weekly elements
const weekly = {
    workCurrent: document.querySelector(".work__weekly-current"),
    workPrevious: document.querySelector(".work__weekly-previous"),
    playCurrent: document.querySelector(".play__weekly-current"),
    playPrevious: document.querySelector(".play__weekly-previous"),
    studyCurrent: document.querySelector(".study__weekly-current"),
    studyPrevious: document.querySelector(".study__weekly-previous"),
    exerciseCurrent: document.querySelector(".exercise__weekly-current"),
    exercisePrevious: document.querySelector(".exercise__weekly-previous"),
    socialCurrent: document.querySelector(".social__weekly-current"),
    socialPrevious: document.querySelector(".social__weekly-previous"),
    selfCareCurrent: document.querySelector(".self-care__weekly-current"),
    selfCarePrevious: document.querySelector(".self-care__weekly-previous")
};

// Monthly elements
const monthly = {
    workCurrent: document.querySelector(".work__monthly-current"),
    workPrevious: document.querySelector(".work__monthly-previous"),
    playCurrent: document.querySelector(".play__monthly-current"),
    playPrevious: document.querySelector(".play__monthly-previous"),
    studyCurrent: document.querySelector(".study__monthly-current"),
    studyPrevious: document.querySelector(".study__monthly-previous"),
    exerciseCurrent: document.querySelector(".exercise__monthly-current"),
    exercisePrevious: document.querySelector(".exercise__monthly-previous"),
    socialCurrent: document.querySelector(".social__monthly-current"),
    socialPrevious: document.querySelector(".social__monthly-previous"),
    selfCareCurrent: document.querySelector(".self-care__monthly-current"),
    selfCarePrevious: document.querySelector(".self-care__monthly-previous")
};

// Track currently active tab
let currentTab = document.querySelector(".report__weekly.active") || document.querySelector(".report__weekly");

// Helper: set display for all elements in an object
function setDisplay(obj, displayType) {
    Object.values(obj).forEach(el => el.style.display = displayType);
}

// Handle tab switching
function showPeriod(periodObj, event) {
    // Update active tab class
    currentTab.classList.remove("active");
    currentTab = event.currentTarget;
    currentTab.classList.add("active");

    // Hide all periods first
    setDisplay(daily, "none");
    setDisplay(weekly, "none");
    setDisplay(monthly, "none");

    // Show selected period
    setDisplay(periodObj, "block");
}

// Event listeners
reportDaily.addEventListener("click", e => showPeriod(daily, e));
reportWeekly.addEventListener("click", e => showPeriod(weekly, e));
reportMonthly.addEventListener("click", e => showPeriod(monthly, e));