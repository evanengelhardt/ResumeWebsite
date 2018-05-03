export class Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'General Motors',
    position: 'Software Developer',
    startDate: 'January 2018',
    endDate: 'Ongoing',
    description: [
      'Develop new features for the various company websites to enhance the user experience',
    'Maintain website health and design by proactively searching out potential issues and fixing them.'
    ]
  },
  {
    company: 'Target',
    position: 'Software Engineer Intern',
    startDate: 'June 2017',
    endDate: 'August 2017',
    description: ['Implement an internal application to access, modify, \
    and send data to and from RESTful APIs.',
      'Automate periodical transfers of new data using this application to\
       ensure consistency in the supply chain.',
      'Log transferred data into an internal database to keep an account of\
       information sent and received.']
  },
  {
    company: 'Campus Tutoring Service',
    position: 'Calculus Tutor',
    startDate: 'January 2016',
    endDate: 'December 2017',
    description: ['Lead students through homework assignments to help them \
      recognize the process of solving different types of problems.',
      'Reiterate concepts in layman’s terms so that students will be able to have a\
      firmer grasp on them.',
      'Help students prepare for exams by going through extensive reviews to improve\
        their confidence and problem solving abilities.']
  },
  {
    company: 'Flux Power',
    position: 'Engineering Intern',
    startDate: 'June 2016',
    endDate: 'August 2016',
    description: ['Lead project designing a workstation to streamline the\
     bottom balancing of lithium battery cells to optimize industrial battery\
      pack charging']
  }
];
