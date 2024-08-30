
const DataIcon = ({ desc }: any) => {
    const description = (desc: string) => {
        let image: string;
        let src: string = '';
        switch (desc) {
            case "clear sky":
                image = '01d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;


            //**Thunderstorm */
            case "thunderstorm with light rain" || "thunderstorm with rain" || "thunderstorm with heavy rain" || "light thunderstorm" || "thunderstorm" || "heavy thunderstorm" || "ragged thunderstorm" || "thunderstorm with light drizzle" || "thunderstorm with drizzle" || "thunderstorm with heavy drizzle":
                image = 'i1d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;


            //**Rain & Drizzle*/
            case "light rain" || "moderate rain" || "heavy intensity rain" || "very heavy rain" || "extreme rain":
                image = '10d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "freezing rain":
                image = '13d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;
            case "light intensity shower rain" || "shower rain" || "heavy intensity shower rain" || "ragged shower rain" || "light intensity drizzle" || "light intensity drizzle" || "drizzle" || "heavy intensity drizzle" || "light intensity drizzle rain" || "drizzle rain" || "heavy intensity drizzle rain" || "shower rain and drizzle" || "heavy shower rain and drizzle" || "shower drizzle":
                image = '09d';
                src = `https://openweathermap.org/img/wn/${image}@2x.png`;
                break;




            //**Atmosphere */
            case "midst" || "smoke" || "haze" || "sand/dust whirls" || "fog" || "sand" || "dust" || "volcanic ash" || "squalls" || "tornado":
                image = '50d';
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