# 8-BIT Casino

A screenshot-focused, interactive pixel-art proof of concept. Built with React, TypeScript, Canvas 2D and vinext.

## Run locally

Use Node.js 22.13 or newer, then run `npm install` and `npm run dev`. Open the Local URL printed in the terminal. `npm run build` creates the production build.

## Explore

- WASD / arrow keys: move the cook
- Click or tap the floor: walk toward that point (obstacles block movement)
- E or the bottom-right action button: interact with a nearby station or doorway
- H: toggle screenshot mode
- Escape: close dialogs
- Neighborhood buttons: jump between areas

The prototype starts in the side-scrolling diner. The parking lot leads into Lucky’s diner. The diner bathroom’s last stall hides the stairs to the basement. All ten casino stations are present. Slots, pull-tab tickets, and scratch tickets have simple playable interactions. Pool replaces the basement rock-paper-scissors station, with a visual billiards table and a practice-shot placeholder. Poker, blackjack, roulette, craps, baccarat, and bingo intentionally use labeled 50/50 demo rounds rather than full rules. Fictional chips reset when reloading. Sound effects are off by default.

The canvas art is drawn directly in code; no external image or font downloads are required.

## Handheld version

The default responsive layout prioritizes mobile portrait and handheld landscape screens. Portrait uses a camera that follows the cook. Touch direction buttons support press-and-hold; A interacts. Browser-compatible standard gamepads support the left stick and D-pad, primary face button to interact/activate, and secondary face button to close. In dialogs, use the stick or D-pad to change focus. Desktop view restores the original desktop composition. This is a browser prototype, not a native Steam Deck or Nintendo Switch release; hardware compatibility has not been validated.

## Casino entrance gate

Win rock paper scissors against the gatekeeper at the last bathroom stall to enter. Draws and losses allow unlimited free retries, including with zero chips. A win makes the gatekeeper step aside and unlocks the separate door behind the toilet. Interact with that door to enter; returning after leaving requires another win. Neighborhood shortcuts also enforce the gate. Buyouts and disabling the gate are intentionally deferred until the story mechanic is defined.

## Side-scrolling interiors

Diner and bathroom have 1,800-pixel-wide, front-facing scenes with horizontal movement and a following camera. Walk off the left edge beneath EXIT to return to the previous area. The diner’s far-right bathroom door uses E / A. The bathroom contains one sink, three urinals, and three independently toggled stall doors. Open stall 3, then approach and challenge the gatekeeper. Winning unlocks the visible door behind the toilet; it does not immediately teleport you downstairs. Touch controls show left/right in these rooms. The parking lot and basement retain their overhead view.
