---
title: "mpdtui"
description: "A lazygit-style terminal UI for MPD, with vim motions, fzf-style fuzzy pickers, and a lightweight inline mode."
pubDate: "2026-08-04"
github: "https://github.com/susamn/mpdtui"
featured: true
tags: ["go", "tui", "cli", "mpd", "homebrew"]
---

mpdtui is a terminal UI for MPD (Music Player Daemon) built around the
same panel-and-keybinding feel as lazygit: bordered panels, single-key
contextual actions, and vim-style navigation, no mouse required.

It has three ways to run: a full panel UI (Library browsing/search,
Playlists, Queue, a live Now Playing bar), a lightweight inline mode
(`-mini`) that renders a couple of status lines in place for a tmux pane
instead of taking over the screen, and fzf-style fuzzy pickers (`-p`
for playlists, `-t` for tracks) for quick one-shot lookups from the
shell. Everything updates live via MPD's `idle` protocol, so it stays
in sync even when playback changes from another client.

Written in Go with tview/tcell, distributed via a Homebrew tap.
