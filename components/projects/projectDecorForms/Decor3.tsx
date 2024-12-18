function Decor3() {
    const decorClasses = 'absolute aspect-square rounded-[50%] hidden md:inline';

    return (
        <>
            <div style={{ animationDuration: '13s' }} className={`${decorClasses} bg-midDeepBlue bottom-0 left-[-2vw] w-[5vw] moveUD`}>
                <div style={{ animationDuration: '10s' }} className={`${decorClasses} bg-gold top-[-9vw] left-[3vw] w-[1vw] moveRL`}></div>
            </div>
            <div style={{ animationDuration: '7s' }} className={`${decorClasses} bg-midDeepBlue bottom-[-3vw] left-[4vw] w-[1vw] moveRL`}></div>
        </>
    )
}

export default Decor3;