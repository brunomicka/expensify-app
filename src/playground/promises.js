const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        //reject('Something went wrong!');
    }, 1500);
});

promise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// promise.then((data) => {
//     console.log(data);
// },(error) => {
//     console.log(error);
// });
