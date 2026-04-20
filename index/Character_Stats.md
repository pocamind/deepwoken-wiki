---
title: Character Stats
revid: 205579
source: https://deepwoken.fandom.com/wiki/Character_Stats
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Mechanics]
---

# Character Stats

## Character Stats

_Each player gets 330 investment points per slot, from Level 1-20, including investment points given to them by their character’s aspect (+3 and +2 stats)._

### Health

-   The player's max Health Points. Starting value is 210 (+4 at Power 1).
    -   Current HP is tracked on the health bar in %, from 100 to 0. When it reaches 0%, caused by taking damage, the player is knocked.
-   How to increase: [Power](Power.md) (+4 Per power), [Equipment](Equipment.md), [Fortitude](Attributes.md#ftd) (+0.5 Per investment (this is halved to +0.25 per investment past 50 Fortitude)), [Talents](Talents.md), [Oaths](Oaths.md), [Vitality](Traits.md#vitality) (+10 per point; max +60 at 6 Vitality)

### Posture

-   The player's max Posture. Starting value is 20.
    -   Current Posture is tracked on the posture bar in %, from 0 to 100. When it reaches 100%, reached by blocking too many hits, the player is guard broken: they are stunned and their posture is cleared.
-   Max Posture can be greatly increased by using a [Shield](Shields.md).
-   How to increase: [Shields](Shields.md), [Equipment](Equipment.md), [Talents](Talents.md)

### Ether

-   The player's max Ether. Starting value is 120.
    -   Current Ether is tracked on the ether bar in %, from 0 to 100. Among other things, using Mantras depletes your Ether bar.
-   How to increase: [Intelligence](Attributes.md#int), [Charisma](Attributes.md#cha), [Equipment](Equipment.md), [Talents](Talents.md)

### Sanity

-   The player's max Sanity. Starting value is 80.
    -   Insanity is tracked with Sanity as its max value. When your sanity % goes below 70/30/10%, detrimental effects will be applied. At 70% Sanity or Tier 1 [Insanity](Insanity.md), the player will periodically shiver, slowing their movements. At 30% Sanity or Tier 2 [Insanity](Insanity.md), the player will periodically scratch themselves instead of shivering, dealing self-damage. At 10% Sanity or Tier 3 [Insanity](Insanity.md), the player will gouge at their eyes followed by scratching, dealing self-damage and stunning themselves in an animation. If you are knocked at Tier 3 Insanity, you will instantly be gripped.
-   How to increase: [Willpower](Attributes.md#wll), [Equipment](Equipment.md), [Talents](Talents.md)

### Stealth

-   The player's max Stealth. Starting value is 0%.
    -   Stealth can only be tracked in the campfire UI. Player becomes stealthier, lowering the detection range of mobs.
-   How to increase: [Agility](Attributes.md#agl), [Equipment](Equipment.md), [Talents](Talents.md) (check the [Stealth](Stealth.md) page for more info)

### Carry Load

-   The player's maximum inventory capacity. Starting value is 130.
    -   Current inventory usage and maximum capacity can be tracked at the bottom of the inventory. Player can carry more item past their max Carry Load, up to 1.2x their max carry load, but gradually become slower.
-   How to increase: [Strength](Attributes.md#str), [Equipment](Equipment.md), [Talents](Talents.md) (check the [Carry Load](Carry_Load.md) page for more info)

### Mantra Slots

-   The number of Mantras of a given type of the player can own. Starts at 3 Combat, 1 Mobility, 1 Support and 1 Wildcard.
    -   If the player is out of room, additional Mantras can be obtained, but the player is required to replace a Mantra of the same category. Otherwise, it is placed in the inventory.
-   How to increase: [Oaths](Oaths.md), [Talents](Talents.md)

## Equipment Bonuses

Check out this website to better understand the calculation and try it out interactively. [\[LINK\]](https://deepwoken-armor-resistance.vercel.app/)

### Armor

-   **Physical Armor:** Reduce damage taken from weapons and physical Mantras. Stacks multiplicatively with the following:
    -   **Slash Armor:** Reduce damage taken from bladed weapons such as swords, daggers, guns or axes.
    -   **Blunt Armor:** Reduce damage taken from blunt weapons such as maces, fists or hammers.
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

Total damage reduction = (1 - ((1 - 0.Outfit General resist) \* (1 - 0.Outfit Specific resist) \* (1 - (0.Equipment resist + 0.Equipment resist + 0.Equipment resist + ...)) \* (1 - 0.other resists) \* (1 - 0.other resists) \* ...)) \* 100

Example 1: If you had [Prophet's Cloak](<Prophet's_Cloak.md>) with a 10 Elemental Resistance arms equipment and a 5 Elemental Resistance helmet, your Flamecharm resistance would look like this

-   (1-((1-0.25) \* (1-0.2) \* (1-(0.1 + 0.05))) \* 100 = 49% Flamecharm resistance

Example 2: If you were wearing [Authority Commander](Authority_Commander.md) with a 16 Physical resistance arms equipment, a 10 Physical resistance helmet, a [Confessor's Charm](<Confessor's_Charm.md>), [Padded Armor](Talents.md#natural-armor), and [Orbital Ice](Talents.md#frostthorn), your Blunt resistance would look like this

-   (1-((1-0.3) \* (1-0.1) \* (1-(0.16 + 0.1 + 0.03)) \* (1-0.03) \* (1-0.15))) \* 100 = 63.12% Blunt resistance

### Damage Vs. Monsters

-   Bonus damage against [Monsters](Monsters.md).
    -   This stat can only be gained through the [Drowned](Drowned.md) Enchant, Echo Unlocks, and the [Megalodaunt Coat](Megalodaunt_Coat.md) and [Pathfinder Elite](Pathfinder_Elite.md) equipment.

## Talent Bonuses

These effects can be increased by obtaining Talents that grant these bonuses.

### Passive Agility

-   Increases parkour ability.
    -   Increases climb height, speed boost strength, and duration from parkour.
-   Stacks with the [Agility](Attributes.md#agl) Attribute.

## Statistics

The following stats are shown in the journal's summary tab.

### Time Played

-   The amount of time the player played on that **Character**.

### Total Played

-   The amount of time the player played on that **Slot**.

### Mantras Learnt

-   The number of Mantras the player has learned.

### Times Drowned

-   The amount of time the player was sent to [The Depths](The_Depths.md).
-   Increase Trial Power for the Depths Trial.
