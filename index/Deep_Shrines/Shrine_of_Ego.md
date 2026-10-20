---
title: Deep Shrines/Shrine of Ego
revid: 231160
source: https://deepwoken.fandom.com/wiki/Deep_Shrines/Shrine_of_Ego
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Vendors, NPCs, Mechanics]
---

# Deep Shrines/Shrine of Ego

| Shrine of Ego | |
|---|---|
| location | Temple of Hearts, Widow's Hollow, Celtor Wastes |

“ CHILD OF FOLLY. MAKE YOUR HUBRIS KNOWN. ”

― Shrine of Ego

**If you're looking for another shrine, return to [Deep Shrines](../Deep_Shrines.md) or head to [Navigation](#navigation).**

## Description

Located in the entrance cave before [Deep Widow](../Deep_Widow.md) in the [Widow's Hollow](<../Widow's_Hollow.md>), in the little house where [Ciea](../Ciea.md) is located.

## Effects/Details

Shrine of Ego

<table>
<tbody>
<tr>
  <td><center><figure><figcaption></figcaption></figure>1 <a href="../Knowledge.md">KnowledgeLargeNew</a><div>Knowledge</div></center></td>
  <td><div>Attribute Ablation</div><div><i>Lower an Attribute and receive a point to reinvest.<br>
  Remaining uses: [number]</i></div></td>
</tr>
<tr>
  <td><center><figure><figcaption></figcaption></figure>1 <a href="../Knowledge.md">KnowledgeLargeNew</a><div>Knowledge</div></center></td>
  <td><div>Trait Ablation</div><div><i>Lower a Trait and receive a point to reinvest.</i></div></td>
</tr>
<tr>
  <td><center><figure><figcaption></figcaption></figure>1 <a href="../Knowledge.md">KnowledgeLargeNew</a><div>Knowledge</div></center></td>
  <td><div>Sifted Ashes</div><div><i>Restore a burned card, letting it appear in hands once again.</i></div></td>
</tr>
</tbody>
</table>

### Details

#### Trait Ablation

-   The player reduces a [Trait](../Traits.md) of their choosing by 1, refunding the Trait Point.
-   Traits cannot be reduced below 0.
-   There is no limit to the amount of items you can remove and reallocate your Trait Points.

#### Sifted Ashes

-   Allows the player to un-[Burn](../Aces.md) a Talent or Mantra card of their choice, refunding the [Ace](../Aces.md) spent.
-   Unburned cards can be reobtained at the player's leasure, assuming they still meet the card requirements.

#### Attribute Ablation

