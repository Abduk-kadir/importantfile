const { json } = require("express");
let express=require("express")
let fs=require('fs')
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

app.get('/shops',function(req,res){

    fs.readFile('shops.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            res.send(newdata)
        }
    })
})
app.post('/shops',function(req,res){
    let {body}=req;
    fs.readFile('shops.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err) 
        }
        else{
            let arr=JSON.parse(content)
            let maxid=arr.reduce((acc,curr)=>curr.shopId>acc?curr.shopId:acc,0)
            let newid=maxid+1
            console.log(newid)
            let newshop={...body,shopId:newid}
            arr.push(newshop)
            let newdata=JSON.stringify(arr)
            fs.writeFile('shops.txt',newdata,function(err){
                if(err){
                    res.status(404).send(err)
                }
                else{
                    res.send('data is written successfully')
                }
            })

        }
    })

})
app.get('/products',function(req,res){

    fs.readFile('products.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            res.send(newdata)
        }
    })
})
app.post('/products',function(req,res){
    let {body}=req;
    fs.readFile('products.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err) 
        }
        else{
            let arr=JSON.parse(content)
            let maxid=arr.reduce((acc,curr)=>curr.productId>acc?curr.productId:acc,0)
            let newid=maxid+1
            console.log(newid)
            let newprocuct={...body,productId:newid}
            arr.push(newprocuct)
            let newdata=JSON.stringify(arr)
            fs.writeFile('products.txt',newdata,function(err){
                if(err){
                    res.status(404).send(err)
                }
                else{
                    res.send('data is written successfully')
                }
            })

        }
    })

})


app.put("/products/:id",function(req,res){
    let {body}=req
    let {productId,productName,category,description}=body
    let {id}=req.params
    id=+id
   
    fs.readFile('products.txt','utf-8',function(err,data){
        if(err){
            res.status(404).send('error in file reading')
        }
        else{
            let arr=JSON.parse(data)
            let index=arr.findIndex(elem=>elem.productId==id)
           
            if(index>=0)
            {
                let product=arr[index]
                let preproductname=product.productName
                let preproductid=product.productId
                let newproduct={productId:preproductid,productName:preproductname,category:category,description:description}
                arr[index]=newproduct
                let data2=JSON.stringify(arr)
                fs.writeFile('products.txt',data2,function(err){
                if(err){
                    res.status(404).send(err)
                }
                else{
                   res.send(newproduct) 
                }
            })
            }
            else{
                res.status(404).send('product is not found for edit detail')
            }
           
            
            
        }
    })
})
app.get('/purchases',function(req,res){
    let {shop,product,sort}=req.query
    let arr1;
    let arr2;
    if(shop){
        arr1=shop.split(',')
    }
    if(product){
        arr2=product.split(',')
    }

    fs.readFile('purchases.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            let newarr=newdata.map(elem=>{
                return {shopId:elem.shopId,productid:elem.productid,quantity:elem.quantity,price:elem.price}
            })
             newarr=shop?newarr.filter(elem=>arr1.find(val=>val==elem.shopId)):newarr
            newarr=product?newarr.filter(elem=>arr2.find(val=>val==elem.productid)):newarr
          
            if(sort=='QtyAsc'){
             newarr.sort((elem1,elem2)=>elem1.quantity-elem2.quantity)
            }
            if(sort=='QtyDesc'){
             newarr.sort((elem1,elem2)=> -(elem1.quantity-elem2.quantity))
            }
            if(sort=='ValueAsc'){
             newarr.sort((elem1,elem2)=> (elem1.quantity*elem1.price)-(elem2.quantity*elem2.price))
            }
            if(sort=='ValueDesc'){
             newarr.sort((elem1,elem2)=>-((elem1.quantity*elem1.price)-(elem2.quantity*elem2.price)))
            }
            res.send(newarr)


            
           // res.send(newarr)
        }
    })
})

app.get('/purchases/shops/:id',function(req,res){

   let {id}=req.params
    fs.readFile('purchases.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            filterarr=newdata.filter(elem=>elem.shopId==id)
            res.send(filterarr)
        }
    })
})

app.get('/purchases/products/:id',function(req,res){

    let {id}=req.params
     fs.readFile('purchases.txt','utf-8',function(err,content){
         if(err){
             res.status(404).send(err)
         }
         else{
             let newdata=JSON.parse(content)
             filterarr=newdata.filter(elem=>elem.productid==id)
             res.send(filterarr)
         }
     })
 })
 app.get('/totalpurchase/shop/:id',function(req,res){

    let {id}=req.params
    fs.readFile('purchases.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            let newdata2=newdata.filter(elem=>elem.shopId==id)

            let val=newdata2.reduce((acc,curr)=>{
               let f=acc.findIndex(val=>val['productid']==curr['productid']) 
               if(f>-1){
                 let val=acc[f]
                    val.totalprice+=curr.price*curr.quantity
                    acc[f]=val
                 return acc
               }
               else{
                 return [...acc,{shopid:curr.shopId,productid:curr.productid,totalprice:curr.price*curr.quantity}]

               }

            },[])
           console.log(val)
            res.send(val)
        }
        
    })
      
    
})
app.get('/totalpurchase/product/:id',function(req,res){

    let {id}=req.params
    fs.readFile('purchases.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err)
        }
        else{
            let newdata=JSON.parse(content)
            let newdata2=newdata.filter(elem=>elem.productid==id)

            let val=newdata2.reduce((acc,curr)=>{
               let f=acc.findIndex(val=>val['shopId']==curr['shopId']) 
               if(f>-1){
                 let val=acc[f]
                    val.totalprice+=curr.price*curr.quantity
                    acc[f]=val
                 return acc
               }
               else{
                 return [...acc,{shopId:curr.shopId,totalprice:curr.price*curr.quantity}]

               }

            },[])
           console.log(val)
            res.send(val)
        }
        
    })
      
    
})
app.post('/purchases',function(req,res){
    let {body}=req;
    let {shopId,productid,price,quantity}=body
    price=+price;
    quantity=+quantity
    fs.readFile('purchases.txt','utf-8',function(err,content){
        if(err){
            res.status(404).send(err) 
        }
        else{
            let arr=JSON.parse(content)
            let maxid=arr.reduce((acc,curr)=>curr.purchaseId>acc?curr.purchaseId:acc,0)
            let newid=maxid+1
            let newpurchase={shopId:shopId,productid:productid,price:price,quantity:quantity,purchaseId:newid}
            arr.push(newpurchase)
            let newdata=JSON.stringify(arr)
            fs.writeFile('purchases.txt',newdata,function(err){
                if(err){
                    res.status(404).send(err)
                }
                else{
                    res.send('data is written successfully')
                }
            })

        }
    })

})

 
 