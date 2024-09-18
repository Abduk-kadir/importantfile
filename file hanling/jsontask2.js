let fs=require('fs');
let readline=require('readline-sync')
let data={A:0,B:0}

let filename='data2.json'

function writejson(){
    let strform=JSON.stringify(data)
    fs.writeFile(filename,strform,function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('data is written successfully')
        }
    })
}
function readjson(){
    fs.readFile(filename,'utf-8',function(err,content){
        if(err){
            console.log(err)
        }
        else{
            console.log(JSON.parse(content))
        }
    })
}
function increment(){
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            console.log(err)
        }
        else{
            let newjs=JSON.parse(data)
            newjs.A+=1;
            newjs.B+=1;
            let data1=JSON.stringify(newjs)
            fs.writeFile(filename,data1,function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log('data is updated successfully')
                }
            })
        }
    })
}
function decrement(){
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            console.log(err)
        }
        else{
            let newjs=JSON.parse(data)
            newjs.A-=1;
            newjs.B-=1;
            let data1=JSON.stringify(newjs)
            fs.writeFile(filename,data1,function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log('data is updated successfully')
                }
            })
        }
    })
}

let option=readline.question('enter option')
switch(option){
    case "1":
     writejson();
     break;
    case "2":readjson() ;
    break;
    case "3":increment();
    break; 
    case "4":decrement();
    break; 
 }