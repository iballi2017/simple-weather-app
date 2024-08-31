"use client";
import axios from 'axios';
import React, { useState } from 'react';
import DataIcon from '../../components/dataIcon';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';

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
            // console.log("response: ", response);
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
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        return yearList[date.getMonth()] + ", " + year
    }

    return (
        <>
            {/* Title */}
            <Header title="City Weather" />
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-400 text-sm'>{error}</p>}
            {weather && (
                <div className='mt-8 mb-4 flex flex-col gap-2' data-testId="details-card">
                    <h2 className='font-semibold text-3xl'>{weather.name}, {weather.sys.country}.</h2>
                    <p className='text-xs text-gray-400'>{convert_date(weather.dt)}</p>
                    <div className='flex items-center'>
                        <DataIcon desc={weather.weather[0].description} />
                        <div className='text-4xl font-semibold'>{weather.main.temp}<span className="text-xs">°C</span> </div>
                    </div>
                    <p className='bg-[#FEE3BC]/75 shado-sm p-4 text-sm rounded-lg'>Weather: {weather.weather[0].description} </p>
                    <p className='bg-[#FEE3BC]/75 shado-sm p-4 text-sm rounded-lg'>Humidity: {weather.main.humidity}%</p>
                    <p className='bg-[#FEE3BC]/75 shado-sm p-4 text-sm rounded-lg'>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
            {/* Search form */}
            <SearchForm handleSearch={handleSearch} city={city} handleInputChange={handleInputChange} />
        </>

    );
}


export default Weather;
