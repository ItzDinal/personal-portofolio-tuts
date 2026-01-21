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
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
    <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className='mt-30 scroll-mt-10'
        id='about'
    >
        {/*Section header of About component */}
        <SectionHeader 
            subtitle="About"
            title="Transforming complexity into effortless design"
        />
        <motion.p
            variants={fadeUp}
            className="mt-4 text-neutral-300"
        >
            Hello! I'm Dinal, a passionate Data Scientist and Machine Learning Engineer dedicated to transforming complex data into actionable insights. With a strong foundation in statistics and programming, I specialize in building predictive models and deploying machine learning solutions that drive business growth. My expertise spans various domains, including natural language processing, computer vision, and time series analysis. I thrive on solving challenging problems and continuously seek to expand my knowledge in the ever-evolving field of AI/ML.
        </motion.p>
        <motion.p
            variants={fadeUp}
            className="mt-2 text-neutral-300"
        >
            Over the past few years, I've had the privilege of working on diverse projects that have honed my skills in data wrangling, feature engineering, and model optimization. I am proficient in Python, R, and various machine learning frameworks such as TensorFlow and PyTorch. My approach combines technical expertise with a keen understanding of business objectives, ensuring that the solutions I develop are not only innovative but also aligned with organizational goals.
        </motion.p>

        <motion.div
        variants={fadeUp}
        transition={{delay: 0.2}}
        >
            <Button className="mt-5">Contact Me</Button>

        </motion.div>
    </motion.section>
    )
};