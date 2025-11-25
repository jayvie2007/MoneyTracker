import { useEffect, useState } from "react";

const TimeToday = () => {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <div className="font-bold text-[#393F9D] text-4xl">
            {formattedTime}
        </div>
    );
};

export default TimeToday;