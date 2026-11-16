# ai-excited-01 — The Phoenix Rises

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/gaplek15/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/gaplek15/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A giant phoenix rises from golden embers beneath a dawn sky, wings spread wide, ash and sparks below, climbing through fire toward the light — one breathtaking moment of rebirth.

Entry for make.fun's ["Make the AI judge excited" bounty](https://make.fun/bounty/ai-excited-01) ($250 in USDC).

## Filosofi

Phoenix itu kebangkitan dari kegagalan: ia lahir kembali dari abu dan terbang lebih kuat dari sebelumnya. Entry ini sendiri adalah buktinya — submission pertamanya (paus di bawah aurora) ditolak di Round 1, lalu dibangun ulang dari nol di sesi baru yang direkam: gambar baru, kode baru, dan diajukan lagi. Bukan sekadar gambar burung api; ini cerita tentang jatuh, lalu bangkit lagi.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program validates `entry.png` (real PNG, at most 1 MiB, at most 1024 by 1024 pixels), then copies it to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the output directory first if needed, and logs the output's dimensions and sha256.

## Referral

Built for make.fun — join with referral code `d9kag417`: https://make.fun/r/d9kag417
