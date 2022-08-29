const games = ['Football', 'Cricket', 'Swiming'];

for (let game of games){
    console.log(game);
};

console.log(games.map(game => 'game: ' + game ));
console.log(games)

const copiedArray = [...games]
console.log(copiedArray)

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));


const [game1, game2] = games;
console.log(game1, game2)
