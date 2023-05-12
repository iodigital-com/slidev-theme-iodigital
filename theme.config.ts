export enum ChapterColor {
    ORANGE = 'orange',
    BLUE = 'blue',
    PURPLE = 'purple',
}

export type Network = {
    /**
     * Base URL of the network
     */
    base: string,

    /**
     * Icon component. Either from Material Design Icons (Mdi) or custom SVG (iO).
     * The format is Icon[Collection][Name]. E.g. IconMdiAccount or IconIoLogo
     */
    icon?: string,

    /**
     * Prefix of the handle, if any. Think of the "@" for Twitter handles
     */
    handlePrefix?: string,
};

declare const IconMdiGithubBox, IconMdiTwitterBox, IconMdiLinkedin, IconIoLogo;

/**
 * Record of which social networks are available in the theme. These are mainly
 * used by the SocialLink component
 */
export const networks: Record<string, Network> = {
    github: {
        base: 'https://github.com/',
        icon: IconMdiGithubBox,
    },
    twitter: {
        base: 'https://twitter.com/',
        icon: IconMdiTwitterBox,
        handlePrefix: '@',
    },
    linkedin: {
        base: 'https://linkedin.com/in/',
        icon: IconMdiLinkedin,
    },
    io: {
        base: 'https://techhub.iodigital.com/authors/',
        icon: IconIoLogo,
    },
};

/**
 * Layouts in which the footer should not be visible
 */
export const footerLayoutBlacklist = ['codepen', 'cover', 'intro', 'end'];

/**
 * Chapters in a slide deck belong to a certain color. This map represents the
 * color which belongs to the chapter
 */
export const chapterColors: Record<string, ChapterColor> = {
    introduction: ChapterColor.ORANGE,
    story: ChapterColor.BLUE,
    conclusion: ChapterColor.PURPLE,
};

