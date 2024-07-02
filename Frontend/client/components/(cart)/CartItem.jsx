import Image from 'next/image';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function CartItem() {
    return (
        <>
            <div className="border-solid border-2 shadow-lg grid grid-cols-3 p-5 rounded-lg">
                <div className="col-span-2 flex flex-row">
                    <Image src="/image/pizzaHaiSan.png" width={200} height={200} />
                    <div className="flex flex-col justify-between px-5">
                        <div className="text font-bold">Title</div>
                        <div className="flex flex-row">
                            <div className="text font-bold underline">Remove</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-around items-center">
                    <div className="flex flex-row gap-2">
                        <RemoveCircleOutlineIcon />
                        <div className="text font-bold">1</div>
                        <AddCircleOutlineIcon />
                    </div>
                    <div className="text font-bold">39,000d</div>
                </div>
            </div>
        </>
    );
}
