import React from 'react';

const Cart = () => {
    return (
        <div className='mr-[20px]  mt-10 bg-white h-[420px] w-[310px] lg:fixed right-1 top-[75px] rounded-[15px]'>
            <h1 className='font-semibold text-2xl mt-2 ml-2'>Cart</h1>
            <div>
                <div className='flex justify-center mt-20'>
                <img src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg" alt="" />
                </div>
                <h1 className='font-bold text-3xl text-center'>Your cart is currently
                    empty</h1>
            </div>
        </div>
    );
};

export default Cart;