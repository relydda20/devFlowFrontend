# Specification: Docs Page Verbatim Content

The system SHALL replace the existing generic content in `Docs.tsx` with the following exact text and code blocks. DO NOT summarize or alter the technical commands.

## 1. Installation & Setup
Follow these steps to generate the extension and install all necessary dependencies before running it in your workspace.

**1. Install the Extension Generator**
`npm install -g yo generator-code`

**2. Generate the Extension**
`yo code`
*(When prompted, select: New Extension - TypeScript)*

**3. Install Dependencies**
`npm install axios`
`npm install`

**4. Compile and Lint**
Compile the TypeScript files from `src/` to `out/` and run the linter to ensure there are no errors:
`npm run compile`
`npm run lint`

## 2. Running the Extension
Once compiled, you need to launch the extension in a localized development environment to observe its behavior.

**1. Launch the Development Host**
Open the project in VS Code and press `F5`. This will open a new window called the **Extension Development Host**. The extension activates automatically via the `onStartupFinished` event.

**2. Verify Connection**
Check the bottom-right status bar. You should see an indicator reading: `DevVital AI: 0 queued`.

**3. View Internal Logs**
1. Open the Command Palette (`Ctrl + Shift + P`).
2. Run `Output: Focus on Output View`.
3. Select the `DevVital AI` channel from the dropdown menu.

## 3. Testing Telemetry Events
With the Development Host running, perform the following actions to verify that DevFlow is capturing the correct workflow signals.

- **File Save**: Modify any file and press `Ctrl + S`. Triggers the `file_save` event. 
- **Text Change**: Type normally, or paste a block of text containing more than 100 characters. Triggers the `text_change` event. Pasting >100 characters appends the `"is_large_paste": true` payload.
- **Editor Switch**: Open multiple files and rapidly switch between the tabs (more than 5 times within 60 seconds). Triggers the `editor_switch` event with `"is_rapid_context_switching": true`.
- **Debug Session**: Open the Run and Debug panel and start any debug configuration. Triggers the `debug_session_start` event.
- **Terminal Open**: Open a new integrated terminal using `Ctrl + Shift + \``. Triggers the `terminal_open` event.

## 4. Synchronization & Status
DevFlow buffers your events locally and syncs them to your backend.

- **Auto-Sync Behavior**: The internal `SyncService` automatically attempts to flush the event buffer every 60 seconds.
- **Manual Flush**: Open the Command Palette and run `DevVital AI: Flush Telemetry`. Sends queued events via POST to `http://localhost:3000/api/v1/telemetry`.
- **Check Telemetry Status**: Run `DevVital AI: Show Telemetry Status` to display a popup with your queued events and active minutes.