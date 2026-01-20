// var x=10;
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));
// console.log(x);


//filter
/*const arr=[1,2,3,4,5,6,7,8,9,10]

//explicitly mean {} or return must
const ans=arr.filter((nums)=>{ return nums>4});
console.log(ans);

//implicitly mean () ya kuch bh na
const an=arr.filter((nums)=>nums>4);
console.log(an);*/



//for each loop 
// forEach() हर element पर callback function चलाता है।
// यह कुछ भी return नहीं करता। यानी इसका return value हमेशा undefined होता है।
// इसका काम सिर्फ iteration करना है, कोई नया array या value बनाना नहीं।
/*const coding=["python",'java',"c","js"];
const values=coding.forEach((nums)=>{
    console.log(nums);
})
console.log(values);*/



//map (autometically return the values)

/*const coding1 = [1,2,3,4,5,6,7,8,9,10];
const value = coding1.map((nums) => {
    return nums*2;
});
console.log(value);*/

//chaining
/*const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums
                  .map((n)=> n*10)//iska res next map m ajayega
                  .map((n)=>n+1)
                  .filter((n)=>n>69)
console.log(newNums);*/




//exam of filter
/*const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);*/


//reduce(use when we buy couses or product from online shopiing to price add krna h mena h iye khridne pe iye price sare price reduce krke total dede ga)
const arr=[1,2,3,4];
//0+1+3+4
const intailcval=0;
const sumofN=arr.reduce((acc,currVal)=>(acc+currVal),intailcval);
console.log(sumofN);