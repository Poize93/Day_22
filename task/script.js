let x=1000;
let out
setTimeout(()=>{
    out=10
    const rtrn=document.querySelector(".countdown").innerText= out
    
    setTimeout(()=>{
        out=9
        const rtrn=document.querySelector(".countdown").innerText= out
        
        setTimeout(()=>{
            out=8
            const rtrn=document.querySelector(".countdown").innerText= out
            
            setTimeout(()=>{
                out=7
                const rtrn=document.querySelector(".countdown").innerText= out
                
                setTimeout(()=>{
                    out=6
                    const rtrn=document.querySelector(".countdown").innerText= out
                    
                    setTimeout(()=>{
                        out=5
                        const rtrn=document.querySelector(".countdown").innerText= out
                        
                        setTimeout(()=>{
                            out=4
                            const rtrn=document.querySelector(".countdown").innerText= out
                            
                            setTimeout(()=>{
                                out=3
                                const rtrn=document.querySelector(".countdown").innerText= out
                                
                                setTimeout(()=>{
                                    out=2
                                    const rtrn=document.querySelector(".countdown").innerText= out
                                    
                                    setTimeout(()=>{
                                        out=1
                                        const rtrn=document.querySelector(".countdown").innerText= out
                                        let i=0
                                        setInterval(()=>{
                                            document.body.style.backgroundColor=clr[i];
                                            i++
                                        },x/4)
                                        setTimeout(()=>{
                                            out="Happy Independence Day"
                                            
                                            const rtrn=document.querySelector(".countdown").innerText= out
                                          

                                            
                                        },x)
                                    },x)
                                },x)
                            },x)
                        },x)
                    },x)
                },x)
            },x)
        },x)
    },x)
},x)

let clr=["orange","white","green","blue"]

