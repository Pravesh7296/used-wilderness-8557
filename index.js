qr=JSON.parse(localStorage.getItem("cart"))||[]

let Api="https://fakestoreapi.com/products"
fetchdata()

async function fetchdata(){
    try {
    
        re= await fetch(Api)
        res=await re.json()
        display(res)
        display1(res)
        display2(res)
        // console.log(res)
    } catch (error) {
        console.log(error)
    }
}

function display(pr){
    main2=document.getElementById("main2")
for(let i=0;i<4;i++){
    
    di=document.createElement("div")
    image=document.createElement("img")
    title=document.createElement("h3")
    price=document.createElement("h3")
    desc=document.createElement("p")
    
 
    image.src=pr[i].image
    title.innerHTML=pr[i].category
    price.innerHTML= "price:-"+"$"+pr[i].price
    desc.innerHTML="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

    button=document.createElement("button")
    button.innerHTML="Add to cart"
    button.addEventListener("click",function(){
        // qr=JSON.parse(localStorage.getItem("cart"))||[]
        flag=true;
        if(qr.length==0){
          pr[i].quantity=1
          qr.push(pr[i])
          alert("Product Added To Cart")
          localStorage.setItem("cart",JSON.stringify(qr))
        }
        
        else   {
          
          for(let j=0;j<qr.length;j++){
            if(pr[i].id==qr[j].id){
              alert("Product Already in Cart")
              flag=false;
              break;
            }
          }
        
            if(flag==true){
              alert("Product Added To Cart")
              pr[i].quantity=1
              qr.push(pr[i])
              localStorage.setItem("cart",JSON.stringify(qr))
            }
            } 
        
      
            
        localStorage.setItem("cart",JSON.stringify(qr))       
    })     
    
    di.append(image,title,price,desc,button)
    
    main2.append(di)
    
}

}

function display1(pr){
    main3=document.getElementById("main3")
for(let i=5;i<9;i++){
    
    di=document.createElement("div")
    image=document.createElement("img")
    title=document.createElement("h3")
    price=document.createElement("h3")
    desc=document.createElement("p")
    button=document.createElement("button")

    image.src=pr[i].image
    title.innerHTML=pr[i].category
    price.innerHTML= "price:-"+"$"+pr[i].price
    desc.innerHTML="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

    button.innerHTML="Add to cart"
    button.addEventListener("click",function(){
        flag=true;
        if(qr.length==0){
          pr[i].quantity=1
          qr.push(pr[i])
          alert("Product Added To Cart")
          localStorage.setItem("cart",JSON.stringify(qr))
        }
        
        else   {
          
          for(let j=0;j<qr.length;j++){
            if(pr[i].id==qr[j].id){
              alert("Product Already in Cart")
              flag=false;
              break;
            }
          }
        
            if(flag==true){
              alert("Product Added To Cart")
              pr[i].quantity=1
              qr.push(pr[i])
              localStorage.setItem("cart",JSON.stringify(qr))
            }
            } 
        
        localStorage.setItem("cart",JSON.stringify(qr))
    })

    di.append(image,title,price,desc,button)
    
    main3.append(di)
    
}
}
function display2(pr){
    main4=document.getElementById("main4")
for(let i=5;i<10;i++){
    
    di=document.createElement("div")
    image=document.createElement("img")
    title=document.createElement("h3")
    price=document.createElement("h3")
    desc=document.createElement("p")
    button=document.createElement("button")

    image.src=pr[i].image
    title.innerHTML=pr[i].category
    price.innerHTML= "price:-"+"$"+pr[i].price
    desc.innerHTML="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

    button.innerHTML="Add to cart"
    button.addEventListener("click",function(){
        flag=true;
    if(qr.length==0){
      pr[i].quantity=1
      qr.push(pr[i])
      alert("Product Added To Cart")
      localStorage.setItem("cart",JSON.stringify(qr))
    }
    
    else   {
      
      for(let j=0;j<qr.length;j++){
        if(pr[i].id==qr[j].id){
          alert("Product Already in Cart")
          flag=false;
          break;
        }
      }
    
        if(flag==true){
          alert("Product Added To Cart")
          pr[i].quantity=1
          qr.push(pr[i])
          localStorage.setItem("cart",JSON.stringify(qr))
        }
        } 
        
        localStorage.setItem("cart",JSON.stringify(qr))
    })

    di.append(image,title,price,desc,button)
    
    main4.append(di)
    
}
}