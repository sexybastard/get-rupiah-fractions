const rupiahFractions = [ 100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50 ]

const getAmount = (input) => {
  input = input.replace(',00', '')
  input = input.match(/\d/g).join('')
  input = parseInt(input)

  return input
}

const calculate = (amount) => {
  let index = 0, usedFractions = [], lastFraction = 0, recurringFraction = 0, keepGoing = true

  // Check if amount multiplied by the bigest recurring fraction
  if(amount >= rupiahFractions[0]){
    let occurence = parseInt(amount / rupiahFractions[0])
    let remaining = amount - occurence * rupiahFractions[0]
    usedFractions.push(occurence + 'x Rp' + rupiahFractions[0])
    amount = remaining
  }

  // Process the remaining amount after deducted by a potential big portion that multiplied by the bigest fraction 
  while(keepGoing){
    if(amount >= rupiahFractions[index]){
      if(lastFraction === 0){
        lastFraction = rupiahFractions[index]
        recurringFraction++
      }
      else if(rupiahFractions[index] === lastFraction){
        recurringFraction++
      }
      else{
        usedFractions.push(recurringFraction + 'x Rp' + lastFraction)
        
        lastFraction = rupiahFractions[index]
        recurringFraction = 1
      }
      amount -= rupiahFractions[index]
    }
    else if(index < (rupiahFractions.length - 1)){
      index++
    }
    else{
      if(recurringFraction > 0){
        usedFractions.push(recurringFraction + 'x Rp' + lastFraction)  
      }
      
      if(amount > 0){
        usedFractions.push('left Rp' + amount)
      }

      keepGoing = false
    }
  }

  return usedFractions.join(', ')
};

// regex match to this kind of format -> 18.215
const testByRule1 = (input) => {
  return /^[1-9][0-9]{0,2}(\.[0-9]{3})*$/.test(input)
}

// regex match to this kind of format -> Rp17500
const testByRule2 = (input) => {
  return /^(Rp)\s{0,1}[1-9][0-9]*$/.test(input)
}

// regex match to this kind of format -> Rp17.500,00
const testByRule3 = (input) => {
  return /^(Rp)\s{0,1}[1-9][0-9]{0,2}(\.[0-9]{3})*(,00)$/.test(input)
}

// regex match to this kind of format -> Rp 120.325
const testByRule4 = (input) => {
  return /^(Rp)\s{0,1}[1-9][0-9]{0,2}(\.[0-9]{3})*$/.test(input)
}

// regex match to this kind of format -> 005.000
const testByRule5 = (input) => {
  return /^[0-9]{1,2}[1-9]+(\.[0-9]{3})+$/.test(input)
}

// regex match to this kind of format -> 001000
const testByRule6 = (input) => {
  return /^[0-9]+$/.test(input)
}

// regex match to limit the amount's limit to be 15 digits
const validateAmountLimit = (input) => {
  input = input.replace(',00', '')
  input = input.match(/\d/g)
  if (input) {
    input = parseInt(input.join(''))
    return /^[0-9]{1,15}$/.test(input)
  }
  else {
    return true
  }
}

// Main validate function
const validate = (input) => {
  let validateResponse = {}

  if( !validateAmountLimit(input) ) {
    validateResponse = {
      isValid: false,
      message: 'Your input exceed maximum limit (15 digits)'
    }
  }
  else if( !(testByRule1(input) || testByRule2(input) || testByRule3(input) || testByRule4(input) || testByRule5(input) || testByRule6(input)) ) {
    validateResponse = {
      isValid: false,
      message: 'Your input is not fulfill any existing format'
    }
  }
  else {
    validateResponse = {
      isValid: true,
      message: ''
    }
  }

  return validateResponse
};

export { calculate, validate, testByRule1, testByRule2, testByRule3, testByRule4, testByRule5, testByRule6, getAmount, validateAmountLimit }