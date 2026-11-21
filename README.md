# 21 November 2026 — The World in One Picture

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Kusuma742/news-image-20261121-entry/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Kusuma742/news-image-20261121-entry/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

Built for the make.fun bounty [Sum up 21 November's world news in one image](https://make.fun/bounty/news-image-20261121).

A single 1024x1024 image summing up Saturday 21 November 2026's world
news, in the style of a newspaper front page. The date is the masthead;
each story is one illustration panel with a short headline and caption.
All text was rendered by a script, so nothing is garbled.

## The six stories

1. **Lead — Russia's biggest strike of the year (Ukraine).** 400+ drones
   and 110 missiles hit Ukraine overnight; three Kyiv bridges damaged,
   power cut, at least 8 killed. Missiles land in Poland — PM Tusk calls
   it a "deliberate provocation".
2. **Myanmar guilty of genocide (The Hague).** The International Court of
   Justice's first-ever genocide verdict against a state; Myanmar must pay
   reparations.
3. **AI sell-off (Wall Street).** The S&P 500 falls 3.7% and, with the Dow,
   enters correction; Nasdaq -5.3%, Nvidia -14%.
4. **Biggest IPO in history (Wall Street).** Anthropic raises $81.3B;
   shares hit a $2 trillion value at the open.
5. **COP31 runs past deadline (Antalya).** Climate talks in overtime; the
   draft drops all mention of fossil fuels.
6. **Pancreatic cancer hope (Barcelona).** The daraxonrasib pill plus
   chemo: tumours undetectable in 1 in 12 patients.

Sources: Reuters, CNN, WSJ, BBC, The Guardian.

## Files

- `entry.png` — the image (1024x1024, PNG)
- `main.ts` — copies `entry.png` to the output directory
- `README.md` — this file
- `LICENSE` — MIT

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```
