'use client'

import { calendlyLink } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Code, Heart, Calendar, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center py-32 bg-background overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0 w-full h-full pointer-events-none'
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, var(--foreground) 0 1px, transparent 1px 50px), repeating-linear-gradient(to bottom, var(--foreground) 0 1px, transparent 1px 50px)',
            opacity: 0.05,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          }}
        />

        <div className='absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[repeating-linear-gradient(45deg,var(--primary) 0 2px,transparent 2px 10px)] opacity-10' />
      </div>

      <div id='home' className='mx-auto max-w-5xl text-center px-6 relative z-10'>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-5xl md:text-6xl font-bold tracking-tight text-red-600 dark:text-red-500'>
          Where Imagination Meets Innovation
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className='mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          Tech4 Universe LLC transforms ideas into powerful digital solutions — from Lead Generation and Software Development to Cybersecurity and AI Automation. We combine creativity, technology, and strategy to help businesses grow faster, stay
          secure, and deliver exceptional results. Whether it&apos;s driving B2B leads, developing next-generation applications, or securing digital infrastructure — we make innovation simple.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
          <a href={calendlyLink} target='_blank' className='px-8 py-4 rounded-lg bg-black text-white dark:bg-white dark:text-black text-lg font-medium transition transform hover:shadow-lg hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-100'>
            Get a Free Consultation
          </a>
          <a href='#services' className='px-8 py-4 rounded-lg border border-foreground text-lg font-medium text-foreground transition transform hover:bg-foreground hover:text-background hover:scale-105'>
            Explore Services
          </a>
        </motion.div>

        {/* Statistics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto'>
          <div className='p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-center'>
            <div className='mb-3 flex justify-center'>
              <Code className='w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500' />
            </div>
            <p className='text-2xl md:text-3xl font-bold text-foreground mb-1'>100+</p>
            <p className='text-xs md:text-sm font-medium text-muted-foreground'>Projects Completed</p>
          </div>
          <div className='p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-center'>
            <div className='mb-3 flex justify-center'>
              <Heart className='w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500' />
            </div>
            <p className='text-2xl md:text-3xl font-bold text-foreground mb-1'>50+</p>
            <p className='text-xs md:text-sm font-medium text-muted-foreground'>Happy Clients</p>
          </div>
          <div className='p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-center'>
            <div className='mb-3 flex justify-center'>
              <Calendar className='w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500' />
            </div>
            <p className='text-2xl md:text-3xl font-bold text-foreground mb-1'>4+</p>
            <p className='text-xs md:text-sm font-medium text-muted-foreground'>Years Experience</p>
          </div>
          <div className='p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-center'>
            <div className='mb-3 flex justify-center'>
              <Star className='w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500 fill-red-600 dark:fill-red-500' />
            </div>
            <p className='text-2xl md:text-3xl font-bold text-foreground mb-1'>4.9/5</p>
            <p className='text-xs md:text-sm font-medium text-muted-foreground'>Average Client Rating</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: ['easeIn', 'linear', 'easeOut'] }}
      >
        <motion.div className='w-1 h-2 bg-foreground rounded-full mt-1' />
      </motion.div>
    </section>
  )
}
