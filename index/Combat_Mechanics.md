---
title: Combat Mechanics
revid: 52534
source: https://deepwoken.fandom.com/wiki/Combat_Mechanics
license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)
categories: [Pages with broken file links, Deepwoken, Mechanics, Browse, Helpful]
---

# Combat Mechanics

This page contains basic information about **combat** and its mechanics/bars. This includes details on status bars, basic mechanics, and status effects. Knowing this information will give any voyager a fighting chance.

## GUI

_There are many elements to the GUI, each one playing its own part. In order to have a chance at surviving, learning these are essential._

<table>
<tbody>
<tr>
  <th>Health Bar</th>
  <td>A visual representation of the player's health. Players start with 150 health. Upon reaching 0% health, the player gets knocked out and is at the mercy of anyone around them.
  <ul>
    <li>Regeneration is sped up while sitting at a <a href="Campfire_Pit.md">Campfire</a>, and slowed down while the player is in combat.</li>
    <li>Players cannot regenerate health if their hunger bar is below ~12.5%</li>
    <li>The lower your health is, the slower you get. In short, health directly affects your agility.</li>
  </ul><p>The player's health bar has three states:</p><figure><figcaption><p>This is the normal state of the health bar.<br>
  The player will lose one life on death (excluding <a href="Echoes.md#modifiers">Hollow</a> modifier).</p></figcaption></figure><figure><figcaption><p>This is the state of the health bar after dying once.<br>
  The player will be sent to <a href="The_Depths.md">The Depths</a> on death.</p></figcaption></figure><figure><figcaption><p>This is the state of the health bar in The Depths and <a href="Second_Layer.md">Layer 2</a>.<br>
  The player will be sent to the <a href="Fragments_of_Self.md">Fragments of Self</a> on death</p></figcaption></figure></td>
