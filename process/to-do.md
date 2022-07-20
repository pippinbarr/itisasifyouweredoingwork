
## Actual To Dos, None of This Tentative Bullshit

* On Wednesday: Release the game

### Bugs



---

* ~~Email press contacts with the game~~
* ~~Make a trailer~~
* ~~Write the text of the press kit~~
* ~~Take screenshots~~
* ~~Write the about text for the about icon~~
* ~~Check for sound effects coverage~~
* ~~Adjust range for date picker and spinner~~
* ~~Rework promotion system so that~~
  - ~~Make getting promoted less easy (and gets more challenging)~~
  - ~~Earn more work units as you get promoted (but need more for a promotion)~~
  - ~~Make the game become more frenetic as you go (but starts less frenetic than it is now)~~
  - ~~Make the promotion titles more serious (and perhaps have an actual observable hierarchy)~~
* ~~Increase work time (and possibly break time), maybe more like 3 minutes and 1 minute, or even 5 minutes and 2 minutes... (the risk here is that people stop playing before they see the break...)~~
* ~~**ADDED THEM AS HEADINGS ALONG THE WAY TO HELP MAKE IT FEEL LIKE THE INSPIRATIONALS ARE ABOUT SOMETHING** Throw some technology names into the inspirationals here and there at random?~~
* ~~Fix the case issues with the technology corpus~~
* ~~**FOUND IT. LO-DASH RANDOM VERSUS MATH.RANDOM** Still possible to get [undefined] as a button label on WorkDialog (happened on one with 3 buttons that I saw)~~
* ~~**ALSO DID MY BEST TO GENDER NEUTRALISE IT** Edit the list of inspirational stuff and remove over-specific elements~~
* ~~**I'LL GO THROUGH AND DO AN EDIT TO REMOVE SOME OF THE INSPIRATIONALS THAT ARE TOO SPECIFIC** Reconsider the texts in document and email - could that be more technology oriented somehow? There's a pleasure in being able to _read_ what you type, is one reason to maintain the current thing. What about writing the text of technical manuals?~~

