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
import { TagList, TagListItem } from '@/components/TagList'
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

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by collaborating closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">
            unique needs
          </strong>{' '}
          and business objectives, ensuring we have a clear picture of what
          drives their success.
        </p>
        <p>
          Our team conducts thorough discussions, workshops, and analyses to
          identify challenges and opportunities. We immerse ourselves in our
          clients’ operations to ensure our solutions align with their{' '}
          <strong className="font-semibold text-neutral-950">
            strategic goals
          </strong>
          .
        </p>
        <p>
          This phase culminates in a detailed{' '}
          <strong className="font-semibold text-neutral-950">
            project blueprint
          </strong>
          , outlining the scope, timeline, and deliverables to set the
          foundation for success.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Requirements workshops</TagListItem>
        <TagListItem>Market analysis</TagListItem>
        <TagListItem>Technical feasibility studies</TagListItem>
        <TagListItem>Project scoping</TagListItem>
        <TagListItem>Risk assessment</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Using the project blueprint, we craft a tailored development plan,
          leveraging{' '}
          <strong className="font-semibold text-neutral-950">
            agile methodologies
          </strong>{' '}
          to ensure flexibility and iterative progress.
        </p>
        <p>
          Our skilled developers use the latest technologies to build{' '}
          <strong className="font-semibold text-neutral-950">
            reliable, user-friendly
          </strong>{' '}
          solutions, with regular client check-ins to incorporate feedback and
          ensure alignment with business goals.
        </p>
        <p>
          Transparent communication is key, with dedicated project managers
          providing clear updates and fostering collaboration to keep the
          project on track.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'Sarah Thompson',
          role: 'COO of TechTrend Innovations',
        }}
        className="mt-12"
      >
        CruiseBrains’ agile approach and regular updates kept us in the loop,
        making the development process seamless and collaborative.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we near completion, we conduct rigorous{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> to
          ensure the software is robust, secure, and meets all requirements.
        </p>
        <p>
          We provide comprehensive training and documentation to empower our
          clients to use their new software effectively, ensuring a smooth{' '}
          <strong className="font-semibold text-neutral-950">transition</strong>
          .
        </p>
        <p>
          Post-launch, we offer ongoing{' '}
          <strong className="font-semibold text-neutral-950">support</strong>{' '}
          and maintenance to keep the solution running smoothly and adaptable to
          future needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Comprehensive testing ensures the software is bug-free and performs
          reliably across all use cases.
        </ListItem>
        <ListItem title="Deployment">
          We manage a seamless rollout, integrating the solution into your
          existing systems.
        </ListItem>
        <ListItem title="Support & Maintenance">
          Ongoing support ensures your software remains up-to-date and scalable
          as your business grows.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Driving innovation with integrity"
      >
        <p>
          We combine cutting-edge technology with a client-centric approach,
          guided by values that ensure excellence and trust in every project.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Innovation">
            We leverage the latest technologies to deliver forward-thinking
            solutions that keep our clients ahead of the curve.
          </GridListItem>
          <GridListItem title="Collaboration">
            We work closely with clients to understand their needs, fostering
            partnerships that drive success.
          </GridListItem>
          <GridListItem title="Excellence">
            Our commitment to quality ensures every solution is reliable,
            user-friendly, and built to last.
          </GridListItem>
          <GridListItem title="Integrity">
            We maintain transparency and honesty in all our processes, building
            trust with our clients.
          </GridListItem>
          <GridListItem title="Agility">
            Our agile methodologies enable us to adapt quickly, delivering
            solutions that evolve with your business.
          </GridListItem>
          <GridListItem title="Support">
            We provide ongoing support to ensure our clients’ success long after
            project completion.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'At CruiseBrains, we use agile methodologies and cutting-edge technologies to deliver tailored software solutions that drive business success.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we deliver success">
        <p>
          At CruiseBrains, we follow a streamlined process to create innovative,
          reliable, and user-friendly software solutions tailored to our
          clients’ unique needs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
