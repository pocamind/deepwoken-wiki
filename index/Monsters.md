---
title: Monsters
revid: 59493
source: https://deepwoken.fandom.com/wiki/Monsters
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Monsters, Mechanics]
---

# Monsters

_This page is for Monster enemies. For humanoid enemies, see [**Enemies.**](Enemies.md) For Bosses, see **[Bosses.](Bosses.md)**_

**Monsters** are inhuman hostile NPCs that will attack the player, but are different from human enemies. Most will not utilize strategies like parrying.

## Description

One of Deepwoken's finest, and arguably primary focuses, are the Monsters, animals that have adapted to the crumbling world around them, preying on the numerous adventurers across the Luminants. Monsters are embedded to the game as a multi-purpose tool, being a roadblock to better gear, armor, [Mantra Modifiers](Mantra_Modifiers.md), new areas, but most importantly: being a fundamentals check. They can tear players apart if they're unprepared, unlucky, or unskilled, and cannot be beaten without proper skill and technique. In addition, they serve as a way for a player to gauge their skills; if a player can't even beat a Monster, what makes them think they can beat another player?

While each Monster has unique attacks and patterns, they all share one thing; You can learn them. almost every Monster, **even up to the Dread Serpent**, can be beaten as a fresh spawn with enough memorization and technique, however, do note that some monsters (e.g Mobs in the depths (Scyphozia, EternalGale), Primadon) have strict time limits, and as such, will require leveling in order to beat.

The majority of non-humanoid monsters you encounter in-game will have hyper armor. Meaning any attacks they dish out cannot be stopped through stun.

### The Depths

**In The Depths, Monsters have significant differences**, some easily noticeable, and others, not so much. Some changes include:

-   No longer attack each other based on species, instead completely focusing on players.
-   Benefiting from the lower gravity of The Depths, being able to jump much higher to pursue players.
-   Being much more aware, noticing players from further away, or even behind them.
-   Gaining new behaviors/abilities, such as Lionfish Beam.
-   Becoming much more persistent in chasing, rarely stopping until the death of them or the player.
-   Being able to spawn as an Enhanced (commonly known as Corrupted) version, signified by a purple aura, dealing roughly double the damage and having triple the health of their normal versions.

  

## Humanoid Monsters

### Humanoid Monsters

**Exclusive to the Etrean Luminant & The Depths: Scyphozia (Layer 1)**

**Exclusive to Trial of One**

  

## Non-Humanoid Monsters

### 

**Etrean Luminant**

**Lower Erisia:**

**Upper Erisia:**

**Minityrsa:**

**Voidsea:**

### 

**Eastern Luminant**

**Songseeker Wilds:**

**Aratel Island:**

**Miner's Landing:**

**Meteor Isle:**

**Monkey's Paw:**

**Voidsea:**

### 

**The Depths**

**Scyphozia (Layer 1):**

**Eternal Gale (Layer 2/F1):**

**New Kyrsa (Layer 2/F2):**

### 

**Dungeons**

**Trial of One:**

**Duke's Manor:**

## Monster Hunting Advice

While most of the ways to fight a Monster are specific to what kind it is, there are generally a few good rules that apply to most, if not all monsters.

-   **If an attack has a red aura/effect to it, it _CANNOT_ be blocked normally and must be dodged.** These attacks are generally slower than regular attacks, giving you more time to dodge. The only way to block them is using Hunters Brace, or using the [Ignition Deepdelver](Ignition_Deepdelver.md) Outfit.
-   **Take extreme caution if you decide to run from a monster, especially at low health.** Many Monsters have tools specifically designed to catch runners, such as the Megalodaunt's long-range barnacle spray. If you absolutely have to run, be smart about it. Abuse buildings and other obstacles to your advantage or defend against such long ranged attacks. Additionally, many Monsters are MUCH more intimidating compared to their actual attacks. Even if they LOOK scary, many Monsters have much lower stats than their infamy/appearance would suggest, for example: Owl only has 1.5x the health of a Thresher.
-   **Practice makes perfect.** Try and fight Monsters in safe situations where you have little to no risk of dying, such as the Megalodaunt cave. Being unprepared is worse than fighting the Monsters themselves. _The absolute **worst** thing to do possible is to jump into a fight with a Monster you've never fought, or even worse, never even seen before._ While **many** Monsters are indeed weaker than they look, **others are the opposite and are deceptively strong.** For example: Despite Blizzard Knights looking somewhat spindly and near-identical to their (much weaker) Sand counterparts, they have the most health of any non-boss Monster.
-   **Monsters are affected by most things a player would be affected by**, including:
    -   Potions
    -   Status Effects
    -   Flinging
