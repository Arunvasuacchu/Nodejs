// const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

// fs.readFile(path.join(__dirname,'text.txt'), 'UTF-8', (err, data) =>{
//   if (err) throw err
//   console.log(data)
// })


// using asynchronous
const fileOps = async() => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname,'text.txt'), 'UTF-8')
      console.log(data)
    
  } catch (err) {
    console.error(err)
  }
}

fileOps()


// fs.writeFile(path.join(__dirname, 'write.txt'), 'heloo! iam learning node js', (err) =>{
//   if(err) throw err
//   console.log('filewritten')
//   fs.appendFile(path.join(__dirname, 'write.txt'), '\n\n new file added', (err) =>{
//     if(err) throw err
//     console.log('text updated')
//   });
// });



// process.on('uncaughtException', err =>{
//   console.error(`there was an error ${err}`)
//   process.exit(5)
// })