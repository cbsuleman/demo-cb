'use client'
import { useState } from 'react'

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

function ApplicationForm({
  role,
  onClose,
}: {
  role: string
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold text-neutral-950">
            Apply for {role}
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-600 hover:text-neutral-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form
          action="/api/apply"
          method="POST"
          encType="multipart/form-data"
          className="mt-6 space-y-6"
        >
          <input type="hidden" name="role" value={role} />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-950"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-950 focus:border-neutral-950 focus:ring-neutral-950"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-950"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-950 focus:border-neutral-950 focus:ring-neutral-950"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label
              htmlFor="summary"
              className="block text-sm font-medium text-neutral-950"
            >
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              rows={4}
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-950 focus:border-neutral-950 focus:ring-neutral-950"
              placeholder="Tell us about yourself and why you're interested"
            />
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-neutral-950"
            >
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="mt-1 block w-full text-neutral-950"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-neutral-300 px-6 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-neutral-950 px-6 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function OpenPositions() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <SectionIntro eyebrow="Join our team" title="Current open positions">
            <p>
              We’re seeking passionate individuals to join CruiseBrains and
              contribute to innovative software solutions. Explore our open
              roles below.
            </p>
          </SectionIntro>
          <div className="mt-16 flex justify-center">
            <StylizedImage
              src={imageMeeting}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="w-[33.75rem] flex-none lg:w-[45rem]"
            />
          </div>
        </FadeIn>
      </Container>
      <Container className="mt-16">
        <div className="space-y-16">
          <div>
            <FadeIn>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                PHP Development Intern
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Kickstart your career by assisting in the development of web
                applications using PHP, under the mentorship of experienced
                developers.
              </p>
              <div className="mt-6 space-y-8">
                <div>
                  <h4 className="font-display text-base font-semibold text-neutral-950">
                    About this position
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    As a PHP Development Intern, you’ll work with our team to
                    build web applications using PHP, gaining hands-on
                    experience with guidance from a dedicated mentor. You’ll
                    contribute to real projects while learning industry best
                    practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-neutral-950">
                    What you’ll do
                  </h4>
                  <List className="mt-2 text-sm">
                    <ListItem title="Develop web applications">
                      Write clean, efficient PHP code for various projects.
                    </ListItem>
                    <ListItem title="Collaborate with the team">
                      Work with developers to understand and deliver on project
                      requirements.
                    </ListItem>
                    <ListItem title="Learn and grow">
                      Adopt company standards and stay updated with PHP trends.
                    </ListItem>
                    <ListItem title="Troubleshoot issues">
                      Debug and resolve issues during development.
                    </ListItem>
                  </List>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-display text-base font-semibold text-neutral-950">
                  Requirements
                </h4>
                <List className="mt-2 text-sm">
                  <ListItem title="Education">
                    Pursuing or recently completed a Bachelor’s Degree in
                    Computer Science or related field.
                  </ListItem>
                  <ListItem title="Technical Skills">
                    Understanding of programming fundamentals, OOP, and web
                    technologies (HTML, CSS, JavaScript, SQL).
                  </ListItem>
                  <ListItem title="Adaptability">
                    Eagerness to learn company methodologies and stay current
                    with PHP trends.
                  </ListItem>
                  <ListItem title="Soft Skills">
                    Strong communication and teamwork abilities.
                  </ListItem>
                </List>
              </div>
              <button
                onClick={() => setSelectedRole('PHP Development Intern')}
                className="mt-6 inline-block rounded-xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Apply Now
              </button>
            </FadeIn>
          </div>
          <div>
            <FadeIn>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                React Developer
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Build dynamic, responsive user interfaces using React and
                Tailwind CSS for cutting-edge web and mobile applications.
              </p>
              <List className="mt-6 text-sm">
                <ListItem title="Requirements">
                  3+ years of experience with React, proficiency in JavaScript,
                  and familiarity with Tailwind CSS.
                </ListItem>
                <ListItem title="Responsibilities">
                  Develop scalable front-end components, collaborate with
                  designers, and optimize performance.
                </ListItem>
                <ListItem title="Location">
                  Remote or hybrid (San Francisco, CA).
                </ListItem>
              </List>
              <button
                onClick={() => setSelectedRole('React Developer')}
                className="mt-6 inline-block rounded-xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Apply Now
              </button>
            </FadeIn>
          </div>
          <div>
            <FadeIn>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                UI/UX Designer
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Create intuitive, user-centric designs for web and mobile
                applications, collaborating with developers to bring ideas to
                life.
              </p>
              <List className="mt-6 text-sm">
                <ListItem title="Requirements">
                  2+ years of experience in UI/UX design, proficiency in tools
                  like Figma, and a strong portfolio.
                </ListItem>
                <ListItem title="Responsibilities">
                  Design wireframes, prototypes, and high-fidelity mockups for
                  seamless user experiences.
                </ListItem>
                <ListItem title="Location">
                  Remote or hybrid (San Francisco, CA).
                </ListItem>
              </List>
              <button
                onClick={() => setSelectedRole('UI/UX Designer')}
                className="mt-6 inline-block rounded-xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Apply Now
              </button>
            </FadeIn>
          </div>
        </div>
      </Container>
      {selectedRole && (
        <ApplicationForm
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </div>
  )
}

function Culture() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>
      <Container>
        <FadeIn>
          <SectionIntro
            eyebrow="Our culture"
            title="Innovate, collaborate, grow"
          >
            <p>
              At CruiseBrains, we cultivate a dynamic environment where
              creativity, teamwork, and excellence drive our mission to deliver
              impactful software solutions.
            </p>
          </SectionIntro>
          <div className="mt-16 flex justify-center">
            <StylizedImage
              src={imageWhiteboard}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="w-[33.75rem] flex-none lg:w-[45rem]"
            />
          </div>
        </FadeIn>
      </Container>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Innovation">
            Tackle cutting-edge projects using technologies like Laravel, React,
            and Tailwind CSS to redefine industry standards.
          </GridListItem>
          <GridListItem title="Collaboration">
            Thrive in a supportive team that values open communication and
            collective success, partnering closely with colleagues and clients.
          </GridListItem>
          <GridListItem title="Growth">
            Unlock your potential with mentorship, training, and opportunities
            to lead transformative projects.
          </GridListItem>
          <GridListItem title="Impact">
            Create software that solves real-world challenges, delivering value
            to businesses and their customers.
          </GridListItem>
          <GridListItem title="Flexibility">
            Enjoy remote or hybrid work options, prioritizing work-life balance
            and well-being.
          </GridListItem>
          <GridListItem title="Excellence">
            Pursue quality in code, design, and relationships, in a culture that
            celebrates high standards.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function CareersClient() {
  return (
    <>
      <Container>
        <FadeIn>
          <PageIntro eyebrow="Careers" title="A world of opportunities awaits">
            <p>
              At CruiseBrains, we’re a dynamic software company building
              innovative solutions for global clients. Join our growing team to
              work on exciting projects, collaborate with talented
              professionals, and shape the future of technology.
            </p>
          </PageIntro>
          <div className="mt-16 flex justify-center">
            <StylizedImage
              src={imageLaptop}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="w-[33.75rem] flex-none lg:w-[45rem]"
            />
          </div>
        </FadeIn>
      </Container>

      <OpenPositions />
      <Culture />

      <ContactSection />
    </>
  )
}
