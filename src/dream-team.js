module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){return false}

  let names = members
  
  names = names.map(el => { 
                          if (typeof el !== 'string' ){return ''}    
                          return el.trim().slice(0, 1).toUpperCase()
                      })              

  return names.sort().join('')
 
};