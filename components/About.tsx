'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Lightbulb, Users } from 'lucide-react'

export default function About() {
  const values = [
    { icon: <Shield className='w-6 h-6 text-red-600 dark:text-red-500' />, label: 'Integrity' },
    { icon: <Lightbulb className='w-6 h-6 text-red-600 dark:text-red-500' />, label: 'Innovation' },
    { icon: <Users className='w-6 h-6 text-red-600 dark:text-red-500' />, label: 'Collaboration' },
    { icon: <Target className='w-6 h-6 text-red-600 dark:text-red-500' />, label: 'Quality' },
  ]

  return (
    <section id='about' className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className='text-4xl font-bold text-foreground mb-6'>About Tech4 Universe LLC</h2>
            <p className='text-lg text-muted-foreground mb-6'>
              Tech4 Universe LLC is a <span className='font-semibold text-foreground'>U.S. Registered IT and Business Solutions Agency</span>. We specialize in connecting technology and growth by providing end-to-end solutions including Lead Generation, Software Development, QA, and Cybersecurity. Dedicated to helping startups and enterprises build, secure, and scale through innovation.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              Tech4Universe LLC is a Top-Rated agency with an outstanding side performance on Upwork with a 95% Job Success Score and an average client rating of 4.9 stars. Our proven record of client satisfaction, project delivery excellence, and consistent performance reflects our commitment to quality results across lead generation, cold calling, virtual assistance, and project management services.
            </p>
            
            <div className='space-y-4 mb-8'>
              <div>
                <h3 className='text-xl font-semibold text-foreground mb-2'>Mission</h3>
                <p className='text-muted-foreground'>To empower businesses to thrive in a competitive landscape by delivering expertise and innovative solutions that create lasting value.</p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-foreground mb-2'>Vision</h3>
                <p className='text-muted-foreground'>To become the world&apos;s most trusted partner for IT and Business Growth Outsourcing.</p>
              </div>
            </div>

            <h3 className='text-xl font-semibold text-foreground mb-4'>Core Values</h3>
            <div className='grid grid-cols-2 gap-4'>
              {values.map((value, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} className='flex items-center gap-3 p-3 rounded-lg bg-card border border-border'>
                  <div className='flex-shrink-0'>{value.icon}</div>
                  <div className='text-sm font-medium text-foreground'>{value.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className='relative'>
            <div className='rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex flex-col gap-6'>
              <div className='text-center p-6 rounded-xl bg-card/50 border border-border'>
                <div className='w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center'>
                  <Shield className='w-10 h-10 text-red-600 dark:text-red-500' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-2'>U.S.-Registered LLC</h3>
                <p className='text-sm text-muted-foreground'>Trusted & Compliant</p>
              </div>
              
              <div className='text-center p-6 rounded-xl bg-card/50 border border-border'>
                <div className='w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center'>
                  <Users className='w-10 h-10 text-red-600 dark:text-red-500' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-2'>Global Client Base</h3>
                <p className='text-sm text-muted-foreground'>Serving Businesses Worldwide</p>
              </div>
              
              <div className='text-center p-6 rounded-xl bg-card/50 border border-border'>
                <div className='w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center'>
                  <Target className='w-10 h-10 text-red-600 dark:text-red-500' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-2'>Results-Driven</h3>
                <p className='text-sm text-muted-foreground'>Measurable ROI & Growth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
