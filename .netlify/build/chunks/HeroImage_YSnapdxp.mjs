import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition, d as renderComponent } from './astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$ButtonPrimario } from './Layout_1fUuJijd.mjs';
/* empty css                         */

const $$Astro$3 = createAstro("https:matiassolisschneeberger.github.io");
const $$Emojie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Emojie;
  const { emojie } = Astro2.props;
  const imageEmojie = {
    debut: "/mi-repo/images/Emojis/01.taylorSwift.png",
    fearless: "/mi-repo/images/Emojis/02.fearless.png",
    speakNow: "/mi-repo/images/Emojis/03.speakNow.png",
    red: "/mi-repo/images/Emojis/04.red.png",
    "1989": "/mi-repo/images/Emojis/05.1989.png",
    reputation: "/mi-repo/images/Emojis/06.reputation.png",
    lover: "/mi-repo/images/Emojis/07.lover.png",
    folklore: "/mi-repo/images/Emojis/08.folklore.png",
    evermore: "/mi-repo/images/Emojis/09.evermore.png",
    midnights: "/mi-repo/images/Emojis/10.midnights.png",
    TTPD: "/mi-repo/images/Emojis/11.TTPD.png",
    mashup: "/mi-repo/images/Emojis/12.MashUp.png",
    piano: "/mi-repo/images/Emojis/13.piano.png",
    pelicula: "/mi-repo/images/Emojis/14.Pel\xEDcula.png",
    setlist: "/mi-repo/images/Emojis/15.setlist.png",
    guitarra: "/mi-repo/images/Emojis/16.guitarra.png",
    cantante: "/mi-repo/images/Emojis/17.cantante.png",
    sinCantar: "/mi-repo/images/Emojis/cross-mark_274c (1).png"
  };
  const imagen = imageEmojie[emojie] || "/mi-repo/images/Emojis/19.nada.png";
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imagen, "src")}${addAttribute([
    "w-[18px] h-[18px] relative",
    {
      "hidden": imagen === "/mi-repo/images/Emojis/19.nada.png",
      "opacity-0": imagen === "/mi-repo/images/Emojis/cross-mark_274c (1).png"
    }
  ], "class:list")}${addAttribute(emojie, "alt")}>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/Emojie.astro", void 0);

