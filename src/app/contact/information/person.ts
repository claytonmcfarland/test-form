
export class person {
    private name: string;
    private email: string;

    constructor(n: string, e: string){
        this.name = n;
        this.email = e;
    }

    get Name(){
        return this.name;
    }

    get Email(){
        return this.email;
    }
}