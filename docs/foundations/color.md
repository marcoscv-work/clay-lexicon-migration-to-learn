---
title: Color
description: The full Clay color palette, with the role, variations, and SCSS variable of each color.
sources:
  - https://design.liferay.com/lexicon/foundations/color/
  - https://www.clayui.com/docs/css/color
status: poc-draft
---

# Color

Color carries a large part of Clay's visual identity, brings harmony to the
interface, and helps communicate meaning. The palette below was chosen for how
well the colors combine and with accessibility in mind, and every color is
available in code as an SCSS variable in `@clayui/css`. You can replace the
palette with your own brand colors; see
[Customizing the palette](#customizing-the-palette).

## Primary colors

The three primary colors define most of the visual identity:

- **Dark** `#272833` (`$dark`, `$gray-900`): text and icons, first level
  navigation background, borders, and dividers.
- **Primary** `#0B5FFF` (`$primary`): main actions such as primary buttons and
  links.
- **White** `#FFFFFF` (`$white`): backgrounds for cards, toolbars, modals, and
  forms, and text or icons on dark surfaces.

### Dark variations

- **Dark D2** `#111116` (`$dark-d2`)
- **Dark D1** `#1C1C24` (`$dark-d1`)
- **Dark** `#272833` (`$dark`): first level navigation background and primary
  texts.
- **Dark L1** `#30313F` (`$dark-l1`): second level navigation background.
- **Dark L2** `#393A4A` (`$dark-l2`): third level navigation background and the
  active state on navigation.

### Primary variations

- **Primary D2** `#004AD7` (`$primary-d2`): active state of buttons and links.
- **Primary D1** `#0053F0` (`$primary-d1`): hover state of buttons and links.
- **Primary** `#0B5FFF` (`$primary`): main actions and links.
- **Primary L0** `#5791FF` (`$primary-l0`): tuned to keep a 3:1 contrast ratio
  against white.
- **Primary L1** `#80ACFF` (`$primary-l1`): links in the navigation section.
- **Primary L2** `#B3CDFF` (`$primary-l2`): disabled backgrounds.
- **Primary L3** `#F0F5FF` (`$primary-l3`): hover and active backgrounds in
  tables and lists.

## Neutral grays

Two neutral groups support the primary colors. The light group provides surfaces:

- **Light D2** `#D3D6E0` (`$light-d2`)
- **Light D1** `#E2E4EA` (`$light-d1`)
- **Light** `#F1F2F5` (`$light`, `$gray-200`): the application's main
  background, input backgrounds, and the active state of the secondary button.
- **Light L1** `#F7F8F9` (`$light-l1`, `$gray-100`): hover state of the
  secondary button.

The secondary group provides muted text and borders:

- **Secondary** `#6B6C7E` (`$secondary`, `$gray-600`): secondary texts.
- **Secondary L0** `#9393A4`: tuned to keep a 3:1 contrast ratio against white.
- **Secondary L1** `#A7A9BC` (`$gray-500`): disabled texts.
- **Secondary L2** `#CDCED9` (`$gray-400`): borders of clickable elements such
  as buttons.
- **Secondary L3** `#E7E7ED` (`$gray-300`): disabled backgrounds and divider
  borders.

## Status colors

Status colors give meaning to feedback such as [alerts](/components/alert). They
always work together with an icon and text, never color alone. Each one has a
darker pair for hover and active states, a lighter step for borders, and a very
light step for message backgrounds.

### Error

- **Error D2** `#AB1010` (`$danger-d2`): active state of buttons and links.
- **Error D1** `#C31212` (`$danger-d1`): hover state of buttons and links.
- **Error** `#DA1414` (`$danger`): text color in error messages.
- **Error L1** `#F48989` (`$danger-l1`): border color in error messages.
- **Error L2** `#FEEFEF` (`$danger-l2`): background color in error messages.

### Success

- **Success D2** `#1C5629` (`$success-d2`): active state of buttons and links.
- **Success D1** `#226A33` (`$success-d1`): hover state of buttons and links.
- **Success** `#287D3C` (`$success`): text color in success messages.
- **Success L1** `#5ACA75` (`$success-l1`): border color in success messages.
- **Success L2** `#EDF9F0` (`$success-l2`): background color in success
  messages, such as alerts.

### Warning

- **Warning D2** `#863A00` (`$warning-d2`): active state of buttons and links.
- **Warning D1** `#9F4500` (`$warning-d1`): hover state of buttons and links.
- **Warning** `#B95000` (`$warning`): text color in warning messages.
- **Warning L1** `#FF8F39` (`$warning-l1`): border color in warning messages.
- **Warning L2** `#FFF4EC` (`$warning-l2`): background color in warning
  messages, such as alerts.

### Info

- **Info D2** `#234584` (`$info-d2`): active state of buttons and links.
- **Info D1** `#294F98` (`$info-d1`): hover state of buttons and links.
- **Info** `#2E5AAC` (`$info`): text color in informational messages.
- **Info L1** `#89A7E0` (`$info-l1`): border color in informational messages.
- **Info L2** `#EEF2FA` (`$info-l2`): background color in informational
  messages.

## Chart colors

Data visualization uses its own, longer palette, tuned so adjacent series stay
distinguishable. Use it for charts instead of the interface colors above:

- **Blue** `#4B9FFF` (`$blue`)
- **Orange** `#FFB46E` (`$orange`)
- **Red** `#FF5F5F` (`$red`)
- **Teal** `#50D2A0` (`$teal`)
- **Pink** `#FF73C3` (`$pink`)
- **Green** `#9CE269` (`$green`)
- **Purple** `#AF78FF` (`$purple`)
- **Yellow** `#FFD76E` (`$yellow`)
- **Cyan** `#5FC8FF` (`$cyan`)
- **Indigo** `#7785FF` (`$indigo`)

## Using color in code

Every color above ships in `@clayui/css` as an SCSS variable with the `!default`
flag, so you can reference it in your styles or override it before importing the
theme:

```scss
// _custom.scss, imported before atlas.scss
$primary: #6200ee;
$danger: #b00020;
```

For one-off usage in markup, the CSS framework also provides text and background
utility classes for the palette:

```html
<span class="text-secondary">Muted helper text</span>
<div class="bg-light">A light surface</div>
<span class="text-danger">An inline error</span>
```

See the [CSS framework overview](/css/) for how variables, maps, and utilities
fit together.

## Using color accessibly

- Do not rely on color alone to convey meaning. Use color as an enhancement, and
  always pair it with an icon, a label, or text.
- Keep text and its background at a contrast ratio of at least 4.5:1. The
  palette includes steps tuned for contrast, such as Primary L0 `#5791FF` and
  Secondary L0 `#9393A4`, which keep a 3:1 ratio against white for large text
  and graphical objects.
- When you customize the palette, re-check contrast for text, icons, and
  interactive states.

## Customizing the palette

This palette reflects Liferay's visual identity. You can substitute it with
colors that match your own brand by overriding the SCSS variables shown above.
When you do, keep the roles (primary, neutral, status) and the accessibility
guidance, so the interface stays coherent and usable.

## Related

- [Typography](/foundations/typography)
- [Grid](/foundations/grid)
- [Alert](/components/alert), which uses the status colors
- [CSS framework](/css/), for variables, maps, and utilities
