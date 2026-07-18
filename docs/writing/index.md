---
title: Writing
description: The writing principles, framework, and style rules for all product interface text.
sources:
  - https://design.liferay.com/lexicon/writing/
  - https://design.liferay.com/lexicon/writing/principles/
  - https://design.liferay.com/lexicon/writing/writing-framework/
  - https://design.liferay.com/lexicon/writing/style/
status: poc-draft
---

# Writing

Words give meaning to the interface: clear, confident, consistent messaging is
as much a part of the product as its components. This guide condenses the
writing principles, framework, and style rules shared by every product screen.
Pair it with the [Common Actions](/patterns/common-actions) vocabulary and the
[Common Content Patterns](/patterns/common-content-patterns) rules.

## Principles

- **Clear**: longer is not more helpful. Use simple, natural language, remove
  unnecessary words and messaging for obvious interactions, start sentences
  with the objective, and let progressive disclosure and documentation fill the
  gaps.
- **Current**: speak in the present tense and describe the current context; the
  product exists to help the user now.
- **Confident**: use an active voice and set a tone that builds trust, without
  arrogance (no "best of breed" or "unrivaled").
- **Consistent**: one message, one construction, one style. Consistency lets
  the user focus on the task instead of reinterpreting variations.
- **Conversational**: humanize the interface. Speak in first person on behalf
  of Liferay, address the user in the second person, and use gender neutral
  pronouns (they, their, them) for third parties.

## Framework

- **Be clear and concise**: keep sentences under about 20 words, use concrete
  words, and reveal information as needed for the task at hand.
- **Use an active voice, mostly**: subject, verb, object. Reserve the passive
  voice for responses to an action or to soften negative statements.
- **Write at a lower reading level**: natural language, no industry jargon; if
  a middle schooler could not follow it, simplify.
- **Make content scannable**: break long blocks into short paragraphs or
  lists, use headings, and lead with the objective so keywords stand out.
- **Use the positive form**: say what the user can do, not what they cannot;
  avoid negative and sarcastic language.
- **Persons**: first person (we, us) for Liferay; second person (you) for the
  user, without overusing pronouns; "I" and "my" only when the user answers a
  question or in legal consent; avoid "My X" in navigation.
- **Simple tenses**: present, past, and future; nothing more elaborate.
- **Localization**: American English styling for consistency with translation
  services; avoid local and colloquial phrases.

## Style essentials

### Capitalization

Use sentence case as the general rule: it scans faster, saves space, and keeps
the rules simple. The exceptions:

- **UI references**: match the casing of the element on screen.
- **Proper nouns** are title cased; **abbreviations** are uppercased.
- **Navigation items** are title cased (application names are title case in
  menus, sentence case inside sentences).
- **Small labels, chart labels, and section dividers** (10 to 12px styles) are
  uppercased for accessibility and hierarchy.
- **Features** are not sub-branded: describe them so they sound natural in
  conversation, focusing on the user's intention rather than the product.

### Punctuation

Punctuate full sentences. Fragments and phrases (bullet lists, radio and
checkbox labels, field headers, help text, table headers) take sentence case
and no closing punctuation.

Hyphens join compound words and en dashes express ranges. Em dashes are not
allowed: if you reach for one (or a semicolon), split the text into two
sentences.

### Numbers

- In non technical prose, spell out zero through nine and use numerals from 10
  up (both cardinal and ordinal).
- In UI elements, always use numerals. Separate thousands with commas when the
  exact number matters; when it does not, express large numbers as numerals
  plus million or billion, or abbreviate (rounding to one decimal) in overview
  screens.

### Dates and time

- Prefer the full date ("Month DD, YYYY"), abbreviating the month to at least
  three characters when space demands it. If a numeric date is unavoidable,
  use ISO-8601 (`YYYY-MM-DD`) and never a number-only local format.
- Use "a.m." and "p.m." with a space after the numeral, skip ":00" on whole
  hours, prefer "noon" and "midnight" over 12:00, and write ranges with an en
  dash and no spaces.

## Using this guide in reviews

During design reviews, identify and categorize the actions (check them against
[Common Actions](/patterns/common-actions)) and the longer texts (check them
against the [Common Content Patterns](/patterns/common-content-patterns)
messaging rules and this framework).

## Related

- [Common Actions](/patterns/common-actions)
- [Common Content Patterns](/patterns/common-content-patterns)
- [Typography foundation](/foundations/typography)
