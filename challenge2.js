/**
 * Challenge 2: Given the following max binary heap trees, create a function called maxValue() that returns the
VALUE of the largest number in the tree.
*/
class MaxBinaryHeap{
    constructor(){
        this.values = []; 
    }

    insert(element){
        //1. insert element into the array
        this.values.push(element);
        this.bubbleUp()
    }
        //2. create a bubbleUp function to swap between parent and child nodes, in case the inserted node is greater than the parent. 
    bubbleUp(){
        //- accessing the element just added to the last
        let index = this.values.length-1; 
        let element = this.values[index]

        // using while loop to keep it going as long as index > 0
        while(index>0){
            // get parent node formula
            const parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]

            // when element > parent node, break out the loop
            if(element < parent) break;

            //otherwise, swap element and parent by reassigning value
            this.values[parentIndex] = element;
            this.values[index] = parent;
            //swap index with parent index 
            index = parentIndex;
        }    
    }

    maxValue(){
        let maxValue =this.values[0]
        if(this.values.length){
            //largest value = root
            return maxValue;
        }else{
            return null;
        }

    }

}

let maxHeap = new MaxBinaryHeap()

maxHeap.insert(9)
maxHeap.insert(10)
maxHeap.insert(14)
maxHeap.insert(17)
console.log(maxHeap)