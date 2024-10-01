const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const results = document.querySelector("#results")

   if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML =  `Please give a valid height ${height}`;
   } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML =  `Please give a valid weight ${weight}`;
   } else {
   const bmi = (weight / ((height*height)/1000)).toFixed(2)
   let message = `<span>Your BMI is ${bmi}</span><br>`;
    
   let bmiCategory;
    switch(true) {
        case (bmi < 18.6):
            bmiCategory =  "underweight";
            break;
            case (bmi > 18.6 && bmi <= 24.9):
            bmiCategory =  "Normal";
            break;
            case (bmi > 24.9):
            bmiCategory =  "Overweight";
            break;

            default:
                bmiCategory = "unknown";
    }
    switch (bmiCategory) {
        case "underweight":
            message +=  "You are underweight"
            break;
            case "Normal":
            message +=  "You are Normal"
            break;
            case "Overweight":
            message +=  "You are Overweight"
            break;
    
            default:
                message += "There was an error calculating your BMI.";
    }

    results.innerHTML = message;
   }


});