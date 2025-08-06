import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const Logos = {
  sierra: () => (
    <Image
      src="/logos/67eaba51b7620ac253dba85c_logoSierra.avif"
      alt="Sierra"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  zoo: () => (
    <Image
      src="/logos/67eabac4f8e0aa847782729e_logoZOO.avif"
      alt="ZOO"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  gotJunk: () => (
    <Image
      src="/logos/67eabaeebbb8a2dd8d607eeb_logo1-800-got-junk_.avif"
      alt="1-800-GOT-JUNK"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  dreisbach: () => (
    <Image
      src="/logos/67eabb10a7f1659a0d81a9de_logoDreisbach.avif"
      alt="Dreisbach"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  northCrossSchool: () => (
    <Image
      src="/logos/67eabb42d0526e23f5882d61_logoNorthCrossSchool.avif"
      alt="North Cross School"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  snotemp: () => (
    <Image
      src="/logos/67eabb80c2a79a47c0431320_logoSnotemp.avif"
      alt="Snotemp"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  nadc: () => (
    <Image
      src="/logos/67eabba6d7e6e412bad0552b_logoNADC.avif"
      alt="NADC"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  cooke: () => (
    <Image
      src="/logos/67eabbd3dc050d90a74b29dc_logoCooke.avif"
      alt="Cooke"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  usop: () => (
    <Image
      src="/logos/67eabe2129beaa866ea7770f_logoUsop.avif"
      alt="Usop"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  vc8: () => (
    <Image
      src="/logos/67eabe5f824c009c87e94ca5_logo8VC.avif"
      alt="8VC"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  horizon: () => (
    <Image
      src="/logos/67eabead7bba22f120f4d406_logoHorizon.avif"
      alt="Horizon"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  charltonCountySchools: () => (
    <Image
      src="/logos/67eabf034fd81448db16b02f_logoCharltonCountySchools.avif"
      alt="Charlton County Schools"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  chRobinson: () => (
    <Image
      src="/logos/67eabf2c3d600c7d221c4fc1_logoCHRobinson.avif"
      alt="CH Robinson"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  hyLok: () => (
    <Image
      src="/logos/67eabf58dfd60532b543d6b9_logoHy-lok.avif"
      alt="Hy-lok"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  jitsu: () => (
    <Image
      src="/logos/67ebff8e1a926f391a1cf6b7_logoJitsu.avif"
      alt="Jitsu"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  poc: () => (
    <Image
      src="/logos/67ec06c386d5abccaf3d7733_logoPOC.avif"
      alt="POC"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  ridgecrest: () => (
    <Image
      src="/logos/67ec06ea48e781769343ddd4_logoRidgecrest.avif"
      alt="Ridgecrest"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  daffodil: () => (
    <Image
      src="/logos/67ec072f80016b5e4530bcff_logoDaffodil-2.avif"
      alt="Daffodil"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  middletownSchool: () => (
    <Image
      src="/logos/67ec080b4364cee51a3aa3c1_logoMiddletownSchool-2.avif"
      alt="Middletown School"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
  lakepointe: () => (
    <Image
      src="/logos/67ed35c5fb12ce1d847668c7_logolakepointe.avif"
      alt="Lake Pointe"
      width={120}
      height={40}
      className="h-12 sm:h-16 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
    />
  ),
};

export function MarqueeDemo() {
  const arr = [
    Logos.sierra,
    Logos.zoo,
    Logos.gotJunk,
    Logos.dreisbach,
    Logos.northCrossSchool,
    Logos.snotemp,
    Logos.nadc,
    Logos.cooke,
    Logos.usop,
    Logos.vc8,
    Logos.horizon,
    Logos.charltonCountySchools,
    Logos.chRobinson,
    Logos.hyLok,
    Logos.jitsu,
    Logos.poc,
    Logos.ridgecrest,
    Logos.daffodil,
    Logos.middletownSchool,
    Logos.lakepointe
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-bold mb-8 text-gray-900">Trusted by Industry Leaders</h3>
        <div className="marquee-container min-h-[80px] flex items-center">
          <Marquee speed={60} className="py-6" pauseOnHover={true}>
              {arr.map((Logo, index) => (
                <div
                  key={index}
                  className="relative h-20 w-fit mx-8 flex items-center justify-center"
                >
                  <Logo />
                </div>
              ))}
            </Marquee>
        </div>
      </div>
    </div>
  )
}
