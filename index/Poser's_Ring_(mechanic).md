---
title: "Poser's Ring (mechanic)"
revid: 226169
source: https://deepwoken.fandom.com/wiki/Poser's_Ring_(mechanic)
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Mechanics]
---

# Poser's Ring (mechanic)

| Poser's Ring (mechanic) | |
|---|---|

This page details the mechanics behind the [Poser's Ring](<Poser's_Ring.md>) and other abilities that have the same effect. Please refer to [Poser's Ring](<Poser's_Ring.md>) if you intended to view that page instead.

“ Damage done with a Katana isn't received until the user sheathes their weapon. ”

― [Poser's Ring](<Poser's_Ring.md>) description

## Description

These abilities suspend and store the damage your light attacks deal, until you perform a specific action, releasing all of the stored damage simultaneously.

The term "**Suspended Hit**" refers to the release of the stored damage; [Poser's Ring](<Poser's_Ring.md>) and [Gathering Storm](Talents/Vow_of_Iron.md#gathering-storm)'s sheathe or [Moppet](Moppet.md)'s Critical Attack.

## Mechanics

### General Mechanics

-   **The Suspended Hit cannot be directly buffed by any means.** You must buff your light attacks if you wish for the Suspended Hit to deal more damage. Mechanically, the Suspended Hit deals true damage, though in practice this isn't necessarily the case. See [Damage Snapshotting](#damage-shapshotting) for more info.
-   Suspended Hits **cannot** be blocked, parried, or dodged, though being attacked during the Suspended Hit's animation will cause the stored damage to **void**.
-   The Suspended Hit effectively has infinite range, and triggers "on hit" effects.
-   You cannot exceed 70% of a player's maximum health with the Suspended Hit. By using [Wither](Status_Effects.md#wither) application or any other damage source, you can reduce your opponent's health below this margin.
-   Effects that trigger based on scaled damage (e.g. [Bleed](Status_Effects.md#bleed)) will function like normal on weapons with this mechanic. These effects will be triggered when you land your basic attacks, and **not** when you trigger the suspended hit.
-   All abilities with the Poser's Ring mechanic share stacks, meaning you can deal damage on a [Poser's Ring](<Poser's_Ring.md>) [Katana](Katana.md), then swap to the [Moppet](Moppet.md) and critical attack to release the stored damage.
-   The Poser's Ring mechanic applies an 8% damage buff to the Suspended Hit in PvE. This is believed to be attributed to the general 8% PvE damage buff.
-   The stored damage is amassed on the target, and is not recorded per player. The damage credit goes to the player who triggers the Suspended Hit first. For example: If two people are fighting an enemy with Poser's Ring mechanic weapons, and person B sheathes ([Poser's Ring](<Poser's_Ring.md>)), then all of the stored damage applied by both players will be dealt at once. This credits the damage to Player B, regardless of how much Player A contributed.
-   The stored damage on each target you've damaged will be dealt simultaneously on Suspended Hit; hitting enemy A, then enemy B, and then proccing the Suspended Hit will cause both of them to take their respective stored damage.
-   Chip damage and the damage from damage-dealing enchantments are not stored, and deal their damage normally.
-   Player clones cannot use the Poser's Ring damage, and will instead deal their damage normally. In the case of [Moppet](Moppet.md), they also cannot use its critical attack.

#### Damage Snapshotting

The damage that each hit deals is calculated and stored, including the effects of damage buffs and resistances. Conditional effects, positive or negative, that are active when your attacks land will still be considered for the damage of those attacks, even if the effects are not active by the time you trigger the Suspended Hit. The [Viscosity](Viscosity.md) and [Deferred](Deferred.md) Enchantments function very similarly.

To prevent damage buffs or resistances from double-dipping, the Suspended Hit deals **true damage**, meaning it cannot be directly buffed or resisted. In practice, however, this does not necessarily deal true damage, as the resistances and damage modifiers are taken into account for each hit landed. To reclarify: it deals true damage to fix fringe cases where something would buff or resist the Suspended Hit specifically, and in practice, the hits are still resisted.

Simple examples scenarios:

1.  While [Taunt](Attunement-less.md#taunt) is active (20% damage modifier), you land three basic attacks that normally deal 10 damage each. Once Taunt runs out, you land three more basic attacks and then Sheathe ([Poser's Ring](<Poser's_Ring.md>)). In total, you've dealt 66 damage, as the first three hits received Taunt's damage buff, but the last three didn't.
2.  You land six basic attacks that deal 10 damage each, then apply [Taunt](Attunement-less.md#taunt) (20% damage modifier) and Sheathe ([Poser's Ring](<Poser's_Ring.md>)). In total, you've done 60 damage, as Taunt was not active for any of the hits landed, and the Suspended Hit cannot be buffed.
3.  You land three basic attacks that deal 10 damage each, then your opponent afflicts [Charm](Status_Effects.md#charm) on you (10% damage debuff), and you land three more basic attacks and Sheathe ([Poser's Ring](<Poser's_Ring.md>)) while you are still Charmed. In total, you've done 57 damage, as Charm was only active for the final three hits, and the Suspended Hit cannot have its damage modified.

## Individual Abilities

The differences and individual mechanics of each ability that uses the Poser's Ring mechanic.

### [Gathering Storm](Talents/Vow_of_Iron.md#gathering-storm)

Exclusive to the [Flashing Thunder](Flashing_Thunder.md) [Memento](Mementos.md), the damage your weapon attacks deal is stored, and is triggered upon sheathing the weapon.

This plays an animation and applies an extended true stun to the target. During this stun, the user and the target gain damage immunity to outside damage.

Unlike the others, this effect has a visual component; as you store damage, lightning orbs will form and orbit your character's head. More orbs will appear the more damage you store, capping at 8, visually, and the orbs are fired on sheathe. These orbs have various effects, given to them by the other [Flashing Thunder](Flashing_Thunder.md) Talents. See [Flashing Thunder](Flashing_Thunder.md) for more info.

### [Moppet](Moppet.md)

Exclusive to the [Moppet](Moppet.md), a [Hallowtide](Hallowtide.md) dagger weapon, your damage of your M1s is stored, with the Suspended Hit being triggered by performing a critical attack. Moppet will lose the Poser's Ring mechanic if you replace its critical attack with a [Talent](Talents.md)\-given critical attack; enchant-given criticals will retain the Poser's mechanic, despite not having a way to deal the stored damage.

For every stored attack the Moppet gains increased PEN. This can scale up to 100% PEN after enough hits.

Because Moppet's Suspended Hit is on a critical attack, Moppet is a great catalyst for any "on critical attack" Talents. With that being said, due to the Suspended Hit not being directly buffable, some of these Talents may not work fully, or at all.

### [Poser's Ring](<Poser's_Ring.md>)

Exclusive to the [Poser's Ring](<Poser's_Ring.md>) equipment, the weapon damage of the [Katana](Katana.md), [Alloyed Katana](Katana.md), and [Shattered Katana](Shattered_Katana.md) weapons is stored, and is triggered when sheathing (unequipping) the weapon.

This plays an animation and applies an extended true stun to the target. During this stun, the user and the target gain damage immunity to outside damage.

The damage will remain stored if you swap weapons, but sheathing will only cause the Suspended Hit if your equipped weapon is one of the above.
