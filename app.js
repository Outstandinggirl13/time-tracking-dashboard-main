const reportDaily = document.querySelector(".report__daily");
const reportWeekly = document.querySelector(".report__weekly");
const reportMonthly = document.querySelector(".report__monthly");

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

let currentTab = document.querySelector(".report__weekly");

function makeVisible(element) {
    element.style.display = "block";
}

function makeInvisible(element) {
    element.style.display = "none";
}

function assignClass(element) {
    currentTab.classList.remove("active");
    let newCurrent = element.currentTarget.classList[0];
    currentTab = document.querySelector("." + newCurrent);
    currentTab.classList.add("active");
}

function showDaily(event) {
    assignClass(event);
    Object.keys(daily).forEach(key => {
        makeVisible(daily[key]);
    });
    Object.keys(weekly).forEach(key => {
        makeInvisible(weekly[key]);
    });
    Object.keys(monthly).forEach(key => {
        makeInvisible(monthly[key]);
    });
}

function showWeekly(event) {
    assignClass(event);
    Object.keys(daily).forEach(key => {
        makeInvisible(daily[key]);
    });
    Object.keys(weekly).forEach(key => {
        makeVisible(weekly[key]);
    });
    Object.keys(monthly).forEach(key => {
        makeInvisible(monthly[key]);
    });
}

function showMonthly(event) {
    assignClass(event);
    Object.keys(daily).forEach(key => {
        makeInvisible(daily[key]);
    });
    Object.keys(weekly).forEach(key => {
        makeInvisible(weekly[key]);
    });
    Object.keys(monthly).forEach(key => {
        makeVisible(monthly[key]);
    });
}

reportDaily.addEventListener("click", showDaily);
reportWeekly.addEventListener("click", showWeekly);
reportMonthly.addEventListener("click", showMonthly);
