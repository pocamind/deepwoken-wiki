---
title: Character Stats
revid: 212135
source: https://deepwoken.fandom.com/wiki/Character_Stats
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Mechanics]
---

# Character Stats

## Character Stats

_Each player gets 330 total investment points per character, from Level 1-20, including investment points given to them by their character’s aspect (+3 and +2 stats)._

### Health

-   The player's max Health Points. Starting value is 210 (+4 at Power 1).
    -   Current HP is tracked on the health bar in %, from 100 to 0. When it reaches 0%, caused by taking damage, the player becomes [Unconscious](Status_Effects.md#unconscious).
-   How to increase: [Power](Power.md) (+4 Per power), [Equipment](Equipment.md), [Fortitude](Attributes.md#ftd) (+0.5 Per investment (this is halved to +0.25 per investment past 50 Fortitude)), [Talents](Talents.md), [Oaths](Oaths.md), [Vitality](Traits.md#vitality) (+10 per point; max +60 at 6 Vitality)

### Posture

-   The player's max Posture. Starting value is 20.
    -   Current Posture is tracked on the posture bar in %, from 0 to 100. When it reaches 100%, reached by blocking too many hits, the player is guard broken; they are stunned and their posture is cleared.
-   Max Posture can be greatly increased by using a [Shield](Shields.md), though at the cost of reducing the amount of posture restored on parry by 40%.
-   How to increase: [Shields](Shields.md), [Equipment](Equipment.md), [Talents](Talents.md)

### Ether

-   The player's max Ether. Starting value is 120.
    -   Current Ether is tracked on the ether bar in %, from 0 to 100. Among other things, using Mantras depletes your Ether bar.
    -   When in combat, the users Ether regeneration scales on their current [Tempo](Combat_Mechanics.md#tempo).
-   How to increase: [Intelligence](Attributes.md#int), [Charisma](Attributes.md#cha), [Equipment](Equipment.md), [Talents](Talents.md)

### Tempo

-   The player's max Tempo. Starting value is 120.
    -   Current Tempo is tracked on the Tempo bar in %, from 0 to 100. Tempo is primarily used when [Venting](Combat_Mechanics.md#tempo).
    -   The Tempo bar affects your Ether regeneration while in combat.
    -   Vents cost 40 Tempo to use.
-   How to increase: [Erudition](Traits.md#erudition) (+5 Tempo and +5% Tempo Regen per point; max +30 and +30% at 6 Erudition), some [Equipment](Equipment.md)/[Outfit](Outfits.md) Talents

### Sanity

-   The player's max Sanity. Starting value is 80.
    -   Insanity is tracked with Sanity as its max value. When your sanity % goes below 70%, detrimental effects will be applied, with additional effects being added the lower your Sanity gets. (Check the [Insanity](Insanity.md) page for more info)
-   How to increase: [Willpower](Attributes.md#wll), [Equipment](Equipment.md), [Talents](Talents.md)
    -   The [Ganymede](Ganymede.md) aspect grants a 1.2x Sanity gain multiplier.

### Stealth

-   The player's max Stealth. Starting value is 0%.
    -   Player becomes stealthier, lowering the detection range of mobs.
-   How to increase: [Agility](Attributes.md#agl), [Equipment](Equipment.md), [Talents](Talents.md) (check the [Stealth](Stealth.md) page for more info)
    -   The [Felinor](Felinor.md) aspect grants 20% starting Stealth, and has a 1.2x Stealth gain multiplier.

### Carry Load

-   The player's maximum inventory capacity. Starting value is 100.
    -   Current inventory usage and maximum capacity can be tracked at the bottom of the inventory. Player can carry more item past their max Carry Load, up to 1.2x their max carry load, but gradually become slower.
-   How to increase: [Strength](Attributes.md#str), [Fortitude](Attributes.md#ftd), [Equipment](Equipment.md), [Talents](Talents.md), Carrying Capacity [Echo Upgrade](Echoes.md#upgrades-unlocks-and-modifiers) (check the [Carry Load](Carry_Load.md) page for more info)

### Damage Vs. Monsters

-   Bonus damage against [Monsters](Monsters.md).
    -   This stat can only be gained through the [Drowned](Drowned.md) Enchant, [Echo Unlocks](Echoes.md#upgrades-unlocks-and-modifiers), [Tranquil Circle](Oath%253A_Blindseer.md#tranquil-circle), and the [Megalodaunt Coat](Megalodaunt_Coat.md) and [Pathfinder Elite](Pathfinder_Elite.md) equipment.

### Mantra Slots

-   The number of Mantras of a given type of the player can own. Starts at 3 Combat, 1 Mobility, 1 Support and 1 Wildcard.
    -   Mantras will fill the Wildcard slot if there are no many slots for that Mantra to occupy. For example, if you have three Combat Mantra Slots and you attempt to obtain four combat Mantras, one will be placed in the Wildcard slot.
    -   If the player is entirely out of Mantra slots, additional Mantras can be obtained, but the player is required to replace a Mantra of the same category. Otherwise, it is placed in the inventory.
    -   'Wisp' Mantras will take up the Wisp Mantra Slot if you have one. If the Wisp Mantra Slot is full and/or you don't have one, they'll take up a Support Mantra Slot instead. If that is also full, they'll take up a Wildcard slot.
-   How to increase: [Oaths](Oaths.md), [Talents](Talents.md)

## Equipment Bonuses

Check out this website to better understand the calculation and try it out interactively. [\[LINK\]](https://deepwoken-armor-resistance.vercel.app/)

### Armor

-   **Physical Armor:** Reduce damage taken from weapons and physical Mantras. Stacks multiplicatively with the following:
    -   **Slash Armor:** Reduce damage taken from bladed weapons such as swords, daggers or axes.
    -   **Blunt Armor:** Reduce damage taken from blunt weapons such as clubs, fists or hammers.
-   **Elemental Armor:** Reduce damage taken from elemental attacks. Stacks multiplicatively with the following:
    -   **Blood Armor:** Reduce damage taken from [Bloodrend](Bloodrend.md) attacks.
    -   **Fire Armor:** Reduce damage taken from [Flamecharm](Flamecharm.md) attacks.
    -   **Ice Armor:** Reduce damage taken from [Frostdraw](Frostdraw.md) attacks.
    -   **Lightning Armor:** Reduce damage taken from [Thundercall](Thundercall.md) attacks.
    -   **Metal Armor:** Reduce damage taken from [Ironsing](Ironsing.md) attacks.
    -   **Wind Armor:** Reduce damage taken from [Galebreathe](Galebreathe.md) attacks.
    -   **Shadow Armor:** Reduce damage taken from [Shadowcast](Shadowcast.md) attacks.

#### Damage Reduction Calculation

Equipment resistances are additive to each other while everything else is combined multiplicatively, leading to the following formula:

Total damage reduction = 1 - ((1 - Outfit General resist%) × (1 - Outfit Specific resist%) \* (1 - (Equipment resist + Equipment resist + Equipment resist + ...)%) × (1 - other resists%) × (1 - other resists%) × ...)

-   "Outfit General resist" is referring to **Physical Armor** or **Elemental armor**.
-   "Outfit Specific resist" is referring to specific damage types; **Blunt**, **Slash**, **Bloodrend**, **Flamecharm**, **Frostdraw**, **Galebreathe**, **Ironsing**, **Shadowcast**, and **Thundercall**. You should only calculate for the damage type that is in relation to the "general resist", for example, calculating your Frostdraw resistance by using your Physical Armor stat as your general resist makes no sense.
-   "Equipment resist" refers to the resistance stats on the [Equipment](Equipment.md) item(s), not any additional resistance gained through equipment Talents; those are to be calculated separately.
-   Monster Armor is additive to equipment resistances, and should be considered as such when calculating damage resistance in PvE.

Example 1: If you had [Prophet's Cloak](<Prophet's_Cloak.md>) with a 10% Elemental Resistance arms equipment and a 5% Elemental Resistance helmet, and a [Light Eater Ring](Light_Eater_Ring.md), your Flamecharm resistance would look like this

-   1 - ((1 - 25%) × (1 - 20%) × (1 - (10 + 5 + 2 + 2)%)) = 0.514 or 51.4% Flamecharm resistance

Example 2: If you were wearing [Authority Commander](Authority_Commander.md) with a 16% Physical resistance arms equipment, a 10% Physical resistance helmet, a [Confessor's Charm](<Confessor's_Charm.md>), [Padded Armor](Talents.md#padded-armor), and [Orbital Ice](Talents.md#orbital-ice), your Blunt resistance would look like this

-   1 - ((1 - 30%) × (1 - 10%) × (1 - (16 + 10 + 3)%) × (1 - 3%) × (1 - 15%)) = 0.6312 or 63.12% Blunt resistance

## Talent Bonuses

These effects can be increased by obtaining Talents that grant these bonuses.

### Passive Agility

-   Increases parkour ability.
    -   Increases climb height, slide duration and speed, and the duration and Strength of the speed boost gained from [parkour](Movement.md).
-   Stacks with the [Agility](Attributes.md#agl) Attribute.

## Statistics

The following stats are shown in the journal's summary tab.

### Time Played

-   The amount of time the player played on that **Character**.

### Total Played

-   The amount of time the player played on that **Slot**.

### Mantras Learnt

-   The total number of Mantras the player has learned.

### Times Drowned

-   The amount of time the player was sent to [The Depths](The_Depths.md).
-   Increase Trial Power for the Depths Trial.
