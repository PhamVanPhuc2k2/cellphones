import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0efe205a6286776177a8aed9d113e76d~c5_300x300.webp?lk3s=a5d48078&nonce=29437&refresh_token=87c2ce1d7a7471643291fb587d77187f&x-expires=1733209200&x-signature=Jd1i9xxVw13axuGwFNpHcEVTgKE%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
