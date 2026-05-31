---
title: Character Stats
revid: 212148
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

-   **Physical Armor ResistanceBlunt ResistanceSlash:** Reduce damage taken from weapons and physical Mantras. When on [Outfits](Outfits.md), it stacks multiplicatively with its sub damage types:
    -   **Slash Armor ResistanceSlash:** Reduce damage taken from bladed weapons such as swords, daggers or axes.
    -   **Blunt Armor ResistanceBlunt:** Reduce damage taken from blunt weapons such as clubs, fists or hammers.
-   **Elemental Armor [ResistanceElemental](Attunements.md):** Reduce damage taken from elemental attacks. When on [Outfits](Outfits.md), it stacks multiplicatively with its sub damage types:
    -   **Blood Armor [ResistanceBloodrend](Bloodrend.md):** Reduce damage taken from [Bloodrend](Bloodrend.md) attacks.
    -   **Fire Armor [ResistanceFlamecharm](Flamecharm.md):** Reduce damage taken from [Flamecharm](Flamecharm.md) attacks.
    -   **Ice Armor [ResistanceFrostdraw](Frostdraw.md):** Reduce damage taken from [Frostdraw](Frostdraw.md) attacks.
    -   **Lightning Armor [ResistanceThundercall](Thundercall.md):** Reduce damage taken from [Thundercall](Thundercall.md) attacks.
    -   **Metal Armor [ResistanceIronsing](Ironsing.md):** Reduce damage taken from [Ironsing](Ironsing.md) attacks.
    -   **Wind Armor [ResistanceGalebreathe](Galebreathe.md):** Reduce damage taken from [Galebreathe](Galebreathe.md) attacks.
    -   **Shadow Armor [ResistanceShadowcast](Shadowcast.md):** Reduce damage taken from [Shadowcast](Shadowcast.md) attacks.

#### Damage Reduction Calculation

Equipment resistances are additive to each other while everything else is combined multiplicatively, leading to the following formula:

Total damage reduction = 1 - ((1 - Outfit General resist%) × (1 - Outfit Specific resist%) \* (1 - (Equipment resist + Equipment resist + Equipment resist + ...)%) × (1 - other resists%) × (1 - other resists%) × ...)

-   "Outfit General resist" is referring to **Physical Armor** or **Elemental armor** on [Outfits](Outfits.md).
-   "Outfit Specific resist" is referring to specific damage type resistances on [Outfits](Outfits.md); **Blunt**, **Slash**, **Bloodrend**, **Flamecharm**, **Frostdraw**, **Galebreathe**, **Ironsing**, **Shadowcast**, and **Thundercall**.
-   "Equipment resist" refers to the resistance stats on the [Equipment](Equipment.md) item(s), not any additional resistance gained through equipment Talents; those are to be calculated separately.
-   Monster Armor [ResistanceMonster](Monsters.md) is additive to equipment resistances, and should be considered as such when calculating damage resistance in PvE.
-   If an attack has multiple damage types, your higher resistance stat will take priority. For example, if you have 35% Blunt resistance and 30% Flamecharm resistance, you'll resist 35% of [Ash Slam](Flamecharm.md#ash-slam)'s damage.
-   Resistances should be calculated in reference to the damage type received. Notable damage types;
    -   **Typeless damage** has no damage type and therefore cannot be resisted by your Equipment or Outfit resistance stats, leaving these categories blank.
    -   **Oath damage** [ResistanceOath](Oaths.md) cannot be resisted by Armor, as there is no Outfit or Equipment that has "Oath Armor," meaning [Oathless](Oath%253A_Oathless.md)' Oath Armor will replace your Outfit and Equipment resistances in damage resistance calculations if applicable. However, if an Oath damage attack has multiple damage types, this resistance type may be superseded; see above.
    -   **True damage** cannot be resisted at all.

##### Examples

Example 1: If you were wearing [Prophet's Cloak](<Prophet's_Cloak.md>) with a 6% Elemental resistance head equipment a 10% Elemental resistance arms equipment, and a [Light Eater Ring](Light_Eater_Ring.md), your Flamecharm resistance would look like this;

1 - ((1 - 25%) × (1 - 20%) × (1 - (6 + 10 + 2 + 2)%)) = 0.52 or 52% Flamecharm resistance [ResistanceFlamecharm](Flamecharm.md)

Example 2: If you were wearing [Authority Commander](Authority_Commander.md) with a 10% Physical resistance head equipment, a 16% Physical resistance arms equipment, a [Confessor's Charm](<Confessor's_Charm.md>), [Padded Armor](Talents.md#padded-armor), and [Orbital Ice](Talents.md#orbital-ice), your Blunt resistance would look like this;

1 - ((1 - 30%) × (1 - 10%) × (1 - (10 + 16 + 3)%) × (1 - 3%) × (1 - 15%)) = 0.6312 or 63.12% Blunt resistance ResistanceBlunt

Example 3: If you are [Oathless](Oath%253A_Oathless.md) and are wearing [Ignition Deepdelver](Ignition_Deepdelver.md) with an 8% Physical resistance head equipment, a 12% Physical resistance [Drowned](Drowned.md) arms equipment, [Confessor's Charm](<Confessor's_Charm.md>) and [Steel Scales](Talents.md#steel-scales), and a maxed Monster Armor [Echo Upgrade](Echoes.md#upgrades-unlocks-and-modifiers), your resistance to Monster attacks that deal Slash damage would look like this;

1 - ((1 - 30%) × (1 - (8 + 12 + 20 + 5 + 3)%) × (1 - 3%) × (1 - 8%)) = 0.6752 or 67.52% resistance against Slash ResistanceSlash\-based Monster [ResistanceMonster](Monsters.md) attacks

Example 4: If your opponent has a 30 Slash damage attack with 35% PEN, and you were wearing a [Black Diver](Black_Diver.md) with an 8% Physical resistance head equipment, a 4% Physical resistance arms equipment, a [Bloodiron Ring](Bloodiron_Ring.md), and [Fists of Fortitude](Talents.md#fists-of-fortitude) active, your damage resistance would look like this;

(1 - (((1 - 30%) × (1 - (8 + 4 + 2)%)))) × (1 - 35%) = 0.2587 or 25.87% armor resistance ResistanceBlunt ResistanceSlash

1 - ((1 - 25.87%) × (1 - 15%)) = 0.3699 or 36.99% resistance, and 18.91 damage taken

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
