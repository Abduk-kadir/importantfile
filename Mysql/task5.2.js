let mysql=require('mysql')

let connData={
    host:"localhost",
    user:"root",
    password:"1994",
    database:"testDb"
}

function insertallvalue(){
    let {products}=require('./productData.js')
    let connection=mysql.createConnection(connData)
    sql='insert into products(product,price,quantity,category) values ?'
    let arr=products.map(elem=>[elem.prod,elem.price,elem.quantity,elem.category])
    
    connection.query(sql,[arr],function(err,result){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function displayInTable(){
    let connection=mysql.createConnection(connData)
    let sql='select * from products'
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function displayByName(name){
    let connection=mysql.createConnection(connData)
    let sql='select * from products where product=?'
    connection.query(sql,name,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function displayByCategory(cat){
    let connection=mysql.createConnection(connData)
    let sql='select * from products where category=?'
    connection.query(sql,cat,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function displayByprice(val){
    let connection=mysql.createConnection(connData)
    let sql='select * from products where price>=?'
    connection.query(sql,val,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function insertAProduct(pr){
    let connection=mysql.createConnection(connData)
    let sql='insert into products(product,price,quantity,category) values(?,?,?,?)'
    connection.query(sql,pr,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

}
function increaseQuantity(name,quan){
    let connection=mysql.createConnection(connData);
    let sql='update products set quantity=quantity+? where product=?'
    connection.query(sql,[quan,name],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function decreaseQuantityby1(name){
    let connection=mysql.createConnection(connData);
    let sql='update products set quantity=quantity-1 where product=?'
    connection.query(sql,name,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}
function resetData(){
    let connection=mysql.createConnection(connData)
    let sql='delete from products'
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log('success fully deleted data')
            let {products}=require('./productData.js')
            sql='insert into products(product,price,quantity,category) values ?'
            let arr=products.map(elem=>[elem.prod,elem.price,elem.quantity,elem.category])
            
            connection.query(sql,[arr],function(err,result){
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


resetData()
//decreaseQuantityby1('pepsi')
//increaseQuantity('pepsi',4)
//insertAProduct(['parle-g',5,8,'Food'])
//displayByprice(30)
 //displayByCategory('food')
 //insertallvalue()
 //displayInTable();
 //displayByName('parle-g')