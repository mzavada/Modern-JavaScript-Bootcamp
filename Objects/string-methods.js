let isValidPassword = password => password.length > 8 && !password.toLowerCase().includes('password')

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('lkaew03490fs#@'))
console.log(isValidPassword('adfjoi2309aepassword'))