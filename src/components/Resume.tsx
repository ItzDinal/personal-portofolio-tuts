/**
 * @license Apache-2.0
 */

/**
 *  Node modules
 */
import { motion } from "motion/react";

/**
 *  Custom modules
 */
import { fadeUp, staggerContainer } from "@/lib/animations";

/**
 * Components
 */
import { SectionHeader } from "@/components/SectionHeader";

/**
 * Constants
 */
import { education, experience, tools } from "@/constants";

export const Resume = () => {
    return (
    <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className='mt-30 scroll-mt-10'
        id='resume'
    >
        {/*Section header of About component */}
        <SectionHeader 
            subtitle="Resume"
            title="Education & Experience"
        />
        <motion.p 
            variants={fadeUp}
            className="mt-4 text-neutral-300"
        >
            With a strong foundation in both education and hands-on experience, I bring a comprehensive skill set to every project I undertake.
        </motion.p>

        <div className="">
            <motion.div
                variants={fadeUp}
                className="mb-16 mb:mb-0"
            >
                <h2 className="">Education</h2>
            </motion.div>
        </div>
    </motion.section>
    )
};