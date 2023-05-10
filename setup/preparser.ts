import { definePreparserSetup } from '@slidev/types'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        // Early return if hideInToc (Table of Content) is manually set in frontmatter
        if ('hideInToc' in frontmatter) return content;

        // Default all slides to hideInToc
        frontmatter.hideInToc = true;

        if ('layout' in frontmatter) {
            // Show only slides in ToC with layout: section and level: 1 or undefined
            if (frontmatter.layout === 'section' && (frontmatter.level === 1 || frontmatter.level === undefined)) {
                frontmatter.hideInToc = false;
            }

            return content;
        }
      },
    },
  ]
})

