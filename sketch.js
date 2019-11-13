let target;
let MutationRate;
let populationLimit;
let population;

function setup() {
    target = "Hello World";
    MutationRate = 0.01;
    populationLimit = 300;

    population = new population(target, MutationRate, populationLimit);
}

function draw() {

}