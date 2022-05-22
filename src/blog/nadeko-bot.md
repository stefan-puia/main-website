---
title: Nadeko Bot
date: 2022-03-20T14:05:17.264Z
imageFull: /uploads/nadeko.webp
imageAlt: anime girl with red eyes and white hair
imageCredit: Nadeko Sengoku, Bakemonogatari series
portfolio:
  isPortfolio: true
  technologies:
    - csharp
    - redis
    - docker
    - google-cloud
    - discord
  githubSource: https://github.com/StefanPuia/nadeko
featured:
  isFeatured: false
  description: Popular general-purpose Discord bot written in C#
  imageThumb: /uploads/nadeko.thumb.webp
---
I'm currently maintaining a fork of a popular discord bot, [NadekoBot](https://nadeko.bot/). (Forked from <https://gitlab.com/Kwoth/nadekobot>)

My additions to this fork include custom commands that were required by the Discord servers that I'm administering, such as:
* pruning messages older than a specified amount of time
* generating raid compositions automatically with the [raid composition tool](https://stefanpuia.co.uk/blog/world-of-warcraft-raid-composition-tool/) based on sign-ups from the [raid-helper](https://raid-helper.dev/) bot
* discord role checks