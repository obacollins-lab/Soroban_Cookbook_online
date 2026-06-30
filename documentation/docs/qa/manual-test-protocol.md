---
title: Manual Testing Protocol
description: QA checklist and procedures for testing Soroban Cookbook releases.
sidebar_position: 1
---

# Manual Testing Protocol

This document provides a comprehensive manual testing checklist for validating the Soroban Cookbook before release. All items must be verified before pushing to production.

**Last Updated:** June 2026  
**Scope:** Documentation site, pattern pages, interactive components, and navigation

---

## Pre-Release Checklist

### Environment Setup

- [ ] Development environment is clean (no stale node_modules)
- [ ] All dependencies installed: `bun install` or `npm install`
- [ ] All automated tests pass: `npm run test` (if applicable)
- [ ] Build completes without errors: `npm run build`
- [ ] Linting passes: `npm run lint`
- [ ] Type checking passes: `npm run typecheck`
- [ ] Formatting is correct: `npm run format:check`

---

## 1. Navigation & Site Structure

### Main Navigation Menu

- [ ] Home link navigates to landing page
- [ ] "Getting Started" dropdown opens and all sub-items are visible
- [ ] "Concepts" dropdown opens and all sub-items are visible
- [ ] "Patterns" dropdown opens and all sub-items are visible
- [ ] "Contributing" link navigates to contribution guide
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Mobile menu items are clickable and functional
- [ ] All navigation links have correct paths (no 404s)

### Breadcrumb Navigation (if applicable)

- [ ] Breadcrumbs appear on all pages
- [ ] Breadcrumb links navigate to correct parent pages
- [ ] Breadcrumb text is accurate
- [ ] On mobile, breadcrumbs are readable and don't overflow

### Footer Navigation

- [ ] Footer links are present and clickable
- [ ] Social media links open in new tabs
- [ ] External links (GitHub, Discord, etc.) are correct
- [ ] Footer appears on all pages

---

## 2. Search Functionality

### Search Bar

- [ ] Search bar is visible on all pages (desktop and mobile)
- [ ] Search bar accepts input
- [ ] Search returns relevant results for common terms:
  - [ ] "token"
  - [ ] "storage"
  - [ ] "authorization"
  - [ ] "error handling"
- [ ] Search results display with correct titles and descriptions
- [ ] Search result links navigate to correct pages
- [ ] Search handles special characters without errors
- [ ] Search clears when clicking clear button
- [ ] Search is keyboard accessible (Enter to search, Escape to close)

### Advanced Search (if applicable)

- [ ] Filter by category works
- [ ] Filter by difficulty works
- [ ] Multiple filters can be applied together
- [ ] "Clear filters" button resets all filters

---

## 3. Theme & Styling

### Light Mode

- [ ] Site displays in light theme by default
- [ ] Text is readable (sufficient contrast)
- [ ] Links are visually distinct and underlined
- [ ] Code blocks have proper syntax highlighting
- [ ] Images display correctly without transparency issues
- [ ] Buttons have clear hover states
- [ ] Form inputs are visible and properly styled
- [ ] Alerts/callouts display with correct colors and icons

### Dark Mode

- [ ] Dark mode toggle is accessible
- [ ] Site switches to dark theme when toggled
- [ ] Text is readable in dark mode (sufficient contrast)
- [ ] Links remain visually distinct
- [ ] Code blocks have proper syntax highlighting for dark theme
- [ ] Images display correctly (no white/light backgrounds bleeding)
- [ ] Buttons have clear hover states in dark mode
- [ ] Form inputs are visible in dark mode
- [ ] Alerts/callouts display appropriately in dark mode
- [ ] Theme preference persists on page reload

### Responsive Design

