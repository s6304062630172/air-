const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"air-con"
})

//product
app.get('/product',(req,res)=>
{
    db.query("SELECT * FROM product",(err,result)=>
    {
        if(err)
        {
            console.log(err);

        }else
        {
            res.send(result);
        }
    });

});

app.post("/create", (req, res) => {

    const product_img =req.body.product_img;
    const product_name =req.body.product_name;
    const product_type =req.body.product_type;
    const product_brand =req.body.product_brand;
    const product_detail =req.body.product_detail;
    const product_price =req.body.product_price;
  
    db.query(
        "INSERT INTO product (product_img,product_name,product_type,product_brand,product_detail,product_price) VALUES(?,?,?,?,?,?) ",
      [ product_img,product_name,product_type,product_brand,product_detail,product_price],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });



app.delete('/delete/:product_id',(req,res)=>
{
    const product_id = req.params.product_id;
    db.query("DELETE FROM product WHERE product_id = ?",product_id,(err,result) => {
        if(err)
        {
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

//Quotation

app.get('/quotation',(req,res)=>
{
    db.query("SELECT * FROM quotation",(err,result)=>
    {
        if(err)
        {
            console.log(err);

        }else
        {
            res.send(result);
        }
    });

});

app.post("/create", (req, res) => {

    const phone_admin  =req.body.phone_admin;
    const address_user =req.body.address_user;
    const phone_user =req.body.phone_user;
    const date_  =req.body.date_;
    const annotation  =req.body.annotation;
    const title_quotation =req.body.title_quotation;
    const id_tax_user =req.body.id_tax_user;
    const id_tax_admin =req.body.id_tax_admin;

  
    db.query(
        "INSERT INTO quotation (title_quotation,date_,id_tax_user,id_tax_admin,annotation,phone_admin,phone_user,address_user) VALUES(?,?,?,?,?,?,?,?) ",
      [ title_quotation,date_,id_tax_user,id_tax_admin,annotation,phone_admin,phone_user,address_user],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });



app.delete('/delete/:no_quotation',(req,res)=>
{
    const no_quotation = req.params.no_quotation;
    db.query("DELETE FROM quotation WHERE no_quotation = ?",no_quotation,(err,result) => {
        if(err)
        {
            console.log(err);
        }else{
            res.send(result);
        }
    })
})




app.listen('3001',()=>
{
    console.log('server is running on port 3001');
}) 