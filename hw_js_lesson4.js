// 1. За допомогою prompt дізнайтесь число, введене користувачем. 
// За допомогою if перевірте, чи число коректно перетворено з рядка. 
// У разі помилки виведіть повідомлення Виведіть парне число чи ні, використовуючи if.

// let numb = prompt ("Введіть число")
// if (isNaN(numb)){
//     alert ("Введіть будь-яке число цифрами")
// }else if (numb % 2 == 0){
//     alert ("Число парне")
// }else {
//     alert ("Число не парне")
// }






// 2. Запитайте у користувача текст і перевірте його на наявність некоректного слова 
// або кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки:
// "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не знайдено

// let someText = prompt("Напишіть якийсь текст")
// alert (someText.indexOf("abcdef" && "12345"))





// 3. Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" 
// за допомогою confirm, і зберігає відповіді в змінних.

// let message = confirm ("Підеш на вихідних у бар?") ? "На ранок буде боліти голова" : "Не будь таким нудним"
// alert (message)





// 4. Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте 
// стать користувача з допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")
// let a = confirm ("Ваша стать? \"Ок\"-жіноча; \"Відміна\"-чоловіча")
// if (a){
//     alert ("Ви жінка")
// }else {
//     alert ("Ви чоловік")
// }





// 5.Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір. 
// Використовуйте prompt, умови порівняння та alert.
// let a = prompt ("Ваш обсяг талії (у см)")

// if (a >= 66 && a <= 69){
//     alert ("Ваш розмір у міжнарожній системі виміру XS");
// }else if (a >= 70 && a <= 74){
//     alert ("Ваш розмір у міжнарожній системі виміру S");
// }else if (a >= 75 && a <= 78){
//     alert ("Ваш розмір у міжнарожній системі виміру M");
// }else if (a >= 79 && a <= 83){
//     alert ("Ваш розмір у міжнарожній системі виміру L");
// }else if (a >= 84 && a <= 89){
//     alert ("Ваш розмір у міжнарожній системі виміру XL");
// }else if (a >= 90 && a <= 94){
//     alert ("Ваш розмір у міжнарожній системі виміру XXL");
// }else if (a >= 95 && a <= 97){
//     alert ("Ваш розмір у міжнарожній системі виміру XXXL");
// }





// 6. Запитайте у користувача стать (confirm). 
// Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". 
// Використовуйте тернарний оператор.

// let a = confirm("Ваша стать: ok-чоловік, відміна-жінка") ? alert("Ви чоловік") : alert("Ви жінка")






// 7. Для завдання Number: age використовуючи АБО || вивести повідомлення 
// про помилку (alert) якщо користувач не введе вік або натисне скасування 
// (тобто prompt видасть порожній рядок або null, що інтерпретується 
// як false).

// let age = prompt ("Введіть ваш вік") || alert ("Помилка!")





// 8. За допомогою цього ж трюку (використання АБО для запуску альтернативи) 
// зробіть примхливого робота, який у confirm запитує "шопінг?", 
// а у разі відмови - виводити alert "ти - бяка".

// let question = confirm ("шопінг?") || alert ("ти - бяка")






// 9.Зробити те саме за допомогою if.

// let question = confirm ("шопінг?")
// if (!question){
//     alert ("ти - бяка")
// }





// 10. Попросіть користувача ввести ПІБ в три різні змінні. 
// Використовуючи АБО || додайте рядки за промовчанням, 
// які будуть зберігатися у внутрішніх змінних якщо користувач 
// ввів порожній рядок або натиснув "Скасувати". Наприклад, 
// якщо ви на кроці введення прізвища натиснете Escape, 
// прізвище буде "Іванов"

// let firstName = prompt('Твоє ім\'я? чи будеш Іван') || 'Іван'
// let secondName = prompt('Твоє по батькові? чи будеш Іванович') || 'Іванович'
// let thirdName = prompt('Твоє прізвище? чи будеш Іванов') || 'Іванов'
// alert(firstName + " " + secondName + " " + thirdName)





// 11. Зробіть те саме за допомогою if та else
// let firstName = prompt('Твоє ім\'я? чи будеш Іван')
// if (!firstName){
//     firstName = 'Іван'
// }
// let secondName = prompt('Твоє по батькові? чи будеш Іванович')
// if (!secondName){
//     secondName = 'Іванович'
// }
// let thirdName = prompt('Твоє прізвище? чи будеш Іванов')
// if (!thirdName){
//     thirdName = 'Іванов'
// }
// alert(firstName + " " + secondName + " " + thirdName)






