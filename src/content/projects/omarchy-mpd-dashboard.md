---
title: "Omarchy MPD Dashboard"
description: "A native titlebar widget and interactive popup dashboard for MPD with embedded album art extraction, seek bar, queue management, and media search."
pubDate: "2026-08-23"
featured: true
github: "https://github.com/susamn/omarchy-mpd-dashboard"
tags: ["qml", "mpd", "music", "tui", "hyprland", "omarchy"]
images: ["../../pages/projects/screenshots/omarchy-mpd-dashboard/preview.png", "../../pages/projects/screenshots/omarchy-mpd-dashboard/preview-desktop.png"]
---

### Compact Music Player Daemon Control for the Desktop

**Omarchy MPD Dashboard** is an Omarchy bar widget and interactive popup controller for the Music Player Daemon ([MPD](https://www.musicpd.org/)), providing comprehensive playback control, embedded album art, real-time seek bar, and music library search.

#### Core Features

- **Now Playing Display & Cover Art**:
  - Direct native album art streaming from MPD via `mpc readpicture` (embedded ID3 tags) and `mpc albumart` (folder covers) without third-party CLI tools.
  - Live metadata display for Track Title, Artist, Album, and Release Date.
- **Interactive Seek & Progress Bar**:
  - Full-width seek slider matching Omarchy theme tokens with split elapsed/remaining duration counters.
  - Drag or click to scrub through any point of the song.
- **Playback & Mode Toggles**:
  - Transport controls (Play/Pause, Previous, Next).
  - Mode toggles for Shuffle (`mpc random`), Repeat (`mpc repeat`), Single (`mpc single`), and Consume (`mpc consume`).
- **Queue & Library Search**:
  - **Paginated Queue**: View upcoming queued tracks, jump to track positions, or remove entries on the fly.
  - **Live Search**: Query MPD music database by Track, Artist, or Playlist and append or immediately play selection.
- **Keyboard Shortcuts & Hyprland Integration**:
  - Keyboard hotkeys (`Space`/`p` for play/pause, `n`/`b` for next/prev, `s`/`r` for shuffle/repeat).
  - IPC binding support via `omarchy-shell susamn.mpd-dashboard toggle`.
