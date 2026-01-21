const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#';
    for(let i=0;i<6;i++){
       color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
    
};

let intervalid;
const startChangingColor=function(){

    const chnageBgcolor=function(str){
        document.body.style.backgroundColor=randomcolor();
        console.log(str);
    }
    if(!intervalid){
        intervalid= setInterval(chnageBgcolor,1000,"hii");
    };
};

const stopChangingColor=function(){
    clearInterval(intervalid);
    intervalid=null;//for free memo
};

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);
