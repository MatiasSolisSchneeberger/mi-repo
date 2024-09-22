import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as renderComponent, f as renderTransition, g as renderHead } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
/* empty css                         */

const $$Astro$f = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonPrimario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ButtonPrimario;
  const { href, era, icono } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "hover:shadow-sm rounded-[100px] flex flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-600 hover:shadow-debut-900 hover:bg-debut-500 dark:bg-debut-200 dark:hover:shadow-debut-950 dark:hover:bg-debut-300": era === "debut",
      "bg-fearless-600 hover:shadow-fearless-900 hover:bg-fearless-500 dark:bg-fearless-200 dark:hover:shadow-fearless-950 dark:hover:bg-fearless-300": era === "fearless",
      "bg-speakNow-600 hover:shadow-speakNow-900 hover:bg-speakNow-500 dark:bg-speakNow-200 dark:hover:shadow-speakNow-950 dark:hover:bg-speakNow-300": era === "speakNow",
      "bg-red-600 hover:shadow-red-900 hover:bg-red-500 dark:bg-red-200 dark:hover:shadow-red-950 dark:hover:bg-red-300": era === "red",
      "bg-1989-600 hover:shadow-1989-900 hover:bg-1989-500 dark:bg-1989-200 dark:hover:shadow-1989-950 dark:hover:bg-1989-300": era === "1989",
      "bg-reputation-600 hover:shadow-reputation-900 hover:bg-reputation-500 dark:bg-reputation-200 dark:hover:shadow-reputation-950 dark:hover:bg-reputation-300": era === "reputation",
      "bg-lover-600 hover:shadow-lover-900 hover:bg-lover-500 dark:bg-lover-200 dark:hover:shadow-lover-950 dark:hover:bg-lover-300": era === "lover",
      "bg-folklore-600 hover:shadow-folklore-900 hover:bg-folklore-500 dark:bg-folklore-200 dark:hover:shadow-folklore-950 dark:hover:bg-folklore-300": era === "folklore",
      "bg-evermore-600 hover:shadow-evermore-900 hover:bg-evermore-500 dark:bg-evermore-200 dark:hover:shadow-evermore-950 dark:hover:bg-evermore-300": era === "evermore",
      "bg-midnights-600 hover:shadow-midnights-900 hover:bg-midnights-500 dark:bg-midnights-200 dark:hover:shadow-midnights-950 dark:hover:bg-midnights-300": era === "midnights",
      "bg-TTPD-600 hover:shadow-TTPD-900 hover:bg-TTPD-500 dark:bg-TTPD-200 dark:hover:shadow-TTPD-950 dark:hover:bg-TTPD-300": era === "TTPD",
      "bg-mashup-600 hover:shadow-mashup-900 hover:bg-mashup-500 dark:bg-mashup-200 dark:hover:shadow-mashup-950 dark:hover:bg-mashup-300": era === "mashup"
    }
  ], "class:list")}> <div${addAttribute([
    "py-2.5 flex flex-row gap-2 items-center justify-center self-stretch flex-1 relative",
    {
      "pl-4 pr-6": icono === "Izq",
      "px-6": icono === null,
      "pl-6 pr-4": icono === "Der"
    }
  ], "class:list")}> ${renderSlot($$result, $$slots["before"])} <p${addAttribute([
    "cursor-pointer text-center text-title-small relative flex items-center justify-center",
    {
      "text-debut-50 dark:text-debut-600": era === "debut",
      "text-fearless-50 dark:text-fearless-600": era === "fearless",
      "text-speakNow-50 dark:text-speakNow-600": era === "speakNow",
      "text-red-50 dark:text-red-600": era === "red",
      "text-1989-50 dark:text-1989-600": era === "1989",
      "text-reputation-50 dark:text-reputation-600": era === "reputation",
      "text-lover-50 dark:text-lover-600": era === "lover",
      "text-folklore-50 dark:text-folklore-600": era === "folklore",
      "text-evermore-50 dark:text-evermore-600": era === "evermore",
      "text-midnights-50 dark:text-midnights-600": era === "midnights",
      "text-TTPD-50 dark:text-TTPD-600": era === "TTPD",
      "text-mashup-50 dark:text-mashup-600": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)"> ${renderSlot($$result, $$slots["default"])} </p> ${renderSlot($$result, $$slots["after"])} </div> </a>`;
}, "/home/user/mi-repo/src/components/ButtonPrimario.astro", void 0);

const $$Astro$e = createAstro("https:matiassolisschneeberger.github.io");
const $$Titulo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Titulo;
  const { era, titulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative", [
    {
      "text-debut-900 dark:text-debut-100": era === "debut",
      "text-fearless-900 dark:text-fearless-100": era === "fearless",
      "text-speakNow-900 dark:text-speakNow-100": era === "speakNow",
      "text-red-900 dark:text-red-100": era === "red",
      "text-1989-900 dark:text-1989-100": era === "1989",
      "text-reputation-900 dark:text-reputation-100": era === "reputation",
      "text-lover-900 dark:text-lover-100": era === "lover",
      "text-folklore-900 dark:text-folklore-100": era === "folklore",
      "text-evermore-900 dark:text-evermore-100": era === "evermore",
      "text-midnights-900 dark:text-midnights-100": era === "midnights",
      "text-TTPD-900 dark:text-TTPD-100": era === "TTPD",
      "text-mashup-900 dark:text-mashup-100": era === "mashup"
    }
  ]], "class:list")}> <h2 class="text-center text-display-medium relative self-stretch"> ${titulo} </h2> <p class="text-start text-body-large relative self-stretch" style="letter-spacing: var(--title-medium-letter-spacing, 0.15px)"> ${renderSlot($$result, $$slots["default"])} </p> </section>`;
}, "/home/user/mi-repo/src/components/Titulo.astro", void 0);

const $$Astro$d = createAstro("https:matiassolisschneeberger.github.io");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/user/mi-repo/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$c = createAstro("https:matiassolisschneeberger.github.io");
const $$ArrowUpSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ArrowUpSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-arrow-up", [
    "group-hover:-translate-y-1 transition-all",
    {
      "stroke-debut-800      dark:stroke-debut-100": era === "debut",
      "stroke-fearless-800   dark:stroke-fearless-100": era === "fearless",
      "stroke-speakNow-800   dark:stroke-speakNow-100": era === "speakNow",
      "stroke-red-800        dark:stroke-red-100": era === "red",
      "stroke-1989-800       dark:stroke-1989-100": era === "1989",
      "stroke-reputation-800 dark:stroke-reputation-100": era === "reputation",
      "stroke-lover-800      dark:stroke-lover-100": era === "lover",
      "stroke-folklore-800   dark:stroke-folklore-100": era === "folklore",
      "stroke-evermore-800   dark:stroke-evermore-100": era === "evermore",
      "stroke-midnights-800  dark:stroke-midnights-100": era === "midnights",
      "stroke-TTPD-800       dark:stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-800     dark:stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 5l0 14"></path> <path d="M18 11l-6 -6"></path> <path d="M6 11l6 -6"></path> </svg> <!--  -->`;
}, "/home/user/mi-repo/src/components/svg/ArrowUpSVG.astro", void 0);

