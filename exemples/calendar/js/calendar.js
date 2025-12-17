var monthNamesRy = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
var daysOfTheWeekRy = ["D", "Ll", "m", "M", "J", "V", "S"];

var d = new Date();
var year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
var thisMonth = d.getMonth();
var today = d.getDate();

var daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");

for (var month = 0; month < 12; month++) {
	createCalendar(month);
}

function createCalendar(month) {
	var monthDiv = createMonthHeader(month);

	var firstDayOfTheMonth = getFirstDayOfTheMonth(year, month);
	var daysinmonth = daysInMonth(year, month)
	var counter = 0, order = 6;

	for (var i = 0; i < firstDayOfTheMonth + 7; i++) {
		order++;
		createDay(month, "&nbsp;", order, monthDiv);
	}
	for (var i = firstDayOfTheMonth; i < daysInMonth(year, month) + firstDayOfTheMonth; i++) {
		counter++;
		order++;
		createDay(month, counter, order, monthDiv);
	}

	for (var i = firstDayOfTheMonth + daysinmonth; i < 6 * 7; i++) {
		order++;
		createDay(month, "&nbsp;", order, monthDiv);
	}

}

function createDay(month, counter, order, monthDiv) {

	var day = document.createElement("div");
	if (month == thisMonth && counter == today) {
		day.setAttribute("class", "to day");
	} else {
		day.setAttribute("class", "day");
	}
	day.setAttribute("style", "order:" + order);
	day.innerHTML = counter;
	monthDiv.appendChild(day);

}

function createMonthHeader(month) {
	var calendar = document.querySelector(".calendar");

	var monthDiv = document.createElement("div");
	monthDiv.setAttribute("class", "month");
	calendar.appendChild(monthDiv);

	var h4 = document.createElement("h4");
	h4.innerHTML = monthNamesRy[month];
	monthDiv.appendChild(h4);

	for (var i = 0; i < 7; i++) {
		var hday = document.createElement("div");
		hday.setAttribute("class", "day OfWeek");
		hday.setAttribute("style", "order:" + i);
		hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
		monthDiv.appendChild(hday);
	}

	return monthDiv;

}

function daysInMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}
function getMonthName(month) {
	return monthNamesRy[month];
}
function getDayName(day) {
	return daysOfTheWeekRy[day];
}
function getFirstDayOfTheMonth(y, m) {
	var firstDay = new Date(y, m, 1);
	return firstDay.getDay();
}
function getLastDayOfTheMonth(y, m) {
	var lastDay = new Date(y, m + 1, 0);
	return lastDay.getDay();
}

// the popp up
var calendar = document.querySelector(".calendar");
var cloneCont = document.querySelector(".cloneCont");
var requestId = false;
calendar.addEventListener("click", function (e) {
	if (this.querySelector(".cloneCont")) {
		this.removeChild(this.querySelector(".cloneCont"));
	}

	else if (e.target.parentNode.className == 'month') {

		var monthClone = e.target.parentNode.cloneNode(true);
		monthClone.className += " cloneMonth";
		var cloneCont = document.createElement("div");
		cloneCont.className += " cloneCont";
		cloneCont.appendChild(monthClone);
		this.appendChild(cloneCont);

	}
}, false);