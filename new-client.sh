#!/usr/bin/env bash
# ============================================================
# new-client.sh — Bootstrap a new client project from template
# Usage: bash new-client.sh <project-name> [--sector=<key>]
# ============================================================

set -euo pipefail

TEMPLATE_REPO="https://github.com/antonioprietoj/astro-web-template.git"
VALID_SECTORS="reformas clinica abogados restaurante academia consultor"

# ── Args ──────────────────────────────────────────────────
PROJECT_NAME="${1:-}"
SECTOR="reformas"

for arg in "$@"; do
  case "$arg" in
    --sector=*) SECTOR="${arg#--sector=}" ;;
  esac
done

if [[ -z "$PROJECT_NAME" ]]; then
  echo "Usage: bash new-client.sh <project-name> [--sector=<key>]"
  echo "Sectors: $VALID_SECTORS"
  exit 1
fi

if [[ ! " $VALID_SECTORS " =~ " $SECTOR " ]]; then
  echo "Unknown sector '$SECTOR'. Valid: $VALID_SECTORS"
  exit 1
fi

TARGET_DIR="$HOME/$PROJECT_NAME"

if [[ -d "$TARGET_DIR" ]]; then
  echo "Directory $TARGET_DIR already exists. Aborting."
  exit 1
fi

# ── Clone ─────────────────────────────────────────────────
echo ""
echo "🚀 Creating $PROJECT_NAME (sector: $SECTOR)"
echo "─────────────────────────────────────────────"

git clone "$TEMPLATE_REPO" "$TARGET_DIR"
cd "$TARGET_DIR"

# ── Detach from template remote ───────────────────────────
git remote remove origin
echo "✓ Detached from template remote"

# ── Update DDEV project name ──────────────────────────────
sed -i "s/name: astro-web-template/name: $PROJECT_NAME/" .ddev/config.yaml
echo "✓ DDEV project name: $PROJECT_NAME"

# ── Update vite allowedHosts ──────────────────────────────
sed -i "s/astro-web-template\.ddev\.site/$PROJECT_NAME.ddev.site/g" astro.config.mjs
echo "✓ Vite allowedHosts updated"

# ── Initial commit ────────────────────────────────────────
git add -A
git commit -m "chore: init $PROJECT_NAME from template (sector: $SECTOR)"
echo "✓ Initial commit done"

# ── DDEV start + npm install ──────────────────────────────
echo ""
echo "Starting DDEV..."
ddev start

echo ""
echo "─────────────────────────────────────────────"
echo "✅ Project ready at: https://$PROJECT_NAME.ddev.site"
echo ""
echo "Next steps:"
echo "  1. Edit src/data/site.ts with client data"
echo "     Preset to use: $SECTOR (see src/data/presets/)"
echo "  2. Update site: in astro.config.mjs with production URL"
echo "  3. Replace public/favicon.svg with client logo"
echo "  4. Add images to public/images/"
echo "  5. ddev restart-dev  (if you change astro.config)"
echo ""
echo "  Checklist: see NUEVO-CLIENTE.md"
echo "─────────────────────────────────────────────"
