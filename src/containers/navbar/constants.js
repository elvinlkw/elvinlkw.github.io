import { FF_EXPERIENCE, FF_PROJECTS, FF_SKILLS } from 'src/features';

export const navIcons = [
  {
    icon: 'Linkedin',
    href: 'https://linkedin.com/in/elikamwa/',
  },
  {
    icon: 'Github',
    href: 'https://github.com/elvinlkw',
  },
];

export const navLinks = [
  {
    title: 'Skills',
    href: 'skills-and-tooling-section',
    featureFlag: FF_SKILLS,
  },
  {
    title: 'Experience',
    href: 'profession-experience-section',
    featureFlag: FF_EXPERIENCE,
  },
  {
    title: 'Projects',
    href: 'projects-section',
    featureFlag: FF_PROJECTS,
  },
  // {
  //   title: 'Contact Me',
  //   href: '',
  // },
];
