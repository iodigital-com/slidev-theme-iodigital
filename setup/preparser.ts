import { definePreparserSetup } from '@slidev/types'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        frontmatter.hideInToc = true;

        if ('layout' in frontmatter) {
            if (frontmatter.layout === 'section' && (frontmatter.level === 1 || frontmatter.level === undefined)) {
                frontmatter.hideInToc = false;
            }

            return content;
        }
      },
    },
  ]
})