-   Allows the player to reduce an eligible\* Attribute of choice by 1 investment points, refunding the Attribute Point and granting +1 Free Training point.
-   This can only be performed up to 3 times per character, with the remaining uses being listed in the Shop UI.
-   You cannot remove innate attribute points granted by your aspect.
    -   This limitation will be removed if you have the [Multifaceted](../Echoes.md#upgrades-unlocks-and-modifiers) Echo Unlock, as it converts innate attribute points into regular investment points.
-   You cannot reduce an attribute if you have Talent(s) that require equal to or higher investment on that attribute.
    -   For example: If you went 40 Strength to pick [Showstopper](../Talents.md#showstopper), you wouldn't be able to remove points from Strength to go below 40 investment, as long as you have Showstopper. This also applies if your Strength was already below 40 due to [Shrine of Order](Shrine_of_Order.md) usage, entirely preventing you from reducing the attribute.
    -   This applies to the Attunement mastery Talents as well, such as Adept Flamecharmer; Shrine of Ego will not allow you to go below the 1/20/30/50 Attunement investment milestones, in most scenarios (see [below](#below)).
    -   This restriction does not apply to the following Talent requirement types, allowing you to freely uninvest:
        -   The alternative attribute requirements for Talents; for example, as [Potion Quaffer](../Talents.md#potion-quaffer) requires 15 Intelligence and \[15 Fortitude or 15 Willpower\], you can reduce your Fortitude and Willpower investment, but you cannot reduce your Intelligence investment below Potion Quaffer's requirements.
        -   Category attributes on Talents that require attribute category investment ([Mind](../Attributes.md#body-and-mind), [Body](../Attributes.md#body-and-mind), Element, and Weapon). For example, if you have [Grounding Bolt](../Talents.md#grounding-bolt) (90 Thundercall, 90 Weapon), you can reduce your Weapon investment, but not your Thundercall investment.
        -   [Attributes Unbound](../Attributes_Unbound.md) Talents, though Attunement Unbounded Talents will be removed from your character if you do not meet their requirements.
        -   Attribute requirements for Oath Talents; You can reduce your attributes below your Oath's requirements.
            -   The only exception to this is [Arcwarder](../Oath%253A_Arcwarder.md) in most scenarios, as you cannot lower your Attunement stats due to the Attunement Adept Talents. This however, can be avoided by using [Shrine of Order](Shrine_of_Order.md) to go _up_ to exactly 20 Flamecharm and/or 20 Thundercall, obtaining the Oath, and then going to Shrine of Ego. Keep in mind that if you invest any attribute points, die (including resetting your character), or leave the game, it will give you the Attunement Adept Talent, preventing you from uninvesting.
            -   The theorized reason for why this works at all is that the Oath trainers do a "check" to see if you meet the requirements to obtain their Oath, but the Oath Talents themselves have no stat requirement attached to them.
            -   When this was brought to the attention of Arch\_Mage, one of Deepwoken's developers, he said "3 points aint the end of the world."
-   You cannot use this shrine if you have a pending Talent hand or [Whisper Draw](../Whisper_Draw.md).
-   Despite popular belief, you can still change your attributes with this after Shrine of Order.
    -   This idea stemmed from the previously mentioned Talent investment exception.
-   If you no longer meet the requirements for your weapon after using Shrine of Ego, you will keep it equipped, but you'll receive a penalty, lowering your weapon's damage. This debuff scales on how far below your weapon's requirements you are, up to a maximum of -25% base damage, though the math behind it makes it only really effective on lower requirement weapons.
    -   To explain, the exact formula for this debuff is 1-0.25\*m/r where m is your current stat and r is your weapon's requirements [calculator here](https://www.desmos.com/calculator/3hj2bmdzzj).
    -   If your weapon requires multiple stats, this will prioritize the fraction that is farthest from 1, for example if you have 17/20 Strength and 90/100 Weapon, your weapon's damage will be reduced based off your Strength stat and instead of your Weapon stat, as 17/20 < 90/100.
    -   [Khan](../Khan.md) and [Silentheart](../Oath%253A_Silentheart.md)'s requirement reduction is applied in these calculations.
    -   This debuff is a damage modifier to your scaled damage that is multiplicative to all other multipliers.
    -   Some weapons gain explicit downsides when you do not meet the requirements. For example, [Sanguine Transfuser](../Sanguine_Transfuser.md)'s critical heals less health, and [Vortex Echo](../Vortex_Echo.md)'s critical is less effective at reducing cooldowns.
-   If you no longer meet the requirements for a Mantra or your Mantra's levels after using Shrine of Ego, you will keep it equipped with its previous level intact with **no** penalties, aside from the minor damage loss from reduced investment.

#### Miscellaneous

-   If you no longer meet the requirements for a Outfit with stat requisites, you will keep the Outfit with no penalties and you will be able to unequip and reequip it with no restrictions.
-   This Shrine does not count for the "Bargained with Deep Shrines" [Echo Triumph](../Echoes.md#echo-triumphs).

## Dialogue

<table>
<tbody>
<tr>
  <td>Begin Dialogue</td>
</tr>
<tr>
  <td>CHILD OF FOLLY. MAKE YOUR HUBRIS KNOWN.</td>
</tr>
<tr>
  <td>[Opens <a href="#effectsdetails">Shop UI</a>]</td>
</tr>
<tr>
  <td>[End Dialogue]</td>
</tr>
</tbody>
</table>

## Navigation

Variants: [Shrine of Temptation](Shrine_of_Temptation.md) · [Shrine of Blasphemy](Shrine_of_Blasphemy.md) · [Shrine of Chance](Shrine_of_Chance.md) · [Shrine of Order](Shrine_of_Order.md) · [Shrine of Division](Shrine_of_Division.md) · [Shrine of Unification](Shrine_of_Unification.md)
