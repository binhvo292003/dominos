import CartItem from '@/components/(cart)/CartItem';

export default function CartPage() {
    const cartList = [
        { id: 1, name: 'Combo1', price: 100, qty: 1 },
        { id: 2, name: 'Combo2', price: 200, qty: 2 },
        { id: 3, name: 'Combo3', price: 300, qty: 3 },
        { id: 4, name: 'Combo4', price: 400, qty: 4 },
    ];

    return (
        <div className="container mx-auto py-5">
            <div className="text-5xl text-center py-5">Cart</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                <div className="flex flex-col col-span-1 lg:col-span-2 xl:col-span-4 gap-5">
                    {cartList.map((item) => (
                        <CartItem key={item.id} />
                    ))}
                </div>
                <div className="bg-red-200 flex flex-wrap flex-col p-5 gap-4 col-span-1 lg:col-span-1 xl:col-span-2 h-auto overflow-auto">
                    {' '}
                    <div className="text font-medium text-4xl">Summary</div>
                    <div className="bg-black h-px "></div>
                    <div className="text text-xl">Coupon</div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-black text-white font-bold py-2 px-4 rounded">
                            Apply
                        </button>{' '}
                    </div>
                    <div className="bg-black h-px "></div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <div className="text text-xl">Subtotal</div>
                            <div className="text text-xl">$1000</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text text-xl">Discount</div>
                            <div className="text text-xl">$100</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text text-xl">Total</div>
                            <div className="text text-xl">$900</div>
                        </div>
                    </div>
                    <div className="bg-black h-px "></div>
                    <div className="flex flex-row justify-end">
                        <button className="bg-black text-white font-bold py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
