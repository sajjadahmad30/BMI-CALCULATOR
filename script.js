function calculateBMI(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    var result = document.getElementById("result")

    //  BMI Formula
    let bmi = weight / (height*height)
    let totalBmi = bmi.toFixed(2);

    // check the totalBmi for a given conditions by using if statement. 
    if(totalBmi < 18.5){
        result.textContent = "Under Weight : " + totalBmi
    }if(totalBmi >= 18.5 && totalBmi  < 24.9){
        result.textContent = "Normal Weight : " + totalBmi
    }if(totalBmi >= 25.0 && totalBmi < 29.9){
        result.textContent = "Over Weight : " + totalBmi
    }if(totalBmi >= 30){
        result.textContent = "Obesity Weight : " + totalBmi
    }


    // handle Empty height and weight by using if statement 
    if (!height || height <= 0 || !weight || weight <= 0) {
        alert("Please enter valid positive numbers for both height and weight.");
        //and assigned result to empty space
        result.textContent=""
    }
}