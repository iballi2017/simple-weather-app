"use client";
import axios from 'axios';
import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather]: any = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]: any = useState(null);
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


    return (
        <>
            <div className="w-full max-w-sm mx-auto">
                <h1 className='mb-8 font-bold text-2xl'>City Weather</h1>
                <form onSubmit={handleSearch}>
                    <div className="flex">
                        <input type="text"
                            value={city}
                            onChange={handleInputChange} className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter city" />
                        <button type='submit' className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-400 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                            Search
                        </button>
                    </div>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p className='text-red-400 text-sm'>{error}</p>}
                {weather && (
                    <div>
                        <h2>{weather.name}</h2>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>

        </>

    );
}

export default Weather;
