
import error_img from "@/assets/imgs/error_img.png"

const NoData = () => {
    return (
        <div className="mx-auto bg-sidebar w-96">
            <img src={error_img} alt="Error" className="max-w-60" />
            <p>Data could not be loaded. Please try again later.</p>
        </div>
    )
}

export default NoData