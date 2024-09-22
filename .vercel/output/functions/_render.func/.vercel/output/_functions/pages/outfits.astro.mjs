/* empty css                                      */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { $ as $$Titulo, b as $$Layout } from '../chunks/Layout_oqMgRqbP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$ImagenOutfit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagenOutfit;
  const { era, src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group rounded-xl flex-1 h-[450px] min-w-[264px] sm:max-w-[360px] relative shadow-lg hover:shadow-xl"> <div${addAttribute([
    "group-hover:scale-105 w-full transition object-cover ease-in-out delay-0 duration-200 h-full flex justify-center rounded-xl absolute mix-blend-multiply z-20",
    {
      "bg-gradient-to-t from-debut-400": era === "debut",
      "bg-gradient-to-t from-fearless-400": era === "fearless",
      "bg-gradient-to-t from-speakNow-400": era === "speakNow",
      "bg-gradient-to-t from-red-400": era === "red",
      "bg-gradient-to-t from-1989-400": era === "1989",
      "bg-gradient-to-t from-reputation-400": era === "reputation",
      "bg-gradient-to-t from-lover-400": era === "lover",
      "bg-gradient-to-t from-folklore-400": era === "folklore",
      "bg-gradient-to-t from-evermore-400": era === "evermore",
      "bg-gradient-to-t from-midnights-400": era === "midnights",
      "bg-gradient-to-t from-TTPD-400": era === "TTPD",
      "bg-gradient-to-t from-mashup-400": era === "surprise songs",
      "hidden": era === "folkmore"
    }
  ], "class:list")}></div> <div${addAttribute(["group-hover:scale-105 w-full transition object-cover ease-in-out delay-0 duration-200 h-full flex justify-center rounded-xl absolute mix-blend-multiply z-20 bg-gradient-to-tr from-folklore-400", { "hidden": era !== "folkmore" }], "class:list")}></div> <div${addAttribute(["group-hover:scale-105 w-full transition object-cover ease-in-out delay-0 duration-200 h-full flex justify-center rounded-xl absolute mix-blend-multiply z-20 bg-gradient-to-tl from-evermore-400", { "hidden": era !== "folkmore" }], "class:list")}></div> <img class="group-hover:scale-105 group-focus:scale-105 w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl h-full z-10"${addAttribute(src, "src")}${addAttribute(`Taylor en la era ${era}`, "alt")}> </div>`;
}, "/home/user/mi-repo/src/components/ImagenOutfit.astro", void 0);

const erasOutfit = [
	{
		discos: "lover",
		bodysuit: [
			{
				description: "Descripción del body 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/bodysuit01.jpg"
			},
			{
				description: "Descripción del body 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/bodysuit02.jpg"
			},
			{
				description: "Descripción del body 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/bodysuit03.jpg"
			},
			{
				description: "Descripción del body 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/bodysuit04.jpg"
			},
			{
				description: "Descripción del body 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/bodysuit05.jpg"
			}
		],
		jacket: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/jacket01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/jacket02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/jacket03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/jacket04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/07-Lover/jacket05.jpg"
			}
		],
		shirt: [
		],
		set: [
		],
		dress: [
		]
	},
	{
		discos: "fearless",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/02-Fearless/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/02-Fearless/dress02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/02-Fearless/dress03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/02-Fearless/dress04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/02-Fearless/dress05.jpg"
			}
		]
	},
	{
		discos: "red",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt05.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/22T-shirt06.jpg"
			}
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/04-Red/coatATW.jpg"
			}
		]
	},
	{
		discos: "Speak Now",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress05.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress06.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress07.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/03-speakNow/dress08.jpg"
			}
		]
	},
	{
		discos: "reputation",
		bodysuit: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/06-Reputation/jumpbody01.jpg"
			}
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
		]
	},
	{
		discos: "folklore",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-Folklore/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-Folklore/dress02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-Folklore/dress03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-Folklore/dress04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-Folklore/dress05.jpg"
			}
		]
	},
	{
		discos: "folkmore",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-9-FolkMore/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-9-FolkMore/dress02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-9-FolkMore/dress03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-9-FolkMore/dress04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/08-9-FolkMore/dress05.jpg"
			}
		]
	},
	{
		discos: "evermore",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/09-Evermore/dress01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/09-Evermore/dress02.jpg"
			}
		]
	},
	{
		discos: "1989",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/Original/OriginalSet01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/Original/OriginalSet02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/Original/OriginalSet03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/Original/OriginalSet04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Gold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Purple.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Gold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Purple.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Purple.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Gold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Purple.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Gold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Purple.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Aqua.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Gold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Orange.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Purple.jpg"
			}
		],
		dress: [
		]
	},
	{
		discos: "TTPD",
		bodysuit: [
		],
		jacket: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/SmallestManJacket.jpg"
			}
		],
		shirt: [
		],
		set: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHblack-white.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHgold-black.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHgold.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHgraphite.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHwhite-black.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/ICDWTBHwhite.jpg"
			}
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/Who'sAfraidOfLittleOldMeDress.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/11-TTPD/RuiningMyLifeDress.jpg"
			}
		]
	},
	{
		discos: "surprise songs",
		bodysuit: [
		],
		jacket: [
		],
		shirt: [
		],
		set: [
		],
		dress: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/blue.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/flamingo.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/green.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/ocean.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/pink.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/sunset.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/12-SupriseSongs/yellow.jpg"
			}
		]
	},
	{
		discos: "midnights",
		bodysuit: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/body01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/body02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/body03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/body04.jpg"
			}
		],
		jacket: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/jacket01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/jacket02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/jacket03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/jacket04.jpg"
			}
		],
		shirt: [
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt01.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt02.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt03.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt04.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt05.jpg"
			},
			{
				description: "Descripción del traje 1",
				image: "/swifties-eras-tour/images/Outfits/10-Midnights/TShirt06.jpg"
			}
		],
		set: [
		],
		dress: [
		]
	}
];

const $$OutfitEra = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${erasOutfit.map(({ discos, bodysuit, jacket, dress, set, shirt }) => {
    return renderTemplate`${maybeRenderHead()}<section${addAttribute([
      "w-full rounded-3xl p-6 flex flex-col gap-3 gap-y-4 items-start justify-start self-stretch shrink-0 relative",
      {
        "text-debut-800 bg-debut-300": discos === "debut",
        "text-fearless-800 bg-fearless-300": discos === "fearless",
        "text-speakNow-800 bg-speakNow-300": discos === "Speak Now",
        "text-red-800 bg-red-300": discos === "red",
        "text-1989-800 bg-1989-300": discos === "1989",
        "text-reputation-800 bg-reputation-300": discos === "reputation",
        "text-lover-800 bg-lover-300": discos === "lover",
        "text-folklore-800 bg-folklore-300": discos === "folklore",
        "text-evermore-800 bg-evermore-300": discos === "evermore",
        "text-midnights-800 bg-midnights-300": discos === "midnights",
        "text-TTPD-800 bg-TTPD-300": discos === "TTPD",
        "text-mashup-800 bg-mashup-300": discos === "surprise songs",
        "bg-gradient-to-r from-folklore-300 to-evermore-300": discos === "folkmore"
      }
    ], "class:list")} style="box-shadow: var(--m3-elevation-light-3-box-shadow,0px 1px 3px 0px rgba(0, 0, 0, 0.3),0px 4px 8px 3px rgba(0, 0, 0, 0.15));"><h2${addAttribute(["text-center text-headline-medium relative self-stretch", { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }], "class:list")}>${discos.toUpperCase()}</h2>${bodysuit.length > 0 && renderTemplate`<h3${addAttribute([
      " text-center text-title-large relative self-stretch",
      { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }
    ], "class:list")}>Bodysuit</h3>`}<div class="flex flex-row gap-6 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">${bodysuit.map(({ image }) => {
      return renderTemplate`${renderComponent($$result, "ImagenOutfit", $$ImagenOutfit, { "src": image, "era": discos })}`;
    })}</div>${jacket.length > 0 && renderTemplate`<h3${addAttribute([
      " text-center text-title-large relative self-stretch",
      { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }
    ], "class:list")}>Jacket</h3>`}<div class="flex flex-row gap-6 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">${jacket.map(({ image }) => {
      return renderTemplate`${renderComponent($$result, "ImagenOutfit", $$ImagenOutfit, { "src": image, "era": discos })}`;
    })}</div>${dress.length > 0 && renderTemplate`<h3${addAttribute([
      " text-center text-title-large relative self-stretch",
      { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }
    ], "class:list")}>Dress</h3>`}<div class="flex flex-row gap-6 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">${dress.map(({ image }) => {
      return renderTemplate`${renderComponent($$result, "ImagenOutfit", $$ImagenOutfit, { "src": image, "era": discos })}`;
    })}</div>${set.length > 0 && renderTemplate`<h3${addAttribute([
      " text-center text-title-large relative self-stretch",
      { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }
    ], "class:list")}>Set</h3>`}<div class="flex flex-row gap-6 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">${set.map(({ image }) => {
      return renderTemplate`${renderComponent($$result, "ImagenOutfit", $$ImagenOutfit, { "src": image, "era": discos })}`;
    })}</div>${shirt.length > 0 && renderTemplate`<h3${addAttribute([
      " text-center text-title-large relative self-stretch",
      { "text-transparent bg-clip-text bg-gradient-to-r from-folklore-800 to-evermore-800": discos === "folkmore" }
    ], "class:list")}>Shirt</h3>`}<div class="flex flex-row gap-6 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">${shirt.map(({ image }) => {
      return renderTemplate`${renderComponent($$result, "ImagenOutfit", $$ImagenOutfit, { "src": image, "era": discos })}`;
    })}</div></section>`;
  })}`;
}, "/home/user/mi-repo/src/components/OutfitEra.astro", void 0);

const $$Outfits = createComponent(($$result, $$props, $$slots) => {
  const era = "red";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Outfits | Swifties Eras Tour", "era": era }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-12 px-8 sm:px-32 space-y-6 flex flex-col gap-2.5 gap-y-0 items-center justify-center self-stretch shrink-0 relative w-full"> ${renderComponent($$result2, "Title", $$Titulo, { "era": era, "titulo": "Outfits Eras Tour" }, { "default": ($$result3) => renderTemplate`
Estos son todos los vestidos que usa Taylor
` })} ${renderComponent($$result2, "OutfitEra", $$OutfitEra, { "era": "lover" })} </main> ` })}`;
}, "/home/user/mi-repo/src/pages/outfits.astro", void 0);

const $$file = "/home/user/mi-repo/src/pages/outfits.astro";
const $$url = "/swifties-eras-tour/outfits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Outfits,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
