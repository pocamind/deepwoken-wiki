---
title: Alchemy
revid: 12006
source: https://deepwoken.fandom.com/wiki/Alchemy
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
---

# Alchemy

Alchemy is the process of creating potions at a cauldron. Potions can have many different effects depending on the ingredients used, and can be drunk or thrown.

The Crafting Recipes & Alchemy page contains some simple potion recipes, though some of the information is incorrect. At some point we'll update it.

A handful of people have made a [Deepwoken Alchemy Chart](https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV_oNo2F-PBj1Co/edit#gid=0), which lists the results of different ingredient combinations, and some of the potion effects. Some of the information is technically incorrect, though it's mostly accurate, and a useful tool for inferring the exact effects of ingredients.

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

There are 23 (known) potion ingredients, though only 12 have an effect strong enough to brew named potions by themselves.

All ingredients have two effects - a strong primary effect which will name the potion if used alone, and a weaker secondary effect which is always present, but will only name the potion if the primary effect is weakened by another ingredient.

-   Bamboo Bundle - primary effect is **Appalling**, which drains reservior. Secondary effect is **Steadfast**, with an unknown effect.

-   Bluecap - primary effect is **Heartening**, which instantly restores sanity. The potion also restores reservoir (**Soothing**) and deals a small amount of damage (**Disgusting**), though it's not clear if these are part of the Heartening effect.
    -   Heartening is a very strong effect and is almost always the name of the potion (similar to Mindbreaker). Bluecaps are hard to get so there's not been a ton of experimentation, so it's not clear which parts of the Heartening effect are inherent to the potion and which are secondary effects.

-   Browncap - primary effect is **Disgusting**, which deals a small amount of damage. Secondary effect is **Strengthening**, which slightly increases damage dealt.
    -   The damage from Disgusting is very small - even when brewed with every bonus, thrown potions are unlikely to deal more than 5% to opponents of similar strength.
    -   The secondary Strengthening effect is also very small.

-   Calabash - primary effect is **Steadfast**, which has an unknown effect. Secondary effect is **Icky**, which drains elixir for a short time.
    -   While the Icky effect is secondary, calabash is still the strongest source of the Icky effect.

-   Dentifilo - primary effect is **Soothing**, which restores reservoir. Secondary effect is **Disgusting**, which deals a small amount of damage.

-   Gathered Wheat - primary effect is **Dulling**, which decreases mantra damage. Secondary effect is **Focus-Enhancing**, which drastically increases the rate reservoir is turned into ether.
    -   Focus-Enhancing is one of a few effects that can't be the strongest effect in a potion unless multiple different ingredients are used. The Dulling effect can be cancelled with the Strengthening effect, which is found on Plumfruit and Browncaps, to reveal the Focus Enhancing effect.
    -   Even after running out of reservoir, the Focus-Enhancing effect will still increase ether regneration, though the opposite is not true - reservoir is not drained if the ether bar is full.

-   Gobletto - primary effect is **Invigorating**, which give you a 10 second regeneration effect. Secondary effect is unknown.
    -   Invigorating is a very potent effect, and almost always names the potion. It can be cancelled out with the multiple plumfruit (the only source of Grueling), though it's unclear what the secondary effect is as Strengthening then takes over as the strongest effect, naming the potion.

-   Ongo - primary effect is **Buckling**, which has an unknown effect but is opposite to Hastening. Secondary effect appears to be **Staggering**, which also has an unknown effect.
    -   Some people have reported brewing Staggering potions using only Ongos instead of Buckling potions - this may be caused by only having the apothecary talent (which increases positive effects, but not negative ones), though further testing is needed.

-   Plumfruit - primary effect is **Strengthening**, which increases physical damage. Secondary effect is **Grueling**, which has an unknown effect but probably reduces regeneration or very slowly deals damage.
    -   Similar to Ongos, some players have reported brewing Grueling potions using only plumfruit. Probably the same cause.

-   Pomar - primary effect is **Hastening**, which apply a 15 second speed boost. Secondary effect is **Disgusting**, which deals a small amount of damage.

-   Redd - primary effect is **Icky**, which drains elixir. Secondary effect is **Rejuvinating**, which instantly restores a small amount of health.
    -   Like Focus-Enhancing, Rejuvinating can't be brewed using only a single ingredient. The rejuvinating effect is very weak, but it is possible to brew a Rejuvinating potion using exactly three redds and one wheat.

-   Urchin - primary effect is **Mindbreaker**, which greatly lowers sanity. Secondary effect is unknown.
    -   Mindbreaker is notable for overpowering every other effect - mixing an urchin with any other ingredient always produces Mindbreaker potions. This makes it very hard to figure out if the ingredient has a secondary effect.
    -   Also notable for being one of the few good throwing potions - when brewed with every bonus, you can kill someone by draining all their sanity using just a few Mindbreaker Banes.

Eggs, fish meat, scallops, spider eggs, sticks and minerals (coal, iron, stone, irithine, and ect.) are also valid ingredients, but they don't change the potion effect, and brew Nothing Potions when used alone.

Alestrian Coral (found in the depths) is known to be a valid ingredient, but almost no testing with it has been done because it's hard to come by.

Sap and beeswax are unique as ingredients which create Nothing Potions when used alone, but can be combined with other ingredients to change the effect of the potion. More testing is required to figure out exactly what they do.

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
  <td>Opposite effect is <b>Buckling</b>.</td>
</tr>
<tr>
  <td><b>Buckling</b></td>
  <td>Bane<br>
  Blight</td>
  <td>Ongo</td>
  <td>Unknown effect.<br>
  Most likely reduces speed very slightly.</td>
  <td>Opposite effect is <b>Hastening</b>.<br>
  While it's easy to demonstrate this, it's much harder to actually figure out what the potion does, since even with three ongos you can only produce a blight.</td>
</tr>
<tr>
  <td><b>Staggering</b></td>
  <td>Salve</td>
  <td>Probably Ongo</td>
  <td>Unknown effect.<br>
  Supposedly increases posture damage dealt.</td>
  <td>Opposite effect is unknown.<br>
  Only one recipe is known, combining ongos with pomars.<br>
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
