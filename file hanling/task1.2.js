let fs=require('fs')
let readline=require('Readline-sync');
let option=readline.question('enter option')
let filename=readline.question('enter file name')

switch(option){
    case 'create'||'reset':
        fs.writeFile(filename,'0',function(err){
            if(err){
                console.log(err)
            }
            else{
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
     break;
     
    case 'read':
        fs.readFile(filename,'utf8',function(err,content){
            if(err){
                console.log(err)
            }
            else{
                console.log(content)
            }
        }) 
        break;
    case 'increment':
        fs.readFile(filename,'utf8',function(err,content){
            if(err){
                console.log(err)
            }
            else{
                let newdata=+content;
                newdata+=1;
                newdata=newdata+''
                fs.writeFile(filename,newdata,function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
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
        })  
        break;
   case 'decrement':
    fs.readFile(filename,'utf8',function(err,content){
        if(err){
            console.log(err)
        }
        else{
            let newdata=+content;
            newdata-=1;
            newdata=newdata+''
            fs.writeFile(filename,newdata,function(err){
                if(err){
                    console.log(err)
                }
                else{
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
    })  

}