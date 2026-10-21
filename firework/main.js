function delay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

async function countDown(){
    for (let i = 10; i >= 1; i--){
        console.log(i);
        await delay();
    }
    console.log("發射煙火");
}

countDown();