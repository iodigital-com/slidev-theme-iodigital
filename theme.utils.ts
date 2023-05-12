import { ChapterColor, chapterColors } from './theme.config';

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
