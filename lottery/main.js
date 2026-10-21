function prize(odds){
    return new Promise((resolve, reject) => {
        let timeSpent = 0;
        const timePerPull = 1000;
        const maxTimeAllowed = 10000;

        const pull = setInterval(() => {
            timeSpent += timePerPull;
            if (Math.random() < odds){
                resolve("恭喜中獎");
                clearInterval(pull);
            }
            if (timeSpent >= maxTimeAllowed){
                reject(new Error('連線逾時'));
                clearInterval(pull);
            }

        }, 1000);
    });
}

async function play(odds){
    await prize(odds)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error.message);
        });
}

play(0.01);