function isLeap(year) {
    if(year%4 === 0 ){
      return "Leap year";
      if(year%100 == 0){
        return "Not leap year";
        if(year%400 === 0){
          return "Leap year";
        }else{
          return "Not leap year";
        }
      }else{
        return "Leap year"
      }
    }
    else{
      return "Not leap year";
    }



}

isLeap(2000);
