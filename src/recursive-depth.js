module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr instanceof Array){
            return arr.length === 0 ? 1 : Math.max(...arr.map(el => this.calculateDepth(el))) + 1
        } 
        
        return 0
        
    }
};