let target;
let MutationRate;
let populationLimit;
let population;

function setup() {
    target = "helloworld";
    MutationRate = 0.01;
    populationLimit = 300;

    population = new population(target, MutationRate, populationLimit);
}

function draw() {
    population.naturalSelection();
    population.check();
    if(population.completed)
        noLoop();
}