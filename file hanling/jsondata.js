let fs=require('fs')
let readline=require('Readline-sync')
let filename='data.json'
let coursedata={
    course:"node corse",
    students:[
        {name:"jack",age:39},
        {name:'steve',age:20},
        {name:'anna',age:30},
    ]
}

function witeJsonData(){
    let str=JSON.stringify(coursedata)
    fs.writeFile(filename,str,function(err){
        if(err){
            console.log(err)
        }
    })
}

function appenedjson(){
    let name=readline.question('enter name');
    let age=readline.question('enter age');
    let newst={name:name,age:age}
    fs.readFile(filename,'utf-8',function(err,content){
        if(err){
            console.log(err)
        }
        else{
            let obj=JSON.parse(content)
            obj.students.push(newst)
            let data1=JSON.stringify(obj)
            fs.writeFile(filename,data1,function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log('json is updated')
                }

            })
        }
    })

}

function readjsondata(){
    fs.readFile(filename,'utf8',function(err,content){
        if(err){
            console.log(err)
        }
        else{
           
            console.log(JSON.parse(content))
        }
    })
}
let option=readline.question('enter option')
switch(option){
   case "1":
    witeJsonData();
    break;
   case "2":appenedjson() ;
   break;
   case "3":readjsondata();
   break; 
}