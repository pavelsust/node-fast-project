

export class ConnectionCount{

    constructor() {
        this.count = 0
    }

    showCount(){
        return this.count++
    }
}