// 12. Напишіть код, який запитує логін, перевіряє його на вірність, 
// якщо логін вірний, просить ввести пароль і перевіряє його. 
// В разі розбіжності логіну чи пароля виводити alert з текстом помилки. 
// У разі успішного логіну – alert з привітанням. 
// Правильні логін: admin та пароль: qwerty. Використовуйте 
// вкладені if та else.
// let login = "admin"
// let password = "qwerty"

// let userlogin = prompt ("Введіть логін")
// let userpassword = prompt ("Введіть пароль")
// if (userlogin !== login){
//     alert ('Ви ввели невірний логін')
// }else if (userpassword !== password){ 
//     prompt ('Ви ввели невірний пароль')
// }else{
//     if (userlogin === login && userpassword === password){
//         alert('Вітаю')
//     }
// }







// 13. -Попросіть користувача ввести валюту (наприклад, usd, eur, інші 
// валюти додати до смаку) за допомогою prompt.
// - Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
// - За допомогою декількох if та тернарного оператора всередині кожного 
// з if задайте змінну rate, визначальну курс конкретної валюти на купівлю 
// чи продаж. Зверніть увагу на місце оголошення змінної rate - вона 
// має бути доступна в коді після всіх цих if.
// - Попросіть користувача ввести суму на обмін
// - Порахуйте та виведіть результат шляхом множення або поділу на rate
// - Дайте можливість користувачеві вводити назви валют у будь-якому 
// регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)

// let usdToBuy = 35
// let eurToBuy = 40
// let usdToSale = 37
// let eurToSale = 42
// let summary

// let currency = prompt ('Введіть валюту (usd / eur)'.toLowerCase()) 
// if (currency === "usd" || currency === "eur"){
// let buyOrSale = confirm ('Купити або продати?')
// let rate = prompt ('Введіть суму на обмін:')
// if (buyOrSale){
//     summary = (currency === "usd" ? (usdToSale * rate) : (eurToSale * rate))
// }
// else{
//     summary = (currency === "usd" ? (rate * usdToBuy) : (rate * eurToBuy))
// }
// alert ("Результат: " + summary)
// }

// else {
//     alert ('Невірна валюта')
// }








// 14. Зробіть гру "камінь-ножиці-папір". Користувач вводить свій 
// варіант через prompt, програма генерує свій варіант через 
// Math.random() і виводить через alert. Наступний alert виводить 
// ім'я переможця чи "нічия"
// let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
// let computerResult = Math.random ()
// alert (computerResult)
// if (customResult === "к" || customResult === "н" || customResult === "б"){
// if (computerResult >= 0 && computerResult <= 0.33){
//     alert ("Комп\'ютер згенерував: камінь")
//     if (customResult === 'к') alert ('нічия')
//     else if (customResult === "н") alert ('ви програли')
//     else if (customResult === "б") alert ("ви перемогли")
// }
// if (computerResult > 0.33 && computerResult <= 0.66){
//     alert ("Комп\'ютер згенерував: ножиці")
//     if (customResult === 'н') alert ('нічия')
//     else if (customResult === "б") alert ('ви програли')
//     else if (customResult === "к") alert ("ви перемогли")
// }
// if (computerResult > 0.66 && computerResult <= 1){
//     alert ("Комп\'ютер згенерував: бумагу")
//     if (customResult === 'б') alert ('нічия')
//     else if (customResult === "к") alert ('ви програли')
//     else if (customResult === "н") alert ("ви перемогли")
// }
// }else{
//     alert('ввели невірне значення')
// }






// 15. Зробіть гру "камінь-ножиці-папір", як описано вище, 
// користуючись логічними операціями (&&, ||, !), не використовуючи 
// if. Завдання має бути вирішене одним виразом (окрiм декларування 
// змiнних - let та const не є виразами)

// let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
// let computerResult = Math.random()
// let result

// ((customResult === 'к' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'н' && computerResult > 0.66) || (customResult === 'б' && computerResult <= 0.33)) ? result = 1 : ((customResult === 'б' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'к' && computerResult > 0.66) || (customResult === 'н' && computerResult <= 0.33)) ? result = 0 : result = 2

