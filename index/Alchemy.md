---
title: Alchemy
revid: 11827
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

Potions are given two word names based on their most powerful effect effect, and the strength of that effect.

Potions can have many different effects, but the potion's most powerful effect is shown by the first word of their name. For example, all _Invigorating_ potions will apply a regeneration effect, though if brewed with a Browncap, they will also deal a small amount of damage when drunk.

The second word of a potions name indicates the strength of the primary effect - however each primary effect has its own naming system.

-   Negative effects are very consistent - they almost all have two tiers, Blight and Bane (with Bane always being stronger).
    -   An exception to this rule is _Appalling_ potions, which have Blight and Potion tiers (with Potion being stronger).
-   Most positive effects have three tiers - Salve, Elixir and Tincture. The hierarchy depends on the effect of the potion.
-   Some positive effects have Elixir, Potion and Remedy tiers instead. Again, the hierarchy depends on the potion.

### Using Potions

Once brewed, potions can be drunk by holding them and pressing M1. Drinking a potion will prevent you from sprinting or rolling, and will be cancelled (wasting the potion) if you take damage while drinking. All potions share a 10 second "potion cooldown", represented by the tiny potion symbol in a circle under the health bar. If you drink a potion during the cooldown, you will throw up and will not get the potion effect.

You can also throw potions by holding them and pressing E - this usually applies a weaker version of the potion effect to anyone standing near the potion when it explodes, though some positive effects only apply when drunk. You can only throw a potion once your previous potion has landed, but if you have multiple different potions (in different inventory slots), you can throw one of each at a time. Throwing a potion can be done while sprinting and does not slow you down.

## Ingredients and Mechanics

We still haven't figured out exactly how Alchemy works, but our best understanding is something as follows:

Every ingredient has many effects - some are powerful and obvious, others are much more subtle. For example, adding a [Redd](Redd.md) to a potion will cause it to instantly restore a small amount of health (the _Rejuvinating_ effect), and drain your Ether for 10 seconds (the _Icky_ effect). Potions grant every effect of every ingredient they contain, but are named only after their strongest effect. When redds are used to brew a potion, the strongest effect is the _Icky_ effect, so the potion will be called an _Icky_ potion, though it's important to note it still has the _Rejuvinating_ effect.

The effects of multiple ingredients can be combined by brewing them together. A maximum of 3 ingredients of the same type can be added to a potion, as well as a maximum of 5 total ingredients. Going over these limits will severely weaken the potion's effects, likely turning it into a Diluted potion.  
Adding multiple ingredients with the same effect will strengthen that effect, and adding ingredients with conflicting effects will weaken them. For example, one of [Gathered Wheat](Gathered_Wheat.md)'s effects is ether regeneration. Adding wheat to a potion containing Redds will partially cancel out the _Icky_ effect, and in the correct ratio, can produce a _Rejuvinating_ potion.

Potions containing only one ingredient suffer a penalty to the strength of all effects (often resulting in a Diluted potion), which can be avoided by adding any ingredient (including ones with no effect, like a Stick or a Rock).

Beeswax and Spider Eggs are special ingredients which increase the duration of potion effects by 50% each (stacking additively, so 2 spider eggs will double the duration).

The Apothecary and Exterminator talents both double the effects of potions when drunk/thrown (respectively). Unlike adding more ingredients to a potion to increase the effect, this does not change the name of the potion. The intelligence stat supposedly also increases the effects of your potions, though I've not tested this.

There are 23 (known) potion ingredients, though only 12 have an effect strong enough to brew potions by themselves.

-   Bamboo Bundle - used to create **Appalling** potions, which drain reservoir.
    -   When cancelled out with a Dentifilo (which restores reservoir), creates a Steadfast Salve, implying it also has a small Steadfast effect.

-   Bluecap - used to create **Heartening** potions, which instantly restore sanity and reservoir when drank. Deals damage when thrown.
    -   Heartening is a very strong effect and is almost always the name of the potion (similar to Mindbreaker). Bluecaps are hard to get so there's not been a ton of experimentation, so it's not clear which parts of the Heartening effect are inherent to the potion and which are secondary effects.

-   Browncap - used to create **Disgusting** potions, which deal a small amount of damage when drunk and thrown.
    -   The damage is very small - even when brewed with every bonus they're unlikely to deal more than 5% to weaker opponents.
    -   Secondary effects aren't clear - perhaps a strengthening effect? Whatever it is, it cancels out Dulling.

