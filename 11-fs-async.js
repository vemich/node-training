const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result of an async combo text: ${first}, ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task') // creates async text file appended to the first and second text file
      }
    )
  })
})
console.log('start next task')
// start a task then offload and start the next task right away. No one is waiting.
// start
// start next task
// done with this task
