window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //получаем элементы со страницы
    let tab = document.querySelectorAll('.info-header-tab'),
		//alps = document.getElementById('alps'),
		tabLine = document.querySelectorAll('.info-header-tab:after'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


	//функция, скрывающая tab путем добавления класса hide
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
			//tabLine[i].classList.remove('show');
            //tabLine[i].classList.add('hide');
        }
    }

	//скрываем tab, начиная с индекса 1 ( с индексом 0 не скрываем - это первый tab, мы его хотим показывать)
    hideTabContent(1);

	//функция, показывающая tab - проверяет, содержится ли класс hide, удаляет его и добавляет класс show
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
			//tabLine[b].classList.remove('hide');
            //tabLine[b].classList.add('show');
        }
    }

	//по клику на раздел табов скрываем все табы и показываем тот, который соотвествует индексу выбранного таба
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //делегируем событие click "обертке" табов
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //condition tab index matches [i]
					console.log(tabLine);
					//document.getElementById('alps:after').style.width = '80%';
                    hideTabContent(0); // hide all tabs, starting from 0
                    showTabContent(i); //show specific tab with the same index
                    break;
                }
            }
        }

    });
});