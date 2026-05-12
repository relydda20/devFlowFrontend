# Specification: Docs Page Content & Structure

## 1. Page Layout
- The system SHALL render a two-column layout on desktop:
  - **Left**: Sidebar navigation containing anchor links.
  - **Right**: Main documentation content.
- The system SHALL ensure the page sits below the global fixed Navbar.

## 2. Sidebar ("CONTENTS")
The sidebar SHALL contain the following links that anchor to their respective sections:
- Installation & Setup
- Running the Extension
- Testing Telemetry Events
- Synchronization & Status

## 3. Main Content Sections
The main content SHALL be structured using dark UI cards for grouped instructions, mimicking the reference design.

### 3.1 Header
- **Title**: "Getting Started with DevFlow"
- **Subtitle**: "Your guide to installing, configuring, and testing your local development analytics environment."

### 3.2 Installation & Setup
- **Icon**: Lucide `Download` (Blue/Accent).
- **Steps**:
  1. Install the VS Code extension generator: `npm install -g yo generator-code`
  2. Generate the extension: `yo code` (Select: New Extension - TypeScript)
  3. Install dependencies: `npm install axios` followed by `npm install`
  4. Compile TypeScript: `npm run compile` (Compiles `.ts` from `src/` to `out/`)
  5. Run Linter: `npm run lint`

### 3.3 Running the Extension
- **Icon**: Lucide `Play` or `Terminal` (Green).
- **Instructions**:
  - Open the project in VS Code and press `F5` to launch the Extension Development Host.
  - The extension activates automatically via `onStartupFinished`.
  - The bottom-right status bar will display: `DevVital AI: 0 queued`.
  - Open the Command Palette (`Ctrl + Shift + P`), run `Output: Focus on Output View`, and select the `DevVital AI` channel to view internal logs (e.g., Listeners registered).

### 3.4 Testing Telemetry Events
- **Icon**: Lucide `Activity` (Blue).
- **Content**: Grouped testing instructions.
  - **File Save**: Modify a file and press `Ctrl + S`. Triggers `file_save` event. Status bar increments.
  - **Text Change**: Type or paste >100 characters. Triggers `text_change` event (includes `is_large_paste` payload).
  - **Editor Switch**: Rapidly switch tabs (>5 times in 60s). Triggers `editor_switch` event (includes `is_rapid_context_switching` payload).
  - **Debug Session**: Start a debug configuration. Triggers `debug_session_start` event.
  - **Terminal**: Open a new terminal (`Ctrl + Shift + \``). Triggers `terminal_open` event.

### 3.5 Synchronization & Status
- **Icon**: Lucide `RefreshCcw` (Purple/Accent).
- **Content**:
  - **Manual Flush**: Run `DevFlow AI: Flush Telemetry` via Command Palette. Sends queued events to `http://localhost:3000/api/v1/telemetry`. If the backend is off, it retries automatically.
  - **Check Status**: Run `DevFlow AI: Show Telemetry Status` to view collected metrics (queued events, active minutes).
  - **Auto Sync**: The SyncService automatically attempts to push the buffer every 60 seconds.