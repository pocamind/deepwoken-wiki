---
title: Alchemy
revid: 11918
source: https://deepwoken.fandom.com/wiki/Alchemy
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
---

# Alchemy

This page contains most of the wiki's information on Alchemy. Since the wiki is not very organised, there's some information on Recipes & Alchemy that isn't repeated here yet.

A handful of people have made a [Deepwoken Alchemy Chart](https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV_oNo2F-PBj1Co/edit#gid=0), which lists the results of different ingredient combinations, and the effects of most potions. It is outdated in places, but a good quick reference guide for potion effects.

## Basics

### Brewing Potions

To brew a potion, you hold ingredients in your hand, add them to a cauldron by clicking on it, and then press E to mix all the ingredients in the cauldron into a potion.

There is only one functioning cauldron in the game, found in a hut on a hill near the guild hall on [Etris](Etris.md), next to the Frostdraw trainer. You can also create your own cauldron using an intelligence mantra, which appears at around 20 intelligence.

Almost all talents and mantras related to alchemy **only appear after brewing your first potion**. If you want to get all the alchemy talents, ensure you brew a potion at Etris early on.

Adding too many ingredients to a potion will dilute it, and the potion will do almost nothing. A maximum of **5** ingredients can be added to a potion before it is diluted, and any individual ingredient can be added a maximum of **3** times.  
For example, you can make a powerful speed potion using 3 [Pomars](Pomar.md) and 2 [Spider Eggs](Spider_Egg.md), but if you brew a potion using 4 Pomars, or 3 Pomars and 3 Spider Eggs, you will just get a useless diluted potion.

### Potion Names

Potions are given two word names based on their most powerful effect, and the strength of that effect.

Potions can have many different effects, but the potion's most powerful effect is shown by the first word of their name. For example, all _Invigorating_ potions will apply a regeneration effect, though if brewed with a Browncap, they will also deal a small amount of damage when drunk.

The second word of a potions name indicates the strength of the primary effect - however each primary effect has its own naming system.

-   Negative effects are very consistent - they almost all have two tiers, Blight and Bane (with Bane almost always being stronger).
    -   An exception to this rule is _Appalling_ potions, which have Blight and Potion tiers (with Potion being stronger).
-   Most positive effects have three tiers - Salve, Elixir and Tincture (most commonly in that order). Some potions have a different hierarchy.
-   Some positive effects have Elixir, Potion and Remedy tiers instead. Again, the hierarchy depends on the potion.

### Using Potions

Once brewed, potions can be drunk by holding them and pressing M1. Drinking a potion will prevent you from sprinting or rolling, and will be cancelled (wasting the potion) if you take damage while drinking. All potions share a 10 second "potion cooldown", represented by the tiny potion symbol in a circle under the health bar. If you drink a potion during the cooldown, you will throw up and will not get the potion effect.

You can also throw potions by holding them and pressing E - this usually applies a weaker version of the potion effect to anyone standing near the potion when it explodes, though some positive effects only apply when drunk. You can only throw a potion once your previous potion has landed, but if you have multiple different potions (in different inventory slots), you can throw one of each at a time. Throwing a potion can be done while sprinting and does not slow you down.

## Mechanics

We still haven't figured out exactly how Alchemy works, but our best understanding is something as follows:

Every ingredient has many effects - some are powerful and obvious, others are much more subtle. For example, adding a [Redd](Redd.md) to a potion will cause it to instantly restore a small amount of health (the _Rejuvinating_ effect), and drain your Ether for 10 seconds (the _Icky_ effect). Potions grant every effect of every ingredient they contain, but are named only after their strongest effect. When redds are used to brew a potion, the strongest effect is the _Icky_ effect, so the potion will be called an _Icky_ potion, though it's important to note it still has the _Rejuvinating_ effect.

The effects of multiple ingredients can be combined by brewing them together. A maximum of 3 ingredients of the same type can be added to a potion, as well as a maximum of 5 total ingredients. Going over these limits will severely weaken the potion's effects, likely turning it into a Diluted potion.  
Adding multiple ingredients with the same effect will strengthen that effect, and adding ingredients with conflicting effects will weaken them. For example, one of [Gathered Wheat](Gathered_Wheat.md)'s effects is ether regeneration. Adding wheat to a potion containing Redds will partially cancel out the _Icky_ effect, and in the correct ratio, can produce a _Rejuvinating_ potion.

Potions containing only one ingredient suffer a penalty to the strength of all effects (often resulting in a Diluted potion), which can be avoided by adding any ingredient (including ones with no effect, like a Stick or a Rock).

Beeswax and Spider Eggs are special ingredients which increase the duration of potion effects by 50% each (stacking additively, so 2 spider eggs will double the duration).

The Apothecary and Exterminator talents both double the effects of potions when drunk/thrown (respectively). Unlike adding more ingredients to a potion to increase the effect, this does not change the name of the potion. The intelligence stat supposedly also increases the effects of your potions, though I've not tested this.

## Ingredients

There are 23 (known) potion ingredients, though only 12 have an effect strong enough to brew potions by themselves.

-   Bamboo Bundle - used to create **Appalling** potions, which drain reservoir.
    -   When cancelled out with a Dentifilo (which restores reservoir), creates a Steadfast Salve, implying it also has a small Steadfast effect.

-   Bluecap - used to create **Heartening** potions, which instantly restore sanity and reservoir when drank, and deal a small amount of damage.
    -   Heartening is a very strong effect and is almost always the name of the potion (similar to Mindbreaker). Bluecaps are hard to get so there's not been a ton of experimentation, so it's not clear which parts of the Heartening effect are inherent to the potion and which are secondary effects.

-   Browncap - used to create **Disgusting** potions, which deal a small amount of damage, and slightly increase damage dealt.
    -   The damage is very small - even when brewed with every bonus they're unlikely to deal more than 5% to weaker opponents.
    -   The secondary Strengthening effect is also very small.

-   Calabash - used to create **Steadfast** potions. These drain elixir when drunk, and deal a small amount of damage when thrown.
    -   Calabash clearly have a reasonably strong Icky effect (combining a Calabash with a Redd produces a high strength Icky potion), which explains the elixir drain, but it's not clear what the Steadfast effect is doing. Perhaps damage reduction?

-   Dentifilo - used to create **Soothing** potions, which deal damage and restore reservoir. When thrown, deal a small amount of damage, and drains a small amount of thirst.
    -   The damage comes from a small disgusting effect, which can be seen by brewing two browncaps with a dentifilo and a bamboo to cancel out the soothing - two browncaps make a blight, while adding the dentifilo makes it a bane.
    -   Soothing is a strong effect which almost always names the potion, so it's hard to tell if dentifilos have other effects.

-   Gathered Wheat - primarily used to create **Dulling** potions, which decrease magical damage and drastically increases the rate reservoir is turned into ether.
    -   Similar to Redds, the potion's effect comes from two effects - the Dulling effect reduces magical damage, while the weaker **Focus Enhancing** effect increases reservoir draw.
    -   The Dulling effect can be cancelled with the Strengthening effect, which is found on Plumfruit and Browncaps, to reveal the Focus Enhancing effect.
    -   Even after running out of reservoir, the focus enhancing effect will still increase ether regneration, though the opposite is not true - reservoir is not drained if the ether bar is full.

-   Gobletto - used to create **Invigorating** potions, which give you a 10 second regeneration effect. Unknown effect when thrown - possibly a very subtle slow?
    -   Invigorating is a very potent effect, and almost always names the potion. It can be cancelled out with multiple plumfruit, though it's unclear what is cancelling it as Strengthening then takes over as the strongest effect.

-   Ongo - used to create **Buckling** potions. Effect unknown.
    -   When combined with a Pomar, creates a **Staggering** potion, which also has an unknown effect. Perhaps one of these increases posture damage.

-   Plumfruit - used to create **Strengthening** potions, which increase physical damage.
    -   Plumfruit are the only ingredient which cancel out the Invigorating effect, though it's not clear why.
    -   Has a subtle hastening effect when brewed with Sap. Unclear which ingredient the effect is coming from.
    -   Some players report that they brewed **Grueling** Banes and Grueling Blights using the same recipes that currently produce Strengthening potions. This doesn't seem to be the case anymore - its unknown what changed.

-   Pomar - used to make **Hastening** potions, which deal a small amount of damage and give a 15 second speed boost when drunk. Unknown effect when thrown.
    -   Secondary effect is either Staggering, or something that cancels out Buckling. Or maybe both. Alchemy is hard.

-   Redd - used to make **Icky** potions, which drain elixir and instantly restore health when drunk, and drain elixir when thrown.
    -   The elixir drain comes from the Icky effect, while the health restoration comes from the **Rejuvinating** effect, which can be seen by cancelling out the Icky with wheat.

-   Urchin - used to create **Mindbreaker** potions, which greatly lower sanity.
    -   Mindbreaker is notable for overpowering every other effect - mixing an urchin with any other ingredient always produces Mindbreaker potions. This makes it very hard to figure out if the ingredient has a secondary effect.
    -   Also notable for being one of the few good throwing potions - when brewed with every bonus, you can kill someone by draining all their sanity using just a few Mindbreaker Banes.

Eggs, fish meat, scallops, spider eggs, sticks and minerals (coal, iron, stone, irithine, and ect.) are also valid ingredients, but they don't change the potion effect, and brew Nothing Potions when used alone.

Alestrian Coral (found in the depths) is known to be a valid ingredient, but almost no testing with it has been done because it's hard to come by.

Sap and beeswax are unique as ingredients which create Nothing Potions when used alone, but can be combined with other ingredients to change the effect of the potion.

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
  <td>Bane<br>
  Blight</td>
  <td>Bamboo Bundle</td>
  <td>Instantly drains reservoir.</td>
  <td>Opposite effect to <b>Soothing</b>.</td>
</tr>
<tr>
  <td><b>Soothing</b></td>
  <td>Salve<br>
  Elixir<br>
  Tincture<br>
  <i>(someone check this)</i></td>
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
  Pomar(?)</td>
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
  <td>Gathered Wheat</td>
  <td>Reduces damage dealt by mantras.</td>
  <td>Opposite effect to <b>Strengthening</b>.</td>
</tr>
<tr>
  <td><b>Strengthening</b></td>
  <td>Salve<br>
  Tincture</td>
  <td>Plumfruit<br>
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
  <td>Drains elixir.</td>
  <td>Opposite effect to <b>Focus Enhancing</b>.</td>
</tr>
<tr>
  <td><b>Focus-Enhancing</b></td>
  <td>Elixir<br>
  Salve</td>
  <td>Gathered Wheat</td>
  <td>Greatly increases elixir regeneration. Quickly depletes the reservoir while regenerating elixir, but the effect still works when reservoir is drained.</td>
  <td>Opposite effect to <b>Icky</b>.<br>
  The strongest effect on wheat is Dulling, so a potion with the Focus Enhancing name can only be brewed by cancelling out the <i>Dulling</i> effect with <b>Strengthening</b> from browncaps or plumfruit.</td>
</tr>
<tr>
  <td><b>Heartening</b></td>
  <td>Remedy<br>
  Potion<br>
  Elixir</td>
  <td>Bluecap</td>
  <td>Instantly restores sanity.<br>
  Might also instantly restore reservoir and deal a small amount of damage, though it's possible this comes from other effects on the bluecap.</td>
  <td>Opposite effect to <b>Mindbreaker</b>.<br>
  Since it's such a powerful effect that can only be cancelled out by Mindbreaker (both of which need rare ingredients), it's difficult to test if bluecaps have many different effects, or if the Heartening effect just does many different things.</td>
</tr>
<tr>
  <td><b>Mindbreaker</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Urchin</td>
  <td>Instantly removes sanity.</td>
  <td>Opposite effect to <b>Heartening</b>.<br>
  Since running out of sanity will instantly kill you, these potions are very dangerous if you can land enough of them. Unlike Disgusting potions, Mindbreaker potions actually pose a threat.</td>
</tr>
<tr>
  <td><b>Grueling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Plumfruit</td>
  <td>Unknown effect.<br>
  Most likely reduces regeneration, or slowly deals damage over time.</td>
  <td>Appears to be the opposite effect to <b>Invigorating</b>.<br>
  The exact effect is unknown, but plumfruit are the only ingredient which reduces the strength of invigorating potions, and also the only ingredient known to have the Grueling effect.<br>
  <br>
  Some players report being able to brew grueling potions using only plumfruit, while the same recipes produce Strengthening potions for others.</td>
</tr>
<tr>
  <td><b>Invigorating</b></td>
  <td>Salve<br>
  Elixir<br>
  Tincture</td>
  <td>Gobletto</td>
  <td>Applies a 10 second regeneration effect.</td>
  <td>Appears to be the opposite effect to <b>Grueling</b>.</td>
</tr>
<tr>
  <td><b>Hastening</b></td>
  <td>Tincture<br>
  Salve<br>
  Elixir</td>
  <td>Pomar<br>
  Sap(?)</td>
  <td>Applies a 15 second speed boost.</td>
  <td>Opposite effect is unknown, but most likely <b>Buckling</b>.</td>
</tr>
<tr>
  <td><b>Buckling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Ongo</td>
  <td>Unknown effect.<br>
  Most likely reduces speed.</td>
  <td>All that's known for sure about this effect is that when ongos are combined with a pomar, it produces a Staggering potion.</td>
</tr>
<tr>
  <td><b>Staggering</b></td>
  <td>Salve</td>
  <td>Probably Ongo</td>
  <td>Unknown effect.<br>
  Supposedly increases posture damage dealt.</td>
  <td>Opposite effect is unknown.<br>
  Only one recipe is known, combining Ongos with Pomars.<br>
  <br>
  Some players report being able to brew staggering potions using only ongos, though this produces buckling potions for others.</td>
</tr>
<tr>
  <td><b>Steadfast</b></td>
  <td>Tincture<br>
  Salve<br>
  Elixir<br>
  (check)</td>
  <td>Calabash<br>
  Bamboo Bundle</td>
  <td>Unknown effect.<br>
  Maybe reduces damage taken?</td>
  <td>Opposite effect is unknown, though might be Staggering.<br>
  This would be the only pair of effects where one isn't a Bane/Blight, however.</td>
</tr>
</tbody>
</table>
