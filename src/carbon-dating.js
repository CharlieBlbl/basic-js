const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = true

  if(typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 ) ){
    return false
  }

  result = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD))
  



  return result
};
