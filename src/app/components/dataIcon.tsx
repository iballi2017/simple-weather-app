
const DataIcon = ({ desc }: any) => {
    const description = (desc: string) => {
        let image: string;
        let src: string = '';
        switch (desc) {
            //**Thunderstorm */
            case "thunderstorm with light rain":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm with rain":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm with heavy rain":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "light thunderstorm":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "heavy thunderstorm":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "ragged thunderstorm":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm with light drizzle":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm with drizzle":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "thunderstorm with heavy drizzle":
                image = '11d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;


            //**Rain & Drizzle*/
            case "light rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "moderate rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
            case "heavy intensity rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "very heavy rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "extreme rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "freezing rain":
                image = '13d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "light intensity shower rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "shower rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "heavy intensity shower rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "ragged shower rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "light intensity drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "heavy intensity drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "light intensity drizzle rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "drizzle rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "heavy intensity drizzle rain":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "shower rain and drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "heavy shower rain and drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "shower drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;




            //**Atmosphere */
            case "midst":
                image = '50d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "smoke":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "haze":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "sand/dust whirls":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "fog":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "sand":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "dust":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "volcanic ash":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "squalls":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "tornado":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;

            //**Clear */
            case "clear sky":
                image = '01d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;

            //**Clouds */
            case "few clouds":
                image = '02d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "scattered clouds":
                image = '03d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "broken clouds":
                image = '04d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "overcast clouds":
                image = '04d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;

            default:
                break;
        }

        return src;
    }

    let src = description(desc)
    return <img src={src} alt={desc} />;

}

export default DataIcon;