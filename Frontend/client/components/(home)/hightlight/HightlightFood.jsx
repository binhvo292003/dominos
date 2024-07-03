import classes from '@/components/(home)/hightlight/HightlightFood.module.css';
import FoodItem from './FoodItem';

export default function HightlighFood() {
    return (
        <>
            <div className={classes['container']}>
                <div className={classes['title']}>Today's hot list</div>
                <div className={classes['line']}></div>
                <div className={classes['food-container']}>
                    <FoodItem title={'Pizza Hai San'} size={'Medium'} price={'100$'} />
                    <FoodItem title={'Pizza Hai San'} size={'Medium'} price={'100$'} />
                    <FoodItem title={'Pizza Hai San'} size={'Medium'} price={'100$'} />
                    <FoodItem title={'Pizza Hai San'} size={'Medium'} price={'100$'} />
                </div>
                <button className={classes['button']}>Xem thêm</button>
            </div>
        </>
    );
}
