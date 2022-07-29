
let netIncome = 150000;
let standardDeduction=12550;
let fouroOneK= 6000
let otherDeductions = 0;
let deductions= standardDeduction + fouroOneK + otherDeductions;
let taxableIncome= netIncome-deductions;

function calcTaxes(taxableIncome) {
    let unadressedMoney=taxableIncome
    let taxAmt = 0;
    let myTaxBracket= 1
    const bracket= [9950,40525,86375,170050,215950,539900];
    const rates = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];
    if (unadressedMoney>9950) {taxAmt += bracket[0]*rates[0]}
      else (taxAmt += (unadressedMoney * rates[0]))
    for (let i=1;taxableIncome>=bracket[i];i++) {
    taxAmt += ((bracket[i]-bracket[i-1])*(rates[i])); myTaxBracket++};
    taxAmt += ((taxableIncome-bracket[myTaxBracket-1])*rates[myTaxBracket]);

    console.log('Your Taxable Income is ' + taxableIncome + '.' +
    ' You owe ' + taxAmt + 
    ' in taxes'+ ' and your highest tax bracket is bracket number ' + (myTaxBracket+1) + '. Goodluck.')

}  
   
calcTaxes(taxableIncome);

