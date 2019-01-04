if( $("#map").length > 0 ) {

    ymaps.ready(init);

    var myMap,
        myPlacemark,
        leftCoord,
        rigthCoord;

        leftCoord = 60.030036;
        rigthCoord = 30.335698;

    function init(){   
        myMap = new ymaps.Map("map", {
            center: [leftCoord, rigthCoord],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([leftCoord, rigthCoord], { 
            hintContent: 'Автогамаки для собак', 
            balloonContent: ''
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [37, 57],
            iconImageOffset: [0, -70]
        });

        myMap.behaviors
        .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

        myMap.geoObjects.add(myPlacemark);

        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('zoomControl');
        myMap.behaviors.disable(['scrollZoom']);

    }

}