- [ ] Desktop view (1920px): All content fits, no horizontal scroll
- [ ] Tablet view (768px): Content reflows correctly, touch targets are adequate
- [ ] Mobile view (375px): Content is readable, no text overflow
- [ ] Mobile view (480px): All features remain functional
- [ ] iPad Pro (1024px): Layout looks intentional
- [ ] All images scale proportionally across breakpoints
- [ ] Navigation is accessible on all screen sizes
- [ ] No content is hidden unintentionally on mobile

### Typography & Spacing

- [ ] Font sizes are consistent across pages
- [ ] Line height is adequate for readability
- [ ] Margins and padding are consistent
- [ ] Headings use proper hierarchy (h1 > h2 > h3, etc.)
- [ ] Code font is monospace and readable
- [ ] Tables render with proper spacing and alignment

---

## 4. Documentation Pages

### Getting Started Section

- [ ] Setup guide loads without errors
- [ ] Code blocks render with proper syntax highlighting
- [ ] Copy-to-clipboard functionality works on code blocks
- [ ] External links (to Soroban docs, etc.) are correct
- [ ] All prerequisites are clearly listed
- [ ] Installation steps are accurate and up-to-date

### Concepts Pages

- [ ] All concept pages load correctly
- [ ] Cross-links between concepts work
- [ ] Code examples are properly formatted
- [ ] Diagrams/images load correctly
- [ ] Terminology is consistent throughout
- [ ] No placeholder text remains

### Pattern Pages

- [ ] All pattern categories display correctly
- [ ] Pattern cards show:
  - [ ] Contract name
  - [ ] Description
  - [ ] Difficulty badge (beginner/intermediate/advanced)
  - [ ] Category tag
  - [ ] Icon (if applicable)
- [ ] Pattern cards are clickable and navigate to pattern detail
- [ ] Code examples expand/collapse correctly
- [ ] Copy button works on code examples
- [ ] Related patterns are linked correctly

### Individual Pattern Pages

- [ ] Pattern title and description are present
- [ ] Code tabs (if multiple languages) are switchable
- [ ] Full source code is displayed or linked
- [ ] "Requirements" or "Prerequisites" section is clear
- [ ] Security considerations are highlighted
- [ ] "Next Steps" or "Related Patterns" section provides guidance
- [ ] External links to examples/repos work correctly

### Contributing Guide

- [ ] All sections are present and readable
- [ ] Code examples in contributing guide render correctly
- [ ] Links to GitHub workflows/scripts are accurate
- [ ] Branching conventions are clearly explained
- [ ] Submission checklist is complete
- [ ] Links to support channels (Discord, etc.) work

---

## 5. Components & Interactive Elements

### Code Blocks

- [ ] Syntax highlighting works for all supported languages (Rust, TypeScript, JavaScript, etc.)
- [ ] Line numbers display correctly (if enabled)
- [ ] Code doesn't overflow horizontally on mobile
- [ ] Copy button copies entire code block correctly
- [ ] Code block height is manageable (scrollable if too long)
- [ ] Code font rendering is clear and monospace

### Callouts & Alerts

- [ ] Info callouts display with correct icon and color
- [ ] Warning callouts display with correct icon and color
- [ ] Danger/Error callouts display with correct icon and color
- [ ] Success callouts display with correct icon and color
- [ ] Callout text is readable over background
- [ ] Callouts are present on relevant pages

### Buttons

- [ ] Primary buttons have correct styling and hover state
- [ ] Secondary buttons have correct styling and hover state
- [ ] Button text is clear and action-oriented
- [ ] Buttons are accessible via keyboard (Tab + Enter)
- [ ] Button padding/sizing is consistent

### Forms (if applicable)

- [ ] Input fields are properly labeled
- [ ] Input fields accept input correctly
- [ ] Error messages display clearly
- [ ] Success messages display after submission
- [ ] Form validation works (required fields, email format, etc.)
- [ ] Submit button is clearly visible and functional

### Cards & Grids

