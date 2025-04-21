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
          We begin by understanding your{' '}
          <strong className="font-semibold text-neutral-950">
            business goals
          </strong>{' '}
          and target audience to create a mobile app that drives engagement and
          delivers value.
        </p>
        <p>
          Through collaborative workshops and user research, we define the app’s
          features, user flows, and platform requirements to ensure a{' '}
          <strong className="font-semibold text-neutral-950">
            seamless experience
          </strong>{' '}
          on iOS and Android.
        </p>
        <p>
          This phase delivers a detailed{' '}
          <strong className="font-semibold text-neutral-950">
            app development roadmap
          </strong>
          , outlining design, functionality, and timelines to set the foundation
          for success.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="User Research">
          Analyzing your audience to tailor the app’s design and functionality.
        </ListItem>
        <ListItem title="Feature Definition">
          Identifying key features to meet your business and user needs.
        </ListItem>
        <ListItem title="Prototyping">
          Creating interactive prototypes to visualize user flows and app
          structure.
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
          Using{' '}
          <strong className="font-semibold text-neutral-950">
            React Native
          </strong>
          , we build cross-platform mobile apps that deliver native-like
          performance and user experiences on both iOS and Android.
        </p>
        <p>
          Our{' '}
          <strong className="font-semibold text-neutral-950">
            agile development
          </strong>{' '}
          process ensures iterative progress, with regular client feedback to
          align the app with your brand and objectives.
        </p>
        <p>
          From intuitive UI designs to native features like camera and GPS
          integration, we create apps that are engaging, reliable, and easy to
          maintain.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'David Patel',
          role: 'Founder of HealthSync Solutions',
        }}
        className="mt-12"
      >
        CruiseBrains delivered a mobile app that revolutionized our customer
        engagement, with a seamless and intuitive interface.
      </Blockquote>
    </Section>
  )
}

function Launch() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We conduct comprehensive{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> to
          ensure your app is bug-free, responsive, and optimized for performance
          across devices.
        </p>
        <p>
          Our team manages a smooth{' '}
          <strong className="font-semibold text-neutral-950">launch</strong> to
          app stores, handling submissions and ensuring compliance with iOS and
          Android guidelines.
        </p>
        <p>
          Post-launch, we provide ongoing{' '}
          <strong className="font-semibold text-neutral-950">support</strong>{' '}
          and maintenance to keep your app updated, secure, and aligned with
          your business needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="App Store Optimization">
          Enhancing visibility with optimized app store listings and keywords.
        </ListItem>
        <ListItem title="Performance Testing">
          Ensuring fast load times and smooth functionality across devices.
        </ListItem>
        <ListItem title="Maintenance Plans">
          Offering updates and support to keep your app performing at its best.
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
          We harness modern technologies to build high-performance,
          cross-platform mobile apps that deliver exceptional user experiences
          and business value.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="React Native">
            A powerful framework for building cross-platform apps with
            native-like performance, enabling code reuse across iOS and Android.
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
        title="Benefits of our mobile development services"
      >
        <p>
          Our mobile development services empower businesses with engaging,
          high-quality apps that drive customer loyalty and operational
          efficiency.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Cross-Platform Efficiency">
            Build once, deploy on both iOS and Android with React Native, saving
            time and resources.
          </GridListItem>
          <GridListItem title="Native-Like Experience">
            Deliver intuitive, high-performance apps that feel native on every
            device.
          </GridListItem>
          <GridListItem title="Scalable Solutions">
            Create apps that grow with your business, supporting new features
            and users.
          </GridListItem>
          <GridListItem title="Agile Development">
            Our iterative process ensures timely delivery and alignment with
            your vision.
          </GridListItem>
          <GridListItem title="Enhanced Engagement">
            Drive customer loyalty with interactive features like push
            notifications and GPS.
          </GridListItem>
          <GridListItem title="Ongoing Support">
            Keep your app secure and up-to-date with our dedicated maintenance
            services.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Mobile Development',
  description:
    'CruiseBrains builds high-quality, cross-platform mobile apps using React Native to engage customers and drive business growth.',
}

export default function MobileDevelopment() {
  return (
    <>
      <PageIntro
        eyebrow="Mobile Development"
        title="Empowering your business with mobile apps"
      >
        <p>
          At CruiseBrains, we craft high-quality, user-friendly mobile apps that
          enhance customer engagement, streamline operations, and drive business
          success using cutting-edge technologies and agile methodologies.
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
