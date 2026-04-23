export type WalkwayShot = {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  className?: string;
  height: string;
};

export const walkwayShots: WalkwayShot[] = [
  {
    title: "校道余光",
    subtitle: "STEP 01",
    desc: "把最熟悉的校园、街口和天色收进同一条视觉路径里。",
    image: "/images/light-01.jpg",
    className: "md:col-span-2",
    height: "h-[280px]",
  },
  {
    title: "风从桥面经过",
    subtitle: "STEP 02",
    desc: "画面不必拥挤，留白本身也是光线的一部分。",
    image: "/images/light-02.jpg",
    className: "",
    height: "h-[220px]",
  },
  {
    title: "晚灯落下来",
    subtitle: "STEP 03",
    desc: "偏冷的光、偏慢的节奏，适合放在栈道中段。",
    image: "/images/light-03.jpg",
    className: "",
    height: "h-[220px]",
  },
  {
    title: "远处正在变蓝",
    subtitle: "STEP 04",
    desc: "把日常的光影分成几个片段，让人像散步一样往下看。",
    image: "/images/light-04.jpg",
    className: "",
    height: "h-[230px]",
  },
  {
    title: "风景停在拐角",
    subtitle: "STEP 05",
    desc: "让摄影内容成为站点里的一条独立支路，而不是首页的延伸堆叠。",
    image: "/images/light-05.jpg",
    className: "",
    height: "h-[230px]",
  },
];

export const walkwayNotes = [
  "光影栈道是独立页面，但仍然处在同一套顶部导航结构里。",
  "它像主站中的一条分支路径，而不是长主页中的附属区块。",
  "后续可以继续加入时间、地点、器材和拍摄小记。",
];