- [ ] Pattern preview grids display 3+ columns on desktop
- [ ] Pattern preview grids stack to 1 column on mobile
- [ ] Card spacing is consistent
- [ ] Cards are interactive (hover states)
- [ ] Cards display all necessary information
- [ ] Grid gaps are appropriate

---

## 6. Pages & Routes

### Homepage

- [ ] Page loads without errors
- [ ] Hero section is visually complete
- [ ] CTA buttons are prominent and clickable
- [ ] Pattern preview section loads with sample patterns
- [ ] Stats section displays correct numbers
- [ ] Testimonials section renders correctly
- [ ] Newsletter signup form is functional
- [ ] All sections are properly spaced

### Pattern Overview Page (`/docs/category/patterns`)

- [ ] Category links are all present:
  - [ ] Tokens
  - [ ] DeFi
  - [ ] Governance
  - [ ] NFT
  - [ ] Utility
- [ ] Category landing pages load correctly
- [ ] Back links return to overview

### Category Landing Pages

- [ ] `/patterns/tokens` loads with token-specific patterns
- [ ] `/patterns/defi` loads with DeFi-specific patterns
- [ ] `/patterns/governance` loads with governance patterns
- [ ] `/patterns/nft` loads with NFT-specific patterns
- [ ] `/patterns/utility` loads with utility patterns
- [ ] Each category page displays 3+ relevant patterns
- [ ] Navigation back to overview works

### 404 Error Page

- [ ] 404 page displays when navigating to non-existent routes
- [ ] 404 page provides helpful navigation options
- [ ] "Back to Home" button works
- [ ] Search suggestion feature works (if applicable)
- [ ] Page is not blank or generic

---

## 7. Performance & Load Times

### Page Load Performance

- [ ] Homepage loads within 3 seconds (first paint)
- [ ] Documentation pages load within 2 seconds
- [ ] Pattern pages load without blocking main content
- [ ] No console errors or warnings on page load
- [ ] Images are lazy-loaded (no unnecessary downloads)
- [ ] Code blocks don't block page rendering

### Interaction Performance

- [ ] Search results appear within 500ms
- [ ] Theme toggle is instant
- [ ] Menu opens/closes smoothly without lag
- [ ] Scrolling is smooth (no jank)
- [ ] Code block expand/collapse is instant
- [ ] Page transitions are smooth

### Network Conditions

- [ ] Site is usable on slow 3G (throttle to test)
- [ ] Critical content loads even with high latency
- [ ] Images scale appropriately for slow connections

---

## 8. Accessibility

### Keyboard Navigation

- [ ] All interactive elements are reachable via Tab
- [ ] Tab order follows visual layout
- [ ] Buttons can be activated with Enter/Space
- [ ] Menu can be navigated with arrow keys
- [ ] Escape key closes modals/menus
- [ ] Focus is never lost or trapped

### Screen Reader Compatibility

- [ ] Page title is descriptive
- [ ] Headings are semantic (h1, h2, h3)
- [ ] Images have alt text (meaningful descriptions)
- [ ] Links have descriptive text (not "click here")
- [ ] Form labels are associated with inputs
- [ ] Error messages are announced to screen readers
- [ ] Landmark regions are properly marked (nav, main, etc.)

### Color & Contrast

- [ ] Text contrast meets WCAG AA standard (4.5:1 for normal text)
- [ ] Color is not the only way to convey information
- [ ] Links are distinguishable from body text (not color alone)
- [ ] Form validation errors are indicated beyond color

### Focus Indicators

- [ ] Focus outline is visible on all interactive elements
- [ ] Focus outline has sufficient contrast
- [ ] Focus indicator is not missing on any element

---

## 9. Cross-Browser Testing

### Desktop Browsers

- [ ] Chrome/Chromium (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)

### Mobile Browsers

- [ ] Chrome Mobile (latest)
- [ ] Safari Mobile (iOS)
- [ ] Firefox Mobile (latest)

**For each browser, test:**

