const ms = require('ms')

module.exports = () => {
  console.log('Test plugin is running, see: ' + ms(53340000))
}