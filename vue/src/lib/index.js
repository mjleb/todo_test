// библиотека проекта siblink. 
import debugModule from './debugging'; // функции для режима тестирования и отладки 
import formsModule from './forms'; // функции проверки полей 

// 
export default {
    debug: debugModule(),
    forms: formsModule(),
}