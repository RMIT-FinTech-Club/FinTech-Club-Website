import styles from './form3.module.css'
import clsx from 'clsx';

function ImageForm3({ images }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.decor_block, styles.decor_object)}></div>
            <div className={clsx(styles.decor_block, styles.decor_object)}></div>
            <div className={clsx(styles.decor_circle, styles.decor_object)}></div>
            <div className={clsx(styles.decor_img, styles.decor_object)}></div>
            <div className={clsx(styles.form_img_before, styles.decor_object)}>
                <div className={clsx(styles.decor_object)}>
                    <span className={clsx(styles.decor_object, styles.decor_inner)}></span>
                </div>
            </div>
            <div style={{backgroundImage: `url(${images[0]})`}} className={clsx(styles.form_img)}></div>
        </div>
    )
}

export default ImageForm3;