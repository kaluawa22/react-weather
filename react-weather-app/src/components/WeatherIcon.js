import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faBolt} from '@fortawesome/free-solid-svg-icons';


const WeatherIcon = ({weatherCondition, size}) =>{

    const weatherIcons = {
        'Clear': faSun,
        'Clouds': faCloud,
        'Rain': faCloudRain,
        'Snow': faSnowflake,
        'Thunderstorm': faBolt,
      };
    const icon = weatherIcons[weatherCondition] || faQuestion;

    return (
        <FontAwesomeIcon 
            icon={icon} 
            size={size}
            className="mb-3"
        />
      
    );       
}


export default WeatherIcon;