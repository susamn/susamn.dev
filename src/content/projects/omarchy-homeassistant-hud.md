---
title: "Omarchy Home Assistant HUD"
description: "A clean, distraction-free Home Assistant controller bar widget and interactive popup dashboard for Omarchy with room grouping, entity discovery, and device controls."
pubDate: "2026-08-25"
featured: true
github: "https://github.com/susamn/omarchy-homeassistant-hud"
tags: ["qml", "python", "home-assistant", "iot", "hyprland", "omarchy"]
images: ["../../pages/projects/screenshots/omarchy-homeassistant-hud/preview.png", "../../pages/projects/screenshots/omarchy-homeassistant-hud/preview-custom.png"]
---

### Distraction-Free Smart Home Control for the Desktop

**Omarchy Home Assistant HUD** is a native bar widget and interactive popup dashboard built for [Omarchy](https://github.com/susamn) using Quickshell and QML. It connects directly to a Home Assistant instance to provide seamless, single-click control over smart home devices without requiring a browser window.

#### Key Architecture & Highlights

- **Multiple Dynamic Views**:
  - **Dense 3-Column Collage Board**: Space-filling card grid providing maximum information density.
  - **By Room / Area**: Automatically organized according to Home Assistant Areas (Living Room, Kitchen, Office, etc.) with active entity counters.
  - **By Domain / Type**: Categorized by device classes (Lights, Switches, Climate, Covers, Sensors, Scenes).
- **Comprehensive Device Controls**:
  - **Lights**: Real-time state toggling, glow indicators, and expandable brightness sliders (0–100%).
  - **Switches & Plugs**: Instant binary toggles.
  - **Climate & Thermostats**: Live ambient temperature readings with quick setpoint adjustments (`[-]` / `[+]`).
  - **Covers & Locks**: Open, Stop, Close buttons for garage doors/blinds, and 1-click lock toggling.
  - **Scenes & Scripts**: Single-click trigger execution.
  - **Sensors**: Real-time telemetry (power consumption, temperature, humidity, battery levels).
- **Live Entity Discovery**:
  - Built-in search and discovery browser to add entities directly into curated dashboard boards.
  - Direct paste support for Home Assistant entity IDs.
- **IPC & Window Manager Integration**:
  - Native IPC binding support for Hyprland key shortcuts (`omarchy-shell susamn.homeassistant toggle`).
