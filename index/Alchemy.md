---
title: Alchemy
revid: 45478
source: https://deepwoken.fandom.com/wiki/Alchemy
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Mechanics, Ingredients, Items]
---

# Alchemy

Alchemy is the process of creating potions at a cauldron. Potions can have many different effects depending on the ingredients used and can be drunk or thrown.

The Crafting Recipes & Alchemy page contains some simple potion recipes, though some of the information is incorrect. At some point we'll update it.

A handful of people have made a [Deepwoken Alchemy Chart](https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV_oNo2F-PBj1Co/edit#gid=0), which lists the results of different ingredient combinations, and some of the potion effects. Some of the information is incorrect, though it's mostly accurate, and a useful tool for inferring the exact effects of ingredients.

Some people have also made a [Alchemy Guide](https://deepwoken.fandom.com/wiki/File:Alchemy_Guide_Jan_10th.pdf) (updated as of 1/10/2022) which has slightly different information than what is listed here. You can also check that out.

You cannot brew any [Attunement](Attunements.md) potions, but instead you will have to complete a quest given by the respective [Trainer](Attunement_Trainers.md) in order to obtain them.

You can also talk to Ciea near the Widow's Den, she will give you quests to make different potions and bring them to her.

## Basics

### Brewing Potions

To brew a potion, you hold ingredients in your hand, add them to a cauldron by clicking on it, and then press E to mix all the ingredients in the cauldron into a potion.

There are four known functioning cauldron in the game. One is found in a hut on a hill above the guild hall on [Etris](Etris.md), next to the Frostdraw Trainer. The second is found on the second floor of the castle on [Summer Isles](Summer_Isle.md). The third is found next to the Physical Mantra trainer at [Greathive Aratel](Greathive_Aratel.md). The fourth is found at [Boatman's Watch](<Boatman's_Watch.md>). You can also create your own cauldron using Summon Cauldron, which appears at exactly 25 Intelligence as a Mantra, but is unlikely to draw unless Attunementless.

Adding too many ingredients to a potion will dilute it, and the potion will do almost nothing. A maximum of **5** ingredients can be added to a potion before it is diluted, and any individual ingredient can be added a maximum of **3** times.  
For example, you can make a powerful speed potion using 3 [Pomars](Pomar.md) and 2 [Spider Eggs](Spider_Egg.md), but if you brew a potion using 4 Pomar's, or 3 Pomar's and 3 Spider Eggs, you will just get a useless diluted potion.

### Potion Names

Potions are given two-word names based on their most powerful effect, and the strength of that effect.

Potions can have many different effects, but the potion's most powerful effect is shown by the prefix (first word) of their name. For example, all _Invigorating_ potions will apply a regeneration effect, though if brewed with a Browncap, they will also deal a small amount of damage when drunk.

The suffix (second word) of a potions name indicates the strength of the prefix's effect, with more powerful potions getting a higher tier suffix. However, each prefix has its own tiering hierarchy for suffixes.

-   Most negative effects have two suffixes, Blight and Bane, with Bane being stronger.
    -   Some negative effects also have the Potion suffix, which is stronger than Bane.
    -   Appalling is unique as the only (known) effect to use the same suffix for two different tiers - both the strongest and weakest potions use the Blight suffix, with Bane being the middle tier.
-   Most positive prefixes have three tiers - Salve, Elixir and Tincture (most commonly in that order). The hierarchy depends on the prefix.
    -   Some positive prefixes (such as Heartening) can have as many as 5 different suffixes.
-   Wild Alchemy can change the suffix, though it does so in unusual ways and isn't fully understood.

### Using Potions

Once brewed, potions can be drunk by holding them and pressing M1. Drinking a potion will prevent you from sprinting or rolling and will be cancelled (wasting the potion) if you take damage while drinking. All potions share a 10 second "potion cooldown", represented by the tiny potion symbol in a circle under the health bar. If you drink a potion during the cooldown, you will throw up and will not get the potion effect.

You can also throw potions by holding them and pressing E - this usually applies a weaker version of the potion effect to anyone standing near the potion when it explodes, though some positive effects only apply when drunk. You can only throw a potion once your previous potion has landed, but if you have multiple different potions (in different inventory slots), you can throw one of each at a time. Throwing a potion can be done while sprinting and does not slow you down.

## Mechanics

We still haven't figured out exactly how Alchemy works, but our best understanding is something as follows:

Every ingredient has two effects - sometimes both are obvious, other times one is more hidden. For example, adding a [Redd](Redd.md) to a potion will cause it to instantly restore a small amount of health (the _Rejuvenating_ effect), and drain your Ether for 10 seconds (the _Icky_ effect). Potions grant every effect of every ingredient they contain but are named only after their strongest effect. When Redd's are used to brew a potion, the strongest effect is the _Icky_ effect, so the potion will have the _Icky_ prefix, though it's important to note it still has the _Rejuvenating_ effect.

The effects of multiple ingredients can be combined by brewing them together. A maximum of 3 ingredients of the same type can be added to a potion, as well as a maximum of 5 total ingredients. Going over these limits will severely weaken the potion's effects, likely turning it into a Diluted potion.  
Adding multiple ingredients with the same effect will strengthen that effect, and adding ingredients with conflicting effects will weaken them. For example, one of [Gathered Wheat](Gathered_Wheat.md)'s effects is ether regeneration. Adding wheat to a potion containing Redd's will partially cancel out the _Icky_ effect, and in the correct ratio, can produce a potion with the _Rejuvenating_ prefix.

Potions containing only one ingredient suffer a heavy penalty to the strength of all effects (usually resulting in a Diluted potion). This penalty can be avoided by adding any ingredient, including ones with no effect, like a Stick or a Rock.

Spider Eggs are a special ingredient which increases the duration of potion effects by 50% (stacking additively, so 2 spider eggs will double the duration).

Finally, potions have a greater effect when brewed by a character with high intelligence. This does not change the name of the potion, and the exact scaling is untested.

### Talents

The Apothecary and Exterminator talents both increase the effects of potions by an unknown amount (perhaps 50%?). While the talents claim this only applies when the potion is drunk or thrown for Apothecary and Exterminator respectively, this is not true - potions brewed with these talents will **always** have stronger effects, regardless of if they are thrown or drunk.

These talents do not change the suffix of the potion, but it can change the prefix. For example, if you have the Apothecary talent but not the Exterminator talent, potions brewed with Plumfruit will have the Strengthening prefix, as Apothecary increases that effect but not the negative Grueling effect which is otherwise stronger.

The Wild Alchemy talent has the description:  
_"Potions you prepare will have a chance to have doubled ingredients when mixed."_

This doesn't seem to be accurate. When Wild Alchemy affects a potion, it gains a small increase in strength to all its effects, and sometimes changes the suffix of the potion's name. When tested with both Apothecary and Exterminator talents on a character with 40 INT, potions affected by Wild Alchemy saw an increase of slightly less than 20% to the effect strength - this was consistent across all potions tested.  
It's unknown if this is a bug or if there are factors we don't yet understand. More testing is needed.

## Ingredients

There are 24 (known) potion ingredients, though only 15 have an effect strong enough to brew named potions by themselves.

Almost all ingredients have a positive and a negative effect - one of these effects is the stronger primary effect, which will name the potion if used alone, and the other is a weaker secondary effect, which is always present, but will only name the potion if the primary effect is weakened by another ingredient.

-   Alestrian Coral - Primary effect is **Dulling**; Decreases damage dealt. Secondary effect is **Hastening**; Increases speed for 15 seconds.

-   Bamboo Bundle - Primary effect is **Appalling**; Instantly drains Reservoir. Secondary effect is **Steadfast**; Increases maximum Posture.

-   Beeswax - Primary effect is **Invigorating**; Applies a 15 second regeneration effect. Secondary effect is unknown.
    -   Since beeswax's Invigorating effect is so powerful, and the only effect that cancels it is the weak Grueling from Plumfruit, it is very difficult to find the name of the secondary effect. It appears to be a slowing effect, however.

-   Bluecap - Primary effect is **Heartening**; Rapidly restores Sanity. (The potion also restores reservoir (**Soothing**) and deals a small amount of damage (**Disgusting**), though it's not clear if these are part of the Heartening effect.)
    -   Heartening is a very strong effect and is almost always the name of the potion (similar to Mindbreaker). Bluecaps are hard to get so there's not been a ton of experimentation, so it's not clear which parts of the Heartening effect are inherent to the potion, and which are secondary effects.

-   Browncap - Primary effect is **Disgusting**; Deals a small amount of damage. Secondary effect is **Strengthening**; Slightly increases damage dealt.
    -   The damage from Disgusting is very small - even when brewed with every bonus, thrown potions are unlikely to deal more than 5% to opponents of similar strength.
    -   The secondary Strengthening effect is also very small.

-   Calabash - Primary effect is **Steadfast**; Increases your maximum posture. Secondary effect is **Icky**; Drains Ether and prevents Reservoir draw for 15 seconds.
    -   While the Icky effect is secondary, calabash is still the strongest source of the Icky effect.

-   Dentifilo - Primary effect is **Soothing**; Instantly restores reservoir (Unknown what it does in verse 2). Secondary effect is **Disgusting**; Deals a small amount of damage.

-   Gathered Wheat - Primary effect is **Dulling**; Decreases damage dealt. Secondary effect is **Focus-Enhancing**; Drastically increases the rate that Reservoir is turned into Ether for 15 seconds.
    -   Focus-Enhancing is one of a few effects that can't be the strongest effect in a potion unless multiple different ingredients are used. The Dulling effect can be cancelled with the Strengthening effect, which is found on Plumfruit and Browncaps, to reveal the Focus Enhancing effect.
    -   Even after running out of reservoir, the Focus-Enhancing effect will still increase ether regeneration, though the opposite is not true - reservoir is not drained if the ether bar is full.

-   Gobletto - Primary effect is **Invigorating**; Applies a 15 second regeneration effect. Secondary effect is **Hastening**; Increases speed for 15 seconds.
    -   It is very difficult to find the secondary effect of this ingredient. Invigorating can only be cancelled out with Grueling, but this can only be done using three Plumfruit, which then changes the prefix to Strengthening. Strengthening can only be cancelled using wheat (taking the last ingredient slot), and the wheat's Focus Enhancing effect is more powerful than whatever the Gobletto secondary effect is.
        -   ~It may be possible to find the name of the secondary effect if you have Exterminator but not Apothecary (which might allow invigorating to be cancelled with fewer Plumfruit), though this is a difficult test to set up.~
        -   the name is not shown, however the resulting potion when thrown provides yellow particles that increase your speed.

-   Ongo - Primary effect is **Buckling**; Reduces maximum posture. Secondary effect is **Staggering**; Increases posture damage.
    -   If you have the Apothecary talent but not the Exterminator talent, the strongest effect is Staggering instead of Buckling.

-   Plumfruit - Primary effect is **Grueling**; Deals a small amount of damage over 15 seconds. Secondary effect is **Strengthening**; Increases physical damage.
    -   Similar to Ongo's, if you have the Apothecary talent but not the Exterminator talent, the strongest effect is Strengthening instead of Grueling.

-   Pomar - Primary effect is **Hastening**; Increases speed for 15 seconds. Secondary effect is **Disgusting**; Deals a small amount of damage.

-   Redd - Primary effect is **Icky**; Drains Ether and prevents Reservoir draw for 15 seconds. Secondary effect is **Rejuvenating**; Instantly restores a small amount of health.
    -   Like Focus-Enhancing, Rejuvenating can't be brewed using only a single ingredient. The rejuvenating effect is very weak, but it is possible to brew a Rejuvenating potion using exactly three Redd's and one Wheat.

-   Urchin - primary effect is **Mindbreaker**, which rapidly lowers sanity. Secondary effect is unconfirmed but appears to be **Strengthening**.
    -   Mindbreaker potions are notable for being one of the few good throwing potions - when brewed with every bonus, you can kill someone by draining all their sanity using just a few Mindbreaker Banes.

Eggs, fish meat, scallops, spider eggs, sticks and minerals (coal, iron, stone, irithine, etc.) are also valid ingredients, but they don't change the potion effect, and brew Nothing Potions when used alone.

Sap is unique as an ingredient which creates Nothing Potions when used alone but can be combined with other ingredients to change the prefix of the potion. More testing is required to figure out exactly what it does.  
Crustacean meat is supposedly similar, though more testing is needed.

## Effects

Tiers are listed in order of strength, with the strongest tier listed first. Ingredients are also listed in the same order, but this is much harder to measure so may be inaccurate.

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
  <td>Unkown</td>
  <td>Used to affect resevoir.</td>
</tr>
<tr>
  <td><b>Soothing</b></td>
  <td>Tincture<br>
  Potion<br>
  Salve</td>
  <td>Dentifilo<br>
  Bluecap(?)</td>
  <td>Unknown</td>
  <td>Used to affect resevoir.</td>
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
  <td>Opposite effect to <b>Rejuvenating</b>.<br>
  The damage dealt when thrown is very small (less than 5% to similar power opponents even when brewed as strong as possible), so these potions aren't a good combat option.</td>
</tr>
<tr>
  <td><b>Rejuvenating</b></td>
  <td>Salve</td>
  <td>Redd</td>
  <td>Instantly restores a small amount of health.</td>
  <td>Opposite effect to <b>Disgusting</b>.<br>
  The strongest effect on a redd is Icky, so a potion with the Rejuvenating name can only be brewed by cancelling out the Icky effect with Focus Enhancing from Wheat.<br>
  <br>
  Only one recipe for a potion with the Rejuvenating name is known - 3 redds and 1 wheat. Any other ratio causes a different effect to be more powerful.</td>
</tr>
<tr>
  <td><b>Dulling</b></td>
  <td>Potion<br>
  Bane<br>
  Blight</td>
  <td>Gathered Wheat<br>
  Alestrian Coral</td>
  <td>Reduces damage dealt.<br>
  Appears to have a reduced effect on low damage attacks (like daggers).</td>
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
  <td>Drains Ether for 15 seconds.</td>
  <td>Opposite effect to <b>Focus Enhancing</b>.</td>
</tr>
<tr>
  <td><b>Focus-Enhancing</b></td>
  <td>Elixir<br>
  Salve<p>Tincture</p></td>
  <td>Gathered Wheat</td>
  <td>Greatly increases Ether regeneration for 15 seconds.</td>
  <td>Opposite effect to <b>Icky</b>.<br>
  The strongest effect on wheat is Dulling, so a potion with the Focus-Enhancing prefix can only be brewed by cancelling out the <i>Dulling</i> effect with a <b>Strengthening</b> ingredient like Browncaps.</td>
</tr>
<tr>
  <td><b>Heartening</b></td>
  <td>Remedy<br>
  Potion<br>
  Salve<br>
  Tincture(?)<br>
  Elixir</td>
  <td>Bluecap</td>
  <td>Rapidly restores Sanity.<br>
  Might also instantly restore reservoir and deal a small amount of damage, though it's possible this comes from other effects on the bluecap.</td>
  <td>Opposite effect to <b>Mindbreaker</b>.<br>
  Since it's such a powerful effect that can only be cancelled out by Mindbreaker (both of which need rare ingredients), it's difficult to test if bluecaps have many different effects, or if the Heartening effect just does many different things.</td>
</tr>
<tr>
  <td><b>Mindbreaker</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Urchin</td>
  <td>Gives Insanity,</td>
  <td>Opposite effect to <b>Heartening</b>.<br>
  As running out of sanity will kill you instantly (if you've lost all your hp), these potions are very dangerous if you manage to land enough of them. Unlike nasty potions, Mindbreaker potions actually pose a threat.</td>
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
  The prefix of a potion brewed using only plumfruit depends on the talents of the brewer - if the brewer only has Apothecary, the prefix is Strengthening.</td>
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
  <td>We currently don't know how to find the name of the opposite effect, but it can be found on Beeswax.</td>
</tr>
<tr>
  <td><b>Unknown Prefix</b></td>
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

  
NOTE- its unlikely certain effects like sap, crustacean meat, sticks and other unknown materials just do nothing, as even with spider eggs when brewed by themselves get a "nothing" potion but have the ability to increase the duration of a potion while slightly lowering its potency. theres also probably an ingredient thats opposite to spider eggs which can increase potency yet decrease duration.

## Optimal Potions

When brewing potions for use, they should always have 5 ingredients. Even when the ingredients aren't available to make an optimal potion, you can always add a second useful effect to a potion by adding more ingredients.

The best potions for a timed effect (like Grueling or Hastening) either use three of its strongest ingredient and two spider eggs (for a 30 second effect), or three of the strongest ingredient and two of the second strongest ingredient (for a slightly stronger 15 second effect).

When brewing potions for an instant effect (like Rejuvenation or Soothing), potions should use three of the strongest ingredient and two of the second strongest ingredient. Sometimes this isn't possible, so the last two ingredients should be used to add a second useful effect.

-   **Sanity** (Heartening) - 3 Bluecaps
    -   Also deals a small amount of damage and instantly restores reservoir.
    -   Unknown if spider eggs improve this potion - if they don't, the last two ingredient slots should be used for a second effect. Any positive effect is good here, though invigorating (from goblettos and beeswax) will help restore the small amount of lost health.
-   **Insanity** (Mindbreaker) - 3 Urchin + 2 Spider Egg
    -   With the Exterminator talent, only one potion is needed to make most players reach the first tier of insanity. Especially effective in [The Depths](The_Depths.md), where players don't regenerate sanity and are often slightly insane already.
    -   This potion reduces sanity over time and doesn't stack - replacing the spider eggs with a second effect (like ether drain) still allows you to drain sanity at the same speed, though you'll need to land more potions to kill someone.
-   **Ether Restoration** (Focus-Enhancing) - 1 (2) Gathered Wheat + 2 (1) Plumfruit + 2 Spider Eggs
    -   The Focus Enhancing effect on wheat is exceptionally strong, and only one or two is needed to allow you to continuously spam mantras on cooldown. However, wheat also has a powerful Dulling effect, which reduces mantra damage. Plumfruit (or browncaps) are added to reduce this effect.
-   **Fast Ether Drain** (Icky) - 3 Calabash + 2 Redd
    -   Rapidly drains ether and prevents reservoir draw for 15 seconds. Will almost immediately drain target's entire ether bar.
-   **Fast Ether Drain** (Icky Bane) - 1 Calabash + 1 Redd
    -   A cheap alternative of Fast Ether Drain. Works effectively with Exterminator.
-   **Ether Disable** (Icky) - 2 Calabash + 3 Spider Egg
    -   Even a small icky effect is enough to completely prevent ether from being drawn from the reservoir. Compared to Fast Ether Drain, this potion may let your opponent get an extra mantra in before their ether is drained, but will keep them empty for much longer.
    -   Particularly fun against gun users, who need ether to use their M1.
-   **Instant Reservoir** (Soothing) - 3 Dentifilo + 2 Bluecap
    -   Almost a full reservoir restore - deals ~5% of your health in damage.
-   **Instant Reservoir Drain** (Appalling) - 3 Bamboo Bundle
    -   Not very effective - usually drains less than 20%. Ether draining potions are recommended instead.
-   **Instant Health** (Rejuvenating) - 3 Redd + 2 Beeswax
    -   Only redds have an instant health effect, and it's not very strong. The last two ingredients can be beeswax or goblettos to restore additional health over time, or wheat can be added to cancel out the ether drain.
-   **Long Regeneration** (Invigorating) - 3 Beeswax + 2 Spider Egg
    -   Heals the most of any potion over 30 seconds - can be enough to fully heal a character with low max HP.
-   **Fast Regeneration** (Invigorating) - 3 Beeswax + 2 Gobletto
    -   Heals faster than long regeneration, but less total HP.
-   **Instant Damage** (Disgusting) - 3 Bluecap + 2 Browncap
    -   Instant Damage potions were heavily nerfed before release - there are some circulating videos of high damage potions, but they can't be made now. Currently, this is the best available damage potion, dealing less than 10% to similar strength opponents.
-   **Long Poison** (Grueling) - 3 Plumfruit + 2 Spider Egg
    -   Less pathetic than instant damage, but still pretty bad.
-   **Fast Poison** (Grueling) - 3 Plumfruit + 2 Bluecap
    -   Subsituting some of the total damage for speed.
