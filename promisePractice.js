//1-fetch the data from api using promise async/await
/*async function getallusers() {
    try {
       const response=await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json()
       console.log(data); 
    } catch (error) {
        console.log(error);
    }
}
getallusers();*/

//2-fetch the data from api using promise .then.catch.finally
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
