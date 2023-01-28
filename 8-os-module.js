// Built in modules: OS module
// interacts with server and the operating system

const os = require('os') // call with . os  .os

// info about current user
const user = os.userInfo()
console.log(user)
/*
{
  uid: 501,
  gid: 20,
  username: 'valemich',
  homedir: '/Users/valemich',
  shell: '/bin/zsh'
}
*/

// method returns the system uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`)
// System Uptime is 330621 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
/* {
  name: 'Darwin',
  release: '22.2.0',
  totalMem: 17179869184,
  freeMem: 410669056
} */
