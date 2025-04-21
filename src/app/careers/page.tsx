import { type Metadata } from 'next'
import CareersClient from './CareersClient'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join CruiseBrains to work on innovative software projects in a collaborative, growth-focused environment using cutting-edge technologies.',
}

export default function Careers() {
  return <CareersClient />
}
