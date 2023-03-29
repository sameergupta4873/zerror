import React from 'react'
import styles from './index.module.scss'

const InfinteSlider = () => {
    return (
        <div className='bg-black'>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    <div className={styles.slide}>
                        
                    </div>
                    <div className={styles.slideWider}>
                        <img alt="image" src="/tag/tag0.png" className="h-[6rem] w-[50rem]" />
                    </div>
                    <div className={styles.slideWider}>
                        <img alt="image" src="/tag/tag1.png" className="h-[6rem] w-[60rem]"  />
                    </div>
                    <div className={styles.slideWider}>
                        <img alt="image" src="/tag/tag2.png" className="h-[5rem] w-[30rem]" />
                    </div> 
                    <div className={styles.slideWider}>
                        <img alt="image" src="/tag/tag3.png" className="h-[6rem] w-[40rem]" />
                    </div> 
                    {/*
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250"  />
                    </div>
                    <div className={styles.slide}>
                        <img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250"  />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default InfinteSlider