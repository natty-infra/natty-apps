import icon64 from "../img/icon64.webp";
import icon128 from "../img/icon128.webp";
import logo from "../img/logo.webp";
import { IAppInfo, Social } from "./IAppInfo";

import emailIcon from "../img/social/email.svg";
import discordIcon from "../img/social/discord.svg";
import twitterIcon from "../img/social/twitter.svg";
import youtubeIcon from "../img/social/youtube.svg";
import githubIcon from "../img/social/github.svg";
import flagCZ from "../img/flag_cz.svg";

export default {
    appName: "Natty's Apps",
    appVersion: "1.0.0",
    icons: {
        icon64: icon64,
        icon128: icon128
    },
    logo: logo,
    footer: {
        flag: flagCZ,
        links: [{
            link: "https://natty.sh",
            name: "Natty.sh"
        }, {
            link: "https://natty.sh/supportme",
            name: "Support My Work"
        }, {
            link: "https://natty.sh/acknowledgements",
            name: "Open Source"
        }],
        socials: [{
            link: "https://github.com/AMNatty",
            type: Social.GITHUB,
            img: githubIcon
        }, {
            link: "https://discord.gg/sAAnDfWTav",
            type: Social.DISCORD,
            img: discordIcon
        }, {
            link: "https://natty.sh/contact",
            type: Social.EMAIL,
            img: emailIcon
        }, {
            link: "https://www.youtube.com/@NattyGfx",
            type: Social.YOUTUBE,
            img: youtubeIcon
        }]
    }
} as IAppInfo;