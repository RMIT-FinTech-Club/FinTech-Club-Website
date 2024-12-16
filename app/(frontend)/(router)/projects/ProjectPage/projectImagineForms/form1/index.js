import styles from './form1.module.css'
import clsx from 'clsx';

function ImageForm1({ images }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div style={{backgroundImage: `url(${images[0]})`}} className={clsx(styles.form_img)}></div>
            <div style={{backgroundImage: `url(${images[1]})`}} className={clsx(styles.form_img)}></div>
            <div style={{backgroundImage: `url(${images[2]})`}} className={clsx(styles.form_img)}>
                <div style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/c349/43a2/e41e586e7b0c1a93c8c06f81df3e9b2f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxguBNiUP4KqfMJEZmDeLBaVF5gjNA7YZupeQgHlFyZjE~DNw1LkL2JT3F~u9rKQa~ZLSOfFrp4-hlH4StZtWkcFtH2P~yQL3YOpQXIU6Mdcb2zjU7eAi0qjp19MJ2CdGvAMcXTY9-BDZo4McbUZtJSyAy6aYrNTlcSveFScnyPIN6hLu-BBXxalsQHNl-wB~hAi8abaYXfYjzDqP5KeBEdJZRsK0isC5DnAG-0PSrAPphytjNwfVKoJsyTTR6wSIV0KEj7aQ-rGnRf25s8eZW3j9t9pdArVlJ8jCYboBpyjZnSQliI2lLuNnh5rf9LfnrCHu~g42PCvskS9FXaeMA__)'}}></div>
            </div>
        </div>
    )
}

export default ImageForm1;