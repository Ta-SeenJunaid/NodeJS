const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!!!!!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('This is timer');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
},1000);

console.log('This is not async');
console.log('Hi from sync');