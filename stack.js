
/** the stack class will be used for only javascript base solution  */
class Stack {
    constructor(){
        this.items = []; 
    }

    /**insert an element */
    push(element){
        this.items.push(element); 
    }

    /** delete an element  */
    remove(){
        if(this.items > 0){
            return this.items.pop()
        }
    }

    /** get the topmost element */
    peek() {
        return this.items[this.items.length] - 1; //5[3] - 1
    }

    /**check for emptiness */
    isEmpty() {
        return this.items.length == 0;
    }

    /**clear all element */
    clear() {
        return this.items = []; 
    }
}