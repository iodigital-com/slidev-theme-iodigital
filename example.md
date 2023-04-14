---
theme: ./

layout: cover
image: './beekeeper.jpg'
# image: './beehive.jpg'
# image: './shape.png'
# image: './IO_Amsterdam_957.jpg'
---
Presentation slides for developers
# Theme for <em>Slidev</em> presentations

<dl>
  <dt>Subjects</dt>
  <dd>React vs. VueJS vs. SolidJS vs. Angular vs. Web Components vs. The Next Best Thing</dd>

  <dt>Image</dt>
  <dd>Be sure to pick an image which has it's subject in the frame</dd>
</dl>

---
layout: cover
image: './iO_Antwerpen_1521.jpg'
---

# Another Cover Slide
Don't actually use <em>multiple cover slides</em> in a single presentation

---
class: bg-blend-orange
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)


---
layout: intro
image: https://www.davebitter.com/img/dave.jpg
---

# Dave Bitter

- 👨🏼‍🦲 Senior Front-end Consultant
- 👨🏼‍💼 Developer Advocate
- 👌 Google Developer Expert for Web
- 💥 <em>Sucks</em> at pool

::social::
- <SocialLink network="io" handle="dave-bitter" />
- <SocialLink network="github" handle="DaveBitter" />
- <SocialLink network="linkedin" handle="davebitter" />
- <SocialLink network="twitter" handle="dave_bitter" />
---
layout: intro
image: https://avatars.githubusercontent.com/u/6022537?v=4
---

# Arno Koehler

- 👨🏼 Medior Java Tinkerer
- 👨🏼‍💼 Team Manager Ninjava
- 💥 <em>Vakkundig herriemaker</em>
- 🏋🏼 Crossfitter

::social::
- <SocialLink network="github" handle="arnokoehler" />
- <SocialLink network="linkedin" handle="arnokoehler" />
- <SocialLink network="twitter" handle="arnokoehler" />
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts{all|2,9,11|10,11|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center bg-blend-blue"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
