 const contents=document.querySelectorAll(".content")
 const hamburgerMenu=document.querySelector(".hamburger-menu")
 const menus=document.querySelector(".menus")


 contents.forEach(content=>{
     let innerHTML=content.innerHTML
     if(innerHTML.length>250) {
         content.innerHTML=innerHTML.substring(0,250) + `  <a class="more" href="">see more</a>`
     }
     content.addEventListener("click",e=>{
       if(e.target.classList.contains("more")) {
           e.preventDefault()
           e.target.parentElement.innerHTML=innerHTML + `  <a class="less" href="">see less</a>`
       }
     })
     content.addEventListener("click",e=>{
        if(e.target.classList.contains("less")) {
            e.preventDefault()
            e.target.parentElement.innerHTML=innerHTML.substring(0,250) + `  <a class="more" href="">see more</a>`
        }
      })
 })

 hamburgerMenu.addEventListener("click",()=>{
   if(menus.classList.contains("menu-animation")) {
    hamburgerMenu.children[0].classList.remove("hamburger-animation","fa-times")
    hamburgerMenu.children[0].classList.add("fa-bars")
    menus.classList.remove("menu-animation")
   
   }
   else {
       hamburgerMenu.children[0].classList.add("hamburger-animation","fa-times")
       hamburgerMenu.children[0].classList.remove("fa-bars")
       menus.classList.add("menu-animation")
       
   }
 })



