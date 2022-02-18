
function count(x){
    setInterval(()=>{
        new Promise((resolve, reject)=>{
            if(x>0){
              resolve(document.querySelector(".timer").innerText=x)
              
              
            }
            else if(x==0){
                resolve(document.querySelector(".timer").innerText="Happy Independence Day 🚩")
            }
        })
        x=x-1;
    },1000)
}
    
count(10)