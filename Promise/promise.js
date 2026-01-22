const { error } = require("console");
const { resolve } = require("path");
//1-way
/*const promiseone= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is complete");
         resolve()
    },1000)
})
promiseone.then(()=>{
    console.log("Promise consume");
   
})

//2-way
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is complete2");
         resolve({name:"ankit",email:"ankit@example.com"})
    },1000)

}).then((user)=>{//user m data resolve se pass hota h 
    console.log("Promise consume2",user);
})*/

//3 error handling 
/*const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({name:"ankit", password:"12345"})
        }else{
            reject("somethins went wrong");
        }
    },1000)
})


promise3
  .then((user) => {
    console.log("User object:", user);
    return { name: user.name, password: user.password }; // दोनों return
  })
  .then((data) => {
    console.log("Name:", data.name);
    console.log("Password:", data.password);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected");
  });
 

promise3.then((user)=>{
    console.log(user);
    return user.name;
}).then((name)=>{
    console.log(name);
}).catch(()=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise either resolve or rejected");
})*/



//5-promise via await/async
const promise5= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name:"ankit", password:"12345"})
        }else{
            reject("somethins went wrong");
        }
    },1000)
})

async function consumePromise5() {
    try {
        const response=await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();