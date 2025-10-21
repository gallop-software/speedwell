import createMDX from '@next/mdx'
import { remarkCompressJsx } from './_scripts/remark-compress-jsx.mjs'
import withMarkdoc from '@markdoc/next.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    // Image optimization for local images
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Redirect category pagination to base category page
      {
        source: '/category/:slug/page/:number',
        destination: '/category/:slug',
        permanent: true,
      },
      {
        source: '/author/heartbeatmidwifery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/heartbeatmidwifery/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project-type',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project-type/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project-type/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about/our-team',
        destination: '/meet-the-team',
        permanent: true,
      },
      {
        source: '/about/testimonials',
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/page/:number',
        destination:
          'https://heartbeatmidwifery.com/category/birthing-center-experiences',
        permanent: true,
      },
      {
        source: '/breastfeeding-consultation/',
        destination: '/postpartum-newborn',
        permanent: true,
      },
      {
        source: '/breastfeeding-consultation',
        destination: '/postpartum-newborn',
        permanent: true,
      },
      // Blog post redirects - individual post redirects from root to /post/,
      {
        source: '/%e2%98%80%ef%b8%8fcommunity-highlight',
        destination: '/post/%e2%98%80%ef%b8%8fcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%e2%98%80%ef%b8%8fcommunity-highlight/',
        destination: '/post/%e2%98%80%ef%b8%8fcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%e2%98%80%ef%b8%8fshiane-archer',
        destination: '/post/%e2%98%80%ef%b8%8fshiane-archer',
        permanent: true,
      },
      {
        source: '/%e2%98%80%ef%b8%8fshiane-archer/',
        destination: '/post/%e2%98%80%ef%b8%8fshiane-archer',
        permanent: true,
      },
      {
        source:
          '/%e2%9c%a8%f0%9f%a5%b3congratulations-to-lauren-the-winner-of-the-heartbeat-birth-package',
        destination:
          '/post/%e2%9c%a8%f0%9f%a5%b3congratulations-to-lauren-the-winner-of-the-heartbeat-birth-package',
        permanent: true,
      },
      {
        source:
          '/%e2%9c%a8%f0%9f%a5%b3congratulations-to-lauren-the-winner-of-the-heartbeat-birth-package/',
        destination:
          '/post/%e2%9c%a8%f0%9f%a5%b3congratulations-to-lauren-the-winner-of-the-heartbeat-birth-package',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8carmen-cpm-lm-clsm',
        destination: '/post/%e2%9c%a8carmen-cpm-lm-clsm',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8carmen-cpm-lm-clsm/',
        destination: '/post/%e2%9c%a8carmen-cpm-lm-clsm',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8come-celebrate-with-us',
        destination: '/post/%e2%9c%a8come-celebrate-with-us',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8come-celebrate-with-us/',
        destination: '/post/%e2%9c%a8come-celebrate-with-us',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8grand-opening-giveaways%e2%9c%a8h',
        destination: '/post/%e2%9c%a8grand-opening-giveaways%e2%9c%a8h',
        permanent: true,
      },
      {
        source: '/%e2%9c%a8grand-opening-giveaways%e2%9c%a8h/',
        destination: '/post/%e2%9c%a8grand-opening-giveaways%e2%9c%a8h',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%8a-did-you-have-a-chance-to-experience-water-birth',
        destination:
          '/post/%f0%9f%8c%8a-did-you-have-a-chance-to-experience-water-birth',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%8a-did-you-have-a-chance-to-experience-water-birth/',
        destination:
          '/post/%f0%9f%8c%8a-did-you-have-a-chance-to-experience-water-birth',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%8a-experience-the-calm-and-power-of-water-birth-%f0%9f%8c%8a',
        destination:
          '/post/%f0%9f%8c%8a-experience-the-calm-and-power-of-water-birth-%f0%9f%8c%8a',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%8a-experience-the-calm-and-power-of-water-birth-%f0%9f%8c%8a/',
        destination:
          '/post/%f0%9f%8c%8a-experience-the-calm-and-power-of-water-birth-%f0%9f%8c%8a',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%9fcommunity-highlight',
        destination: '/post/%f0%9f%8c%9fcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%9fcommunity-highlight/',
        destination: '/post/%f0%9f%8c%9fcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%b3community-highlight',
        destination: '/post/%f0%9f%8c%b3community-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%b3community-highlight/',
        destination: '/post/%f0%9f%8c%b3community-highlight',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%b8-protein-a-key-ingredient-for-a-healthy-pregnancy-%f0%9f%8c%b8',
        destination:
          '/post/%f0%9f%8c%b8-protein-a-key-ingredient-for-a-healthy-pregnancy-%f0%9f%8c%b8',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%b8-protein-a-key-ingredient-for-a-healthy-pregnancy-%f0%9f%8c%b8/',
        destination:
          '/post/%f0%9f%8c%b8-protein-a-key-ingredient-for-a-healthy-pregnancy-%f0%9f%8c%b8',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%b8-this-world-doula-week-we-celebrate-the-incredible-doulas-who-provide-unwavering-support-love-and-strength-throughout-the-birth-journey',
        destination:
          '/post/%f0%9f%8c%b8-this-world-doula-week-we-celebrate-the-incredible-doulas-who-provide-unwavering-support-love-and-strength-throughout-the-birth-journey',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%b8-this-world-doula-week-we-celebrate-the-incredible-doulas-who-provide-unwavering-support-love-and-strength-throughout-the-birth-journey/',
        destination:
          '/post/%f0%9f%8c%b8-this-world-doula-week-we-celebrate-the-incredible-doulas-who-provide-unwavering-support-love-and-strength-throughout-the-birth-journey',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bbcommunity-highlight',
        destination: '/post/%f0%9f%8c%bbcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bbcommunity-highlight/',
        destination: '/post/%f0%9f%8c%bbcommunity-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bccommunity-highlight',
        destination: '/post/%f0%9f%8c%bccommunity-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bccommunity-highlight/',
        destination: '/post/%f0%9f%8c%bccommunity-highlight',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%bf%e2%9c%a8-a-couple-of-magical-visitors-at-the-birth-center',
        destination:
          '/post/%f0%9f%8c%bf%e2%9c%a8-a-couple-of-magical-visitors-at-the-birth-center',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%bf%e2%9c%a8-a-couple-of-magical-visitors-at-the-birth-center/',
        destination:
          '/post/%f0%9f%8c%bf%e2%9c%a8-a-couple-of-magical-visitors-at-the-birth-center',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%bf-afterbirth-herbal-bath-a-soothing-tradition-for-postpartum-healing-%f0%9f%8c%bf',
        destination:
          '/post/%f0%9f%8c%bf-afterbirth-herbal-bath-a-soothing-tradition-for-postpartum-healing-%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8c%bf-afterbirth-herbal-bath-a-soothing-tradition-for-postpartum-healing-%f0%9f%8c%bf/',
        destination:
          '/post/%f0%9f%8c%bf-afterbirth-herbal-bath-a-soothing-tradition-for-postpartum-healing-%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bf-amber-rudlong',
        destination: '/post/%f0%9f%8c%bf-amber-rudlong',
        permanent: true,
      },
      {
        source: '/%f0%9f%8c%bf-amber-rudlong/',
        destination: '/post/%f0%9f%8c%bf-amber-rudlong',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%81community-highlight',
        destination: '/post/%f0%9f%8d%81community-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%81community-highlight/',
        destination: '/post/%f0%9f%8d%81community-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%81kaegan-westbrook',
        destination: '/post/%f0%9f%8d%81kaegan-westbrook',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%81kaegan-westbrook/',
        destination: '/post/%f0%9f%8d%81kaegan-westbrook',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%83the-birth-partner',
        destination: '/post/%f0%9f%8d%83the-birth-partner',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%83the-birth-partner/',
        destination: '/post/%f0%9f%8d%83the-birth-partner',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%89community-highlight',
        destination: '/post/%f0%9f%8d%89community-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%89community-highlight/',
        destination: '/post/%f0%9f%8d%89community-highlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%8daggie-martens',
        destination: '/post/%f0%9f%8d%8daggie-martens',
        permanent: true,
      },
      {
        source: '/%f0%9f%8d%8daggie-martens/',
        destination: '/post/%f0%9f%8d%8daggie-martens',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8d%bc%f0%9f%91%b6-as-a-midwifery-practice-we-are-dedicated-to-ensuring-both-you-and-your-baby-are-healthy-and-thriving-from-the-very-beginning',
        destination:
          '/post/%f0%9f%8d%bc%f0%9f%91%b6-as-a-midwifery-practice-we-are-dedicated-to-ensuring-both-you-and-your-baby-are-healthy-and-thriving-from-the-very-beginning',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8d%bc%f0%9f%91%b6-as-a-midwifery-practice-we-are-dedicated-to-ensuring-both-you-and-your-baby-are-healthy-and-thriving-from-the-very-beginning/',
        destination:
          '/post/%f0%9f%8d%bc%f0%9f%91%b6-as-a-midwifery-practice-we-are-dedicated-to-ensuring-both-you-and-your-baby-are-healthy-and-thriving-from-the-very-beginning',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8d%bcgrateful-for-donations-we-have-received-in-the-past-and-the-ability-to-support-these-wonderful-families-on-their-journeys',
        destination:
          '/post/%f0%9f%8d%bcgrateful-for-donations-we-have-received-in-the-past-and-the-ability-to-support-these-wonderful-families-on-their-journeys',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8d%bcgrateful-for-donations-we-have-received-in-the-past-and-the-ability-to-support-these-wonderful-families-on-their-journeys/',
        destination:
          '/post/%f0%9f%8d%bcgrateful-for-donations-we-have-received-in-the-past-and-the-ability-to-support-these-wonderful-families-on-their-journeys',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%84%e2%9c%a8-merry-christmas-from-heartbeat-midwifery-birth-center-%e2%9c%a8%f0%9f%8e%84',
        destination:
          '/post/%f0%9f%8e%84%e2%9c%a8-merry-christmas-from-heartbeat-midwifery-birth-center-%e2%9c%a8%f0%9f%8e%84',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%84%e2%9c%a8-merry-christmas-from-heartbeat-midwifery-birth-center-%e2%9c%a8%f0%9f%8e%84/',
        destination:
          '/post/%f0%9f%8e%84%e2%9c%a8-merry-christmas-from-heartbeat-midwifery-birth-center-%e2%9c%a8%f0%9f%8e%84',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%89%f0%9f%8e%89kelly-caught-her-100th-baby%f0%9f%8e%89%f0%9f%8e%89',
        destination:
          '/post/%f0%9f%8e%89%f0%9f%8e%89kelly-caught-her-100th-baby%f0%9f%8e%89%f0%9f%8e%89',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%89%f0%9f%8e%89kelly-caught-her-100th-baby%f0%9f%8e%89%f0%9f%8e%89/',
        destination:
          '/post/%f0%9f%8e%89%f0%9f%8e%89kelly-caught-her-100th-baby%f0%9f%8e%89%f0%9f%8e%89',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%89-a-big-shoutout-to-our-senior-student-for-finishing-all-her-requirements-and-mailing-off-the-last-of-her-paperwork-to-narm',
        destination:
          '/post/%f0%9f%8e%89-a-big-shoutout-to-our-senior-student-for-finishing-all-her-requirements-and-mailing-off-the-last-of-her-paperwork-to-narm',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%8e%89-a-big-shoutout-to-our-senior-student-for-finishing-all-her-requirements-and-mailing-off-the-last-of-her-paperwork-to-narm/',
        destination:
          '/post/%f0%9f%8e%89-a-big-shoutout-to-our-senior-student-for-finishing-all-her-requirements-and-mailing-off-the-last-of-her-paperwork-to-narm',
        permanent: true,
      },
      {
        source: '/%f0%9f%91%8a-amy-silcox',
        destination: '/post/%f0%9f%91%8a-amy-silcox',
        permanent: true,
      },
      {
        source: '/%f0%9f%91%8a-amy-silcox/',
        destination: '/post/%f0%9f%91%8a-amy-silcox',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%91%b6%e2%9c%a8-meet-your-midwife-monday-%e2%9c%a8%f0%9f%91%b6',
        destination:
          '/post/%f0%9f%91%b6%e2%9c%a8-meet-your-midwife-monday-%e2%9c%a8%f0%9f%91%b6',
        permanent: true,
      },
      {
        source:
          '/%f0%9f%91%b6%e2%9c%a8-meet-your-midwife-monday-%e2%9c%a8%f0%9f%91%b6/',
        destination:
          '/post/%f0%9f%91%b6%e2%9c%a8-meet-your-midwife-monday-%e2%9c%a8%f0%9f%91%b6',
        permanent: true,
      },
      {
        source: '/%f0%9f%92%9f-courtney-tanner',
        destination: '/post/%f0%9f%92%9f-courtney-tanner',
        permanent: true,
      },
      {
        source: '/%f0%9f%92%9f-courtney-tanner/',
        destination: '/post/%f0%9f%92%9f-courtney-tanner',
        permanent: true,
      },
      {
        source: '/%f0%9f%aa%b4community-higlight',
        destination: '/post/%f0%9f%aa%b4community-higlight',
        permanent: true,
      },
      {
        source: '/%f0%9f%aa%b4community-higlight/',
        destination: '/post/%f0%9f%aa%b4community-higlight',
        permanent: true,
      },
      {
        source: '/10-22-2024-was-such-a-fun-day',
        destination: '/post/10-22-2024-was-such-a-fun-day',
        permanent: true,
      },
      {
        source: '/10-22-2024-was-such-a-fun-day/',
        destination: '/post/10-22-2024-was-such-a-fun-day',
        permanent: true,
      },
      {
        source: '/6-weeks-with-katherine-lucille',
        destination: '/post/6-weeks-with-katherine-lucille',
        permanent: true,
      },
      {
        source: '/6-weeks-with-katherine-lucille/',
        destination: '/post/6-weeks-with-katherine-lucille',
        permanent: true,
      },
      {
        source:
          '/a-new-baby-is-like-the-beginning-of-all-things-wonder-hope-a-dream-of-possibilities',
        destination:
          '/post/a-new-baby-is-like-the-beginning-of-all-things-wonder-hope-a-dream-of-possibilities',
        permanent: true,
      },
      {
        source:
          '/a-new-baby-is-like-the-beginning-of-all-things-wonder-hope-a-dream-of-possibilities/',
        destination:
          '/post/a-new-baby-is-like-the-beginning-of-all-things-wonder-hope-a-dream-of-possibilities',
        permanent: true,
      },
      {
        source: '/a-recent-birthing-story-experience',
        destination: '/post/a-recent-birthing-story-experience',
        permanent: true,
      },
      {
        source: '/a-recent-birthing-story-experience/',
        destination: '/post/a-recent-birthing-story-experience',
        permanent: true,
      },
      {
        source: '/a-reminder-to-be-gentle-with-yourself',
        destination: '/post/a-reminder-to-be-gentle-with-yourself',
        permanent: true,
      },
      {
        source: '/a-reminder-to-be-gentle-with-yourself/',
        destination: '/post/a-reminder-to-be-gentle-with-yourself',
        permanent: true,
      },
      {
        source: '/and-unto-us-seventeen-babes-were-born%f0%9f%a4%8d',
        destination: '/post/and-unto-us-seventeen-babes-were-born%f0%9f%a4%8d',
        permanent: true,
      },
      {
        source: '/and-unto-us-seventeen-babes-were-born%f0%9f%a4%8d/',
        destination: '/post/and-unto-us-seventeen-babes-were-born%f0%9f%a4%8d',
        permanent: true,
      },
      {
        source: '/another-great-sono-day',
        destination: '/post/another-great-sono-day',
        permanent: true,
      },
      {
        source: '/another-great-sono-day/',
        destination: '/post/another-great-sono-day',
        permanent: true,
      },
      {
        source: '/another-wonderful-birthing-testimonial',
        destination: '/post/another-wonderful-birthing-testimonial',
        permanent: true,
      },
      {
        source: '/another-wonderful-birthing-testimonial/',
        destination: '/post/another-wonderful-birthing-testimonial',
        permanent: true,
      },
      {
        source:
          '/april-has-been-a-month-of-twos-nobody-wants-to-party-alone-%f0%9f%8e%89',
        destination:
          '/post/april-has-been-a-month-of-twos-nobody-wants-to-party-alone-%f0%9f%8e%89',
        permanent: true,
      },
      {
        source:
          '/april-has-been-a-month-of-twos-nobody-wants-to-party-alone-%f0%9f%8e%89/',
        destination:
          '/post/april-has-been-a-month-of-twos-nobody-wants-to-party-alone-%f0%9f%8e%89',
        permanent: true,
      },
      {
        source: '/april-showers',
        destination: '/post/april-showers',
        permanent: true,
      },
      {
        source: '/april-showers/',
        destination: '/post/april-showers',
        permanent: true,
      },
      {
        source: '/are-you-guys-ready',
        destination: '/post/are-you-guys-ready',
        permanent: true,
      },
      {
        source: '/are-you-guys-ready/',
        destination: '/post/are-you-guys-ready',
        permanent: true,
      },
      {
        source: '/are-you-interested-in-joining-our-growing-team',
        destination: '/post/are-you-interested-in-joining-our-growing-team',
        permanent: true,
      },
      {
        source: '/are-you-interested-in-joining-our-growing-team/',
        destination: '/post/are-you-interested-in-joining-our-growing-team',
        permanent: true,
      },
      {
        source: '/are-you-interested-in-joining-the-heartbeat-team',
        destination: '/post/are-you-interested-in-joining-the-heartbeat-team',
        permanent: true,
      },
      {
        source: '/are-you-interested-in-joining-the-heartbeat-team/',
        destination: '/post/are-you-interested-in-joining-the-heartbeat-team',
        permanent: true,
      },
      {
        source:
          '/as-we-approach-thanksgiving-i-carmen-wanted-to-share-some-of-the-thankfulness-thats-been-on-my-heart-lately',
        destination:
          '/post/as-we-approach-thanksgiving-i-carmen-wanted-to-share-some-of-the-thankfulness-thats-been-on-my-heart-lately',
        permanent: true,
      },
      {
        source:
          '/as-we-approach-thanksgiving-i-carmen-wanted-to-share-some-of-the-thankfulness-thats-been-on-my-heart-lately/',
        destination:
          '/post/as-we-approach-thanksgiving-i-carmen-wanted-to-share-some-of-the-thankfulness-thats-been-on-my-heart-lately',
        permanent: true,
      },
      {
        source:
          '/as-we-celebrate-world-breastfeeding-week-we-would-love-to-hear-from-you',
        destination:
          '/post/as-we-celebrate-world-breastfeeding-week-we-would-love-to-hear-from-you',
        permanent: true,
      },
      {
        source:
          '/as-we-celebrate-world-breastfeeding-week-we-would-love-to-hear-from-you/',
        destination:
          '/post/as-we-celebrate-world-breastfeeding-week-we-would-love-to-hear-from-you',
        permanent: true,
      },
      {
        source:
          '/as-we-welcomed-fall-we-also-welcomed-twelve-new-lives-in-eight-days',
        destination:
          '/post/as-we-welcomed-fall-we-also-welcomed-twelve-new-lives-in-eight-days',
        permanent: true,
      },
      {
        source:
          '/as-we-welcomed-fall-we-also-welcomed-twelve-new-lives-in-eight-days/',
        destination:
          '/post/as-we-welcomed-fall-we-also-welcomed-twelve-new-lives-in-eight-days',
        permanent: true,
      },
      {
        source: '/at-heartbeat-we-are-deeply-passionate-about-education',
        destination:
          '/post/at-heartbeat-we-are-deeply-passionate-about-education',
        permanent: true,
      },
      {
        source: '/at-heartbeat-we-are-deeply-passionate-about-education/',
        destination:
          '/post/at-heartbeat-we-are-deeply-passionate-about-education',
        permanent: true,
      },
      {
        source: '/august-special-month-heartbeat-midwifery-celebration',
        destination:
          '/post/august-special-month-heartbeat-midwifery-celebration',
        permanent: true,
      },
      {
        source: '/august-special-month-heartbeat-midwifery-celebration/',
        destination:
          '/post/august-special-month-heartbeat-midwifery-celebration',
        permanent: true,
      },
      {
        source: '/baby-1000-born-august-25-winner-announcement-celebration',
        destination:
          '/post/baby-1000-born-august-25-winner-announcement-celebration',
        permanent: true,
      },
      {
        source: '/baby-1000-born-august-25-winner-announcement-celebration/',
        destination:
          '/post/baby-1000-born-august-25-winner-announcement-celebration',
        permanent: true,
      },
      {
        source: '/baby-1000-countdown-contest-exciting-milestone',
        destination: '/post/baby-1000-countdown-contest-exciting-milestone',
        permanent: true,
      },
      {
        source: '/baby-1000-countdown-contest-exciting-milestone/',
        destination: '/post/baby-1000-countdown-contest-exciting-milestone',
        permanent: true,
      },
      {
        source: '/baby-1000-gender-reveal-boy-kit-wade-announcement',
        destination: '/post/baby-1000-gender-reveal-boy-kit-wade-announcement',
        permanent: true,
      },
      {
        source: '/baby-1000-gender-reveal-boy-kit-wade-announcement/',
        destination: '/post/baby-1000-gender-reveal-boy-kit-wade-announcement',
        permanent: true,
      },
      {
        source: '/baby-names-sweetest-hardest-part-journey',
        destination: '/post/baby-names-sweetest-hardest-part-journey',
        permanent: true,
      },
      {
        source: '/baby-names-sweetest-hardest-part-journey/',
        destination: '/post/baby-names-sweetest-hardest-part-journey',
        permanent: true,
      },
      {
        source: '/birth-center-blessing',
        destination: '/post/birth-center-blessing',
        permanent: true,
      },
      {
        source: '/birth-center-blessing/',
        destination: '/post/birth-center-blessing',
        permanent: true,
      },
      {
        source: '/birth-is-not-only-about-making-babies',
        destination: '/post/birth-is-not-only-about-making-babies',
        permanent: true,
      },
      {
        source: '/birth-is-not-only-about-making-babies/',
        destination: '/post/birth-is-not-only-about-making-babies',
        permanent: true,
      },
      {
        source: '/birth-partner-support-phrases-words-that-matter',
        destination: '/post/birth-partner-support-phrases-words-that-matter',
        permanent: true,
      },
      {
        source: '/birth-partner-support-phrases-words-that-matter/',
        destination: '/post/birth-partner-support-phrases-words-that-matter',
        permanent: true,
      },
      {
        source: '/birthday-parties-are-our-favorite-parties',
        destination: '/post/birthday-parties-are-our-favorite-parties',
        permanent: true,
      },
      {
        source: '/birthday-parties-are-our-favorite-parties/',
        destination: '/post/birthday-parties-are-our-favorite-parties',
        permanent: true,
      },
      {
        source: '/birthing-testimonial-from-kaitlin-johnson-the-twins',
        destination:
          '/post/birthing-testimonial-from-kaitlin-johnson-the-twins',
        permanent: true,
      },
      {
        source: '/birthing-testimonial-from-kaitlin-johnson-the-twins/',
        destination:
          '/post/birthing-testimonial-from-kaitlin-johnson-the-twins',
        permanent: true,
      },
      {
        source: '/blessed-by-some-amazing-families-and-woven',
        destination: '/post/blessed-by-some-amazing-families-and-woven',
        permanent: true,
      },
      {
        source: '/blessed-by-some-amazing-families-and-woven/',
        destination: '/post/blessed-by-some-amazing-families-and-woven',
        permanent: true,
      },
      {
        source: '/blood-builder-now-back-in-stock',
        destination: '/post/blood-builder-now-back-in-stock',
        permanent: true,
      },
      {
        source: '/blood-builder-now-back-in-stock/',
        destination: '/post/blood-builder-now-back-in-stock',
        permanent: true,
      },
      {
        source: '/breastfeeding-support-journey-not-alone',
        destination: '/post/breastfeeding-support-journey-not-alone',
        permanent: true,
      },
      {
        source: '/breastfeeding-support-journey-not-alone/',
        destination: '/post/breastfeeding-support-journey-not-alone',
        permanent: true,
      },
      {
        source: '/breech-twin-or-vbac-heartbeat-momma',
        destination: '/post/breech-twin-or-vbac-heartbeat-momma',
        permanent: true,
      },
      {
        source: '/breech-twin-or-vbac-heartbeat-momma/',
        destination: '/post/breech-twin-or-vbac-heartbeat-momma',
        permanent: true,
      },
      {
        source: '/cant-believe-all-these-babies-are-one',
        destination: '/post/cant-believe-all-these-babies-are-one',
        permanent: true,
      },
      {
        source: '/cant-believe-all-these-babies-are-one/',
        destination: '/post/cant-believe-all-these-babies-are-one',
        permanent: true,
      },
      {
        source: '/carmen-20-years-midwifery-fourth-baby-same-family',
        destination: '/post/carmen-20-years-midwifery-fourth-baby-same-family',
        permanent: true,
      },
      {
        source: '/carmen-20-years-midwifery-fourth-baby-same-family/',
        destination: '/post/carmen-20-years-midwifery-fourth-baby-same-family',
        permanent: true,
      },
      {
        source: '/celebrating-our-biggest-week-yet',
        destination: '/post/celebrating-our-biggest-week-yet',
        permanent: true,
      },
      {
        source: '/celebrating-our-biggest-week-yet/',
        destination: '/post/celebrating-our-biggest-week-yet',
        permanent: true,
      },
      {
        source:
          '/childbirth-is-beautiful-not-because-its-easy-or-without-pain-but-because-it-is-a-raw-and-transformative-experience',
        destination:
          '/post/childbirth-is-beautiful-not-because-its-easy-or-without-pain-but-because-it-is-a-raw-and-transformative-experience',
        permanent: true,
      },
      {
        source:
          '/childbirth-is-beautiful-not-because-its-easy-or-without-pain-but-because-it-is-a-raw-and-transformative-experience/',
        destination:
          '/post/childbirth-is-beautiful-not-because-its-easy-or-without-pain-but-because-it-is-a-raw-and-transformative-experience',
        permanent: true,
      },
      {
        source: '/clients-at-heartbeat-truly-become-part-of-our-family',
        destination:
          '/post/clients-at-heartbeat-truly-become-part-of-our-family',
        permanent: true,
      },
      {
        source: '/clients-at-heartbeat-truly-become-part-of-our-family/',
        destination:
          '/post/clients-at-heartbeat-truly-become-part-of-our-family',
        permanent: true,
      },
      {
        source:
          '/come-and-join-an-evening-of-postpartum-and-newborn-care-education-nourishing-meals-and-padsicle-prepping',
        destination:
          '/post/come-and-join-an-evening-of-postpartum-and-newborn-care-education-nourishing-meals-and-padsicle-prepping',
        permanent: true,
      },
      {
        source:
          '/come-and-join-an-evening-of-postpartum-and-newborn-care-education-nourishing-meals-and-padsicle-prepping/',
        destination:
          '/post/come-and-join-an-evening-of-postpartum-and-newborn-care-education-nourishing-meals-and-padsicle-prepping',
        permanent: true,
      },
      {
        source: '/come-on-mom-we-gotta-do-the-babies-thing',
        destination: '/post/come-on-mom-we-gotta-do-the-babies-thing',
        permanent: true,
      },
      {
        source: '/come-on-mom-we-gotta-do-the-babies-thing/',
        destination: '/post/come-on-mom-we-gotta-do-the-babies-thing',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%8c%bf',
        destination: '/post/community-highlight%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%8c%bf/',
        destination: '/post/community-highlight%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%8d%81',
        destination: '/post/community-highlight%f0%9f%8d%81',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%8d%81/',
        destination: '/post/community-highlight%f0%9f%8d%81',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%ab%b6%f0%9f%8f%bc',
        destination: '/post/community-highlight%f0%9f%ab%b6%f0%9f%8f%bc',
        permanent: true,
      },
      {
        source: '/community-highlight%f0%9f%ab%b6%f0%9f%8f%bc/',
        destination: '/post/community-highlight%f0%9f%ab%b6%f0%9f%8f%bc',
        permanent: true,
      },
      {
        source: '/did-you-know-newborns-see-the-world-differently-than-we-do',
        destination:
          '/post/did-you-know-newborns-see-the-world-differently-than-we-do',
        permanent: true,
      },
      {
        source: '/did-you-know-newborns-see-the-world-differently-than-we-do/',
        destination:
          '/post/did-you-know-newborns-see-the-world-differently-than-we-do',
        permanent: true,
      },
      {
        source: '/did-you-know',
        destination: '/post/did-you-know',
        permanent: true,
      },
      {
        source: '/did-you-know/',
        destination: '/post/did-you-know',
        permanent: true,
      },
      {
        source:
          '/do-you-or-someone-you-know-have-a-breast-pump-lying-around-unused',
        destination:
          '/post/do-you-or-someone-you-know-have-a-breast-pump-lying-around-unused',
        permanent: true,
      },
      {
        source:
          '/do-you-or-someone-you-know-have-a-breast-pump-lying-around-unused/',
        destination:
          '/post/do-you-or-someone-you-know-have-a-breast-pump-lying-around-unused',
        permanent: true,
      },
      {
        source: '/elliott-hudson-%f0%9f%a6%8cw',
        destination: '/post/elliott-hudson-%f0%9f%a6%8cw',
        permanent: true,
      },
      {
        source: '/elliott-hudson-%f0%9f%a6%8cw/',
        destination: '/post/elliott-hudson-%f0%9f%a6%8cw',
        permanent: true,
      },
      {
        source: '/even-kids-help-the-birth-center',
        destination: '/post/even-kids-help-the-birth-center',
        permanent: true,
      },
      {
        source: '/even-kids-help-the-birth-center/',
        destination: '/post/even-kids-help-the-birth-center',
        permanent: true,
      },
      {
        source: '/every-good-midwife-is-a-skilled-problem-solver',
        destination: '/post/every-good-midwife-is-a-skilled-problem-solver',
        permanent: true,
      },
      {
        source: '/every-good-midwife-is-a-skilled-problem-solver/',
        destination: '/post/every-good-midwife-is-a-skilled-problem-solver',
        permanent: true,
      },
      {
        source: '/every-mama-needs-a-great-birth-team',
        destination: '/post/every-mama-needs-a-great-birth-team',
        permanent: true,
      },
      {
        source: '/every-mama-needs-a-great-birth-team/',
        destination: '/post/every-mama-needs-a-great-birth-team',
        permanent: true,
      },
      {
        source: '/excited-to-welcome-this-sweet-boy-into-the-world%f0%9f%92%9a',
        destination:
          '/post/excited-to-welcome-this-sweet-boy-into-the-world%f0%9f%92%9a',
        permanent: true,
      },
      {
        source:
          '/excited-to-welcome-this-sweet-boy-into-the-world%f0%9f%92%9a/',
        destination:
          '/post/excited-to-welcome-this-sweet-boy-into-the-world%f0%9f%92%9a',
        permanent: true,
      },
      {
        source: '/exciting-times-as-carmen-has-prepped-to-teach-in-alaska',
        destination:
          '/post/exciting-times-as-carmen-has-prepped-to-teach-in-alaska',
        permanent: true,
      },
      {
        source: '/exciting-times-as-carmen-has-prepped-to-teach-in-alaska/',
        destination:
          '/post/exciting-times-as-carmen-has-prepped-to-teach-in-alaska',
        permanent: true,
      },
      {
        source: '/exercise-during-pregnancy-movement-birth-preparation',
        destination:
          '/post/exercise-during-pregnancy-movement-birth-preparation',
        permanent: true,
      },
      {
        source: '/exercise-during-pregnancy-movement-birth-preparation/',
        destination:
          '/post/exercise-during-pregnancy-movement-birth-preparation',
        permanent: true,
      },
      {
        source:
          '/experience-meets-enthusiasm-%e2%98%80%ef%b8%8f-share-your-favorite-student-midwife-moment-in-the-comments',
        destination:
          '/post/experience-meets-enthusiasm-%e2%98%80%ef%b8%8f-share-your-favorite-student-midwife-moment-in-the-comments',
        permanent: true,
      },
      {
        source:
          '/experience-meets-enthusiasm-%e2%98%80%ef%b8%8f-share-your-favorite-student-midwife-moment-in-the-comments/',
        destination:
          '/post/experience-meets-enthusiasm-%e2%98%80%ef%b8%8f-share-your-favorite-student-midwife-moment-in-the-comments',
        permanent: true,
      },
      {
        source: '/eyes-of-wonder%f0%9f%98%8d',
        destination: '/post/eyes-of-wonder%f0%9f%98%8d',
        permanent: true,
      },
      {
        source: '/eyes-of-wonder%f0%9f%98%8d/',
        destination: '/post/eyes-of-wonder%f0%9f%98%8d',
        permanent: true,
      },
      {
        source: '/family-oriented-birthing-experience',
        destination: '/post/family-oriented-birthing-experience',
        permanent: true,
      },
      {
        source: '/family-oriented-birthing-experience/',
        destination: '/post/family-oriented-birthing-experience',
        permanent: true,
      },
      {
        source: '/getting-new-merch-is-like-christmas-mornings',
        destination: '/post/getting-new-merch-is-like-christmas-mornings',
        permanent: true,
      },
      {
        source: '/getting-new-merch-is-like-christmas-mornings/',
        destination: '/post/getting-new-merch-is-like-christmas-mornings',
        permanent: true,
      },
      {
        source:
          '/good-music-good-company-and-good-research-happening-this-weekend',
        destination:
          '/post/good-music-good-company-and-good-research-happening-this-weekend',
        permanent: true,
      },
      {
        source:
          '/good-music-good-company-and-good-research-happening-this-weekend/',
        destination:
          '/post/good-music-good-company-and-good-research-happening-this-weekend',
        permanent: true,
      },
      {
        source: '/got-to-check-up-on-those-babies-%f0%9f%a9%ba%f0%9f%93%8f',
        destination:
          '/post/got-to-check-up-on-those-babies-%f0%9f%a9%ba%f0%9f%93%8f',
        permanent: true,
      },
      {
        source: '/got-to-check-up-on-those-babies-%f0%9f%a9%ba%f0%9f%93%8f/',
        destination:
          '/post/got-to-check-up-on-those-babies-%f0%9f%a9%ba%f0%9f%93%8f',
        permanent: true,
      },
      {
        source: '/happy-4th-of-july-heartbeat',
        destination: '/post/happy-4th-of-july-heartbeat',
        permanent: true,
      },
      {
        source: '/happy-4th-of-july-heartbeat/',
        destination: '/post/happy-4th-of-july-heartbeat',
        permanent: true,
      },
      {
        source:
          '/happy-mothers-day-from-all-of-us-at-heartbeat-midwifery-%f0%9f%92%90',
        destination:
          '/post/happy-mothers-day-from-all-of-us-at-heartbeat-midwifery-%f0%9f%92%90',
        permanent: true,
      },
      {
        source:
          '/happy-mothers-day-from-all-of-us-at-heartbeat-midwifery-%f0%9f%92%90/',
        destination:
          '/post/happy-mothers-day-from-all-of-us-at-heartbeat-midwifery-%f0%9f%92%90',
        permanent: true,
      },
      {
        source: '/happy-thanksgiving-from-heartbeat',
        destination: '/post/happy-thanksgiving-from-heartbeat',
        permanent: true,
      },
      {
        source: '/happy-thanksgiving-from-heartbeat/',
        destination: '/post/happy-thanksgiving-from-heartbeat',
        permanent: true,
      },
      {
        source: '/happy-thanksgiving',
        destination: '/post/happy-thanksgiving',
        permanent: true,
      },
      {
        source: '/happy-thanksgiving/',
        destination: '/post/happy-thanksgiving',
        permanent: true,
      },
      {
        source:
          '/happy-thursday-from-baby-edward-rush-who-is-one-month-old-today',
        destination:
          '/post/happy-thursday-from-baby-edward-rush-who-is-one-month-old-today',
        permanent: true,
      },
      {
        source:
          '/happy-thursday-from-baby-edward-rush-who-is-one-month-old-today/',
        destination:
          '/post/happy-thursday-from-baby-edward-rush-who-is-one-month-old-today',
        permanent: true,
      },
      {
        source: '/happy-valentines-day',
        destination: '/post/happy-valentines-day',
        permanent: true,
      },
      {
        source: '/happy-valentines-day/',
        destination: '/post/happy-valentines-day',
        permanent: true,
      },
      {
        source:
          '/hearing-stories-like-these-is-why-we-do-what-we-do-were-honored-to-be-part-of-your-journey-into-parenthood',
        destination:
          '/post/hearing-stories-like-these-is-why-we-do-what-we-do-were-honored-to-be-part-of-your-journey-into-parenthood',
        permanent: true,
      },
      {
        source:
          '/hearing-stories-like-these-is-why-we-do-what-we-do-were-honored-to-be-part-of-your-journey-into-parenthood/',
        destination:
          '/post/hearing-stories-like-these-is-why-we-do-what-we-do-were-honored-to-be-part-of-your-journey-into-parenthood',
        permanent: true,
      },
      {
        source: '/heartbeat-has-a-few-new-faces-joining-the-team',
        destination: '/post/heartbeat-has-a-few-new-faces-joining-the-team',
        permanent: true,
      },
      {
        source: '/heartbeat-has-a-few-new-faces-joining-the-team/',
        destination: '/post/heartbeat-has-a-few-new-faces-joining-the-team',
        permanent: true,
      },
      {
        source:
          '/heartbeat-has-been-so-blessed-to-help-so-many-families-welcome-babies-this-year',
        destination:
          '/post/heartbeat-has-been-so-blessed-to-help-so-many-families-welcome-babies-this-year',
        permanent: true,
      },
      {
        source:
          '/heartbeat-has-been-so-blessed-to-help-so-many-families-welcome-babies-this-year/',
        destination:
          '/post/heartbeat-has-been-so-blessed-to-help-so-many-families-welcome-babies-this-year',
        permanent: true,
      },
      {
        source:
          '/heartbeat-is-so-excited-to-introduce-you-some-of-our-newest-faces',
        destination:
          '/post/heartbeat-is-so-excited-to-introduce-you-some-of-our-newest-faces',
        permanent: true,
      },
      {
        source:
          '/heartbeat-is-so-excited-to-introduce-you-some-of-our-newest-faces/',
        destination:
          '/post/heartbeat-is-so-excited-to-introduce-you-some-of-our-newest-faces',
        permanent: true,
      },
      {
        source: '/heartbeat-will-be-opening-at-1000-tomorrow-february-12th',
        destination:
          '/post/heartbeat-will-be-opening-at-1000-tomorrow-february-12th',
        permanent: true,
      },
      {
        source: '/heartbeat-will-be-opening-at-1000-tomorrow-february-12th/',
        destination:
          '/post/heartbeat-will-be-opening-at-1000-tomorrow-february-12th',
        permanent: true,
      },
      {
        source:
          '/heartbeatmidwifery-is-hosting-neonatal-resuscitation-training',
        destination:
          '/post/heartbeatmidwifery-is-hosting-neonatal-resuscitation-training',
        permanent: true,
      },
      {
        source:
          '/heartbeatmidwifery-is-hosting-neonatal-resuscitation-training/',
        destination:
          '/post/heartbeatmidwifery-is-hosting-neonatal-resuscitation-training',
        permanent: true,
      },
      {
        source: '/hi-heartbeatmidwifery-clients',
        destination: '/post/hi-heartbeatmidwifery-clients',
        permanent: true,
      },
      {
        source: '/hi-heartbeatmidwifery-clients/',
        destination: '/post/hi-heartbeatmidwifery-clients',
        permanent: true,
      },
      {
        source: '/home-birth-vs-birth-center-perfect-environment',
        destination: '/post/home-birth-vs-birth-center-perfect-environment',
        permanent: true,
      },
      {
        source: '/home-birth-vs-birth-center-perfect-environment/',
        destination: '/post/home-birth-vs-birth-center-perfect-environment',
        permanent: true,
      },
      {
        source:
          '/how-blessed-are-we-that-our-clients-think-of-us-during-their-busy-mornings',
        destination:
          '/post/how-blessed-are-we-that-our-clients-think-of-us-during-their-busy-mornings',
        permanent: true,
      },
      {
        source:
          '/how-blessed-are-we-that-our-clients-think-of-us-during-their-busy-mornings/',
        destination:
          '/post/how-blessed-are-we-that-our-clients-think-of-us-during-their-busy-mornings',
        permanent: true,
      },
      {
        source:
          '/if-you-have-been-in-attendance-at-a-birth-in-the-past-6-9-months-and-happened-to-have-pictures-of-any-midwives-and-or-students-would-you-mind-sharing-them-with-us',
        destination:
          '/post/if-you-have-been-in-attendance-at-a-birth-in-the-past-6-9-months-and-happened-to-have-pictures-of-any-midwives-and-or-students-would-you-mind-sharing-them-with-us',
        permanent: true,
      },
      {
        source:
          '/if-you-have-been-in-attendance-at-a-birth-in-the-past-6-9-months-and-happened-to-have-pictures-of-any-midwives-and-or-students-would-you-mind-sharing-them-with-us/',
        destination:
          '/post/if-you-have-been-in-attendance-at-a-birth-in-the-past-6-9-months-and-happened-to-have-pictures-of-any-midwives-and-or-students-would-you-mind-sharing-them-with-us',
        permanent: true,
      },
      {
        source:
          '/in-the-past-4-days-heartbeatmidwifery-has-celebrated-the-arrivals-of-9-babies',
        destination:
          '/post/in-the-past-4-days-heartbeatmidwifery-has-celebrated-the-arrivals-of-9-babies',
        permanent: true,
      },
      {
        source:
          '/in-the-past-4-days-heartbeatmidwifery-has-celebrated-the-arrivals-of-9-babies/',
        destination:
          '/post/in-the-past-4-days-heartbeatmidwifery-has-celebrated-the-arrivals-of-9-babies',
        permanent: true,
      },
      {
        source: '/introducing-antonio-friesen',
        destination: '/post/introducing-antonio-friesen',
        permanent: true,
      },
      {
        source: '/introducing-antonio-friesen/',
        destination: '/post/introducing-antonio-friesen',
        permanent: true,
      },
      {
        source: '/introducing-aria-josephine',
        destination: '/post/introducing-aria-josephine',
        permanent: true,
      },
      {
        source: '/introducing-aria-josephine/',
        destination: '/post/introducing-aria-josephine',
        permanent: true,
      },
      {
        source: '/introducing-simon-cole',
        destination: '/post/introducing-simon-cole',
        permanent: true,
      },
      {
        source: '/introducing-simon-cole/',
        destination: '/post/introducing-simon-cole',
        permanent: true,
      },
      {
        source:
          '/introducing-the-newest-addition-to-our-team-kylie-office-manage%f0%9f%8c%bb',
        destination:
          '/post/introducing-the-newest-addition-to-our-team-kylie-office-manage%f0%9f%8c%bb',
        permanent: true,
      },
      {
        source:
          '/introducing-the-newest-addition-to-our-team-kylie-office-manage%f0%9f%8c%bb/',
        destination:
          '/post/introducing-the-newest-addition-to-our-team-kylie-office-manage%f0%9f%8c%bb',
        permanent: true,
      },
      {
        source: '/its-finally-here',
        destination: '/post/its-finally-here',
        permanent: true,
      },
      {
        source: '/its-finally-here/',
        destination: '/post/its-finally-here',
        permanent: true,
      },
      {
        source:
          '/its-hard-to-believe-ive-been-here-long-enough-to-help-with-the-deliveries-of-siblings-to-several-families-now',
        destination:
          '/post/its-hard-to-believe-ive-been-here-long-enough-to-help-with-the-deliveries-of-siblings-to-several-families-now',
        permanent: true,
      },
      {
        source:
          '/its-hard-to-believe-ive-been-here-long-enough-to-help-with-the-deliveries-of-siblings-to-several-families-now/',
        destination:
          '/post/its-hard-to-believe-ive-been-here-long-enough-to-help-with-the-deliveries-of-siblings-to-several-families-now',
        permanent: true,
      },
      {
        source: '/its-our-last-week-on-20th-street',
        destination: '/post/its-our-last-week-on-20th-street',
        permanent: true,
      },
      {
        source: '/its-our-last-week-on-20th-street/',
        destination: '/post/its-our-last-week-on-20th-street',
        permanent: true,
      },
      {
        source: '/its-so-interesting-to-see-what-heartbeat-has-done',
        destination: '/post/its-so-interesting-to-see-what-heartbeat-has-done',
        permanent: true,
      },
      {
        source: '/its-so-interesting-to-see-what-heartbeat-has-done/',
        destination: '/post/its-so-interesting-to-see-what-heartbeat-has-done',
        permanent: true,
      },
      {
        source:
          '/jenna-is-officially-in-town-and-begins-her-rotations-on-monday',
        destination:
          '/post/jenna-is-officially-in-town-and-begins-her-rotations-on-monday',
        permanent: true,
      },
      {
        source:
          '/jenna-is-officially-in-town-and-begins-her-rotations-on-monday/',
        destination:
          '/post/jenna-is-officially-in-town-and-begins-her-rotations-on-monday',
        permanent: true,
      },
      {
        source: '/july-night-babes-sweet-firecrackers',
        destination: '/post/july-night-babes-sweet-firecrackers',
        permanent: true,
      },
      {
        source: '/july-night-babes-sweet-firecrackers/',
        destination: '/post/july-night-babes-sweet-firecrackers',
        permanent: true,
      },
      {
        source: '/june-babies-month-of-boys',
        destination: '/post/june-babies-month-of-boys',
        permanent: true,
      },
      {
        source: '/june-babies-month-of-boys/',
        destination: '/post/june-babies-month-of-boys',
        permanent: true,
      },
      {
        source: '/last-one-for-today',
        destination: '/post/last-one-for-today',
        permanent: true,
      },
      {
        source: '/last-one-for-today/',
        destination: '/post/last-one-for-today',
        permanent: true,
      },
      {
        source: '/lets-talk-about-water-birth',
        destination: '/post/lets-talk-about-water-birth',
        permanent: true,
      },
      {
        source: '/lets-talk-about-water-birth/',
        destination: '/post/lets-talk-about-water-birth',
        permanent: true,
      },
      {
        source:
          '/look-at-who-we-welcomed-to-our-thanksgiving-tables-this-november-%f0%9f%a6%83',
        destination:
          '/post/look-at-who-we-welcomed-to-our-thanksgiving-tables-this-november-%f0%9f%a6%83',
        permanent: true,
      },
      {
        source:
          '/look-at-who-we-welcomed-to-our-thanksgiving-tables-this-november-%f0%9f%a6%83/',
        destination:
          '/post/look-at-who-we-welcomed-to-our-thanksgiving-tables-this-november-%f0%9f%a6%83',
        permanent: true,
      },
      {
        source:
          '/looking-for-a-little-extra-support-during-labor-%f0%9f%8c%ac%ef%b8%8f',
        destination:
          '/post/looking-for-a-little-extra-support-during-labor-%f0%9f%8c%ac%ef%b8%8f',
        permanent: true,
      },
      {
        source:
          '/looking-for-a-little-extra-support-during-labor-%f0%9f%8c%ac%ef%b8%8f/',
        destination:
          '/post/looking-for-a-little-extra-support-during-labor-%f0%9f%8c%ac%ef%b8%8f',
        permanent: true,
      },
      {
        source:
          '/looking-for-an-interior-designer-to-make-the-conference-room-inviting-and-add-tasteful-acoustic-panels',
        destination:
          '/post/looking-for-an-interior-designer-to-make-the-conference-room-inviting-and-add-tasteful-acoustic-panels',
        permanent: true,
      },
      {
        source:
          '/looking-for-an-interior-designer-to-make-the-conference-room-inviting-and-add-tasteful-acoustic-panels/',
        destination:
          '/post/looking-for-an-interior-designer-to-make-the-conference-room-inviting-and-add-tasteful-acoustic-panels',
        permanent: true,
      },
      {
        source:
          '/many-of-our-families-have-the-opportunity-to-know-sofi-on-the-office-side-of-heartbeat',
        destination:
          '/post/many-of-our-families-have-the-opportunity-to-know-sofi-on-the-office-side-of-heartbeat',
        permanent: true,
      },
      {
        source:
          '/many-of-our-families-have-the-opportunity-to-know-sofi-on-the-office-side-of-heartbeat/',
        destination:
          '/post/many-of-our-families-have-the-opportunity-to-know-sofi-on-the-office-side-of-heartbeat',
        permanent: true,
      },
      {
        source: '/max-shaiya-%f0%9f%8c%99',
        destination: '/post/max-shaiya-%f0%9f%8c%99',
        permanent: true,
      },
      {
        source: '/max-shaiya-%f0%9f%8c%99/',
        destination: '/post/max-shaiya-%f0%9f%8c%99',
        permanent: true,
      },
      {
        source: '/meet-charlie-jo',
        destination: '/post/meet-charlie-jo',
        permanent: true,
      },
      {
        source: '/meet-charlie-jo/',
        destination: '/post/meet-charlie-jo',
        permanent: true,
      },
      {
        source: '/meet-the-midwife-monday-jenna',
        destination: '/post/meet-the-midwife-monday-jenna',
        permanent: true,
      },
      {
        source: '/meet-the-midwife-monday-jenna/',
        destination: '/post/meet-the-midwife-monday-jenna',
        permanent: true,
      },
      {
        source: '/merry-christmas-eve-eve%f0%9f%8e%84',
        destination: '/post/merry-christmas-eve-eve%f0%9f%8e%84',
        permanent: true,
      },
      {
        source: '/merry-christmas-eve-eve%f0%9f%8e%84/',
        destination: '/post/merry-christmas-eve-eve%f0%9f%8e%84',
        permanent: true,
      },
      {
        source: '/mirth-disney-princess-blueberries',
        destination: '/post/mirth-disney-princess-blueberries',
        permanent: true,
      },
      {
        source: '/mirth-disney-princess-blueberries/',
        destination: '/post/mirth-disney-princess-blueberries',
        permanent: true,
      },
      {
        source: '/mirth-returns-to-heartbeat',
        destination: '/post/mirth-returns-to-heartbeat',
        permanent: true,
      },
      {
        source: '/mirth-returns-to-heartbeat/',
        destination: '/post/mirth-returns-to-heartbeat',
        permanent: true,
      },
      {
        source: '/october-recap',
        destination: '/post/october-recap',
        permanent: true,
      },
      {
        source: '/october-recap/',
        destination: '/post/october-recap',
        permanent: true,
      },
      {
        source:
          '/on-the-note-of-sweet-treats-this-gorgeous-bouquet-was-made-and-delivered-by-one-of-our-precious-mamas',
        destination:
          '/post/on-the-note-of-sweet-treats-this-gorgeous-bouquet-was-made-and-delivered-by-one-of-our-precious-mamas',
        permanent: true,
      },
      {
        source:
          '/on-the-note-of-sweet-treats-this-gorgeous-bouquet-was-made-and-delivered-by-one-of-our-precious-mamas/',
        destination:
          '/post/on-the-note-of-sweet-treats-this-gorgeous-bouquet-was-made-and-delivered-by-one-of-our-precious-mamas',
        permanent: true,
      },
      {
        source:
          '/on-the-topic-of-celebrating%f0%9f%8e%89%f0%9f%8e%89ellie-caught-her-biggest-baby-weighing-in-at-9lbs-15oz%f0%9f%8e%89%f0%9f%8e%89',
        destination:
          '/post/on-the-topic-of-celebrating%f0%9f%8e%89%f0%9f%8e%89ellie-caught-her-biggest-baby-weighing-in-at-9lbs-15oz%f0%9f%8e%89%f0%9f%8e%89',
        permanent: true,
      },
      {
        source:
          '/on-the-topic-of-celebrating%f0%9f%8e%89%f0%9f%8e%89ellie-caught-her-biggest-baby-weighing-in-at-9lbs-15oz%f0%9f%8e%89%f0%9f%8e%89/',
        destination:
          '/post/on-the-topic-of-celebrating%f0%9f%8e%89%f0%9f%8e%89ellie-caught-her-biggest-baby-weighing-in-at-9lbs-15oz%f0%9f%8e%89%f0%9f%8e%89',
        permanent: true,
      },
      {
        source: '/out-of-hospital-birth-is-hard-work',
        destination: '/post/out-of-hospital-birth-is-hard-work',
        permanent: true,
      },
      {
        source: '/out-of-hospital-birth-is-hard-work/',
        destination: '/post/out-of-hospital-birth-is-hard-work',
        permanent: true,
      },
      {
        source: '/peaceful-birth-practices-nurturing-calm-labor',
        destination: '/post/peaceful-birth-practices-nurturing-calm-labor',
        permanent: true,
      },
      {
        source: '/peaceful-birth-practices-nurturing-calm-labor/',
        destination: '/post/peaceful-birth-practices-nurturing-calm-labor',
        permanent: true,
      },
      {
        source: '/please-help-us-find-this-monkeys-home',
        destination: '/post/please-help-us-find-this-monkeys-home',
        permanent: true,
      },
      {
        source: '/please-help-us-find-this-monkeys-home/',
        destination: '/post/please-help-us-find-this-monkeys-home',
        permanent: true,
      },
      {
        source: '/preparing-for-unmedicated-birth',
        destination: '/post/preparing-for-unmedicated-birth',
        permanent: true,
      },
      {
        source: '/preparing-for-unmedicated-birth/',
        destination: '/post/preparing-for-unmedicated-birth',
        permanent: true,
      },
      {
        source: '/proud-to-announce-our-official-stats-for-2024',
        destination: '/post/proud-to-announce-our-official-stats-for-2024',
        permanent: true,
      },
      {
        source: '/proud-to-announce-our-official-stats-for-2024/',
        destination: '/post/proud-to-announce-our-official-stats-for-2024',
        permanent: true,
      },
      {
        source: '/ready-to-sleep-like-a-baby-during-pregnancy',
        destination: '/post/ready-to-sleep-like-a-baby-during-pregnancy',
        permanent: true,
      },
      {
        source: '/ready-to-sleep-like-a-baby-during-pregnancy/',
        destination: '/post/ready-to-sleep-like-a-baby-during-pregnancy',
        permanent: true,
      },
      {
        source: '/rolling-into-the-new-year-like',
        destination: '/post/rolling-into-the-new-year-like',
        permanent: true,
      },
      {
        source: '/rolling-into-the-new-year-like/',
        destination: '/post/rolling-into-the-new-year-like',
        permanent: true,
      },
      {
        source: '/sacred-journey-baby-1000-fresh-48-photography-gift',
        destination: '/post/sacred-journey-baby-1000-fresh-48-photography-gift',
        permanent: true,
      },
      {
        source: '/sacred-journey-baby-1000-fresh-48-photography-gift/',
        destination: '/post/sacred-journey-baby-1000-fresh-48-photography-gift',
        permanent: true,
      },
      {
        source:
          '/sewing-midwifery-lots-of-slings-to-weigh-babies-in-%f0%9f%92%97%f0%9f%90%a3%f0%9f%8c%bf%f0%9f%8d%84%f0%9f%8c%bb%e2%9c%a8%f0%9f%8c%b3%f0%9f%8c%8a%e2%98%80%ef%b8%8f',
        destination:
          '/post/sewing-midwifery-lots-of-slings-to-weigh-babies-in-%f0%9f%92%97%f0%9f%90%a3%f0%9f%8c%bf%f0%9f%8d%84%f0%9f%8c%bb%e2%9c%a8%f0%9f%8c%b3%f0%9f%8c%8a%e2%98%80%ef%b8%8f',
        permanent: true,
      },
      {
        source:
          '/sewing-midwifery-lots-of-slings-to-weigh-babies-in-%f0%9f%92%97%f0%9f%90%a3%f0%9f%8c%bf%f0%9f%8d%84%f0%9f%8c%bb%e2%9c%a8%f0%9f%8c%b3%f0%9f%8c%8a%e2%98%80%ef%b8%8f/',
        destination:
          '/post/sewing-midwifery-lots-of-slings-to-weigh-babies-in-%f0%9f%92%97%f0%9f%90%a3%f0%9f%8c%bf%f0%9f%8d%84%f0%9f%8c%bb%e2%9c%a8%f0%9f%8c%b3%f0%9f%8c%8a%e2%98%80%ef%b8%8f',
        permanent: true,
      },
      {
        source:
          '/shianes-family-is-looking-for-a-for-a-reliable-sitter-with-a-flexible-schedule-who-loves-kiddos-ages-4-6-and-golden-doodles-to-assist-with-school-drop-offs-pick-ups-late-afternoons-ev',
        destination:
          '/post/shianes-family-is-looking-for-a-for-a-reliable-sitter-with-a-flexible-schedule-who-loves-kiddos-ages-4-6-and-golden-doodles-to-assist-with-school-drop-offs-pick-ups-late-afternoons-ev',
        permanent: true,
      },
      {
        source:
          '/shianes-family-is-looking-for-a-for-a-reliable-sitter-with-a-flexible-schedule-who-loves-kiddos-ages-4-6-and-golden-doodles-to-assist-with-school-drop-offs-pick-ups-late-afternoons-ev/',
        destination:
          '/post/shianes-family-is-looking-for-a-for-a-reliable-sitter-with-a-flexible-schedule-who-loves-kiddos-ages-4-6-and-golden-doodles-to-assist-with-school-drop-offs-pick-ups-late-afternoons-ev',
        permanent: true,
      },
      {
        source:
          '/so-excited-to-have-sofi-join-the-heartbeat-team-as-receptionist',
        destination:
          '/post/so-excited-to-have-sofi-join-the-heartbeat-team-as-receptionist',
        permanent: true,
      },
      {
        source:
          '/so-excited-to-have-sofi-join-the-heartbeat-team-as-receptionist/',
        destination:
          '/post/so-excited-to-have-sofi-join-the-heartbeat-team-as-receptionist',
        permanent: true,
      },
      {
        source: '/soaking-up-our-new-view%e2%9c%a8',
        destination: '/post/soaking-up-our-new-view%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/soaking-up-our-new-view%e2%9c%a8/',
        destination: '/post/soaking-up-our-new-view%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/sometimes-the-best-surprises-come-in-the-smallest-of-bundles',
        destination:
          '/post/sometimes-the-best-surprises-come-in-the-smallest-of-bundles',
        permanent: true,
      },
      {
        source:
          '/sometimes-the-best-surprises-come-in-the-smallest-of-bundles/',
        destination:
          '/post/sometimes-the-best-surprises-come-in-the-smallest-of-bundles',
        permanent: true,
      },
      {
        source:
          '/sometimes-the-smallest-things-take-up-the-most-room-in-your-heart',
        destination:
          '/post/sometimes-the-smallest-things-take-up-the-most-room-in-your-heart',
        permanent: true,
      },
      {
        source:
          '/sometimes-the-smallest-things-take-up-the-most-room-in-your-heart/',
        destination:
          '/post/sometimes-the-smallest-things-take-up-the-most-room-in-your-heart',
        permanent: true,
      },
      {
        source:
          '/sound-of-rain-slow-dancing-support-unwavering-and-then-there-was-you',
        destination:
          '/post/sound-of-rain-slow-dancing-support-unwavering-and-then-there-was-you',
        permanent: true,
      },
      {
        source:
          '/sound-of-rain-slow-dancing-support-unwavering-and-then-there-was-you/',
        destination:
          '/post/sound-of-rain-slow-dancing-support-unwavering-and-then-there-was-you',
        permanent: true,
      },
      {
        source: '/spring-cleaning-done-well',
        destination: '/post/spring-cleaning-done-well',
        permanent: true,
      },
      {
        source: '/spring-cleaning-done-well/',
        destination: '/post/spring-cleaning-done-well',
        permanent: true,
      },
      {
        source:
          '/starting-in-march-this-year-we-began-work-on-the-new-birth-center',
        destination:
          '/post/starting-in-march-this-year-we-began-work-on-the-new-birth-center',
        permanent: true,
      },
      {
        source:
          '/starting-in-march-this-year-we-began-work-on-the-new-birth-center/',
        destination:
          '/post/starting-in-march-this-year-we-began-work-on-the-new-birth-center',
        permanent: true,
      },
      {
        source:
          '/staying-hydrated-during-pregnancy-isnt-just-important-its-essential',
        destination:
          '/post/staying-hydrated-during-pregnancy-isnt-just-important-its-essential',
        permanent: true,
      },
      {
        source:
          '/staying-hydrated-during-pregnancy-isnt-just-important-its-essential/',
        destination:
          '/post/staying-hydrated-during-pregnancy-isnt-just-important-its-essential',
        permanent: true,
      },
      {
        source: '/step-into-labor-with-confidence',
        destination: '/post/step-into-labor-with-confidence',
        permanent: true,
      },
      {
        source: '/step-into-labor-with-confidence/',
        destination: '/post/step-into-labor-with-confidence',
        permanent: true,
      },
      {
        source: '/steward-well-%e2%9c%a8',
        destination: '/post/steward-well-%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/steward-well-%e2%9c%a8/',
        destination: '/post/steward-well-%e2%9c%a8',
        permanent: true,
      },
      {
        source:
          '/strong-community-support-for-natural-child-birth-here-in-lubbock-texas',
        destination:
          '/post/strong-community-support-for-natural-child-birth-here-in-lubbock-texas',
        permanent: true,
      },
      {
        source:
          '/strong-community-support-for-natural-child-birth-here-in-lubbock-texas/',
        destination:
          '/post/strong-community-support-for-natural-child-birth-here-in-lubbock-texas',
        permanent: true,
      },
      {
        source: '/student-midwife-emily-has-been-with-us-since-the-beginning',
        destination:
          '/post/student-midwife-emily-has-been-with-us-since-the-beginning',
        permanent: true,
      },
      {
        source: '/student-midwife-emily-has-been-with-us-since-the-beginning/',
        destination:
          '/post/student-midwife-emily-has-been-with-us-since-the-beginning',
        permanent: true,
      },
      {
        source: '/sweet-caroline-%f0%9f%8d%91',
        destination: '/post/sweet-caroline-%f0%9f%8d%91',
        permanent: true,
      },
      {
        source: '/sweet-caroline-%f0%9f%8d%91/',
        destination: '/post/sweet-caroline-%f0%9f%8d%91',
        permanent: true,
      },
      {
        source: '/sweet-rosalie-mae',
        destination: '/post/sweet-rosalie-mae',
        permanent: true,
      },
      {
        source: '/sweet-rosalie-mae/',
        destination: '/post/sweet-rosalie-mae',
        permanent: true,
      },
      {
        source: '/sweeter-than-candy-hearts%f0%9f%8d%ac%f0%9f%92%97%e2%9c%a8',
        destination:
          '/post/sweeter-than-candy-hearts%f0%9f%8d%ac%f0%9f%92%97%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/sweeter-than-candy-hearts%f0%9f%8d%ac%f0%9f%92%97%e2%9c%a8/',
        destination:
          '/post/sweeter-than-candy-hearts%f0%9f%8d%ac%f0%9f%92%97%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/talk-about-a-special-delivery',
        destination: '/post/talk-about-a-special-delivery',
        permanent: true,
      },
      {
        source: '/talk-about-a-special-delivery/',
        destination: '/post/talk-about-a-special-delivery',
        permanent: true,
      },
      {
        source: '/team-building-escape-room-success',
        destination: '/post/team-building-escape-room-success',
        permanent: true,
      },
      {
        source: '/team-building-escape-room-success/',
        destination: '/post/team-building-escape-room-success',
        permanent: true,
      },
      {
        source:
          '/that-awkward-moment-when-you-were-attending-the-parkridge-31st-annual-gala-as-a-midwife-birth-happens%f0%9f%a4%b7%f0%9f%8f%bc%e2%99%80%ef%b8%8f%f0%9f%98%82',
        destination:
          '/post/that-awkward-moment-when-you-were-attending-the-parkridge-31st-annual-gala-as-a-midwife-birth-happens%f0%9f%a4%b7%f0%9f%8f%bc%e2%99%80%ef%b8%8f%f0%9f%98%82',
        permanent: true,
      },
      {
        source:
          '/that-awkward-moment-when-you-were-attending-the-parkridge-31st-annual-gala-as-a-midwife-birth-happens%f0%9f%a4%b7%f0%9f%8f%bc%e2%99%80%ef%b8%8f%f0%9f%98%82/',
        destination:
          '/post/that-awkward-moment-when-you-were-attending-the-parkridge-31st-annual-gala-as-a-midwife-birth-happens%f0%9f%a4%b7%f0%9f%8f%bc%e2%99%80%ef%b8%8f%f0%9f%98%82',
        permanent: true,
      },
      {
        source:
          '/that-epic-moment-when-everybody-in-clinic-coordinates-outfits-perfectly-%f0%9f%a4%8c%f0%9f%8f%bc',
        destination:
          '/post/that-epic-moment-when-everybody-in-clinic-coordinates-outfits-perfectly-%f0%9f%a4%8c%f0%9f%8f%bc',
        permanent: true,
      },
      {
        source:
          '/that-epic-moment-when-everybody-in-clinic-coordinates-outfits-perfectly-%f0%9f%a4%8c%f0%9f%8f%bc/',
        destination:
          '/post/that-epic-moment-when-everybody-in-clinic-coordinates-outfits-perfectly-%f0%9f%a4%8c%f0%9f%8f%bc',
        permanent: true,
      },
      {
        source:
          '/thats-right-your-scent-is-one-of-the-very-first-ways-your-baby-bonds-with-you-after-birth',
        destination:
          '/post/thats-right-your-scent-is-one-of-the-very-first-ways-your-baby-bonds-with-you-after-birth',
        permanent: true,
      },
      {
        source:
          '/thats-right-your-scent-is-one-of-the-very-first-ways-your-baby-bonds-with-you-after-birth/',
        destination:
          '/post/thats-right-your-scent-is-one-of-the-very-first-ways-your-baby-bonds-with-you-after-birth',
        permanent: true,
      },
      {
        source: '/the-beautiful-meaning-of-midwife-is-with-woman%e2%9c%a8a',
        destination:
          '/post/the-beautiful-meaning-of-midwife-is-with-woman%e2%9c%a8a',
        permanent: true,
      },
      {
        source: '/the-beautiful-meaning-of-midwife-is-with-woman%e2%9c%a8a/',
        destination:
          '/post/the-beautiful-meaning-of-midwife-is-with-woman%e2%9c%a8a',
        permanent: true,
      },
      {
        source: '/the-excitement-is-contagious-%f0%9f%98%89',
        destination: '/post/the-excitement-is-contagious-%f0%9f%98%89',
        permanent: true,
      },
      {
        source: '/the-excitement-is-contagious-%f0%9f%98%89/',
        destination: '/post/the-excitement-is-contagious-%f0%9f%98%89',
        permanent: true,
      },
      {
        source: '/the-most-lovely-month-for-some-birthday-parties%f0%9f%a4%8d',
        destination:
          '/post/the-most-lovely-month-for-some-birthday-parties%f0%9f%a4%8d',
        permanent: true,
      },
      {
        source: '/the-most-lovely-month-for-some-birthday-parties%f0%9f%a4%8d/',
        destination:
          '/post/the-most-lovely-month-for-some-birthday-parties%f0%9f%a4%8d',
        permanent: true,
      },
      {
        source: '/the-precious-moments-you-never-forget%e2%9c%a8%f0%9f%8c%bf',
        destination:
          '/post/the-precious-moments-you-never-forget%e2%9c%a8%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source: '/the-precious-moments-you-never-forget%e2%9c%a8%f0%9f%8c%bf/',
        destination:
          '/post/the-precious-moments-you-never-forget%e2%9c%a8%f0%9f%8c%bf',
        permanent: true,
      },
      {
        source: '/the-rebozo%e2%9c%a8',
        destination: '/post/the-rebozo%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/the-rebozo%e2%9c%a8/',
        destination: '/post/the-rebozo%e2%9c%a8',
        permanent: true,
      },
      {
        source:
          '/there-is-a-secret-in-our-culture-and-its-not-that-birth-is-painful-its-that-women-are-strong-laura-stavoe-harm',
        destination:
          '/post/there-is-a-secret-in-our-culture-and-its-not-that-birth-is-painful-its-that-women-are-strong-laura-stavoe-harm',
        permanent: true,
      },
      {
        source:
          '/there-is-a-secret-in-our-culture-and-its-not-that-birth-is-painful-its-that-women-are-strong-laura-stavoe-harm/',
        destination:
          '/post/there-is-a-secret-in-our-culture-and-its-not-that-birth-is-painful-its-that-women-are-strong-laura-stavoe-harm',
        permanent: true,
      },
      {
        source: '/those-may-flowers-though',
        destination: '/post/those-may-flowers-though',
        permanent: true,
      },
      {
        source: '/those-may-flowers-though/',
        destination: '/post/those-may-flowers-though',
        permanent: true,
      },
      {
        source:
          '/three-weeks-ago-we-had-the-joy-of-welcoming-twin-boys-into-the-world-at-heartbeat-midwifery-%f0%9f%92%99%f0%9f%92%99',
        destination:
          '/post/three-weeks-ago-we-had-the-joy-of-welcoming-twin-boys-into-the-world-at-heartbeat-midwifery-%f0%9f%92%99%f0%9f%92%99',
        permanent: true,
      },
      {
        source:
          '/three-weeks-ago-we-had-the-joy-of-welcoming-twin-boys-into-the-world-at-heartbeat-midwifery-%f0%9f%92%99%f0%9f%92%99/',
        destination:
          '/post/three-weeks-ago-we-had-the-joy-of-welcoming-twin-boys-into-the-world-at-heartbeat-midwifery-%f0%9f%92%99%f0%9f%92%99',
        permanent: true,
      },
      {
        source: '/today-is-international-day-of-the-midwife',
        destination: '/post/today-is-international-day-of-the-midwife',
        permanent: true,
      },
      {
        source: '/today-is-international-day-of-the-midwife/',
        destination: '/post/today-is-international-day-of-the-midwife',
        permanent: true,
      },
      {
        source: '/twins-are-double-the-fun',
        destination: '/post/twins-are-double-the-fun',
        permanent: true,
      },
      {
        source: '/twins-are-double-the-fun/',
        destination: '/post/twins-are-double-the-fun',
        permanent: true,
      },
      {
        source:
          '/umbilical-cord-knots-are-a-rare-but-fascinating-part-of-pregnancy',
        destination:
          '/post/umbilical-cord-knots-are-a-rare-but-fascinating-part-of-pregnancy',
        permanent: true,
      },
      {
        source:
          '/umbilical-cord-knots-are-a-rare-but-fascinating-part-of-pregnancy/',
        destination:
          '/post/umbilical-cord-knots-are-a-rare-but-fascinating-part-of-pregnancy',
        permanent: true,
      },
      {
        source: '/vacation-inspiration-some-place-warm',
        destination: '/post/vacation-inspiration-some-place-warm',
        permanent: true,
      },
      {
        source: '/vacation-inspiration-some-place-warm/',
        destination: '/post/vacation-inspiration-some-place-warm',
        permanent: true,
      },
      {
        source:
          '/water-births-have-been-described-as-natures-epidural-and-for-good-reason',
        destination:
          '/post/water-births-have-been-described-as-natures-epidural-and-for-good-reason',
        permanent: true,
      },
      {
        source:
          '/water-births-have-been-described-as-natures-epidural-and-for-good-reason/',
        destination:
          '/post/water-births-have-been-described-as-natures-epidural-and-for-good-reason',
        permanent: true,
      },
      {
        source:
          '/we-are-celebrating-huge-milestones-in-so-many-areas-at-heartbeat-midwifery',
        destination:
          '/post/we-are-celebrating-huge-milestones-in-so-many-areas-at-heartbeat-midwifery',
        permanent: true,
      },
      {
        source:
          '/we-are-celebrating-huge-milestones-in-so-many-areas-at-heartbeat-midwifery/',
        destination:
          '/post/we-are-celebrating-huge-milestones-in-so-many-areas-at-heartbeat-midwifery',
        permanent: true,
      },
      {
        source:
          '/we-are-excited-to-announce-that-a-new-licensed-midwife-will-be-joining-our-team-in-mid-january-2025',
        destination:
          '/post/we-are-excited-to-announce-that-a-new-licensed-midwife-will-be-joining-our-team-in-mid-january-2025',
        permanent: true,
      },
      {
        source:
          '/we-are-excited-to-announce-that-a-new-licensed-midwife-will-be-joining-our-team-in-mid-january-2025/',
        destination:
          '/post/we-are-excited-to-announce-that-a-new-licensed-midwife-will-be-joining-our-team-in-mid-january-2025',
        permanent: true,
      },
      {
        source:
          '/we-are-excited-to-announce-that-kaegan-our-current-office-manager-is-moving-into-the-role-of-student-midwife%e2%9c%a8',
        destination:
          '/post/we-are-excited-to-announce-that-kaegan-our-current-office-manager-is-moving-into-the-role-of-student-midwife%e2%9c%a8',
        permanent: true,
      },
      {
        source:
          '/we-are-excited-to-announce-that-kaegan-our-current-office-manager-is-moving-into-the-role-of-student-midwife%e2%9c%a8/',
        destination:
          '/post/we-are-excited-to-announce-that-kaegan-our-current-office-manager-is-moving-into-the-role-of-student-midwife%e2%9c%a8',
        permanent: true,
      },
      {
        source: '/we-are-open-on-fridays',
        destination: '/post/we-are-open-on-fridays',
        permanent: true,
      },
      {
        source: '/we-are-open-on-fridays/',
        destination: '/post/we-are-open-on-fridays',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-announce-that-we-will-be-hosting-dr-stuart-fischbein-ob-gyn-on-april-7th-for-a-one-day-workshop-in-heartbeat-midwiferys-birth-center-classroom',
        destination:
          '/post/we-are-so-excited-to-announce-that-we-will-be-hosting-dr-stuart-fischbein-ob-gyn-on-april-7th-for-a-one-day-workshop-in-heartbeat-midwiferys-birth-center-classroom',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-announce-that-we-will-be-hosting-dr-stuart-fischbein-ob-gyn-on-april-7th-for-a-one-day-workshop-in-heartbeat-midwiferys-birth-center-classroom/',
        destination:
          '/post/we-are-so-excited-to-announce-that-we-will-be-hosting-dr-stuart-fischbein-ob-gyn-on-april-7th-for-a-one-day-workshop-in-heartbeat-midwiferys-birth-center-classroom',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-celebrate-the-birth-of-heartbeats-500th-baby',
        destination:
          '/post/we-are-so-excited-to-celebrate-the-birth-of-heartbeats-500th-baby',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-celebrate-the-birth-of-heartbeats-500th-baby/',
        destination:
          '/post/we-are-so-excited-to-celebrate-the-birth-of-heartbeats-500th-baby',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-create-and-offer-t-shirts-for-our-clients-to-purchase',
        destination:
          '/post/we-are-so-excited-to-create-and-offer-t-shirts-for-our-clients-to-purchase',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-create-and-offer-t-shirts-for-our-clients-to-purchase/',
        destination:
          '/post/we-are-so-excited-to-create-and-offer-t-shirts-for-our-clients-to-purchase',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-release-some-of-our-roughly-sketched-designs',
        destination:
          '/post/we-are-so-excited-to-release-some-of-our-roughly-sketched-designs',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-release-some-of-our-roughly-sketched-designs/',
        destination:
          '/post/we-are-so-excited-to-release-some-of-our-roughly-sketched-designs',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-share-that-we-officially-have-a-third-licensed-midwife-at-heartbeat-midwifery',
        destination:
          '/post/we-are-so-excited-to-share-that-we-officially-have-a-third-licensed-midwife-at-heartbeat-midwifery',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-share-that-we-officially-have-a-third-licensed-midwife-at-heartbeat-midwifery/',
        destination:
          '/post/we-are-so-excited-to-share-that-we-officially-have-a-third-licensed-midwife-at-heartbeat-midwifery',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-share-the-announcement-of-this-sweet-boys-arrival',
        destination:
          '/post/we-are-so-excited-to-share-the-announcement-of-this-sweet-boys-arrival',
        permanent: true,
      },
      {
        source:
          '/we-are-so-excited-to-share-the-announcement-of-this-sweet-boys-arrival/',
        destination:
          '/post/we-are-so-excited-to-share-the-announcement-of-this-sweet-boys-arrival',
        permanent: true,
      },
      {
        source: '/we-are-so-proud-to-introduce-our-newest-licensed-midwife-mrs',
        destination:
          '/post/we-are-so-proud-to-introduce-our-newest-licensed-midwife-mrs',
        permanent: true,
      },
      {
        source:
          '/we-are-so-proud-to-introduce-our-newest-licensed-midwife-mrs/',
        destination:
          '/post/we-are-so-proud-to-introduce-our-newest-licensed-midwife-mrs',
        permanent: true,
      },
      {
        source:
          '/we-dont-have-control-of-how-our-birth-unfolds-what-we-do-have-control-over-is-the-energy-we-bring-to-that-experience',
        destination:
          '/post/we-dont-have-control-of-how-our-birth-unfolds-what-we-do-have-control-over-is-the-energy-we-bring-to-that-experience',
        permanent: true,
      },
      {
        source:
          '/we-dont-have-control-of-how-our-birth-unfolds-what-we-do-have-control-over-is-the-energy-we-bring-to-that-experience/',
        destination:
          '/post/we-dont-have-control-of-how-our-birth-unfolds-what-we-do-have-control-over-is-the-energy-we-bring-to-that-experience',
        permanent: true,
      },
      {
        source:
          '/we-have-had-the-greatest-honor-of-hosting-dr-stuart-fischbein-ob-gyn-for-breech-training',
        destination:
          '/post/we-have-had-the-greatest-honor-of-hosting-dr-stuart-fischbein-ob-gyn-for-breech-training',
        permanent: true,
      },
      {
        source:
          '/we-have-had-the-greatest-honor-of-hosting-dr-stuart-fischbein-ob-gyn-for-breech-training/',
        destination:
          '/post/we-have-had-the-greatest-honor-of-hosting-dr-stuart-fischbein-ob-gyn-for-breech-training',
        permanent: true,
      },
      {
        source: '/we-love-calendars',
        destination: '/post/we-love-calendars',
        permanent: true,
      },
      {
        source: '/we-love-calendars/',
        destination: '/post/we-love-calendars',
        permanent: true,
      },
      {
        source: '/we-love-our-new-door-decor',
        destination: '/post/we-love-our-new-door-decor',
        permanent: true,
      },
      {
        source: '/we-love-our-new-door-decor/',
        destination: '/post/we-love-our-new-door-decor',
        permanent: true,
      },
      {
        source: '/we-love-to-have-your-whole-crew-come-to-appointments',
        destination:
          '/post/we-love-to-have-your-whole-crew-come-to-appointments',
        permanent: true,
      },
      {
        source: '/we-love-to-have-your-whole-crew-come-to-appointments/',
        destination:
          '/post/we-love-to-have-your-whole-crew-come-to-appointments',
        permanent: true,
      },
      {
        source: '/we-made-it-to-friday-what-a-week-of-babies-and-moving',
        destination:
          '/post/we-made-it-to-friday-what-a-week-of-babies-and-moving',
        permanent: true,
      },
      {
        source: '/we-made-it-to-friday-what-a-week-of-babies-and-moving/',
        destination:
          '/post/we-made-it-to-friday-what-a-week-of-babies-and-moving',
        permanent: true,
      },
      {
        source: '/we-received-the-sweetest-boo-basket-this-morning',
        destination: '/post/we-received-the-sweetest-boo-basket-this-morning',
        permanent: true,
      },
      {
        source: '/we-received-the-sweetest-boo-basket-this-morning/',
        destination: '/post/we-received-the-sweetest-boo-basket-this-morning',
        permanent: true,
      },
      {
        source:
          '/we-support-parents-decision-to-circumcise-or-not-but-if-you-do-we-believe-its-important-to-have-someone-who-is-skilled-and-experienced',
        destination:
          '/post/we-support-parents-decision-to-circumcise-or-not-but-if-you-do-we-believe-its-important-to-have-someone-who-is-skilled-and-experienced',
        permanent: true,
      },
      {
        source:
          '/we-support-parents-decision-to-circumcise-or-not-but-if-you-do-we-believe-its-important-to-have-someone-who-is-skilled-and-experienced/',
        destination:
          '/post/we-support-parents-decision-to-circumcise-or-not-but-if-you-do-we-believe-its-important-to-have-someone-who-is-skilled-and-experienced',
        permanent: true,
      },
      {
        source: '/welcome-earthside-payton-51-minute-birth-story',
        destination: '/post/welcome-earthside-payton-51-minute-birth-story',
        permanent: true,
      },
      {
        source: '/welcome-earthside-payton-51-minute-birth-story/',
        destination: '/post/welcome-earthside-payton-51-minute-birth-story',
        permanent: true,
      },
      {
        source: '/welcome-kayla-new-office-team-member',
        destination: '/post/welcome-kayla-new-office-team-member',
        permanent: true,
      },
      {
        source: '/welcome-kayla-new-office-team-member/',
        destination: '/post/welcome-kayla-new-office-team-member',
        permanent: true,
      },
      {
        source: '/well-this-was-a-fun-surprise%f0%9f%ab%a0',
        destination: '/post/well-this-was-a-fun-surprise%f0%9f%ab%a0',
        permanent: true,
      },
      {
        source: '/well-this-was-a-fun-surprise%f0%9f%ab%a0/',
        destination: '/post/well-this-was-a-fun-surprise%f0%9f%ab%a0',
        permanent: true,
      },
      {
        source:
          '/were-excited-to-share-that-we-are-expecting-a-baby-boy-this-june%f0%9f%a9%b5%e2%9c%a8a',
        destination:
          '/post/were-excited-to-share-that-we-are-expecting-a-baby-boy-this-june%f0%9f%a9%b5%e2%9c%a8a',
        permanent: true,
      },
      {
        source:
          '/were-excited-to-share-that-we-are-expecting-a-baby-boy-this-june%f0%9f%a9%b5%e2%9c%a8a/',
        destination:
          '/post/were-excited-to-share-that-we-are-expecting-a-baby-boy-this-june%f0%9f%a9%b5%e2%9c%a8a',
        permanent: true,
      },
      {
        source:
          '/what-does-heartbeat-midwifery-have-to-do-with-world-pilots-day',
        destination:
          '/post/what-does-heartbeat-midwifery-have-to-do-with-world-pilots-day',
        permanent: true,
      },
      {
        source:
          '/what-does-heartbeat-midwifery-have-to-do-with-world-pilots-day/',
        destination:
          '/post/what-does-heartbeat-midwifery-have-to-do-with-world-pilots-day',
        permanent: true,
      },
      {
        source:
          '/when-you-go-to-work-with-your-parents-you-must-wear-your-badge-too',
        destination:
          '/post/when-you-go-to-work-with-your-parents-you-must-wear-your-badge-too',
        permanent: true,
      },
      {
        source:
          '/when-you-go-to-work-with-your-parents-you-must-wear-your-badge-too/',
        destination:
          '/post/when-you-go-to-work-with-your-parents-you-must-wear-your-badge-too',
        permanent: true,
      },
      {
        source:
          '/when-you-really-want-the-midwife-to-do-your-foot-but-you-had-your-nbs-along-time-ago-and-it-wouldnt-be-so-fun-now',
        destination:
          '/post/when-you-really-want-the-midwife-to-do-your-foot-but-you-had-your-nbs-along-time-ago-and-it-wouldnt-be-so-fun-now',
        permanent: true,
      },
      {
        source:
          '/when-you-really-want-the-midwife-to-do-your-foot-but-you-had-your-nbs-along-time-ago-and-it-wouldnt-be-so-fun-now/',
        destination:
          '/post/when-you-really-want-the-midwife-to-do-your-foot-but-you-had-your-nbs-along-time-ago-and-it-wouldnt-be-so-fun-now',
        permanent: true,
      },
      {
        source:
          '/when-your-mom-has-been-a-midwife-your-entire-life-and-youve-grown-up-immersed-in-pregnancy-and-birth-there-is-no-better-way-to-play-pretend%f0%9f%98%82%f0%9f%a4%b0',
        destination:
          '/post/when-your-mom-has-been-a-midwife-your-entire-life-and-youve-grown-up-immersed-in-pregnancy-and-birth-there-is-no-better-way-to-play-pretend%f0%9f%98%82%f0%9f%a4%b0',
        permanent: true,
      },
      {
        source:
          '/when-your-mom-has-been-a-midwife-your-entire-life-and-youve-grown-up-immersed-in-pregnancy-and-birth-there-is-no-better-way-to-play-pretend%f0%9f%98%82%f0%9f%a4%b0/',
        destination:
          '/post/when-your-mom-has-been-a-midwife-your-entire-life-and-youve-grown-up-immersed-in-pregnancy-and-birth-there-is-no-better-way-to-play-pretend%f0%9f%98%82%f0%9f%a4%b0',
        permanent: true,
      },
      {
        source:
          '/while-walking-the-halls-here-at-heartbeat-youre-surrounded-by-precious-moments-and-memories-that-have-been-captured-to-treasure-forever',
        destination:
          '/post/while-walking-the-halls-here-at-heartbeat-youre-surrounded-by-precious-moments-and-memories-that-have-been-captured-to-treasure-forever',
        permanent: true,
      },
      {
        source:
          '/while-walking-the-halls-here-at-heartbeat-youre-surrounded-by-precious-moments-and-memories-that-have-been-captured-to-treasure-forever/',
        destination:
          '/post/while-walking-the-halls-here-at-heartbeat-youre-surrounded-by-precious-moments-and-memories-that-have-been-captured-to-treasure-forever',
        permanent: true,
      },
      {
        source: '/words-we-birth-by-birth-affirmations-mind-body-connection',
        destination:
          '/post/words-we-birth-by-birth-affirmations-mind-body-connection',
        permanent: true,
      },
      {
        source: '/words-we-birth-by-birth-affirmations-mind-body-connection/',
        destination:
          '/post/words-we-birth-by-birth-affirmations-mind-body-connection',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkCompressJsx],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
