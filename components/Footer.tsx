'use client'
import { Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className='bg-background text-foreground py-12 border-t border-sidebar-border'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div>
          <div className='mb-4'>
            <Image
              src="/assets/logo.png"
              alt="Tech4 Universe LLC"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(7500%) hue-rotate(0deg) brightness(95%) contrast(118%)' }}
            />
          </div>
          <h3 className='text-xl font-bold text-foreground'>Tech4 Universe LLC</h3>
          <p className='mt-3 text-sm text-foreground-muted'>U.S. Registered IT and Business Solutions Agency specializing in Lead Generation, Software Development, QA, and Cybersecurity.</p>
          <div className='mt-4'>
            <p className='text-xs text-muted-foreground'>1021 E Lincoln way Unit # 1446</p>
            <p className='text-xs text-muted-foreground'>Cheyenne, WY 82001</p>
          </div>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-foreground'>Services</h4>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Lead Generation
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Telemarketing & Appointment Setting
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Email Marketing
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Web Development
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Application Development
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                SQA Manual/Automation
              </a>
            </li>
            <li>
              <a href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                Cybersecurity
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-foreground'>Contact</h4>
          <div className='mt-3 space-y-3'>
            <div className='flex items-center gap-2'>
              <Mail size={16} className='text-primary' />
              <a href='mailto:outreach@tech4universe.com' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                outreach@tech4universe.com
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <ExternalLink size={16} className='text-primary' />
              <a href='https://www.tech4universe.com' target='_blank' rel='noopener noreferrer' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                www.tech4universe.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 pt-6 border-t border-sidebar-border'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='text-sm text-foreground-muted text-center md:text-left'>
            © 2025 Tech4 Universe LLC — All Rights Reserved
          </div>
          <div className='flex items-center gap-6'>
            <a
              href='https://www.linkedin.com/company/tech4-universe/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin className='w-6 h-6' />
              <span className='text-sm font-medium'>LinkedIn</span>
            </a>
            <a
              href='https://www.upwork.com/agencies/tech4universe/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors'
              aria-label='Upwork Agency Profile'
            >
              <SiUpwork className='w-6 h-6' />
              <span className='text-sm font-medium'>Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
