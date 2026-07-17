---
title: Get Started
description: What Clay is, when to use it, how to install it, and how its components compose.
sources:
  - https://www.clayui.com/docs/introduction/how-to-use-clay
  - https://www.clayui.com/docs/introduction/composition
  - https://design.liferay.com/lexicon/get-started/
status: poc-draft
---

# Get Started

Clay is Liferay's component library and CSS framework. Use it to build interfaces
that look and behave like Liferay's own product, with React components and a CSS
framework that share one visual language.

Clay is the web implementation of Lexicon, Liferay's design language. Lexicon
defines the foundations, patterns, and component specifications; Clay implements
them in code. These docs bring both together, so each page gives you the design
intent and the implementation in one place. You do not need to consult Lexicon
separately.

## When to use Clay, and when not to

<!-- REVIEW: the exact wording of this positioning is pending alignment with product messaging. -->

Clay is built first for Liferay's own needs, so it is focused on administration
interfaces. Use the guidance below to choose the right tool for what you are
building.

### When to use Clay

- You are building or extending an **administration UI** inside Liferay, such as
  an application in the Control Panel, a configuration screen, or a widget's edit
  view. Here the recommendation is to use Clay as much as possible, so your
  interface stays consistent with the rest of the product.
- You want components that already match Lexicon's specifications and Liferay's
  accessibility and interaction standards, so you do not have to rebuild them.

### When to use Liferay's site-building stack

- You are building a **public facing site**. Clay components are part of the
  Liferay ecosystem and you can reuse them, but reusing them is not the primary
  recommendation for public sites. Clay's focus is administration.
- You want the site to follow its own design language. Liferay has spent years
  investing in full customization for the end client: importing complete third
  party design systems, fragments, the page editor, style books, and client
  extensions. That flexibility is what lets you build public sites fully adapted
  to your own brand and needs, without depending on Clay's visual vocabulary.

In short: for an administration UI, prefer Clay. For a public site with its own
design language, prefer Liferay's site-building tools, and treat Clay as
optional.

## Installation

Clay publishes each component and the CSS in the `@clayui` scope on npm. Install
the CSS package plus the packages for the components you need.

### NPM

```shell
npm install @clayui/css @clayui/button
```

### Yarn

```shell
yarn add @clayui/css @clayui/button
```

Replace `@clayui/button` with the packages you need, for example `@clayui/card`
or `@clayui/modal`. You can browse the full list of packages on npm under the
`@clayui` scope.

### CDN

If you only need the CSS and do not want to install packages, load it from a CDN:

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
/>
```

To pin a version, add it to the package name, for example `@clayui/css@3.165.0`.

## Quick start

Import the CSS once in your application entry point, then import and use a
component:

```jsx
import '@clayui/css/lib/css/atlas.css';
import Button from '@clayui/button';

export default function App() {
	return <Button displayType="primary">Save</Button>;
}
```

From here, add the components you need. Each component page in these docs shows
its design guidance, a short implementation example, and the full API reference.

## Composition philosophy

Clay is a multi-layered API. Most components come in two layers, and there is
also a pure CSS layer (`@clayui/css`) for HTML only use:

- **Low level components** are the building blocks. They are flexible and usually
  controlled, so you compose them to build exactly the behavior you need. Clay
  nests them with a namespace, for example `DropDown`, `DropDown.ItemList`, and
  `DropDown.Item`.
- **High level components** are built on top of the low level ones and cover
  common cases quickly. They follow a `ComponentNameVariant` naming pattern, for
  example `ClayDropDownWithItems` or `ClayButtonWithIcon`.

Start with a high level component when it fits your case. Drop down to the low
level components when you need more control. For more on any component, see its
page in the sidebar.
