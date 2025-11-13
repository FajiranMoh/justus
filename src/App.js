import React from 'react';
import './App.css';

const projectName = 'justus';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const featureCards = [
  {
    icon: '🖥️',
    title: 'Live Class',
    description: 'Attend interactive live sessions with world-class instructors and collaborate in real time.',
  },
  {
    icon: '💬',
    title: 'Discuss',
    description: 'Stay connected with classmates and mentors in focused discussion channels.',
  },
  {
    icon: '✅',
    title: 'Task',
    description: 'Complete guided assignments and get rapid feedback to reinforce every lesson.',
  },
  {
    icon: '📚',
    title: 'Resources',
    description: 'Access comprehensive libraries, templates, and tools to accelerate your learning.',
  },
  {
    icon: '🎓',
    title: 'Certificates',
    description: 'Earn industry-recognized certificates that validate your skills and expertise.',
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Join a vibrant community of learners, mentors, and industry professionals.',
  },
];

const courses = [
  {
    title: 'Web Design',
    price: '$200',
    description: 'Craft beautiful interfaces with modern design systems and tooling.',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=700&q=80',
    meta: '40 Classes · 3 Months',
    rating: 4.9,
    students: 1200,
  },
  {
    title: 'Web Development',
    price: '$250',
    description: 'Build full-stack applications with clean architecture and great DX.',
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=700&q=80',
    meta: '30 Classes · 3 Months',
    rating: 4.8,
    students: 980,
  },
  {
    title: 'UI/UX Design',
    price: '$350',
    description: 'Research, prototype, and validate experiences that your users will love.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    meta: '50 Classes · 4 Months',
    rating: 5.0,
    students: 1500,
  },
  {
    title: 'Data Science',
    price: '$400',
    description: 'Master data analysis, machine learning, and visualization techniques.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    meta: '45 Classes · 4 Months',
    rating: 4.7,
    students: 850,
  },
];

const metrics = [
  { value: '100+', label: 'Popular Courses' },
  { value: '500+', label: 'Skilled Trainers' },
  { value: '1M+', label: 'Students Learning' },
  { value: '98%', label: 'Success Rate' },
];

const testimonials = [
  {
    quote:
      '“They are the best mentor team. Selda is the platform that helped me build confidence and skills from anywhere.”',
    name: 'Ben Foxlee',
    role: 'Product Designer, Student',
    avatar: 'BF',
  },
  {
    quote:
      '“The live classes and community support made all the difference. I landed my dream job after completing the course.”',
    name: 'Sarah Chen',
    role: 'Software Engineer, Graduate',
    avatar: 'SC',
  },
  {
    quote:
      '“Outstanding curriculum and instructors. The hands-on projects gave me real-world experience I could showcase.”',
    name: 'Marcus Johnson',
    role: 'UX Designer, Alumni',
    avatar: 'MJ',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for individual learners getting started.',
    features: [
      'Access to 50+ courses',
      'Community support',
      'Certificate of completion',
      'Mobile app access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Best for serious learners and career advancement.',
    features: [
      'Access to all courses',
      'Live class support',
      '1-on-1 mentoring',
      'Advanced project reviews',
    ],
    highlighted: true,
  },
];

function App() {
  return (
    <div className="page">
      {/* Header, Features, Courses, Testimonials, Pricing, and other sections here */}
      <footer>
        <p>© {new Date().getFullYear()} {projectName}. All rights reserved.</p>
        <p>HELLO</p> {/* New text added here */}
      </footer>
    </div>
  );
}

export default App;