-   Calabash - used to create **Steadfast** potions. These drain elixir when drunk, and deal a small amount of damage when thrown.
    -   Calabash clearly have a reasonably strong Icky effect (combining a Calabash with a Redd produces a high strength Icky potion), which explains the elixir drain, but it's not clear what the Steadfast effect is doing. Perhaps damage reduction?

-   Dentifilo - used to create **Soothing** potions, which deal damage and restore reservoir. When thrown, deal a small amount of damage, and drains a small amount of thirst.
    -   The damage comes from a small disgusting effect, which can be seen by brewing two browncaps with a dentifilo and a bamboo to cancel out the soothing - two browncaps make a blight, while adding the dentifilo makes it a bane.
    -   Soothing is a strong effect which almost always names the potion, so it's hard to tell if dentifilos have other effects.

-   Gathered Wheat - primarily used to create _Dulling_ potions, which drastically increases the rate reservoir is turned into ether. When combined with certain ingredients, creates _Focus-Enhancing_ potions, which do the same thing.
    -   Dulling potions are a Bane, so presumably they have some negative effect (perhaps reducing damage?), and the reservoir draw is coming from the Focus Enhancing effect.
    -   Focus Enhancing becomes the strongest effect when the potion is combined with browncaps, redds (needs the right ratio, otherwise Rejuvinating is the strongest effect) and plumfruit. It's not clear what effect these ingredients have in common that cancels dulling.
    -   Even after running out of reservoir, the focus enhancing effect will still increase ether regneration, though the opposite is not true - reservoir is not drained if the ether bar is full.

-   Gobletto - used to create _Invigorating_ potions, which give you a 10 second regeneration effect. Unknown effect when thrown - possibly a very subtle slow?
    -   Invigorating is a very potent effect, and almost always names the potion. It can be cancelled out with multiple plumfruit, though it's unclear what is cancelling it as Strengthening then takes over as the strongest effect.

-   Ongo - used to create _Buckling_ potions. Effect unknown.
    -   When combined with a Pomar, creates a _Staggering_ potion, which also has an unknown effect. Perhaps one of these increases posture damage.

-   Plumfruit - used to create _Strengthening_ potions, which increase physical damage.
    -   Plumfruit are the only ingredient which cancel out the Invigorating effect, though it's not clear why.
    -   Has a subtle hastening effect when brewed with Sap. Unclear which ingredient the effect is coming from.
    -   Some players report that they brewed Grueling Banes and Grueling Blights using plumfruit (using the same recipes that currently produce Strengthening potions). This doesn't seem to be the case anymore - its unknown what changed.

-   Pomar - used to make _Hastening_ potions, which deal a small amount of damage and give a 15 second speed boost when drunk. Unknown effect when thrown.
    -   Secondary effect is either Staggering, or something that cancels out Buckling. Or maybe both. Alchemy is hard.

-   Redd - used to make _Icky_ potions, which drain elixir and instantly restore health when drunk, and drain elixir when thrown.
    -   The elixir drain comes from the Icky effect, while the health restoration comes from the Rejuvinating effect, which can be seen by cancelling out the Icky with wheat.

-   Urchin - used to create _Mindbreaker_ potions, which greatly lower sanity.
    -   Notable for overpowering every other ingredient - mixing an urchin with any other ingredient always produces Mindbreaker potions. This makes it very hard to figure out if the potion has a secondary effect.
    -   Also notable for being one of the few good throwing potions - when brewed with every bonus, you can kill someone by draining all their sanity using just a few Mindbreaker Banes.

Eggs, fish meat, beeswax, sticks and minerals (coal, iron, stone, irithine, and ect.) are also valid ingredients, but they don't change the potion effect, and brew Nothing Potions when used alone. Potions with only a single ingredient appear to have a strength penalty, which can be avoided by adding a "filler" ingredient (such as a stick). Adding filler ingredients to a potion with at least 2 ingredients already will do nothing.

Sap and beeswax are unique as ingredients which create Nothing Potions when used alone, but can be combined with other ingredients to change the effect of the potion.

## Assorted Ramblings of Alchemists

A bunch of people have visited this page and added their alchemy notes to it. I'm way too lazy to condense it all into a real article, so I'm just keeping it at the bottom. If you want to learn more about alchemy (or DM some other alchemists), there's some stuff here.

### some recipes

1 Bluecap, 1 Calabash, 1 Spider Egg - Heartening Elixir (?? Effect - probably healing or blood regeneration though)

2 Browncaps, 1 Gathered wheat - Focus-Enhancing Salve

uhhh thats it lol!!!!!

### felinor with more recipes

