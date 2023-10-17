import React, { useState } from "react";

//* Import data
import { interviewData } from "../data";

//* Import modal video
import ModalVideo from "react-modal-video";

//* Modal video Css
import "../modalVideo.scss";

//* Import motion
import { motion } from "framer-motion";

//* Import fade in
import { fadeIn } from "../variants";

const Interview = () => {
    //* Destructure interview data
    const { title, btnText, btnIcon } = interviewData;
    //* Open state
    const [isOpen, setIsOpen] = useState(false);

    return <section className="">Interview</section>;
};

export default Interview;
