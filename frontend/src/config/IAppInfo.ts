export enum Social
{
    EMAIL = "E-Mail",
    TWITTER = "Twitter",
    YOUTUBE = "YouTube",
    DISCORD = "Discord",
    GITHUB = "GitHub",
}

export interface IAppInfo
{
    appName: string,
    appVersion: string,
    icons: {
        icon64: string,
        icon128: string
    },
    logo: string,
    footer: {
        flag: string,
        links: {
            link: string,
            name: string
        }[],
        socials: {
            link: string,
            type: Social,
            img: string
        }[]
    }
}
