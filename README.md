# Google Calendar Clone

A fully functional Google Calendar clone built with Next.js 14, featuring multiple view modes (Month, Week, Day), event management, smooth animations, dark mode support, and a modern, responsive UI.


##  Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Business Logic & Edge Cases](#business-logic--edge-cases)
- [Animations & Interactions](#animations--interactions)
- [Dark Mode](#dark-mode)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## ✨ Features

- **Multiple Calendar Views**
  - Month View: Traditional monthly calendar grid
  - Week View: Detailed weekly schedule with hourly slots
  - Day View: Focused single-day view with hourly breakdown

- **Event Management**
  - Create events with title, description, date, and time
  - View event summaries in interactive popovers
  - Events stored persistently in SQLite database
  - Real-time event rendering across all views

- **User Interface**
  - Responsive design for desktop and mobile devices
  - Collapsible sidebar with mini-calendar
  - Current time indicator in Week and Day views
  - Timezone support (GMT +5:30 IST)
  - **Smooth animations and transitions throughout**
  - **Full dark mode support with theme persistence**
  - **Animated theme toggle with sun/moon icons**

- **Animations & Polish**
  - Entrance animations (fade-in, scale-in, slide-in) for modals and views
  - Hover effects with scale transforms on all interactive elements
  - Click feedback with active states (scale-down on press)
  - Smooth transitions (150-300ms) for responsive feel
  - Bounce-in animation for today's date indicator
  - Custom keyframe animations via Tailwind CSS

- **State Management**
  - Persistent state using Zustand with localStorage
  - Hydration handling for SSR compatibility
  - Optimistic UI updates
  - Theme preference persistence across sessions

## 🛠️ Technology Stack

### Frontend
- **Next.js 14.2.33** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Component library built on Radix UI
- **Day.js** - Date manipulation and formatting
- **Zustand** - Lightweight state management
- **Lucide React** - Icon library

### Backend
- **Next.js Server Actions** - Server-side logic
- **SQLite** - Lightweight SQL database
- **Drizzle ORM** - TypeScript ORM for database operations
- **Better-SQLite3** - Synchronous SQLite driver

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting with Tailwind plugin
- **TypeScript** - Static type checking
- **TSX** - TypeScript execution for migrations

## 🏗️ Architecture

### Project Structure

```
google-calendar-clone/
├── app/                          # Next.js App Router
│   ├── actions/                  # Server Actions
│   │   └── event-actions.ts      # Event CRUD operations
│   ├── fonts/                    # Custom fonts
│   ├── globals.css               # Global styles + dark mode variables
│   ├── layout.tsx                # Root layout with ThemeProvider
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── header/                   # Header components
│   │   ├── Header.tsx
│   │   ├── left-side.tsx         # Navigation & date controls
│   │   └── right-side.tsx        # View selector & theme toggle
│   ├── sidebar/                  # Sidebar components
│   │   ├── SideBar.tsx
│   │   ├── create.tsx
│   │   ├── my-calendars.tsx
│   │   ├── search-users.tsx
│   │   └── side-bar-calendar.tsx # Mini calendar (no week numbers)
│   ├── ui/                       # Reusable UI components (Shadcn)
│   ├── day-view.tsx              # Day view component
│   ├── week-view.tsx             # Week view component
│   ├── month-view.tsx            # Month view component
│   ├── month-view-box.tsx        # Month grid cell
│   ├── event-popover.tsx         # Event creation modal (dark mode)
│   ├── event-renderer.tsx        # Event display logic
│   ├── event-summary-popover.tsx # Event details modal (dark mode)
│   ├── add-time.tsx              # Time picker component
│   ├── MainView.tsx              # Main view controller
│   ├── theme-provider.tsx        # Theme initialization & management
│   └── svg-icons.tsx             # Custom SVG icons
├── db/                           # Database layer
│   ├── drizzle.ts                # Database instance
│   ├── schema.ts                 # Database schema
│   ├── migrate.ts                # Migration script
│   └── migrations/               # SQL migrations
├── lib/                          # Utility functions
│   ├── store.ts                  # Zustand stores (date, view, event, theme)
│   ├── getTime.ts                # Date/time utilities
│   ├── utils.ts                  # General utilities (cn helper)
│   └── data.ts                   # Mock data (unused in production)
└── public/                       # Static assets
```

### Architecture Decisions

#### 1. **Next.js 14 with App Router**
- **Why**: Server-side rendering, optimized performance, built-in API routes via Server Actions
- **Benefits**: SEO-friendly, faster initial page loads, simplified data fetching

#### 2. **SQLite + Drizzle ORM**
- **Why**: Lightweight, zero-configuration database with type-safe queries
- **Benefits**: Easy local development, no external database server needed, type safety with TypeScript

#### 3. **Zustand for State Management**
- **Why**: Lightweight (1kb), simple API, built-in persistence
- **Benefits**: Less boilerplate than Redux, React Context performance issues avoided, localStorage integration

#### 4. **Server Actions for Data Mutations**
- **Why**: Native Next.js feature, eliminates need for separate API routes
- **Benefits**: Automatic revalidation, progressive enhancement, type-safe RPC-like calls

#### 5. **Day.js over Moment.js**
- **Why**: Smaller bundle size (2kb vs 67kb), similar API
- **Benefits**: Better performance, modern codebase, plugin system for extending functionality

## 📦 Setup Instructions

### Prerequisites
- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Quick Start (3 Steps)

1. **Clone and Install**
   ```bash
   git clone https://github.com/inodinwetrust10/google-calendar-clone.git
   cd google-calendar-clone
   npm install
   ```

2. **Setup Database**
   ```bash
   npm run db:migrate
   ```
   This creates a local SQLite database at `./db/sqlite.db` with all necessary tables.

3. **Run the Application**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

That's it! 🎉 Your calendar is now running locally.

### First Time Setup Details

The database migration (`npm run db:migrate`) automatically:
- Creates the SQLite database file
- Sets up the `events` table
- No additional configuration needed

**Note**: If you already have a `sqlite.db` file and want to start fresh:
```bash
rm db/sqlite.db
npm run db:migrate
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate new migrations
npm run db:migrate   # Run pending migrations
npm run db:push      # Push schema changes to DB
npm run db:studio    # Open Drizzle Studio (DB GUI)
```

### Database Setup

The project uses SQLite with the database file stored at `./db/sqlite.db`. On first run, migrations will create the necessary tables.

**Database Schema:**
```sql
CREATE TABLE events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date INTEGER NOT NULL,        -- Unix timestamp
  title TEXT NOT NULL,
  description TEXT NOT NULL
);
```

## 📖 Usage

### Creating Events

1. Click the **"Create"** button in the sidebar or click any time slot
2. Fill in event details:
   - Title (required)
   - Description (required)
   - Date (pre-filled based on selection)
   - Time (defaults to 00:00, adjustable in 15-min intervals)
3. Click **"Save"** to create the event

### Viewing Events

- **Month View**: Events appear as colored pills in date cells
- **Week View**: Events displayed in hourly time slots across the week
- **Day View**: Detailed hourly view for a single day
- Click any event to view details in a summary popover

### Navigation

- **Today Button**: Jump to current date
- **Arrow Keys**: Navigate forward/backward (month/week/day based on view)
- **View Selector**: Switch between Month, Week, and Day views
- **Sidebar Calendar**: Click dates to navigate quickly

## 🧠 Business Logic & Edge Cases

### Event Handling

#### 1. **Event Creation**
- **Validation**: All fields (title, description, date, time) are required
- **Date Handling**: Combines date and time inputs into a single DateTime object
- **Time Zones**: All times are stored and displayed in GMT +5:30 (IST)
- **Server-Side Processing**: Uses Next.js Server Actions for secure data mutations

#### 2. **Event Rendering**
```typescript
// Events are filtered based on current view
if (view === "month") {
  // Match by date only (DD-MM-YY)
  return event.date.format("DD-MM-YY") === date.format("DD-MM-YY");
} else if (view === "week" || view === "day") {
  // Match by date AND hour (DD-MM-YY HH)
  return event.date.format("DD-MM-YY HH") === date.format("DD-MM-YY HH");
}
```

#### 3. **Current Time Indicator**
- Real-time red line showing current time in Week/Day views
- Updates every minute via `setInterval`
- Positioned using percentage calculation: `(currentHour / 24) * 100%`

#### 4. **Edge Cases Handled**

**Month View:**
- Previous/next month overflow dates displayed but grayed out
- First day of month shows abbreviated month name (e.g., "Jan 1")
- Week numbers calculated using Day.js `weekOfYear` plugin
- Leap years handled automatically by Day.js

**Week View:**
- Week starts on Sunday (configurable via Day.js locale)
- Handles year boundaries (Dec 31 → Jan 1)
- Scrollable time grid for all 24 hours

**Day View:**
- Single day focus with full hourly breakdown
- Current day highlighted with blue accent
- Seamless navigation across month boundaries

**State Management:**
- Hydration mismatch prevention using `skipHydration` flag
- localStorage persistence survives page refreshes
- State reset handled gracefully on errors

**Data Synchronization:**
- Server-side data fetching on page load
- Automatic revalidation after event creation
- Optimistic UI updates while saving

### Known Limitations

1. **No Recurring Events**: Currently only supports one-time events
2. **No Event Editing**: Events can be viewed but not edited after creation
3. **No Event Deletion**: No delete functionality implemented
4. **No Conflict Detection**: Multiple events can occupy the same time slot
5. **No Multi-day Events**: Events are single-day only
6. **No Event Reminders**: No notification system
7. **No User Authentication**: Single-user calendar (no multi-user support)
8. **No Event Categories**: All events use the same styling
9. **Week Numbers Removed**: Sidebar calendar no longer displays week numbers (UI simplification)

## 🎨 Animations & Interactions

### Custom Tailwind Animations

The project includes custom keyframe animations defined in `tailwind.config.ts`:

1. **fade-in** (0.3s ease-out)
   ```css
   @keyframes fade-in {
     from { opacity: 0 }
     to { opacity: 1 }
   }
   ```
   - Used for: View transitions, modal backdrops

2. **fade-in-up** (0.4s ease-out)
   ```css
   @keyframes fade-in-up {
     from { opacity: 0; transform: translateY(10px) }
     to { opacity: 1; transform: translateY(0) }
   }
   ```
   - Used for: Event popover content, form elements

3. **scale-in** (0.2s ease-out)
   ```css
   @keyframes scale-in {
     from { opacity: 0; transform: scale(0.95) }
     to { opacity: 1; transform: scale(1) }
   }
   ```
   - Used for: Modal entrance, dropdown menus

4. **slide-in-right** (0.3s ease-out)
   ```css
   @keyframes slide-in-right {
     from { transform: translateX(-100%) }
     to { transform: translateX(0) }
   }
   ```
   - Used for: Sidebar entrance when toggled

5. **bounce-in** (0.5s cubic-bezier)
   ```css
   @keyframes bounce-in {
     0% { transform: scale(0.3); opacity: 0 }
     50% { transform: scale(1.05) }
     70% { transform: scale(0.9) }
     100% { transform: scale(1); opacity: 1 }
   }
   ```
   - Used for: Today's date indicator

6. **accordion-down/up** (0.2s ease-out)
   - Used for: Sidebar "My Calendars" expand/collapse

### Interactive Animations

#### Hover Effects
- **Buttons**: `hover:scale-105` + shadow increase
- **Navigation arrows**: `hover:scale-125` + color shift to blue
- **Calendar cells**: `hover:scale-110` + background tint
- **Month boxes**: `hover:scale-[1.02]` + shadow + violet background
- **Time slots**: `hover:bg-blue-50` (light) / `hover:bg-blue-950` (dark)
- **Avatar**: `hover:scale-110` + ring animation

#### Active States (Click Feedback)
- All clickable elements: `active:scale-95` for tactile response
- Buttons: Additional `active:bg-*` color shift
- Duration: 150-200ms for instant feedback

#### Entrance Animations
- **Modals**: Scale-in + backdrop fade-in
- **Dropdowns**: Scale-in animation
- **Views**: Fade-in when switching between Month/Week/Day
- **Sidebar**: Slide-in-right when toggled open

#### Transition Timings
- Fast interactions: 150ms (hover feedback)
- Standard: 200ms (most transitions)
- Smooth: 300ms (theme toggle, complex animations)
- Slow: 400ms+ (entrance animations with staging)

### Real-time Updates
- Current time indicator refreshes every 60 seconds
- State changes trigger re-renders via Zustand subscriptions
- Optimistic UI updates during event creation

### Interactive Features

1. **Click Handlers**
   ```typescript
   // Example: Month view cell click
   const handleClick = (e: React.MouseEvent) => {
     e.preventDefault();
     setDate(day);        // Update global state
     openPopover();       // Show event creation modal
   };
   ```

2. **Responsive Design**
   - Sidebar auto-hides on mobile (`lg:hidden` utility)
   - Grid layouts adapt to screen size
   - Touch-friendly tap targets (minimum 44px)

3. **Keyboard Navigation**
   - Form inputs support standard keyboard navigation
   - Time picker scrollable with keyboard
   - Esc key closes modals (via click-outside handler)

4. **Loading States**
   - "Saving..." button text during form submission
   - Disabled state prevents double-submissions
   - `useTransition` hook for pending states

## 🌓 Dark Mode

### Implementation

The project features a complete dark mode implementation with:

**Theme Toggle**
- Sun/Moon icon toggle in header (top right)
- Smooth icon rotation animation (300ms)
- Persists preference to localStorage
- Auto-applies on page load

**Theme Provider** (`components/theme-provider.tsx`)
```typescript
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();
  
  useEffect(() => {
    // Apply dark class to document root
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  return <>{children}</>;
}
```

**State Management** (`lib/store.ts`)
```typescript
export const useThemeStore = create<ThemeStoreType>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
      },
    }),
    { name: "theme_preference" }
  )
);
```

### Dark Mode Coverage

**Components with Dark Mode:**
- ✅ Event Creation Popover (dark:bg-gray-900)
- ✅ Event Summary Popover
- ✅ All Calendar Views (Month/Week/Day)
- ✅ Sidebar & Mini Calendar
- ✅ Header & Navigation
- ✅ All Buttons & Interactive Elements
- ✅ Form Inputs & Dropdowns
- ✅ Time Slots & Grid Cells
- ✅ Borders & Dividers

**Dark Mode Color Palette:**
- Background: `dark:bg-gray-900`
- Cards/Modals: `dark:bg-gray-800`
- Text Primary: `dark:text-white`
- Text Secondary: `dark:text-gray-300`
- Text Muted: `dark:text-gray-400`
- Borders: `dark:border-gray-700`
- Hover States: `dark:hover:bg-blue-950`
- Active States: `dark:active:bg-blue-900`

**CSS Variables** (in `globals.css`)
```css
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --popover: 0 0% 3.9%;
  /* ...all Shadcn theme variables */
}
```

### Usage
```typescript
// Access theme in components
const { theme, toggleTheme } = useThemeStore();

// Toggle programmatically
toggleTheme();

// Check current theme
if (theme === "dark") {
  // Dark mode specific logic
}
```

## 🔮 Future Enhancements

### High Priority
1. **Event Editing & Deletion**
   - Add edit button in event summary popover
   - Implement delete confirmation dialog
   - Update database schema if needed for soft deletes

2. **Recurring Events**
   - Add recurrence rules (daily, weekly, monthly, yearly)
   - Implement RRULE standard
   - Database schema update: Add `recurrence_rule` column

3. **Event Conflict Detection**
   - Visual warnings for overlapping events
   - Optional auto-scheduling suggestions
   - Color-coded conflict indicators

4. **Drag & Drop**
   - Drag events to new time slots
   - Multi-day event support
   - Visual feedback during drag operation

5. **User Authentication**
   - NextAuth.js integration
   - Multi-user support with user-specific calendars
   - Sharing and permissions system

### Medium Priority
6. **Event Categories/Colors**
   - Custom color coding per event type
   - Category management UI
   - Filter events by category

7. **Search & Filter**
   - Full-text search across events
   - Date range filters
   - Quick filters (today, this week, upcoming)

8. **Notifications & Reminders**
   - Email/SMS reminders (via Twilio/SendGrid)
   - Browser notifications API
   - Configurable reminder times

9. **Calendar Import/Export**
   - ICS file import/export
   - Google Calendar sync
   - Outlook integration

10. **Performance Optimization**
    - Virtual scrolling for large event lists
    - Lazy loading for month views
    - Database indexing for faster queries

### Low Priority
11. **Mobile App**
    - React Native version
    - Native calendar integration
    - Offline-first architecture

12. **Accessibility Improvements**
    - ARIA labels for screen readers
    - Keyboard shortcuts (e.g., 'n' for new event)
    - Focus management in modals

13. **Analytics**
    - Event statistics dashboard
    - Time tracking reports
    - Export to CSV/PDF

14. **Collaboration Features**
    - Shared calendars
    - Meeting scheduling polls (like Doodle)
    - Calendar subscriptions

## 🧪 Testing Strategy (Future)

### Unit Tests
- Component rendering tests (Jest + React Testing Library)
- Date utility function tests
- State management tests (Zustand)

### Integration Tests
- Event creation flow (E2E)
- View switching behavior
- Database operations

### E2E Tests
- Playwright/Cypress for user flows
- Cross-browser compatibility
- Responsive design validation


## 🐛 Known Issues

1. Initial render may show loading state briefly (hydration)
2. Safari date input styling differs from Chrome
3. Mobile sidebar toggle requires manual close


### Reviewers
This project is shared with:
- [@Naman-Bhalla](https://github.com/Naman-Bhalla)
- [@raun](https://github.com/raun)

## 🙏 Acknowledgments

- Inspired by Google Calendar's UI/UX
- Built with [Shadcn/UI](https://ui.shadcn.com/) components
- Icons from [Lucide](https://lucide.dev/)

---

**Built with ❤️ using Next.js and TypeScript**
