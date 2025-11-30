'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'

const leaders = [
  {
    name: 'Muhammad Umer Aftab',
    role: 'Founder & Business Development Specialist',
    linkedin: 'https://www.linkedin.com/in/muhammad-umer-aftab/',
    image: '/assets/umer-aftab.jpeg', 
  },
  {
    name: 'Umer Wasim',
    role: 'Telemarketing Lead/Team Lead',
    linkedin: 'https://www.linkedin.com/in/umerwasim24/',
    image: '/assets/umer-waseem.png', 
  },
]

export default function Leadership() {
  return (
    <section id='leadership' className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>Meet Our Leadership</h2>
          <p className='text-lg text-muted-foreground'>The team driving innovation and excellence at Tech4 Universe LLC</p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className='group relative'
            >
              <div className='rounded-2xl border border-border bg-card p-8 text-center hover:shadow-xl transition-all duration-300'>
                <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 bg-gradient-to-br from-primary/20 to-primary/5'>
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    width={128}
                    height={128}
                    className='w-full h-full object-cover'
                    priority={index === 0}
                  />
                </div>

                <h3 className='text-2xl font-bold text-foreground mb-2'>{leader.name}</h3>
                <p className='text-muted-foreground mb-6'>{leader.role}</p>

                <a
                  href={leader.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-100'
                >
                  <Linkedin className='w-5 h-5' />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
