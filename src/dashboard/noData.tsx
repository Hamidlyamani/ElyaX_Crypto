
import error_img from "@/assets/imgs/error_img.png"
import { useEffect, useState } from "react";

const NoData = () => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);
    return (
        <div className="mx-auto h-full min-h-screen w-full flex justify-center items-center">
            <div className=" w-full lg:w-[50%] flex justify-center flex-col text-center">
                <h3 className="font-L_medium text-h5 md:text-h4 lg:text-h2-m mb-2">Too much love, not enough data! ❤️</h3>
                <p className="text-b-small md:text-b-medium ">Wow, you really like this site! We’ve hit our free request limit for now, but don’t worry—it’ll reset soon.</p>

                <img src={error_img} alt="Error" className="max-w-80 mx-auto lg:mt-6" />
                <div className=" text-green_light_1 font-L_medium text-b-large  p-2 w-full inline "> Take a break and check back in <strong>{timeLeft}s</strong> !</div>
            </div>
        </div>
    )
}

export default NoData