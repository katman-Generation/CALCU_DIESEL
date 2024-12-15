document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            const trailer = document.getElementById("trailer").value;
            const weight = Math.abs(parseFloat(document.getElementById("weight").value));
            const opening = Math.abs(parseFloat(document.getElementById("opening").value));
            const closing = Math.abs(parseFloat(document.getElementById("closing").value));
            const litres = Math.abs(parseFloat(document.getElementById("total-ltrs").value));

            if (!trailer || isNaN(weight) || isNaN(opening) || isNaN(closing) || isNaN(litres)) {
                alert("Please fill in all fields correctly.");
                return;
            }

            if (closing <= opening) {
                alert("Closing mileage must be greater than opening mileage.");
                return;
            }

            const kmTravelled = closing - opening;
            let consumptionRate;

            if (trailer === "tri-axle") {
                consumptionRate = weight <= 5000 ? 3.4 : 2.3;
            } else if (trailer === "super-link") {
                consumptionRate = weight <= 5000 ? 3.2 : 2.1;
            } else {
                alert("Invalid trailer type selected.");
                return;
            }

            const expectedLitres = kmTravelled / consumptionRate;
            const shortLitres = litres > expectedLitres ? litres - expectedLitres : 0;
            const savedLitres = litres < expectedLitres ? expectedLitres - litres : 0;

            document.getElementById("km-moved").textContent = kmTravelled.toFixed(2);
            document.getElementById("cal-used").textContent = expectedLitres.toFixed(2);
            document.getElementById("excess").textContent = savedLitres.toFixed(2);
            document.getElementById("short").textContent = shortLitres.toFixed(2);
            if (shortLitres > 0) {
                alert("You have used " + shortLitres.toFixed(2) + " litres more than expected.");
            }
            else alert("You have used " + savedLitres.toFixed(2) + " litres less than expected.");
        });

        // Dynamically set the minimum value for closing mileage based on opening mileage
        document.getElementById("opening").addEventListener("input", function () {
            const openingValue = Math.abs(parseFloat(this.value));
            const closingField = document.getElementById("closing");

            if (!isNaN(openingValue)) {
                closingField.min = openingValue + 1; // Closing mileage must be greater
            }
        });