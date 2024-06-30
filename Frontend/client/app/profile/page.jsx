import Image from 'next/image';
import classes from './page.module.css';
import DatePickerApp from '@/components/(profile)/DatePickerApp';

export default function ProfilePage() {
    const name = 'Bob';

    const handleLogOut = () => {};

    const defaultPicture = '/image/logo.png';

    return (
        <div className={classes['container']}>
            <div className={classes['title']}>Profile Page</div>
            <div className={classes['container-1']}>
                <div className={classes['welcome']}>
                    <Image
                        src={defaultPicture}
                        alt="Profile"
                        width={40}
                        height={40}
                        className={classes['avatar']}
                    />
                    <div className="text">
                        Welcome, <span>{name}</span>
                    </div>
                </div>
                <div className={classes['edit-info']}>
                    <div className={classes['title-1']}>ACCOUNT DETAILS</div>
                    <div className={classes['sub-container']}>
                        <div className={classes['sub-title']}>First Name</div>
                        <input type="text" className={classes['input']} placeholder="Bob" />
                    </div>

                    <div className={classes['sub-container']}>
                        <div className={classes['sub-title']}>Last Name</div>
                        <input type="text" className={classes['input']} placeholder="Nicolas" />
                    </div>

                    <div className={classes['sub-container']}>
                        <div className={classes['sub-title']}>Email</div>
                        <input
                            type="text"
                            className={classes['input']}
                            placeholder="bob@gmail.com"
                        />
                    </div>

                    <div className={classes['sub-container']}>
                        <div className={classes['sub-title']}>Gender</div>
                        <select name="selectGender" defaultValue="Gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={classes['sub-container']}>
                        <div className={classes['sub-title']}>Date of birth</div>
                        <DatePickerApp />
                    </div>
                </div>
            </div>
        </div>
    );
}
