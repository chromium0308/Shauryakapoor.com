# Accomplishments & Projects Tracker

A beautiful Next.js application to track and showcase your accomplishments and projects.

## Features

- 📝 **Track Accomplishments**: Record your achievements, awards, certifications, and milestones
- 💻 **Manage Projects**: Keep track of your projects with technologies, status, and links
- 🔍 **Search & Filter**: Quickly find entries using the search functionality
- 🎨 **Modern UI**: Beautiful, responsive design with dark mode support
- 💾 **Local Storage**: All data is stored locally in your browser
- ✏️ **Edit & Delete**: Easily update or remove entries

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Adding Accomplishments

1. Click on the "Accomplishments" tab
2. Click "Add New" button
3. Fill in the form:
   - Title (required)
   - Description (required)
   - Date (required)
   - Category (required)
   - Tags (optional, comma-separated)

### Adding Projects

1. Click on the "Projects" tab
2. Click "Add New" button
3. Fill in the form:
   - Project Name (required)
   - Description (required)
   - Technologies (required, comma-separated)
   - Status: Planned, In Progress, or Completed
   - Start Date (required)
   - End Date (optional)
   - Repository URL (optional)
   - Live Demo URL (optional)
   - Tags (optional, comma-separated)

### Editing Entries

Click the edit icon on any card to modify the entry.

### Deleting Entries

Click the delete icon on any card to remove the entry (with confirmation).

## Data Storage

All data is stored in your browser's local storage. This means:
- Your data stays on your device
- No account or server required
- Data persists between sessions

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

