function calculateBMI(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    var result = document.getElementById("result")

    //  BMI Formula
    let bmi = weight / (height / 100 * height / 100)
    let totalBmi = bmi.toFixed(2);
    result.textContent = "Your BMI is :" + totalBmi
}