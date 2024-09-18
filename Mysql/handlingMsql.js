let mysql=require('mysql')
let connectionData=
    {
        host:"localhost",
        user:"root",
        password:"1994",
        database:"testDb"
    }

function showPersons(){
    let connection=mysql.createConnection(connectionData)
    let sql="select * from persons"
    connection.query(sql,function(err,result){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function showPersonbyName(name){
    let connection=mysql.createConnection(connectionData)
    let sql="select * from persons where name=?"
    connection.query(sql,name,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function insertPerson(params){
    let connection=mysql.createConnection(connectionData)
    let sql="insert into persons(name,age) values(?,?)"
    connection.query(sql,params,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result.insertId)
            let sql="select * from persons"
           connection.query(sql,function(err,result){
           if(err)
           {
            console.log(err)
           }
        else{
            console.log(result)
          }
         })

        }
    })

}
function insertMultiplePersons(params){
    let connection=mysql.createConnection(connectionData);
    let sql="insert into persons(name,age) values ? "
    connection.query(sql,[params],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function updatePerson(id){
    let connection=mysql.createConnection(connectionData)
    let sql="update persons set age=age+1 where id=?"
    connection.query(sql,id,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function changeAge(id,age){
    let connection=mysql.createConnection(connectionData)
    let sql="update persons set age=? where id=?"
    connection.query(sql,[age,id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function resetData(){
    let connection=mysql.createConnection(connectionData)
    let sql="delete from persons"
    connection.query(sql,function(err,result){
        if(err){

        }
        else{
        console.log('deletaion happen successfully and affected rows is',result.effectedRows)
        let {persons}=require('./personsData.js')
        let arr=persons.map(p=>[p.name,p.age])
        console.log(arr)
        let sql2="insert into persons(name,age) values ?"
        connection.query(sql2,[arr],function(err,result){
            if(err){
                console.log(err)
            }
            else{
                console.log(result)
            }
        })
        

        }
    })
    
}

//showPersons()
//showPersonbyName('kadir')
//updatePerson(4)
//changeAge(5,30)
//resetData();

//insertPerson(["rahul",6])
/*insertMultiplePersons(
    [
        ["jeenat",5],
        ["sonali",70]
    ]
)*/
