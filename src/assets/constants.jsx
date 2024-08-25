import {twitter, instagram} from "./index"

import EmailSvg from "./svgs/EmailSvg"
import TwitterSvg from "./svgs/TwitterSvg"
import InstagramSvg from "./svgs/InstagramSvg"

export const menuItems = [
    {
        name: "About Me",
        toUrl: "#about"
    },
    {
        name: "Youtube",
        toUrl: "#youtube"
    },
    {
        name: "My Services",
        toUrl: "#services"
    },
    {
        name: "Contact Me",
        toUrl: "#contact"
    },

]

// the highlight property in the service item flips the color scheme and makes the card bigger in larger screen sizes
export const serviceItems = [
    {
        title: "Lifetime Tracker",
        price: "$20",
        description: "Level up your life by effortlessly tracking your own personalized metrics throughout 2024 and measure them up against your goals - all in a just a few minutes a day!",
        callToAction: "Get Started",
        highlight: "white"
    },
    {
        title: "Execution Accelerator",
        price: false,
        description: "4 weeks of personalized help to ensure you plan and achieve your goals. Make the next 30 days, your best 30 days yet!",
        callToAction: "Book a Call",
        highlight: "black"
    },
    {
        title: "YouTuber Academy",
        price: false,
        description: "Are you an budding content creator with a passion for YouTube? I can help you get started and grow using my experience from growing Outperform",
        callToAction: "Enroll Here",
        highlight: "white"
    }
]

export const contactItems = [
    {
        icon: <EmailSvg fill="black" className="h-10"/>,
        url: "outperformm@.com",
        heading: "Email:",
        content: "outperformmp@gmail.com"
    },
    {
        icon: <TwitterSvg fill="black" className="h-10"/>,
        url: "outperform.twitter.com",
        heading: "Twitter:",
        content: "twitter.com/Outperform1234"
    },
    {
        icon: <InstagramSvg fill="black" className="h-10"/>,
        url: "outperform.instagram.com",
        heading: "Instagram:",
        content: "instagram.com/outperformmp"
    }
];

export const socials = [
    {
      id: "0",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "1",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    }
  ];

export const VideoEmbedUrls = [
    {
        itemurl: "https://www.youtube.com/embed/qk8PSrd-RTE?si=vsY2Ya_KgJS89Voh"
    },
    {
        itemurl: "https://www.youtube.com/embed/s8BQ5Suab6Y?si=p7FSKc0KIKtegImk"
    },
    {
        itemurl: "https://www.youtube.com/embed/T-p6Zam0YmQ?si=0qsyT79kLbLJPMqP"
    },
    {
        itemurl: "https://www.youtube.com/embed/bzE62q2cb-k?si=gumYWTViOAdoXBPM"
    }
]