import styles from './form4.module.css'
import clsx from 'clsx';

function ImageForm3({ images }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div style={{backgroundImage: `url(${images[0]})`}} className={clsx(styles.form_img)}></div>
            <div style={{backgroundImage: `url(${images[1]})`}} className={clsx(styles.logo)}></div>
        </div>
    )
}

export default ImageForm3;