import PromotionList from '@/components/(promotion)/PromotionList';

import classes from './page.module.css';

export default function PromotionPage() {
    return (
        <div className={classes['container']}>
            <div className={classes['title']}>Promotion</div>
            <PromotionList />
        </div>
    );
}
