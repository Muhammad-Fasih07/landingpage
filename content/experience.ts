export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Global Digital Solution',
    role: 'Full Stack Developer',
    period: 'Feb 2025 - Present',
    location: 'Remote',
    highlights: [
      'Build and maintain full-stack applications with React and Node.js',
      'Design and manage SQL and MongoDB databases for production workloads',
      'Ship secure REST APIs and responsive frontends used in internal and client systems',
    ],
  },
  {
    company: 'Poshmall Technology',
    role: 'React Frontend Developer',
    period: 'Aug 2024 - Jan 2025',
    location: 'Remote',
    highlights: [
      'Owned UI development for a Booking.com scraping product in React',
      'Integrated backend APIs for filtering, display, and near real-time updates',
      'Improved frontend performance for large scraped data views',
    ],
  },
  {
    company: 'CodeSync Lab',
    role: 'MERN Stack Developer & Project Manager',
    period: 'Jan 2024 - Sept 2024',
    location: 'Remote',
    highlights: [
      'Delivered MERN applications end-to-end while coordinating scope and delivery',
      'Led technical planning, task breakdown, and stakeholder communication',
      'Shipped features spanning React UIs, Express APIs, and MongoDB data models',
    ],
  },
  {
    company: 'RAILCOP Pakistan',
    role: 'Software Quality Assurance',
    period: 'Mar 2023 - May 2023',
    location: 'Onsite',
    highlights: [
      'Executed unit and system testing across release cycles',
      'Triaged defects and collaborated with engineers on fixes',
      'Provided code-review feedback to improve quality and maintainability',
    ],
  },
]
