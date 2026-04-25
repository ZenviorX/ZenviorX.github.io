import { walkwayAlbums, walkwayTimeline } from "./lightWalkwayData";

const totalAlbums = walkwayAlbums.length;
const totalPhotos = walkwayAlbums.reduce((sum, album) => sum + album.count, 0);
const activeYears = new Set(walkwayAlbums.map((album) => album.year)).size;

const walkwayStats = [
  { label: "ALBUMS", value: totalAlbums },
  { label: "PHOTOS", value: totalPhotos },
  { label: "YEARS", value: activeYears },
];

export default function LightWalkway() {
  return (
    <section id="walkway" className="mt-8">
      <div className="relative overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),rgba(255,255,255,0.28)_42%,rgba(255,255,255,0.12)_100%)] px-6 py-8 md:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-80px] top-[-40px] h-[260px] w-[260px] rounded-full bg-sky-200/20 blur-3xl" />
          <div className="absolute right-[8%] top-[10%] h-[180px] w-[180px] rounded-full bg-fuchsia-200/18 blur-3xl" />
          <div className="absolute left-[20%] bottom-[8%] h-[220px] w-[220px] rounded-full bg-cyan-100/18 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_100%)]" />
        </div>

        <div className="relative z-10">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div className="max-w-4xl">
              <div className="text-sm tracking-[0.28em] text-zinc-400">
                LIGHT WALKWAY
              </div>

              <h2 className="mt-4 text-[2.6rem] font-bold leading-none text-zinc-950 md:text-[4rem]">
                光影栈道
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-600 md:text-lg">
                不把照片当作一排规整的缩略图去陈列，而是让它们像散落在光线里的作品，
                以更缓慢、更有呼吸感的方式铺开。这里保留总站结构，但摄影内容拥有独立的观看节奏。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {walkwayStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] bg-white/48 px-5 py-4 backdrop-blur-[10px] shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    {item.label}
                  </div>
                  <div className="mt-3 text-[2rem] font-bold leading-none text-zinc-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="min-w-0 xl:pr-2">
              <div className="sticky top-24">
                <div className="mb-4 text-sm tracking-[0.24em] text-zinc-400">
                  TIMELINE
                </div>

                <div className="relative pl-5">
                  <div className="absolute left-[7px] top-1 bottom-1 w-px bg-zinc-300/85" />

                  <div className="space-y-3">
                    {walkwayTimeline.map((item) => (
                      <div key={`${item.date}-${item.title}`} className="relative">
                        <div className="absolute left-[-14px] top-[7px] h-3 w-3 rounded-full bg-sky-600 shadow-[0_0_0_4px_rgba(255,255,255,0.6)]" />

                        <div className="rounded-[18px] bg-white/44 px-4 py-3 backdrop-blur-[8px] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            {item.date}
                          </div>
                          <div className="mt-1 text-sm font-bold text-zinc-900">
                            {item.title}
                          </div>
                          <p className="mt-1 text-[13px] leading-5 text-zinc-500">
                            {item.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
                {walkwayAlbums.map((album, index) => (
                  <article
                    key={album.id}
                    className={`group relative ${
                      index % 5 === 0 ? "md:col-span-2 2xl:col-span-1" : ""
                    }`}
                  >
                    <div className="relative mx-auto w-full max-w-full">
                      <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-4 rotate-[3deg] rounded-[18px] bg-white/26 shadow-[0_12px_24px_rgba(15,23,42,0.06)]" />
                      <div className="pointer-events-none absolute inset-0 -translate-x-2 translate-y-2 -rotate-[2.5deg] rounded-[18px] bg-white/22 shadow-[0_10px_22px_rgba(15,23,42,0.05)]" />

                      <div className="relative overflow-hidden rounded-[18px] bg-white/70 p-3 shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition duration-500 group-hover:-translate-y-1">
                        <div className="relative aspect-[3/2] overflow-hidden rounded-[12px] bg-zinc-100">
                          <img
                            src={album.cover}
                            alt={album.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                          />

                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.38)_100%)]" />

                          <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/78 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-700 backdrop-blur-sm">
                            {album.date}
                          </div>
                        </div>

                        <div className="px-1 pb-1 pt-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                                {album.subtitle}
                              </div>
                              <h3 className="mt-1 text-[1.45rem] font-bold text-zinc-900">
                                {album.title}
                              </h3>
                            </div>

                            <div className="shrink-0 rounded-full bg-zinc-900/4 px-3 py-1 text-xs font-semibold text-zinc-600">
                              {album.count} 张
                            </div>
                          </div>

                          <div className="mt-3 text-sm text-zinc-500">
                            {album.location ?? "未标注地点"}
                          </div>

                          <p className="mt-3 text-sm leading-7 text-zinc-500">
                            {album.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}