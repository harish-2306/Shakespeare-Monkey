class population {
    constructor(target, mutationRate, populationLimit) {
        this.target = target;
        this.mutationRate = mutationRate;
        this.populationLimit = populationLimit;
        this.fitnessSum;

        this.newPopulation = [];
        this.population = [];
        for(let i = 0;i < this.populationLimit;i++) {
            population[i] = new DNA(this.target.length);
        }
        this.calcFitness();
    }

    calcFitness() {
        for(let i = 0;i < this.population.length;i++)
            this.population[i].calcFitness(this.target);
    }

    calcFitnessSum() {
        this.fitnessSum = 0;
        for(let i = 0;i < this.population.length;i++)
            this.fitnessSum += this.population[i].fitness;
    }

    getWeightedRandom() {
        let sum = Math.round(random(0, this.calcFitnessSum+1));
        let i;
        for(i = 0;i < this.population.length;i++) {
            sum -= this.population[i].fitness;
            if(sum <= 0)
                break;
        }
    }

    naturalSelection() {
        this.calcFitnessSum();
        for (let i = 0;i < this.population.length;i++) {
            let A = this.population[this.getWeightedRandom()];
            let B = this.population[this.getWeightedRandom()];
            this.newPopulation[i] = (A.crossover(B)).mutate(this.mutationRate);
        }

        for(let i = 0;i < this.population.length;i++)
            this.population[i] = this.newPopulation[i];
    }
}