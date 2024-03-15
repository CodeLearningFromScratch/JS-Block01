






console.log('------------------------------- Block 01 start -------------------')
// Block 01 start --------------------------------------------------------------------

// Ex 1
function total(num, num2) {
    const sum = num + num2;
    return sum
  }
   console.log('Ex 1:', total(2, 2)) // 4 my

   console.log('Ex 1:', total(15, 5)) // 20 school
   console.log('Ex 1:', total(20, 20)) // 40 school

   console.log('------------------------------------------------------------------')

// Ex 2
function multy (a, b){
	const total = a * b;
	return total
}
console.log('Ex 2:', multy(4, 4)) // 16 my

console.log('Ex 2:', multy(10, 5)) // 50 school
console.log('Ex 2:', multy(20, 20)) // 400 school

console.log('------------------------------------------------------------------')

//Ex 3
var ageCalc = function (date_of_birth, future_year) {
    const age = future_year - date_of_birth;
	return age
}
console.log('Ex 3:', ageCalc(2307, 2587)) // 280 my, a person from the future

console.log('Ex 3:', ageCalc(1982, 2018)) // 36 school
console.log('Ex 3:', ageCalc(2000, 2018)) // 18 school

console.log('------------------------------------------------------------------')

// Ex 4
var howManyTeas = function(age, end_age, teas_day){
    const inYear = 365 * teas_day;
    const cupsOfTea = (end_age - age) * inYear;
    return cupsOfTea
}
console.log('Ex 4:', howManyTeas(150, 700, 0)) // 0 my

console.log('Ex 4:', howManyTeas(35, 70, 2))   // 25550 school
console.log('Ex 4:', howManyTeas(35, 36, 2))   // 730 school

console.log('------------------------------------------------------------------')

// Ex 5
var compare = function(a, b) {
    const trueOrFalse = a > b;
	return trueOrFalse
}
console.log('Ex 5:', compare(1, 0)) // my  true
console.log('Ex 5:', compare(0, 1)) // my  false

console.log('Ex 5:', compare(100, 50)) // school
console.log('Ex 5:', compare(1, 100)) // school

console.log('------------------------------------------------------------------')

// Ex 6
var compare = function(a, b) {
    const equal_or_not = a === b;
	return equal_or_not;
}
console.log('Ex 6:', compare('good', 'good')) // my  true
console.log('Ex 6:', compare('-30 degrees', 'outside')) // my  false

console.log('Ex 6:', compare(10, 34))    // school
console.log('Ex 6:', compare(100, 100))  // school
console.log('Ex 6:', compare(100, '100'))  // school

console.log('------------------------------------------------------------------')

// Ex 7
var isEven = function(arg) {
 const isEven = Number.isInteger(arg / 2) 
     return isEven;
}
console.log('Ex 7:', isEven(7))  // false
console.log('Ex 7:', isEven(2))  // true

console.log('------------------------------------------------------------------')

// Ex 8
var checkAge = function (age, minAge){
    if (age >= minAge) {
        return true;
    }
    else{
      return false;
    } 
}
console.log('Ex 8:', checkAge(21, 15))  // true
console.log('Ex 8:', checkAge(12, 15))  // false 
console.log('Ex 8:', checkAge(100, 60)) // true

console.log('------------------------------------------------------------------')

// Ex 9
var getAge  = function (birth_year, now, name) {

    const age = now - birth_year;
    const sentence = `Hello ${name} you are ${age} years old`
    return sentence
}
console.log('Ex 9:', getAge(1982, 2018, "Antonello")) // 36
console.log('Ex 9:', getAge(1960, 1970, "Mike")) // 10
console.log('Ex 9:', getAge(1200, 2000, "Ottaviano")) // 800

console.log('------------------------------------------------------------------')

// Ex 10
var howManyDays = function (dob, now){

    const days = (now - dob) * 365;
    const sentence =   `you have lived for ${days} days already!`
    return sentence
}
console.log('Ex 10:', howManyDays(2016, 2018)) // 730
console.log('Ex 10:', howManyDays(1982, 2018)) // 13140

console.log('------------------------------------------------------------------')

// Ex 11
var toCelsius = function (fahrenheit){
    //const _F = (fahrenheit - 32) * 5 / 9; 
    const C = Math.round((fahrenheit - 32) * 5 / 9)
    //return  Math.round(_F)
    return C
}

var toFahr = function (celsius){

   const F = Math.round(celsius / 5 * 9 + 32);
   return F
}
console.log('Ex 11:', toCelsius(102)) // 39
console.log('Ex 11:', toFahr(39)) // 102
console.log('Ex 11:', toCelsius(68)) // 20
console.log('Ex 11:', toFahr(57)) // 135

// Block 01 end --------------------------------------------------------------------

console.log('------------------------------- Block 01 end -------------------')


