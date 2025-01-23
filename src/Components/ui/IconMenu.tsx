import { IconType } from 'react-icons/lib'

type IconMenuProps = {
    imge: string | IconType; // Ensure this matches the type of `m1`
};


export function IconMenu({ imge }: IconMenuProps) {
    return (
        <div>
            <div className="flex justify-center align-middle p-2 bg-white dark:bg-black rounded-full aspect-square ">
                {typeof imge === "string" && <img src={imge} alt="" className="aspect-square" />}
            </div>
        </div>
    )
}


