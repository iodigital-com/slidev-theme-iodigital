# How To Organize Your Slide Deck Into Chapters and Sections

## Chapters

An iO themed presentation consists of at least 3 chapters: the `introduction`, at least 1 `story`, and the `conclusion`. Each chapter has their own corresponding color which will be reflected in some of its slides, e.g. in the background of the `section` layout. The first slide in your deck will always start the `introduction` chapter. Any chapter can occur multiple times with a slide deck, as a slide deck can consist of multiple presentations.

### What Do Chapters Do?

The only thing chapters do is determine the color scheme for certain slide layouts. The `introduction` chapter has an orange theme. The main `story` is displayed in blue, while the `conclusion` uses a purple theme.

### How To Use Chapters

Any slide can introduce a new chapter by adding the following line in its frontmatter:

```
---
chapter: introduction|story|my new subject|conclusion
...
---
```

## Sections

Sections are a bit more complicated than chapters. The section's title is displayed in the slide's footer and you can have sub sections and even sub sub section. They introduce a new subject of your presentation. Its background is determined by its corresponding [chapter](#chapters) and provides a visual cue for your audience that you are switching subjects. Also, the `<Toc />` component will only show level 1 sections by default. Transitions are also handled based on sections, a new section slides in from the left and all slides within a section slide up.

### How To Use Sections

Introduce a new section by using the `section` layout. Its title will be perpetuated in the footer until a new section is introduced. However, you can also determine the section's title by using the `section` config in the frontmatter.

There could be cases where you only want to use the `section` layout because it looks really good, but omit all its other features. In that case you can set `section: false`.

```
---
layout: section
section: 'Title for the footer'|false # optional
---

# My Awesome New Subject
```

### Sub sections

By using the `level` config in the frontmatter of your `section` slide, you can introduce a sub section or a sub sub section. This gives the slide a different background. The available range is `1-3` where `1` is the default value. Sub sections do not have their title perpetuated in the slide's footer.

```
---
layout: section
level: 1|2|3
---
```
