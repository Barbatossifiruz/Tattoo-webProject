import React, { useState } from "react";

//* Import gallery data
import { galleryData } from "../data";

//* Import photo album & lightbox
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

//* Lightbox css
import "yet-another-react-lightbox/styles.css";

//* Import motion
import { motion } from "framer-motion";

//* Import fadeIn
import { fadeIn } from "../variants";

//* Slides
const Slides = galleryData.images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
}));

const GallerySection = () => {
    //! Index state
    const [Index, setIndex] = useState(-1);
    //! Destructure gallery data
    const { title, btnText, btnIcon, images } = galleryData;
    return <section>GallerySection</section>;
};

export default GallerySection;
