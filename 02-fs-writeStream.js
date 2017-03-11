'use strict'
const fs = require('fs')

const fileReadStream = fs.createReadStream('./data.json', {
  start: 0, // 指定读取的字节
  end: 400
})
const fileWriteStream = fs.createWriteStream('./new_dist.txt')
fileReadStream.on('data', (data) => {
  fileWriteStream.write(data)
})

fileReadStream.on('end', () => {
  console.log('readStream end')
  fileWriteStream.on('close', () => {
    console.log('write end')
  })
})