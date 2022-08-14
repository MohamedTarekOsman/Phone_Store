var allProducts = document.querySelectorAll(".list li");
var content = document.querySelector("#content");
var btn =document.querySelector("#addToCart");
var totalPrice = 0;

allProducts.forEach(function(item)
{
    item.onclick=function(){
        totalPrice += parseInt(item.getAttribute("price"));
        content.innerHTML +=(" + "+item.textContent +"&nbsp &nbsp &nbsp");
        if(content.innerHTML != "")
        {
            btn.style.display="block";
        }
        
    }
}

);

btn.onclick=function(){
    alert("Total price: "+totalPrice +" LE");
};