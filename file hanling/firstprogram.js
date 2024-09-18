let fs=require('fs')
function getStat(filename){
 console.log('status',filename)
fs.stat(filename,function(err,content){
    if(err){
        console.log(err)
    }
    else{
        console.log(content)
    }
  

})
}
function getAccess(filename){
    console.log('access',filename);
    fs.access(filename,function(err,content){
        err?console.log('file does not exit'):console.log('exit')
    })

}
function readFile(filename){
    console.log('read content of this file',filename)
    fs.readFile(filename,'utf8',function(err,content){
        err?console.log(err):console.log(content)
    })
}
function writefile(filename,data){
    console.log('write file')
    fs.writeFile(filename,data,function(err){
        if(err){
            console.log(err)
        }
    })
}
function appendfile(filename,data){
    console.log('append file',filename)
    fs.appendFile(filename,data,function(err){
        if(err){
            console.log(err)
        }
    })
}

filename='C:\\Users\\91914\\Desktop\\hello.txt'
data='helllo abdul'

//getStat(filename)
//getAccess(filename)
//writefile(filename,data)
//appendfile(filename,'this is my progrmming')
readFile(filename)
appendfile(filename,'rahul')
readFile(filename)
writefile(filename,'abdul')
readFile(filename)
