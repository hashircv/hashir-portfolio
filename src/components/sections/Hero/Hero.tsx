import { ArrowDownRight, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../../../data/profile';
import { fadeUp, stagger } from '../../../lib/motion';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';
import { SocialLinks } from '../../ui/SocialLinks';
import { HeroPortrait } from './HeroPortrait';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40">
      <Container>
        <motion.div
          className="grid items-center gap-x-16 gap-y-9 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-x-24"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase leading-5 tracking-[.16em] text-accent-500 sm:text-xs sm:tracking-[.18em]"
            >
              <span className="h-px w-7 shrink-0 bg-accent-500 sm:w-8" />
              {profile.availability}
            </motion.div>
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="mb-6 flex items-center gap-3 min-[375px]:gap-4 lg:mb-4"
            >
              <div className="lg:hidden">
                <HeroPortrait compact />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[.04em] text-ink-950">{profile.name}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-ink-800/45 lg:hidden">
                  {profile.role}
                </p>
              </div>
            </motion.div>
            <motion.h1
              variants={reduce ? undefined : fadeUp}
              className="max-w-4xl text-balance font-display text-[2.9rem] leading-[.98] tracking-[-.045em] text-ink-950 min-[375px]:text-[3.3rem] sm:text-7xl lg:text-[5.3rem] xl:text-[6.2rem]"
            >
              Software built with clarity, purpose, and care.
            </motion.h1>
          </div>

          {profile.imageUrl && (
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block"
            >
              <div className="relative lg:-top-32 lg:-translate-x-16">
                <HeroPortrait />
              </div>
            </motion.div>
          )}

          <div className="min-w-0 lg:col-start-1 lg:row-start-2">
            <motion.p
              variants={reduce ? undefined : fadeUp}
              className="max-w-2xl text-pretty text-base leading-7 text-ink-800/75 sm:text-lg"
            >
              {profile.role} and {profile.eyebrow.toLowerCase()} focused on responsive interfaces,
              dependable backend services, and maintainable full-stack products.
            </motion.p>
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="mt-8 flex flex-col gap-3 min-[430px]:flex-row"
            >
              <Button href="#projects">
                Explore my work <ArrowDownRight size={18} />
              </Button>
              {profile.resumeUrl && (
                <Button href={profile.resumeUrl} variant="secondary" download>
                  Download resume <Download size={17} />
                </Button>
              )}
            </motion.div>
            <motion.div variants={reduce ? undefined : fadeUp} className="mt-7">
              <SocialLinks showLabels />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
