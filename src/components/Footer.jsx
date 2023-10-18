//* Import footer data
import { footerData } from "../data";

//* Import motion
import { motion } from "framer-motion";

//* Import fade in
import { fadeIn } from "../variants";

//* Stagger Container
const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const Footer = () => {
    //! Destructure Footer Data
    const { about, links, program, newsletter } = footerData;
    return (
        <>
            <footer className="section bg-dark">
                <div className="container mx-auto">
                    {/* grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}
                        className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
                    >
                        {/* about */}
                        <motion.div variants={fadeIn("up")} className="flex-1 flex flex-col gap-y-6">
                            {/* Title */}
                            <h3 className="font-primary text-xl uppercase tracking-[0.08em]">{about.title}</h3>
                            {/* Subtitle */}
                            <div className="leading-relaxed text-greyLight">{about.subtitle}</div>
                            {/* Adress, phone & email */}
                            <div>
                                {/* Address */}
                                <div className="flex items-center gap-x-[10px]">
                                    <div>{about.address.icon}</div>
                                    <div>{about.address.name}</div>
                                </div>
                                {/* Phone */}
                                <div className="flex items-center gap-x-[10px]">
                                    <div>{about.phone.icon}</div>
                                    <div>{about.phone.number}</div>
                                </div>
                                {/* Email */}
                                <div className="flex items-center gap-x-[10px]">
                                    <div>{about.email.icon}</div>
                                    <div>{about.email.address}</div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Links */}
                        <motion.div variants={fadeIn("up")} className="flex-1 flex-col xl:items-center">
                            <div>
                                <h3 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{links.title}</h3>
                                <ul className="flex flex-col gap-y-4 text-greyLight">
                                    {links.items.map((item, index) => {
                                        const { href, name } = item;
                                        return (
                                            <li key={index}>
                                                <a className="hover:text-white transition" href={href}>
                                                    {" "}
                                                    {name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                        {/* Program */}
                        <motion.div variants={fadeIn("up")} className="flex-1 flex-col xl:items-center">
                            <div>
                                <h3 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{program.title}</h3>
                                <ul className="flex flex-col gap-y-4 text-greyLight">
                                    {program.items.map((item, index) => {
                                        return <li key={index}>{item.name}</li>;
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                        {/* Newsletter */}
                        <motion.div variants={fadeIn("up")} className="flex-1">
                            <h3 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{newsletter.title}</h3>
                            <h4 className="leading-relaxed mb-9 text-greyLight">{newsletter.subtitle}</h4>
                            <form className="flex justify-between items-start border-b border-greyLight">
                                <input
                                    className="outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2"
                                    placeholder={newsletter.form.placeholder}
                                    type="text"
                                />
                                <button type="submit" className="text-2xl cursor-pointer">
                                    {newsletter.form.icon}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
