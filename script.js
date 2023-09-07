const day = document.querySelector("#day");
const time = document.querySelector("#time");
const data = document.querySelectorAll(".data");

// GET DAY and TIME
const getDayAndTime = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();

  //GET DAY OF WEEK
  const dayOfWeek = date.getDay();
  const currentTime = date.getTime();

  //APPEND TO DOM
  day.textContent = `Day: ${weekday[dayOfWeek]}`;
  time.textContent = `Time: ${currentTime}ms`;
};

for (const item of data) {
  item.addEventListener("click", (e) => {
    alert(e.target.dataset.testid);
    console.log(e.target.dataset.testid);
  });
}

getDayAndTime();
