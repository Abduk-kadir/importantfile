let express=require("express")
let mysql=require('mysql')
let app=express()
app.use(express.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"

    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With ,Content-Type, Accept"

    );
    next();

   
});
const port=2410
app.listen(port,()=>console.log(`Node app is listinng${port}`))

let connData={
    host:"localhost",
    user:"root",
    password:"1994",
    database:"testDb"
}
 app.get('/svr/mobiles',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles'
    connection.query(sql,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
            res.send(result)
        }
    })
 })
 app.get('/svr/mobiles/:id',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles where id=?'
    let {id}=req.params
    connection.query(sql,id,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
            let mobile=result.find(elem=>elem.id==id)
            if(mobile){
                res.send(mobile)
            }
            else{
                res.send('no mobile find for this id')
            }
        }
    })

 })
 
 app.get('/svr/mobiles/brand/:brand',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles where brand=?'
    let {brand}=req.params
    connection.query(sql,brand,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
            let arr=result.filter(elem=>elem.brand==brand)
            res.send(arr)
        }
    })

 })
 app.post('/svr/mobiles',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles'
    let {body}=req
    connection.query(sql,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
           let sql2='insert into mobiles(brand,model,price) values(?,?,?)'
           let {brand,model,price}=body;
           let arr=[brand,model,price]
           connection.query(sql2,arr,function(err,result2){
            if(err){
                res.status(404).send(err)
            }
            else{
                let maxid=result.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0)
                let id=maxid+1
                res.send({...body,id:id})
            }

           })
        }
    })

 })
 app.put('/svr/mobiles/:id',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles'
    let {body}=req
    let {id}=req.params
    connection.query(sql,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
           let sql2='update mobiles set brand=?,model=?,price=? where id=?'
           let index=result.findIndex(elem=>elem.id==id)
           if(index>=0){
            let {brand,model,price}=body;
            let arr=[brand,model,price,id]
            connection.query(sql2,arr,function(err,result2){
                if(err){
                    res.status(404).send(err)
                }
                else{
                    
                    res.send({...body,id:id})
                }
            })

           }
           else{
            res.send('no mobile found for editing')
           }
          
            
        }
    })

 })

 app.delete('/svr/mobiles/:id',function(req,res){
    let connection=mysql.createConnection(connData)
    let sql='select * from mobiles'
    
    let {id}=req.params
    connection.query(sql,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
           let index=result.findIndex(elem=>elem.id==id)
           if(index>=0){
            let sql2='delete from mobiles where id=?'
            let mobile=result[index]
            connection.query(sql2,id,function(err,result2){
                if(err){
                    res.status(404).send(err)
                }
                else{
                    res.send(mobile)
                }
            })

           }
           else{
            res.send('no mobile found for deleting')
           }
          
            
        }
    })

 })

 app.get('/svr/resetData',function(req,res){
    let connection=mysql.createConnection(connData)
    let {mobiles}=require('./mobileData')
    let sql='delete from mobiles'
    connection.query(sql,function(err,result){
        if(err){
            res.status(404).send(err)
        }
        else{
            let arr=mobiles.map(elem=>[elem.brand,elem.model,elem.price])
            let sql2='insert into mobiles(brand,model,price) values ?'
            connection.query(sql2,[arr],function(err,result){
                if(err)
                {
                    res.status(404).send(err)
                }
                else{
                    res.send('data is reset successfuly')
                }
            })
        }
    })
   
          
    

 })



