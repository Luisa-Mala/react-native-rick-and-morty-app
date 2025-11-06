# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Expo (SDK ~54) React Native app using npm (package-lock.json present)
- Styling via NativeWind (Tailwind CSS) with babel plugin and tailwind.config.js
- ESLint 9 with expo + prettier config
- No tests or native build scripts are configured in this repo

Common commands
- Install dependencies (CI-safe):
  - npm ci
- Start dev server (Expo):
  - npm start
- Open on specific platforms:
  - Android: npm run android
  - iOS: npm run ios
  - Web (react-native-web via Metro): npm run web
- Lint:
  - npm run lint

Notes on builds and tests
- Native release builds (APK/IPA) are not configured here. Use Expo’s EAS Build in a separate step if needed; no EAS config files are present in this repo.
- Testing is not set up (no jest config or test scripts). Running a single test is not applicable until tests are added.

High-level architecture
- Entry and app root
  - index.js uses Expo’s registerRootComponent to load App.
  - App.js wraps the tree with SafeAreaProvider and renders <Main /> inside a full-screen View with Expo StatusBar.
- Data layer
  - lib/character.js exposes:
    - getLatestCharacter(): fetches characters from the Rick and Morty API and returns a simplified array { id, name, image, status }.
    - getGameDetails(slug): fetches game details from a Metacritic-related API and maps fields into a simple object (title, description, score, img, reviews). This function isn’t currently used by the UI.
- UI composition
  - components/Main.jsx: page-level container. On mount, calls getLatestCharacter(), stores results in state, and renders:
    - A header with <Logo /> and a title.
    - A FlatList (2 columns) of AnimatedCharacterCard items. Shows ActivityIndicator while loading.
  - components/CharacterCard.jsx:
    - CharacterCard: displays character image, name, and a <Status /> indicator.
    - AnimatedCharacterCard: simple fade-in per-item animation using Animated.timing with a stagger based on index.
  - components/Status.jsx: renders a colored dot and status label. Chooses Tailwind classes by status (Alive/Dead/other).
  - components/Logo.jsx: SVG logo using react-native-svg.
- Styling
  - Tailwind (NativeWind) is enabled via babel.config.js (plugins: ["nativewind/babel"]) and tailwind.config.js (content globs cover App.*, components/**, and app/**).
  - Inline styles are also used alongside className-based styles in some components.
- Assets and config
  - assets/ contains app icons and splash images referenced by app.json.
  - app.json configures name/slug, splash, icons, newArchEnabled, and web bundler = "metro".

Tooling & configuration highlights
- package.json scripts:
  - start / android / ios / web map to expo start variants
  - lint uses expo lint (ESLint)
- Babel: babel-preset-expo + nativewind plugin (babel.config.js)
- ESLint: extends ["expo", "prettier"] with the prettier plugin enforcing formatting as errors (eslint.config.js)
- Tailwind: tailwind.config.js defines content globs and default theme; NativeWind consumes className props in components

Platform considerations
- Status.jsx imports components from "react-native-web" and uses Tailwind className. If running on native (Android/iOS), ensure this component (and others using className) are compatible; in many setups className works on react-native core components via NativeWind. If issues appear on device, consider importing from "react-native" instead of "react-native-web" for native platforms.
