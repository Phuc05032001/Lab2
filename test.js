// var math=require("nodecalc");
// console.log(math.calc(10,20,'+'));
// console.log(math.calc(20,10,'-'));
// console.log(math.calc(10,20,'*'));
// console.log(math.calc(20,2,'/'));

const fs = require('fs');
//Using the readFile() method
fs.readFile('./lorem.txt', (err, data) => { if(err) {
return console.log('Error occurred while reading file');
}
console.log(data.toString());
});

//Using the readFileSync() method.
const data = fs.readFileSync('./lorem.txt'); console.log(data.toString());

//access() function
const path = './config.js';
fs.access(path, fs.F_OK, (err) => { if (err) {
console.error(err); return;
}
});

//open empty file not exist
fs.open('file.txt', 'w', (err, file) => { if (err) {
    throw err;
    }
    console.log('Saved!');
    });

 
//fs.appendFile() method appends the provided content at the end of the file.    

fs.appendFile('file.txt', ' Hello World', (err) => { if (err) {
throw err;
}
console.log('Updated!');
})

//To delete a file, we can use fs.unlink() method

fs.unlink('file.txt', (err) => { if (err) {
throw err;
}
console.log('File deleted!');
});

//To rename a file, we can use the fs.rename() method.
fs.rename('newfile.txt', 'oldfile.txt', (err) => { if (err) {
throw err;
}
console.log('File Renamed!');
});


//You can also copy files using the fs.copy() method
fs.copyFile('hi.txt','copyhi.txt', (err)=> { 
    if (err) {throw err;}
 console.log('File is copied!');
});





