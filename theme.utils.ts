import { ChapterColor, chapterColors } from './theme.config';

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
export const getChapterColor = (chapter: string): ChapterColor => chapterColors[chapter.toLowerCase()] ?? ChapterColor.BLUE;
