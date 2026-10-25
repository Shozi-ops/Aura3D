# Aura3D Avatar Generator

A browser-based 3D avatar generator transforming 2D selfies into realistic, animation-ready 3D models using Three.js and generative AI.

## User Review & Critical Decisions

> [!IMPORTANT]
> - **Confirmed Decision**: Modern Lifestyle & Creative Consumer Aesthetic (Clean, Bright, Minimalist).
> - **Architecture**: React SPA + Three.js for 3D visualization.

## 1. Overview & Core Concept

- **What It Does**: Allows users to upload a selfie, generates a 3D avatar, and lets users customize it.
- **Target Audience**: Fashion brands, gaming enthusiasts, metaverse platform users.
- **Key Value**: Instant, realistic 3D avatar creation from a 2D image.

## 2. User Experience & Visual Design

- **Aesthetic Direction**: Modern Lifestyle & Creative Consumer.
- **Color Palette & Mood**: Dominant clean white/off-white background (`#FFFFFF`, `#F8FAFC`), structural surfaces in soft slate/gray (`#F1F5F9`, `#E2E8F0`), accents in a sophisticated, muted brand color (e.g., `#3B82F6` for primary CTAs).
- **Typography**: Clean sans-serif pairings (`Plus Jakarta Sans` for headers, `Inter` for body).
- **Layout**: Sidebar-based navigation, clean 1440px desktop baseline, modular content layout.
- **Key Flows**: 
  - **Zero-State**: Hero section with clear Call-to-Action for selfie upload.
  - **Generation State**: Loading indicator with minimalist progress visualization.
  - **Customization State**: 3D viewer (Three.js) with floating bottom control dock.

## 3. Key Product Decisions & Trade-Offs

- **Decision 1**: Three.js for 3D generation and visualization.
  - *Why*: High-performance 3D rendering in the browser.
- **Decision 2**: Firebase for data storage and user authentication.
  - *Why*: Reliable, scalable, and secure backend integration.

## 4. Technical Architecture & Data Strategy

```text
┌────────────────────────────────────────────────────────────┐
│                       Top Navbar                           │
└────────────────────────────────────────────────────────────┘
┌──────────────┬─────────────────────────────────────────────┐
│              │                                             │
│  Navigation  │           3D Avatar Preview (Three.js)      │
│              │                                             │
└──────────────┴─────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│              Floating Bottom Control Dock                  │
└────────────────────────────────────────────────────────────┘
```

- **Data Model**: Firestore to store user profiles and generated avatar data.
- **State**: React state for UI control, Three.js `useRef` for canvas management.
