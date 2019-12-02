---
layout: default
prevPage: pages/nomad
nextPage: 
slug:
    - Summary
---

{::options parse_block_html="true" /}

### What Have We Learned?

- Development for HCL Nomad does not require a tablet?
- "Fit with margins" or "Fit to window" on tables will give a degree of responsiveness, but only so far as the content allows.
- Images often work better on mobile devices, because of the screen size. However, they take more effort to create.
- "Alt" versions of images can be used to confirm to the user a button has been clicked.
- There is no option for a "mask" while code behind a button is running, so keep code to a minimum.
- "Refresh Display" setting for "On Refresh" may be more appropriate for mobile devices.
- Icons in columns make better use of screen real estate, but the intention behind the icon needs to be clear. Help pages can be useful. Row colours may be another beneficial development technique, see the Domino Designer Help for more details.
- Images instead of text on forms can give a more modern feel.
- Comboboxes are better for HCL Nomad thank Dialog Lists - they combine both functionality on mobile devices. However, the size needs to take into account options available.
- Hide-when formulas apply to the whole paragraph. So this may require some creative approaches to layout of content.
- Dashboards can be produced with images and text, overlaid with hotspots.
- Action hotspots cannot be added to Computed Text or around tables.
- Environment variables are a useful technique for passing selections between frames and between pages.
- @DbLookups and @DbColumns in dashboards work well with local replicas. But because of network speeds, they will not work well against a server-based application.
- Formula language can be used in some contexts, but LotusScript may be needed in others.
- @Platform can be used in if statements to target mobile devices.
- If a Frameset or frame content cannot be loaded, the default view of the database (all visible views on left, a specific view on the right) is displayed.
- Use "Make Available Offline" on HCL Nomad to create a local replica.
- You will need to replicate via the "Replication" page and "Replicate All" button. Alternatively, as a developer you may choose to use LotusScript to programmatically replicate.