function submitForm() {
    let minutes = document.getElementById('minutes').value; 
    let hours = document.getElementById('hours').value; 
    let hoursToMinutes = hours * 60;
    let duration = Number(hoursToMinutes) + Number(minutes);
    let A = duration % 20;
    if (A == 0) {
        let B = duration / 20;
        let C = B % 2;
        if (C == 0) {
            let D = B/2;
            // console.log("Hours " + D);
            document.getElementById('schedule').innerHTML = "You need to set aside <b> " + D + " hours </b> to watch this tutorial.";
        } else {
            let D = Math.floor(B/2);
            // console.log("Hour " + D + " and 30 minutes");
            document.getElementById('schedule').innerHTML = "You need to set aside <b> " + D + " hours and 30 minutes </b> to watch this tutorial.";
        }
    } else {
        let B = Math.floor(duration/20) + 1;
        let C = B % 2;
        if (C == 0) {
            // console.log("Hours " + B/2);
            document.getElementById('schedule').innerHTML = "You need to set aside <b> " + B/2 + " hours </b> to watch this tutorial.";
        } else {
            let D = Math.floor(B/2);
            // console.log("Hours " + D + " and 30 minutes");
            document.getElementById('schedule').innerHTML = "You need to set aside <b> " + D + " hours and 30 minutes </b> to watch this tutorial.";
        }
    }
}