const eras = [
	{
		albums: "debut",
		logo: "/mi-repo/images/Logos-Discos/01-Logo-Debut.png",
		foto: "/mi-repo/images/Fotos/01-TaylorSwift.png",
		portada: "/mi-repo/images/Portadas-Discos/01-Portada-TaylorSwift.png",
		emojie: "/mi-repo/images/Emojis/01.taylorSwift.png",
		linkPage: "/mi-repo/eras/01-debut",
		Spotify: "https://open.spotify.com/intl-es/album/5eyZZoQEFQWRHkV2xgAeBw?si=2dL1AZfiTG-Zo0FImYfsHg",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_n4ff33EEbSLpX0kTDnxNsHe1X0U8AUj7Q&si=kGdSAlM3oi-Wenav",
		anterior: "/mi-repo/eras/12-mashup",
		siguiente: "/mi-repo/eras/02-fearless",
		canciones: [
			{
				title: "Tim McGraw x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Glendale, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapore, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Picture To Burn",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Denver, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Teardrops on My Guitar",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 5,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Melbourne, Australia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "A Place in this World",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 22,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Houston, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Cold As You",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Houston, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Outside",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tokyo, Japón"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Tied Together with a Smile",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Seattle, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Stay Beautiful",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Río de Janeiro, Brasil"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Should've Said No x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 19,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Foxborough, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 24,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Sidney, Australia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Mary's Song (Oh My My My)",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 6,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Amsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Our Song x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Las Vegas, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 30,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I'm Only Me When I'm With You",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 30,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Cincinnati, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Invisible",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 20,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Foxborough, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "A Perfectly Good Heart",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
		],
		notas: [
		]
	},
	{
		albums: "fearless",
		logo: "/mi-repo/images/Logos-Discos/02-Logo-Fearless.png",
		foto: "",
		portada: "public/images/Portadas-Discos/02-Portada-Fearless.png",
		emojie: "public/images/Emojis/02.fearless.png",
		linkPage: "/mi-repo/eras/02-fearless",
		Spotify: "https://open.spotify.com/album/4hDok0OAJd57SingapurIT8xuWJH?si=pntFCTVKQ1GCRV-AptxPSQ",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mGRDKgRDJtrpyw25zrYD7Rl56ACL1Oiy8&si=QGZ_UvbUg0nL3c4O",
		anterior: "/mi-repo/eras/01-debut",
		siguiente: "/mi-repo/eras/03-speakNow",
		canciones: [
			{
				title: "Fearless",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Fifteen x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 6,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 7,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapore, Singapore"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lyon, FR"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Love Story",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Hey Stephen x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Philadelphia, US"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 11,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Paris - FR"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 18,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "White Horse x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Las Vegas, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 23,
							mes: 2,
							"año": 2024
						},
						cantSorp: "Sabrina Carpenter",
						instrumento: "piano",
						lugar: "Sydney, Australia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "cantante",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "You Belong With Me",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Breathe",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Detroit, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Tell Me Why x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Mexico City, Mexico"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapore, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "You're Not Sorry x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 21,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Houston, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 24,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Sidney, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 24,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Way I Loved You",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Forever & Always x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 13,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Philadelphia, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 26,
							mes: 2,
							"año": 2024
						},
						cantSorp: "mashup",
						instrumento: "piano",
						lugar: "Sydney, Australia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Best Day",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Philadelphia, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Change",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Jump Then Fall x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 2,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 30,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Untouchable x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sao Pablo, Brasil"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Amsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Come In With The Rain",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tokyo, Japón"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Superstar",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Other Side Of The Door",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Atlanta, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 17,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Atlanta, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 24,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Today Was A Fairytale",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 22,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Houston, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "You All Over Me",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 6,
							"año": 2023
						},
						cantSorp: "Maren Morris",
						instrumento: "guitarra",
						lugar: "Chicago, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "cantante",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Mr. Perfectly Fine x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 16,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Pittsburgh, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "We Were Happy",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Hamburgo, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "That's When",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Don't You",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Munich, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Bye Bye Baby",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "Crazier",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edinburgh, Escocia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
		]
	},
	{
		albums: "speakNow",
		logo: "/mi-repo/images/Logos-Discos/03-Logo-SpeakNow.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/03.speakNow.png",
		linkPage: "/mi-repo/eras/03-speakNow",
		Spotify: "https://open.spotify.com/album/5AEDGbliTTfjOB8TSm1sxt?si=QGoLcB9fSNqYHoDss1Xcew",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_ne0DpedKNeKeFyjQ86_6DJHyCGCjqHOv8&si=BY4PdaBF5tuDtuKR",
		anterior: "/mi-repo/eras/02-fearless",
		siguiente: "/mi-repo/eras/04-red",
		canciones: [
			{
				title: "Mine x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 2,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 13,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Sparks Fly x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 5,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 8,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 29,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Back to December",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Denver, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Speak Now x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 13,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tampa, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Dear John",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Minneapolis, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Mean x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tampa, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 22,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Londres, Gran Bretaña"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Story of Us x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Pittsburgh, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 3,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Never Grow Up x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Kansas City, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 10,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Enchanted",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Better Than Revenge",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 12,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Buenos Aires, Argentina"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Innocent",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "São Paulo, Brasil"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Haunted x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Detroit, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edimburgo, Gran Bretaña"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Last Kiss x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Kansas City, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Long Live",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "piano",
					tercer: "mashup",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Ours x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 31,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 29,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublin, Italia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "If This Was a Movie",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Minneapolis, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Superman",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tokio, Japón"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Electric Touch",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tokio, Japón"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "When Emma Falls in Love",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Kansas City, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Can See You x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 13,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Castles Crumbling",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Santa Clara, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 22,
							mes: 6,
							"año": 2024
						},
						cantSorp: "Hayley Williams",
						instrumento: "piano",
						lugar: "London, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "cantante",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Foolish One",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 4,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Timeless",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Denver, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
		],
		notas: [
		]
	},
	{
		albums: "red",
		logo: "/mi-repo/images/Logos-Discos/04-Logo-Red.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/04.red.png",
		linkPage: "/mi-repo/eras/04-red",
		Spotify: "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=POpkHfahROCaIDHfZZ6O1A",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_l1Em5x2MlWyFc1w_7ayxQc6qVLVUbhaME&si=aChi0t8ijiwOJyod",
		anterior: "/mi-repo/eras/03-speakNow",
		siguiente: "/mi-repo/eras/05-1989",
		canciones: [
			{
				title: "State of Grace x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 18,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Glendale, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 28,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, Irlanda"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "piano",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Red x4",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 21,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Foxborough, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 16,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Melbourne, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 15,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Liverpool, Inglaterra"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "piano",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Treacherous x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 13,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tampa, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 12,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "París, Francia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "guitarra",
					tercer: "mashup",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Knew You Were Trouble",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "22",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Almost Do x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Detroit, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 13,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "We Are Never Ever Getting Back Together",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Stay Stay Stay x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Santa Clara, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Last Time",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 16,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Pittsburgh, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Holy Ground x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 27,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 7,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tokio, Japón"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 6,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "piano",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Sad Beautiful Tragic x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 31,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "piano",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Lucky One x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 2,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 30,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, Irlanda"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "guitarra",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Everything Has Changed x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 22,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Seattle, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 3,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lyon, Francia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 6,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "guitarra",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Starlight x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Denver, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 2,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Begin Again x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Houston, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 12,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "París, Francia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "piano",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Moment I Knew x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 4,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Chicago, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 13,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Come Back… Be Here x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 12,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Filadelfia, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Melbourne, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 21,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "guitarra",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Girl At Home",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Ronan",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Better Man x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 19,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Foxborough, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Nothing New * ",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 28,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublín, Irlanda"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 24,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Hamburgo, Alemania"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Babe",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Message in a Bottle x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Seattle, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Estocolmo, Suecia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Bet You Think About Me",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 30,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Atlanta, EE UU"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Forever Winter",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Run",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Very First Night",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Buenos Aires, Argentina"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "All Too Well (10 Minute Version)",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "Safe & Sound",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "São Paulo, Brasil"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Eyes Open",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tokio, Japón"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
			{
				nota: "Nothing New: Fué parte del setlist en las fechas que Phoebe Bridgers fue telonera"
			}
		]
	},
	{
		albums: "1989",
		logo: "/mi-repo/images/Logos-Discos/05-Logo-1989.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/05.1989.png",
		linkPage: "/mi-repo/eras/05-1989",
		Spotify: "https://open.spotify.com/album/64LU4c1nfjz1t4VnGhagcg?si=6jGmboIjQQGLw4ZhGLgk1Q",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_ncKvykObOe16WxrmZEAlCbWBRZm2Utaqk&si=7knSFf82aVTHBnw3",
		anterior: "/mi-repo/eras/04-red",
		siguiente: "/mi-repo/eras/06-reputation",
		canciones: [
			{
				title: "Welcome to New York x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Estocolmo, Suecia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Blank Space",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Style",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Out of the Woods x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 6,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "All You Had to Do Was Stay x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Detroit, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Shake It Off",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Wish You Would x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Chicago, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Sydney, Australia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Bad Blood",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Wildest Dreams",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "This Love x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 13,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Philadelphia, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 29,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublin, IE"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Know Places x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 7,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edinburgh, GB"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Clean x5",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 1,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 28,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 3,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 18,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Estocolmo, Suecia"
					},
					{
						tipo: "dia 5",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Wonderland x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 21,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Houston, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 13,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "New Romantics x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Estocolmo, Suecia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "\"Slut!\" x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 12,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Buenos Aires, Argentina "
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 8,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 17,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Say Don't Go x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 26,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "São Paulo, Brasil"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Estocolmo, Suecia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Now That We Don't Talk x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "São Paulo, Brasil"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Suburban Legends",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Río de Janeiro, Brasil"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Is It Over Now? x4",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 11,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Buenos Aires, Argentina "
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Sydney, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 10,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "París, Francia"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "Sweeter Than Fiction",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 6,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "This Is What You Came For",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
		]
	},
	{
		albums: "reputation",
		logo: "/mi-repo/images/Logos-Discos/06-Logo-Reputation.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/06.reputation.png",
		linkPage: "/mi-repo/eras/06-reputation",
		Spotify: "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=vWGKP9kdQ-abrvYyXNfGHQ",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_l82R_qfJluzeSGxUyghbnvS_49xIyTfYE&si=Gl4WwmvpYQRazROp",
		anterior: "/mi-repo/eras/05-1989",
		siguiente: "/mi-repo/eras/07-lover",
		canciones: [
			{
				title: "...Ready For It?",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "End Game",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 11,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Buenos Aires, Argentina"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Did Something Bad",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Don't Blame Me",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Delicate",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Look What You Made Me Do",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "So It Goes...",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 20,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Río de Janeiro, Brasil"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Gorgeous x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Atlanta, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 17,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Solna, Estocolmo"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "guitarra",
					tercer: "mashup",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Getaway Car x4",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 26,
							mes: 5,
							"año": 2023
						},
						cantSorp: "Jack Antonoff",
						instrumento: "guitarra",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 17,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Melbourne, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 8,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edimburgo, Escocia"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 14,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "piano",
					tercer: "cantante",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "King of My Heart x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 30,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Dancing With Our Hands Tied x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 19,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Río de Janeiro, BR"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 29,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Call It What You Want x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 1,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Cincinnati, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "New Year's Day x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 24,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "I Don't Wanna Live Forever x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Chicago, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 2,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
		]
	},
	{
		albums: "lover",
		logo: "/mi-repo/images/Logos-Discos/07-Logo-Lover.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/07.lover.png",
		linkPage: "/mi-repo/eras/07-lover",
		Spotify: "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq?si=S3EhXOPxTFWEqkX2lwrXsQ",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_nAF_sXI8U1xc8DjaTMUcf7v1BTxYfCQTQ&si=7MliI2sqTObi84ox",
		anterior: "/mi-repo/eras/06-reputation",
		siguiente: "/mi-repo/eras/08-folklore",
		canciones: [
			{
				title: "I Forgot That You Existed x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Cardiff, Gales"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Cruel Summer",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Lover",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Man",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Archer",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 4,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Amsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Think He Knows x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 21,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Foxborough, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 17,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Solna, Estocolmo"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Miss Americana & The Heartbreak Prince",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Paper Rings x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Minneapolis, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Cornelia Street x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 26,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 13,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Death By A Thousand Cuts x4",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 1,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Arlington, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 5,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 7,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 21,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "London Boy",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Soon You'll Get Better",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "False God x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 27,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 8,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 17,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Afterglow",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 27,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ciudad de México, México"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "ME!",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 20,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Río de Janeiro, BR"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "It's Nice To Have A Friend",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Daylight x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Minneapolis, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Melbourne, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 7,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "All Of The Girls You Loved Before x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Santa Clara, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 8,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Only The Young",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
		]
	},
	{
		albums: "folklore",
		logo: "/mi-repo/images/Logos-Discos/08-Logo-Folklore.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/08.folklore.png",
		linkPage: "/mi-repo/eras/08-folklore",
		Spotify: "https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=Bj14lR1_RwWPSingapurkGWZA7Qg",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_lAQWiZVWU7ImDOQV9WsKjMAlLXSfWROXU&si=Tl_1BSfyXLgqXCDd",
		anterior: "/mi-repo/eras/07-lover",
		siguiente: "/mi-repo/eras/09-evermore",
		canciones: [
			{
				title: "the 1",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 13,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Milán, Italia"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "mashup",
					tercer: "guitarra",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "cardigan",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "the last great american dynasty",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Hamburgo, Alemania"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "mashup",
					tercer: "guitarra",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "exile x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "my tears ricochet",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "mirrorball x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "acústico",
						lugar: "Glendale, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "seven",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 6,
							"año": 2023
						},
						cantSorp: "Aaron Dessner",
						instrumento: "piano",
						lugar: "Pittsburgh, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "cantante",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "august",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Melbourne, Australia"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "mashup",
					tercer: "guitarra",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "this is me trying x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 18,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Glendale, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 17,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Melbourne, Australia"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 18,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "invisible string",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "guitarra",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "mad woman",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 4,
							"año": 2023
						},
						cantSorp: "Aaron Dessner",
						instrumento: "piano",
						lugar: "Tampa, EE UU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "cantante",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "epiphany",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "betty",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "peace",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "hoax",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "the lakes x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Chicago, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Cardiff, Gales"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "Carolina",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
			{
				nota: "A partir de la primera fecha en Arlington, «Invisible String» fue reemplazada por «The 1». Sin embargo, esta última fue interpretada nuevamente en la segunda fecha de Nashville."
			},
			{
				nota: "La canción Seven es interpretada como poesía en el interludio de red y folklore, durante la primera parte del tour, con algunas partes de Wildest Dreams "
			}
		]
	},
	{
		albums: "evermore",
		logo: "/mi-repo/images/Logos-Discos/09-Logo-Evermore.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/09.evermore.png",
		linkPage: "/mi-repo/eras/09-evermore",
		Spotify: "https://open.spotify.com/album/2Xoteh7uEpea4TohMxjtaq?si=Wtf-xjXLQwKPRNBSCZcCEg",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mHOONmW7kSUOYZeXHYBakzyhyAdSmThSc&si=fZCpBO3Gu_v_wPzz",
		anterior: "/mi-repo/eras/08-folklore",
		siguiente: "/mi-repo/eras/10-midnights",
		canciones: [
			{
				title: "willow",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "champagne problems",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "gold rush x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 12,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Philadelphia, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 8,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 14,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "'tis the damn season",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "tolerate it",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "no body, no crime * ",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "happiness",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Hamburgo, DE"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "dorothea x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Kansas City, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "guitarra",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "coney island x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Atlanta, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 23,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "cowboy like me x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Las Vegas, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 5,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "piano",
					tercer: "mashup",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "long story short x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lyon, Francia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "marjorie",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "closure",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "evermore x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 30,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Cincinnati, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 3,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "right where you left me x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 28,
							mes: 7,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Santa Clara, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 9,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "it's time to go x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 26,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "São Paulo, Brasil"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 19,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
		],
		notas: [
			{
				nota: "*No Body, No Crime: Esta canción fue incluida en el setlist en lugar de 'tis the damn season durante las fechas en las que el grupo Haim fueron teloneras"
			}
		]
	},
	{
		albums: "midnights",
		logo: "/mi-repo/images/Logos-Discos/10-Logo-Midnights.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/10.midnights.png",
		linkPage: "/mi-repo/eras/10-midnights",
		Spotify: "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=VeBZpMegQSSlneHkbOpgrQ",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_nwM2VykawOmNH-z3L283XEI95Jb-sxIBo&si=DmjGFdH7Y5oNR0a5",
		anterior: "/mi-repo/eras/09-evermore",
		siguiente: "/mi-repo/eras/11-TTPD",
		canciones: [
			{
				title: "Lavander Haze",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Maroon x7",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 26,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "East Rutherford, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 3,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 27,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 26,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					},
					{
						tipo: "dia 5",
						fecha: {
							dia: 11,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "París, Francia"
					},
					{
						tipo: "dia 6",
						fecha: {
							dia: 13,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Liverpool, Inglaterra"
					},
					{
						tipo: "dia 7",
						fecha: {
							dia: 21,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Anti-Hero",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Snow on the Beach x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 3,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Las Vegas, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 25,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 29,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "You're on Your Own, Kid x9",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tampa, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 5,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Inglewood, EE UU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 26,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 4",
						fecha: {
							dia: 10,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Tokio, JP"
					},
					{
						tipo: "dia 5",
						fecha: {
							dia: 7,
							mes: 3,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Singapur, Singapur"
					},
					{
						tipo: "dia 6",
						fecha: {
							dia: 25,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lisboa, Portugal"
					},
					{
						tipo: "dia 7",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lyon, Francia"
					},
					{
						tipo: "dia 8",
						fecha: {
							dia: 28,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, IE"
					},
					{
						tipo: "dia 9",
						fecha: {
							dia: 30,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "guitarra",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Midnight Rain",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Question…? x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 20,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Foxborough, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Vigilante Shit",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Bejeweled",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Labyrinth x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Buenos Aires, Argentina "
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 18,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Gelsenkirchen, Alemania"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Karma",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Sweet Nothing x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 8,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Ciudad de México, México"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 28,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Mastermind",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Great War x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 14,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tampa, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 14,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Bigger Than the Whole Sky",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 19,
							mes: 11,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Río de Janeiro, BR"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Paris",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "París, Francia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "High Infidelity x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 4,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Atlanta, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 24,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "piano",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Glitch",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lyon, Francia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Would've, Could've, Should've x3",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 5,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Nashville, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 26,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Sídney, AU"
					},
					{
						tipo: "dia 3",
						fecha: {
							dia: 7,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Dear Reader x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 7,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Tokio, JP"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 24,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Hamburgo, DE"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Hits Different x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 4,
							mes: 6,
							"año": 2023
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Chicago, EE UU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 21,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "You're Losing Me x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 16,
							mes: 2,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Sídney, AU"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
		],
		notas: [
			{
				nota: ""
			},
			{
				nota: ""
			}
		]
	},
	{
		albums: "TTPD",
		logo: "/mi-repo/images/Logos-Discos/11-Logo-TTPD.png",
		foto: "",
		portada: "",
		emojie: "public/images/Emojis/11.TTPD.png",
		linkPage: "/mi-repo/eras/11-TTPD",
		Spotify: "https://open.spotify.com/album/1Mo4aZ8pdj6L1jx8zSwJnt?si=UXBJ5yJERz-J4i-Q9eA8eQ",
		YTMusic: "https://music.youtube.com/playlist?list=OLAK5uy_m6rFWXAYFIFVIaeyn8w6kzM38Rj5D3trg&si=NF5hLtzQPVJYpsbE",
		anterior: "/mi-repo/eras/10-midnights",
		siguiente: "/mi-repo/eras/01-debut",
		canciones: [
			{
				title: "Fortnight",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Tortured Poets Department",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 25,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "My Boy Only Breaks His Favorite Toys",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "París, Francia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Down Bad",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "So Long, London",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "sinCantar",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "But Daddy I Love Him",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Fresh Out The Slammer",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 24,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lisboa, Portugal"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Florida!!!",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Guilty as Sin? x2",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 18,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Solna, Estocolmo"
					},
					{
						tipo: "dia 2",
						fecha: {
							dia: 4,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Who's Afraid of Little Old Me?",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Can Fix Him (no really i can)",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "loml",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 9,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "París, Francia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Can Do It With a Broken Heart",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Smallest Man Who Ever Lived",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Alchemy",
				info: [
					{
						tipo: null,
						fecha: {
							dia: null,
							mes: null,
							"año": null
						},
						cantSorp: null,
						instrumento: null,
						lugar: null
					}
				],
				etiquetas: {
					principal: "setlist",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Clara Bow",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 30,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Black Dog",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 21,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "imgonnagetyouback",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 5,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Ámsterdam, Países Bajos"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Albatross",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Dublín, IE"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Chloe or Sam or Sophia or Marcus",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 3,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Lyon, Francia"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "How Did It End?",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 19,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Solna, Estocolmo"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Hate It Here",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 18,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Cardiff, Gales"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "thank you aimee",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 22,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "I Look in People's Windows",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 29,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Madrid, España"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Prophecy",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 2,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Lyon, Francia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Peter",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 17,
							mes: 5,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Solna, Estocolmo"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Bolter",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 8,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra",
						lugar: "Edimburgo, Escocia"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "Robin",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 10,
							mes: 7,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Zúrich, Suiza"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "mashup",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			},
			{
				title: "The Manuscript",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 15,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "piano",
						lugar: "Liverpool, Inglaterra"
					}
				],
				etiquetas: {
					principal: "piano",
					segundo: "N/A",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		extras: [
			{
				title: "us.",
				info: [
					{
						tipo: "dia 1",
						fecha: {
							dia: 23,
							mes: 6,
							"año": 2024
						},
						cantSorp: null,
						instrumento: "guitarra y piano",
						lugar: "Londres, Inglaterra"
					}
				],
				etiquetas: {
					principal: "guitarra",
					segundo: "piano",
					tercer: "N/A",
					cuarto: "N/A",
					quinto: "N/A",
					sexto: "N/A"
				}
			}
		],
		notas: [
		]
	}
];

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$ArrowLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowLeft;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
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
    ],
    "class:list"
  )}> <path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/ArrowLeft.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
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
    ],
    "class:list"
  )}> <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/ArrowRight.astro", void 0);

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const { era, boton, pagAnt, pagSig } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="Inicio"${addAttribute([
    "sm:px-32 px-14 flex flex-col items-center justify-center self-stretch shrink-0 relative py-24 sm:py-40 space-y-8 bg-cover bg-no-repeat bg-center w-full",
    {
      "bg-fondos-debut": era === "debut",
      "bg-fondos-fearless": era === "fearless",
      "bg-fondos-speakNow": era === "speakNow",
      "bg-fondos-red": era === "red",
      "bg-fondos-1989": era === "1989",
      "bg-fondos-reputation": era === "reputation",
      "bg-fondos-lover": era === "lover",
      "bg-fondos-folklore": era === "folklore",
      "bg-fondos-evermore": era === "evermore",
      "bg-fondos-midnights": era === "midnights",
      "bg-fondos-TTPD": era === "TTPD",
      "bg-fondos-mashup": era === "mashup"
    },
    {
      "py-28": boton === false
    }
  ], "class:list")}${addAttribute(renderTransition($$result, "a655uxbg", "", "hero-image"), "data-astro-transition-scope")}> <!-- derechos de las imagenes  --> <p${addAttribute([
    "text-center text-body-large absolute left-[30px] bottom-[30px]",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    },
    {
      "hidden": era === "TTPD"
    }
  ], "class:list")}>
© Disney. All rights reserved.
</p> <p${addAttribute([
    "text-center text-body-large absolute left-[30px] bottom-[30px]",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    },
    {
      "hidden": era !== "TTPD"
    }
  ], "class:list")}>
© Taylor Swift, from her official YouTube channel.
</p> <!-- Titulo --> <div class="flex flex-col gap-space-200 items-center justify-center shrink-0 relative space-y-2 overflow-hidden"> <h1${addAttribute([
    "text-center text-display-small text-display-large relative self-stretch",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    }
  ], "class:list")}>
Swifties Eras Tour
</h1> <div${addAttribute(`text-center text-headline-small relative self-stretch flex items-center justify-center capitalize text-${era}-400`, "class")} , style="mix-blend-mode: color-dodge"> ${era} </div> </div> <a class="absolute left-4 y-1/2"${addAttribute(pagAnt, "href")}> ${renderComponent($$result, "ArrowLeft", $$ArrowLeft, { "era": era })} </a> <a class="absolute right-4 y-1/2"${addAttribute(pagSig, "href")}> ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "era": era })} </a> <!-- botones CTA --> <div${addAttribute([
    "flex-row gap-space-400 items-center justify-center shrink-0 relative space-x-4 hidden",
    {
      "sm:flex": boton === true
    }
  ], "class:list")}> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "/mi-repo/outfits", "icono": null }, { "default": ($$result2) => renderTemplate`
Outfits
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "#Conciertos", "icono": null }, { "default": ($$result2) => renderTemplate`
Conciertos
` })} </div> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/sections/HeroImage.astro", "self");

export { $$HeroImage as $, $$Emojie as a, eras as e };