const $$Astro$b = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonToUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ButtonToUp;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="scrollToTop" class="group z-50 shadow-sm hover:shadow-lg fixed bottom-2 right-2 transition-all duration-125 ease-in-out cursor-pointer"> <button aria-label="Scroll to Top Icon"${addAttribute([
    "shadow-sm flex hover:shadow-lg fixed size-14 bottom-2 right-2 cursor-default items-center justify-center rounded-2xl",
    {
      "bg-debut-300 hover:bg-debut-400 dark:bg-debut-600 hover:dark:bg-debut-500": era === "debut",
      "bg-fearless-300 hover:bg-fearless-400 dark:bg-fearless-600 hover:dark:bg-fearless-500": era === "fearless",
      "bg-speakNow-300 hover:bg-speakNow-400 dark:bg-speakNow-600 hover:dark:bg-speakNow-500": era === "speakNow",
      "bg-red-300 hover:bg-red-400 dark:bg-red-600 hover:dark:bg-red-500": era === "red",
      "bg-1989-300 hover:bg-1989-400 dark:bg-1989-600 hover:dark:bg-1989-500": era === "1989",
      "bg-reputation-300 hover:bg-reputation-400 dark:bg-reputation-600 hover:dark:bg-reputation-500": era === "reputation",
      "bg-lover-300 hover:bg-lover-400 dark:bg-lover-600 hover:dark:bg-lover-500": era === "lover",
      "bg-folklore-300 hover:bg-folklore-400 dark:bg-folklore-600 hover:dark:bg-folklore-500": era === "folklore",
      "bg-evermore-300 hover:bg-evermore-400 dark:bg-evermore-600 hover:dark:bg-evermore-500": era === "evermore",
      "bg-midnights-300 hover:bg-midnights-400 dark:bg-midnights-600 hover:dark:bg-midnights-500": era === "midnights",
      "bg-TTPD-300 hover:bg-TTPD-400 dark:bg-TTPD-600 hover:dark:bg-TTPD-500": era === "TTPD",
      "bg-mashup-300 hover:bg-mashup-400 dark:bg-mashup-600 hover:dark:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "ArrowUpSVG", $$ArrowUpSVG, { "era": era })} </button> </div> `;
}, "/home/user/mi-repo/src/components/ButtonToUp.astro", void 0);

const $$Astro$a = createAstro("https:matiassolisschneeberger.github.io");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Logo;
  const { era } = Astro2.props;
  const background = {
    debut: "#C3DAC0",
    fearless: "#f8e6cd",
    speakNow: "#f3eff4",
    red: "#f9ebea",
    "1989": "#e2f4fc",
    reputation: "#efefef",
    lover: "#fbe8f0",
    folklore: "#ecebe8",
    evermore: "#f1ebe3",
    midnights: "#e2ecf7",
    TTPD: "#e5e3dc",
    mashup: "#ffcfc9"
  };
  const text = {
    debut: "#1D371F",
    fearless: "#6d241a",
    speakNow: "#5d3e5d",
    red: "#6f2c38",
    "1989": "#124d68",
    reputation: "#3e3c3c",
    lover: "#801b35",
    folklore: "#4d4641",
    evermore: "#584036",
    midnights: "#354873",
    TTPD: "#493f3a",
    mashup: "#80261c"
  };
  const colorBg = background[era] || "#ffffff";
  const colorText = text[era] || "#000000";
  return renderTemplate`${maybeRenderHead()}<a href="/swifties-eras-tour"> <svg class="block" width="90" height="48" viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="90" height="48" rx="4"${addAttribute(colorBg, "fill")}></rect> <path d="M10.584 22.932C11.1417 22.932 11.6324 22.6886 12.0562 22.2018C12.4912 21.715 12.7087 20.9847 12.7087 20.0111C12.7087 19.0194 12.4745 18.2621 12.0061 17.7393C11.5488 17.2164 10.8907 16.7656 10.0319 16.387C9.18427 15.9903 8.56526 15.6477 8.17489 15.3592C7.79568 15.0707 7.4332 14.6921 7.08745 14.2233C6.39594 13.2857 6.05019 11.8343 6.05019 9.86893C6.05019 8.26422 6.40152 6.88488 7.10418 5.73093C7.81799 4.57698 8.78833 4 10.0152 4C10.6063 4 11.2197 4.14424 11.8555 4.43273C12.5024 4.70319 12.9039 4.83842 13.06 4.83842C13.2162 4.83842 13.3556 4.65811 13.4783 4.2975H13.6623L13.7794 9.76075H13.5117C12.9764 8.19209 12.4131 6.93897 11.822 6.00139C11.2421 5.04577 10.6063 4.56796 9.91481 4.56796C9.23446 4.56796 8.70468 4.8294 8.32546 5.35229C7.94625 5.85714 7.75664 6.5423 7.75664 7.40777C7.75664 8.2552 7.97971 8.91331 8.42584 9.38211C8.88313 9.83287 9.44079 10.2025 10.0988 10.491C10.7569 10.7795 11.1863 10.9778 11.387 11.086C11.599 11.1942 11.8555 11.3474 12.1566 11.5458C12.4689 11.7261 12.7199 11.9244 12.9095 12.1408C13.1102 12.3391 13.3166 12.6006 13.5285 12.9251C13.7515 13.2316 13.9244 13.5742 14.0471 13.9528C14.3482 14.8183 14.4988 15.846 14.4988 17.0361C14.4988 18.9834 14.1196 20.552 13.3612 21.742C12.6139 22.914 11.6268 23.5 10.4 23.5C9.76424 23.5 9.0337 23.3648 8.20835 23.0943C7.39416 22.8239 6.94245 22.6886 6.85323 22.6886C6.69708 22.6886 6.54651 22.9591 6.40152 23.5H6.1673L6 17.0631H6.28441C6.77515 18.6318 7.39974 20.0021 8.15816 21.1741C8.92774 22.346 9.73636 22.932 10.584 22.932Z"${addAttribute(colorText, "fill")}></path> <path d="M21.6019 17.7663L22.9904 9.97712L21.9866 4.81137H21.033V4.2975H26.2193V4.81137H25.2323L27.725 17.604L29.7326 4.81137H28.0429V4.2975H31.3889V4.81137H30.2847L27.2064 23.5H25.7174L23.2414 11.2753L21.0665 23.5H19.611L15.395 4.81137H14.6087V4.2975H20.046V4.81137H18.8749L21.6019 17.7663Z"${addAttribute(colorText, "fill")}></path> <path d="M31.9016 4.2975H37.0043V4.81137H36.0841V22.7157H37.0043V23.2295H31.9016V22.7157H32.8218V4.81137H31.9016V4.2975Z"${addAttribute(colorText, "fill")}></path> <path d="M37.7817 4.2975H46.4813L46.6486 9.92302H46.3474C45.9347 7.97573 45.4552 6.65049 44.9086 5.94729C44.3733 5.2441 43.5702 4.89251 42.4995 4.89251H42.0311V13.6824H42.7839C43.3193 13.6824 43.7654 13.3669 44.1223 12.7358C44.4792 12.1047 44.7246 11.2393 44.8585 10.1394H45.1094V18.1449H44.825C44.6465 16.7926 44.3956 15.828 44.0721 15.251C43.7598 14.6741 43.3304 14.3856 42.7839 14.3856H42.0311V22.6345H44.1056V23.2295H37.7817V22.6345H38.7687V4.89251H37.7817V4.2975Z"${addAttribute(colorText, "fill")}></path> <path d="M57.6446 4.2975L57.8119 11.086H57.494C57.0033 8.68793 56.5683 7.05617 56.1891 6.19071C55.8099 5.30721 55.2633 4.86546 54.5495 4.86546H54.3488V22.6616H55.7708V23.2295H49.6644V22.6616H51.0864V4.86546H50.8689C50.1551 4.86546 49.603 5.32524 49.2127 6.2448C48.8223 7.14632 48.3929 8.76006 47.9245 11.086H47.6066L47.7739 4.2975H57.6446Z"${addAttribute(colorText, "fill")}></path> <path d="M58.8427 4.2975H63.9454V4.81137H63.0252V22.7157H63.9454V23.2295H58.8427V22.7157H59.7629V4.81137H58.8427V4.2975Z"${addAttribute(colorText, "fill")}></path> <path d="M64.7228 4.2975H73.4224L73.5897 9.65257H73.2885C72.8201 7.83148 72.3293 6.58738 71.8163 5.92025C71.3032 5.23509 70.5504 4.89251 69.5577 4.89251H68.9722V13.2497H69.541C70.0652 13.2497 70.5058 12.9341 70.8627 12.3031C71.2196 11.654 71.4705 10.7885 71.6155 9.70666H71.8665V17.7122H71.5821C71.3813 16.3599 71.108 15.3953 70.7623 14.8183C70.4277 14.2413 69.9648 13.9528 69.3737 13.9528H68.9722V22.6345H69.6079C70.634 22.6345 71.504 22.1387 72.2178 21.147C72.9428 20.1553 73.4391 18.8842 73.7068 17.3336H74.0414L73.9075 23.2295H64.7228V22.6345H65.7099V4.89251H64.7228V4.2975Z"${addAttribute(colorText, "fill")}></path> <path d="M80.0852 22.932C80.6429 22.932 81.1336 22.6886 81.5574 22.2018C81.9924 21.715 82.2099 20.9847 82.2099 20.0111C82.2099 19.0194 81.9757 18.2621 81.5072 17.7393C81.0499 17.2164 80.3919 16.7656 79.5331 16.387C78.6854 15.9903 78.0664 15.6477 77.6761 15.3592C77.2969 15.0707 76.9344 14.6921 76.5886 14.2233C75.8971 13.2857 75.5514 11.8343 75.5514 9.86893C75.5514 8.26422 75.9027 6.88488 76.6054 5.73093C77.3192 4.57698 78.2895 4 79.5164 4C80.1075 4 80.7209 4.14424 81.3567 4.43273C82.0036 4.70319 82.4051 4.83842 82.5612 4.83842C82.7174 4.83842 82.8568 4.65811 82.9795 4.2975H83.1635L83.2806 9.76075H83.0129C82.4776 8.19209 81.9143 6.93897 81.3232 6.00139C80.7432 5.04577 80.1075 4.56796 79.416 4.56796C78.7356 4.56796 78.2059 4.8294 77.8266 5.35229C77.4474 5.85714 77.2578 6.5423 77.2578 7.40777C77.2578 8.2552 77.4809 8.91331 77.927 9.38211C78.3843 9.83287 78.942 10.2025 79.6 10.491C80.2581 10.7795 80.6875 10.9778 80.8882 11.086C81.1001 11.1942 81.3567 11.3474 81.6578 11.5458C81.9701 11.7261 82.221 11.9244 82.4107 12.1408C82.6114 12.3391 82.8177 12.6006 83.0297 12.9251C83.2527 13.2316 83.4256 13.5742 83.5483 13.9528C83.8494 14.8183 84 15.846 84 17.0361C84 18.9834 83.6208 20.552 82.8624 21.742C82.1151 22.914 81.128 23.5 79.9012 23.5C79.2654 23.5 78.5349 23.3648 77.7095 23.0943C76.8953 22.8239 76.4436 22.6886 76.3544 22.6886C76.1983 22.6886 76.0477 22.9591 75.9027 23.5H75.6685L75.5012 17.0631H75.7856C76.2763 18.6318 76.9009 20.0021 77.6593 21.1741C78.4289 22.346 79.2375 22.932 80.0852 22.932Z"${addAttribute(colorText, "fill")}></path> <path d="M6 24.7975H13.3197L13.4605 30.1526H13.2071C12.813 28.3315 12.4001 27.0874 11.9684 26.4202C11.5367 25.7351 10.9033 25.3925 10.0681 25.3925H9.57541V33.7497H10.054C10.4951 33.7497 10.8657 33.4341 11.166 32.8031C11.4663 32.154 11.6775 31.2885 11.7995 30.2067H12.0106V38.2122H11.7713C11.6024 36.8599 11.3725 35.8953 11.0816 35.3183C10.8001 34.7413 10.4106 34.4528 9.91324 34.4528H9.57541V43.1345H10.1103C10.9737 43.1345 11.7056 42.6387 12.3062 41.647C12.9162 40.6553 13.3338 39.3842 13.559 37.8336H13.8406L13.7279 43.7295H6V43.1345H6.83051V25.3925H6V24.7975Z"${addAttribute(colorText, "fill")}></path> <path d="M19.1055 34.1553H18.3594V43.2157H19.2744V43.7295H14.6995V43.2157H15.6145V25.3114H14.6995V24.7975H18.9506C20.1706 24.7975 21.0339 24.9237 21.5407 25.1761C22.0568 25.4105 22.4181 25.699 22.6246 26.0416C23.075 26.7448 23.3002 27.8627 23.3002 29.3953C23.3002 30.9279 23.1032 32.0277 22.709 32.6949C22.3149 33.344 21.7143 33.7316 20.9072 33.8578V33.939C21.6674 34.1373 22.1976 34.57 22.4979 35.2372C22.7982 35.9043 22.9483 37.0222 22.9483 38.5908V40.0243C22.9483 40.9619 22.9718 41.5929 23.0187 41.9175C23.075 42.242 23.1876 42.4043 23.3565 42.4043C23.5255 42.4043 23.6568 42.2601 23.7507 41.9716C23.8539 41.665 23.9477 41.034 24.0322 40.0784L24.2715 40.1325C24.1683 41.665 23.9853 42.6928 23.7225 43.2157C23.4691 43.7386 22.9577 44 22.1882 44C21.4187 44 20.8697 43.6574 20.5413 42.9723C20.2222 42.2691 20.0627 40.9619 20.0627 39.0506V37.0763C20.0627 36.0666 19.9923 35.3273 19.8515 34.8585C19.7201 34.3897 19.4714 34.1553 19.1055 34.1553ZM18.3594 25.3114V33.6415H18.8099C19.3448 33.6415 19.7389 33.3259 19.9923 32.6949C20.255 32.0638 20.3864 31.0361 20.3864 29.6117V28.8273C20.3864 27.4029 20.2597 26.4653 20.0064 26.0146C19.7624 25.5458 19.3682 25.3114 18.8239 25.3114H18.3594Z"${addAttribute(colorText, "fill")}></path> <path d="M30.5081 43.2157L29.4805 37.3738H26.6934L25.6095 43.2157H26.6653V43.7295H24.5116V43.2157H25.1732L28.7626 24.6352H29.9169L33.4642 43.2157H34.1117V43.7295H29.5087V43.2157H30.5081ZM28.1433 29.6928L26.8201 36.7788H29.3679L28.1433 29.6928Z"${addAttribute(colorText, "fill")}></path> <path d="M38.6382 43.432C39.1074 43.432 39.5204 43.1886 39.877 42.7018C40.2429 42.215 40.4259 41.4847 40.4259 40.5111C40.4259 39.5194 40.2289 38.7621 39.8347 38.2393C39.45 37.7164 38.8963 37.2656 38.1737 36.887C37.4605 36.4903 36.9397 36.1477 36.6112 35.8592C36.2922 35.5707 35.9872 35.1921 35.6963 34.7233C35.1144 33.7857 34.8235 32.3343 34.8235 30.3689C34.8235 28.7642 35.1191 27.3849 35.7103 26.2309C36.3109 25.077 37.1274 24.5 38.1596 24.5C38.657 24.5 39.1731 24.6442 39.708 24.9327C40.2523 25.2032 40.5902 25.3384 40.7215 25.3384C40.8529 25.3384 40.9702 25.1581 41.0735 24.7975H41.2283L41.3268 30.2607H41.1016C40.6512 28.6921 40.1773 27.439 39.6799 26.5014C39.1919 25.5458 38.657 25.068 38.0752 25.068C37.5027 25.068 37.057 25.3294 36.7379 25.8523C36.4189 26.3571 36.2593 27.0423 36.2593 27.9078C36.2593 28.7552 36.447 29.4133 36.8224 29.8821C37.2071 30.3329 37.6763 30.7025 38.23 30.991C38.7837 31.2795 39.145 31.4778 39.3139 31.586C39.4922 31.6942 39.708 31.8474 39.9614 32.0458C40.2242 32.2261 40.4353 32.4244 40.5949 32.6408C40.7638 32.8391 40.9374 33.1006 41.1157 33.4251C41.3034 33.7316 41.4488 34.0742 41.5521 34.4528C41.8054 35.3183 41.9321 36.346 41.9321 37.5361C41.9321 39.4834 41.613 41.052 40.9749 42.242C40.3462 43.414 39.5157 44 38.4834 44C37.9485 44 37.3338 43.8648 36.6394 43.5943C35.9543 43.3239 35.5743 43.1886 35.4992 43.1886C35.3678 43.1886 35.2411 43.4591 35.1191 44H34.9221L34.7813 37.5631H35.0206C35.4335 39.1318 35.959 40.5021 36.5972 41.6741C37.2447 42.846 37.925 43.432 38.6382 43.432Z"${addAttribute(colorText, "fill")}></path> <path d="M53.9857 24.7975L54.1265 31.586H53.859C53.4461 29.1879 53.0801 27.5562 52.761 26.6907C52.442 25.8072 51.9822 25.3655 51.3816 25.3655H51.2126V43.1616H52.4091V43.7295H47.2712V43.1616H48.4677V25.3655H48.2847C47.6842 25.3655 47.2196 25.8252 46.8912 26.7448C46.5627 27.6463 46.2014 29.2601 45.8073 31.586H45.5399L45.6806 24.7975H53.9857Z"${addAttribute(colorText, "fill")}></path> <path d="M61.268 35.3724V33.371C61.268 30.0714 61.1836 27.9889 61.0147 27.1234C60.827 26.1318 60.5595 25.5187 60.2123 25.2843C60.0152 25.1401 59.7759 25.068 59.4944 25.068C59.2129 25.068 58.9689 25.1401 58.7624 25.2843C58.5654 25.4286 58.4011 25.681 58.2698 26.0416C58.1384 26.4022 58.0305 26.7809 57.946 27.1775C57.8709 27.5742 57.8099 28.1331 57.763 28.8544C57.7067 29.9001 57.6786 31.4417 57.6786 33.4792V35.4265C57.6786 37.6262 57.7208 39.1949 57.8052 40.1325C57.8991 41.052 58.0117 41.7101 58.1431 42.1068C58.434 42.9903 58.8844 43.432 59.4944 43.432C60.2358 43.432 60.7144 42.837 60.9302 41.647C61.1554 40.439 61.268 38.3474 61.268 35.3724ZM59.4663 44C57.8991 44 56.726 43.1886 55.9472 41.5659C55.1776 39.9251 54.7929 37.5631 54.7929 34.4799C54.7929 31.3786 55.2058 28.9445 56.0316 27.1775C56.8668 25.3925 58.0445 24.5 59.5648 24.5C61.085 24.5 62.2299 25.3474 62.9994 27.0423C63.7783 28.7191 64.1678 31.1082 64.1678 34.2094C64.1678 37.3107 63.7736 39.7178 62.9854 41.4307C62.2065 43.1436 61.0334 44 59.4663 44Z"${addAttribute(colorText, "fill")}></path> <path d="M68.4228 37.9688C68.4228 39.6276 68.5683 40.8988 68.8592 41.7822C69.1595 42.6657 69.6944 43.1075 70.4639 43.1075C71.2334 43.1075 71.8246 42.6477 72.2375 41.7282C72.6504 40.8086 72.8569 39.4112 72.8569 37.5361V25.3114H71.9419V24.7975H73.9971V25.3114H73.2229V37.3467C73.2229 39.5825 72.9648 41.2503 72.4487 42.3502C71.9325 43.4501 71.0176 44 69.7038 44C68.3993 44 67.3999 43.4771 66.7055 42.4313C66.0204 41.3856 65.6779 39.5915 65.6779 37.0492V25.3114H64.9037V24.7975H69.3378V25.3114H68.4228V37.9688Z"${addAttribute(colorText, "fill")}></path> <path d="M78.834 34.1553H78.0879V43.2157H79.0029V43.7295H74.428V43.2157H75.343V25.3114H74.428V24.7975H78.6791C79.8991 24.7975 80.7624 24.9237 81.2692 25.1761C81.7853 25.4105 82.1466 25.699 82.3531 26.0416C82.8035 26.7448 83.0287 27.8627 83.0287 29.3953C83.0287 30.9279 82.8317 32.0277 82.4375 32.6949C82.0434 33.344 81.4428 33.7316 80.6357 33.8578V33.939C81.3959 34.1373 81.9261 34.57 82.2264 35.2372C82.5267 35.9043 82.6768 37.0222 82.6768 38.5908V40.0243C82.6768 40.9619 82.7003 41.5929 82.7472 41.9175C82.8035 42.242 82.9161 42.4043 83.085 42.4043C83.2539 42.4043 83.3853 42.2601 83.4792 41.9716C83.5824 41.665 83.6762 41.034 83.7607 40.0784L84 40.1325C83.8968 41.665 83.7138 42.6928 83.451 43.2157C83.1976 43.7386 82.6862 44 81.9167 44C81.1472 44 80.5982 43.6574 80.2698 42.9723C79.9507 42.2691 79.7912 40.9619 79.7912 39.0506V37.0763C79.7912 36.0666 79.7208 35.3273 79.58 34.8585C79.4486 34.3897 79.1999 34.1553 78.834 34.1553ZM78.0879 25.3114V33.6415H78.5384C79.0733 33.6415 79.4674 33.3259 79.7208 32.6949C79.9835 32.0638 80.1149 31.0361 80.1149 29.6117V28.8273C80.1149 27.4029 79.9882 26.4653 79.7348 26.0146C79.4909 25.5458 79.0967 25.3114 78.5524 25.3114H78.0879Z"${addAttribute(colorText, "fill")}></path> </svg> <!-- <svg class="sm:hidden block" width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="24" fill={colorBg}/>
        <path d="M129.846 42.6852L131.343 103.956H128.498C124.106 82.3116 120.213 67.5839 116.818 59.7725C113.424 51.7984 108.533 47.8114 102.144 47.8114H100.347V208.433H113.075V213.559H58.4184V208.433H71.1466V47.8114H69.2C62.8109 47.8114 57.8694 51.9612 54.3754 60.2607C50.8814 68.3976 47.0379 82.9626 42.8451 103.956H40L41.4974 42.6852H129.846Z" fill={colorText}/>
        <path d="M180.96 210.874C185.951 210.874 190.344 208.677 194.137 204.283C198.031 199.889 199.977 193.298 199.977 184.51C199.977 175.56 197.881 168.725 193.688 164.006C189.595 159.286 183.705 155.218 176.019 151.8C168.432 148.22 162.891 145.128 159.397 142.524C156.003 139.92 152.758 136.503 149.664 132.272C143.474 123.81 140.38 110.709 140.38 92.9709C140.38 78.4873 143.524 66.0379 149.813 55.6227C156.202 45.2076 164.888 40 175.869 40C181.16 40 186.65 41.3019 192.341 43.9057C198.131 46.3467 201.724 47.5673 203.122 47.5673C204.52 47.5673 205.768 45.9399 206.866 42.6852H208.513L209.561 91.9945H207.165C202.373 77.8363 197.332 66.5261 192.041 58.0638C186.85 49.4387 181.16 45.1262 174.97 45.1262C168.881 45.1262 164.139 47.4859 160.745 52.2053C157.35 56.7619 155.653 62.9459 155.653 70.7573C155.653 78.4059 157.65 84.3458 161.643 88.577C165.736 92.6454 170.728 95.9815 176.617 98.5853C182.507 101.189 186.351 102.979 188.148 103.956C190.044 104.932 192.341 106.315 195.036 108.105C197.831 109.733 200.077 111.523 201.774 113.476C203.571 115.266 205.418 117.626 207.315 120.555C209.311 123.321 210.859 126.413 211.957 129.831C214.652 137.642 216 146.918 216 157.659C216 175.234 212.606 189.393 205.817 200.133C199.129 210.711 190.294 216 179.313 216C173.623 216 167.084 214.779 159.696 212.338C152.409 209.897 148.366 208.677 147.567 208.677C146.17 208.677 144.822 211.118 143.524 216H141.428L139.93 157.903H142.476C146.868 172.061 152.459 184.429 159.247 195.007C166.135 205.585 173.373 210.874 180.96 210.874Z" fill={colorText}/>
    </svg> --> </a>`;
}, "/home/user/mi-repo/src/components/Logo.astro", void 0);

