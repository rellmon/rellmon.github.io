import type { Project } from '../types'

// Order matters: the first three fill the bento grid
// (large card, mint card, red card). All four appear under "Projects" in the nav.
export const projects: Project[] = [
  {
    id: 'ooh-snap',
    name: 'Ooh Snap!',
    tagline: 'A photobooth that runs entirely in your browser.',
    status: 'completed',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    overview:
      'A browser-based photobooth. Pose with friends, take a strip of photos with a countdown, decorate it with filters, frames, stickers and text, then download or share it. There is no sign-up and no server.',
    problem:
      'I wanted a photobooth for friends and parties that works instantly in the browser, with no accounts and no photos uploaded anywhere.',
    features: [
      'Live camera preview with a 3, 5 or 10 second countdown and front/back camera switch',
      'Two layouts (Classic Strip and 2x2 Grid) and retake for any single photo',
      '7 filters, brightness/contrast/saturation sliders, 3 frames, captions and draggable stickers',
      'Download as PNG or JPG, export a looping GIF, or share from a phone',
      'QR code to open the booth on another phone',
      'Kiosk mode for parties: fullscreen, screen kept awake, auto-reset when idle',
      'Responsive, keyboard accessible, and respects the reduce-motion setting',
    ],
    contributions: [
      'Designed and built the whole app on my own.',
      'Built the camera, countdown and capture flow on the browser MediaDevices API, with friendly error handling.',
      'Built the editor and the canvas-based export so the downloaded image matches the on-screen preview.',
      'Added GIF export, sharing, the QR code and kiosk mode.',
      'Deployed it on Vercel, with every push to main deploying automatically.',
    ],
    repoUrl: 'https://github.com/rellmon/Ooh-Snap-',
    demoUrl: 'https://ooh-snap.vercel.app',
    cover: '/images/ooh-snap-cover.webp',
    screenshots: [
      { src: '/images/ooh-snap-1.webp', alt: 'The Ooh Snap! layout picker' },
      { src: '/images/ooh-snap-2.webp', alt: 'The booth during a photo countdown' },
      { src: '/images/ooh-snap-3.webp', alt: 'The editor with stickers added to a photo strip' },
      { src: '/images/ooh-snap-4.webp', alt: 'A finished photo strip ready to download' },
    ],
  },
  {
    id: 'vax-track',
    name: 'Vax-Track',
    tagline: 'Pediatric clinic vaccine tracker with SMS notifications.',
    status: 'completed',
    // README says SQLite. If your production setup used MySQL, change it here.
    stack: ['Laravel', 'SQLite'],
    overview:
      'An individual capstone project: a pediatric clinic vaccine management system with separate portals for doctors and parents. It manages vaccine stock, children and their vaccination records, appointments, payments and reports, and sends SMS reminders.',
    problem:
      'A pediatric clinic needs one place to track each child’s vaccinations, keep vaccine inventory, schedule visits, record payments, and remind parents about upcoming appointments.',
    features: [
      'Doctor dashboard with stat cards, a calendar and an upcoming schedule',
      'Vaccine management with stock, price, category and manufacturer',
      'Child registration linked to parents or guardians, with profiles',
      'Appointment scheduling with status updates and an SMS log (PhilSMS)',
      'Cash payments with printable invoices',
      'Vaccination, inventory, financial and children reports with date filters',
      'Parent portal to view children, schedules, vaccination history and payments',
    ],
    contributions: [
      'Built the entire system on my own as my individual capstone project.',
      'Designed the database schema and built the Laravel backend (models, migrations, controllers and routes).',
      'Built separate doctor and parent portals with role-based access.',
      'Configured SMS reminders through the PhilSMS service.',
    ],
    screenshots: [
      { src: '/images/vax-track-1.webp', alt: 'Admin Dashboard Page' },
      { src: '/images/vax-track-2.webp', alt: 'Doctor Dashboard Page' },
      { src: '/images/vax-track-3.webp', alt: 'Patient Dashboard Page' },
    ],
    repoUrl: 'https://github.com/rellmon/Vax-Track',
  },
  {
    id: 'tara',
    name: 'Tara',
    tagline: 'A barkada trip planner web application.',
    status: 'in-progress',
    stack: ['React', 'TypeScript'],
    overview:
      'A trip-planning web app for friend groups (barkadas). It is currently in development, and the features below are the planned scope.',
    problem:
      'Planning a group trip usually means scattered chats, spreadsheets and unclear shared expenses. Tara aims to bring the plan, the budget and the group into one place.',
    features: [
      'Itineraries (planned)',
      'Trip budgets (planned)',
      'Shared expenses (planned)',
      'Packing lists (planned)',
      'Collaboration (planned)',
    ],
    screenshots: [
      { src: '/images/tara-1.webp', alt: 'Home Page' },
      { src: '/images/tara-2.webp', alt: 'Dashboard Page' },
      { src: '/images/tara-3.webp', alt: 'Poll Page' },
      { src: '/images/tara-4.webp', alt: 'Trips Page' },
    ],
    contributions: [
      'Building it on my own with React and TypeScript.',
    ],
    repoUrl: 'https://github.com/rellmon/tara.',
  },
  {
    id: 'verde-oral-care',
    name: 'Verde Oral Care',
    tagline: 'Appointment booking system for a dental clinic.',
    status: 'completed',
    stack: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    overview:
      'A portfolio and learning project: an appointment booking system for a fictional dental clinic. It has a Laravel REST API and a separate React frontend. Patients book online, dentists manage their day, and admins run the schedule.',
    problem:
      'Clinics need online booking that never double-books a dentist, while giving patients, dentists and staff each the right view of the schedule.',
    features: [
      'Patients browse services and dentists, see open times, book, follow status and cancel (up to 24 hours before)',
      'Dentists see today’s, upcoming and past appointments, update statuses and write private notes',
      'Admin dashboard with live numbers and full appointment management, including rescheduling',
      'Management of dentists, their weekly working hours, services and patients',
      'Double booking prevented with a database transaction and row lock',
      'Role-based access with token authentication and rate-limited login',
    ],
    contributions: [
      'Built the whole project on my own: the Laravel REST API and the React frontend.',
      'Implemented token authentication (Laravel Sanctum) with role middleware and ownership policies.',
      'Wrote the availability service that works out free time slots and prevents double booking.',
      'Wrote PHPUnit feature tests covering booking, cancellation, status changes and route protection.',
    ],
    screenshots: [
      { src: '/images/verdeoralcare-1.webp', alt: 'The Ooh Snap! layout picker' },
      { src: '/images/verdeoralcare-2.webp', alt: 'The booth during a photo countdown' },
      { src: '/images/verdeoralcare-3.webp', alt: 'The editor with stickers added to a photo strip' },
    ],
    repoUrl: 'https://github.com/rellmon/verde-oral-care',
  },
]