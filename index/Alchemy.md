---
title: Alchemy
revid: 159081
source: https://deepwoken.fandom.com/wiki/Alchemy
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Mechanics, Ingredients, Items, Alchemy]
---

# Alchemy

## Basics

Alchemy is the process of creating potions at a [Cauldron](Cauldron.md). Potions can have many different effects depending on the ingredients used and can be drunk or thrown.

To brew a potion, you hold ingredients in your hand, add them to a cauldron by clicking on it, and then press E to mix all the ingredients in the cauldron into a potion. Each ingredient has a unique combination of effects, and a potion's effect is the sum of all the effects from ingredients used in the potion. Up to 3 copies of the same ingredient can be used in a potion, and up to 5 ingredients can be used in total - exceeding these limits will result in a diluted potion, with reduced effects. A table of all ingredient effects can be found further down the page.

Potion Potency is a stat found on all potions. This stat increases the effectiveness of all potion effects by a percentage. Potion Potency is equal to your Intelligence [attribute](Attributes.md) divided by 2. This caps at 50% with 100 Intelligence, going above 100 Intelligence won't grant more Potency. Additionally, the _Apothecary_ Talent grants +125% Potency.

### Using Potions

Once brewed, potions can be drunk by holding them and pressing M1. Drinking a potion takes 2.35 seconds, prevents you from sprinting or rolling, and will be cancelled (wasting the potion) if you take damage while drinking. Drinking potions has a 20 second cooldown called "Potion Sickness". If you drink a potion during the cooldown, you will throw up and will not get the potion effect. Potions last 15s by default.

You can also throw potions by holding them and pressing E - this usually applies a slightly weaker version of the potion effect to anyone standing near the potion when it explodes. It takes approximately 2 seconds to throw a potion, and you can only throw a potion once your previous potion has landed, but if you have multiple different potions (in different inventory slots), you can throw one of each at a time. Throwing a potion can be done while sprinting and does not slow you down. Throwing potions also allows you to apply the effects of multiple potions at the same time, effectively bypassing the potion cooldown.

Only one potion effect can be active at a time. Applying a new effect to a character that already has a potion effect will clear that effect. Characters currently under the effect of a potion will have a particle effect, with the color seeming to depend on the type and intensity of the effect. Most effects are yellow or purple with more intensity at higher strength.

Using the [Saltchemist](Oath%253A_Saltchemist.md) Oath, it is possible to generate an infinite supply of 3 potions of your choice, by adding them to the Perpetual Distillery. Each of the three potions will be bound to a key, and can be set to either "throw" or "drink" mode. Pressing a potion's key will use the potion, with a 40 second cooldown per potion. Using a "drink" mode potion will place all other "drink" mode potions that share an effect on cooldown, though the same restriction does not apply to "throw" mode potions.

### Cauldron Access

_See [Cauldron](Cauldron.md) for all cauldron locations._

