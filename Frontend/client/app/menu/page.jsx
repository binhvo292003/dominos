import CategorySection from '@/components/(menu)/CategorySection';
import classes from './page.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuList from '@/components/(menu)/MenuList';

export default function MenuPage() {
    return (
        <div className={classes['container']}>
            <div className={classes['delivery']}>
                <div className={classes['delivery-container']}>
                    <input type="text" placeholder="Địa chỉ nhận hàng" />
                    <button>
                        <LocationOnIcon />
                    </button>
                </div>
            </div>
            <CategorySection />
            <div className={classes['header']}>Pizza</div>
            <MenuList />
        </div>
    );
}
