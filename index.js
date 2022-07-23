// Code your solutions in this file
const names = ['Jeff', 'Demi', 'Toby', 'Maze']
const event = "birthday"

function writeCards(names, event) {
    let result = []
  for (let a = 0; a < names.length; a++) {
    result.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
  }
  return result
}
writeCards(['Jeff', 'Demi', 'Toby', 'Maze'], 'birthday')


function countDown(b) {
    let countDown = b
    while (countDown >= 0) {
        console.log(countDown--)
    }
}
countDown(15)