There are many functioning cauldrons scattered throughout the Luminants. You are also able to create your own cauldron using [Summon Cauldron](Attunement-less.md#summon-cauldron), which appears at exactly 20 Intelligence as a Mantra, but is less likely to draw unless [Attunementless](Attunement-less.md). You are also able to access a cauldron easily if you build a laboratory inside of a [Guild Base](Guild_Bases.md).

## Mechanics

### Ingredients

Every ingredient has a number of effects - usually one positive and one negative, with some exceptions. For example, adding a [Redd](Redd.md) to a potion will cause the potion to instantly restore a small amount of health (the _Rejuvenating_ effect), and also drain your Ether for 15 seconds (the _Icky_ effect). Potions grant the additive sum of every effect of every ingredient they contain but are named only after their strongest effect. When Redds are used to brew a potion, the strongest effect is the _Icky_ effect, so the potion will have the _Icky_ prefix, though it's important to note it still has the _Rejuvenating_ effect.

The effects of multiple ingredients can be combined by brewing them together. A maximum of 3 ingredients of the same type can be added to a potion, as well as a maximum of 5 total ingredients. Going over these limits will severely weaken the potion's effects, likely turning it into a Diluted potion.  
Adding multiple ingredients with the same effect will strengthen that effect, and adding ingredients with opposing effects will weaken them. For example, one of Gathered Wheat's effects is ether regeneration. Adding Wheat to a potion containing Redds will cancel out the Redd's ether drain effect, and in the correct ratio, can produce a potion with the _Rejuvenating_ prefix.

Potions containing only a single ingredient suffer a heavy penalty to the strength of all effects (usually resulting in a Diluted potion). This penalty can be avoided by adding any ingredient, including more copies of the same ingredient or ones with no effect.

The [Saltchemist](Oath%253A_Saltchemist.md) Oath grants access to three unique "salts", which can all be added to a potion without affecting the number of ingredients. All three salts can be added to a 5 ingredient potion without diluting it, and adding a salt to a potion with only one ingredient does not avoid the penalty for single-ingredient potions. More information on the Saltchemist Salts can be found on this page [here](#salts) or on the [Saltchemist](Oath%253A_Saltchemist.md) page.

### Talents and Other Modifiers

Potions have a greater effect when brewed by a character with high intelligence. This is shown by an effect called "potency," which can be viewed by mousing over a potion in your inventory. Potency increases linearly with intelligence; each point of intelligence counts for a 0.5% increase in potency for potions and caps out at 50% upon reaching 100 intelligence. Additionally, Talents in the [Alchemist](Talents.md#alchemist) category increase the effects of potions:

-   Potions prepared by characters with the **Apothecary** Talent have their Potency increased by 125%. This stacks additively with Potency granted through [Intelligence](Attributes.md#int) investment.
    -   Apothecary is treated as a potion ingredient, and as such, it will stay active on your previously brewed potions even if you no longer have the talent.
    -   This Talent can easily be temporarily obtained while brewing potions by wearing an [Alchemist's Hat](<Alchemist's_Hat.md>) or the [Skeptic Pioneer](Skeptic_Pioneer.md) Outfit.
-   When brewing potions with the **Wild Alchemy** Talent, there is a 25% chance to produce 2 potions instead of 1.
-   The **Potion Quaffer** Talent reduces the slowdown from drinking potions, reduces time to drink by 30%, and increases the regeneration of health regeneration potions by 15%, as well as ether regeneration and sanity regeneration potions by 30%. The 25% negative duration of health potions is removed.
-   The **Placebo Effect** Talent applies potion effects to your allies when you drink a potion near them.
-   The **Chain Reaction** Talent increases potion effectiveness of thrown potions by 40% when they replace a pre-existing potion effect (you need to throw a potion at someone who's already affected by a potion effect). It also adds a 25% chance not to use up a potion when drinking one.
-   The **Chemist's Bag** Talent causes potions to no longer be dropped on death.

Unlike the other effects, the duration of a potion is unaffected by any of these modifiers. A potion's duration is always the same for any given combination of ingredients.

## Ingredients

There are 56 ingredients that can be added to a potion, though only 22 have a known effect. Most ingredients have one positive and one negative effect, though a small number of ingredients have one or three effects. The following table lists all known effects of all ingredients:

A spreadsheet listing the effects of all potion ingredients can be found [here](https://docs.google.com/spreadsheets/u/4/d/e/2PACX-1vTvoa3q-3DmosOWmH6AkX1bfMBq4wfbW11Kybf_vt4DaAa-FGAzTPsHn-CWR4wEqXwyEudmKeR5JwPr/pubhtml).

<table><caption>Key</caption>
<tbody>
<tr>
  <td>Effects in green are positive.</td>
  <td>Effects in red are negative.</td>
</tr>
</tbody>
</table>

| Ingredient | Instant Health | Instant Ether | Damage Buff | Posture Damage Buff | Posture Resistance Buff | Speed Buff | Health Regen | Ether Regen | Sanity Regen | Duration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Alestrian Coral](Alestrian_Coral.md) |  |  | \-1.75% | \-5% |  | +0.25\* |  |  |  |  |
| [Bamboo](Bamboo_Bundle.md) |  | \-23 |  |  | +10% |  |  |  |  |  |
| [Beeswax](Beeswax.md) |  |  |  |  |  | \-5%\*\* | +85% |  |  |  |
| [Bluecap](Bluecap.md) | \-5 | +23 |  |  |  |  |  |  | +3.75/s |  |
| [Browncaps](Browncap.md) | \-4 |  | +2% |  |  |  |  |  |  |  |
| [Calabash](Calabash.md) |  |  |  |  | +10% |  |  | \-5%\*\*\* |  |  |
| [Chum](Chum.md) |  |  |  |  |  |  |  |  | \-0.1/s |  |
| [Crustacean Meat](Crustacean_Meat.md) |  |  | \-1.75% |  |  |  |  |  |  | +20% |
| [Dentifilo](Dentifilo.md) | \-2 | +23 |  |  |  |  |  |  |  |  |
| [Glumfig](Glumfig.md) | +5 |  | \-2% |  | \-15% |  |  |  | \-0.1/s |  |
| [Gobletto](Gobletto.md) |  |  |  |  |  | \-5%\*\* | +85% |  |  |  |
| [Marram Grass](Marram_Grass.md) |  | \-23 |  |  | +10% |  |  |  |  |  |
| [Ongo](Ongo.md) |  |  |  | +10% | \-5% |  |  |  |  |  |
| [Plumfruit](Plumfruit.md) |  |  | +2% |  |  |  | \-30% |  |  |  |
| [Pomar](Pomar.md) | \-3 |  |  |  |  | +0.25\* |  |  |  |  |
| [Redd](Redd.md) | +4 |  |  |  |  |  |  | \-5%\*\*\* |  | \-25% |
| [Sap](Sap.md) |  |  |  |  |  | \-5%\* |  | +90% |  |  |
| [Scallop](Scallop.md) |  |  |  |  |  |  |  |  | \-0.1/s |  |
| [Seaweed Bundle](Seaweed_Bundle.md) |  |  |  |  |  |  |  |  | \-0.1/s |  |
| [Spider Egg](Spider_Egg.md) |  |  |  |  |  |  |  |  |  | +50% |
| [Thresher Egg](Thresher_Egg.md) |  |  |  |  |  |  |  |  | \-0.1/s |  |
| [Urchin](Urchin.md) |  |  |  |  |  |  |  |  | \-0.1/s |  |
| [Wheat](Gathered_Wheat.md) |  |  | \-1.75% |  |  |  |  | +90% |  |  |

\* Potion speed boost modifiers are calculated as √(1 + (t \* n)) with t being the effectiveness of each ingredient and n being the amount of speed boost components in the potion.  
\*\* Players innately have a 25% resistance to slows unless they're casting a Mantra, meaning in effect, this is -3.75%.  
\*\*\* Ether regeneration has a sort of "randomness" to it, though this is likely the value that's in the code.

Eating an ingredient will give you a weaker version of the effects it would normally give you if brewed in a potion. This can be used to remove an existing potion effect.

[Eggs](Egg.md), [Lotuses](Primordial_Lotuses.md), all types of [Fish](Fishing.md), [Fish Meat](Food.md), [Galewax](Galewax.md), [Sticks](Stick.md), [Dread Flesh](Dread_Flesh.md), [Primal Slab](Primal_Slab.md), [Raw Parasol Brain](Raw_Parasol_Brain.md), [Raw Heavy Meat](Raw_Heavy_Meat.md) and all types of [minerals](Ores.md) are also valid ingredients, but don't have any effect. This can be useful, as potions with only 1 ingredient will have their effects halved, so adding 1 ingredient with an inert effect will counteract this.

### Salts

The [Saltchemist](Oath%253A_Saltchemist.md) Oath grants access to three salts, which can be added to any potion at no cost. These salts do not affect the number of ingredients in the potion (so they can be added to a 5 ingredient potion) and multiple different salts can be added to the same potion. Any potion created with these salts are no longer droppable and cannot be banked, meaning they will become locked to your [Saltchemist](Oath%253A_Saltchemist.md) character, if you wish to create potions for a friend or different character, avoid using these.

**Biotic Salts** alter the potion to provide halved negative effects when applied to allies (including yourself), and halved positive effects when applied to enemies. This salt is strictly positive and should be added to all potions, unless you plan to give them to a friend.

**Aromatic Salts** cause the potion effect to linger when thrown for 10 seconds. A couple times per second, anyone standing in the effect radius will have the potion effect applied to them - this can be used to trigger Chain Reaction and applies any instant effects repeatedly. The duration of the lingering cloud is not affected by duration modifiers on the potion (such as spider eggs), though the potion effect applied by the cloud is affected by duration modifiers as normal. This salt can be a net negative if the potion has an undesirable instant effect, though in most cases it simply makes it easier to apply the potion effect and can improve the effective duration of the effect by up to 10 seconds. This also reduces the effectiveness of your potion's **positive effects** (excluding duration) by 80%. Blocking a splash potion will halve its effectiveness and duration.

**Antithetic Salts** invert the effects of all ingredients used in the potion. This doubles the variety of potions that can be brewed and can sometimes be used to make stronger versions of an effect than would otherwise be possible. For instance, a stronger slowing potion can be created by brewing a speed potion with Pomar and Alestrian Coral, then inverting it, instead of using the comparatively weak slowing effect of Sap and Goblettos.

## Potion Calculations

Potion effectiveness can be calculated like this:

Potion = ((n1 + n2 + n3 + n4 + n5) \* a) \* ((1 + (p/100) + A) \* t)

Key:

-   n = the effectiveness of the each individual ingredient. Each ingredient is separated by their subscript numbers.
    -   E.g. 3 Bluecaps (5 damage each) + 2 Browncaps (4 damage each) on an instant damage potion = n1 + n2 + n3 + n4 + n5 = 5 + 5 + 5 + 4 + 4 = 23 damage
-   a = Antithetic Salts, use -1 if applied, use 1 if not applied
-   p = potency from Intelligence scaling, Intelligence investment/2. Note that this caps at 50% potency with 100 Intelligence; going above this will not result in higher potency potions.
    -   E.g. 95 Intelligence = (p/100) = ((95/2)/100) = 47.5/100 = 0.475
-   A = Apothecary if applicable. A = 1.25 if applied, 1 if not applied.
-   t = Chain Reaction OR Potion Quaffer if applicable;
    -   If neither can be applied, then t = 1.
    -   If Chain Reaction, then t = 1.4.
    -   If Potion Quaffer, then t = 1, 1.3, or 1.15. It will be 1 if it isn't a Health/Ether/Sanity regeneration potion. It will by 1.3 if it is an Ether/Sanity regeneration potion. It will be 1.15 if it is a Health regeneration potion.

Note: Each potion effect needs to be calculated individually, as almost all ingredients have more than one effect, and thus your potions will have various side effects. Do not add effects together if they aren't like terms, for example you should not be adding instant health with posture resistance, but adding positive and negative instant health is fine. Additionally, duration modifying effects **are not affected by potency, Apothecary, or Chain Reaction**.

Examples:

-   Example 1: Instant Health - 3 Glumfig (n1, 2, 3 = 5) 2 Redds (n4, 5 = 4). Talents: Apothecary (A = 1.25), and Chain Reaction (t = 1.4). 100 Intelligence (p = 100/2). (a = 1, as Antithetic Salts where not used).
    -   Potion = (((n1 + n2 + n3 + n4 + n5)) \* a) \* (((1 + (p/100) + A) \* t)
    -   Potion = (((5 + 5 + 5 + 4 + 4) \* 1) \* ((1 + ((100/2)/100) + 1.25) \* 1.4)
    -   Potion = (15 + 8) \* ((1 + 50/100 + 1.25) \* 1.4)
    -   Potion = 23 \* ((1 + 0.5 + 1.25) \* 1.4)
    -   Potion = 23 \* (2.75 \* 1.4)
    -   Potion = 23 \* 3.85
    -   Potion = 88.55 healing. Because this potion was thrown and Potion Quaffer was not applied, this only grants 66.41 Health. This is reduced further to 22.14 health in combat.
        -   This potion would also grant -38.5% Ether regeneration, -7.7% damage, -50% posture resistance, and -0.825 sanity/s for 7.5 seconds. These downsides can be mitigated via the usage of the [Biotic Salts](Oath%253A_Saltchemist.md).
-   Example 2: Posture Resistance Buff - 3 Glumfig (n1, 2, 3 = -15) 2 Ongo (n4, 5 = -5) Antithetic Salts (a = -1). Talents: Apothecary (A = 1.25). 80 Intelligence (p = 80/2). (t = 1, as neither Potion Quaffer, nor Chain Reaction were used)
    -   Potion = (((n1 + n2 + n3 + n4 + n5)) \* a) \* (((1 + (p/100) + A) \* t)
    -   Potion = ((-15 + -15 + -15 + -5 + -5) \* -1) \* ((1 + ((80/2)/100) + 1.25) \* 1)
    -   Potion = ((-45 + -10) \* -1) \* (1 + (40/100) + 1.25)
    -   Potion = (-55 \* -1) \* (1 + 0.4 + 1.25)
    -   Potion = 55 \* 2.65
    -   Potion = 145.75% posture resistance. However, posture resistance has a hard cap at 50%, so this will only grant 50% posture resistance.
        -   This potion also grant +15.9% damage, -0.795 sanity/s, and -53% posture damage for 15 seconds. It'll also deal 39.75 damage on drink. These downsides can be mitigated via the usage of the [Biotic Salts](Oath%253A_Saltchemist.md).

### Instant Health/Damage Potions

Instant Health: It's the same formula is before, but the end result is reduced by 25% outside of combat and 75% inside combat unless you have the Potion Quaffer Talent. This removes the effectiveness debuff outside of combat and reduces the in-combat effectiveness debuff to only -50%.

Instant Damage: It's the same formula as before, but the potion's overall damage will be multiplied by 0.25 if not landed directly, as instant damage potions deal 75% less damage if only the splash of the potion is landed. [Lethal Injection](Oath%253A_Saltchemist.md) utilizes the splash damage of these potions, and thus they will deal 75% less damage.

### Health Regeneration

Health Regeneration potions have a reduced effect in combat, giving +60% per ingredient instead of +85%. The formula is the same as before.

-   Example: Out of Combat - 3 Bamboo (n1, 2, 3 = 85) 2 Goblettos (n4, 5 = 85). Talents: Apothecary (A = 1.25), Potion Quaffer (t = 1.15). 75 Intelligence (p = 75/100). (a = 1 Antithetic Salts were not used)
    -   Potion = (((n1 + n2 + n3 + n4 + n5)) \* a) \* (((1 + (p/100) + A) \* t)
    -   Potion = ((85 + 85 + 85 + 85 + 85) \* 1) \* ((1 + ((75/2)/100) + 1.25) \* 1.15)
    -   Potion = (425 \* 1) \* ((1 + (37.5/100) + 1.25) \* 1.15)
    -   Potion = 425 \* ((1 + 0.375 + 1.25) \* 1.15)
    -   Potion = 425 \* (2.625 \* 1.15)
    -   Potion = 425 \* 3.02
    -   Potion = +1,282.97% health regeneration for 11.25 seconds out of combat.
        -   This potion will also grant -25% movement speed for the same duration, though this is reduced to -18.75% due to the innate resistance players have to slows. This downside can also be mitigated via the usage of [Biotic Salts](Oath%253A_Saltchemist.md).
-   Example: In Combat - 3 Bamboo (n1, 2, 3 = 60) 2 Goblettos (n4, 5 = 60). Talents: Apothecary (A = 1.25), Potion Quaffer (t = 1.15). 75 Intelligence (p = 75/100). (a = 1 Antithetic Salts were not used)
    -   Potion = (((n1 + n2 + n3 + n4 + n5)) \* a) \* (((1 + (p/100) + A) \* t)
    -   Potion = ((60 + 60 + 60 + 60 + 60) \* 1) \* ((1 + ((75/2)/100) + 1.25) \* 1.15)
    -   Potion = (300 \* 1) \* ((1 + (37.5/100) + 1.25) \* 1.15)
    -   Potion = 300 \* ((1 + 0.375 + 1.25) \* 1.15)
    -   Potion = 300 \* (2.625 \* 1.15)
    -   Potion = 300 \* 3.02
    -   Potion = +905.63% health regeneration for 11.25 seconds in combat.
        -   This potion will also grant -25% movement speed for the same duration, though this is reduced to -18.75% due to the innate resistance players have to slows. This downside can also be mitigated via the usage of [Biotic Salts](Oath%253A_Saltchemist.md).

### Slowing Potions

Players have an innate 25% resistance against slows unless they're casting a Mantra, making all slowing potion effects grant -3.75% speed rather than their full 5%. Outside of this, the formula is the same as before.

### Speed Buff Potions

Speed buffing potions have their own formula, it is as follows:

Potion = √(1 + n1 + n2 + n3 + n4 + n5)

Key:

-   n = the potency of each speed buffing ingredient. Only include as many as are necessary

Example: 3 Pomar (n1, 2, 3 = 0.25) 2 Alestrian Coral (n4, 5 = 0.25)

-   Potion = √(1 + n1 + n2 + n3 + n4 + n5)
-   Potion = √(1 + 0.25 + 0.25 + 0.25 + 0.25 + 0.25)
-   Potion = √(1 + 1.25)
-   Potion = √2.25
-   Potion = 1.5x speed or +50% speed for 15 seconds.
    -   Assuming you have 75 Intelligence and Apothecary, this potion will also grant -10.5% damage, -26.25% posture damage, for the same duration, and will deal 23.6 damage on drink. These downsides can be mitigated via the usage of [Biotic Salts](Oath%253A_Saltchemist.md).

### Potion Sickness Duration

Potion Sickness duration scales with ingredients that modify the duration of the potion. Potion Sickness by default lasts 20 seconds.

-   Positive Duration increases the Potion Sickness duration by the amount of time it would increase a 15 second duration potion in seconds.
    -   E.g. 1 Spider Egg (+50% duration) would look like this: 20 + (15 \* 0.5) = 20 + 7.5 = 27.5s Potion Sickness.
-   Negative Duration: increases the Potion Sickness duration by 10s minus the amount it would reduce a 15 second duration potion in seconds.
    -   E.g. 2 Redds (-50% duration) would look like this: 20 + 10 - (15 \* 0.5) = 30 - 7.5 = 22.5s Potion Sickness.

### Diluted Potions

Diluted Potions are created in one of two ways. Either you have more than 3 of the same ingredient on a potion or you went over the 5 ingredient limit (note that Apothecary and Saltchemist Salts do not count towards this limit).  
For simplicity's sake in these example calculations, only the ingredient's base values will be used. Remember that this is not the case in actuality, and effects like Potency will still be applied in an ingame scenario.

1.  If you have more than 3 of the same ingredient, all effects on your potion will be halved. For example, 3 Bluecaps = 15 damage (3 \* 5) vs 4 Bluecaps = 10 damage (4 \* 5)/2.
2.  If you have more than 5 ingredients, all effects on your potion will be halved, additionally the remaining effects will be divided by the amount of ingredients that went over the cap. For example, 6 Bluecaps + 6 Browncaps = 3.85 damage (((5 \* 6) + (4 \* 6))/2)/(12-5).

## Miscellaneous information

**Instant Damage** potions have PvE scaling and can be buffed by damage modifiers. Additionally, these deal typeless damage, ignoring all armor resistances.

**Health Regeneration** potions with a positive health regeneration ingredient will have its base duration reduced to 11.25s (also lowering the effectiveness of duration affecting ingredients).

**Health Gain and Health Regeneration** potions, whether positive or negative, take 1.2s longer to drink while in combat, bringing the total drink animation's duration to 3.55s up from 2.35s.

**Ether Regeneration** potions' Ether regeneration is separate from normal Ether regeneration, and is not affected by Ether regen modifiers like [Deficient](Boons_and_Flaws.md#flaws), Ether [food buff](Food.md), [outfit](Outfits.md) Ether regen boost, etc.

**Damage Debuff** is the only potion effect with a set cap, capping at -50% damage dealt.

There is a universal posture damage floor/cap, meaning you cannot go over +75% posture damage dealt (with a soft cap at 50%) and you cannot go under -50% posture damage dealt. This affects both positive and negative **Posture Resistance** and **Posture Damage** potions.

Potions with a singular ingredient will have its effectiveness halved. You can use ingredients with **inert** effects to counteract this. Ingredients with inert effects are as follows: [Sticks](Stick.md), all [Ores](Ores.md), [Eggs](Egg.md), all [Lotuses](Primordial_Lotuses.md), all types of [Fish](Fishing.md), [Fish Meat](Food.md), [Galewax](Galewax.md), [Dread Flesh](Dread_Flesh.md), [Primal Slab](Primal_Slab.md), [Raw Parasol Brain](Raw_Parasol_Brain.md), and the [Raw Heavy Meat](Raw_Heavy_Meat.md).

## Effects

Tiers are listed in order of strength, with the strongest tier listed first. Ingredients are listed in order of effectiveness, though if some ingredients have equal effectiveness, they'll simply be listed alphabetically.

<table><caption>Effects</caption>
<tbody>
<tr>
  <th>Name</th>
  <th>Tiers</th>
  <th>Ingredients</th>
  <th>Effect</th>
  <th>Notes</th>
</tr>
<tr>
  <td><b>Rejuvenating</b></td>
  <td>Salve</td>
  <td>Glumfig<br>
  Redd</td>
  <td>Instantly restores a small amount of health.</td>
  <td>Opposite effect to <b>Disgusting</b>. Signified by a burst of square green particles from the character.<p>The strongest effect on a Redd is Icky, so a potion with the Rejuvenating name can only be brewed by cancelling out the Icky effect with another ingredient, or by using <a href="Oath%253A_Saltchemist.md">Saltchemist</a> salts.</p></td>
</tr>
<tr>
  <td><b>Disgusting</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Bluecap<br>
  Browncap<br>
  Pomar<br>
  Dentilfo</td>
  <td>Instantly deals damage.</td>
  <td>Opposite effect to <b>Rejuvenating</b>.<p>The damage dealt when thrown is very small unless you land a direct hit, which may be difficult.<br>
  The damage is affected by PvE scaling, making them a decent choice when attempting to kill a mob while running away or dealing damage from where it can't reach you.<br>
  The damage type of potions are typeless and they can be buffed by damage modifiers.</p></td>
</tr>
<tr>
  <td><b>Soothing</b></td>
  <td>Tincture<br>
  Potion<br>
  Salve</td>
  <td>Bluecap<br>
  Dentifilo</td>
  <td>Instantly increase Ether.</td>
  <td>Opposite effect to <b>Appalling</b>.<p>Used to affect reservoir in verse 1.<br>
  All Ether gain ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Appalling</b></td>
  <td>Blight<br>
  Potion</td>
  <td>Bamboo Bundle<br>
  Marriam Grass</td>
  <td>Instantly decrease Ether.</td>
  <td>Opposite effect to <b>Soothing.</b> Signified by pastel green particles.<p>All Ether loss ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Strengthening</b></td>
  <td>Salve<br>
  Tincture<br>
  Potion</td>
  <td>Browncap<br>
  Plumfruit</td>
  <td>Increases damage dealt by a percentage.</td>
  <td>Opposite effect to <b>Dulling</b>.<p>All positive damage buff ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Dulling</b></td>
  <td>Potion<br>
  Bane<br>
  Blight</td>
  <td>Crustacean Meat<br>
  Gathered Wheat<br>
  Alestrian Coral<br>
  Glumfig</td>
  <td>Reduces damage dealt by a percentage.</td>
  <td>Opposite effect to <b>Strengthening</b>.</td>
</tr>
<tr>
  <td><b>Staggering</b></td>
  <td>Salve</td>
  <td>Ongo</td>
  <td>Increases posture damage dealt by a percentage.</td>
  <td>Opposite effect to <b>Weakening.</b><p>All postitive posture damage ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Weakening</b></td>
  <td>Potion</td>
  <td>Alestrian Coral</td>
  <td>Decreases posture damage dealt by a percentage.</td>
  <td>Opposite effect to <b>Staggering.</b><p>All negative posture damage ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Steadfast</b></td>
  <td>Tincture<br>
  Potion<br>
  Elixir<br>
  Salve</td>
  <td>Calabash<br>
  Bamboo Bundle<br>
  Marriam Grass</td>
  <td>Grants a posture resistance effect for the duration of the potion, making you take less posture damage from all sources.</td>
  <td>Opposite effect to <b>Buckling.</b><p>Effectively increases your maximum posture.<br>
  All positive posture resistance ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Buckling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Glumfig<br>
  Ongo</td>
  <td>Grants a negative posture resistance effect for the duration of the potion, making you take more posture damage from all sources.</td>
  <td>Opposite effect to <b>Steadfast.</b><p>Effectively decreases your maximum posture.</p></td>
</tr>
<tr>
  <td><b>Hastening</b></td>
  <td>Potion<br>
  Elixir<br>
  Salve<br>
  Tincture</td>
  <td>Alestrian Coral<br>
  Pomar</td>
  <td>Applies a speed boost for the duration of the potion.</td>
  <td>Opposite effect to <b>Slowing.</b><p>The speed boost from Hastening is usually a flat bonus, remaining active even while using mantras, carrying something, or being pushed by the wind in the <a href="Second_Layer.md">Second Layer</a>. It is reduced in water, however.<br>
  All speed boost ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Slowing</b></td>
  <td>Blight</td>
  <td>Beeswax<br>
  Gobletto<br>
  Sap</td>
  <td>Reduces movement speed for the duration of the potion.</td>
  <td>Opposite effect to <b>Hastening.</b><p>This potion type used to be impossible to make, as the ingredients used to make it had stronger properties which replaced the potion name. With the addition of <a href="Oath%253A_Saltchemist.md">Saltchemist</a>, the use of Antithetic salts on ingredients normally used for Hastening potions enabled its creation.<br>
  All slowing ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Invigorating</b></td>
  <td>Potion(?)<br>
  Tincture<br>
  Elixir<br>
  Salve</td>
  <td>Beeswax<br>
  Gobletto</td>
  <td>Applies a regeneration effect.</td>
  <td>Opposite effect to <b>Grueling.</b> Signified by bright green particles.<p>All Health regen ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Grueling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Plumfruit</td>
  <td>Deals a small amount of damage over the potion duration.</td>
  <td>Opposite effect to <b>Invigorating</b>.<p>Curiously, the prefix of a potion brewed using only Plumfruit depends on the Talents of the brewer- if the brewer only has Apothecary, the prefix is Strengthening.<br>
  All damage over time ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Focusing</b></td>
  <td>Elixir<br>
  Salve<br>
  Tincture</td>
  <td>Gathered Wheat<br>
  Sap</td>
  <td>Greatly increase Ether regeneration.</td>
  <td>Opposite effect to <b>Icky</b>.<p>Very quickly begins to grant a flat amount of Ether every tick as it increases in potency, making it very hard to run out of Ether while active.<br>
  The strongest effect on wheat is Dulling; prior to the addition of Saltchemist, a potion with the Focusing prefix could only be brewed by cancelling out the <i>Dulling</i> effect with a <b>Strengthening</b> ingredient like Browncaps.<br>
  All Ether regeneration ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Icky</b></td>
  <td>Potion<br>
  Bane<br>
  Blight</td>
  <td>Calabash<br>
  Redd</td>
  <td>Rapidly drain Ether from affected targets</td>
  <td>Opposite effect to <b>Focusing</b>.<p>Very quickly begins to drain a flat amount of Ether every tick as it increases in potency, leaving even <a href="Shadowcast.md">Shadowcast</a> users struggling.<br>
  All Ether drain over time ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Heartening</b></td>
  <td>Remedy<br>
  Potion<br>
  Salve<br>
  Tincture(?)<br>
  Elixir</td>
  <td>Bluecap</td>
  <td>Rapidly restores Sanity.</td>
  <td>Opposite effect to <b>Mindbreaker</b>. Signified by bright pink particles.<p>Effective at any strength and can cheaply help ensure longevity in <a href="The_Depths.md">The Depths</a>.<br>
  All sanity ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Mindbreaker</b></td>
  <td>Bane<br>
  Blight<br>
  Potion</td>
  <td>Chum<br>
  Glumfig<br>
  Scallop<br>
  Seaweed Bundle<br>
  Thresher Egg<br>
  Urchin</td>
  <td>Gives Insanity over time.</td>
  <td>Opposite effect to <b>Heartening</b>. Signified by bright purple particles.<p>Can prove surprisingly useful, as enemies at tier 3 <a href="Insanity.md">Insanity</a> are automatically gripped when downed and suffer from other consequences prior, and Manic is also a common flaw. Bear in mind it can help those that have Insanity-reliant Talents, though.<br>
  All insanity ingredients have the same effectiveness.</p></td>
</tr>
<tr>
  <td><b>Diluted/Bland</b></td>
  <td>Potion<br>
  Elixir<br>
  Salve<br>
  Tincture</td>
  <td>Using more than 3 of the same ingredient<p>Using more than 5 ingredients in general (Apothecary and Saltchemist Salts do not count towards this limit)</p></td>
  <td>No effect.</td>
  <td>Signified by pure white particles.<p>Primarily exists to show that something went wrong with brewing. Reduces potion effectiveness by 50%. If you went above the 5 ingredient limit, it will divide the remaining effectiveness by the amount of ingredients that went over the limit.</p></td>
</tr>
</tbody>
</table>

## Potion Names

Potions are given two-word names based on their most powerful effect, and the strength of that effect. The exact mechanism behind this system is still unknown.

Potions (almost) always have multiple different effects, but the potion's most powerful effect is shown by the prefix (first word) of their name. For example, all _Invigorating_ potions will apply a regeneration effect, though depending on what ingredients were brewed to make the potion, the potions could also have any number of other effects. Since the "power" of different effects is fairly arbitrary, the most **important** effect may not be the potion's prefix.

The suffix (second word) of a potions name appears to indicate the strength of the prefix's effect, with more powerful potions getting a "higher tier" suffix. However, each prefix has its own tiering hierarchy for suffixes, with very little consistency.

-   Most negative effects have two suffixes, Blight and Bane, with Bane being stronger.
    -   Some negative effects also have the Potion suffix, which is stronger than Bane.
    -   Appalling is unique as the only (known) effect to use the same suffix for two different tiers - both the strongest and weakest potions use the Blight suffix, with Bane being the middle tier.
-   Most positive prefixes have three tiers - Salve, Elixir and Tincture (most commonly in that order). The hierarchy depends on the prefix.
    -   Some positive prefixes (such as Heartening) can have as many as 5 different suffixes.

## Optimal Potions

When brewing potions for use, they should always have 5 ingredients. Even when the ingredients aren't available to make an optimal potion, you can always add a second useful effect to a potion by adding more ingredients.

The best potions for a timed effect (like Grueling or Hastening) either use three of its strongest ingredient and two spider eggs (for a 30 second effect), or three of the strongest ingredient and two of the second strongest ingredient (for a slightly stronger 15 second effect).

When brewing potions for an instant effect (like Rejuvenation or Soothing), potions should use three of the strongest ingredient and two of the second strongest ingredient. Sometimes this isn't possible, so the last two ingredients should be used to add a second useful effect.

-   **Instant Health** (Rejuvenating) - 3 Glumfig + 2 Redd
    -   Redds and Glumfigs have an instant health effect, and they're not very strong, though Glumfigs are more potent. The last two ingredients can be Redds for more instant health or Beeswax / Goblettos to restore additional health over time.
    -   Not very useful compared to Health Regeneration potions, which heal about up to 4x as much.
-   **Instant Damage** (Disgusting) - 3 Bluecap + 2 Browncap
    -   Keep in mind, instant damage potions deal 75% less damage if you don't directly land them.
-   **Instant Ether** (Soothing) - 3 Bluecaps + 2 Dentifilos
    -   Almost a full Ether restore - deals damage on application.
-   **Instant Ether Drain** (Appalling) - 3 Bamboo Bundle + 2 Marram Grass
    -   Instantly drains a very large amount of Ether.
-   **Damage Buff Potion** (Strengthening) - 3 Plumfruit + 2 Browncaps
    -   Buffs your damage.
-   **Damage Debuff Potion** (Dulling) - 3 Glumfig + 2 Crustacean Meat
    -   Alternatively, you can use Spider Eggs instead of Crustacean Meat for a longer duration potion, although this will come at the cost of effectiveness and won't be that much longer than the initial potion.
-   **Greater Posture Damage Potion** (Staggering) - 3 Ongos + 2 Spider Eggs
    -   This also lowers your posture defense.
    -   Alternatively for [Saltchemists](Oath%253A_Saltchemist.md), 3 Alestrian Coral + 2 Redds + Antithetic salts. While less potent than the former, this avoids lowering your posture defense. Alternatively, you can use the original potion with Biotic Salts to mitigate the downside.
-   **Weaker Posture Damage Potion** (Weakening) - 3 Alestrian Coral + 2 Spider Eggs
    -   Decreases your posture damage.
-   **Posture Defense** (Steadfast) - 3 Marram Grass/Bamboo + 2 Spider Eggs
    -   Alternatively for [Saltchemists](Oath%253A_Saltchemist.md), 3 Glumfigs + 2 Redds + Antithetic Salts. Also deals damage on hit.
    -   Grants resistance to incoming posture damage, effectively increasing your maximum posture.
-   **Weakened Posture** (Buckling) - 3 Glumfigs + 2 Spider Eggs
    -   Grants a buff to incoming posture damage, effectively decreasing your maximum posture.
-   **Speed Potion** (Hastening) - 3 Alestrian Coral + 2 Pomar
    -   Increases your speed.
-   **Slowing Potion** (Slowing) - 3 Calabash + 2 Spider Eggs
    -   You can swap out the Spider Eggs for Redds to have a more potent slowing effect, but with significantly lower duration.
    -   Keep in mind that players innately have resistances to slows unless casting a Mantra, so this may not be that effective.
-   **Health Regeneration** (Invigorating) - 3 Beeswax or Goblettos + 2 Spider Egg
    -   Heals the most of any potion over 30 seconds - can be enough to fully heal a character with low max HP.
    -   If you have the Potion Quaffer Talent, A better recipe for this would be 3 Goblettos and 2 Beeswax.
-   **Poison** (Grueling) - 3 Plumfruit + 2 Spider Egg
    -   Less pathetic than instant damage, but still pretty bad.
    -   You can substitute the Spider Eggs for Bluecaps to gain additional instant damage.
-   **Ether Restoration** (Focusing) - 3 Wheat + 2 Spider Eggs
    -   The Focusing effect on wheat is exceptionally strong, and only one or two is needed to allow you to continuously spam mantras on cooldown. However, wheat also has a powerful Dulling effect, which reduces mantra damage. Plumfruit (or Browncaps) are added to reduce this effect.
    -   Alternatively, for [Saltchemists](Oath%253A_Saltchemist.md), 3 Redds + 2 Calabash, with an Antithesis salt, this potion lasts about 2x the duration as the standard potion with an even faster Ether Restoration effect.
-   **Ether Drain** (Icky) - 3 Calabash + 2 Spider Eggs
    -   Rapidly drains ether for a decent amount of time. Can very quickly drain the target's entire ether bar while preventing them from gaining it back.
    -   Swapping out 1 Calabash for an additional Spider Egg applies a less potent ether drain effect, but over a much longer duration of time. This is often preferred over the former potion, especially for [Shadowcast](Shadowcast.md) users.
    -   Drains around 350 ether over the course of the duration.
-   **Sanity** (Heartening) - 3 Bluecaps + 2 Spider Eggs
    -   Also deals a small amount of damage and instantly restores Ether.
    -   Alternatively, for [Saltchemists](Oath%253A_Saltchemist.md), an easier way to make this potion is 3 Urchins + 2 Seaweed/Scallops with an Antithetic salt.
-   **Insanity** (Mind-breaker) - 3 of any Sanity loss ingredient + 2 Spider Egg
    -   With the Apothecary Talent, only one potion is needed to make most players reach the first tier of insanity. Especially effective in [The Depths](The_Depths.md), where players don't regenerate sanity and are often slightly insane already.
    -   Alternatively, you could add 2 more of any different Sanity loss ingredient, but duration might prove more effective.
    -   Alternatively, for [Saltchemists](Oath%253A_Saltchemist.md), 3 Bluecaps + 2 Redds + Antithetic Salts, applying a much more potent sanity loss over time effect. This will also deal a small amount of damage on contact.

## Important Ingredient Locations

These are not the only locations these ingredients can be found, but these are the best routes to obtaining them the fastest.

-   Insanity Potion Ingredients: [https://medal.tv/games/roblox/clips/285nZ6FBgJMnHD/d1337KZGzKhJ?invite=cr-MSw0UkYsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/285nZ6FBgJMnHD/d1337KZGzKhJ?invite=cr-MSw0UkYsMjAyODQzNzg4LA)
-   Alestrian Coral: [https://medal.tv/games/roblox/clips/285rlINFCILs26/d1337U9VqB8D?invite=cr-MSxpUGssMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/285rlINFCILs26/d1337U9VqB8D?invite=cr-MSxpUGssMjAyODQzNzg4LA)
-   Beeswax: [https://medal.tv/games/roblox/clips/25kUmLJ8-hnNFy/d1337RLqiCss?invite=cr-MSxzMkQsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/25kUmLJ8-hnNFy/d1337RLqiCss?invite=cr-MSxzMkQsMjAyODQzNzg4LA)
-   Browncaps: [https://medal.tv/games/roblox/clips/25kSIksDX10p3m/d1337gTwQcj1?invite=cr-MSxYcGUsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/25kSIksDX10p3m/d1337gTwQcj1?invite=cr-MSxYcGUsMjAyODQzNzg4LA)
-   Calabash: [https://medal.tv/games/roblox/clips/25kTCaYHMrDtYw/d13373NU7dQp?invite=cr-MSxVYnQsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/25kTCaYHMrDtYw/d13373NU7dQp?invite=cr-MSxVYnQsMjAyODQzNzg4LA)
-   Pomar: [https://medal.tv/games/roblox/clips/25kTqSUJe\_KajG/d1337SLceBDS?invite=cr-MSxneWQsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/25kTqSUJe_KajG/d1337SLceBDS?invite=cr-MSxneWQsMjAyODQzNzg4LA)
-   Goblettos: [https://medal.tv/games/roblox/clips/25kU6wC7b6Sbb9/d1337KmlF6oT?invite=cr-MSxyQWssMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/25kU6wC7b6Sbb9/d1337KmlF6oT?invite=cr-MSxyQWssMjAyODQzNzg4LA)
-   Bluecaps: [https://medal.tv/games/roblox/clips/285u94fmSbhI91/d1337AsEQ4zP?invite=cr-MSxtSlksMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/285u94fmSbhI91/d1337AsEQ4zP?invite=cr-MSxtSlksMjAyODQzNzg4LA)
-   Redds: [https://medal.tv/games/roblox/clips/285JedOi-0H0w8/d1337Gvi8i42?invite=cr-MSxFVHMsMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/285JedOi-0H0w8/d1337Gvi8i42?invite=cr-MSxFVHMsMjAyODQzNzg4LA)
-   Spider Eggs: [https://medal.tv/games/roblox/clips/285z1T-Dga4acY/d1337gbu82w7?invite=cr-MSxwdW8sMjAyODQzNzg4LA](https://medal.tv/games/roblox/clips/285z1T-Dga4acY/d1337gbu82w7?invite=cr-MSxwdW8sMjAyODQzNzg4LA)

## Trivia

-   [Attunement](Attunements.md) potions are not brewed using Alchemy but are instead obtained by completing a quest given by the respective [Trainer](Attunement_Trainers.md).
-   [Ciea](Ciea.md), found near the Widow's Den, offers quests to make different potions and bring them to her. This is a prerequisite for [Saltchemist](Oath%253A_Saltchemist.md).
