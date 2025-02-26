// app.js

// 1. ფუნქცია, რომელიც ამოწმებს, არის თუ არა რიცხვი 10-ის ჯერადი
function isMultipleOfTen(num) {
    return num % 10 === 0;
}

// 2. ფუნქცია, რომელიც ითვლის ფასდაკლების შემდეგ გადასახდელ თანხას
function calculateDiscountPrice(price, discount) {
    return price - (price * (discount / 100));
}

// 3. ფუნქცია, რომელიც აბრუნებს ვალუტის შესაბამის სიმბოლოს
function getCurrencySymbolFromCode(currencyCode) {
    const symbols = {
        USD: '$',
        EUR: '€',
        GEL: '₾'
    };
    return symbols[currencyCode] || 'Unknown currency code';
}

// 4. ფუნქცია, რომელიც აბრუნებს სტრინგს პატარა ასოებით
function toLowerCaseString(str) {
    return str.toLowerCase();
}

// 5. ფუნქცია, რომელიც აბრუნებს ლუწი რიცხვების მასივს
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 6*. ფუნქცია, რომელიც პოულობს ყველაზე იაფ პროდუქტს
function findCheapestProduct(products) {
    return products.reduce((cheapest, product) => 
        product.price < cheapest.price ? product : cheapest, products[0]);
}

// 7*. ფუნქცია, რომელიც პოულობს ობიექტს title ველით
function findProductByTitle(products, title) {
    return products.find(product => product.title === title);
}
