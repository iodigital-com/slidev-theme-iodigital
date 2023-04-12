# Icons

To make sure the iconography in our slide decks is aligned, we only support icons from Material Design Icons (MDI). Other sets are not available. When a necessary icon is not available in MDI, you can easily add custom icon.

## Using icons

To use an icon from either MDI or the custom icon set, simply reference it in your HTML. They are automatically imported using the `AutoImport` feature in [`/vite.config.ts`](/vite.config.ts). Explicitly importing the icon also works.

Icons have their own distinct self closing HTML element. They can only be used as such and use this naming convention: `icon-[set]-[name]` or `Icon[Set][Name]`. A few examples:
- `<icon-mdi-account />`
- `<IconMdiAccount />`
- `<IconIoLogo />`

### Styling icons

Icons are seen as inline text, inheriting the size and color of the text around it. To change this, you can use Tailwind's utilities like you would use it on text, e.g. `<IconIoLogo class="w-24 text-red-600" />` or `<icon-mdi-account class="mx-auto w-48" />`

## Creating custom icons

Every other icon we need which isn't supported can be made usable by adding its SVG in this folder. E.g. the [iO logo](./io/logo.svg).

### When to create a custom icon

Only create a custom icon when you are sure that it will be used in multiple slide decks. A prime example is the [iO logo](./io/logo.svg), which is part of the [cover layout](/layouts/cover.vue) and the bottom bar.

### How to create a custom icon

Creating a custom icon is rather easy: just create an SVG in the `io/` folder. The file depicts the icon you wish to use.

#### Rules
- Only create when it will be part of (nearly) all slide decks which use this theme.
- Never to support only your own slide deck(s). Create the icon there.
- Preferably use a solid color.
    - Let that color be `currentColor` so it is easily stylable using CSS.
- Don't use paddings inside the SVG. Use the full canvas
- The canvas is `1.2em` wide and high (`<svg width="1.2em" height="1.2em" ...`) to make sure it sizes perfectly with inline text.
