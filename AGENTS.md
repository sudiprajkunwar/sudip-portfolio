# Architecture rules
- Use global semantic CSS tokens for all portfolio colors and surfaces so the theme remains consistent across sections.
- Keep portfolio career and technology data in a shared content module to avoid inconsistent duplicated content.
- Compose the portfolio from independently identified sections and derive navigation from the visible section list to keep scrolling links synchronized.
- Resolve CDN asset pointers against the hosted application origin for environments without the asset proxy, including local preview and GitHub Pages.