- [ ] Page loads without errors
- [ ] Styling renders correctly
- [ ] No layout shifts or broken elements
- [ ] Interactive elements work
- [ ] Search functionality works
- [ ] Theme toggle works

---

## 10. External Integrations

### GitHub Links

- [ ] Links to repository open correct page
- [ ] Links to specific files/lines are accurate
- [ ] Edit on GitHub buttons work (if applicable)

### Community Links

- [ ] Discord server link is valid
- [ ] Community forum/discussion links work
- [ ] Email contact links are correct

### Analytics (if applicable)

- [ ] Page view tracking is working
- [ ] Interaction events are tracked
- [ ] No broken image/beacon requests

---

## 11. Release-Specific Checks

### Version & Metadata

- [ ] Site version/build number is correct
- [ ] Meta tags (og:image, description) are accurate
- [ ] Favicon displays correctly
- [ ] Social media preview shows correct image/description

### Redirects (if applicable)

- [ ] Old documentation URLs redirect correctly
- [ ] Deprecated pages show proper redirect message
- [ ] No redirect chains or loops

### Deployment Verification

- [ ] Site is accessible at production domain
- [ ] HTTPS certificate is valid
- [ ] SSL/TLS is enforced (no mixed content)
- [ ] Headers are set correctly (CSP, X-Frame-Options, etc.)

---

## Testing Sign-Off

### Before Approving Release

| Item                  | Tested | Result    | Notes |
| --------------------- | ------ | --------- | ----- |
| Navigation            | [ ]    | PASS/FAIL |       |
| Search                | [ ]    | PASS/FAIL |       |
| Theme                 | [ ]    | PASS/FAIL |       |
| Documentation         | [ ]    | PASS/FAIL |       |
| Components            | [ ]    | PASS/FAIL |       |
| Routes                | [ ]    | PASS/FAIL |       |
| Performance           | [ ]    | PASS/FAIL |       |
| Accessibility         | [ ]    | PASS/FAIL |       |
| Cross-Browser         | [ ]    | PASS/FAIL |       |
| External Integrations | [ ]    | PASS/FAIL |       |
| Release Checks        | [ ]    | PASS/FAIL |       |

**Overall Status:** [ ] READY FOR RELEASE [ ] ISSUES FOUND (see below)

**Issues Found:**

```
- Issue 1: [Description]
- Issue 2: [Description]
```

**Tested by:** ******\_\_\_\_******  
**Date:** ******\_\_\_\_******  
**Browser/Device:** ******\_\_\_\_******

---

## Quick Testing Script

For faster testing iterations, run through this abbreviated checklist:

1. **Navigation:** Click through main sections (Getting Started, Concepts, Patterns)
2. **Search:** Search for "token", verify results load
3. **Theme:** Toggle dark/light mode, verify styling
4. **Patterns:** Visit `/patterns/tokens` and `/patterns/defi`
5. **404:** Navigate to `/nonexistent` page
6. **Performance:** Check DevTools Network tab, verify &lt;3s load time
7. **Mobile:** Inspect element, test responsive design at 375px
8. **Accessibility:** Press Tab multiple times, verify focus is visible

---

## Reporting Issues

If you find a bug during manual testing:

1. Document the issue clearly:
   - [ ] Steps to reproduce
   - [ ] Expected behavior
   - [ ] Actual behavior
   - [ ] Screenshots/video (if visual)
   - [ ] Browser/device used

2. Create a GitHub issue with:
   - Title: "BUG: [Short description]"
   - Labels: `bug`, `qa-found`, `urgent` (if blocking release)
   - Link to QA checklist item that failed

3. Do NOT proceed with release if any item is marked FAIL

---

## Related Documentation

- [Contributing Guide](../contributing.md)
- [Performance Benchmarks](../contributing/performance-impact.md)
- [CI/CD Pipeline](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/blob/main/CI_CD_PIPELINE.md)
