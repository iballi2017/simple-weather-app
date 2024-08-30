"use client";
import axios from 'axios';
import React, { useState } from 'react';
import DataIcon from '../components/dataIcon';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather]: any = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]: any = useState(null);
    const [imageUrl, setImageUrl] = useState('https://openweathermap.org/img/wn/10d@2x.png');
    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`
            );
            console.log("response: ", response);
            setWeather(response.data);
        } catch (err) {
            setError('City not found or API error.');
        }
        setLoading(false);
    };


    const handleInputChange = (e: any) => {
        setCity(e.target.value);
    };


    const handleSearch = (e: any) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeather();
        }
    };


    const convert_date = (dt: number) => {
        const yearList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const timestamp = dt;
        const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
        // console.log(date.toString());


        const year = date.getFullYear();
        return yearList[date.getMonth()] + ", " + year
    }

    return (
        <>
            <h1 className='mb-8 font-bold text-2xl'>City Weather</h1>
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-400 text-sm'>{error}</p>}
            {weather && (
                <div className='mt-8 mb-4'>
                    <h2 className='font-semibold text-3xl'>{weather.name}</h2>
                    <p>{convert_date(weather.dt)}</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <div>
                        <DataIcon desc={weather.weather[0].description} />
                    </div>
                    <p>Weather: {weather.weather[0].description} </p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
            <form onSubmit={handleSearch}>
                <div className="flex">
                    <input type="text"
                        value={city}
                        onChange={handleInputChange} className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter city" />
                    <button type='submit' className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Search
                    </button>
                </div>
            </form>
        </>

    );
}


export default Weather;
