import React from 'react';

export const Data = () => {

    const url = 'http://localhost/rtu/rtu-api/public/index.php/api/categories';
    console.log(url);
    fetch(url).then(data => {            
        return data.json();
    }).then(
        weather_data => {
            //const forecastData = transformForecast(weather_data);
            console.log(weather_data);
            //modificar el estado con el resultado de la promise (fetch)
           // dispatch(setForecastData({city: payload, forecastData}));
        }
    );
}

