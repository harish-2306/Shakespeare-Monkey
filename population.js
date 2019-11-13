class population {
    constructor(target, mutationRate, populationLimit) {
        this.target = target;
        this.mutationRate = mutationRate;
        this.populationLimit = populationLimit;

        this.population = [];
        for(let i = 0;i < this.populationLimit;i++) {
            population[i] = new DNA();
        }
    }
}