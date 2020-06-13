function lifeInWeeks(age) {

   var fixedAge = 90;
   var fixedAgeDays = 365 * fixedAge;
   var fixedAgeWeeks = 52 * fixedAge;
   var fixedAgeMonths = 12 * fixedAge;
   var currentAgeDays = 365 * age;
   var currentAgeWeeks = 52 * age;
   var currentAgeMonths = 12 * age;
   var days = fixedAgeDays - currentAgeDays;
   var weeks = fixedAgeWeeks - currentAgeWeeks;
   var months = fixedAgeMonths - currentAgeMonths;

  console.log("You have "+days+ " days, "+ weeks+" weeks, and " + months+ " months left.")
    
}

lifeInWeeks(56);
