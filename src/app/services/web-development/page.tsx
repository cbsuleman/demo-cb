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
import imageMeeting from '@/images/whiteboard.jpg'
import imageWhiteboard from '@/images/meeting.jpg'

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
          We collaborate with you to define your{' '}
          <strong className="font-semibold text-neutral-950">
            business objectives
          </strong>{' '}
          and understand your target audience, ensuring your website drives
          measurable results.
        </p>
        <p>
          Through in-depth workshops, competitor analysis, and user research, we
          create a tailored{' '}
          <strong className="font-semibold text-neutral-950">
            web strategy
          </strong>{' '}
          that maximizes engagement, conversions, and brand credibility.
        </p>
        <p>
          This phase delivers a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            project roadmap
          </strong>
          , detailing design, functionality, and timelines to ensure a seamless
          development process.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="User Research">
          Analyzing your audience to create a website that resonates with their
          needs.
        </ListItem>
        <ListItem title="Competitor Analysis">
          Studying competitors to position your website as a market leader.
        </ListItem>
        <ListItem title="Wireframing & Prototyping">
          Designing blueprints to visualize layout and user flows.
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
          Our team leverages cutting-edge technologies like{' '}
          <strong className="font-semibold text-neutral-950">
            React, Laravel, and Tailwind CSS
          </strong>{' '}
          to build visually stunning, responsive websites that deliver
          exceptional user experiences.
        </p>
        <p>
          Using{' '}
          <strong className="font-semibold text-neutral-950">
            agile methodologies
          </strong>
          , we develop iteratively, incorporating your feedback to ensure the
          website aligns with your brand and business goals.
        </p>
        <p>
          From dynamic front-end interfaces to robust backend systems powered by
          MySQL and Livewire, we create websites that are both beautiful and
          highly functional.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'Laura Bennett',
          role: 'Marketing Director at GrowthPulse',
        }}
        className="mt-12"
      >
        CruiseBrains transformed our online presence with a website that’s both
        beautiful and highly effective, driving significant customer engagement.
      </Blockquote>
    </Section>
  )
}

function Launch() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We conduct rigorous{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> to
          ensure your website is fast, secure, and optimized across all devices
          and browsers.
        </p>
        <p>
          Our team manages a seamless{' '}
          <strong className="font-semibold text-neutral-950">launch</strong>,
          integrating SEO best practices and analytics to boost visibility and
          track performance.
        </p>
        <p>
          Post-launch, we provide ongoing{' '}
          <strong className="font-semibold text-neutral-950">support</strong>{' '}
          and maintenance to keep your website secure, updated, and aligned with
          your business growth.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Cross-Browser Testing">
          Ensuring consistent performance across all major browsers and devices.
        </ListItem>
        <ListItem title="SEO Implementation">
          Optimizing content and structure for higher search engine rankings.
        </ListItem>
        <ListItem title="Maintenance & Updates">
          Providing ongoing support to keep your website secure and current.
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
          We leverage a powerful stack of modern technologies to build
          high-performance, scalable, and user-friendly websites tailored to
          your needs.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Tailwind CSS">
            A utility-first CSS framework that streamlines styling, enabling
            rapid development of custom, consistent, and responsive user
            interfaces.
          </GridListItem>
          <GridListItem title="JavaScript">
            A versatile language powering dynamic, interactive features like
            form validation, real-time updates, and single-page applications.
          </GridListItem>
          <GridListItem title="Alpine.js">
            A lightweight framework for adding reactive, declarative
            interactivity to components like dropdowns and modals with minimal
            code.
          </GridListItem>
          <GridListItem title="jQuery">
            A robust library simplifying DOM manipulation, event handling, and
            cross-browser compatibility for efficient web development.
          </GridListItem>
          <GridListItem title="React">
            A component-based library for building fast, scalable user
            interfaces using a virtual DOM to optimize performance.
          </GridListItem>
          <GridListItem title="Laravel">
            A powerful PHP framework for developing complex, data-driven
            websites with elegant syntax and a rich ecosystem.
          </GridListItem>
          <GridListItem title="Livewire">
            A Laravel library for creating dynamic, real-time interfaces with
            minimal JavaScript, seamlessly integrated with Blade templates.
          </GridListItem>
          <GridListItem title="MySQL">
            A reliable, open-source relational database for storing and managing
            data, powering robust backend systems.
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
        title="Benefits of our web development services"
      >
        <p>
          Our web development services deliver measurable results, combining
          cutting-edge technology with a client-centric approach to drive your
          business forward.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Engaging User Experience">
            We design intuitive, visually stunning websites that captivate users
            and enhance brand credibility.
          </GridListItem>
          <GridListItem title="Cross-Device Compatibility">
            Our responsive websites ensure seamless performance on desktops,
            tablets, and mobiles.
          </GridListItem>
          <GridListItem title="Scalable Solutions">
            We build robust architectures to support your business growth and
            evolving needs.
          </GridListItem>
          <GridListItem title="Agile Development">
            Our iterative process delivers timely results while adapting to your
            feedback.
          </GridListItem>
          <GridListItem title="Optimized Performance">
            We prioritize speed and SEO to boost visibility and user retention.
          </GridListItem>
          <GridListItem title="Ongoing Support">
            Our dedicated team provides maintenance to keep your website secure
            and current.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Web Development',
  description:
    'CruiseBrains crafts high-quality, user-friendly websites using modern technologies like React, Laravel, and Tailwind CSS to drive business success.',
}

export default function WebDevelopment() {
  return (
    <>
      <PageIntro
        eyebrow="Web Development"
        title="Building your digital presence"
      >
        <p>
          At CruiseBrains, we create high-quality, visually appealing websites
          that establish your online presence, engage your audience, and drive
          business growth using the latest technologies and agile methodologies.
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
