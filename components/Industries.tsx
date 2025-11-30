'use client'

import { motion } from 'framer-motion'
import { Laptop, ShoppingCart, Home, GraduationCap, Heart, DollarSign, Plane, Hammer } from 'lucide-react'

const industries = [
  { name: 'SaaS (Software-as-a-Service)', icon: <Laptop className='w-8 h-8' /> },
  { name: 'E-commerce & Retail', icon: <ShoppingCart className='w-8 h-8' /> },
  { name: 'Real Estate & Mortgage', icon: <Home className='w-8 h-8' /> },
  { name: 'Education & EdTech', icon: <GraduationCap className='w-8 h-8' /> },
  { name: 'Healthcare & Wellness', icon: <Heart className='w-8 h-8' /> },
  { name: 'Finance / FinTech / Insurance', icon: <DollarSign className='w-8 h-8' /> },
  { name: 'Hospitality & Travel', icon: <Plane className='w-8 h-8' /> },
  { name: 'Construction / Home Improvement / Solar', icon: <Hammer className='w-8 h-8' /> },
]

export default function Industries() {
  return (
    <section id='industries' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>Industries We Serve</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            We deliver tailored solutions across diverse industries, helping businesses grow and innovate.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group relative p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300'
            >
              <div className='flex flex-col items-center text-center gap-4'>
                <div className='p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300'>
                  {industry.icon}
                </div>
                <h3 className='text-base font-semibold text-foreground'>{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
