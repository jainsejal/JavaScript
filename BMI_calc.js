function bmiCalculator (weight, height){
    var interpretation = Math.round(weight/(height*height));
    if(interpretation < 18.5){
        return "Your BMI is " + interpretation+", so you are underweight.";
    }
    if(interpretation >= 18.5 && interpretation <= 24.9){
        return "Your BMI is " + interpretation+", so you have a normal weight.";
    }
    else{
        return "Your BMI is " + interpretation+", so you are overweight.";
    }
    return interpretation;
}
bmiCalculator(65, 1.8);

