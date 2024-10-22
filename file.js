// 1. Explore the `crypto` module and then encrypt the string "Hello, Good Morning" and generate an random string using UUID

// 2. Explore the `stream` module and handle stream to read large txt files (say siz 1mb & more), compare it with normal file system read function, print the `time taken` the stream and fs read funtion

// 4. Explore the `OS` module and print all the details of your `system`.

// Already covered
// 5. Code all the module functions in the `index.js`

// Already covered
// 6. Use `Command Line Arguments` to `run` all the functions and provide necessary `inputs` in the command line.

const crypto = require('crypto')
const stream = require('stream')
const fs = require('fs')
const os = require('os')

// 1 --
const encryptString = (input_str) => {
    crypto.scrypt(input_str, 'ABC', 5, (e, d)=>{
        if(!e){ // If there is no error -> !e -> True if e is False
            console.log(d.toString("hex"))
        }
    })

}

// encryptString("Hello, Good Morning")

const generateUUID = ()=>{
    let res = crypto.randomUUID();
    console.log(res)
}

// generateUUID()

// 2. -- 
const readFileUsingStream = (filepath)=>{
    console.time('Stream Reading Started')
    // Creates a stream of the data to be consumed
    const readStream = fs.createReadStream(filepath, {encoding: 'utf-8'})

    // Consuming the stream
    readStream.on('data', (d)=> {
        // console.log(d)
    })
    console.timeEnd('Stream Reading Started')
}

const readFileUsingFs = (filepath) => {
    console.time('FS Reading Started')
    fs.readFile(filepath,'utf-8', (e, d)=>{
        // console.log(d)
        if(e){
            console.log(e)
        }
    })
    console.timeEnd('FS Reading Started')
}

// readFileUsingStream('test_file.txt')
// readFileUsingFs('test_file.txt')

// 3. --
console.log(os.freemem())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.cpus())