// alert("Комп'ютер викинув: " + computerResult)

// result == 0 ? alert('Ви програли') : (result == 1 ? alert("Ви перемогли") : alert("Нічия"))


// //16.

// let TaskName = prompt(`Введіть назву завдання, щоб запустити його код:
//                         1. Number: odd
//                         2. String: lexics
//                         3. Boolean
//                         4. Boolean: if
//                         5. Comparison: sizes
//                         6. Ternary
//                         7. Training
//                         8. Prompt: or
//                         9. Confirm: or this days
//                         10. Confirm: if this days
//                         11. Default: or
//                         12. Default: if
//                         13. Login and password
//                         14. Currency exchange
//                         15. Scissors
//                         16. Black belt`)

// if (TaskName === "Number: odd" || 
//     TaskName === "String: lexics" || 
//     TaskName === "Boolean" || 
//     TaskName === "Boolean: if" ||
//     TaskName === "Comparison: sizes" || 
//     TaskName === "Ternary" || 
//     TaskName === "Training" || 
//     TaskName === "Prompt: or" || 
//     TaskName === "Confirm: or this days" || 
//     TaskName === "Confirm: if this days" || 
//     TaskName === "Default: or" || 
//     TaskName === "Default: if" || 
//     TaskName === "Login and password" || 
//     TaskName === "Currency exchange" || 
//     TaskName === "Scissors" || 
//     TaskName === "Black belt"
//     ) {

// if (TaskName === "Number: odd") { //1
//     let numb = prompt ("Введіть число")
//     if (isNaN(numb)){
//      alert ("Введіть будь-яке число цифрами")
//     }
//     else if (numb % 2 == 0){
//         alert ("Число парне")
//     }
//     else {
//         alert ("Число не парне")
//     }
// }

// if (TaskName === "String: lexics") { //2
//     let someText = prompt("Напишіть якийсь текст")
//     alert (someText.indexOf("abcdef" && "12345"))
// }

// if (TaskName === "Boolean") { //3
//     let message = confirm ("Підеш на вихідних у бар?") ? "На ранок буде боліти голова" : "Не будь таким нудним"
//     alert (message)
// }

// if (TaskName === "Boolean: if") { //4
//     let a = confirm ("Ваша стать? \"Ок\"-жіноча; \"Відміна\"-чоловіча")
//     if (a){
//         alert ("Ви жінка")
//     }
//     else {
//         alert ("Ви чоловік")
//     }
// }

// if (TaskName === "Comparison: sizes") { //5
//     let a = prompt ("Ваш обсяг талії (у см)")

//     if (a >= 66 && a <= 69){
//         alert ("Ваш розмір у міжнарожній системі виміру XS");
//     }
//     else if (a >= 70 && a <= 74){
//         alert ("Ваш розмір у міжнарожній системі виміру S");
//     }
//     else if (a >= 75 && a <= 78){
//         alert ("Ваш розмір у міжнарожній системі виміру M");
//     }
//     else if (a >= 79 && a <= 83){
//         alert ("Ваш розмір у міжнарожній системі виміру L");
//     }
//     else if (a >= 84 && a <= 89){
//        alert ("Ваш розмір у міжнарожній системі виміру XL");
//     }
//     else if (a >= 90 && a <= 94){
//        alert ("Ваш розмір у міжнарожній системі виміру XXL");
//     }
//     else if (a >= 95 && a <= 97){
//        alert ("Ваш розмір у міжнарожній системі виміру XXXL");
//     }
// }

// if (TaskName === "Ternary") { //6
//     let a = confirm("Ваша стать: ok-чоловік, відміна-жінка") ? alert("Ви чоловік") : alert("Ви жінка")
// }

// if (TaskName === "Training") { //7
//     let age = prompt ("Введіть ваш вік") || alert ("Помилка!")
// }

// if (TaskName === "Prompt: or") { //8
//     let question = confirm ("шопінг?") || alert ("ти - бяка")
// }

// if (TaskName === "Confirm: or this days") { //9
//     let question = confirm ("шопінг?")
//     if (!question){
//      alert ("ти - бяка")
//     }
// }

// if (TaskName === "Confirm: if this days") { //10
//     let question = confirm ("шопінг?")
//     if (!question){
//         alert ("ти - бяка")
//     }
// }