* ~~Add more desktop images (or maybe just the four, but nail the tone - the work one is amazing)~~
* ~~Add an 'about' icon to the desktop that can have a text-file explaining the software and its use~~
* ~~Close dialogs on break instead of destroy and reopen them afterwards so that you resume work rather than starting fresh each round~~
* ~~**I DON'T THINK THIS CAN BE HAPPENING** Mary says she found a bug where you keep getting promoted even if totally inactive~~  
* ~~**APPEARS TO HAVE BEEN FIXED DURING OTHER WORK ON BREAKOUT CONTROL FROM MAIN SCRIPT** If breakout loads while the window doesn't have focus it won't start~~
* ~~Build testable version and send to J+M~~
* ~~Hold for audio load~~
* ~~**THINKING THIS IS ACTUALLY OVERKILL** Add pep talk dialog when they get a dialog wrong - "are you sure you got that right?" and also like "You can do this!", "Don't stop now!" "Don't give up!" if they click the close button on a work dialog?)~~
* ~~Make the overlay look less like a piece of shit? (Ideally with a dialog above it...)~~
* ~~Add more SFX for things that need it (promotion, ...)~~
* ~~Add a rule that sets a minimum width of 800px for the window and brings up an overlay if too small (so I don't have to worry about responsive design on the menu bar especially) - fucking responsive design~~
* ~~Improve the timing (more delays on startup, then possibly just better timing of workDialogs)~~
* ~~Get breakout to behave itself in terms of stopping and starting before/after breaks~~
* ~~Add promotion event dialogs (and promotions) based on work done (chars typed + dialogs dismissed)~~
* ~~Possible to just close work dialogs with X without dealing with them~~
* ~~Fix reactions to incorrect dialog presses~~
* ~~Problem with textareas not scrolling down with typing~~
* ~~Add actual work unit calculations and update the stat in the menubar~~
* ~~Limit username to some set number of characters so it can't fuck the menubar~~
* ~~Add work units performed statistic (maybe even an indicator of next promotion?)~~
* ~~Tweak CSS for menu bar so that it's responsive to size, and works to a minimum of 800px width of the window~~
~~* Make mini-dialogs come up not-too-frequently, but maybe in bunches sometimes, and only up to a limit for the screen (like three say)~~
* ~~Fix some of the positioning bullshit and limit the draggable area to exclude the menu bar~~
* ~~Make long term tasks come up appropriately (maximum two at a time)~~
* ~~**REPLACED WITH KEYPRESS** 'input' doesn't prevent default for some reason~~
- ~~**REFACTORING THIS** Figure out when and how often you get promoted ~~/warned/demoted~~ < should be related to characters typed in text areas + dialogs closed successfully~~
- ~~**THIS IS OVERKILL I THINK** Consider set of inspiring phrases to come up on success (Great work!)~~
- ~~Add set of hilarious position names (maybe around 20+?)~~
* ~~Add break time trigger (clears all dialogs, brings up dialog about taking a break with a progress bar no buttons, can't close, timer that restarts work at end of progress bar)~~
* ~~Make breakout colours match dialog~~
* ~~**I DON'T THINK THIS WOULD HAPPEN** Make system re-ask for password sometimes ha ha...? _Why would this happen though_?~~
* ~~Implement breakout that can inject (and resize to) a div. Guess this is in Phaser?~~
* ~~Slow it dooooown~~
* ~~Fix the language used in dialogs (e.g. button labels, titles, menu items, etc - e.g. generateLanguage())~~
* ~~Add in long term tasks options~~
  - ~~Document~~
  - ~~Email~~
  - ~~**NAH** Data entry~~
* ~~Remove ability to get a task wrong~~
* ~~Markov chain for document/email contents to avoid typing meaningless nonsense? Lorem ipsum?~~
* ~~**ARRAY OF INSPIRATIONAL/MOTIVATIONAL PHRASES** Lorem Ipsum versus Markov versus Arrays of BusinessWords?~~
* ~~Make the modal background a bit darker~~
* ~~Add actual cycle of work, inspiration dialogs endlessly (need a state machine)~~
* ~~Add icons for music, desktop, breakout game (game only available during break)~~
* ~~Create music selection and volume dialog~~
* ~~Music (ideally written by an AI/procedure) plays (WolframTones? Something else?)~~
* ~~Add position/rank ui + username~~
* ~~Add dialog for setting desktop image~~
* ~~**NOT QUITE HAPPY WITH SUCCESS** Add SFX for current things (success, fail, log in, new dialog)~~
* ~~Add random positivity messages to inspirational popups~~
* ~~Display slider current value on update (probably in text of label)~~
* ~~**FOR NOW THERE'S ONE PER DIALOG** Avoid situations where dialog could be too big for the screen (avoid datepicker, or just always have single instructions? <-- probably reasonable)~~
* ~~**WITH COMPROMISE OF overflow: hidden THIS IS OKAY** Randomly position dialogs (and remember the nightmares of You Are Not Here.)~~
* ~~Random dialogs with inspirational work images (stock) pop up~~
* ~~Only show desktop on successful login~~
* ~~Random typical desktop image (maybe let user select on login?)~~
* ~~Login screen on start (username and password, use username in UI and occasionally ask them to reenter their password)~~
* ~~Repair CSS for niggles~~
  - ~~**DOESN'T SEEM TO BE HAPPENING FOR NOW** Refix the highlighting of focused elements~~
  - ~~**FOR NOW I'M AT PEACE WITH THE NON-JQUERY CHECKBOXES** Colour of radio button (want black on white eventually, no fucking idea why it ought to be hard though)~~
  - ~~**DID IT** Consider whether need more windows-y drop shadow on the buttons?~~
  - ~~Remove focus outline of focused elements (too usable)~~
* ~~Shake the dialog box when it's incorrect~~
* ~~Implement 'check at the end' version of validation for each type~~
* ~~Add ability for dialog to specify and evaluate its task~~
* ~~**NOW SEEMS TO ME IT SHOULD BE LITERAL UI LANGUAGE** Research possibilities for business-speak in dialog tasks~~
* ~~**NOT DOING THIS** Add dropdown menu to top of the screen if that's plausible (at least like File Edit Something)~~
* ~~**DECOMPLICATED THIS OUT** Work out a language for generating and specifying and testing tasks~~
* ~~**BASICALLY WORKS** Test multiple UI elements in a single dialog in list form~~
* ~~Add other jQuery UI widgets into dialog boxes and display them~~
  - ~~Radio buttons~~
  - ~~Checkboxes~~
  - ~~Date picker~~
  - ~~**NOT ACTUALLY NEEDED** Multiple buttons~~
  - ~~**PART DONE** Spinner~~
  - ~~**ALL DONE** Spinner~~
  - ~~Slider~~
  - ~~Progress bar~~
  - ~~Select menu~~
  * ~~**BUT NOTE NO MULTI-SELECT WHICH I THINK IS FINE** Think through integrating icon selection and dragging~~
  * ~~Integrate new Win95esque CSS~~
