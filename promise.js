console.log("Hello");

//  Synchronous vs Asynchronous code - Js runs Synchronous code first, then Asynchronous code

console.log("First");
    
setTimeout(()=>{
    console.log("middle");
},1000);

console.log("last");


//  Promise - Basic example of promise 

console.log("Start");

const sub = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let result = true;
        if(result) resolve ("It was resolved")
            else reject(new Error("not resolved"))
    },1000)

});


sub.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.error(err);
})


console.log("End");

//  Promise Chaining - 

console.log("Shuru")

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (`Subscribe to ${username}`);
      }, 1000);
  })
}

function likeTheVideo(video) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Like the ${video} video`);
      }, 1000);
})
}

function shareTheVideo(video) {
return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve(`Share the ${video} video`);
      }, 1000);
})
};

//  Promise Chaining - to execute the promises - 

// importantAction("Chirag").then((res) => {
//     console.log(res);
//     return likeTheVideo("Javascript");
// }).then((res)=>{
//     console.log(res);
//     return shareTheVideo("Chirag javascript");
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// });


//  Promise Combinator- to execute the promises - 

        // 1 - Promise.all([]) - 

// Promise.all([importantAction("Chirag"),
// likeTheVideo("Javascript"),
// shareTheVideo("Chirag javascript")
// ]).then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.error("Error : not resloved");
// })

        // 2- Promise.race([]) - 

// Promise.race([importantAction("Chirag"),
//     likeTheVideo("Javascript"),
//     shareTheVideo("Chirag javascript")
//     ]).then((res)=>{
//         console.log(res);
    
//     }).catch((err)=>{
//         console.error("Error : not resloved");
//     });

        // 3- Promise.allSettled([]) - 

// Promise.race([importantAction("Chirag"),
//     likeTheVideo("Javascript"),
//     shareTheVideo("Chirag javascript")
//     ]).then((res)=>{
//         console.log(res);
    
//     }).catch((err)=>{
//         console.error("Error : not resloved");
//     });

        // 4 - Promise.any([]) - 

// Promise.any([importantAction("Chirag"),
//     likeTheVideo("Javascript"),
//     shareTheVideo("Chirag javascript")
//     ]).then((res)=>{
//         console.log(res);
    
//     }).catch((err)=>{
//         console.error("Error : not resloved");
//     });
    

//  await and async - the best approach to execute the promises -  


const result = async () => {
    try{
        const message1 = await importantAction("Chirag");
        console.log(message1);
        const message2 = await likeTheVideo("Javascript");
        console.log(message2);
        const message3 = await shareTheVideo("Chirag javascript");
        console.log(message3);
    }
    catch(error){
        console.log(new Error ("promise rejected"),error);

    }

    
};

result();


 console.log("Aant")

 