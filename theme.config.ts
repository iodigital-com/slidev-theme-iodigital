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
 * Record of which social networks are available in the theme. These are used by SocialLink component
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
export const footerLayoutBlacklist = ['cover', 'intro', 'end'];

export const getSectionTitleGetter = ($slidev: any, rawRoutes: any[]) => () => {
    if (rawRoutes.length) {
        for (let i = $slidev.nav.currentPage - 1; i > 0; i--) {
            const { meta } = rawRoutes[i];
            const section = meta.section ?? true;

            if (section === false) {
                // Quit using sections. Use the fall back
                break;
            }

            if (meta.layout !== 'section') {
                // Not a section, on to the previous slide
                continue;
            }
            if (section === true && meta.slide?.title) {
                // Use the current slide’s title
                return meta.slide?.title;
            }

            if (typeof section === 'string') {
                // Override the section title with a custom one
                return section;
            }
        }
    }
    // Default value
    return $slidev.configs.title;
}
