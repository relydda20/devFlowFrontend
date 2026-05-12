# Specification: Scroll To Top Behavior

## 1. Requirement
- The system SHALL automatically scroll the window to the absolute top (`x: 0, y: 0`) every time the user navigates to a new route.

## 2. Implementation
- The system SHALL utilize a utility component named `ScrollToTop`.
- This component MUST use the `useLocation` hook from `react-router-dom` to detect route changes.
- It MUST use a `useEffect` hook that triggers `window.scrollTo(0, 0)` whenever the `pathname` changes.