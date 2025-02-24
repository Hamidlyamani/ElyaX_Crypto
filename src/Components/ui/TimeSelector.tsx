import { TimeSelectorProps } from "@/Api/types";


const timeOptions = [
    { label: "1h", value: 0.0416667, },
    { label: "3h", value: 0.125, },
    { label: "1d", value: 1, },
    { label: "1w", value: 7, },
    { label: "1m", value: 30, },
];

const TimeSelector: React.FC<TimeSelectorProps> = ({ activeTime, onTimeChange }) => {

    return (
        <div className="right flex gap-1 lg:gap-2 p-1 lg:p-2">
            {timeOptions.map((option) => (
                <div
                    key={option.label}
                    className={`bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-800 p-1 px-2 lg:px-4 cursor-pointer text-tag-small flex items-center rounded-full ${activeTime === option.value ? "bg-green_light_1 text-gray-900 dark:bg-green_light_1 dark:text-gray-900" : ""
                        }`}
                    onClick={() => onTimeChange(option.value)}
                >
                    {option.label}
                </div>
            ))}
        </div>
    );
};
export default TimeSelector;