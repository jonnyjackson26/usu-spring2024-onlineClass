const defaultLoanAmount=450000
const defaultAnnualInterestRate=5.3
const defaultNumberOfYears=30;

let loanAmountElement= document.getElementById('loanAmount');
let annualInterestRateElement= document.getElementById('annualInterestRate');
let numberOfYearsElement= document.getElementById('numberOfYears');
let monthlyPaymentMessageElement = document.getElementById('monthlyPaymentMessage');

loanAmountElement.value=defaultLoanAmount;
annualInterestRateElement.value=defaultAnnualInterestRate;
numberOfYearsElement.value=defaultNumberOfYears;

loanAmountElement.addEventListener('blur', () => {
    if(loanAmountElement.value=="") {
        loanAmountElement.value=defaultLoanAmount;
    }
})
annualInterestRateElement.addEventListener('blur', () => {
    if(annualInterestRateElement.value=="") {
        annualInterestRateElement.value=defaultAnnualInterestRate;
    }
})
numberOfYearsElement.addEventListener('blur', () => {
    if(numberOfYearsElement.value=="") {
        numberOfYearsElement.value=defaultNumberOfYears;
    }
})

setMonthlyPaymentMessage();

numberOfYearsElement.addEventListener('input', () => {
    if(isNaN(numberOfYearsElement.value)) {
        monthlyPaymentMessageElement.innerHTML="Make sure you only put in numbers for the number of years.";
    } else {
        setMonthlyPaymentMessage();
    }
});
annualInterestRateElement.addEventListener('input', () => {
    if(isNaN(annualInterestRateElement.value)) {
        monthlyPaymentMessageElement.innerHTML="Make sure you only put in numbers for the number of years.";
    } else {
        setMonthlyPaymentMessage();
    }
});
loanAmountElement.addEventListener('input', () => {
    if(isNaN(loanAmountElement.value)) {
        monthlyPaymentMessageElement.innerHTML="Make sure you only put in numbers for the number of years.";
    } else {
        setMonthlyPaymentMessage();
    }
});



function setMonthlyPaymentMessage() {
    let loanAmount=parseFloat(loanAmountElement.value);
    let annualInterestRate=parseFloat(annualInterestRateElement.value);
    let numberOfYears=parseFloat(numberOfYearsElement.value);
    let monthlyInterestRate=(annualInterestRate/100)/12;
    let n=numberOfYears*12;
    let monthlyMortgagePayment=loanAmount*((monthlyInterestRate*Math.pow(1+ monthlyInterestRate, n))/(Math.pow(1+ monthlyInterestRate, n)-1));

    monthlyPaymentMessageElement.innerHTML=`Monthly Payment: $${monthlyMortgagePayment.toFixed(2)}`;
}