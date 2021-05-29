

exports.triangle_checker = function (a, b, c) {

    if(typeof a != 'number'){
        return 'a is wrong value';
    }
    if(typeof b != 'number'){
        return 'a is wrong value';
    }
    if(typeof c != 'number'){
        return 'a is wrong value';
    }

    if(!Number.isFinite(a)){
        return 'a is wrong value';
    }
    if(!Number.isFinite(b)){
        return 'a is wrong value';
    }
    if(!Number.isFinite(c)){
        return 'a is wrong value';
    }


    if(a <= 0){
        return 'Not Triangle';
    }
    if(b <= 0){
        return 'Not Triangle';
    }
    if(c <= 0){
        return 'Not Triangle';
    }

    if(a==b && b==c){
        return 'Equilateral';
    }

    if(a==b || b==c || a==c){
        return 'Isosceles';
    }
    return a + b;
  }
 
  