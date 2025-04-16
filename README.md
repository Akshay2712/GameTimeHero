# GameTimeHero RSVP Manager

## Features

- Player name and RSVP status (Yes, No, Maybe) management
- Form validation with submission prevention for invalid inputs
- Displays confirmed players (status = Yes) after submission
- Shows RSVP statistics (Yes, No, Maybe, Total)
- Clean separation of business logic and UI components

## Getting Started

### Prerequisites

- Node.js
- Angular CLI (version 19)

### Installation

From repository:
```bash
git clone https://github.com/Akshay2712/GameTimeHero.git
cd rsvp-manager
npm install
```

From ZIP file:
```bash
unzip rsvp-manager.zip
cd rsvp-manager
npm install
```


NOTE: Ensure you're using Angular 19 for full compatibility.

### Add Angular Material

```bash
ng add @angular/material
```

### Run the Application

```bash
ng serve
```

Navigate to `http://localhost:4200` in your browser.

## Implementation Details

The application implements a stateful RSVP service that manages entries in memory. It's built using Angular 19's standalone component architecture with the following characteristics:

- Service-based State Management: RSVP entries are stored and managed by a dedicated service
- Type Safety: Strong typing for all models and interfaces
- Reactive Updates: Real-time calculation of statistics when entries change
- Clean UI/Logic Separation: Business logic isolated in services for better testability

## Validations Considered

- Player name is required to enable form submission
- Visual feedback provided for invalid submissions
- Form resets after successful submission
- Currently allows duplicate names by design as UUID is unique

## What I Would Want To Do Next

- Data persistence via localStorage or backend API
- Duplicate name prevention or entry editing capabilities (Post submission)
- Entry deletion functionality (Logical)

---