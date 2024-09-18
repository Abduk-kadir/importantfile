let fs=require('fs')
let readline=require('Readline-sync');
let filename=readline.question('enter file name')
let txt=readline.question('enter data that has to be written')


fs.access(filename,function(err){
    if(err){
     // file does not exit
      fs.writeFile(filename,txt,function(err){
         if(err){
            console.log(err)
         }
         else{
            console.log('success full written')
            fs.readFile(filename,'utf8',function(err,content){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(content)
                }
            })
         }
      })
    }
    else{
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                console.log(err)
            }
            else{
                console.log('previous file data is ')
                console.log(data)
                fs.appendFile(filename,txt,function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log('after apending the text file is')
                        fs.readFile(filename,'utf8',function(err,data1){
                            if(err){
                                console.log(err)
                            }
                            else
                            {
                                console.log(data1)
                            }
                        })
                    }
                })
            }
        })
        
    }
})