// if (TaskName === "Default: or") { //11
//     let firstName = prompt('Твоє ім\'я? чи будеш Іван')
//     if (!firstName){
//        firstName = 'Іван'
//     }
//     let secondName = prompt('Твоє по батькові? чи будеш Іванович')
//     if (!secondName){
//        secondName = 'Іванович'
//     }
//     let thirdName = prompt('Твоє прізвище? чи будеш Іванов')
//     if (!thirdName){
//        thirdName = 'Іванов'
//     }
//     alert(firstName + " " + secondName + " " + thirdName)
// }

// if (TaskName === "Default: if") { //12
//     let firstName = prompt('Твоє ім\'я? чи будеш Іван')
//     if (!firstName){
//         firstName = 'Іван'
//     }
//     let secondName = prompt('Твоє по батькові? чи будеш Іванович')
//     if (!secondName){
//        secondName = 'Іванович'
//     }
//     let thirdName = prompt('Твоє прізвище? чи будеш Іванов')
//     if (!thirdName){
//         thirdName = 'Іванов'
//     }
//     alert(firstName + " " + secondName + " " + thirdName)
// }

// if (TaskName === "Login and password") { //13
//     let userlogin = prompt ("Введіть логін")
//     let userpassword = prompt ("Введіть пароль")
//     if (userlogin !== login){
//         alert ('Ви ввели невірний логін')
//     }
//     else if (userpassword !== password){ 
//         prompt ('Ви ввели невірний пароль')
//     }
//     else{
//         if (userlogin === login && userpassword === password){
//             alert('Вітаю')
//         }
//     }
// }

// if (TaskName === "Currency exchange") { //14
//     let usdToBuy = 35
//     let eurToBuy = 40
//     let usdToSale = 37
//     let eurToSale = 42
//     let summary

//     let currency = prompt ('Введіть валюту (usd / eur)'.toLowerCase()) 
//     if (currency === "usd" || currency === "eur"){
//     let buyOrSale = confirm ('Купити або продати?')
//     let rate = prompt ('Введіть суму на обмін:')
//     if (buyOrSale){
//      summary = (currency === "usd" ? (usdToSale * rate) : (eurToSale * rate))
//     }
//     else{
//        summary = (currency === "usd" ? (rate * usdToBuy) : (rate * eurToBuy))
//     }
//     alert ("Результат: " + summary)
//     }

//     else {
//         alert ('Невірна валюта')
//     }
// }

// if (TaskName === "Scissors") { //15
// let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
// let computerResult = Math.random ()
// alert (computerResult)
// if (customResult === "к" || customResult === "н" || customResult === "б"){
// if (computerResult >= 0 && computerResult <= 0.33){
//     alert ("Комп\'ютер згенерував: камінь")
//     if (customResult === 'к') alert ('нічия')
//     else if (customResult === "н") alert ('ви програли')
//     else if (customResult === "б") alert ("ви перемогли")
// }
// if (computerResult > 0.33 && computerResult <= 0.66){
//     alert ("Комп\'ютер згенерував: ножиці")
//     if (customResult === 'н') alert ('нічия')
//     else if (customResult === "б") alert ('ви програли')
//     else if (customResult === "к") alert ("ви перемогли")
// }
// if (computerResult > 0.66 && computerResult <= 1){
//     alert ("Комп\'ютер згенерував: бумагу")
//     if (customResult === 'б') alert ('нічия')
//     else if (customResult === "к") alert ('ви програли')
//     else if (customResult === "н") alert ("ви перемогли")
// }
// }else{
//     alert('ввели невірне значення')
// }
// }

// if (TaskName === "Black belt") { //16
//     let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
//     let computerResult = Math.random()
//     let result

//     ((customResult === 'к' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'н' && computerResult > 0.66) || (customResult === 'б' && computerResult <= 0.33)) ? result = 1 : ((customResult === 'б' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'к' && computerResult > 0.66) || (customResult === 'н' && computerResult <= 0.33)) ? result = 0 : result = 2

//     alert("Комп'ютер викинув: " + computerResult)

//     result == 0 ? alert('Ви програли') : (result == 1 ? alert("Ви перемогли") : alert("Нічия"))
//     }
// }

// else {
//     alert('Завдання з таким ім\'ям не існує')
// }
