import * as React from 'react'
import Link from 'next/link'
import Page from '~/components/Page'
import { H2, A, Rarr, P, H5 } from '~/components/Typography'
import { CenteredColumn } from '~/components/Layouts'
import FigmaPlugins from '~/components/FigmaPlugins'
import Flex from '~/components/Flex'

function Home() {
  return (
    <Page>
      <CenteredColumn>
        <Flex flexDirection="column" gap={56}>
          <Flex flexDirection="column" gap={16}>
            <H2>👻</H2>
            <H5>Hey, I’m Prashant Sudeep.</H5>
            <P>
              I’m a software developer, product guy, and writer, currently living in
              New Delhi. Right now I’m building software products at
              THB. Let’s grab a coffee.
            </P>

            <Flex flexDirection="column" gap={4}>
              {/*<Link href="/about" as="/about" passHref>
                <A>
                  More about me <Rarr />
                </A>
              </Link>*/}
              <A
                href="https://twitter.com/sipulal"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sipulal on Twitter <Rarr />
              </A>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap={16}>
            <H5>Writing</H5>

            <P>
              I like to think out loud about startups, softwares, and building
              products.<br/>
              I am interested in reading books and learning about human behaviour, and travelling.
            </P>


            {/*<Flex flexDirection="column" gap={4}>
              <Link href="/overthought" as="/overthought" passHref>
                <A>
                  See all posts <Rarr />
                </A>
              </Link>

              <A
                href="https://overthought.ghost.io/rss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe via RSS <Rarr />
              </A>
            </Flex>*/}
          </Flex>

          {/*<Flex flexDirection="column" gap={16}>
            <H5>Design Details Podcast</H5>
            <P>
              Design Details is a weekly conversation about design process and
              culture. I’ve been a co-host on the show for over five years.
            </P>

            <A
              href="https://designdetails.fm/episodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all episodes <Rarr />
            </A>
          </Flex>*/}

          {/*<Flex flexDirection="column" gap={16}>
            <H5>Figma plugins</H5>
            <P>
              There’s a lot of work in the design process that is boring,
              tedious, and repetitive. I like to make plugins to help automate
              it away.
            </P>
            <FigmaPlugins />
            <A
              href="https://figma.com/@sipulal"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my Figma profile <Rarr />
            </A>
          </Flex>*/}

          <Flex flexDirection="column" gap={16}>
            <H5>Open source work</H5>
            <Flex flexDirection="column" gap={4}>
              <A
                href="https://github.com/psudeep/sample-npm-package"
                target="_blank"
                rel="noopener noreferrer"
              >
                psudeep / sample-npm-package
              </A>
              <P>Sample NPM package boiler plate in typescript for anyone to get started.</P>
            </Flex>

            <Flex flexDirection="column" gap={4}>
              <A
                href="https://github.com/psudeep/prashant-sudeep-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                prashant-sudeep-next
              </A>
              <P>The code that powers this website you’re looking at.</P>
            </Flex>

            <Flex flexDirection="column" gap={4}>
              <A
                href="https://github.com/psudeep/react-boiler-plate"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-boiler-plate
              </A>
              <P>React boilerplate code using Typescript & Redux to get started.</P>
            </Flex>

            <Flex flexDirection="column" gap={4}>
              <A
                href="https://github.com/psudeep/send-bulk-email"
                target="_blank"
                rel="noopener noreferrer"
              >
                psudeep / send-bulk-email
              </A>
              <P>An opensource code to Send bulk Email using Node.js through Mailgun or Sendgrid.</P>
            </Flex>

            <Flex flexDirection="column" gap={4}>
              <A
                href="https://github.com/psudeep/csrf_token_php"
                target="_blank"
                rel="noopener noreferrer"
              >
                psudeep / csrf_token_php
              </A>
              <P>
                A code to implement CSRF token in php for security for fraud invalid post request to website
              </P>
            </Flex>

            <A
              href="https://github.com/psudeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on GitHub <Rarr />
            </A>
          </Flex>

          {/*<Flex flexDirection="column" gap={16}>
            <H5>Speaking and interviews</H5>
            <Flex flexDirection="column" gap={16}>
              <Flex flexDirection="column" gap={4}>
                <A
                  href="https://www.swiftbysundell.com/podcast/67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Building for open source
                </A>
                <P>
                  Ryan Nystrom and I talk about designing and building the
                  mobile apps at GitHub.
                </P>
              </Flex>

              <Flex flexDirection="column" gap={4}>
                <A
                  href="https://www.youtube.com/watch?v=SyS3h3kmBnY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Extend what’s possible with Figma Plugins - Figma Config
                </A>
                <P>
                  An exploration into the plugins I built to automate the
                  tedious parts of designing mobile apps at GitHub.
                </P>
              </Flex>

              <Flex flexDirection="column" gap={4}>
                <A
                  href="https://www.youtube.com/watch?v=6MBBTdu8v6E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Designing with GraphQL - GraphQL Summit
                </A>
                <P>
                  Exploring the possibilities that open up when designers and
                  developers can speak the same language.
                </P>
              </Flex>

              <Flex flexDirection="column" gap={4}>
                <A
                  href="https://interfacelovers.com/interviews/brian-lovin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interface Lovers Interview
                </A>
                <P>
                  An interview about how I got into design, my process, and past
                  work.
                </P>
              </Flex>

              <Flex flexDirection="column" gap={4}>
                <A
                  href="https://spec.fm/podcasts/design-details/79352"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charmander++ – Interviewing ourselves on Design Details
                </A>
                <P>
                  Bryn Jackson and I interviewed each other. Totally humble.
                </P>
              </Flex>
            </Flex>
          </Flex>*/}

          {/*<Flex flexDirection="column" gap={24}>
            <Flex flexDirection="column" gap={16}>
              <H5>App Dissection</H5>
              <P>
                In-depth explorations of visual and interaction design in
                well-known apps.
              </P>
              <Link href="/design-details" passHref>
                <A>
                  See all posts <Rarr />
                </A>
              </Link>
            </Flex>
            {<DesignDetailsGrid summaries={summaries} />}
          </Flex>*/}
        </Flex>
      </CenteredColumn>
    </Page>
  )
}

export default Home
