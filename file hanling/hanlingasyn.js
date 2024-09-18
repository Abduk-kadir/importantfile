let fs=require('fs');
let readline=require('Readline-sync');
let filename='abcd.txt';
let txt=readline.question('enter text that has to be taken');
fs.appendFile(filename,txt,function(err){
    if(err){
        console.log(err)
    }
    else{
        fs.readFile(filename,'utf8',function(err,data){
            if(err)
            {
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    }
})
