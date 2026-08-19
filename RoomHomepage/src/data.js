import Left from "../src/assets/images/icons/icon-angle-left.svg";
import Right from "../src/assets/images/icons/icon-angle-right.svg";
import Arrow from "../src/assets/images/icons/icon-arrow.svg";
import Close from "../src/assets/images/icons/icon-close.svg";
import Hamburger from "../src/assets/images/icons/icon-hamburger.svg";
import Logo from "../src/assets/images/icons/logo.svg";

import desktopHero1 from "../src/assets/images/desktop/desktop-image-hero-1.jpg";
import desktopHero2 from "../src/assets/images/desktop/desktop-image-hero-2.jpg";
import desktopHero3 from "../src/assets/images/desktop/desktop-image-hero-3.jpg";

import mobileHero1 from "../src/assets/images/mobile/mobile-image-hero-1.jpg";
import mobileHero2 from "../src/assets/images/mobile/mobile-image-hero-2.jpg";
import mobileHero3 from "../src/assets/images/mobile/mobile-image-hero-3.jpg";

export const icons = {
    left: Left,
    right: Right,
    arrow: Arrow,
    close: Close,
    hamburger: Hamburger,
    logo: Logo,
};

export const navLinks = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Shop", href: "#shop" },
    { id: 3, label: "About", href: "#about" },
    { id: 4, label: "Contact", href: "#contact" },
];

export const slides = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        images: {
            desktop: desktopHero1,
            mobile: mobileHero1,
        },
    },
    {
        id: 2,
        title: "We are available all across the globe",
        description:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        images: {
            desktop: desktopHero2,
            mobile: mobileHero2,
        },
    },
    {
        id: 3,
        title: "Manufactured with the best materials",
        description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        images: {
            desktop: desktopHero3,
            mobile: mobileHero3,
        },
    },
];