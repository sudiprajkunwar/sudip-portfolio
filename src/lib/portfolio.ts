export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Experience' },
];

export const skillGroups = [
  { title: 'Languages & scripts', skills: ['JavaScript', 'TypeScript', 'C++', 'HTML5', 'CSS3'] },
  { title: 'Frameworks & libraries', skills: ['React', 'React Native', 'Redux', 'Redux-Saga', 'Node.js', 'Express', 'NestJS', 'Webpack', 'Bootstrap', 'Material CSS', 'Ant Design', 'Testing'] },
  { title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'MongoDB'] },
  { title: 'Version control', skills: ['Git', 'GitHub', 'Bitbucket', 'GitLab'] },
  { title: 'Collaboration & delivery', skills: ['Trello', 'Slack', 'MS Teams', 'Jira', 'Scrum', 'Kanban'] },
];

export const experience = [
  {
    role: 'Senior Software Engineer', company: 'Leapfrog Technology', date: 'September 2021 — Present', current: true,
    responsibilities: [
      'Work with a team of software engineers to create high-quality software within agreed project deadlines.',
      'Make architectural decisions in collaboration with technology experts.',
      'Design, build, and maintain efficient, reusable, and reliable software.',
      'Design and develop business logic using REST APIs.',
      'Prepare, draft, and review software documentation and project reports.',
      'Implement new software features and maintain existing features.',
      'Refactor, debug, test, and implement changes to existing applications to meet project requirements.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'NestJS'],
  },
  {
    role: 'Front-End Developer', company: 'Alpha Beta Theta Technologies', date: 'August 2020 — August 2021', current: false,
    responsibilities: [
      'Identify core technical problems and collaborate with team members to develop robust solutions.',
      'Create self-contained, reusable components.',
      'Research and document new technologies and find better solutions to existing problems.',
      'Help manage CI/CD processes.',
      'Conduct code reviews to maintain code integrity.',
      'Actively improve organizational culture, processes, and standards.',
    ],
    stack: ['JavaScript', 'React', 'TypeScript', 'Redux'],
  },
];