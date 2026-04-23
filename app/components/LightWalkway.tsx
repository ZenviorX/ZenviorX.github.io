import { walkwayNotes, walkwayShots } from "./lightWalkwayData";

export default function LightWalkway() {
  return (
    <section id="walkway" className="mt-2">
      <div className="glass-panel-light rounded-[32px] p-6 md:p-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm tracking-[0.26em] text-zinc-400">
              LIGHT WALKWAY
            </div>
            <h2 className="mt-3 text-[2.2rem] font-bold leading-tight text-zinc-900 md:text-[3.2rem]">
              光影栈道
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              这里不再是首页里的一段附加内容，而是一条独立展开的视觉路径。
              你可以把它理解成总站中的一段支线：仍然共用同一个顶栏和骨架，
              但内容本身拥有更完整、更沉浸的浏览节奏。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/70 bg-white/72 px-4 py-4">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Path
              </div>
              <div className="mt-2 text-lg font-semibold text-zinc-900">
                独立路由
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/72 px-4 py-4">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Mood
              </div>
              <div className="mt-2 text-lg font-semibold text-zinc-900">
                慢速浏览
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/72 px-4 py-4">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Next
              </div>
              <div className="mt-2 text-lg font-semibold text-zinc-900">
                分类归档
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.58)_100%)] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              <div className="text-sm text-zinc-500">栈道说明</div>
              <h3 className="mt-3 text-[1.6rem] font-bold leading-tight text-zinc-900">
                让摄影成为站点中的一条独立路径
              </h3>
              <p className="mt-4 text-sm leading-8 text-zinc-600 md:text-base">
                “栈道”这个名字比“画廊”更有过程感。它不只是展示照片，
                而是把光线、风景、时间和观看节奏连接起来，让摄影内容像空间的一部分，
                但又拥有独立的展开方式。
              </p>
            </div>

            <div className="rounded-[28px] border border-white/70 bg-white/72 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              <div className="text-sm text-zinc-500">漫游提示</div>
              <div className="mt-4 space-y-4">
                {walkwayNotes.map((note, index) => (
                  <div
                    key={note}
                    className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-4"
                  >
                    <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-bold text-sky-700">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-zinc-600">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {walkwayShots.map((shot) => (
              <article
                key={shot.title}
                className={`group overflow-hidden rounded-[28px] border border-white/70 bg-white/72 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 ${shot.className ?? ""}`}
              >
                <div className={`relative overflow-hidden ${shot.height}`}>
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.55)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-700 backdrop-blur-sm">
                    {shot.subtitle}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-[1.35rem] font-bold text-white">
                      {shot.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 py-4">
                  <p className="text-sm leading-7 text-zinc-500">{shot.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}