-   **Most monsters can be posture stunned.** While humanoid NPCs can be posture broken, most monsters can be Posture Stunned instead (on rare occasion, some can both be posture stunned and posture broken). Depending on your ability to deal posture damage, hitting a monsters fills their posture stun bar (not shown to the player, and separate from the regular posture bar). When its full, the monster will be stunned for 4 seconds, unable to do anything. This is represented by the red spark that appear on them, a noticeable sound effect and them becoming motionless. During this time, they lose all their resistances and cannot attack or defend themself.

## PVE Scaling

If you have looked at Monster's health on their pages, you might have noticed how they have absolutely **absurd** health, like how the Megalodaunt apparently has 1000 health. What's happening here? At max, a weapon does like 30-50 damage, does it take a max player 20 to 34 hits to kill one? Not really.

When you level up, you automatically gain bonus damage during PVE, which is currently around **(10.38% x 3).** This bonus damage applies to **every** NPC and Monster and is applied on **every** level. This is why even when someone does not upgrade their weapons damage, they still are able to kill Monsters much faster than a lower level with the same weapon damage. This scaling very quickly becomes crazy in its own right, (to cope with the Monster's crazy health, of course), and towards the endgame, people can kill monsters with thousands of health in a few hits.

Calculating how much health a Monster has from just your damage alone won't be correct, you need to factor in your Power.

### Formulas

The formulas that you need to calculate how many hits are required to kill a monster are the following:

D a m a g e P e r M 1 \= ( 3 ( P o w e r + 3.33 ) ) × ( W e a p o n D a m a g e × ( D m g V S M o n s t e r s % 100 + 1 ) × 0.089 ) {\\displaystyle DamagePerM1 = (3(Power + 3.33)) \\times (WeaponDamage \\times (\\tfrac{DmgVSMonsters\\%}{100} + 1) \\times 0.089)} {\\displaystyle DamagePerM1=(3(Power+3.33))\\times (WeaponDamage\\times ({\\tfrac {DmgVSMonsters\\%}{100}}+1)\\times 0.089)}  
H i t s \= M o n s t e r H e a l t h ( 100   −   R e s i s t a n c e % 100 )   ×   D a m a g e {\\displaystyle Hits = \\tfrac{MonsterHealth}{(\\tfrac{100 ~ - ~ Resistance\\%}{100}) ~ \\times ~ Damage}} {\\displaystyle Hits={\\tfrac {MonsterHealth}{({\\tfrac {100~-~Resistance\\%}{100}})~\\times ~Damage}}}

Example: If you were to fight a a Stone Knight with 9000 health and 55% resistance to slashing, using a weapon that does 40 damage per hit, while having 10% Damage VS Monsters and being at level 20, you would do:

D a m a g e P e r M 1 \= ( 3 ( 20 + 3.33 ) ) × ( 40 × ( 10 100 + 1 ) × 0.089 ) \= 274.12 {\\displaystyle DamagePerM1 = (3(20 + 3.33)) \\times (40 \\times (\\tfrac{10}{100} + 1) \\times 0.089) = 274.12} {\\displaystyle DamagePerM1=(3(20+3.33))\\times (40\\times ({\\tfrac {10}{100}}+1)\\times 0.089)=274.12} H i t s \= 9000 ( 100   −   55 100 )   ×   274.12 \= 73 ( 72.9607471181 ) {\\displaystyle Hits = \\tfrac{9000}{(\\tfrac{100 ~ - ~ 55}{100}) ~ \\times ~ 274.12} = 73 (72.9607471181)} {\\displaystyle Hits={\\tfrac {9000}{({\\tfrac {100~-~55}{100}})~\\times ~274.12}}=73(72.9607471181)}

(The PVE scaling calculator is currently unavailable.)

## Trivia

-   Creatures have predictable and easy to learn attack patterns.
-   Most creatures have the means to catch a Player who runs, an example being the [Megalodaunt](Megalodaunt.md)'s ranged attack, or the Rock golems beam attack.
-   A handful of the creatures have materials that are required to make certain equipment or items. If you want to be stronger, you're going to have to do some hunting.
-   NOT all attacks can be parried; Buy a Hunter Brace at the Summer Island to be able to.
-   Some creatures will fight each other; Multiple can fight at the same time. Example [Here](https://youtu.be/01uQchtfUvw), [Also Here](https://www.youtube.com/watch?v=Su6IU88g7PM&t=37s)
-   Some variants of some creatures are limited to The Depths, and others are only in The Overworld
-   Monsters can only be in one family at once, even if in a situation where it'd make sense they'd overlap
    -   Although many may consider Megalodaunts to be a "Giant Monster". The Megalodaunt Hide reveals they are native from the Depths.
