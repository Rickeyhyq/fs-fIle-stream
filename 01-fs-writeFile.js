'use strict'
const fs = require('fs')

// 直接读写文件 readFile & writeFile
fs.readFile('./data.json', (error, data) => {
  if (error) console.log(error)
  console.log(data.toString())
  // console.log(JSON.parse(data))
  fs.writeFile('./dist.txt', data, (error) => {
    if (error) console.log(error)
    console.log('write success')
  })
})
