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
            if(this.genes[i] == target.charAt(i))
                this.fitness++;
    }

    crossover(Y) {
        let XY = new DNA(this.genes.length);
        let mid = floor(this.genes.length/2);
        for(let i = 0;i < this.genes.length;i++) {
            if(i <= mid)
                XY.genes[i] = this.genes[i];
            else
                XY.genes[i] = Y.genes[i];
        }
        return XY;
    }

    mutate(rate) {
        for(let i = 0;i < this.genes.length;i++)
            if(random(0,1) <= rate)
                this.genes[i] = String.fromCharCode(floor(random(65, 91)));
    }
}