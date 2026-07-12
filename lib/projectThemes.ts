/** Per-project visual accents for premium media panels */
export const projectThemes: Record<
  string,
  { from: string; to: string; label: string }
> = {
  activeroute: {
    from: '#F26B3A',
    to: '#1A1A17',
    label: 'NEMT · Enterprise',
  },
  leadsyncflow: {
    from: '#7EA894',
    to: '#1A1A17',
    label: 'Pipeline · Automation',
  },
  'hike-connect': {
    from: '#C4A574',
    to: '#1A1A17',
    label: 'Mobile · Community',
  },
  'attendance-hr': {
    from: '#6B9AC4',
    to: '#1A1A17',
    label: 'Internal · HR',
  },
  'activity-detector': {
    from: '#B07C9E',
    to: '#1A1A17',
    label: 'Python · Monitoring',
  },
  'activeroute-io': {
    from: '#3D8BDB',
    to: '#1A1A17',
    label: 'Marketing · NEMT',
  },
  'onfoot-llc': {
    from: '#E8A87C',
    to: '#1A1A17',
    label: 'Agency · Creative',
  },
  'greenlight-transport': {
    from: '#2F9E6E',
    to: '#1A1A17',
    label: 'NEMT · Business',
  },
  'axaline-medical-billing': {
    from: '#5B8DEF',
    to: '#1A1A17',
    label: 'Healthcare · Billing',
  },
  'orhify-tech': {
    from: '#F26B3A',
    to: '#1A1A17',
    label: 'Agency · Web',
  },
  'global-digital-solutions': {
    from: '#7EA894',
    to: '#1A1A17',
    label: 'Company · Digital',
  },
  nursfpxwriters: {
    from: '#6B9AC4',
    to: '#1A1A17',
    label: 'Education · Marketing',
  },
  'nursfpx-study': {
    from: '#8BA3C7',
    to: '#1A1A17',
    label: 'Education · Portal',
  },
  'skywatch-security': {
    from: '#C4A045',
    to: '#1A1A17',
    label: 'Security · UK',
  },
  writemynursing: {
    from: '#5B8DEF',
    to: '#1A1A17',
    label: 'Education · Marketing',
  },
  assignmentbuds: {
    from: '#E07A5F',
    to: '#1A1A17',
    label: 'Education · Writing',
  },
  topyourcourse: {
    from: '#3D8BDB',
    to: '#1A1A17',
    label: 'Education · FlexPath',
  },
}

export function getProjectTheme(slug: string) {
  return (
    projectThemes[slug] ?? {
      from: '#F26B3A',
      to: '#1A1A17',
      label: 'Case study',
    }
  )
}
