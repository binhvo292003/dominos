import classes from './page.module.css';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SelectOption from '@/components/(contact)/SelectOption';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ServicePage() {
    return (
        <div className={classes['container']}>
            <div className={classes['header']}>Contact Us</div>
            <div className={classes['action-container']}>
                <button className={classes['action']}>
                    <MailIcon /> Send a email
                </button>
                <button className={classes['action']}>
                    <LocalPhoneIcon /> +84 966798814
                </button>
            </div>

            <form className={classes['form']}>
                <div className={classes['title']}>CONTACT FORM</div>
                <div className={classes['line']} />
                <div className={classes['basic-info']}>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                                item
                                xs={12}
                                sm={6}
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                                item
                                xs={12}
                                sm={6}
                            >
                                <input type="email" placeholder="Email" style={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className={classes['sub-container']}>
                    <div className={classes['title']}>Phone number</div>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className={classes['phone-number']}
                    />
                </div>
                <div className={classes['sub-container']}>
                    <div className={classes['title']}>Address</div>

                    <div className={classes['address']}>
                        <Box sx={{ width: '100%' }}>
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                maxWidth={1200}
                            >
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    item
                                    xs={12}
                                    sm={6}
                                >
                                    <SelectOption />
                                </Grid>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    item
                                    xs={12}
                                    sm={6}
                                >
                                    <SelectOption />
                                </Grid>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    item
                                    xs={12}
                                    sm={6}
                                >
                                    <SelectOption />
                                </Grid>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    item
                                    xs={12}
                                    sm={6}
                                >
                                    <SelectOption />
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
                <div className={classes['sub-container']}>
                    <div className={classes['title']}>Content</div>
                    <div className={classes['line']}></div>
                    <textarea name="" id="" className={classes['content']}></textarea>
                </div>
            </form>
        </div>
    );
}
