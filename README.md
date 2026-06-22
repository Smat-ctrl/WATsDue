# WATsDue

WATsDue is an ongoing full-stack project for a student deadline tracker that helps organize course assignments, due dates, reminders, and task status in one dashboard.

The goal of the project is to reduce the stress of checking multiple course platforms by giving students one place to track what is due, what is coming up next, and what has already been completed.

## Project Status

This project is currently in development. The main architecture, feature planning, and early implementation are in progress.

## Planned Features

* Course dashboard for viewing upcoming deadlines
* Assignment and task tracking
* Due date organization by course
* Task status management
* Filtering by course, deadline, or completion status
* REST API for users, courses, and assignments
* PostgreSQL database for storing course and deadline data
* Experimental deadline extraction using Python/Selenium
* Gemini API workflow for converting extracted course content into structured tasks

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* NestJS
* Node.js
* REST APIs
* PostgreSQL

### Automation / Extraction

* Python
* Selenium
* Gemini API

## Planned Project Structure

```bash
WATsDue/
├── frontend/              # Next.js + Tailwind frontend
├── backend/               # NestJS backend API
├── scraper/               # Python/Selenium deadline extraction experiments
└── README.md
```

## How It Will Work

1. A student adds their courses to WATsDue.
2. Assignments and deadlines are added manually or extracted from course pages.
3. The backend stores users, courses, assignments, due dates, and task statuses.
4. The frontend displays upcoming work in a clean dashboard.
5. Students can filter deadlines, update task status, and track what needs attention next.

## Planned API Routes

```http
GET /courses
POST /courses
GET /courses/:id

GET /assignments
POST /assignments
PATCH /assignments/:id
DELETE /assignments/:id

GET /users/:id/assignments
GET /users/:id/courses
```

## Example Assignment Object

```json
{
  "id": "assignment_001",
  "courseId": "cs_246",
  "title": "Final Project Proposal",
  "description": "Submit a short proposal for the final project.",
  "dueDate": "2026-07-15",
  "status": "in-progress",
  "priority": "high"
}
```

## Development Roadmap

* Design the main dashboard layout
* Build reusable frontend components
* Create course and assignment models
* Implement backend REST API routes
* Connect the frontend to backend endpoints
* Add PostgreSQL persistence
* Add filtering and sorting for deadlines
* Prototype deadline extraction with Python/Selenium
* Use Gemini API to structure extracted course deadline data
* Add reminder and notification support
* Prepare the project for deployment

## Why I’m Building This

WATsDue is being built to solve a real student problem: keeping track of deadlines across multiple courses and platforms. Instead of manually checking different course pages, students should be able to use one dashboard to see what is due and what needs to be completed next.

## Current Status

WATsDue is still ongoing and not yet fully completed. The project is being developed in phases, starting with the core dashboard, backend structure, and deadline tracking flow.
