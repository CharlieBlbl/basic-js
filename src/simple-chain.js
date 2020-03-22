const chainMaker = {
  chains: [],
  getLength() {
    this.chains.length
    return this
  },
  addLink(value) {
    if(value === undefined && value === null){ this.chains.push('')}
    else {this.chains.push(value)}  
    return this   
  },
  removeLink(position) {
   if(position - 1 < 0 || position > this.chains.length || isNaN(position)){
    this.chains = [] 
    throw new Error()
   }else {
    this.chains.splice(position-1, 1)
     return this
   }
  },
  reverseChain() {
    this.chains = this.chains.reverse()
    return this
  },
  finishChain() {
    let result = ''
    this.chains.forEach(el =>{
      result += `( ${el} )~~`
    })
    this.chains = []
    return result.slice(0, -2)
  }
};

module.exports = chainMaker;
