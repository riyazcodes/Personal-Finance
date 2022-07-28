
let netIncome = 85000;
let standardDeduction=12550;
let fouroOneK= 6000
let otherDeductions = 00;
let deductions= standardDeduction + fouroOneK + otherDeductions;
let taxableIncome= netIncome-deductions;


function calcTaxes(taxableIncome) {
    let unadressedMoney=taxableIncome
    let taxAmt = 0;
    let myTaxBracket= 0
    const bracket= [10275,41775,89075,170050,215950,539900];
    const rates = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];
    for (let i=0;taxableIncome>bracket[i];i++) {
    unadressedMoney-=bracket[i]; taxAmt += (bracket[i]*rates[i]); myTaxBracket++};
    taxAmt += (unadressedMoney*rates[myTaxBracket]);

    console.log('Your Taxable Income is ' + taxableIncome + '.' +
    ' The Taxes you owe are ' + taxAmt + '.' +
    ' Your Unaddessed Money is ' + unadressedMoney + ', and that is being taxed in bracket ' + myTaxBracket + '.')

}
function calcTaxes2(taxableIncome) {
    let unadressedMoney=taxableIncome
    let taxAmt = 0;
    let myTaxBracket= 0
    const bracket= [9950,40525,72450,170050,215950,539900];
    const rates = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];
    for (let i=0;taxableIncome>=bracket[i];i++) {
    taxAmt += (bracket[i]*rates[i]); myTaxBracket++};
    taxAmt += ((taxableIncome-bracket[myTaxBracket])*rates[myTaxBracket]);

    console.log('Your Taxable Income is ' + taxableIncome + '.' +
    ' The Taxes you owe are ' + taxAmt + '.' +
    ' Your Unaddessed Money is ' + unadressedMoney + ', and that is being taxed in bracket ' + myTaxBracket + '.')

}  
   
calcTaxes2(taxableIncome);

