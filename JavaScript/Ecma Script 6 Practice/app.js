//High Order Function
// function abc(){
//     alert("Hello");
//     return function(){
//         alert("World");
//     }
// }
// abc()();

//Lamda Function 
// var abc = (num) => num * 3;
// alert(abc(4)); 
// var addition = (a) => (b) => a+b;
// alert(addition(5)(6));

//Generator Function
// function *abc(){
//     let name = yield "What is your name";
//     let age = yield "What is your age";
//     return `${name} age is ${age}`; 
// }
// let it = abc();
// console.log(it.next());
// console.log(it.next("Abubaker"));
// console.log(it.next("19"));

//Confirmation Dialog Box
// function abc(){
//     var a = confirm("Do you want to continue");
//     if(a==true){
//         alert("user want to continue")
//     }
//     else{
//         alert("Canceled");
//     }
// }

//Promises
// var check = false;
// var pro = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         if(check){
//             resolve("Won the match");
//         }
//         else{
//             reject("Failed");
//         }
//     },1000)
// })
// pro.then(function(won){
//     alert("You " + won);
// }).catch(function(error){
//     alert("You " + error);
// })

//Fetch
// var mainDiv = document.getElementById("news");
// var api = "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=59c4c2dfa63e44379dd520b8049fb002";
// fetch(api)
//     .then(function(success){
//         return success.json();
//     })
//     .then(function(data){
//         let article = data.articles;
//         for(var key in article){
//             mainDiv.innerHTML +=
//                 "<h2>" + article[key].title + "</h2>"
//                 +"<img src='" + article[key].urlToImage + "'" +"/>"
//                 +"<p>" + article[key].description  +"</p>"
//         }
//     })
//     .catch(function(error){
//         console.log(error);
//     })

//Async & Await
    