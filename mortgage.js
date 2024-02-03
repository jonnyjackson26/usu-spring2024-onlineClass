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

setMonthlyPaymentMessage();

addEventListeners(numberOfYearsElement);
addEventListeners(annualInterestRateElement);
addEventListeners(loanAmountElement);

function addEventListeners(whichElement) {
    whichElement.addEventListener('input', () => {
        setMonthlyPaymentMessage();
    });
    whichElement.addEventListener('blur', () => {
        if(whichElement.value=="") {
            whichElement.value=defaultNumberOfYears;
            setMonthlyPaymentMessage();
        }
    })
}


function setMonthlyPaymentMessage() {
    if(isNaN(numberOfYearsElement.value) || numberOfYearsElement.value=='' || isNaN(loanAmountElement.value) || loanAmountElement.value=='' || isNaN(annualInterestRateElement.value) || annualInterestRateElement.value=='') {
        monthlyPaymentMessageElement.innerHTML="Make sure all your values are numerical.";
    } else {
        let loanAmount=parseFloat(loanAmountElement.value);
        let annualInterestRate=parseFloat(annualInterestRateElement.value);
        let numberOfYears=parseFloat(numberOfYearsElement.value);
        let monthlyInterestRate=(annualInterestRate/100)/12;
        let n=numberOfYears*12;
        let monthlyMortgagePayment=loanAmount*((monthlyInterestRate*Math.pow(1+ monthlyInterestRate, n))/(Math.pow(1+ monthlyInterestRate, n)-1));

        monthlyPaymentMessageElement.innerHTML=`Monthly Payment: $${monthlyMortgagePayment.toFixed(2)}`;
    }
}