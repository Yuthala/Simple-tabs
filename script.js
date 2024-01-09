window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //получаем элементы со страницы и "кладем" их в переменные
    let tab = document.querySelectorAll('.info-header-tab'), //хедеры табов
        info = document.querySelector('.info-header'), //wrapper для всех хедеров (чтобы можно было изменять количество табов без изменения кода = делегирование события click оболочке)
        tabContent = document.querySelectorAll('.info-tabcontent'); // табы, содержащие контентную часть 


	//функция, скрывающая tab путем добавления класса hide
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) { //условие, что пока i < количества табов
            tabContent[i].classList.remove('show'); //убираем класс show у текущего таба
            tabContent[i].classList.add('hide'); //добавляем текущему табу класс hide
			tab[i].classList.remove('active'); //убираем класс active у псевдоэлемента названия таба
        }
    }

	//скрываем tab, начиная с индекса 1 ( с индексом 0 не скрываем - это первый tab, мы его хотим показывать)
    hideTabContent(1);

	//функция, показывающая tab - проверяет, содержится ли класс hide, удаляет его и добавляет класс show
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { //если у таба есть класс hide
            tabContent[b].classList.remove('hide');//убираем этот класс hide
            tabContent[b].classList.add('show'); //добавляем класс show
			tab[b].classList.add('active');//добавляем класс active псевдоэлементу названия таба
        }
    }

	//по клику на раздел табов скрываем все табы и показываем тот, который соотвествует индексу выбранного таба
    info.addEventListener('click', function(event) {
        let target = event.target; //вводим локальную переменную
        if (target && target.classList.contains('info-header-tab')) { //делегируем событие click "обертке" табов
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //если выбран таб с индексом [i]
                    hideTabContent(0); // прячем все табы, начиная с первого ([0])
                    showTabContent(i); //показываем таб с соответствующим индексом ([i])
                    break;
                }
            }
        }

    });
});