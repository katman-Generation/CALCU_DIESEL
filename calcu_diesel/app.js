// checking the type of the trailer
function Trailer(value = document.getElementById('trailer').value) {
    console.log("value" + value);
    return value;
}
// checking if you are empty or Loaded 
function emptyLoaded(value2 = document.getElementById('empty-loaded').value) {
    console.log("value2" + value2);
    return value2;
}
// the basicc diesel calculations
function dieselCalc(cons) {
    const Opening = document.getElementById('opening').value;
    console.log("opening" + Opening);
    const Closing = document.getElementById('closing').value;
    console.log("closing" + Closing);
    const ltrs = document.getElementById('total-ltrs').value;

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Process the form data and update the UI
    });

    let kms = Closing - Opening;
    let diesel = kms / cons;
    console.log("diesel" + diesel);
    document.getElementById("km-moved").textContent = kms;
    document.getElementById("cal-used").textContent = Math.round(diesel);
    if (ltrs > diesel) {
        document.getElementById("short").textContent = ltrs - Math.round(diesel);
    } else {
        document.getElementById("excess").textContent = Math.round(diesel) - ltrs;
    }

}

//afunction to checkwhich consuption to use
function consuption() {
    let trailer = Trailer();
    let leg = emptyLoaded();

    if (trailer == 1 && leg == 1) {
        let c = 3.4;
        return c;
    } else if (trailer = 1 && leg == 2) {
        let c = 2.3;
        return c;
    } else if (trailer = 2 && leg == 1) {
        let c = 3.2;
        return c;
    } else {
        let c = 2.1;
        return c;
    }
}