const {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
} = require('./from-scratch');

// Test your functions here!

console.log(calculateArea(5, 3));
// 15
console.log(calculateArea(10, 7));
// 70
console.log(isEven(2))
// true
console.log(isEven(3))
// false
console.log(isEven(0))
// true
console.log(convertToFahrenheit(0))
// 32
console.log(convertToFahrenheit(100))
// 212
console.log(convertToFahrenheit(37))
// 98.6
console.log(createGreeting('Alice'))
// "Hello, Alice!"
console.log(createGreeting('Bob'))
// "Hello, Bob!"
console.log(getInitials('John', 'Doe'))
// "JD"
console.log(getInitials('Mary', 'Jane'))
// "MJ"
console.log(formatPrice(5))
// "$5.00"
console.log(formatPrice(10))
// "$10.00"
console.log(getLarger(5, 3))
// 5
console.log(getLarger(3, 5))
// 5
console.log(getLarger(10, 10))
// 10
console.log(isValidAge(25))
// true
console.log(isValidAge(0))
// true
console.log(isValidAge(120))
// true
console.log(isValidAge(-1))
// false
console.log(isValidAge(121))
// false