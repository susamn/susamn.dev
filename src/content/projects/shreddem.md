---
title: "Shreddem"
description: "Mass-delete unwanted emails in seconds. Shreddem caches your Gmail headers locally so you can instantly filter by sender, find unread bloat, and clean up thousands of emails with one click."
pubDate: "2026-04-11"
featured: true
github: "https://github.com/susamn/shreddem"
tags: ["python", "vuejs", "fastapi", "sqlite", "docker", "imap", "productivity"]
---

### High-performance Gmail management tool

Shreddem is designed for bulk email cleanup. It uses IMAP to fetch email headers into a local SQLite cache, allowing users to instantly search, filter, and mass-delete thousands of emails (e.g., by sender or unread status).

#### Key Features:
- **Local Caching:** Fast filtering and searching by caching headers in SQLite.
- **Bulk Actions:** Mass-delete thousands of emails with one click.
- **Modern Stack:** Built with Python (FastAPI) and Vue 3.
- **Dockerized:** Easy deployment using Docker and Docker Compose.
