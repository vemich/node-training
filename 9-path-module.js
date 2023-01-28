const path = require('path')

console.log(path.sep) //returns a platform specific operator
// returns /

const filePath = path.join('/content', '/subfolder', '/test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base) //base path of the file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
// the entire (absolute) path for the file
