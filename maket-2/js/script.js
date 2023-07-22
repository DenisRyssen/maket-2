"use strict"

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}
//Основная ф-я
function initRatings() {
    let ratingActive, ratingValue;
    //бегаем по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
//Инициализация конкретного рейтинга
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        
        if (rating.classList.contains(`rating_set`)) {
            setRating(rating);
        }
    }
//Инициализация переменных
    function initRatingVars(rating) {

        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');


    }

    //Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;

    }
    //Возможность указать оценку
function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');

    for (let index = 0; < ratingItems.length; index++) {

        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function(e) {
        //Обновление переменных
            initRatingVars(rating);
            //Обновление активных звезд
            setRatingActiveWidth(ratingItem.value);

        });
        ratingItem.addEventListener("mouseenter", function(e) {

            //Обновление переменных
            initRatingVars(rating);
            //Обновление активных звезд
            setRatingActiveWidth(ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", function(e) {

            setRatingActiveWidth();


        });

        ratingItem.addEventListener("click", function(e) {

            initRatingVars(rating);

            if (rating.dataset.ajax) {
                //отправь на сервер
                setRatingValue(ratingItem.value, rating);
            } else {
                //Отобразить указанную оценку
                ratingValue.innerHTML = index + 1;
                setratingActiveWidth();
            }
            });
    }
}

}