</tr>
<tr>
  <th>Posture Bar</th>
  <td>A visual representation of the player's posture. When filled up to maximum or overshooting, be it from getting parried or blocking attacks, the next blocked hit would instead guard break, dealing increased damage.
  <ul>
    <li>Posture decreases if the player lands parries and/or stops blocking.</li>
    <li>Spitting <kbd>T</kbd> on NPCs also restores posture by a great amount. (Not recommended as you'll be forced to stand still for the taunt)</li>
  </ul><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Cooldown Icons</th>
  <td>Icons that indicate whether or not the player can do certain actions.
  <ul>
    <li>The first icon represents roll/dodge cooldown.</li>
    <li>The second icon represents parrying cooldown.</li>
    <li>The third icon represents cancels and feints cooldowns.</li>
    <li>The fourth icon represents potion cooldown.</li>
    <li>The fifth icon represents <a href="Resonance.md">Resonance</a> cooldown.</li>
  </ul><figure>File:HDSymbols.png<figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Ether Bar</th>
  <td>A visual representation of the player's Ether amount. Ether is Deepwoken's form of magic, and mantras cannot be used without sufficient Ether. (Talents
  <ul>
    <li>Different mantras use varying amounts of Ether.</li>
    <li>Ether passively regenerates, and regeneration is buffed with a high Tempo.</li>
    <li>Ether also regenerates faster when out of combat.</li>
  </ul><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Tempo</th>
  <td>A visual representation of the player's tempo. Tempo is gained by hitting or being hit, tempo increases ether regen during battle. Maximum tempo starts at 120.
  <ul>
    <li>Tempo decreases over time and is "stored" when out of combat</li>
    <li>With at least 40 Tempo, press <kbd>G</kbd> to Vent. This pushes away anyone near you but can be parried/blocked.</li>
  </ul><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Armor Durability</th>
  <td>A visual representation of the player's worn armour durability. When this bar is depleted, the player's armour is considered "broken", and its defensive values no longer apply.
  <ul>
    <li>Armour can be repaired at a Blacksmith, using <a href="Talents.md">Talents</a>, The Metal <a href="Enchantments.md">Enchantment</a>, or with the <a href="Outfits.md">Bloodiron ring</a>.</li>
  </ul><p>There are two armour bars, the first representing clothing armour and the second representing natural armour.</p><figure><figcaption></figcaption></figure></td>
</tr>
</tbody>
</table>

## Survival Basics

These are stats that are you required to maintain in order to survive in the world of Deepwoken. These stats will gradually deplete but the depletion can be sped up by varying environments, creatures, or other players.

-   In order to survive, the player will need to eat food to replenish their Stomach and drink water to replenish their Water.
-   Once every bar reaches zero, the player will begin to quickly lose health.
-   These stats can be found at the bottom-left of your screen, in the main game.
    

<table>
<tbody>
<tr>
  <th>Blood</th>
  <td>A visual representation of how much Blood is currently in the player's body. Blood is vital for survival, being attacked or taking damage in some form will cause the player to lose Blood. Upon reaching zero Blood, the following happens:
  <ul>
    <li>The player will always be combat tagged.</li>
    <li>The player's Water and Stomach bar will rapidly decrease.</li>
    <li>Getting hit while bleeding out drains a large amount of Water and Stomach</li>
  </ul><p>Maximum blood increases with power, gaining ~10% more blood each power. Thus, the maximum amount of blood is doubled at power 10 and tripled at power 20 (compared to the starting amount)</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Water</th>
  <td>A visual representation of how much Water is currently in the player's body. Water isn't too vital for survival and will deplete over time. You will lose 50% of the bar upon vomiting. Upon reaching zero Water, the following happens:
  <ul>
    <li>The player's screen will become blurry.</li>
    <li>The player will start to move slower.</li>
  </ul><p>Your Water will drain slightly faster when healing at a campfire.</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Stomach</th>
  <td>A visual representation of how much food is currently in the player's body; essentially your hunger bar. You will lose 50% of the bar upon vomiting. Upon reaching zero Stomach, the following happens:
  <ul>
    <li>The player will gradually lose health and blood.</li>
    <li>The player's max health will be reduced</li>
    <li>Attempting to swim while starving and with less than 50% HP will immediately knock the player, resulting in drowning if not assisted.</li>
  </ul><p>Your Stomach will drain slightly faster when healing at a campfire.</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
</tbody>
</table>

## Combat Basics

_Remember when fighting, the game isn't about dealing overall damage but instead lowering a player's posture level to a point where they are heavily vulnerable; even if they block an attack you are still technically dealing damage to them._

<table>
<tbody>
<tr>
  <th>Attack</th>
  <td>Left clicking (<kbd>M1</kbd>) allows you to swing your weapon, dealing damage to whoever hits unless they parry, block or perfect dodge your attack.<p>In the case of getting your attack blocked, your attack will still deal damage in the form of "Posture damage", taking account into your weight rather than your base damage</p>
  <p>When 4 hits are swung consecutively without pauses, your character Flourishes. This causes the target hit to be launched away from you, essentially preventing an infinite combo. Many talents modify your flourish in different ways, from blurring someone's screen when they get pushed into a wall, burning someone and even causing an explosion, to outright instant-killing someone when they have their HP cleared as well.</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Critical Attacks</th>
  <td>Critical Attacks, or "Crit" for short, can be initiated by pressing <kbd>R</kbd> or clicking <kbd>M3</kbd> (Pressing down the scroll wheel (Yes you can do that)).<p>Crits are primarily used to deal greater posture damage than an <kbd>M1</kbd> with the intent to fill the posture bar of the target. Crits range from lunging to multi-hit to even giving you hyperarmor (A period where you do not take stun) and launching your opponent away. <b>CRITICAL ATTACKS CANNOT BE FEINTED</b> so make sure you are committed when using them or have an opening when you do to prevent getting punished.</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Parrying</th>
  <td>Pressing <kbd>F</kbd> causes your character to prepare themselves for a short timeframe. Enemies hitting you during this timeframe causes them to be parried, causing them to lose balance and take posture damage, as well as reducing your posture on a successful parry. Parrying has a 1.4 second cooldown, so don't spam it, and instead, hold <kbd>F</kbd> in cases where you are not confident that your parry would parry.</td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Blocking</th>
  <td>By holding the <kbd>F</kbd> key, your character braces for multiple attacks, using your posture rather than your health if you were hit during the block. If you are hit, your block is disabled and you'll be forced to parry instead (Or Vent by pressing <kbd>G</kbd>).<p>Be careful when blocking, as it doesn't cover your back.</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Venting</th>
  <td>When the player has at least 40 tempo (indicated by a small notch on the tempo bar), pressing <kbd>G</kbd> will make the player Vent.<p>Venting pushes others nearby away and grants a brief period of invincibility, which allows the player to get out of tricky situations (such as being combo'd or being overcrowded).</p>
  <p>If the Vent doesn't push anyone back (Or if it's blocked or parried), you will be stunned in place, unable to do anything. This allows enemy counterattacks (And if your vent is parried, allows them to style on you) or even taunt you to get some HP and posture back)</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Feinting</th>
  <td>Feinting is essentially faking a move, this allows you to bait an opponent's block and play mind games with them, for example baiting them to block early disabling their ability to parry. To feint, <kbd>M2</kbd> (right click) before your <kbd>M1</kbd>'s hitbox appears (AKA the frame where it hits).<p>There is a talent where you get stunned instead if you are hit after you feint. Use feints sparingly, and don't overuse them, as people can get a rhythm on your feints and gain an upper hand on you.</p></td>
</tr>
<tr>
  <th>Dashing</th>
  <td>Depending onskills and stats you have, pressing <kbd>Q</kbd> allows you to Dash at your desired direction. Dashing past (Or in) a hitbox before you took damage will result in a perfect roll (Or a dodge).<p>With the <a href="Echoes.md">Echo Talent</a> "Aerial Assault" (Unlocked at Power 2), you can do an Air Dash by <kbd>Q</kbd> in the air. (Direction depends on camera direction)</p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th>Stance Change</th>
  <td>Pressing the <kbd>Y</kbd> button will change your stance from one-handed to two-handed. Light weapons have no access to stance changing<p>Stance affects blocks and parries. Affecting whether you can wield another tool in your off-hand as well.</p>
  <p><i><b>One Handed Stance:</b></i> This stance defaults to Light and Medium weapons (And Heavy Weapons with a certain talent). Offhand equipment (such as shields, parry daggers, guns) In your off/left hand. An alternate idle animation is used if you do not have anything on your offhand. <b>This stance increases posture damage dealt to the target when parrying but reduces posture damage dealt when hitting their block.</b></p>
  <p><i><b>Two-Handed Stance:</b></i> This stance defaults to Heavy weapons, with Medium Weapons also having access to it. Any offhand equipment will be put away, such as shields. You also swing faster in this stance. <b>This stance increases posture damage dealt to the target when hitting their block but reduces posture damage dealt when parrying.</b></p></td>
  <td><figure><figcaption></figcaption></figure></td>
</tr>
<tr>
  <th><a href="Stealth.md">Stealth</a></th>
  <td>When crouched, one can sneak up behind most humanoid enemies (Bandits, players,) and <kbd>M1</kbd> behind them to perform a sneak attack. This will deal a large (NPCs)/low (Players) amount of damage and cause the target to ragdoll for 5 (NPCs)/2 (Players) seconds. Executes NPCs if the damage dealt is high enough.<p>If the target is not killed by the initial attack, it is recommended to swing at them as much as possible before they get up. They cannot be picked up if they aren't technically 'knocked' down.</p></td>
  <td></td>
</tr>
<tr>
  <th>Uppercut</th>
  <td>Performed by pressing <kbd>M1</kbd> while pressing <kbd>Ctrl</kbd>. Once hitting an entity, both you and the entity will be launched up into the air. Aerial attacks will not work and you will stall in the air when you attack.<p>Entities do not get launched up if they are too large (Stone Golems, Megalodaunts, Stone Knights etc).</p>
  <p>Certain talents can also affect the potency of uppercuts.</p></td>
  <td></td>
</tr>
</tbody>
</table>

## Status Effects

<table>
<tbody>
<tr>
  <th>Broken</th>
  <td>Lose all defensive bonuses from the equipped outfit. Represented by torn-up clothes.<p>Occurs when armor durability reaches 0%.</p></td>
</tr>
<tr>
  <th>Charmed</th>
  <td>Effect varies depending on the sources but can include reduced damage, and reduced defence among many others. Represented by hearts on the victim's head.<p>The main source is from the charisma mantra, Sing.</p></td>
</tr>
<tr>
  <th>Enraged</th>
  <td>Cannot jump. Damage dealt increased, and Defence was reduced.<p>The only source is from the charisma mantra, Taunt.</p></td>
</tr>
<tr>
  <th>Chilled</th>
  <td>Walk speed is reduced. Represented by a blue mist.<p>A common source is being hit by a Frostdraw Mantra.</p></td>
</tr>
<tr>
  <th>Fire</th>
  <td>Take damage over time. Can be rolled to the end early or clear itself after 10 seconds. Represented by fire on the target.<p>A common source is being hit by a Flamecharm Mantra.</p></td>
</tr>
<tr>
  <th>Paralysis</th>
  <td>Stuns for a slight moment, usually enough to land an extra hit. Represented by yellow sparks.<p>A common source is being hit by a Thundercall Mantra.</p></td>
</tr>
<tr>
  <th>Winded</th>
  <td>Attack speed is significantly reduced<p>A common source is being hit by a Galebreathe Mantra</p></td>
</tr>
<tr>
  <th>Suffocate</th>
  <td>Affected entities cannot use mantras for the duration of the effect. Shown as rings spinning around the victim's neck.<p>A common source is being hit by a Galebreathe Mantra</p></td>
</tr>
<tr>
  <th>Dazed</th>
  <td>Walk speed greatly reduced. Cannot run or dodge. Represented by stars above the victim's head.<p>A common source is being flourished against a wall or getting hit by the critical attack of a mace.</p></td>
</tr>
</tbody>
</table>

## Magic Basics

<table>
<tbody>
<tr>
  <th>Spell Casting</th>
  <td>When you use a spell it will deplete a certain amount of ether dependent on the volatility of the spell, you will hear a sound cue while casting, and timing your click to this will enable you to use the spell faster. There is also a visual cue, however, this differs from spell to spell.</td>
</tr>
<tr>
  <th>Spell Feinting</th>
  <td>Similar to the feinting system within the melee weapons, you are able to fake a spell and then quickly select another one for example, going for a fire grab and then quickly cancelling it to a fire AoE attack. You can also feint rituals however you need all the items for the ritual in order to start and stop it. It could be possible that there are consequences for cancelling ritual tier magic, so be careful. You may only cancel a few mantras in the game during their attack like Rapid Punches.<p>Spell feinting is performed by pressing M1 and <kbd>M2</kbd> at the same time.</p></td>
</tr>
<tr>
  <th>Perfect Casting</th>
  <td>Clicking M1 during a specific time of your Mantra cast will <i><b>Perfect Cast</b></i> it. Almost all spells benefit from Perfect casting, and certain spells and talents utilize Perfect Casting to better strengthen their power, but all around, Perfect Casting will:
  <ul>
    <li>Cast the spell faster.</li>
    <li>Increase damage.</li>
    <li>Increase posture damage.</li>
    <li>Increase spell size (unconfirmed)</li>
  </ul><p>A successful Perfect Cast can be indicated by talents that are based around it.</p></td>
</tr>
</tbody>
</table>

## Advanced Movement

<table>
<tbody>
<tr>
  <th>Roll Cancel</th>
  <td>When you roll, you can <kbd>M2</kbd> similar to how feinting works and cancel your roll. Useful against enemies after perfect dodging to immediately attack or to fake out your opponent. Gives you the same i-frames as a normal perfect roll.</td>
</tr>
<tr>
  <th>Ragdoll Cancel</th>
  <td>After being ragdolled, you can <kbd>M2</kbd> to do a backflip that ends the ragdoll early.</td>
</tr>
</tbody>
</table>

## Notes

-   The Health and Survival GUI has 5 separate bars in them that represent 20% each. This will help you to interpret damage dealt, health percentage, and help you to interpret the percentage of water and food each consumable fills.
-   Press T to spit. When you spit on someone, you recover 5% HP and recover a moderate chunk of your posture. Getting spat on temporarily blurs your screen. Spitting on guards angers them, but makes them say "Thanks." if you have high charisma
-   Press G while crouched to **listen**. Your screen will turn a grey colour, and you'll be able to hear clearly for the duration you're crouched. While you cannot have active/activate Murmur Ardour and Tacet (not sure about this one)
-   Blocking and Parrying shares the same hotkey (F), and will prioritize parrying first then blocking the 2nd.
