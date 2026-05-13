# Specification: Simplified Docs Page

## 1. Sidebar Navigation ("CONTENTS")
- The system SHALL update the sidebar anchor links to only include two items:
  - "Installation" (linking to `#installation`)
  - "How to Use" (linking to `#how-to-use`)
- All other previous sidebar links ("Running", "Telemetry Events", "Sync & Status") MUST be removed.

## 2. Main Content Update
The system SHALL replace the existing technical content in `Docs.tsx` with the following simplified instructions. DO NOT alter the layout container, typography classes, or page title ("Getting Started with DevFlow").

### Section 1: Installation
**Anchor:** `#installation`
**Icon:** Lucide `Download`
**Text Content:** Install from a `.vsix` file (most common method). If you have an extension file like:
```text
extension-name.vsix
```

Via VS Code UI:
1. Open Visual Studio Code.
2. Navigate to the Extensions view (Ctrl+Shift+X).
3. Click the ... (More Actions) icon in the top right of the Extensions view.
4. Select Install from VSIX...
6. Select your .vsix file.
7. Restart VS Code if prompted.

### Section 2: How to Use
**Anchor**: #how-to-use
**Icon**: Lucide Play
**Text Content**: Just log in, and the extension is ready to use.
