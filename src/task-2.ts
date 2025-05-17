// Завдання:
// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.


type Currency = "USD" | "EUR" | "UAH";

type CurrencyConventor = {
    amount: number;
    currency: Currency;
}

function convertCurrency({amount, currency}: CurrencyConventor): void{
    console.log(`Converting ${amount} to ${currency}`);
}
  

convertCurrency({ amount: 100, currency: "USD" });
