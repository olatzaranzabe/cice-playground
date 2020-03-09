export class Assigner {
    constructor(private readonly randomProvider: () => number){} 
    assign(names:string[]) {
        
        const assignedNames = names.map(name=> {
            let randomName = names[Math.floor(this.randomProvider() * (names.length ))]
            while(randomName === name){
                debugger;
                 randomName = names[Math.floor(this.randomProvider() * (names.length ))]  
            } 
            return { [name]: randomName }
        })
        return assignedNames;
    }
}