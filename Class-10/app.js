function calculateAge() {

    var dob = moment(document.getElementById("dob").value);
    var today = moment();

    var years = today.diff(dob, "years");
    dob.add(years, "years");

    var months = today.diff(dob, "months");
    dob.add(months, "months");

    var days = today.diff(dob, "days");

    document.getElementById("result").innerHTML =
        "Your age is " + years + " years, " +
        months + " months, and " + days + " days.";
}
