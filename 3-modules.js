// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share the minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor') //imports entire file and all variables as long as they are exported in the file you are naming
require('./7-mind-grenade') // function can run even if not called in module
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
