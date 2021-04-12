/* Задание 6
Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.
Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
let input;
let total = 0;.*/

let total = false;
let inputStr = 1;

for (let input = total; inputStr!==null; total+=input){
    input = prompt('Введите число');
    inputStr = input;
    let inputIsNum = Number(input)/2;
    inputIsNum = !isNaN(inputIsNum);
    switch (inputIsNum) {
        case true:
            input=Number(input);
            break;
        case false:
            for(inputIsNum===false;inputIsNum !==true;input=Number(input)){
                input = prompt(`Вы ввели не число, введите число`);
                inputIsNum = Number(input)/2;
                inputIsNum = !isNaN(inputIsNum);
            }
            break
    }
}
alert(`Общая сумма чисел равна ${total}`);