var cart=[];
function getCart(newCart) {

 return cart;
}

function setCart(c) {
  cart = c;
  //return cart;
}

function addToCart(item) {
 // write your code here
 var price =Math.floor(Math.random()*100+1)*1;
 //var price=Math.random()*100;
 var s={};
 s[item]=price;
 cart.push(s);
//cart[item]=1;
 return item+' has been added to your cart.', cart;
 return cart;
}
function viewCart() {
var len =cart.length;
  var str ='In your cart, you have ';
  if(len===0){
  str='Your shopping cart is empty.';
 } 
 for (key in cart){
//console.log(key);
}
 for(var i=0 ;i<len;i++){
for (key in cart[i]){
console.log(key);
if(i===0){
str+=key+' at $'+cart[i][key];
}
 //console.log(cart[i]);
if(len==2 && i==1 ){
str+=' and '+key+' at $'+cart[i][key];
}
 if(len==3){
  if(i==1){
  str+=', '+key+' at $'+cart[i][key];
  }
  if(i==2){
  str+=' and '+key+' at $'+cart[i][key]+'.';
  }
 }
 //str+=
 }
 }
 return str;
console.log(str);
 }
function total() {
  var res=cart.reduce(function(sum,current){
 sum=sum+current;

  },0);
  return res;
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  if(cart.hasOwnProperty(item)){
var remove=  delete cart.item;
return remove;}
else {
  return 'That item is not in your cart.';
}
}

function placeOrder(cardNumber) {
  var sum=total();
  // write your code here
  if(!cardNumber){
  return 'Sorry, we don\'t have a credit card on file for you.';

}else{

  return 'Your total cost is $'+sum+', which will be charged to the card '+cardNumber+'.';
}
}