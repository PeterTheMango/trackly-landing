# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing site for Trackly, using the App Router architecture. The project is built with TypeScript, React 19, and Tailwind CSS v4. This appears to be a fresh project bootstrapped with `create-next-app` that will be developed into a landing page.

## Development Commands

- `npm run dev` or `bun dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linting

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **TypeScript**: Configured with strict mode, path aliases (`@/*` maps to root)

## Project Structure

- `app/` - Next.js App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Home page component (currently default Next.js template)
  - `globals.css` - Global styles with Tailwind directives
- `public/` - Static assets (SVG icons for Next.js, Vercel, etc.)

## Key Configuration

- Uses Bun as package manager (bun.lock present)
- Path alias `@/*` configured for root-level imports
- Turbopack enabled for faster development builds
- Tailwind CSS v4 with PostCSS plugin configuration