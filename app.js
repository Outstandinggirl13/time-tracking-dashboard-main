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

fetch("data.json")
  .then(response => response.json())
  .then(data => {
        // Find the object with title "Work"
        const workData = data.find(item => item.title === "Work");
        const playData = data.find(item => item.title === "Play");
        const studyData = data.find(item => item.title === "Study");
        const exerciseData = data.find(item => item.title === "Exercise");
        const socialData = data.find(item => item.title === "Social");
        const selfCareData = data.find(item => item.title === "Self Care");


        // Access the "daily" timeframe
        const workDailyHours = workData.timeframes.daily.current;
        const playDailyHours = playData.timeframes.daily.current;
        const studyDailyHours = studyData.timeframes.daily.current;
        const exerciseDailyHours = exerciseData.timeframes.daily.current;
        const socialDailyHours = socialData.timeframes.daily.current;
        const selfCareDailyHours = selfCareData.timeframes.daily.current;

        const workDailyHoursPrev = workData.timeframes.daily.previous;
        const playDailyHoursPrev = playData.timeframes.daily.previous;
        const studyDailyHoursPrev = studyData.timeframes.daily.previous;
        const exerciseDailyHoursPrev = exerciseData.timeframes.daily.previous;
        const socialDailyHoursPrev = socialData.timeframes.daily.previous;
        const selfCareDailyHoursPrev = selfCareData.timeframes.daily.previous;
    
        // Replace text content in the HTML element
        if(workDailyHours === 1) {
            daily["workCurrent"].textContent = `${workDailyHours}hr`;  // replace text content
        } else {
            daily["workCurrent"].textContent = `${workDailyHours}hrs`;  // replace text content
        }

        if(playDailyHours === 1) {
            daily["playCurrent"].textContent = `${playDailyHours}hr`;  // replace text content
        } else {
            daily["playCurrent"].textContent = `${playDailyHours}hrs`;  // replace text content
        }

        if(studyDailyHours === 1) {
            daily["studyCurrent"].textContent = `${studyDailyHours}hr`;  // replace text content
        } else {
            daily["studyCurrent"].textContent = `${studyDailyHours}hrs`;  // replace text content
        }

        if(exerciseDailyHours === 1) {
            daily["exerciseCurrent"].textContent = `${exerciseDailyHours}hr`;  // replace text content
        } else {
            daily["exerciseCurrent"].textContent = `${exerciseDailyHours}hrs`;  // replace text content
        }

        if(socialDailyHours === 1) {
            daily["socialCurrent"].textContent = `${socialDailyHours}hr`;  // replace text content
        } else {
            daily["socialCurrent"].textContent = `${socialDailyHours}hrs`;  // replace text content
        }

        if(selfCareDailyHours === 1) {
            daily["selfCareCurrent"].textContent = `${selfCareDailyHours}hr`;  // replace text content
        } else {
            daily["selfCareCurrent"].textContent = `${selfCareDailyHours}hrs`;  // replace text content
        }



        if(workDailyHoursPrev === 1) {
            daily["workPrevious"].textContent = `Yesterday - ${workDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["workPrevious"].textContent = `Yesterday - ${workDailyHoursPrev}hrs`;  // replace text content
        }

        if(playDailyHoursPrev === 1) {
            daily["playPrevious"].textContent = `Yesterday - ${playDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["playPrevious"].textContent = `Yesterday - ${playDailyHoursPrev}hrs`;  // replace text content
        }

        if(studyDailyHoursPrev === 1) {
            daily["studyPrevious"].textContent = `Yesterday - ${studyDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["studyPrevious"].textContent = `Yesterday - ${studyDailyHoursPrev}hrs`;  // replace text content
        }

        if(exerciseDailyHoursPrev === 1) {
            daily["exercisePrevious"].textContent = `Yesterday - ${exerciseDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["exercisePrevious"].textContent = `Yesterday - ${exerciseDailyHoursPrev}hrs`;  // replace text content
        }

        if(socialDailyHoursPrev === 1) {
            daily["socialPrevious"].textContent = `Yesterday - ${socialDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["socialPrevious"].textContent = `Yesterday - ${socialDailyHoursPrev}hrs`;  // replace text content
        }

        if(selfCareDailyHoursPrev === 1) {
            daily["selfCarePrevious"].textContent = `Yesterday - ${selfCareDailyHoursPrev}hr`;  // replace text content
        } else {
            daily["selfCarePrevious"].textContent = `Yesterday - ${selfCareDailyHoursPrev}hrs`;  // replace text content
        }
  })
  .catch(error => console.error("Error loading JSON:", error));