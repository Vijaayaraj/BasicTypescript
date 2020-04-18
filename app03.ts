//function getAverage(a: string, b: string, c: string): string;
//function getAverage(a: number, b: number, c: number): string;
let squareRoot;
function getAverage(a?: number, b?: number, c?: number): string {
    
    let average; // let and var will behave similar. Scope for this variable within this function
    if (c == undefined){
        var total = a + b;
        average = total / 2;
    }
    else {
        var total = a + b + c;
        average = total / 3;
    }
    
    return 'The average is: ' + average;
}

var result = getAverage(4, 3);

console.log(result);