---
title: Deferred
revid: 203529
source: https://deepwoken.fandom.com/wiki/Deferred
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Enchantments, Weapon Enchantments]
---

# Deferred

| Deferred | |
|---|---|
| bankable | Yes, (it costs 1 to unbank) |
| droppable | No |
| pass down | No |
| desc | Weapon damage is increased by 7%, but becomes damage over time lasting for 2.5s. |
| obtainment | Finding a Deferred enchanted weapon in a chest, LaplaceDeferred Enchant Stone:, Exchanging 5 to Klaris (grants a random non-exclusive Enchant Stone), War Mode, Hell Mode, Scion of Ethiron, Maestro Evengarde Rest, Dread Serpent, Heart of Enmity, Chaser, Scholar of the Crimson Contract, Saramaed Hollow, Second Layer, Diluvian Mechanism, Galewax Room in the Second Layer, Crafting : |

## Description

Deferred is a damage dealing [enchantment](Enchantments.md) that changes your weapon's raw damage into a damage over time effect.

## Effect

Deferred applies a 0x damage modifier to your weapon attacks, removing their raw damage. Instead, your weapon attacks apply the [Deferred](Status_Effects.md#deferred) status effect, dealing damage over a 2.5 second period.

Additionally, your weapon's damage is increased by 7%.

### Notes

-   Deferred ticks 10 times, every 0.25 seconds.
-   Deferred's damage cannot be avoided once you've been hit.
-   Deferred has double [Chain of Perfection](Talents.md#chain-of-perfection) scaling in PvE, dealing damage based off your weapon attack's damage after chains and then benefitting from chains on its own.
-   The damage over time from this enchantment can **not** be reduced by the [Parasol Planter](Parasol_Planter.md).
-   Deferred deals damage based on the active damage modifiers and resistances when you **landed** your attack.
    -   On one hand, you cannot apply a buff to yourself _after_ landing a weapon attack to buff your DoT. And if your opponent gains a conditional damage reduction while your Deferred status is on them, the remaining damage over time ticks from the hits you've landed **prior** to the new resistances being added will ignore them.
    -   On the other hand, if you had a buff applied to yourself or your opponent had a conditional resistance source _when_ you landed your weapon attack, the Deferred DoT damage for that hit will be calculated as if these effects are still active, even if they aren't.
