'use client'

import { motion } from 'framer-motion'
import { Target, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'
import Image from 'next/image'
import ProjectModal from './ui/modal'

const portfolioCategories = [
  {
    title: 'Lead Generation & List Building',
    description: 'Targeted B2B Outreach — Generated 1,200 Qualified Leads',
    icon: <Target className='w-12 h-12 text-primary' />,
    note: 'Screenshots of Smartlead, email results, or LinkedIn prospect lists available upon request',
  },
  {
    title: 'Cold Calling Projects',
    description: 'Appointment Setting for U.S. SaaS Firm — 25% Conversion',
    icon: <Phone className='w-12 h-12 text-green-400' />,
    note: 'Call logs, CRM screenshots, and dialer reports available',
  },
  {
    title: 'Email Marketing Campaigns',
    description: 'Cold Email Campaign — 40% Open Rate, 8% Response Rate',
    icon: <Mail className='w-12 h-12 text-blue-400' />,
    note: 'Campaign dashboards and analytics graphs available',
  },
]

// const portfolioItems = [
//   {
//     skill: 'Email Campaign',
//     image: '/assets/Email Campaign.png',
//     description: 'Email marketing campaign dashboard showing performance metrics, open rates, click rates, and reply statistics across multiple campaigns.',
//   },
//   {
//     skill: 'Market Research, List Building',
//     image: '/assets/Market Research, List Building.png',
//     description: 'Comprehensive market research and list building spreadsheet showing detailed business data including venue accounts, contact information, locations, and booking software details for targeted outreach.',
//   },
//   {
//     skill: 'Lead Generation',
//     image: '/assets/LEAD GENERATION (2).png',
//     description: 'Comprehensive lead generation database with business directory information including web URLs, addresses, postal codes, owner names, email addresses, and phone numbers for targeted B2B outreach.',
//   },
//   {
//     skill: 'List Building, Cold Calling, Appointment Setting',
//     image: '/assets/LIST BUILDING, COLD CALLING, APPOINTMENT SETTING.png',
//     description: 'Property data management spreadsheet with comprehensive property addresses, owner information, contact details, and phone numbers for targeted cold calling and appointment setting campaigns.',
//   },
// ]

const caseStudies = [
  { title: 'SaaS Lead Generation', focusArea: 'B2B Outreach', result: '100k qualified and hyper targeted leads in 30 days' },
  { title: 'QA Automation', focusArea: 'Fintech App', result: '60% crash rate reduction' },
  { title: 'Cybersecurity Testing', focusArea: 'IT Firm', result: '40+ vulnerabilities fixed' },
  { title: 'Web Development', focusArea: 'E-commerce', result: '3× faster site load time' },
]

const projects = [
  {
    title: 'Novus Health',
    type: 'image',
    description: 'Comprehensive healthcare platform for online doctor appointments and medical consultations.',
    techStack: 'Angular, Spring Boot, GCP, AWS, MySQL, Pulumi, Docker',
    image: '/assets/NovusHealth_main.png',
    images: [
      '/assets/NovusHealth2.png',
      '/assets/NovusHealth3.png',
      '/assets/NovusHealth4.png',
      '/assets/NovusHealth5.png',
      '/assets/NovusHealth6.png',
      '/assets/NovusHealth7.png',
      '/assets/NovusHealth8.png',
      '/assets/NovusHealth9.png',
      '/assets/NovusHealth10.png',
      '/assets/NovusHealth11.png',
      '/assets/NovusHealth12.png',
      '/assets/NovusHealth13.png',
      '/assets/NovusHealth14.png',
      '/assets/NovusHealth15.png',
    ],
  },
  {
    title: 'DaoSeeder',
    type: 'image',
    description: 'Decentralized crowdfunding platform built with Next.js, Solidity, and IPFS for DAO governance.',
    techStack: 'NextJs, Solidity, Figma, IPFS',
    image: '/assets/DaoSeeder_main.png',
    images: ['/assets/DaoSeeder1.png', '/assets/DaoSeeder2.png', '/assets/DaoSeeder3.png', '/assets/DaoSeeder6.png', '/assets/DaoSeeder7.png', '/assets/DaoSeeder8.png'],
  },
  {
    title: 'CinemaGlimpse',
    type: 'image',
    description: 'Movie discovery and entertainment platform with advanced search and recommendation features.',
    techStack: 'NodeJs, NextJs, MongoDB',
    image: '/assets/CinemaGlimpse_main.png',
    images: [
      '/assets/CinemaGlimpse1.png',
      '/assets/CinemaGlimpse3.png',
      '/assets/CinemaGlimpse4.png',
      '/assets/CinemaGlimpse5.png',
      '/assets/CinemaGlimpse6.png',
      '/assets/CinemaGlimpse7.png',
      '/assets/CinemaGlimpse8.png',
      '/assets/CinemaGlimpse9.png',
      '/assets/CinemaGlimpse10.png',
      '/assets/CinemaGlimpse11.png',
      '/assets/CinemaGlimpse12.png',
    ],
  },
  {
    title: 'ClickThrive',
    type: 'image',
    description: 'Digital marketing and lead generation platform designed to boost business growth.',
    techStack: 'WordPress',
    image: '/assets/ClickThrive_main.png',
    images: ['/assets/ClickThrive1.png', '/assets/ClickThrive3.png'],
  },
  {
    title: 'Booltec',
    type: 'image',
    description: 'Technology solutions platform offering innovative software development services.',
    techStack: 'WordPress',
    image: '/assets/booltec_main.png',
    images: ['/assets/Booltec1.png', '/assets/Booltec2.png', '/assets/Booltec3.png'],
  },
  {
    title: 'Heerekar',
    type: 'image',
    description: 'Professional services platform connecting clients with skilled professionals.',
    techStack: 'Figma, Illustrator, WordPress',
    image: '/assets/Heerekar_Main.png',
    images: ['/assets/Heerekar2.png', '/assets/Heerekar3.png', '/assets/Heerekar4.png', '/assets/Heerekar5.png', '/assets/Heerekar6.png'],
  },
  {
    title: 'Khareedo',
    type: 'image',
    description: 'E-commerce platform providing seamless online shopping experience with modern UI/UX.',
    techStack: 'WordPress, Woocommerce',
    image: '/assets/Khareedo_main.png',
    images: ['/assets/Khareedo2.png', '/assets/Khareedo3.png', '/assets/Khareedo4.png', '/assets/Khareedo5.png', '/assets/Khareedo6.png'],
  },
  {
    title: 'LeadsBounty',
    type: 'image',
    description: 'Lead generation and management system for businesses to capture and nurture prospects.',
    techStack: 'ReactJs',
    image: '/assets/LeadsBounty_main.png',
    images: [],
  },
  {
    title: 'Martian Marketing',
    type: 'image',
    description: 'Digital marketing agency platform with comprehensive marketing solutions and analytics.',
    techStack: 'WordPress',
    image: '/assets/martianmarketing_main.png',
    images: ['/assets/martianmarketing.png', '/assets/martianmarketing2.png', '/assets/martianmarketing5.png'],
  },
  {
    title: 'APT Meme Coin',
    type: 'image',
    description: 'Decentralized meme coin inspired by the APT song by Bruno Mars and Rose, bringing music and crypto together.',
    techStack: 'NextJs, Figma, Illustrator',
    image: '/assets/apt_main.png',
    images: ['/assets/apt1.png', '/assets/apt2.png'],
  },
  {
    title: 'Restaurant Management',
    type: 'image',
    description: 'Complete restaurant management solution with ordering, inventory, and staff management.',
    techStack: 'WordPress',
    image: '/assets/Restaurant_main.png',
    images: [],
  },
  {
    title: 'SNA Platform',
    type: 'image',
    description: 'Decentralized social media application built on blockchain technology for secure and private social networking.',
    techStack: 'ReactJs, Solidity, Figma, Illustrator, IPFS',
    image: '/assets/SNA_main.PNG',
    images: ['/assets/SNA2.PNG', '/assets/SNA3.PNG', '/assets/SNA4.PNG', '/assets/SNA5.PNG', '/assets/SNA6.PNG', '/assets/SNA8.PNG', '/assets/SNA9.PNG'],
  },
  {
    title: '360Training',
    type: 'image',
    description: 'A leading e-learning and certification platform. In 2025, generated $42.9M revenue, reflecting strong industry adoption and scale.',
    techStack: 'E-learning, QA, Automation, Web',
    image: 'https://drive.google.com/uc?export=view&id=1uqKd5_egRYPvCk-A28BEmkP5glxTrz-P',
    images: [],
  },
  {
    title: 'Rabbito Social',
    type: 'image',
    description: 'A modern social platform designed for seamless connections and community building; actively growing with thousands of engaged users.',
    techStack: 'Social, QA, Mobile, Web',
    image: '/assets/rabbito.png',
    images: ['/assets/rabbito1.png'],
  },
  {
    title: 'Lifecycle PLM',
    type: 'image',
    description: 'Robust PLM solution for enterprise collaboration and process automation; trusted by global organizations in manufacturing and design.',
    techStack: 'Enterprise, PLM, QA, Automation',
    image: '/assets/lifecycleplm.avif',
    images: ['/assets/lifecycleplm1.png'],
  },
  {
    title: 'Disearch AI',
    type: 'image',
    description: 'AI-powered document/PDF search that returns instant answers from files; recognized as an innovative SaaS for knowledge retrieval.',
    techStack: 'AI, SaaS, QA, API',
    image: '/assets/deepsearch.webp',
    images: ['/assets/deepsearch1.png', '/assets/deepsearch2.png'],
  },
  {
    title: 'Zombie Shooter: Offline Game',
    type: 'image',
    description: 'Mobile game with 100K+ downloads, hundreds of positive reviews; top-rated offline zombie shooting experience.',
    techStack: 'Mobile, Shooter, Action, Offline',
    image: '/assets/zombie.webp',
    images: ['/assets/zombie1.webp', '/assets/zombie2.webp'],
  },
  {
    title: 'Jet Fighter: Sky Combat 3D',
    type: 'image',
    description: 'Mobile aerial combat game with 100K+ downloads, strong ratings, and in-app purchases.',
    techStack: 'Mobile, Flight, Combat, 3D',
    image: '/assets/sky.webp',
    images: ['/assets/sky1.webp', '/assets/sky2.webp'],
  },
  {
    title: 'Octothink: Brain Training',
    type: 'image',
    description: 'Mobile brain-training and puzzle app with 100K+ downloads and strong user ratings; engaging and educational.',
    techStack: 'Mobile, Puzzle, Brain, Learn',
    image: '/assets/brain.webp',
    images: ['/assets/brain1.webp', '/assets/brain2.webp'],
  },
  {
    title: 'Email Campaign',
    type: 'excel',
    description: 'Email marketing campaign dashboard showing performance metrics, open rates, click rates, and reply statistics across multiple campaigns.',
    techStack: 'Excel, Google SpreadSheet',
    image: '/assets/Email Campaign.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Market Research, List Building',
    type: 'excel',
    description: 'Comprehensive market research and list building spreadsheet showing detailed business data including venue accounts, contact information, locations, and booking software details for targeted outreach.',
    techStack: 'Excel, Google SpreadSheet',
    image: '/assets/Market Research, List Building.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Lead Generation',
    type: 'excel',
    description: 'Comprehensive lead generation database with business directory information including web URLs, addresses, postal codes, owner names, email addresses, and phone numbers for targeted B2B outreach.',
    techStack: 'Excel, Google SpreadSheet',
    image: '/assets/LEAD GENERATION (2).png',
    link: 'https://www.google.com',
  },
  {
    title: 'List Building, Cold Calling, Appointment Setting',
    type: 'excel',
    description: 'Property data management spreadsheet with comprehensive property addresses, owner information, contact details, and phone numbers for targeted cold calling and appointment setting campaigns.',
    techStack: 'Excel, Google SpreadSheet',
    image: '/assets/LIST BUILDING, COLD CALLING, APPOINTMENT SETTING.png',
    link: 'https://www.google.com',
  },
]

export default function ProjectSection() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    if (project.type === 'image') {
      setSelectedProject(project)
      setIsModalOpen(true)
    } else if (project.type === 'excel' && project.link) {
      window.open(project.link, '_blank')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id='portfolio' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 text-foreground'>Portfolio & Case Studies</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>We take pride in delivering measurable results. Here are a few examples of our successful projects.</p>
        </motion.div>

        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-foreground mb-8 text-center'>Our Featured Work</h3>
          <p className='text-center text-muted-foreground mb-8'>Explore some of our most successful B2B growth campaigns.</p>

          <div className='grid md:grid-cols-3 gap-8'>
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className='rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex justify-center mb-6'>
                  <div className='p-4 rounded-full bg-primary/10'>{category.icon}</div>
                </div>
                <h3 className='text-xl font-bold text-foreground mb-3 text-center'>{category.title}</h3>
                <p className='text-primary font-semibold mb-4 text-center'>{category.description}</p>
                <p className='text-sm text-muted-foreground text-center italic'>{category.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          {/* <h3 className='text-2xl font-bold text-foreground mb-8 text-center'>Portfolio Showcase</h3>
          <p className='text-center text-muted-foreground mb-8'>Visual proof of our work and expertise.</p> */}
          <section id='projects' className='py-20 bg-background'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-4xl font-bold mb-12 text-foreground'>
                Portfolio Showcase
              </motion.h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className='rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border hover:border-border/50 cursor-pointer group'
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className='relative overflow-hidden'>
                      <Image src={project.image} alt={project.title} width={400} height={300} className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300' />
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium'>View Details</div>
                        </div>
                      </div>
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-card-foreground'>{project.title}</h3>
                      <p className='text-muted-foreground mt-2'>{project.description}</p>
                      <div className='mt-4'>
                        <div className='flex flex-wrap gap-1.5'>
                          {project.techStack.split(', ').map((tech, techIndex) => (
                            <span key={techIndex} className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
          {/* <div className='grid md:grid-cols-2 gap-6'>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className='rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300'
              >
                <div className='relative w-full h-64 bg-muted/20'>
                  <Image
                    src={item.image}
                    alt={item.skill}
                    fill
                    className='object-contain p-4'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='p-6'>
                  <h4 className='text-lg font-bold text-foreground mb-2'>{item.skill}</h4>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>

        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-foreground mb-8 text-center'>Proven Results That Speak</h3>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-muted'>
                  <th className='p-4 text-left font-semibold text-foreground border border-border'>Title</th>
                  <th className='p-4 text-left font-semibold text-foreground border border-border'>Focus Area</th>
                  <th className='p-4 text-left font-semibold text-foreground border border-border'>Key Result</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((study, index) => (
                  <motion.tr key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className='hover:bg-muted/50 transition-colors'>
                    <td className='p-4 border border-border text-foreground'>{study.title}</td>
                    <td className='p-4 border border-border text-muted-foreground'>{study.focusArea}</td>
                    <td className='p-4 border border-border text-primary font-semibold'>{study.result}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className='text-center mb-8'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='inline-block px-8 py-4 rounded-lg bg-black text-white dark:bg-white dark:text-black text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300'
          >
            Request for an Extensive Portfolio & Business Case Studies
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className='text-center p-12 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20'>
          <h3 className='text-3xl font-bold text-foreground mb-4'>Want to See More of Our Work?</h3>
          <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>We keep certain projects private for client confidentiality. Request full access to view additional case studies, app demos, and technical audits.</p>
          <a href='#contact' className='inline-block px-8 py-4 rounded-lg bg-black text-white dark:bg-white dark:text-black text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300'>
            Request Full Portfolio Access
          </a>
        </motion.div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
