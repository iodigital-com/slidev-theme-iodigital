import { ChapterColor, chapterColors } from './theme.config';

export const memoize = <T = unknown>(fn: (...args: any[]) => T) => {
    const cache = new Map();

    return (...args) => {
        const key = args[0];

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, ...args);
        cache.set(key, result);
        return result;
    }
};

export const getSectionTitleGetter = ($slidev: any, rawRoutes: any[]) => () => {
    if (rawRoutes.length) {
        for (let i = $slidev.nav.currentPage - 1; i > 0; i--) {
            const { meta } = rawRoutes[i];
            const section = meta.section ?? true;

            if (section === false) {
                // Quit using sections. Use the fall back
                break;
            }

            if (meta.layout !== 'section' || meta.level > 1) {
                // Not a section, on to the previous slide
                continue;
            }
            if (section === true && meta.slide?.title) {
                // Use the current slide’s title
                return meta.slide.title;
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

/**
 * Filter all avialable chapters from `rawRoutes`.
 *
 * *Note*: The first slide will always initiate the 'introduction' chapter
 *
 * @param rawRoutes `import rawRoutes from '/@slidev.routes'`
 * @returns Array of all routes which initiate a new chapter
 */
export const getAllChapters = (slides: any[]) => slides.reduce((routes, route) => {
    const { meta } = route;

    // The 1st slide always belongs to the 'introduction' chapter
    if (meta.slide?.id === 0) {
        routes.push({
            ...route,
            meta: {
                ...meta,
                chapter: 'introduction',
            },
        });
    }
    else if (meta.chapter) {
        routes.push(route);
    }

    return routes;
}, []);

/**
 * Filter all routes from `rawRoutes` which initiate a new section
 *
 * *Note*: The first route will always initiate a new section
 *
 * @param rawRoutes `import rawRoutes from '/@slidev.routes'`
 * @returns Array of all routes which initiate a new section
 */
export const getAllSections = (slides: any[]) => slides.filter(route => route.meta.layout === 'section');

/**
 * Get the route which initiated the current chapter
 *
 * @param slideId Result of `$slidev.nav.currentSlideId`
 * @param chapters Result of {@link getAllChapters getAllChapters(rawRoutes)}
 * @returns Route which initiated the current chapter
 */
export const getCurrentChapter = (slideId: number, chapters: any[]) => chapters.findLast(c => c.meta.slide.id <= slideId) ?? chapters[0];

/**
 * Get the route which initiated the current section
 *
 * @param slideId Result of `$slidev.nav.currentSlideId`
 * @param chapters Result of {@link getAllSections getAllSections(rawRoutes)}
 * @returns Route which initiated the current (sub(sub))section
 */
export const getCurrentSection = (slideId: number, sections: any[]) => sections.findLast(s => s.meta.slide.id <= slideId) ?? sections[0];

/**
 * Retrieve the color which represents the current chapter.
 *
 * * `orange` for the _introduction_ chapter
 * * `purple` for the _conclusion_ chapter
 * * `blue` for any other chapter, which is assumed to be the _story_
 *
 * The story may consist of multiple chapters, hence assuming anything else is the _story_
 *
 * @param chapter the chapter of which the current slide is
 * @returns The color which represents the current chapter
 */
export const getChapterColor = (chapter: string): ChapterColor => chapterColors[chapter] ?? ChapterColor.BLUE;
