exports.triangle_checker = function (a, b, c) {
    if(typeof a != 'number'){
        return '"a":'+a+' must be a number';
    }
    if(typeof b != 'number'){
        return '"b":'+b+' must be a number';
    }
    if(typeof c != 'number'){
        return '"c":'+c+' must be a number';
    }


    if(a <= 0){
        return '"a":'+a+' must greater than 0';
    }
    if(b <= 0){
        return '"b":'+b+' must greater than 0';
    }
    if(c <= 0){
        return '"c":'+c+' must greater than 0';
    }

    if(a+b <= c){
        return 'Not a Triangle';
    }
    if(a+c <= b){
        return 'Not a Triangle';
    }
    if(b+c <= a){
        return 'Not a Triangle';
    }


    if(a==b && b==c){
        return 'Equilateral';
    }

    if(a==b || b==c || a==c){
        return 'Isosceles';
    }

    return 'Scalene'

  }
 
  