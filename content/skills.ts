export type SkillGroup = {
  category: string
  items: string[]
  span?: string
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'React Native', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'JWT', 'RBAC', 'Socket.io'],
  },
  {
    category: 'Databases & Tools',
    items: [
      'MongoDB',
      'MySQL',
      'GitHub',
      'Postman',
      'Render',
      'Vercel',
      'Cloudinary',
    ],
  },
]