**Hi, Felinor here, I found out some recipes! (miodrag333) (Anja <3#3252)**

3x browncap = disgusting bane (Doesnt seem to do much, all we know it does a little bit of damage) (Doesn't get improved with Beeswax)

3x Gobletto = Invigorating Elixer (Health regen, drinking too many can make you throw up, doesnt work when splashing)

3x redd = icky bane (insta heal, drains ether)

3x dentifilo = soothing tincture (Gives Resivore but can also make you throw up when drinken, suggested to splash)

3x Gathered Wheet = Dulling Potions (Ether Regen)

3X Calabash = Steadfast potion (drains whole ether bar)

3X Plum fruit = strenghtening salve (gives strenght)

3X Bamboo bundle = Appalling potion (drains reservoir)

3x Pomar = hastening elixir (Deals damage and gives speed boost)

**These are all potions I found out, good luck alchemist!**

\---------------------------------------------------------------------------------

3x Ongo = Staggering Potion (don't know what this does) (Then drink it stupid)

### different person

different person here (Chronos#6591)

AS A Certain Young man said below, spider eggs do indeed buff potions (buff the duration)

So a little sexy potion for all of you is 3 goblettos + 2 spider eggs which heals 157.5 hp at 75 intelligence (softcap)

Sup chronos back as my young man said below 3 Goblettos do indeed make a health regen Pot HOWEVER You can make it even more powerful by adding beeswax OR spidereggs potions are quite useful especially when you cannot use a campfire. there are also other potions that are umm Quite Useful in combat. also it scales off of intelligence so if u hav elike 100 intelligence you're going to be a God.

3 Calabash + 2 Bamboo = Ether + Reservoir drain. (when thrown/drunk lol)

[https://gyazo.com/a636747af3fbf44a5cb5aa3f63af844e](https://gyazo.com/a636747af3fbf44a5cb5aa3f63af844e)

Alchemy Chart by bobbio76#2916

[https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV\_oNo2F-PBj1Co/edit?usp=sharing](https://docs.google.com/spreadsheets/d/17Y4dSolQmri04eoaPYkrZSx1xPGoEV_oNo2F-PBj1Co/edit?usp=sharing)

Blank Spots are untested  
\-----------------------------------------------------------

### someone explains the basics

Ok. Wake#7067 here, I have been an alchemist for about 12 hours. If you have any extra information, please DM me immediately.

  
Here are the basics -

Based on how much ingridients you put in, you can make the same potion - just to a lesser extent.

For example, 3 goblettos makes an Invigorating Salve (the strongest heal potion known atm), while 2 goblettos will make an Invigorating Elixr, and 1 will make an Invigorating Tincture. Going above 3 will make the weakest version of said potion, and going past 4 will create a Nothing tincture. (just some rando here, tried making it with 3 goblettos, it only made an invigorating elixir, tried with 4 it become diluted elixir)

For the above, I am fairly certain that Tincture, Elixr, and Salve only exist for positive effecting potions.

For negative potions, they will follow Tincture, Blight, and Bane.

As of now, I am not certain if mixing other ingridients will add said effects to one potion. (e.x 3 Pomars will make a Blight potion give speed as well)

I would like to point out that Alchemy does not give that strong of a buff to the player, and most potions are situational. A "large amount" of (effect) can actually just be for 1-3 seconds.

Due to how different the Potions system is, I will organize the recipies in a different way.

The recipies I know so far are as follows:

Invigorating Potions

Drinking/Using 2 of these back to back

1 gobletto - Invigorating Tincture, heals a small amount of health over time.

2 goblettos - Invigorating Elixr, heals a moderate amount of health over time.

3 goblettos - Invigorating Salve, heals a large amount of health over time.

\---

Hasty Potions

**Note:**

I haven't gathered enough Pomars to check at this time, but I think that, depending on how strong the potion is, it'll damage more.

1 Pomar, Hasty Tincture, damages you but boosts your speed for a small amount of time

2 Pomars, Hasty Elixr, damages you but boosts your speed for a moderate amount of time

3 Pomars, Hasty Salve, damages you but boosts your speed for a large amount of time

\--

Deltifinos

**Note:**

Gives Resivore Back, not regen but a determaned amount

1 Deltifino, gives 2% back

2 Deltifino, gives 5%

3 Deltifino, gives 7%

for the rest I don't have enough ingridients atm to figure out any other stuff so... Looking forward to another alchemist who devotes themselves to this trashy mantra to finish my work or correct me or something.

* * *

### more potions

_**Sewer#7160**_ following up on the previous post, I've been doing alot of testing with my friends on alchemy, mostly using them as test subjects for my potions, and lets just say I got some information for any aspiring alchemists:

**Strengthening potions**

_Plumfruits_ give a strengthening effect which _directly increases your damage_ but takes a bit of health, no joke, you can put up to 3 in a cauldron.

**One** will give you a diluted blight, does nothing

**Two** gives a strengthening tinticture, increases damage for a bit

**Three** gives a strengthening salve. increases damage for a while longer

When drunken, it will directly increase your damage by a good amount, but you'll take a bit of damage. I don't know the scaling or if its a direct or percentage damage boost, I might need to test more. The effect is weakened when thrown by allies however, but it can be useful when thrown into a group.

**If you want to save on plumfruits and make strengthening salves, I found out that 1 plumfruit + 2 browncaps will still result in strengthening salve. I'm pretty sure alot of potions can have substituted ingredients for them.**

**Staggering potions**

Next is _ongos_, which give a _direct posture damage boost_ on effected players. Real useful for dealing with players or certain NPCS

One gives a diluted blight, no effect

Two gives a staggering tinicture, which increases posture damage for a bit

Three gives a staggering salve, which increases posture damage for a while longer

**Like plumfruits**, the effect scales depending on how much you put, going up to 3, and the more you put in the longer the effect lasts. Again, effect is lessened if thrown.

**I haven't found a substitute ingredient for the staggering salve, unlike the plumfruit - browncap combination above.**

**Soothing potions**

**Dentifilos** make soothing salves and soothing elixers, but if no one has noticed it actually restores your reservoir for a bit of health. Again, the restoration scales the more you put in.

One results in a diluted tinticture

Two results in a soothing potion

Three results in a soothing elixer

**Focus-enhancing potions**

This one actually requires two ingredients, two browncap and two wheats, which make a focus-enhancing elixer, when drunken, ~will jack up your ether restoration so much, really useful for spamming spells and such.~ Again, effect is weakened when thrown. (The ether Regen is jsut from the wheat, we dont actually know what it does)

**Appalling potions**

_Bamboo_ gives the opposite effect of dentifilos, which is reservoir removal.

One will create a diluted bane.

Two will create an appalling blight

Three will create an appalling potion

**Steadfast potions**

_Calabash_ gives the effect of ether degeneration, and if strong enough can disable ether for a few more seconds

One will created a diluted blight

Two will create a appalling bane, removes most ether

Three will create an appalling potion, removes all ether and disables it for a few seconds.

**Icky potions**

_Redds_ give this effect, dispite the name, these potions can instaheal you for the cost of some ether., even if they have bane or blight in their name.

One will give you a diluted blight

Two will give you an icky bane

Three will give you an icky blight.

If you want a health potion that **doesn't drain ether**, try mixing in two redds with a wheat, cause pretty sure wheat has **ether restoration properties**, you'll get a dulling bane which restores health without fricking up your ether.

**Invigorating Potions**

_Goblettos_ give this effect, which instill a passive, faster health regen for some time.

im not repeating myself guy above me already wrote the effects

Note: These potions may be a bit inaccurate due to me having all the alchemist talents, but if you disagree on something tell me my discord account is near the top of this diluted article.

There are also effects like grueling bane and such that I haven't tested well yet enough, if someone can tell me the effects of those potions I'll be pretty glad.

Ingredients like sap, spider egg, urchins, coral, scallops, and fish don't have any "base effects", but they might be used to enhanced the effects of certain potons.

### slenderman has a couple things to add

Hi, SlenDaMan64#1618 here, been an alchemist for about 4 days, with a couple of things to add, which I covered a bit in a comment on this page

side note to all of alchemy: when testing new ingredients pay attention to cauldron colour, if it's white then it's a nothing tincture

Urchins can actually be put in potions by themselves, making the "mindbreaking" line of potions, which lowers sanity a LOT, but a lot of items create a nothing tincture, which only puts potions on cooldown, as you can see next to the roll cooldown indicator. Drinking another potion during this cooldown makes you vomit. All potions have this cooldown

The alchemy cards actually increase the negative effects of potions with some positive and some negatives, like icky banes. So either A, icky bane is considered a positive and it works like this for all of them, or B, the more likely option, icky banes are conisdered negative potions, and this is how we can base the effects of the alchemy cards onto the potions.

I'm going to be testing more with the effects of "nothing" ingredients and if mixing them with other things actually does anything, if you have any ideas on a new ingredient, test it, but pay attention to the colour of the cauldron.
