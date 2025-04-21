import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import mobileDev from '@/images/services/mobile-development.webp'
import webDev from '@/images/services/web-development.webp'
import customSoftware from '@/images/services/custom-software.png'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

interface Service {
  title: string
  description: string
  href: string
  image: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'We craft responsive, high-performance websites using modern technologies like React and Next.js, tailored to your business needs.',
    href: '/services/web-development',
    image: webDev.src,
  },
  {
    title: 'Mobile Development',
    description:
      'Our team builds intuitive, scalable mobile apps for iOS and Android, delivering seamless user experiences like the HealthSync App.',
    href: '/services/mobile-development',
    image: mobileDev.src,
  },
  {
    title: 'Custom Software',
    description:
      'We develop bespoke software solutions, from retail platforms like Nexus to educational systems, designed to solve your unique challenges.',
    href: '/services/custom-software',
    image: customSoftware.src,
  },
]

function ServicesSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Services
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <li key={service.title}>
              <FadeIn>
                <Border className="pt-8">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="px-6 py-8">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base text-neutral-600">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Button
                        href={service.href}
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Services - CruiseBrains',
  description:
    'Explore CruiseBrains’ expert web development, mobile development, and custom software solutions designed to empower your business.',
}

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Our Services"
        title="Empowering your business with innovative software"
      >
        <p>
          At CruiseBrains, we deliver cutting-edge web, mobile, and custom
          software solutions tailored to your unique needs, driving success
          across industries.
        </p>
      </PageIntro>

      <ServicesSection />

      <ContactSection />
    </>
  )
}
