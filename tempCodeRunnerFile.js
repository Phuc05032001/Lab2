fs.copyFile('file.txt','copyfile.txt', (err)
 => 
{ 
    if (err) {throw err;}
 console.log('File is copied!');
});