import styles from './form2.module.css'
import clsx from 'clsx';

function ImageForm2({ images }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.decor)}></div>
            <div className={clsx(styles.decor)}></div>
            <div style={{backgroundImage: `url(${images[0]})`}} className={clsx(styles.form_img)}></div>
        </div>
    )
}

export default ImageForm2;