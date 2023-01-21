function toggleNav()
{
    document.getElementById("t_button")
    .classList.toggle("active");
    document.getElementById('nav-items')
    .classList.toggle("active");
    console.log("this is toggle nav clicked ")
}


let nums = document.querySelectorAll('.count');
let section = document.getElementById('about');
let started = false;

window.onscroll = function(){
   
   console.log(section.offsetTop)
   if(window.scrollY >= section.offsetTop-200){
      console.log('yes')
      if(!started)
      {
         nums.forEach((num)=>{
            startCount(num)
         })
      }
      started = true;
   }
   else{
      started =false;
      
   }
  
}


function startCount(el)
{
   const goal = el.dataset.goal;
   el.textContent = 0;
   let count = setInterval(()=>{
      el.textContent++
     if(el.textContent == goal)
      {
         clearInterval(count)
      }
   }, 1000/goal)
} 

