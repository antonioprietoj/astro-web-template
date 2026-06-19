#!/usr/bin/env bash
# ============================================================
# push-to-template.sh
# Copy a reusable file/folder from a client project back to
# the parent template repo and push it.
#
# Usage:
#   bash push-to-template.sh <source> <dest-in-template> [message]
#
# Examples:
#   # Copy a new content-library block
#   bash push-to-template.sh \
#     src/content-library/sections/hero-video/ \
#     src/content-library/sections/hero-video/
#
#   # Copy a utility
#   bash push-to-template.sh \
#     src/utils/format-date.ts \
#     src/utils/format-date.ts \
#     "feat(utils): add formatDate helper"
#
#   # Copy a preset
#   bash push-to-template.sh \
#     src/data/presets/index.ts \
#     src/data/presets/index.ts \
#     "feat(presets): add farmacia sector"
# ============================================================

set -euo pipefail

TEMPLATE_REPO="https://github.com/antonioprietoj/astro-web-template.git"
TEMPLATE_DIR="$HOME/.cache/astro-web-template-push"

SOURCE="${1:-}"
DEST="${2:-}"
MSG="${3:-}"

# ── Validation ────────────────────────────────────────────
if [[ -z "$SOURCE" || -z "$DEST" ]]; then
  echo "Usage: bash push-to-template.sh <source> <dest-in-template> [commit-message]"
  echo ""
  echo "Examples:"
  echo "  bash push-to-template.sh src/content-library/sections/my-block/ src/content-library/sections/my-block/"
  echo "  bash push-to-template.sh src/utils/format.ts src/utils/format.ts 'feat(utils): add format helper'"
  exit 1
fi

if [[ ! -e "$SOURCE" ]]; then
  echo "Error: source '$SOURCE' does not exist."
  exit 1
fi

# Auto-generate commit message if not provided
if [[ -z "$MSG" ]]; then
  BASENAME=$(basename "$SOURCE")
  MSG="feat(content-library): add ${BASENAME}"
fi

# ── Clone or update template repo ─────────────────────────
if [[ -d "$TEMPLATE_DIR/.git" ]]; then
  echo "Updating local template cache..."
  git -C "$TEMPLATE_DIR" pull --ff-only
else
  echo "Cloning template repo..."
  git clone "$TEMPLATE_REPO" "$TEMPLATE_DIR"
fi

# ── Copy files ─────────────────────────────────────────────
DEST_FULL="$TEMPLATE_DIR/$DEST"
DEST_PARENT=$(dirname "$DEST_FULL")

mkdir -p "$DEST_PARENT"

if [[ -d "$SOURCE" ]]; then
  cp -r "$SOURCE/." "$DEST_FULL"
  echo "Copied directory: $SOURCE → $DEST"
else
  cp "$SOURCE" "$DEST_FULL"
  echo "Copied file: $SOURCE → $DEST"
fi

# ── Commit & push ──────────────────────────────────────────
cd "$TEMPLATE_DIR"

if git diff --quiet && git diff --cached --quiet; then
  echo "Nothing new to push — template already has these files."
  exit 0
fi

git add -A
git commit -m "$MSG"
git push

echo ""
echo "✅ Pushed to template: $MSG"
echo "   Repo: $TEMPLATE_REPO"
echo "   File: $DEST"
