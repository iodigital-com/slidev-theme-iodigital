declare type Network = {
    /**
     * Base URL of the network
     */
    base: string,

    /**
     * Path to a resource, either absolute or relative
     */
    icon?: any,

    /**
     * Prefix of the handle, if any. Think of the "@" for Twitter handles
     */
    handlePrefix?: string,
};

export const networks: Record<string, Network> = {
    github: {
        base: 'https://github.com/',
    },
    twitter: {
        base: 'https://twitter.com/',
        handlePrefix: '@',
    },
    linkedin: {
        base: 'https://linkedin.com/in/',
    },
    io: {
        base: 'https://techhub.iodigital.com/authors/',
        icon: '/logo/iO-logo_black.svg',
    },
};
