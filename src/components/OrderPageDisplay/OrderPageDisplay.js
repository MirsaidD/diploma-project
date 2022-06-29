import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/OrderItem';
import { calcTotalPrice, enumerate } from '../../components/utils';
import './OrderPageDisplay.module.css';
import { Link } from "react-router-dom";
import { Button } from '../Button';

export const OrderPageDisplay = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if (items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>
    }

    return (
        <div className="order-page__display">
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>{items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.</span>
                </div>
            </div>
            <>
                <div >
                    <hr />
                    <div >
                        <Link to="/checkout">
                            <Button type="primary" size="m"  > Go To CheckOut</Button>
                        </Link>
                    </div>
                </div>
            </>
        </div >
    )
}
