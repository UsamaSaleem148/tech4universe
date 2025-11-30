'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ProjectModal from './ui/modal'

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
]

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id='projects' className='py-20 bg-background'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-4xl font-bold mb-12 text-foreground'>
            My Work
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
    </>
  )
}
