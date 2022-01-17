---
title: Alchemy
revid: 13258
source: https://deepwoken.fandom.com/wiki/Alchemy
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
---

# Alchemy

Alchemy is the process of creating potions at a cauldron. Potions can have many different effects depending on the ingredients used, and can be drunk or thrown.

The Crafting Recipes & Alchemy page contains some simple potion recipes, though some of the information is incorrect. At some point we'll update it.

A handful of people have made a [Deepwoken Alchemy Chart](https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV_oNo2F-PBj1Co/edit#gid=0), which lists the results of different ingredient combinations, and some of the potion effects. Some of the information is incorrect, though it's mostly accurate, and a useful tool for inferring the exact effects of ingredients.

## Basics

### Brewing Potions

To brew a potion, you hold ingredients in your hand, add them to a cauldron by clicking on it, and then press E to mix all the ingredients in the cauldron into a potion.

There is only one functioning cauldron in the game, found in a hut on a hill near the guild hall on [Etris](Etris.md), next to the Frostdraw trainer. You can also create your own cauldron using an intelligence mantra, which appears at around 20 intelligence.

Almost all talents and mantras related to alchemy **only appear after brewing your first potion**. If you want to get all the alchemy talents, ensure you brew a potion at Etris early on.

Adding too many ingredients to a potion will dilute it, and the potion will do almost nothing. A maximum of **5** ingredients can be added to a potion before it is diluted, and any individual ingredient can be added a maximum of **3** times.  
For example, you can make a powerful speed potion using 3 [Pomars](Pomar.md) and 2 [Spider Eggs](Spider_Egg.md), but if you brew a potion using 4 Pomars, or 3 Pomars and 3 Spider Eggs, you will just get a useless diluted potion.

### Potion Names

Potions are given two word names based on their most powerful effect, and the strength of that effect.

Potions can have many different effects, but the potion's most powerful effect is shown by the prefix (first word) of their name. For example, all _Invigorating_ potions will apply a regeneration effect, though if brewed with a Browncap, they will also deal a small amount of damage when drunk.

The suffix (second word) of a potions name indicates the strength of the prefix's effect, with more stronger effects getting a higher tier suffix. However each prefix has its own tiering hierarchy for suffixes.

-   Negative prefixes are very consistent - they almost all have two tiers, Blight and Bane (with Bane always being stronger).
    -   Some negative prefixes have a third tier, Potion, which is usually the strongest.
-   Most positive prefixes have three tiers - Salve, Elixir and Tincture (most commonly in that order). The hierarchy depends on the prefix.
-   Some positive prefixes have Elixir, Potion and Remedy tiers instead. Again, the hierarchy depends on the prefix.

### Using Potions

Once brewed, potions can be drunk by holding them and pressing M1. Drinking a potion will prevent you from sprinting or rolling, and will be cancelled (wasting the potion) if you take damage while drinking. All potions share a 10 second "potion cooldown", represented by the tiny potion symbol in a circle under the health bar. If you drink a potion during the cooldown, you will throw up and will not get the potion effect.

You can also throw potions by holding them and pressing E - this usually applies a weaker version of the potion effect to anyone standing near the potion when it explodes, though some positive effects only apply when drunk. You can only throw a potion once your previous potion has landed, but if you have multiple different potions (in different inventory slots), you can throw one of each at a time. Throwing a potion can be done while sprinting and does not slow you down.

## Mechanics

We still haven't figured out exactly how Alchemy works, but our best understanding is something as follows:

Every ingredient has two effects - sometimes both are obvious, other times one is more hidden. For example, adding a [Redd](Redd.md) to a potion will cause it to instantly restore a small amount of health (the _Rejuvinating_ effect), and drain your Ether for 10 seconds (the _Icky_ effect). Potions grant every effect of every ingredient they contain, but are named only after their strongest effect. When redds are used to brew a potion, the strongest effect is the _Icky_ effect, so the potion will have the _Icky_ prefix, though it's important to note it still has the _Rejuvinating_ effect.

The effects of multiple ingredients can be combined by brewing them together. A maximum of 3 ingredients of the same type can be added to a potion, as well as a maximum of 5 total ingredients. Going over these limits will severely weaken the potion's effects, likely turning it into a Diluted potion.  
Adding multiple ingredients with the same effect will strengthen that effect, and adding ingredients with conflicting effects will weaken them. For example, one of [Gathered Wheat](Gathered_Wheat.md)'s effects is ether regeneration. Adding wheat to a potion containing Redds will partially cancel out the _Icky_ effect, and in the correct ratio, can produce a potion with the _Rejuvinating_ prefix.

Potions containing only one ingredient suffer a penalty to the strength of all effects (often resulting in a Diluted potion), which can be avoided by adding any ingredient (including ones with no effect, like a Stick or a Rock).

Spider Eggs are a special ingredient which increases the duration of potion effects by 50% (stacking additively, so 2 spider eggs will double the duration).

Finally, potions have a greater effect when brewed by a character with high intelligence. This does not change the name of the potion, and the exact scaling is untested.

### Talents

The Apothecary and Exterminator talents both increase the effects of potions when drunk/thrown (respectively), by an unknown amount (perhaps 50%?). This does not change the suffix of the potion, but it can change the prefix. For example, if you have the Apothecary talent but not the Exterminator talent, potions brewed with Plumfruit will have the Strengthening prefix, as Apothecary increases that effect but not the negative Grueling effect which is otherwise stronger.

The Wild Alchemy talent has the description:  
_"Potions you prepare will have a chance to have doubled ingredients when mixed."_

This doesn't seem to be accurate. When a potion is brewed with Wild Alchemy, it gains a small increase in strength to all its effects, which is sometimes enough to change the suffix of the potion's name. When tested with both Apothecary and Exterminator talents on a character with 40 INT, potions affected by Wild Alchemy saw an increase of slightly less than 20% to the effect strength - this was consistent across all potions tested.  
It's unknown if this is a bug or if there are factors we don't yet understand. More testing is needed.

## Ingredients

There are 24 (known) potion ingredients, though only 15 have an effect strong enough to brew named potions by themselves.

Almost all ingredients have two effects - a strong primary effect which will name the potion if used alone, and a weaker secondary effect which is always present, but will only name the potion if the primary effect is weakened by another ingredient.

-   Alestrian Coral - primary effect is **Dulling**, which decreases mantra damage. Secondary effect is **Hastening**, which increases speed for 15 seconds

-   Bamboo Bundle - primary effect is **Appalling**, which instantly drains reservior. Secondary effect is **Steadfast**, which increases maximum posture.

-   Beeswax - primary effect is **Invigorating**, secondary effect is unknown.
    -   Since beeswax's Invigorating effect is so powerful, and the only effect that cancels it is the weak Grueling from plumfruit, it is very difficult to find the name of the secondary effect. It appears to be a slowing effect, however.

-   Bluecap - primary effect is **Heartening**, which rapidly restores sanity. The potion also restores reservoir (**Soothing**) and deals a small amount of damage (**Disgusting**), though it's not clear if these are part of the Heartening effect.
    -   Heartening is a very strong effect and is almost always the name of the potion (similar to Mindbreaker). Bluecaps are hard to get so there's not been a ton of experimentation, so it's not clear which parts of the Heartening effect are inherent to the potion and which are secondary effects.

-   Browncap - primary effect is **Disgusting**, which deals a small amount of damage. Secondary effect is **Strengthening**, which slightly increases damage dealt.
    -   The damage from Disgusting is very small - even when brewed with every bonus, thrown potions are unlikely to deal more than 5% to opponents of similar strength.
    -   The secondary Strengthening effect is also very small.

-   Calabash - primary effect is **Steadfast**, which increases your maximum posture. Secondary effect is **Icky**, which drains elixir and prevents reservoir draw for 15 seconds.
    -   While the Icky effect is secondary, calabash is still the strongest source of the Icky effect.

-   Dentifilo - primary effect is **Soothing**, which instantly restores reservoir. Secondary effect is **Disgusting**, which deals a small amount of damage.

-   Gathered Wheat - primary effect is **Dulling**, which decreases mantra damage. Secondary effect is **Focus-Enhancing**, which drastically increases the rate reservoir is turned into ether for 15 seconds.
    -   Focus-Enhancing is one of a few effects that can't be the strongest effect in a potion unless multiple different ingredients are used. The Dulling effect can be cancelled with the Strengthening effect, which is found on Plumfruit and Browncaps, to reveal the Focus Enhancing effect.
    -   Even after running out of reservoir, the Focus-Enhancing effect will still increase ether regneration, though the opposite is not true - reservoir is not drained if the ether bar is full.

-   Gobletto - primary effect is **Invigorating**, which apply a 15 second regeneration effect. Secondary effect is unknown.
    -   It is very difficult to find the secondary effect of this ingredient. Invigorating can only be cancelled out with Grueling, but this can only be done using three plumfruits, which then changes the prefix to Strengthening. Strengthening can only be cancelled using wheat (taking the last ingredient slot), and the wheat's Focus Enhancing effect is more powerful than whatever the gobletto's secondary effect is.
        -   It may be possible to find the name of the secondary effect if you have Exterminator but not Apothecary (which might allow invigorating to be cancelled with fewer plumfruit), though this is a difficult test to set up.

-   Ongo - primary effect is **Buckling**, which reduces maximum posture. Secondary effect is **Staggering**, which increases posture damage.
    -   If you have the Apothecary talent but not the Exterminator talent, the strongest effect is Staggering instead of Buckling.

-   Plumfruit - primary effect is **Grueling**, which deals a small amount of damage over 15 seconds. Secondary effect is **Strengthening**, which increases physical damage.
    -   Similar to Ongos, if you have the Apothecary talent but not the Exterminator talent, the strongest effect is Strengthening instead of Grueling.

-   Pomar - primary effect is **Hastening**, which increases speed for 15 seconds. Secondary effect is **Disgusting**, which deals a small amount of damage.

-   Redd - primary effect is **Icky**, which drains elixir and prevents reservoir draw for 15 seconds. Secondary effect is **Rejuvinating**, which instantly restores a small amount of health.
    -   Like Focus-Enhancing, Rejuvinating can't be brewed using only a single ingredient. The rejuvinating effect is very weak, but it is possible to brew a Rejuvinating potion using exactly three redds and one wheat.

-   Urchin - primary effect is **Mindbreaker**, which rapidly lowers sanity. Secondary effect is unconfirmed, but appears to be **Strengthening**.
    -   Mindbreaker potions are notable for being one of the few good throwing potions - when brewed with every bonus, you can kill someone by draining all their sanity using just a few Mindbreaker Banes.

Eggs, fish meat, scallops, spider eggs, sticks and minerals (coal, iron, stone, irithine, and ect.) are also valid ingredients, but they don't change the potion effect, and brew Nothing Potions when used alone.

Sap is unique as an ingredient which creates Nothing Potions when used alone, but can be combined with other ingredients to change the prefix of the potion. More testing is required to figure out exactly what it does.  
Crustacean meat is supposedly similar, though more testing is needed.

## Effects

Tiers are listed in order of strength, with the strongest tier listed first. Ingredients are also listed in the same order, but this is much harder to measure so may be innacurate.

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
  <td><b>Appalling</b></td>
  <td>Blight<br>
  Potion<br>
  Blight</td>
  <td>Bamboo Bundle</td>
  <td>Instantly drains reservoir.</td>
  <td>Opposite effect to <b>Soothing</b>.<br>
  Both the strongest potions (brewed using Wild Alchemy) and the weakest potions share the same suffix. It's unknown if this is intentional.</td>
</tr>
<tr>
  <td><b>Soothing</b></td>
  <td>Tincture<br>
  Potion<br>
  Salve</td>
  <td>Dentifilo<br>
  Bluecap(?)</td>
  <td>Instantly restores reservoir.</td>
  <td>Opposite effect to <b>Appalling</b>.</td>
</tr>
<tr>
  <td><b>Disgusting</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Bluecap(?)<br>
  Browncap<br>
  Dentifilo<br>
  Pomar</td>
  <td>Instantly deals a small amount of damage.</td>
  <td>Opposite effect to <b>Rejuvinating</b>.<br>
  The damage dealt when thrown is very small (less than 5% to similar power opponents even when brewed as strong as possible), so these potions aren't a good combat option.</td>
</tr>
<tr>
  <td><b>Rejuvinating</b></td>
  <td>Salve</td>
  <td>Redd</td>
  <td>Instantly restores a small amount of health.</td>
  <td>Opposite effect to <b>Disgusting</b>.<br>
  The strongest effect on a redd is Icky, so a potion with the Rejuvinating name can only be brewed by cancelling out the Icky effect with Focus Enhancing from wheat.<br>
  <br>
  Only one recipe for a potion with the Rejuvinating name is known - 3 redds and 1 wheat. Any other ratio causes a different effect to be more powerful.</td>
</tr>
<tr>
  <td><b>Dulling</b></td>
  <td>Potion<br>
  Bane<br>
  Blight</td>
  <td>Gathered Wheat<br>
  Alestrian Coral</td>
  <td>Reduces damage dealt by mantras.</td>
  <td>Opposite effect to <b>Strengthening</b>.</td>
</tr>
<tr>
  <td><b>Strengthening</b></td>
  <td>Salve<br>
  Tincture</td>
  <td>Urchin<br>
  Plumfruit<br>
  Browncap</td>
  <td>Slightly increases damage dealt.</td>
  <td>Opposite effect to <b>Dulling</b>.</td>
</tr>
<tr>
  <td><b>Icky</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Calabash<br>
  Redd</td>
  <td>Drains elixir for 15 seconds, and prevents drawing elixir from the reservoir.</td>
  <td>Opposite effect to <b>Focus Enhancing</b>.</td>
</tr>
<tr>
  <td><b>Focus-Enhancing</b></td>
  <td>Elixir<br>
  Salve</td>
  <td>Gathered Wheat</td>
  <td>Greatly increases elixir regeneration for 15 seconds.<br>
  Quickly depletes the reservoir while regenerating elixir, but the effect still works when reservoir is empty.</td>
  <td>Opposite effect to <b>Icky</b>.<br>
  The strongest effect on wheat is Dulling, so a potion with the Focus-Enhancing prefix can only be brewed by cancelling out the <i>Dulling</i> effect with a <b>Strengthening</b> ingredient.</td>
</tr>
<tr>
  <td><b>Heartening</b></td>
  <td>Remedy<br>
  Potion<br>
  Salve<br>
  Tincture(?)<br>
  Elixir</td>
  <td>Bluecap</td>
  <td>Rapidly restores sanity.<br>
  Might also instantly restore reservoir and deal a small amount of damage, though it's possible this comes from other effects on the bluecap.</td>
  <td>Opposite effect to <b>Mindbreaker</b>.<br>
  Since it's such a powerful effect that can only be cancelled out by Mindbreaker (both of which need rare ingredients), it's difficult to test if bluecaps have many different effects, or if the Heartening effect just does many different things.</td>
</tr>
<tr>
  <td><b>Mindbreaker</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Urchin</td>
  <td>Rapidly removes sanity.</td>
  <td>Opposite effect to <b>Heartening</b>.<br>
  Since running out of sanity will instantly kill you, these potions are very dangerous if you can land enough of them. Unlike Disgusting potions, Mindbreaker potions actually pose a threat.</td>
</tr>
<tr>
  <td><b>Invigorating</b></td>
  <td>Potion(?)<br>
  Tincture<br>
  Elixir<br>
  Salve</td>
  <td>Beeswax<br>
  Gobletto</td>
  <td>Applies a 15 second regeneration effect.</td>
  <td>Opposite effect to <b>Grueling</b>.</td>
</tr>
<tr>
  <td><b>Grueling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Plumfruit</td>
  <td>Deals a small amount of damage over 15 seconds.</td>
  <td>Appears to be the opposite effect to <b>Invigorating</b>.<br>
  Some players report being able to brew grueling potions using only plumfruit, while the same recipes produce Strengthening potions for others.</td>
</tr>
<tr>
  <td><b>Steadfast</b></td>
  <td>Tincture<br>
  Potion<br>
  Elixir</td>
  <td>Calabash<br>
  Bamboo Bundle</td>
  <td>Increases maximum posture for 15 seconds.</td>
  <td>Opposite effect is <b>Buckling</b>.</td>
</tr>
<tr>
  <td><b>Buckling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Ongo</td>
  <td>Decreases maximum posture for 15 seconds.</td>
  <td>Opposite effect is <b>Steadfast</b>.</td>
</tr>
<tr>
  <td><b>Hastening</b></td>
  <td>Potion<br>
  Elixir<br>
  Salve<br>
  Tincture</td>
  <td>Pomar<br>
  Alestrian Coral<br>
  Sap(?)</td>
  <td>Applies a 15 second speed boost.</td>
  <td>We currently don't know how to find the name of the opposite effect, but can be found on Beeswax.</td>
</tr>
<tr>
  <td><b>Unknown Name</b></td>
  <td>???</td>
  <td>Beeswax</td>
  <td>Reduces speed temporarily.</td>
  <td>Opposite effect is <b>Hastening</b>.<br>
  We can see that this effect exists and cancels Hastening, though the name is unknown as there is no known way to brew a potion where it is the strongest effect.</td>
</tr>
<tr>
  <td><b>Staggering</b></td>
  <td>Salve</td>
  <td>Ongo</td>
  <td>Increases posture damage dealt.</td>
  <td>Opposite effect is unknown - there is no known ingredient which seems to weaken Staggering potions.</td>
</tr>
</tbody>
</table>

## Optimal potion

**Soothing tincture (3 Redd + 2 Gobletto) - Reservoir + Health Regen:** Restore a good amount of reservoir. The Redds in the potions will deal damage, but the goblettos will heal that damage right away and leave you with an extra health regen.

**Mindbreaker Bane (3 Urchin) - Insanity:** Purely offensive potion, designed to cripple your enemy. At 50 intelligence, people with low willpower will reach the first tier of insanity with just 1 potion. Can be used aggresively in The Depths to kill people prematurly.

**Invigorating Elixir (3 Gobletto) - Heath Regen:** Super easy to make and can provide some good healing with Apothecary and a good chunk of intelligence.

**Heartening Salve (3 Bluecap + 2 Gobletto) - Sanity + Health Regen:** Recover a decent chunck of sanity. The Gobletto are used to heal the bit of hp lost by drinking the bluecaps.
