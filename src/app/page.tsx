import Image from "next/image";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Clapperboard,
  ExternalLink,
  Factory,
  Layers3,
  Mail,
  Megaphone,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

const services = [
  {
    title: "SNS運用代行",
    description:
      "戦略設計から企画、制作、投稿、改善まで、ブランドの温度を保った運用体制を構築します。",
    icon: Megaphone,
  },
  {
    title: "SNS内製化支援",
    description:
      "属人的な投稿から脱却し、社内で再現できる編集会議、制作フロー、分析習慣を実装します。",
    icon: Layers3,
  },
  {
    title: "採用支援",
    description:
      "候補者に届く言葉、職場の見え方、応募後の体験まで整え、採用広報を事業資産に変えます。",
    icon: UsersRound,
  },
  {
    title: "動画制作",
    description:
      "短尺SNS動画から採用・ブランドムービーまで、伝えるべき価値が残る映像を設計します。",
    icon: Clapperboard,
  },
  {
    title: "AI活用支援",
    description:
      "企画、制作、分析、営業、採用の現場にAIを組み込み、少人数でも強い運用基盤をつくります。",
    icon: Bot,
  },
];

const caseStudies = [
  {
    category: "Local Brand",
    title: "地域ブランドのSNS運用基盤化",
    result: "投稿企画と制作導線を整理し、継続的に発信できる編集体制へ。",
    icon: Factory,
  },
  {
    category: "Recruiting",
    title: "採用広報の言語化と動画展開",
    result: "働く魅力を候補者視点で再構成し、面談前の理解度を向上。",
    icon: BriefcaseBusiness,
  },
  {
    category: "AI Operation",
    title: "制作チームのAIワークフロー導入",
    result: "企画案、台本、改善レポートの初速を上げ、品質管理に時間を再配分。",
    icon: Sparkles,
  },
];

const principles = ["埋もれた価値を発見する", "伝わる文脈へ編集する", "継続できる仕組みにする"];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="合同会社PN">
            <span className="grid size-9 place-items-center bg-ink text-sm font-semibold text-paper">
              PN
            </span>
            <span className="text-sm font-semibold text-ink">合同会社PN</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-smoke md:flex">
            <a href="#services" className="transition hover:text-ink">
              Service
            </a>
            <a href="#cases" className="transition hover:text-ink">
              Case
            </a>
            <a href="#founder" className="transition hover:text-ink">
              Founder
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex size-10 items-center justify-center bg-cedar text-paper transition hover:bg-ink"
            aria-label="お問い合わせへ"
            title="お問い合わせへ"
          >
            <Mail size={18} />
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[92svh] pt-16">
        <Image
          src="/images/pn-hero.png"
          alt="PNの発信資本経営を象徴する抽象的なビジュアル"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-paper/20" />
        <div className="absolute inset-0 soft-grid opacity-40" />
        <div className="section-shell relative flex min-h-[calc(92svh-4rem)] items-center py-16">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 border border-ink/15 bg-paper/70 px-4 py-2 text-sm font-semibold text-cedar backdrop-blur">
              <Target size={16} />
              発信資本経営支援会社
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.12] text-ink sm:text-6xl lg:text-7xl">
              良いモノ・人・文化を
              <br />
              埋もれさせない
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-smoke sm:text-xl">
              合同会社PNは、SNS・採用・動画・AIを横断し、企業の価値が届き続ける仕組みをつくる会社です。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-cedar"
              >
                相談する
                <ArrowRight size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/20 bg-paper/70 px-6 text-sm font-semibold text-ink backdrop-blur transition hover:border-ink"
              >
                支援領域を見る
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink py-8 text-paper">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item} className="flex items-center gap-3 text-base font-semibold">
              <CheckCircle2 className="shrink-0 text-brass" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-brass">Service</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            発信を、成果が積み上がる経営資本へ。
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="border border-ink/10 bg-white/72 p-6 shadow-soft backdrop-blur lg:min-h-[300px]"
              >
                <Icon className="mb-8 text-cedar" size={28} />
                <h3 className="text-xl font-semibold leading-snug text-ink">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-smoke">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="cases" className="bg-mist py-24">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-cedar">Case Study</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                事業の現場に合わせて、発信の型を設計する。
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-smoke">
              業種や規模に合わせ、外注・内製・AI活用の最適な組み合わせを選びます。
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <article key={study.title} className="bg-paper p-7">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase text-brass">{study.category}</p>
                    <Icon className="text-cedar" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold leading-snug text-ink">{study.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-smoke">{study.result}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="founder" className="section-shell grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="border border-ink/10 bg-ink p-8 text-paper">
          <p className="text-sm font-semibold uppercase text-brass">Founder</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
            価値が届くまで、編集し続ける。
          </h2>
          <p className="mt-7 text-base leading-8 text-paper/75">
            PNは、発信を単発の投稿や制作物で終わらせません。会社の強み、働く人の魅力、地域や文化の背景を掘り起こし、伝わる言葉と運用の仕組みに変えていきます。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ["Role", "代表 / 発信資本プロデューサー"],
            ["Focus", "SNS・採用・動画・AIの横断設計"],
            ["Style", "現場理解、編集力、仕組み化"],
            ["Promise", "埋もれた価値を、届く状態にする"],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-ink/15 pt-5">
              <p className="text-xs font-semibold uppercase text-brass">{label}</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cedar py-20 text-paper">
        <div className="section-shell flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-brass">CTA</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              発信を、会社の次の成長基盤に。
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-6 text-sm font-semibold text-cedar transition hover:bg-brass hover:text-ink"
          >
            問い合わせる
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section id="contact" className="section-shell py-24">
        <div className="grid gap-10 border-y border-ink/15 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-brass">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              まずは、事業の現在地を聞かせてください。
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-8 text-smoke">
              SNS運用、採用広報、動画制作、AI導入、内製化の相談を受け付けています。現状の課題や目指したい状態をもとに、最適な支援範囲を整理します。
            </p>
            <a
              href="mailto:hello@pn-llc.jp?subject=%E5%90%88%E5%90%8C%E4%BC%9A%E7%A4%BEPN%E3%81%B8%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-cedar"
            >
              <Mail size={17} />
              メールで相談する
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 py-8">
        <div className="section-shell flex flex-col justify-between gap-4 text-sm text-smoke sm:flex-row">
          <p>合同会社PN</p>
          <p>© PN LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
