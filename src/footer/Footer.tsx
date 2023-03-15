import React from 'react';
import style from "./Footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.messengers}>
                    <div className={style.messenger}>
                        <div>
                            <FacebookIcon/>
                        </div>
                    </div>
                    <div className={style.messenger}>
                        <InstagramIcon/>
                    </div>
                    <div className={style.messenger}>
                        <TwitterIcon/>
                    </div>
                    <div className={style.messenger}>
                        <TelegramIcon/>
                    </div>
                </div>
                <h5 className={style.title}>Eugene Nesterenko</h5>
                <p className={style.rights}> &#169; 2023 All rights reserved</p>
            </div>
        </div>
    );
};

