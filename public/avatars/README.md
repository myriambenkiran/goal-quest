# Avatar Assets Naming Guide

## 🎯 Purpose

This folder stores all **Goal Quest avatar images** — one for each character level.  
Each image visually represents the player’s current stage of growth and should follow a consistent naming convention.

---

## 🗂 Folder Structure

```
public/
  avatars/
    mainchar_lvl01.png
    mainchar_lvl02.png
    mainchar_lvl03.png
    ...
```

All avatar assets should be stored directly inside this `/public/avatars/` folder.

---

## 🧩 Naming Convention

Format:

```
mainchar_lvlXX.png
```

Where:

- `mainchar` → the main player character
- `lvlXX` → the level number (two digits, e.g., `01`, `02`, `03`)

Examples:

- `mainchar_lvl01.png` → Level 1 avatar (starting point)
- `mainchar_lvl02.png` → Level 2 avatar
- `mainchar_lvl10.png` → Level 10 avatar

---

## 🧠 Rules

1. All avatars must have a **transparent background** (PNG or WebP with alpha).
2. Use the **same proportions and framing** across all levels for visual consistency.
3. Do **not overwrite** old avatars — always add a new file for each new level.
4. When referencing an avatar in code:

   ```tsx
   import Image from "next/image";

   <Image
     src="/avatars/mainchar_lvl01.png"
     alt="Main character avatar, level 1"
     width={160}
     height={240}
     className="object-contain"
   />;
   ```

5. Keep image sizes optimized (under ~500 KB if possible).

---

## ✅ Example

| Level | File                 | Description                         |
| :---- | :------------------- | :---------------------------------- |
| 1     | `mainchar_lvl01.png` | Intro / starting point              |
| 2     | `mainchar_lvl02.png` | Slight improvement / first progress |
| 3     | `mainchar_lvl03.png` | Noticeable glow-up                  |
| 10    | `mainchar_lvl10.png` | Final evolved avatar                |

---

**Author:** Myriam Benkiran  
**Project:** Goal Quest  
**Last updated:** November 2025
