import classes from '@/components/footer/Footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className={classes['container']}>
                <div className={classes['social-container']}>
                    <span>Contact with me</span>
                    <div className={classes['social-img']}>facebook</div>
                    <div className={classes['social-img']}>instagram</div>
                </div>
                <div className={classes['line']} />

                <div className={classes['content']}>
                    <div className={classes['delivery']}>
                        <Image
                            className={classes['logo']}
                            src={'/image/logo.png'}
                            width={80}
                            height={80}
                        />
                        <div className={classes['line']} />
                        <div className={classes['order-container']}>
                            <div className={classes['text']}>Hotline delivery</div>
                            <div className={classes['phone']}>1900 6099</div>
                        </div>
                    </div>
                    <div className={classes['navigation']}>
                        <div className={classes['navigation-col']}>
                            <a href="">Blog</a>
                            <a href="">Tuyen dung</a>
                            <a href="">Chinh sach</a>
                        </div>
                        <div className={classes['navigation-col']}>
                            <a href="">Thuc don</a>
                            <a href="">Ma voucher</a>
                            <a href="">Khuyen mai</a>
                        </div>
                        <div className={classes['navigation-col']}>
                            <a href="">Theo doi don hang</a>
                            <a href="">Danh sach cua hang</a>
                            <a href="">Rewards</a>
                        </div>
                    </div>
                    <div className={classes['certificate']}>BEN DEV</div>
                </div>
                <div className={classes['line']} />

                <div className={classes['certificate']}>@2024 Ben Dev</div>
            </div>
        </>
    );
}
