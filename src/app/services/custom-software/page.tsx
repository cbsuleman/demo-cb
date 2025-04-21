import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Strategy() {
  return (
    <Section title="Strategy & Planning" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start by diving deep into your{' '}
          <strong className="font-semibold text-neutral-950">
            business challenges
          </strong>{' '}
          and objectives, ensuring our software solutions address your specific
          needs.
        </p>
        <p>
          Through collaborative workshops, stakeholder interviews, and technical
          assessments, we define the software’s scope, features, and integration
          requirements to deliver{' '}
          <strong className="font-semibold text-neutral-950">
            tailored functionality
          </strong>
          .
        </p>
        <p>
          This phase produces a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            software blueprint
          </strong>
          , detailing architecture, timelines, and deliverables to guide
          development.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Stakeholder Workshops">
          Engaging key stakeholders to align the solution with business goals.
        </ListItem>
        <ListItem title="Requirements Analysis">
          Identifying functional and technical needs for a robust system.
        </ListItem>
        <ListItem title="System Architecture Design">
          Planning scalable architectures for seamless integration and
          performance.
        </ListItem>
      </List>
    </Section>
  )
}

function Design() {
  return (
    <Section
      title="Design & Development"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Leveraging technologies like{' '}
          <strong className="font-semibold text-neutral-950">
            Laravel, React, and MySQL
          </strong>
          , we build custom software that is secure, scalable, and aligned with
          your business processes.
        </p>
        <p>
          Our{' '}
          <strong className="font-semibold text-neutral-950">
            agile development
          </strong>{' '}
          approach ensures iterative progress, incorporating your feedback to
          deliver a solution that enhances efficiency and user satisfaction.
        </p>
        <p>
          From intuitive interfaces powered by Tailwind CSS and Livewire to
          robust backends, we create software that integrates seamlessly with
          your existing systems.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'Emily Rogers',
          role: 'Operations Manager at Nexus Retail',
        }}
        className="mt-12"
      >
        CruiseBrains delivered a custom software solution that streamlined our
        operations and exceeded our expectations in usability and performance.
      </Blockquote>
    </Section>
  )
}

function Launch() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We perform rigorous{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> to
          ensure your software is reliable, secure, and optimized for
          performance across all use cases.
        </p>
        <p>
          Our team manages a seamless{' '}
          <strong className="font-semibold text-neutral-950">deployment</strong>
          , integrating the software with your infrastructure and providing
          training for your team.
        </p>
        <p>
          Post-launch, we offer ongoing{' '}
          <strong className="font-semibold text-neutral-950">support</strong>{' '}
          and maintenance to keep your software updated, secure, and adaptable
          to future needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Integration Testing">
          Ensuring seamless compatibility with existing systems and workflows.
        </ListItem>
        <ListItem title="User Training">
          Providing comprehensive training to empower your team to use the
          software effectively.
        </ListItem>
        <ListItem title="Maintenance Plans">
          Offering ongoing support to ensure long-term reliability and
          scalability.
        </ListItem>
      </List>
    </Section>
  )
}

function Technologies() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Our toolkit" title="Technologies we use">
        <p>
          We utilize a robust stack of modern technologies to deliver custom
          software solutions that are scalable, secure, and tailored to your
          unique business needs.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Laravel">
            A powerful PHP framework for building complex, data-driven
            applications with elegant syntax and a rich ecosystem.
          </GridListItem>
          <GridListItem title="React">
            A component-based library for creating dynamic, high-performance
            user interfaces with a virtual DOM.
          </GridListItem>
          <GridListItem title="MySQL">
            A reliable relational database for managing and storing data,
            powering robust backend systems.
          </GridListItem>
          <GridListItem title="Livewire">
            A Laravel library for building dynamic, real-time interfaces with
            minimal JavaScript, integrated with Blade templates.
          </GridListItem>
          <GridListItem title="Tailwind CSS">
            A utility-first CSS framework for rapid development of custom,
            responsive interfaces.
          </GridListItem>
          <GridListItem title="JavaScript">
            A versatile language for adding dynamic functionality and
            interactivity to applications.
          </GridListItem>
          <GridListItem title="Alpine.js">
            A lightweight framework for adding reactive, declarative
            interactivity to components.
          </GridListItem>
          <GridListItem title="jQuery">
            A robust library for simplifying DOM manipulation and ensuring
            cross-browser compatibility.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Benefits() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Why choose us"
        title="Benefits of our custom software services"
      >
        <p>
          Our custom software solutions are designed to address your unique
          challenges, enhance efficiency, and drive business success through
          innovation and collaboration.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Tailored Solutions">
            We build software customized to your specific business processes and
            goals.
          </GridListItem>
          <GridListItem title="Seamless Integration">
            Our solutions integrate effortlessly with your existing systems and
            workflows.
          </GridListItem>
          <GridListItem title="Scalable Architecture">
            We design software that grows with your business, supporting future
            expansion.
          </GridListItem>
          <GridListItem title="Agile Delivery">
            Our iterative approach ensures timely delivery and alignment with
            your vision.
          </GridListItem>
          <GridListItem title="Enhanced Efficiency">
            Streamline operations with software that automates and optimizes
            processes.
          </GridListItem>
          <GridListItem title="Dedicated Support">
            Ongoing maintenance ensures your software remains secure and
            up-to-date.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Custom Software',
  description:
    'CruiseBrains develops tailored software solutions using technologies like Laravel, React, and MySQL to address unique business challenges and drive efficiency.',
}

export default function CustomSoftware() {
  return (
    <>
      <PageIntro
        eyebrow="Custom Software"
        title="Tailored solutions for your business"
      >
        <p>
          At CruiseBrains, we design and develop custom software that addresses
          your unique business challenges, streamlines operations, and drives
          growth using cutting-edge technologies and agile methodologies.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Strategy />
        <Design />
        <Launch />
      </div>

      <Technologies />
      <Benefits />

      <ContactSection />
    </>
  )
}
