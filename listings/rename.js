// rename File in folder

const fs = require('fs')
const path = require('path')

const folder = 'ch05'
// list all files in folder
// filter only extension is .txt
const files = fs.readdirSync(path.join(__dirname, folder)).filter((file) => file.endsWith('.txt'))
// console.log(files)
// remove beginneing string "Listing" from each file name
files.forEach((file) => {
  // change file extension .txt to .js(.ts)
  const oldPath = path.join(__dirname, folder, file)
  if (file.startsWith('Listing')) {
    file = file.slice(7)
    file = file.trim()
    file = file.replace('.txt', '.js')
    const newPath = path.join(__dirname, folder, file)
    fs.renameSync(oldPath, newPath)
  }
})
