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
    appName: "Tefek's Apps",
    appVersion: "1.0.0",
    icons: {
        icon64: icon64,
        icon128: icon128
    },
    logo: logo,
    footer: {
        flag: flagCZ,
        links: [{
            link: "https://tefek.cz",
            name: "Tefek.cz"
        }, {
            link: "https://tefek.cz/supportme",
            name: "Support My Work"
        }, {
            link: "https://tefek.cz/acknowledgements",
            name: "Open Source"
        }],
        socials: [{
            link: "https://github.com/493msi",
            type: Social.GITHUB,
            img: githubIcon
        }, {
            link: "https://discord.gg/sAAnDfWTav",
            type: Social.DISCORD,
            img: discordIcon
        }, {
            link: "https://tefek.cz/contact",
            type: Social.EMAIL,
            img: emailIcon
        }, {
            link: "https://twitter.com/amtefek",
            type: Social.TWITTER,
            img: twitterIcon
        }, {
            link: "https://www.youtube.com/c/Tefek",
            type: Social.YOUTUBE,
            img: youtubeIcon
        }]
    }
} as IAppInfo;