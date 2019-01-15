import {
  testByRule1,
  testByRule2,
  testByRule3,
  testByRule4,
  testByRule5,
  testByRule6,
  validate,
  getAmount,
  calculate,
  validateAmountLimit
} from './index';

describe("# testByRule1 function test => format 18.215", () => {
  it('Expect to be true', () => {
    expect(testByRule1("18.215")).toBe(true)
    expect(testByRule1("18.215.000")).toBe(true)
    expect(testByRule1("180.215.000")).toBe(true)
    expect(testByRule1("1.234.567.890")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule1("18..215")).toBe(false)
    expect(testByRule1("18,215")).toBe(false)
    expect(testByRule1("18 215")).toBe(false)
    expect(testByRule1(".215")).toBe(false)
    expect(testByRule1("0.215")).toBe(false)
    expect(testByRule1("1802.15")).toBe(false)
    expect(testByRule1("018.215")).toBe(false)
    expect(testByRule1("18.2151")).toBe(false)
  });
});

describe("# testByRule2 function test => format Rp17500", () => {
  it('Expect to be true', () => {
    expect(testByRule2("Rp17500")).toBe(true)
    expect(testByRule2("Rp 17500")).toBe(true)
    expect(testByRule2("Rp1234567890")).toBe(true)
    expect(testByRule2("Rp1")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule2("Rp")).toBe(false)
    expect(testByRule2("Rp  17500")).toBe(false)
    expect(testByRule2("3000 Rp")).toBe(false)
    expect(testByRule2("Rp0")).toBe(false)
    expect(testByRule2("Rp100 000")).toBe(false)
  });
});

describe("# testByRule3 function test => format Rp17.500,00", () => {
  it('Expect to be true', () => {
    expect(testByRule3("Rp17.500,00")).toBe(true)
    expect(testByRule3("Rp 17.500,00")).toBe(true)
    expect(testByRule3("Rp1.234.567.890,00")).toBe(true)
    expect(testByRule3("Rp1,00")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule3("Rp")).toBe(false)
    expect(testByRule3("Rp  17.500,00")).toBe(false)
    expect(testByRule3("Rp 17 500,00")).toBe(false)
    expect(testByRule3("Rp 17 500 00")).toBe(false)
    expect(testByRule3("Rp01.500,00")).toBe(false)
    expect(testByRule3("Rp1234.567,00")).toBe(false)
    expect(testByRule3("Rp123.4567,00")).toBe(false)
    expect(testByRule3("Rp123.567,000")).toBe(false)
    expect(testByRule3("Rp123.567,12")).toBe(false)
  });
});

describe("# testByRule4 function test => format Rp 120.325", () => {
  it('Expect to be true', () => {
    expect(testByRule4("Rp 120.325")).toBe(true)
    expect(testByRule4("Rp120.325")).toBe(true)
    expect(testByRule4("Rp 1.234.567.890")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule4("Rp")).toBe(false)
    expect(testByRule4("Rp 120 325")).toBe(false)
    expect(testByRule4("Rp 120,325")).toBe(false)
    expect(testByRule4("Rp  120.325")).toBe(false)
    expect(testByRule4("Rp 020.325")).toBe(false)
    expect(testByRule4("Rp 1200.325")).toBe(false)
    expect(testByRule4("Rp 120.3250")).toBe(false)
  });
});

describe("# testByRule5 function test => format 005.000", () => {
  it('Expect to be true', () => {
    expect(testByRule5("005.000")).toBe(true)
    expect(testByRule5("012.345.678.900")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule5("000005.000")).toBe(false)
    expect(testByRule5("000.005.000")).toBe(false)
  });
});

describe("# testByRule6 function test => format 001000", () => {
  it('Expect to be true', () => {
    expect(testByRule6("001000")).toBe(true)
    expect(testByRule6("0000001000")).toBe(true)
    expect(testByRule6("00000001")).toBe(true)
    expect(testByRule6("0123456789")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(testByRule6("asdads")).toBe(false)
    expect(testByRule6("qwdd123")).toBe(false)
    expect(testByRule6("123q")).toBe(false)
  });
});

describe("# validate function test", () => {
  it('Expect to equal result obj -> positive case', () => {
    const result = {
      isValid: true,
      message: ''
    }
    expect(validate("18.215")).toEqual(result)
    expect(validate("Rp17500")).toEqual(result)
    expect(validate("Rp17.500,00")).toEqual(result)
    expect(validate("Rp 120.325")).toEqual(result)
    expect(validate("005.000")).toEqual(result)
    expect(validate("001000")).toEqual(result)
    expect(validate("999999999999")).toEqual(result)
    expect(validate("Rp234.567.890.123.456,00")).toEqual(result)
  });

  it('Expect to equal result obj -> negative case 1', () => {
    const result = {
      isValid: false,
      message: 'Your input exceed maximum limit (15 digits)'
    }
    expect(validate("1234567890123456")).toEqual(result)
    expect(validate("Rp1.234.567.890.123.456,00")).toEqual(result)
  });

  it('Expect to equal result obj -> negative case 2', () => {
    const result = {
      isValid: false,
      message: 'Your input is not fulfill any existing format'
    }
    expect(validate("qwdqadasda")).toEqual(result)
  });
});

describe("# getAmount function test", () => {
  it('Expect to be true', () => {
    expect(getAmount("18.215")).toBe(18215)
    expect(getAmount("Rp17500")).toBe(17500)
    expect(getAmount("Rp17.500,00")).toBe(17500)
    expect(getAmount("Rp 120.325")).toBe(120325)
    expect(getAmount("005.000")).toBe(5000)
    expect(getAmount("001000")).toBe(1000)
  });
});

describe("# calculate function should return a correct output", () => {
  it('Expect to be true', () => {
    expect(calculate(186650)).toBe('1x Rp100000, 1x Rp50000, 1x Rp20000, 1x Rp10000, 1x Rp5000, 1x Rp1000, 1x Rp500, 1x Rp100, 1x Rp50')
    expect(calculate(186665)).toBe('1x Rp100000, 1x Rp50000, 1x Rp20000, 1x Rp10000, 1x Rp5000, 1x Rp1000, 1x Rp500, 1x Rp100, 1x Rp50, left Rp15')
    expect(calculate(1)).toBe('left Rp1')
    expect(calculate(50)).toBe('1x Rp50')
    expect(calculate(51)).toBe('1x Rp50, left Rp1')
    expect(calculate(25000001)).toBe('250x Rp100000, left Rp1')
    expect(calculate(1000000000000)).toBe('10000000x Rp100000')
    expect(calculate(999999999999)).toBe('9999999x Rp100000, 1x Rp50000, 2x Rp20000, 1x Rp5000, 4x Rp1000, 1x Rp500, 4x Rp100, 1x Rp50, left Rp49')
  });
});

describe("# validateAmountLimit function test", () => {
  it('Expect to be true', () => {
    expect(validateAmountLimit("999999999999999")).toBe(true)
  });
  
  it('Expect to be false', () => {
    expect(validateAmountLimit("9999999999999999")).toBe(false)
  });
});