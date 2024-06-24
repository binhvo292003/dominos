import Image from 'next/image';
import defaultImage from '@/public/image/pizzaHaiSan.png';
import classes from '@/components/(home)/hightlight/FoodItem.module.css';

export default function FoodItem({ img, title, price, size, children }) {
    return (
        <div className={classes['container-item']}>
            <Image
                className={classes['food-img']}
                src={img || defaultImage}
                alt={title}
                layout="responsive"
                width={300}
                height={240}
            />
            <div className={classes['food-title']}>{title}</div>
            <div className={classes['food-price-size']}>
                {size} - {price}
            </div>
        </div>
    );
}
