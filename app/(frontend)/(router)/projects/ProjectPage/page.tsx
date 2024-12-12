"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import './ProjectPage.css';
import './ProjectPageResponsive.css';
import projectAPI from './fakeAPI'
import ProjectContent from './projectContent'

const ProjectPage: React.FC = () => {
    return (
        <div className='project-wrapper'>
            <div className='projects-introduce'>
                <div className='project-introduce-decor decor-object'></div>
                <div className='project-introduce-decor decor-object'>
                    <div className='project-introduce-decor-inner decor-object'></div>
                </div>
                <div className='introduce-content-wrap'>
                    <div className='introduce-content-slogan'>Innovate, Learn, Lead</div>
                    <h1 className='introduce-content-title'>The Student-led Financial Technology Club</h1>
                    <div className='introduce-content-text'>Our club focuses on empowering members with the skills, knowledge, and hands-on experience needed to thrive in the ever-evolving FinTech industry. Through workshops, real-world projects, and networking events with industry leaders.</div>
                    <button className='introduce-content-button'>Join Us</button>
                </div>
                <div className='introduce-img-wrap'>
                    <div className='introduce-img-bg'>
                        <div className='introduce-img-bg-logo'>
                            <img src='https://s3-alpha-sig.figma.com/img/740e/b219/b79eb7bb2ba4da6014821709c76155f0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W03vg1AYRZYhWpHmF4ks4HDwETY4PLSbkj92VTJeyfOZpBggO-6U9i3h~RKH6y0A9QMtjia9UzREJufz9r~mHFLSBAcsghLX3y403mlOnpnndqBlBL17y0MB-9ciAvV1Lvl2pq2yRQyM~2sAennnS5-~n0K~u41W1AgacoqMrObwE0OtbeENpFLKIBjdRzSm2FTxW4Hcyi2QE54PGgI7TZqf3Yqc5D6Yf6QC6HI6~WDq1vUwlgeJrrHuB1oGLZ8ApY8uRxiyfMKVQtwgzfXtqMigLEdDHaofJB06qbmQSelu4aK6k3G70on1a0RmqYwcxlDyt-OO0HIutoFZYECkmA__' />
                        </div>
                        <div style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e400/b9f5/be2d5a0425040245ae7b0cb07d1caf55?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gj3JBUkn44n~i2fOO94fOV4CzVVI0x~qL81Q2dj26uqNV20xyDgUsY5XA0yXOSvxynzxXm~aP0hAtToJPYCRo1VLCyNZIzDOl9Spcme73d7rNOvfUfNfarTw0l3ggNLb6itOhgmH42bWxTfwPZObKydhVja2DzIa437V~-4g68-E9GuakDRgwPekdzJpvrOsSnEi-kfmyFgb1TEwbUqikMaKCU~2fOr1GBNMsedcdMikme87semES9C~kXgXw5GQDpaO-bGFGeZ5e-tNjAjT0Y0GWe47I7YKokOzwlnbo0WD51e~c2SOrLf5kbfnUbPIcy4ByoA2Gg6jPCBAB4yqKg__)' }} className='introduce-img'></div>
                    </div>
                </div>
            </div>
            {projectAPI.map((project, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

                let initTrans = ''
                let aniTrans = ''
                switch (true) {
                    case ((index + 1) % 4 == 0):
                        initTrans = 'translateY(10%)'
                        aniTrans = 'translateY(0)'
                        break
                    case ((index + 1) % 4 == 3):
                        initTrans = 'translateX(10%)'
                        aniTrans = 'translateX(0)'
                        break
                    case ((index + 1) % 4 == 2):
                        initTrans = 'translateY(-10%)'
                        aniTrans = 'translateY(0)'
                        break
                    case ((index + 1) % 4 == 1):
                        initTrans = 'translateX(-10%)'
                        aniTrans = 'translateX(0)'
                        break
                }

                return (
                    <motion.div
                        ref={ref}
                        style={{ backgroundColor: project.bgc || 'white' }} key={index} className='project-wrap'
                        initial={{ opacity: 0, transform: `${initTrans}` }}
                        animate={isInView ? { opacity: 1, transform: `${aniTrans}` } : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {index === 0 && (
                            <>
                                <div className='project-decor decor-object'></div>
                                <div className='project-decor decor-object'></div>
                                <div className='project-decor decor-object'></div>
                            </>
                        )}
                        <div className='project-child-wrap image'>
                            <project.imgForm images={project.imgLinks} />
                        </div>
                        <div className='project-child-wrap content'>
                            <h3 className='project-content-index'>Project {index + 1}</h3>
                            <ProjectContent name={project.name} content={project.content} />
                            <button className='project-content-btn'>Join Us</button>
                        </div>
                    </motion.div>
                )
            })}

        </div>
    )
}

export default ProjectPage;