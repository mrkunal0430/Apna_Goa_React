const ForecastCard = ({ day, compact = false }) => {
    const date = new Date(day.date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., Fri
    const dateNum = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }); // e.g., 20 Sep

    return (
        <div
            className={`flex justify-between items-center bg-gray-700/30 px-3 py-1 rounded-md ${compact ? 'text-xs' : 'text-sm'
                }`}
        >
            {/* Day + Date */}
            <div className="flex flex-col items-start w-14">
                <span className="font-medium">{dayName}</span>
                <span className="text-gray-300">{dateNum}</span>
            </div>

            {/* Icon */}
            <img
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                className="w-5 h-5"
            />

            {/* Temperature */}
            <span>
                <div> L - {day.day.mintemp_c.toFixed(1)}°C</div>
                <div> H - {day.day.maxtemp_c.toFixed(1)}°C</div>
            </span>
        </div>
    );
};

export default ForecastCard;
