#!/bin/bash

set -e

echo "Synchronizing Sweden.md content..."

rm -rf src/content
mkdir -p src/content/zh-TW
mkdir -p src/content/en

if [ -f "knowledge/_Home.md" ]; then
  cp "knowledge/_Home.md" "src/content/zh-TW/_Home.md"
fi

if [ -f "knowledge/en/_Home.md" ]; then
  cp "knowledge/en/_Home.md" "src/content/en/_Home.md"
fi

for category_dir in knowledge/*; do
  if [ -d "$category_dir" ]; then
    category_name=$(basename "$category_dir")

    if [ "$category_name" = "en" ]; then
      continue
    fi

    lowercase_category=$(echo "$category_name" | tr '[:upper:]' '[:lower:]')
    mkdir -p "src/content/zh-TW/$lowercase_category"
    cp "$category_dir"/*.md "src/content/zh-TW/$lowercase_category/" 2>/dev/null || true
  fi
done

if [ -d "knowledge/en" ]; then
  for category_dir in knowledge/en/*; do
    if [ -d "$category_dir" ]; then
      category_name=$(basename "$category_dir")
      lowercase_category=$(echo "$category_name" | tr '[:upper:]' '[:lower:]')
      mkdir -p "src/content/en/$lowercase_category"
      cp "$category_dir"/*.md "src/content/en/$lowercase_category/" 2>/dev/null || true
    fi
  done
fi

echo "Sync complete."
