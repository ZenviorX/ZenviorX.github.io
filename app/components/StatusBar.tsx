"use client";

import { useEffect, useMemo, useState } from "react";

function pad(num: number) {
  return String(num).padStart(2, "0");
}

function formatNow(date: Date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

function getUptimeParts(startDate: Date, now: Date) {
  let diff = now.getTime() - startDate.getTime();
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function StatusBar() {
  const [now, setNow] = useState(new Date());
  const [dotStep, setDotStep] = useState(0);
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const dotTimer = window.setInterval(() => {
      setDotStep((prev) => (prev + 1) % 4);
    }, 450);

    return () => window.clearInterval(dotTimer);
  }, []);

  const { days, hours, minutes, seconds } = getUptimeParts(startDate, now);

  return (
    <div className="glass-panel-light rounded-[28px] p-4 md:p-5">
      <div className="grid gap-5 md:grid-cols-[450px_1fr] md:items-center">
        <div className="rounded-2xl border border-white/70 bg-white/72 px-5 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-medium text-zinc-500">站点状态</div>

          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-[2.8rem] font-bold leading-none text-sky-700 md:text-[3rem]">
              {formatNow(now)}
            </div>

            <div className="min-w-0 md:pl-4">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <img
                  src="/icon/heart.svg"
                  alt="Heart"
                  className="h-5 w-5 animate-pulse"
                />
                <span className="font-medium whitespace-nowrap">
                  系统稳定运行中
                </span>
              </div>

              <div className="mt-2 text-base font-semibold leading-6 text-zinc-800 whitespace-nowrap">
                {days} 天 {hours} 小时 {minutes} 分 {seconds} 秒
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="flex items-center text-[2rem] font-bold text-black md:text-[2.25rem]">
            <span>正在持续搭建中</span>
            <span className="ml-1 inline-flex w-[1.8em] justify-start">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`transition-opacity duration-300 ${
                    dotStep > i ? "opacity-100" : "opacity-20"
                  }`}
                >
                  .
                </span>
              ))}
            </span>
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-500 md:text-base">
            当前首页与画廊基础结构已经完成，后续会继续加入文章归档、实验整理、
            项目详情与更多动态效果。
          </p>
        </div>
      </div>
    </div>
  );
}