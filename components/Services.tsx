'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Phone, Mail, ClipboardList, Code, Smartphone, TestTube, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const inHouseServices = [
  {
    title: 'Lead Generation',
    description: 'We identify and engage your ideal prospects using data-driven targeting, CRM integration, and automated cold email campaigns. Our proven process delivers high-quality B2B leads with measurable ROI.',
    icon: <Target className='h-8 w-8 text-primary' />,
    category: 'In-House'
  },
  {
    title: 'Telemarketing & Appointment Setting',
    description: 'Our expert callers convert qualified leads into scheduled meetings. We use personalized scripts, soft-sell techniques, and analytics to maximize appointment conversion.',
    icon: <Phone className='h-8 w-8 text-green-400 dark:text-green-300' />,
    category: 'In-House'
  },
  {
    title: 'Email Marketing',
    description: 'From prospect segmentation to automation setup, we manage full-cycle cold email and drip campaigns designed to boost engagement and response rates.',
    icon: <Mail className='h-8 w-8 text-blue-400 dark:text-blue-300' />,
    category: 'In-House'
  },
  {
    title: 'Project Management',
    description: 'We manage complex projects end-to-end using Agile frameworks and tools like Trello, Asana, and Slack. Our focus is on clarity, timelines, and smooth delivery.',
    icon: <ClipboardList className='h-8 w-8 text-purple-400 dark:text-purple-300' />,
    category: 'In-House'
  },
]

const outsourceServices = [
  {
    title: 'Web Development',
    description: 'From landing pages to full-scale platforms, we build responsive, secure, and SEO-optimized websites using modern frameworks like React, Next.js, and WordPress.',
    icon: <Code className='h-8 w-8 text-orange-400 dark:text-orange-300' />,
    category: 'Outsource'
  },
  {
    title: 'Application Development',
    description: 'We design and develop scalable mobile and web applications tailored to your business goals. Our tech stack includes MERN, Flutter, and Node.js.',
    icon: <Smartphone className='h-8 w-8 text-pink-400 dark:text-pink-300' />,
    category: 'Outsource'
  },
  {
    title: 'SQA Manual/Automation',
    description: 'We provide end-to-end QA testing services — functional, regression, UI/UX, and automation. Our QA engineers ensure flawless software performance before deployment.',
    icon: <TestTube className='h-8 w-8 text-teal-400 dark:text-teal-300' />,
    category: 'Outsource'
  },
  {
    title: 'Cybersecurity (Penetration Testing)',
    description: 'Protect your business with ethical hacking, vulnerability scanning, and penetration testing. We identify potential threats and provide a complete mitigation plan.',
    icon: <Shield className='h-8 w-8 text-red-400 dark:text-red-300' />,
    category: 'Outsource'
  },
]

export default function ServicesSection() {
  return (
    <section id='services' className='py-20 bg-background relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
          <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>Our Services</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>We offer strategic business growth and technical solutions — from lead generation to software development and cybersecurity.</p>
        </motion.div>

        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-foreground mb-6 text-center'>Delivered In-House</h3>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {inHouseServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className='group relative'
              >
                <Card className='relative h-full rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-primary/30'>
                  <CardHeader className='text-center pb-4'>
                    <motion.div
                      transition={{ duration: 0.6 }}
                      className='flex justify-center mb-6'
                    >
                      <div className='p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300'>{service.icon}</div>
                    </motion.div>
                    <CardTitle className='text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <p className='text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-bold text-foreground mb-6 text-center'>Outsource Services (Technical Division)</h3>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {outsourceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className='group relative'
              >
                <Card className='relative h-full rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-primary/30'>
                  <CardHeader className='text-center pb-4'>
                    <motion.div
                      transition={{ duration: 0.6 }}
                      className='flex justify-center mb-6'
                    >
                      <div className='p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300'>{service.icon}</div>
                    </motion.div>
                    <CardTitle className='text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <p className='text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
