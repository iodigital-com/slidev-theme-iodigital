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
class: bg-orange
layout: section
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
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---
# Table of content
<Toc />

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
layout: default

---
# <em>Fresh Prince of Bel-Air</em> Theme Song
## DJ Jazzy Jeff & The Fresh Prince

Now this is a story all about how my life got flipped, turned upside down. And I'd like to take a minute and sit right there, I'll tell all about how I became the <em>Prince</em> of a town called <em>Bel-Air</em>.

- In West Philadelphia born and raised
- On the playground was where I spent most of my days

### Chillin' out <em>maxin'</em>, relaxin' all cool

1. And shooting some b-ball outside of the school
1. When a couple of guys, who where up to no good
1. started making trouble in my <em>neighborhood</em>
1. I got in 1 little fight and my mom got scared. She said:

<em>"You're movin' with your auntie and uncle in Bel-Air"</em>

---
layout: section
section: New section
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
layout: full
---
# A full size layout

<div class="flex gap-8">
  <p class="w-2/3 text-justify">
    You'll have waaaaaaaay more space to display larger content. This offsets the `default` layout which puts the title and optional subtitle on the left side and the content on the right side, divided equally. This layout shows your slide's title in full width. You are free to format your content however you want. By default it spans the full width and height of the available area. Set up columns if you want.
  </p>
  <img class="w-1/3" src="/beehive.jpg" alt="Picture of a bee on a honeycomb">
</div>

<div class="flex gap-8">
  <img class="w-1/3" src="/beekeeper.jpg">
  <p class="w-2/3 text-justify">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi pariatur necessitatibus ut adipisci vel ad, aperiam magni, id eaque at quae nisi quibusdam? Libero sint qui commodi voluptate atque. Aperiam, ex. Rerum iste ducimus sunt, omnis, nulla aliquam dignissimos ipsum ex quam architecto veniam ab nesciunt aut dolores deleniti quia voluptatem mollitia qui dicta, excepturi repellendus quaerat? Corrupti, vitae. Eos, suscipit ea voluptatum qui vero quibusdam fuga incidunt, culpa at quo, quam ipsam quia perferendis reiciendis tenetur quidem totam eligendi architecto sequi doloremque ex iste in asperiores! Delectus, laudantium.
  </p>
</div>

---
layout: full
---
# Full size layout

<div class="flex">
  <div class="w-1/2 mr-4"><img src="/amsterdam.webp" alt="Map of Amsterdam City Center in sepia"></div>
  <div class="w-1/2 ml-4">
    Amsterdam die grote stad,<br>
    die is gebouwd op palen.<br>
    En als die stad eens ommeviel,<br>
    wie zou dat dan betalen?
  </div>
</div>
---
layout: center
class: "text-center bg-blend-blue"
---
# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
---
section: false
---
# Yet another slide

The footer should display the presentation's title from here on out

<ProfileCard
  firstName="John"
  lastName="Doe"
  functionTitle="Front-end developer"
  email="john.doe@iodigital.com"
  telephone="06-12345678"
/>

<ProfileCard
  firstName="John"
  lastName="Doe"
  functionTitle="Front-end developer"
  email="john.doe@iodigital.com"
  telephone="06-12345678"
  image="https://picsum.photos/200/200"
/>

<ProfileCard
  firstName="John"
  lastName="Doe"
  functionTitle="Front-end developer"
  email="john.doe@iodigital.com"
  telephone="06-12345678"
/>

<ProfileCard
  firstName="John"
  lastName="Doe"
  functionTitle="Front-end developer"
  email="john.doe@iodigital.com"
  telephone="06-12345678"
/>
---
layout: quote
author: Walter Landor
source: 16-04-1992
cite: https://en.wikipedia.org/wiki/Brand
---

Products are made in a factory but brands are created in the mind

---
layout: two-cols
division: "40/60"
---
# left
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nunc orci. Donec sit amet tincidunt ipsum. Maecenas tristique ornare nisi a ullamcorper. 

Praesent semper pellentesque viverra. Donec consectetur condimentum quam, vel dapibus ipsum venenatis ac. Aliquam erat volutpat. 

Vivamus non arcu at nisi auctor interdum. Praesent laoreet aliquam tempor.

::right::
# right
Integer convallis dignissim nunc et hendrerit. Proin tempus, eros sed tristique fringilla:

- Sapien leo 
- Vulputate nisl 
- Pulvinar suscipit 
- Eros augue nec tortor. 
