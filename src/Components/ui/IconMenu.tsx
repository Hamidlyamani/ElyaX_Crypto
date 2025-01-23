import { IconType } from 'react-icons/lib'

type IconMenuProps = {
    imge: string | IconType; // Ensure this matches the type of `m1`
};


export function IconMenu({ imge }: IconMenuProps) {
    return (
        <div>
            <div className="flex justify-center align-middle bg-black rounded-full aspect-square dark:bg-white">
                {typeof imge === "string" && <img src={imge} alt="" className="" />}
            </div>
        </div>
    )
}


