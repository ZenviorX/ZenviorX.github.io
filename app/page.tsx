import Link from "next/link";
import StatusBar from "./components/StatusBar";

const featuredCards = [
  {
    title: "网络安全学习记录",
    desc: "整理密码学、CTF、Web 安全与实验过程中的笔记、问题和思考。",
    tag: "Study",
  },
  {
    title: "课程实验整理",
    desc: "把实验流程、代码修改点、调试过程与报告写作内容做成清晰归档。",
    tag: "Lab",
  },
  {
    title: "光影栈道",
    desc: "以独立页面的方式承载摄影内容，让它成为站点里的一条视觉分支。",
    tag: "Walkway",
  },
];

export default function Home() {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[1.55fr_0.6fr] lg:items-stretch">
        <div className="glass-panel-light glass-panel-strong h-full rounded-[28px] p-6 md:p-7">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Personal Homepage
          </p>

          <h1 className="hero-title max-w-3xl">
            你好，我是
            <span className="ml-3 hero-title-accent">ZenviorX</span>
          </h1>

          <p className="mt-6 max-w-[46rem] text-base leading-8 text-zinc-600 md:text-lg">
            这里是我的个人主页。我希望它既能承载网络安全学习记录，
            也能展示摄影作品、课程实验与个人表达。当前版本正在逐步走向更完整、
            更统一、也更有气质的视觉与内容结构。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/walkway"
              className="rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(3,105,161,0.22)] transition hover:scale-[1.02] hover:bg-sky-800"
            >
              进入光影栈道
            </Link>

            <a
              href="#featured"
              className="rounded-2xl border border-white/60 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white/75"
            >
              查看首页内容
            </a>
          </div>

          <div id="about" className="mt-10">
            <div className="mb-4 text-sm text-zinc-500">关于这个主页</div>
            <h2 className="max-w-4xl text-[1.7rem] font-bold leading-[1.15] text-sky-700 md:text-[2.1rem]">
              不只是展示页，更像一个会持续生长的个人空间
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-600 md:text-lg">
              我不希望这个网站只是把个人信息简单堆上去。
              我更想让它逐渐变成一个有连续性、有审美、也有内容沉淀的空间：
              可以记录学习，整理项目，也可以展示摄影和生活中的观察。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-panel-light glass-panel-strong flex h-full flex-col rounded-[28px] p-5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/avatar.jpg"
                alt="avatar"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 flex-1">
              <h2 className="text-center text-3xl font-bold text-sky-700">
                ZenviorX
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                穿梭于代码与网络安全之间，也喜欢用镜头记录生活里的光影和风景。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <StatusBar />
      </section>

      <section id="featured" className="mt-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="text-sm text-zinc-500">Featured</div>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">
              首页内容区
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredCards.map((card) => (
            <article
              key={card.title}
              className="glass-panel-light glass-panel-strong rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs text-sky-700">
                {card.tag}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel-light glass-panel-strong rounded-[28px] p-8">
          <div className="mb-4 text-sm text-zinc-500">Walkway Entry</div>
          <h2 className="text-3xl font-bold text-zinc-900">
            光影栈道是一条独立的视觉支线
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
            它不再是首页里的一段附属区块，而是作为总站中的独立路径展开。
            你可以从顶部导航直接切换进入，像浏览不同频道一样自然。
          </p>
          <Link
            href="/walkway"
            className="mt-6 inline-flex rounded-2xl border border-white/60 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-white/75"
          >
            前往光影栈道
          </Link>
        </div>

        <div
          className="glass-panel-light glass-panel-strong rounded-[28px] p-8"
          id="contact"
        >
          <div className="mb-4 text-sm text-zinc-500">Contact</div>
          <h2 className="text-2xl font-bold text-zinc-900">联系方式</h2>
          <div className="mt-5 space-y-3 text-sm text-zinc-600">
            <p>GitHub：后续替换成你的真实仓库或个人主页链接</p>
            <p>邮箱：zenviorx@163.com</p>
            <p>说明：这一版先把整体视觉和结构打稳，后续再继续扩展内容。</p>
          </div>
        </div>
      </section>
    </>
  );
}