---
title: "Omarchy MPD Lyrics Overlay"
description: "A desktop overlay plugin for Omarchy delivering butter-smooth synced .lrc and plain .txt lyrics with interactive click-to-seek and Vim navigation."
pubDate: "2026-08-24"
featured: true
github: "https://github.com/susamn/omarchy-mpd-lyrics-line"
tags: ["qml", "python", "mpd", "music", "vim", "hyprland", "omarchy"]
images: ["../../pages/projects/screenshots/omarchy-mpd-lyrics-line/screenshot-desktop.png", "../../pages/projects/screenshots/omarchy-mpd-lyrics-line/screenshot-modal.png"]
---

### Real-Time Synchronized Lyrics for Music Player Daemon

**Omarchy MPD Lyrics Overlay** brings real-time synced `.lrc` and plain `.txt` lyrics to the desktop in a clean, centered modal popup designed for Omarchy and Hyprland.

#### Live Demo

<div class="rounded-2xl overflow-hidden border border-stone-200 shadow-md my-6 bg-stone-900">
  <video src="/videos/omarchy-mpd-lyrics-line.mp4" controls autoplay loop muted playsinline class="w-full h-auto block m-0">
    Your browser does not support the video tag.
  </video>
</div>

#### Highlights & Capabilities

- **Butter-Smooth 7-Row Synced Window**:
  - **Context Rows (0–2)**: 3 preceding lines with progressive vignette transparency (0.20, 0.40, 0.65).
  - **Active Line (Row 3)**: Bright accent highlighting, bold weight, and prominent typography locked at center position.
  - **Upcoming Rows (4–6)**: 3 upcoming context lines with fading opacity.
  - Smooth vertical glide animation synchronized to track playback.
- **Interactive Click-to-Seek**:
  - Click any line in synced mode to seek MPD playback directly to that exact song timestamp.
- **Local Track Lyrics Resolution**:
  - Automatically queries the current track from MPD via raw TCP protocol and matches adjacent `.lrc` / `.txt` files in the local music directory without external API dependencies.
- **Vim Navigation & Keybindings**:
  - Full Vim keybindings for navigation: `j` / `k` (line-by-line), `Ctrl+d` / `Ctrl+u` (half-page), `gg` (top), and `G` (bottom).
  - Dismiss immediately with `Esc`, `q`, or clicking outside the modal.
- **Hyprland IPC Binding**:
  - Trigger or toggle overlay visibility via `omarchy-shell susamn.mpd-lyrics toggle`.
