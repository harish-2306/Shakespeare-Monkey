class DNA {
    constructor(len) {
        this.genes = [];
        this.fitness;

        for(let i = 0;i < len;i++)
            this.genes[i] = String.fromCharCode(floor(random(65, 91)));
    }

    calcFitness(target) {
        this.fitness = 0;
        for(let i = 0;i < this.genes.length;i++)
            if(this.genes[i] == target[i])
                this.fitness++;
        this.fitness /= this.genes.length;
    }
}