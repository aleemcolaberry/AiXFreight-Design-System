// Captions for the before/after gallery. Image availability comes from manifest.js (generated).
// Rule tags reference the skill: SKILL.md §3 (build steps), §4 (non-negotiables), §6 (writing),
// references/patterns.md (recipes) and guidelines/ (accessibility, theming, layout).
window.CASE_GROUPS = [
  {
    id: "g-shell", eyebrow: "Next.js shell", title: "Boot, 404 and error pages",
    intro: "The shell had no designed state of its own: a white page while thirty-five modules loaded, the framework's default 404 for any unknown URL, and no styled boundary if a render threw. Three new files on one shared component cover all of it.",
    items: [
      { key: "shell-boot", title: "First paint while the console boots", status: "new",
        variants: [
          { id: "1280-light", label: "Laptop · light", before: "img/before/live-boot-blank.jpg", after: "img/after/shell-boot-splash-light.jpg" },
          { id: "1280-dark", label: "Laptop · dark", before: "img/before/live-boot-blank.jpg", after: "img/after/shell-boot-splash-dark.jpg" } ],
        changes: ["Before: an empty white page for the two to five seconds it takes to load the console modules and hydrate, and again between “Sign in” and the dashboard.", "After: a server-rendered splash inside the mount point (“Loading your workspace…”, spinner honours <span class=\"mono\">prefers-reduced-motion</span>) that <span class=\"mono\">auth.js</span> and <span class=\"mono\">app.js</span> replace the moment they paint. Verified that all three painters replace the mount’s content rather than append to it.", "Flat brand navy, no gradient; the ring is the one orange element."],
        rules: ["§3.6 Handle every state", "Doherty threshold", "§4.4 Navy chrome, flat solids"] },
      { key: "shell-404", title: "Unknown URL", status: "new",
        variants: [
          { id: "1280-light", label: "Laptop · light", before: "img/before/live-404-default.jpg", after: "img/after/shell-404-light.jpg" },
          { id: "1280-dark", label: "Laptop · dark", before: "img/before/live-404-default.jpg", after: "img/after/shell-404-dark.jpg" },
          { id: "390-light", label: "Mobile 390", before: "img/before/live-404-default-mobile.jpg", after: "img/after/shell-404-mobile.jpg", narrow: true } ],
        changes: ["Before: Next.js’s default “404 | This page could not be found.” on white, no way back.", "After: <span class=\"mono\">app/not-found.tsx</span> on the shared <span class=\"mono\">SystemPage</span>: mark, mono eyebrow “Error 404”, display title, one line of copy that says what happened and where your work still is, a single orange action “Back to the console”. The HTTP status stays 404.", "The page is intentionally theme-independent (brand navy in both), so light and dark match."],
        rules: ["§3.6 Handle every state", "§4.1 One orange call to action", "§6 Errors: what happened + how to fix"] },
      { key: "shell-error", title: "Render error boundary", status: "new",
        variants: [
          { id: "1280-light", label: "Laptop", before: null, after: "img/after/shell-error-light.jpg" } ],
        changes: ["Before: no styled boundary existed; a thrown render error surfaced as the framework’s own overlay or a blank page.", "After: <span class=\"mono\">app/error.tsx</span> and <span class=\"mono\">app/global-error.tsx</span> render the same system page with “Try again” (Next’s <span class=\"mono\">reset()</span>) and a ghost “Reload the console”, plus the error reference when the framework provides a digest. Shown here from a static render of the component; it needs a thrown error to appear in the app."],
        rules: ["§3.6 Handle every state", "§6 Writing: no blame, next step offered"] }
    ]
  },
  {
    id: "g-auth", title: "Sign in, create account, forgot password",
    intro: "The auth screens are a fixed white card beside a navy brand panel and deliberately ignore the theme. One token was not pinned, so an OS in dark mode turned the links pale orange on white.",
    items: [
      { key: "login", fixture: "login", title: "Sign in", status: "fixed",
        changes: ["Dark variant: “Forgot password?” and “Create an account” were the dark-theme orange #FF9552 on the white card, 2.17:1. The auth stylesheet now pins <span class=\"mono\">--teal</span>, <span class=\"mono\">--teal-ink</span> and <span class=\"mono\">--teal-soft</span> to the light values (5.18:1) alongside the greys it already pinned.", "Field labels and helper text use the corrected muted grey (4.28 → 5.16:1).", "Version stamp moved clear of the corner and onto theme tokens with a border. Tablet and mobile layouts were already correct."],
        rules: ["§4.5 Semantic tokens, never raw hex", "Theming: pin light tokens on light-only surfaces", "§4.8 4.5:1 body text"] },
      { key: "login-register", fixture: "login-register", title: "Create an account", status: "fixed",
        changes: ["Same token pins as the sign-in card: link colour safe in OS dark mode, labels and password rules on the corrected grey.", "Form structure, required markers and validation copy were already in line with the skill’s form rules and were left alone."],
        rules: ["§4.5 Semantic tokens", "§3 Forms: visible labels"] },
      { key: "login-forgotpassword", fixture: "login-forgotpassword", title: "Forgot password", status: "fixed",
        changes: ["Token-level only: link colour pinned, helper text grey corrected. No layout change."],
        rules: ["§4.5 Semantic tokens"] }
    ]
  },
  {
    id: "g-dashboard", title: "Dashboard",
    intro: "The first screen after sign-in. Five KPI cards sat in a six-column grid, the pipeline stages had a hover rule that never fired, and every caption was the under-contrast grey.",
    items: [
      { key: "dashboard", fixture: "dashboard", title: "Dashboard", status: "fixed",
        changes: ["KPI row: <span class=\"mono\">repeat(6,1fr)</span> left a dead sixth column because one KPI is filtered out; now <span class=\"mono\">repeat(auto-fit, minmax(150px,1fr))</span> so the five cards fill the row and a sixth would still fit. The fixed three- and two-column overrides at 1180 and 1024px, which left a lonely second row on tablets, were removed too; the row holds five cards down to 720px.", "Captions (“Across all lanes”, “Need agent outreach”, timestamps) from 4.28:1 to 5.16:1 via the <span class=\"mono\">--z400</span> token.", "Hover state: the pipeline stage buttons carried an inline <span class=\"mono\">style</span> that overrode <span class=\"mono\">.pl-stage:hover</span>; the declarations moved into CSS so the existing hover shows. The date chip gained a hover too.", "Version stamp no longer sits under the assistant button. Mobile: the nav drawer variant shows the sidebar labels lifted from 40% to 55% white (3.77 → 6.03:1).", "Not visible here with live data: the “AI Agent Activity” and “Live Outreach Monitor” cards now render an empty state instead of a bare card when they have no rows."],
        rules: ["Layout: grids use minmax", "§4.8 Contrast", "Interaction states: hover", "§3.6 Empty states"] }
    ]
  },
  {
    id: "g-loads", title: "Loads",
    intro: "List, detail, Add Load in its three states, the discard confirm and Edit Load. The list-detail split is where the overflow rules paid off.",
    items: [
      { key: "loads", fixture: "loads", title: "Loads list, nothing selected", status: "fixed",
        changes: ["The right pane was blank until you picked a load; Agents and Campaign already showed a “Select a…” placeholder. A CSS-only <span class=\"mono\">.detail:empty::before</span> adds “Select a load to see its details” with no script change.", "Tablet and mobile: the fixed menu button covered the first letter of “Loads”. <span class=\"mono\">.ll-head</span> now clears it at ≤1024px, the same 64px the dashboard container already had.", "Card metadata and the “121 loads” count on the corrected grey."],
        rules: ["§3.6 Handle every state", "Layout: responsive shell", "§4.8 Contrast"] },
      { key: "loads-detail", fixture: "loads-detail", title: "Load detail", status: "fixed",
        changes: ["Values in the two-column field grid were cut with an ellipsis (“27 Sept 20…”, “Per ton — R…”) and only survived in a tooltip. <span class=\"mono\">.field-value</span> now wraps; nothing is hidden.", "Wrapping alone was not enough: between 901 and 1180px two columns were forced into 215px cards, so values stacked one word per line. The field grid now collapses to one column when the card is narrow (<span class=\"mono\">repeat(auto-fit, minmax(160px,1fr))</span>) and the two section cards stack when the pane is under ~575px, capped at two columns on wide screens.", "Between 901 and 1024px selecting a load showed nothing because the detail pane only swapped in below 900px; the swap now matches the drawer breakpoint and the back button clears the menu button.", "Field labels on the corrected grey. Card structure, the summary header and the action bar unchanged."],
        rules: ["§4.6 Text never overflows", "§4.8 Contrast"] },
      { key: "loads-add-load-modal", fixture: "loads-add-load-modal", title: "Add Load · Smart Paste", status: "fixed",
        changes: ["The “2 · Review & edit” step pill measured 3.78:1 on its fill; corrected grey token.", "Mobile 390: “Insert Sample Load” wrapped into a three-line stack beside the parse button; it now stays on one line and the row wraps under the button when there is no room.", "Labels, hints and the parsed-summary captions on the corrected grey; the empty “Paste a load from anywhere” state was already good and is untouched."],
        rules: ["§4.6 Text never overflows", "§4.8 Contrast", "Fixed canvases: mobile copy budget"] },
      { key: "loads-add-load-sample", fixture: "loads-add-load-sample", title: "Add Load · sample inserted", status: "fixed",
        changes: ["Same token changes as the empty paste state; the sample text and the enabled parse button are unchanged."],
        rules: ["§4.8 Contrast"] },
      { key: "loads-add-load-review-form", fixture: "loads-add-load-review-form", title: "Add Load · parsed review form", status: "fixed",
        changes: ["Field status tags (“Lane detected”, “Rate detected”) use the deepened <span class=\"mono\">--success</span>; “missing” tags use <span class=\"mono\">--danger</span> instead of a literal rose, so they also read correctly in dark mode.", "Required markers and validation messages on tokens; labels on the corrected grey. The master-field selected-value chips (city, state, truck type, material) that the review brief called out render the same as before, only their helper text is darker."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast", "§3 Forms: required markers, validation"] },
      { key: "popup-discard-changes", fixture: "popup-discard-changes", title: "Discard changes? confirm", status: "fixed",
        changes: ["Already the skill’s dialog pattern: the title is the question, the primary button repeats the verb. Only the body copy grey changed."],
        rules: ["Surfaces: Dialog title is the question"] },
      { key: "loads-edit-load-modal", fixture: "loads-edit-load-modal", title: "Edit Load", status: "fixed",
        changes: ["Labels, the “Per ton” option and its conversion note on the corrected grey; invalid-field borders and required stars now use <span class=\"mono\">--danger</span>.", "No change to the master-field chips, the weight and rate logic, or the save action."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast"] }
    ]
  },
  {
    id: "g-agents", title: "Agents",
    intro: "The carrier directory: list with profile pane, Add Agent and Edit Agent. Status pills and inline chips were the main contrast offenders.",
    items: [
      { key: "agents", fixture: "agents", title: "Agents list and profile", status: "fixed",
        changes: ["Header chips “27 verified” and “3 blocked” were inline literals (#15803D at 4.49:1, #E11D48 at 4.18:1, and 3.2 / 3.5:1 in dark). They now emit <span class=\"mono\">var(--success)</span> and <span class=\"mono\">var(--danger)</span>.", "“Verified”, “Active” and “Blocked” pills: <span class=\"mono\">--success</span> deepened to #12703A (5.4:1); the red pill on the danger token.", "Tablet and mobile: “Agents” no longer reads “gents” behind the menu button, and between 901 and 1024px selecting an agent now shows the profile (the swap used to apply only below 900px).", "Card captions (“Last used”, win rate chips) on the corrected grey."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast", "Layout: responsive shell"] },
      { key: "agents-profile", fixture: "agents-profile", title: "Agent profile", status: "fixed",
        changes: ["“Legal name” was cut to “ALEEM ROA…”; field values wrap now.", "The amber “Vehicles verified” / “Drivers verified” pending pills measured 2.9:1 with the icon amber; they use <span class=\"mono\">--amber</span> (4.6:1). Green pills on the deepened success token.", "Masked values still wrap character by character inside the narrow column; that is the masking, not the layout, and was left as is."],
        rules: ["§4.6 Text never overflows", "§4.8 Contrast", "§4.5 Semantic tokens"] },
      { key: "agents-add-agent-modal", fixture: "agents-add-agent-modal", title: "Add Agent", status: "fixed",
        changes: ["Required stars and invalid-input borders on <span class=\"mono\">--danger</span>; section captions and labels on the corrected grey.", "The unlabelled red “0” counter in the paste box is logged as an open item, not changed."],
        rules: ["§4.5 Semantic tokens", "§3 Forms: required markers"] },
      { key: "agents-edit-agent-modal", fixture: "agents-edit-agent-modal", title: "Edit Agent · preferred lanes, truck types", status: "fixed",
        changes: ["Same token changes as Add Agent. The selected-value chips for city and state, and the lane builder, render as before."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast"] }
    ]
  },
  {
    id: "g-campaign", title: "Campaign",
    intro: "Campaign list with the detail pane, New Campaign, and history. The transactions table inside the detail pane was the single worst frame in the review.",
    items: [
      { key: "campaigns-list-and-detail", fixture: "campaigns-list-and-detail", title: "Campaign list and campaign detail", status: "fixed",
        changes: ["Transactions table: the eight-column grid needs about 980px for one line and the detail pane has 560–880px on every common laptop, so at 1280 “Duration” and “Rate”, “Outbound” and “No Answer” read as one word and the date wrapped to four lines. First pass: a 12px column gap, a 150px floor on Time and a sideways scroll inside the card. Second pass, after a fourteen-width sweep showed the scroll still clipped at 1366 and 1536: inside the pane the eight cells wrap onto two aligned lines (Load ID · Agent · Time · Channel over Status · Duration · Rate · Phone) through a container query on the pane, so nothing scrolls or clips; the full-width History page keeps the single line. A guard test pins the ratio string, so no track list was touched.", "Between 901 and 1024px the list already took the full width but the detail pane only swapped in below 900px, so selecting a campaign showed nothing (pre-existing). The swap now matches the drawer breakpoint and the back button clears the floating menu button; the pane’s duplicate small back link is hidden while the pill shows.", "Filter chips, counts and metadata on the corrected grey; the New Campaign button unchanged. The filter-label alignment in the left column is an open item."],
        rules: ["§4.6 Text never overflows", "Pitfalls: wide tables scroll inside the card", "Layout: responsive shell"] },
      { key: "campaigns-new-campaign", fixture: "campaigns-new-campaign", title: "New Campaign", status: "fixed",
        changes: ["Agent cards were a ragged flex-wrap of content-width items; <span class=\"mono\">.camp-chips</span> is now <span class=\"mono\">repeat(auto-fill, minmax(240px,1fr))</span>, an even two-column grid at this width.", "“Unsupported lane” tags used a literal amber (#d97706) and now use <span class=\"mono\">--amber</span>; group labels on the corrected grey.", "The dialog itself, the rate band read-out and the select-all controls are unchanged; the fact that this dialog survives sidebar navigation is an open behaviour item."],
        rules: ["Layout: grids use minmax", "§4.5 Semantic tokens"] },
      { key: "campaigns-history", fixture: "campaigns-history", title: "Campaign history", status: "fixed",
        changes: ["Same transactions-table rules apply on the full-width page; at this width nothing scrolls. This workspace had no rows, so both sides show the existing empty state with the corrected caption grey."],
        rules: ["§3.6 Empty states", "§4.8 Contrast"] }
    ]
  },
  {
    id: "g-calls", title: "Call details and transcript",
    intro: "The call drawer over the campaign page. Status colours came from inline literals in the script; they now come from the tokens, which is what makes dark mode correct.",
    items: [
      { key: "call-details", fixture: "call-details", title: "Call Details · Details tab", status: "fixed",
        changes: ["“COMPLETED” and every rate figure were inline #15803D; they now emit <span class=\"mono\">var(--success)</span>, so dark mode gets the lifted green instead of a 3.2:1 one. Score colours below 60 use <span class=\"mono\">--danger</span> instead of #B91C1C.", "Section captions and the call ID on the corrected grey.", "The raw status enum shown after the status (“COMPLETED_CALL”) is an open copy item. The “Heard at” final-rate link could not be reviewed: no call in the workspace has a captured final rate."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast"] },
      { key: "call-details-tab-transcript", fixture: "call-details-tab-transcript", title: "Call Details · Transcript tab", status: "open",
        changes: ["Unchanged by the branch. For a call that was never answered the tab shows the server-error card (“Details unavailable · Couldn’t load this from the server”); the skill’s rule is an empty state for “nothing to show” and an error card only for a failed fetch. Logged for the backend/frontend owner."],
        rules: ["§3.6 Empty vs error states", "§6 Errors: no blame"] }
    ]
  },
  {
    id: "g-analytics", title: "Analytics and diagnostics",
    intro: "Dense data pages. The measured audit found hover gaps on clickable rows, an amber “drop-off” tag at 3.2:1, and status colours that never flipped in dark mode.",
    items: [
      { key: "analytics", fixture: "analytics", title: "Analytics", status: "fixed",
        changes: ["Funnel rows are clickable for every stage but only one had a pointer and hover; now <span class=\"mono\">.funnel-row[data-action]</span> gets both (hover variant shows the count turning orange).", "“Biggest drop-off” tag and worst-lane callouts: icon amber and literal rose replaced by <span class=\"mono\">--amber</span> and <span class=\"mono\">--danger</span>.", "Lane cover-rate pills and the trend map (“Up”, “Risk”) use the tokens; the “Compare” toggle gained a hover.", "Lane and agent table rows already highlighted their cells on hover; the row-level check was a false positive and nothing was added there."],
        rules: ["Interaction states: hover", "§4.5 Semantic tokens", "§4.8 Contrast"] },
      { key: "diagnostics", fixture: "diagnostics", title: "Diagnostics (latency dashboard)", status: "fixed",
        changes: ["Token-level only: captions, filters and the table’s muted text on the corrected grey. Sort headers and the tab strip already had visible states.", "The page is called “Diagnostics” in the sidebar and “Latency dashboard” in Settings; naming is an open copy item."],
        rules: ["§4.8 Contrast"] }
    ]
  },
  {
    id: "g-settings", title: "Settings, all twelve tabs",
    intro: "Forms and lists. Nothing was broken here visually, which is why the measured audit mattered: every label and help text sat at 4.28:1, and no text input, select or textarea showed a focus ring.",
    items: [
      { key: "settings", fixture: "settings", title: "Company Profile (default tab), incl. tablet and mobile", status: "fixed",
        changes: ["Labels and help text on the corrected grey. The tab list, save bar and the “Latency dashboard” header link are unchanged."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-company-profile", fixture: "settings-company-profile", title: "Company Profile · keyboard focus on a field", status: "fixed",
        changes: ["Focus variant: inputs set <span class=\"mono\">outline:none</span> with no replacement, so a keyboard user could not see where focus was. One rule, <span class=\"mono\">body input:focus-visible, body select:focus-visible, body textarea:focus-visible, body .xsel-trigger:focus-visible</span>, draws a 2px orange outline with 1px offset everywhere, specific enough to beat every <span class=\"mono\">.x input{outline:none}</span> without <span class=\"mono\">!important</span>."],
        rules: ["§4.8 Visible focus, never remove an outline without a replacement"] },
      { key: "settings-users-roles", fixture: "settings-users-roles", title: "Users & Roles", status: "fixed",
        changes: ["Table captions and role pills on the corrected grey; “Invited” and “Active” badges on the deepened success token. E-mail addresses are redacted in these renders."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-permissions", fixture: "settings-permissions", title: "Permissions", status: "fixed",
        changes: ["Grid captions and the role/page matrix labels on the corrected grey; switch states unchanged."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-locations", fixture: "settings-locations", title: "Locations", status: "fixed",
        changes: ["List captions, pager labels and empty-row hints on the corrected grey; the import controls unchanged."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-vehicle-material-types", fixture: "settings-vehicle-material-types", title: "Vehicle & Material Types", status: "fixed",
        changes: ["Column headers and inline “Edit / Deactivate” actions on the corrected grey; add-row inputs get the focus ring."],
        rules: ["§4.8 Contrast", "§4.8 Visible focus"] },
      { key: "settings-outreach-templates", fixture: "settings-outreach-templates", title: "Outreach Templates", status: "fixed",
        changes: ["Template metadata and editor hints on the corrected grey; the mono editor textarea gets the focus ring."],
        rules: ["§4.8 Contrast", "§4.8 Visible focus"] },
      { key: "settings-whatsapp", fixture: "settings-whatsapp", title: "WhatsApp", status: "fixed",
        changes: ["Captions on the corrected grey; the thread preview’s status colours in the WhatsApp module now come from tokens (accepted → <span class=\"mono\">--success</span>, walked → <span class=\"mono\">--danger</span>, expired → <span class=\"mono\">--amber</span>)."],
        rules: ["§4.5 Semantic tokens", "§4.8 Contrast"] },
      { key: "settings-voice-agent", fixture: "settings-voice-agent", title: "Voice Agent", status: "fixed",
        changes: ["Prompt textareas get the focus ring; captions on the corrected grey. Refine / adopt controls unchanged."],
        rules: ["§4.8 Visible focus", "§4.8 Contrast"] },
      { key: "settings-call-settings", fixture: "settings-call-settings", title: "Call Settings", status: "fixed",
        changes: ["Time and cap inputs get the focus ring; the usage line and its help text on the corrected grey."],
        rules: ["§4.8 Visible focus", "§4.8 Contrast"] },
      { key: "settings-billing", fixture: "settings-billing", title: "Billing", status: "fixed",
        changes: ["Plan banner captions and invoice metadata on the corrected grey."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-usage", fixture: "settings-usage", title: "Usage", status: "fixed",
        changes: ["Chart captions and range controls on the corrected grey; clickable day rows unchanged."],
        rules: ["§4.8 Contrast"] },
      { key: "settings-autonomy-slos", fixture: "settings-autonomy-slos", title: "Autonomy & SLOs", status: "fixed",
        changes: ["Rule descriptions and SLO captions on the corrected grey; numeric inputs get the focus ring."],
        rules: ["§4.8 Contrast", "§4.8 Visible focus"] }
    ]
  }
];
