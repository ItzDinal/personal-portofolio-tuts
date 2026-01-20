
/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * custom modules
 */
import { staggerContainer } from '@/lib/animations';

/**
 *  Components
 */
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Constants
 */
import { projectsData } from '@/constants';


export const Projects = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='projects'
        >
            <SectionHeader 
            subtitle='Projects'
            title='My featured projects'
            />
            <motion.div
                className=''
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0.5)}
            >

            </motion.div>
        </motion.section>
    );
}