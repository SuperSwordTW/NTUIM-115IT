function prepare(foodName, time){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${foodName} is served.`)
            resolve();
        }, time);
    });
}

const foods = [
    { name: "蛋糕", time: 1000 },
    { name: "漢堡", time: 2000 },
    { name: "薯條", time: 1500 }
];

async function order(foods){
    foods.forEach(async item => {
        console.log(`Preparing: ${item.name}.`);
        await prepare(item.name, item.time);
    });
}

order(foods);