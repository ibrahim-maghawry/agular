
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');

var productContainar ;

if(localStorage.getItem('products')==null){
  productContainar=[];
}else
{
  productContainar= JSON.parse(localStorage.getItem('products'));
  displayProduct(productContainar);
}






function addProduct() {
  if(validateProductName() == true)
 {
  var product = {
    proName:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value    
 
  }
  productContainar.push(product);
  localStorage.setItem("products",JSON.stringify(productContainar));
 
  displayProduct(productContainar)
  clearForm()
 }
 else{
   alert(`not validate`)

 }



}






function displayProduct (productlist ){
  var cartoona = ``;
  for(var i=0 ; i<productContainar.length;i++){
    cartoona +=`
    <tr >
    <td>${i}</td>
    <td>${productlist[i].proName}</td>
    <td>${productlist[i].price} </td>
    <td>${productlist[i].category}  </td>
    <td>${productlist[i].desc} </td>
    <td><button class="btn btn-warning">Update</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-danger ">Delete</button></td>
  </tr>`;
  }
  document.getElementById('tableRaw').innerHTML=cartoona;
}





function clearForm(){
  productNameInput.value=" ";
  productPriceInput.value=" ";
  productCategoryInput.value=" ";
  productDescInput.value=" ";

}



function deleteProduct(producIndex)
{
  productContainar.splice(producIndex,1);
  displayProduct(productContainar);
  localStorage.setItem("products",JSON.stringify(productContainar));
}



function searchProduct(term){
  var searchProduct =[];
  for(var i =0;i<productContainar.length;i++){
    if(productContainar[i].name.toLowerCase().includes(term.toLowerCase())==true){
      searchProduct.push(productContainar[i])
      console.log(productContainar[i].name.toLowerCase().includes(term.toLowerCase()))
    }
  }
  displayProduct(searchProduct)
}




function validateProductName () {
   var regax = /^[A-Z][a-z]{3,8}$/;
    if(regax.test(productNameInput.value)==true)
   {
     return true;

   }else{
     return false ;
  }
}  


















console.log(/^[A-Z][a-z]{3,8}$/.test("Ahmed"))