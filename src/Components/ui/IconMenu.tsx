import { IconType } from 'react-icons/lib'

type IconMenuProps = {
    imge: string | IconType; // Ensure this matches the type of `m1`
};


export function IconMenu({ imge }: IconMenuProps) {
    return (
        <div>
            <div className="flex justify-center p-2 align-middle bg-white rounded-full dark:bg-sidebar aspect-square ">
                {typeof imge === "string" && <img src={imge} alt="" className="filter_black dark:filter_white aspect-square" />}
            </div>
        </div>
    )
}


