module.exports = function repeater(str, options) {
    let   repeatTimes = options.repeatTimes || 1
    let   separator = options.separator || '+'
    let   addition = options.addition !== undefined ?  options.addition : ''
    let   additionRepeatTimes = options.additionRepeatTimes || 1
    let   additionSeparator = options.additionSeparator || '|'
    
    const additionString = (new Array(additionRepeatTimes))
        .fill(`${addition}`)
        .join(additionSeparator)

    return resultString = (new Array(repeatTimes))
        .fill(`${str}${additionString}`)
        .join(separator)    
};
  