import { definePreparserSetup } from '@slidev/types'



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default definePreparserSetup(() => {
    let previousFrontmatter: any = undefined;
    const slideConfig = {
        currentChapter: 'introduction',
        currentSection: undefined,
        currentLevel: 1,
    }

    function getSlideTitle(content) {
        // Return the first title of the slide content
        return ((content.match(/^#\s+(.+)\n?/) || [])[1]);
    }

    function getTransitionDirection(frontmatter) {
        if (slideConfig.currentSection === undefined) {
            return 'slide-left';
        }

        if (frontmatter.layout === 'section' && (frontmatter.level === 1 || frontmatter.level === undefined) && previousFrontmatter) {
            previousFrontmatter.transition = 'slide-left';
        }

        return 'slide-up';
    }

    return [{
        // Hide non-sections layouts in ToC
        transformSlide(content, frontmatter) {
            // Early return if hideInToc (Table of Content) is manually set in frontmatter
            if ('hideInToc' in frontmatter) return content;

            // Default all slides to hideInToc
            frontmatter.hideInToc = true;

            if ('layout' in frontmatter) {
                if (frontmatter.layout === 'section') {
                    // Show only slides in ToC with layout: section, section is not set to false and level: 1 or undefined
                    if (frontmatter.section !== false && (frontmatter.level === 1 || frontmatter.level === undefined)) {
                        frontmatter.hideInToc = false;
                    }
                }
            }

            return content;
        },
    },{
        // Set current section and chapter in frontmatter for each slide
        transformSlide(content, frontmatter) {
            if ('layout' in frontmatter) {
                if (frontmatter.layout === 'section') {
                    if (frontmatter.section !== false && (frontmatter.level === 1 || frontmatter.level === undefined)) {
                        slideConfig.currentSection = getSlideTitle(content);
                    }
                    slideConfig.currentLevel = frontmatter.level ?? 1;
                }
            }

            if ('chapter' in frontmatter) {
                slideConfig.currentChapter = frontmatter.chapter;
            }

            frontmatter.iometa = { ...slideConfig };

            return content;
        }
    },{
        // Set transition direction in frontmatter for each slide
        transformSlide(content, frontmatter) {
            // Early return if transition is manually set in frontmatter
            if ('transition' in frontmatter) return content;

            frontmatter.transition = getTransitionDirection(frontmatter);

            previousFrontmatter = frontmatter;

            return content;
        }
    }]
})

