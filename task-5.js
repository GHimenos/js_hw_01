/*Задание 5
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. Но доставка есть не везде,
если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов*/

let input = prompt('Укажите страну доставки').toLowerCase().split('');
input[0]=input[0].toUpperCase();
input = input.join('');

let price = [150,250,165, 90, 130];
let country = ['Китай','Чили','Австралия','Индия','Ямайка'];

switch (input) {
    case country[0]:
        alert(`Доставка в ${input} будет стоить ${price[0]} кредитов`);
        break;
    case country[1]:
        alert(`Доставка в ${input} будет стоить ${price[1]} кредитов`);
        break;
    case country[2]:
        alert(`Доставка в ${input} будет стоить ${price[2]} кредитов`);
        break;
    case country[3]:
        alert(`Доставка в ${input} будет стоить ${price[3]} кредитов`);
        break;
    case country[4]:
        alert(`Доставка в ${input} будет стоить ${price[4]} кредитов`);
        break;
    default: alert('В вашей стране доставка не доступна');
}