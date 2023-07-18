let title= document.getElementById('title');
let price= document.getElementById('price');
let ads= document.getElementById('ads');
let taxes= document.getElementById('taxes');
let discount= document.getElementById('discount');
let total= document.getElementById('total');
let count= document.getElementById('count');
let category= document.getElementById('category');
let submit= document.getElementById('submit');

function gettotal()
{
    if(price.value != ""){
     let result=(+price.value+ +ads.value+ +taxes.value)- +discount.value;
    total.innerHTML= result;
    total.style.background="rgb(247, 131, 131)";}
else {
total.innerHTML='';
total.style.background="rgb(126, 171, 189)";}
}
    
    function cleardata(){
            title.value="";
            price.value="";
            ads.value="";
            taxes.value="";
            discount.value="";
            total.innerHTML="";
            count.value="";
        category.value="";
        }
        
 
let datapro;
if (localStorage.product != null)
{
    datapro=JSON.parse(localStorage.product)
}
else{
    datapro=[];
}
submit.onclick=function(){
let newpro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    category:category.value,
    count:count.value}

datapro.push (newpro);
localStorage.setItem("product", JSON.stringify(datapro) )
showdata();
}

function showdata(){
    let table="";
    for( let i=0;i<datapro.length;i++)
    {
        table +=
            <tr>
              <td>${i}</td>
              <td>${datapro[i].title}</td>
              <td>${datapro[i].price}</td>
              <td>${datapro[i].ads}</td>
              <td>${datapro[i].taxes}</td>
              <td>${datapro[i].discount}</td>
              <td>${datapro[i].count}</td>
              <td>${datapro[i].category}</td>
              <td><button id="update">update</button></td>
              <td><button id="delete">delete</button></td>
            </tr> 
            
    }
 document.getElementById("tboby").innerHTML= table;
}
 showdata();