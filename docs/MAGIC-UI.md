# Magic UI provenance

Retrieved directly using @magicuidesign/mcp 2.0.0 over stdio on 2026-09-22.

The MCP tools/list response exposed listRegistryItems, searchRegistryItems and getRegistryItem. getRegistryItem was called with includeSource:true for:

- bento-grid — https://magicui.design/r/bento-grid.json
- blur-fade — https://magicui.design/r/blur-fade.json
- magic-card — https://magicui.design/r/magic-card.json

Adaptation, not a React installation: the site keeps its original static generator. dist/site.css uses Bento Grid's asymmetric CSS grid/overflow structure; dist/site.js implements Blur Fade's once-in-view opacity, translation and blur using Web Animations, and Magic Card's element-relative pointer coordinates with a radial highlight. React/Motion/next-themes were not added. The palette, composition, content and page templates are Cey Studios-specific.

Accessibility differences: all content starts visible, card links remain visible on touch and keyboard, reduced motion disables enhancements, pointer effects only run for fine pointers. No automatic moving marquee, fake metrics, stock testimonials or fabricated product screenshots.