const $$Astro$9 = createAstro("https:matiassolisschneeberger.github.io");
const $$MenuSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-menu-2", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path> <path d="M4 18l16 0"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/MenuSvg.astro", void 0);

const $$Astro$8 = createAstro("https:matiassolisschneeberger.github.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    "z-10 py-4 flex gap-2.5 flex-row items-center self-stretch shrink-0 h-auto w-full justify-between px-10",
    {
      "bg-debut-900 dark:bg-debut-950": era === "debut",
      "bg-fearless-900 dark:bg-fearless-950": era === "fearless",
      "bg-speakNow-900 dark:bg-speakNow-950": era === "speakNow",
      "bg-red-900 dark:bg-red-950": era === "red",
      "bg-1989-900 dark:bg-1989-950": era === "1989",
      "bg-reputation-900 dark:bg-reputation-950": era === "reputation",
      "bg-lover-900 dark:bg-lover-950": era === "lover",
      "bg-folklore-900 dark:bg-folklore-950": era === "folklore",
      "bg-evermore-900 dark:bg-evermore-950": era === "evermore",
      "bg-midnights-900 dark:bg-midnights-950": era === "midnights",
      "bg-TTPD-900 dark:bg-TTPD-950": era === "TTPD",
      "bg-mashup-900 dark:bg-mashup-950": era === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "Logo", $$Logo, { "era": era })} <nav class="hidden sm:flex flex-row gap-2.5 items-center justify-center shrink-0 relative"> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "/swifties-eras-tour/outfits", "icono": null }, { "default": ($$result2) => renderTemplate`
Outfits
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "/swifties-eras-tour/setlist", "icono": null }, { "default": ($$result2) => renderTemplate`
SetList
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "/swifties-eras-tour/conciertos", "icono": null }, { "default": ($$result2) => renderTemplate`
Conciertos
` })} </nav> <button id="btn-nav"${addAttribute([
    "p-2 rounded-md border-2 focus:ring-2 sm:hidden flex",
    {
      "border-debut-100": era === "debut",
      "border-fearless-100": era === "fearless",
      "border-speakNow-100": era === "speakNow",
      "border-red-100": era === "red",
      "border-1989-100": era === "1989",
      "border-reputation-100": era === "reputation",
      "border-lover-100": era === "lover",
      "border-folklore-100": era === "folklore",
      "border-evermore-100": era === "evermore",
      "border-midnights-100": era === "midnights",
      "border-TTPD-100": era === "TTPD",
      "border-mashup-100": era === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "MenuSvg", $$MenuSvg, { "era": era })} </button> </header> <nav id="sm-nav"${addAttribute([
    "hidden text-body-large z-10 w-full absolute p-3 flex-col rounded-b-3xl gap-3 items-start flex justify-start",
    {
      "bg-debut-700 text-debut-100": era === "debut",
      "bg-fearless-700 text-fearless-100": era === "fearless",
      "bg-speakNow-700 text-speakNow-100": era === "speakNow",
      "bg-red-700 text-red-100": era === "red",
      "bg-1989-700 text-1989-100": era === "1989",
      "bg-reputation-700 text-reputation-100": era === "reputation",
      "bg-lover-700 text-lover-100": era === "lover",
      "bg-folklore-700 text-folklore-100": era === "folklore",
      "bg-evermore-700 text-evermore-100": era === "evermore",
      "bg-midnights-700 text-midnights-100": era === "midnights",
      "bg-TTPD-700 text-TTPD-100": era === "TTPD",
      "bg-mashup-700 text-mashup-100": era === "mashup"
    }
  ], "class:list")}> <a href="/swifties-eras-tour/outfits"${addAttribute(["w-full p-3 rounded-xl", {
    "bg-debut-800 text-debut-100": era === "debut",
    "bg-fearless-800 text-fearless-100": era === "fearless",
    "bg-speakNow-800 text-speakNow-100": era === "speakNow",
    "bg-red-800 text-red-100": era === "red",
    "bg-1989-800 text-1989-100": era === "1989",
    "bg-reputation-800 text-reputation-100": era === "reputation",
    "bg-lover-800 text-lover-100": era === "lover",
    "bg-folklore-800 text-folklore-100": era === "folklore",
    "bg-evermore-800 text-evermore-100": era === "evermore",
    "bg-midnights-800 text-midnights-100": era === "midnights",
    "bg-TTPD-800 text-TTPD-100": era === "TTPD",
    "bg-mashup-800 text-mashup-100": era === "mashup"
  }], "class:list")}>
Outfits
</a> <a href="/swifties-eras-tour/setlist"${addAttribute(["w-full p-3 rounded-xl", {
    "bg-debut-800 text-debut-100": era === "debut",
    "bg-fearless-800 text-fearless-100": era === "fearless",
    "bg-speakNow-800 text-speakNow-100": era === "speakNow",
    "bg-red-800 text-red-100": era === "red",
    "bg-1989-800 text-1989-100": era === "1989",
    "bg-reputation-800 text-reputation-100": era === "reputation",
    "bg-lover-800 text-lover-100": era === "lover",
    "bg-folklore-800 text-folklore-100": era === "folklore",
    "bg-evermore-800 text-evermore-100": era === "evermore",
    "bg-midnights-800 text-midnights-100": era === "midnights",
    "bg-TTPD-800 text-TTPD-100": era === "TTPD",
    "bg-mashup-800 text-mashup-100": era === "mashup"
  }], "class:list")}>
SetList
</a> <a href="/swifties-eras-tour/conciertos"${addAttribute(["w-full p-3 rounded-xl", {
    "bg-debut-800 text-debut-100": era === "debut",
    "bg-fearless-800 text-fearless-100": era === "fearless",
    "bg-speakNow-800 text-speakNow-100": era === "speakNow",
    "bg-red-800 text-red-100": era === "red",
    "bg-1989-800 text-1989-100": era === "1989",
    "bg-reputation-800 text-reputation-100": era === "reputation",
    "bg-lover-800 text-lover-100": era === "lover",
    "bg-folklore-800 text-folklore-100": era === "folklore",
    "bg-evermore-800 text-evermore-100": era === "evermore",
    "bg-midnights-800 text-midnights-100": era === "midnights",
    "bg-TTPD-800 text-TTPD-100": era === "TTPD",
    "bg-mashup-800 text-mashup-100": era === "mashup"
  }], "class:list")}>
Conciertos
</a> </nav> `;
}, "/home/user/mi-repo/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro("https:matiassolisschneeberger.github.io");
const $$GitHubSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$GitHubSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute(["icon icon-tabler icons-tabler-filled icon-tabler-brand-github", [
    {
      "fill-debut-100": era === "debut",
      "fill-fearless-100": era === "fearless",
      "fill-speakNow-100": era === "speakNow",
      "fill-red-100": era === "red",
      "fill-1989-100": era === "1989",
      "fill-reputation-100": era === "reputation",
      "fill-lover-100": era === "lover",
      "fill-folklore-100": era === "folklore",
      "fill-evermore-100": era === "evermore",
      "fill-midnights-100": era === "midnights",
      "fill-TTPD-100": era === "TTPD",
      "fill-mashup-100": era === "mashup"
    }
  ]], "class:list")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/GitHubSvg.astro", void 0);

const $$Astro$6 = createAstro("https:matiassolisschneeberger.github.io");
const $$GitHubBordeSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GitHubBordeSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-brand-github", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/GitHubBordeSvg.astro", void 0);

const $$Astro$5 = createAstro("https:matiassolisschneeberger.github.io");
const $$PortfolioSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PortfolioSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-briefcase", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> <path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/PortfolioSvg.astro", void 0);

const $$Astro$4 = createAstro("https:matiassolisschneeberger.github.io");
const $$LinkedInSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkedInSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/LinkedInSvg.astro", void 0);

const $$Astro$3 = createAstro("https:matiassolisschneeberger.github.io");
const $$MailSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MailSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-mail", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/MailSvg.astro", void 0);

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([
    "px-8 md:px-24 py-16 flex flex-col md:gap-14 md:flex-row gap-8 items-start justify-start relative overflow-hidden",
    {
      "bg-debut-900      dark:bg-debut-950      text-debut-100": era === "debut",
      "bg-fearless-900   dark:bg-fearless-950   text-fearless-100": era === "fearless",
      "bg-speakNow-900   dark:bg-speakNow-950   text-speakNow-100": era === "speakNow",
      "bg-red-900        dark:bg-red-950        text-red-100": era === "red",
      "bg-1989-900       dark:bg-1989-950       text-1989-100": era === "1989",
      "bg-reputation-900 dark:bg-reputation-950 text-reputation-100": era === "reputation",
      "bg-lover-900      dark:bg-lover-950      text-lover-100": era === "lover",
      "bg-folklore-900   dark:bg-folklore-950   text-folklore-100": era === "folklore",
      "bg-evermore-900   dark:bg-evermore-950   text-evermore-100": era === "evermore",
      "bg-midnights-900  dark:bg-midnights-950  text-midnights-100": era === "midnights",
      "bg-TTPD-900       dark:bg-TTPD-950       text-TTPD-100": era === "TTPD",
      "bg-mashup-900     dark:bg-mashup-950     text-mashup-100": era === "mashup"
    }
  ], "class:list")}> <article class="text-pretty flex flex-col gap-4  items-start w-full md:2/3"> ${renderComponent($$result, "Logo", $$Logo, { "era": era })} <h2 class="text-left text-title-large">
Swifties Eras Tour
</h2> <p class=" text-left text-body-medium" style="letter-spacing: var(--body-small-letter-spacing, 0.4px)">
Página creada por un fan para fans.
<br> <br>
Soy un apasionado swiftie y he creado este sitio web como un tributo a Taylor Swift y su increíble carrera. Este sitio es la primera página que hago en su totalidad, y busca celebrar cada momento y cada canción. Agradezco a Taylor por ser una inspiración constante y por su música que me ha acompañado a lo largo de los años.
<br> <br>
Este sitio incluye una sección especial para las canciones sorpresa del tour, donde podrás encontrar detalles sobre las fechas y lugares en los que se tocaron. Además, todas las fechas que se hicieron y faltan hacer.
<br> <br>
Si tienen alguna sugerencia no duden en mandarme un correo.
</p> </article> <section class="w-full flex gap-8 md:w-1/3"> <article class="flex flex-col gap-4 w-full"> <h3 class=" text-start text-title-large">
Eras
</h3> <div class=" flex flex-col gap-2 w-max"> <a href="/swifties-eras-tour/eras/01-debut" class="text-body-large">Taylor Swift</a> <a href="/swifties-eras-tour/eras/02-fearless" class="text-body-large">Fearless</a> <a href="/swifties-eras-tour/eras/03-speakNow" class="text-body-large">Speak Now</a> <a href="/swifties-eras-tour/eras/04-red" class="text-body-large">Red</a> <a href="/swifties-eras-tour/eras/05-1989" class="text-body-large">1989</a> <a href="/swifties-eras-tour/eras/06-reputation" class="text-body-large">Reputation</a> <a href="/swifties-eras-tour/eras/07-lover" class="text-body-large">Lover</a> <a href="/swifties-eras-tour/eras/08-folklore" class="text-body-large">Folklore</a> <a href="/swifties-eras-tour/eras/09-evermore" class="text-body-large">Evermore</a> <a href="/swifties-eras-tour/eras/10-midnights" class="text-body-large">Midnights</a> <a href="/swifties-eras-tour/eras/11-TTPD" class="text-body-large">TTPD</a> <a href="/swifties-eras-tour/eras/12-mashup" class="text-body-large">Mashup</a> </div> </article> <article class="flex flex-col gap-4 w-full"> <h3 class=" text-start text-title-large">
Contacto
</h3> <div class="flex flex-col gap-2.5" class="text-body-medium-font-family text-body-medium-font-size leading-body-medium-line-height font-body-medium-font-weight"> <a href="" class="flex items-center gap-2"> ${renderComponent($$result, "LinkedInSvg", $$LinkedInSvg, { "era": era })} <p>LinkedIn</p> </a> <a class="flex items-center gap-2"> ${renderComponent($$result, "GitHubSvg", $$GitHubSvg, { "era": era })} <p>Repositorio</p> </a> <a href="https://github.com/MatiasSolisSchneeberger" target="_blank" class="flex items-center gap-2"> ${renderComponent($$result, "GitHubBordeSvg", $$GitHubBordeSvg, { "era": era })} <p>GitHub</p> </a> <a class="flex items-center gap-2"> ${renderComponent($$result, "PortfolioSvg", $$PortfolioSvg, { "era": era })} <p>Portfolio</p> </a> <a class="flex items-center gap-2"> ${renderComponent($$result, "MailSvg", $$MailSvg, { "era": era })} <p>Mail</p> </a> </div> </article> </section> </footer>`;
}, "/home/user/mi-repo/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonTheme;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="themeToggle" class="z-50 shadow-sm hover:shadow-lg fixed bottom-2 left-2 transition-all duration-125 ease-in-out cursor-pointer"> <button aria-label="Theme Icon"${addAttribute([
    "shadow-sm flex hover:shadow-lg fixed size-14 bottom-2 left-2 cursor-default items-center justify-center rounded-2xl",
    {
      "bg-debut-300 hover:bg-debut-400 dark:bg-debut-600 hover:dark:bg-debut-500": era === "debut",
      "bg-fearless-300 hover:bg-fearless-400 dark:bg-fearless-600 hover:dark:bg-fearless-500": era === "fearless",
      "bg-speakNow-300 hover:bg-speakNow-400 dark:bg-speakNow-600 hover:dark:bg-speakNow-500": era === "speakNow",
      "bg-red-300 hover:bg-red-400 dark:bg-red-600 hover:dark:bg-red-500": era === "red",
      "bg-1989-300 hover:bg-1989-400 dark:bg-1989-600 hover:dark:bg-1989-500": era === "1989",
      "bg-reputation-300 hover:bg-reputation-400 dark:bg-reputation-600 hover:dark:bg-reputation-500": era === "reputation",
      "bg-lover-300 hover:bg-lover-400 dark:bg-lover-600 hover:dark:bg-lover-500": era === "lover",
      "bg-folklore-300 hover:bg-folklore-400 dark:bg-folklore-600 hover:dark:bg-folklore-500": era === "folklore",
      "bg-evermore-300 hover:bg-evermore-400 dark:bg-evermore-600 hover:dark:bg-evermore-500": era === "evermore",
      "bg-midnights-300 hover:bg-midnights-400 dark:bg-midnights-600 hover:dark:bg-midnights-500": era === "midnights",
      "bg-TTPD-300 hover:bg-TTPD-400 dark:bg-TTPD-600 hover:dark:bg-TTPD-500": era === "TTPD",
      "bg-mashup-300 hover:bg-mashup-400 dark:bg-mashup-600 hover:dark:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-sun", [
    "dark:hidden block",
    {
      "stroke-debut-800      dark:stroke-debut-100": era === "debut",
      "stroke-fearless-800   dark:stroke-fearless-100": era === "fearless",
      "stroke-speakNow-800   dark:stroke-speakNow-100": era === "speakNow",
      "stroke-red-800        dark:stroke-red-100": era === "red",
      "stroke-1989-800       dark:stroke-1989-100": era === "1989",
      "stroke-reputation-800 dark:stroke-reputation-100": era === "reputation",
      "stroke-lover-800      dark:stroke-lover-100": era === "lover",
      "stroke-folklore-800   dark:stroke-folklore-100": era === "folklore",
      "stroke-evermore-800   dark:stroke-evermore-100": era === "evermore",
      "stroke-midnights-800  dark:stroke-midnights-100": era === "midnights",
      "stroke-TTPD-800       dark:stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-800     dark:stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-moon", [
    "dark:block hidden",
    {
      "stroke-debut-800      dark:stroke-debut-100": era === "debut",
      "stroke-fearless-800   dark:stroke-fearless-100": era === "fearless",
      "stroke-speakNow-800   dark:stroke-speakNow-100": era === "speakNow",
      "stroke-red-800        dark:stroke-red-100": era === "red",
      "stroke-1989-800       dark:stroke-1989-100": era === "1989",
      "stroke-reputation-800 dark:stroke-reputation-100": era === "reputation",
      "stroke-lover-800      dark:stroke-lover-100": era === "lover",
      "stroke-folklore-800   dark:stroke-folklore-100": era === "folklore",
      "stroke-evermore-800   dark:stroke-evermore-100": era === "evermore",
      "stroke-midnights-800  dark:stroke-midnights-100": era === "midnights",
      "stroke-TTPD-800       dark:stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-800     dark:stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg> </button> </div>  `;
}, "/home/user/mi-repo/src/components/ButtonTheme.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, era } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width = device-width"><link rel="icon" type="image/svg+xml" href="/swifties-eras-tour/src/components/svg/Frame.svg"><meta name="generator"', '><!-- Tipograf\xEDas --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family = Rubik:ital,wght@0,300..900;1,300..900&display = swap" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"><\/script><title>', "</title>", "", "</head> <body", "", "> ", " <main> ", " </main> ", " ", " ", '   <!-- <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> --></body></html>'])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute([
    "w-screem sm:w-full",
    {
      "dark:bg-debut-900 bg-debut-50": era === "debut",
      "dark:bg-fearless-900 bg-fearless-50": era === "fearless",
      "dark:bg-speakNow-900 bg-speakNow-50": era === "speakNow",
      "dark:bg-red-900 bg-red-50": era === "red",
      "dark:bg-1989-900 bg-1989-50": era === "1989",
      "dark:bg-reputation-900 bg-reputation-50": era === "reputation",
      "dark:bg-lover-900 bg-lover-50": era === "lover",
      "dark:bg-folklore-900 bg-folklore-50": era === "folklore",
      "dark:bg-evermore-900 bg-evermore-50": era === "evermore",
      "dark:bg-midnights-900 bg-midnights-50": era === "midnights",
      "dark:bg-TTPD-900 bg-TTPD-50": era === "TTPD",
      "dark:bg-mashup-900 bg-mashup-50": era === "mashup"
    }
  ], "class:list"), addAttribute(renderTransition($$result, "2ufxhwun", "fade", "body"), "data-astro-transition-scope"), renderComponent($$result, "Header", $$Header, { "era": era }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "era": era }), renderComponent($$result, "ButtonToUp", $$ButtonToUp, { "era": era }), renderComponent($$result, "ButtonTheme", $$ButtonTheme, { "era": era }));
}, "/home/user/mi-repo/src/layouts/Layout.astro", "self");

export { $$Titulo as $, $$ButtonPrimario as a, $$Layout as b };
