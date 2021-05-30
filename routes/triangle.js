exports.triangle_checker = function (a, b, c) {

    if(typeof a != 'number'){
        return 'a should be a number';
    }
    if(typeof b != 'number'){
        return 'b should be a number';
    }
    if(typeof c != 'number'){
        return 'c should be a number';
    }

    if(!Number.isFinite(a)){
        return 'a should be a number';
    }
    if(!Number.isFinite(b)){
        return 'b should be a number';
    }
    if(!Number.isFinite(c)){
        return 'c should be a number';
    }


    if(a <= 0){
        return 'a must greater then 0';
    }
    if(b <= 0){
        return 'b must greater then 0';
    }
    if(c <= 0){
        return 'c must greater then 0';
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
 
  