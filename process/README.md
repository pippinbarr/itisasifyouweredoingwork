
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



## Notes now that it seems releaseable (2017-07-02 19:23)

Made changes as per J+M's feedback and sent it back to them and Jim felt like it was 'there'. I also tweeted an image of the About dialog and that got almost 200 favourites in about 4 hours, which I read as an endorsement of the sentiment and tone. I'm so eager for this project to be done at this point that those two things have me pretty convinced that I'll just release the project on Wednesday and try to send it to press tomorrow. As such I'll probably whip up my press kit this evening and tomorrow morning and that will be that.

It's entirely possible I could do more and better with it, but it's gone on long enough and I have other plans and thoughts for games based around user interfaces (in fact I'm thinking of basing a funding application on it this funding season to see what happens). Better to make and release and make something else that continue to try to perfect this specific idea. I think it does its job at this point.


## Notes on J+M's feedback (2017-07-01 11:43)

Jim and Mary sent feedback on the game a couple of days ago and I've got enough headspace to look at them this weekend. I'll make some notes of what seem to be the key issues - as well as what I might do to address them.

0. _Game generates a sense of panic_. This is a bit problematic given that my vision for this was that it was to be an experience of efficacy. But on the other hand nothing bad happens, so perhaps a heightened sense of _work_ is not actually the end of the world here. Essentially Jim said it was too fast - not a sense that you could enjoy what was happening as it happened. A little unclear how I can adjust this successfully? Can certainly make dialogs come up less often? Maybe make the larger documents easier to complete and have actual down time? Mary suggested it was a representation of present day work conditions of constant interruption and multi-tasking... which I guess is fair to the extent it's meant to make you feel like you're working, so that's not a bad thing - in that sense a slight feeling of being harried would actually be the feeling you _wanted_ to evoke, because that's what gives you a sense of being needed...

0. _Should be able to resume work_. Jim noticed that when you go to break and come back your in-progress work isn't there, so I need to fix that for sure. I'd actually thought of this in bed one night, so it's good to have it re-raised.

0. _Did have a feeling of accomplishment_. Being promoted registered as an actual feeling. I could probably make it slightly less frequent though? Unsure about that.

0. _Work time too short_. Interesting that this came up given I was very concerned about them being too long. I guess I've been in a hurry to have people at least _see_ the break time thing, but really they'll see that that can happen if they try to play the game pre-break, so I could afford to have work time be longer.

0. _Ranks maybe too satirical_. Mary felt the ranking system seemed too obviously a joke and thus maybe condescending. How can they seem more serious? I guess lessen the superlatives and focus in maybe on a kind of progression after all. Probably don't need such frequent promotions either if it's being serious - something to strive towards. Could also raise the distance between promotions - but could also increase the 'value' of work you do at the same time?

0. _Possible promotion bug_. Mary suggested she was getting promoted even if she did nothing! Will have to look into it.

I'll write back to them with responses to their feedback, but that's definitely helped me clarify a couple of important elements on the game in my mind now I think? Especially the idea of embracing the idea that the game is at least a _bit_ stressful - it's also possible to return to the idea that it increased in intensity with promotions to reflect the idea that you're getting better and taking on more responsibility so that the promotions actually mean something? CEO, Input Division as the ultimate title or something? Input Executive? Heh.

Okay, well I think the feedback has helped to crystalise a couple of things.


## Post-sending testable version to J+M (2017-06-29 11:42)

Last night I finally got together a build of the game that I could send to Jim and Mary, so I sent it to them. No word as yet on their reaction, but I'll of course be interested to see. Main things I'm 'worried' about, in the sense that I'm not really sure about them are

- _Timing_. Not clear how to nail down a good sense of productivity without feeling stressed out or like you have to move super fast - but then also wanting the player to be _able_ to appear to be super super productive. The fact that I've limited the number of little work boxes showing up helps with that - if you ignore them you won't end up with more and could focus on your larger work blocks. There's a kind of implication with the 'typing' oriented ones (the document and the email) that you should type as fast as humanly possibly? Which is strenuous... but on the other hand typing super fast is probably another signifier of 'I'm definitely getting work done!', so maybe that's okay as well...

- _Fuck ups_. Obviously there will be plenty of fuck ups around in the code. I need to find and destroy them.

- _Texts_. As I use the thing I'm less and less positive that the text appearing in the document and email ought to be that kind of extreme positivity? I'd kind of like a tracery grammar that leverages Kazemi's technology list so that it looks more like tech speak stuff rather than some of the overly specific inspirational stuff? Maybe somehow a combination? Like positivity about technology? You can X and Y! ... ?

Hmm. So I guess the big thing right now is that I feel much less emotionally connected to the game (kind of sick of it), and also that I'm not totally, totally sure what the emotional trajectory is meant to be for the player either... how are they meant to feel while they play? I mean, it's meant to be a _tool_ for them to use, rather than a totally shaped experience, but obviously when someone encounters it in _this_ universe they're more likely to treat it as a game and thus something to win.

Possibly a 'solution' to this might actually to be to add another icon to the desktop which is an 'about' you can read that is 'in character' and explaining the service provided by the software? And this reminds me I need the login dialog to look a little less bullshit. (Did that... it's not much less bullshit, but it's simple.)

Okay. Well those are my thoughts for now. I think I'll wait until I hear from J+M before I really do much more on the game and in my dreams it's basically done.


## One or two words (2017-06-20 12:27)

The game is really getting there at this point. I've got two longer term tasks - documents and emails - implemented now and they look appropriately funny I think. Then beneath that we have the desktop with three options. And on top of it we have random work dialogs (that now have 'technical language' as their default) and inspirational images. I dropped the data entry one since it requires too much CSS, too much thinking for the user, and strays too far from the textual basis of the whole thing.

I'm kind of wondering now whether the automatically typed text ought to be the inspirational stuff I have now or more technical language like the rest of it? There's something funny about all the inspirational stuff, but maybe it would look and feel more like "work" if you were just typing random tech shit? Or may it's still funnier to read the inspirational stuff while you type, so it kind of cheers you up. Both are viable.

I'm realising as I type this that the horrible megatask of making a game of breakout appear is still needed to be done and that could be quite a task. Other than that the big thing remaining is just the question of promotions and feedback on actions beyond the audio stuff... not a huge deal, but still have to think of something to do for it.


## Longer-term tasks (2017-06-18 18:26)

Walking to the OBX BBQ yesterday had the idea of longer-term tasks you could be doing during the game as a way to get out of it 'just' being a relentless stream of dialogs, but also to avoid the situation if/when I slow them down of just kind of sitting there with nothing to do.

So with that in mind thought you could have:

- Documents (like a simple text field you could be filling out to a character limit and then click 'save' I guess)
- Emails (basically the same thing, maybe with pre-filled email addresses etc.)
- Spreadsheets/data entry (a set of cells for you to put things into)

The nice thing there is that you have something to do all the time that's not and doesn't feel time sensitive, and it can be interrupted by the other things which you can quickly dismiss (in a pleasantly work-y way) before coming back to it. Partly realised this idea when I was trying to fill in an input-style dialog and realised that every time a new popup came up it would steal focus, making the input one kind of suck to fill in. But if that was a longer term task then it would actually be useful because you'd always have something to do.

Conceivably these could even be further icons on the desktop that you could call up - but suspect it's more likely that you ought to just be assigned them though. Could be funny if, when you save them, they appear on the desktop as little icons of files. The documents and data-entry anyway.

Also while I was thinking about this just now and writing my diary I started wondering whether it even makes sense to bother with having demotions/warnings/being fired if the objective is to keep people happy? Quite possibly it doesn't make sense at all. Rather it should all be positive. Though it's possible it'd be funny to still generate a little message saying why you got a dialog box wrong and how we should all strive to work as hard as we can...

So those are some thoughts.


## Thursday Thoughts (2017-06-15 11:02)

I'm at a point with the game suddenly where it's looking more and more like a real thing and the code is, simultaneously, becoming more and more unmanageable and gross.

Now have the ability (if not entire implementation) to do a basic sequence of login, desktop comes up, work/inspirational dialogs come up repeatedly.

Big remaining tasks are: implementing breaks (including a little version of breakout I guess in phaser that will target a div inside a dialog box? That might be a little hairy but I think is technically possible), implementing the actual stream of work and timing for breaks, icons for changing the desktop picture and playing breakout, music, the language and ui consequences of evaluation. HMMM.

So those are some pretty big things. The most intimidating is the evaluation stuff I suppose.


## The bigger picture (2017-06-13 11:22)

Oh my god can I just tell you that I finally disabled autocomplete inside markdown and text files and it is just such a goddamn relief.

Anyway, I had a conversation with Rilla last night about the meta-interface/narrative/aesthetic of this game and she felt like the background needed more life than it currently has. Her thought was to make it look something like my.concordia for example, with a bunch of links to subsections and sub-applications, none of which would actually be functional.

My reaction to that is/was that it's probably true it needs 'something more' than just the stream of dialogs, but that I'm concerned if I have totally non-functional stuff in the back it conflicts with that message of calm and competent work that the game sort of meant to be providing to the player. So with that in mind who/what is that player story in this:

... 2017-06-13 19:47 ...

Later on I actually get around to this (also after a conversation with Jonathan over lunch). So, the player:

_Is a person who lives in the near future of fully automated work and a living wage. They have no obligations day to day, but they remember the concept of working and the idea that having a job and doing work (on a computer) gave them value in society. They want to continue to have that feeling, but there's nothing for them to actually do, so this game "It is as if you were doing work" exists to allow them to have that feeling - the semblance of doing work without the actual productivity._

In my discussion with Jonathan about the issue of the background element and the meta-interface a couple of ideas came up:

* Desktop background (potentially this could be customisable, but otherwise could be a random choice of some image that makes it seem personal - a picture of a cat, a random creative commons happy child, some hills, etc. - maybe you could choose the genre). Maybe the image could be of something business-y like a graph of a thing going up, for example.
* No listed salary (after all you wouldn't actually be making money), just your current position as an indicator of status

A question arises particularly without salary of how you indicate each individual success (and whether you actually should, given that it's meant to look like work... maybe it should be blank... though I think the shaking box is good for indicating failure.) Should a separate dialog box come up for every completed dialog box with a little assessment like "Good job!" and you click Okay to dismiss that one? Quite funny to have yet more dialog boxes reporting on your success with the dialog boxes...

* Random pop-ups of inspiring work oriented images (all that stock photography stuff of people working happily!!!!! fuck yes. That'll really help.)
* Random pop-ups of inspiring work quotes? Or even Markov-chain generated ones?

Hehehehe.

* And perhaps either procedural or other computer-generated music in the background

## More actual thoughts (2017-06-12 11:40)

I've now implemented the evaluation mode where the correctness of a dialog box is decided by the accumulation of all possible steps (including clicking the right button to dismiss it). (Actually I haven't quite got the final final decision, but I might as well have, it's easy enough.)

So we now have a thing where it can populate a dialog box with random UI elements (eight different types) and instructions on how to complete the dialog box and the dialog box can tell if you've correctly handled the instruction. It would also be able to tell, if you wanted it to, how you were incorrect (and there's a possibility for Tracery-generated warnings/advisories based on what you messed up).

The next step is the outer structure of generating dialog boxes over time and reflecting your successes/failures in terms of your annual salary and position, promotions/demotions as they occur, possibly bonuses (rather than incremental salary upgrades?), and perhaps warnings and advice offered based on screw-ups. And then also including things like sound and plausibly visual effects like shake on failure so that you know you didn't complete a dialog box properly...

... quickly went away and implemented the shake which I think is nice.

So there's a bunch of larger stuff to do basically. But the basic underpinnings of the project now actually work.


## Today's actual thoughts (2017-06-11 13:05)

Yesterday's thoughts were perhaps a little underwhelming. But okay here we are, what do we have now?

- Ability to display different UI elements (spinner, selection menu, etc.)
- Inside a dialog box
- Potentially with multiple steps within a single dialog box

Next up we need

- The ability to actually assign correct behaviours and to assess them on dialog close (OR actually I guess potentially they could be assigned points per correct action, might be funner and more action)
- Later on perhaps somewhat more complex versions of this (notably time-related? Like if you need to wait for a progress bar.) Not necessarily though. May again be better to keep it simple simple simple.
- Do you fail a dialog box by closing it with the correct button but without having completed the prior steps? No.

So basically I need to work out how to make correct decisions (each element can know itself) and how to indicate that.

---

Later that day.

I've implemented a bunch of stuff to be able to generate correct answers to elements and generally to be able to check them as you change them, but in fact as I get to things like date pickers and sliders it's becoming a bit more obvious that one should really only check the result after the final click of the button, which requires a different structure.

Basically I'll need to collect up all the elements in a single dialog and then check if they're all satisfied on the button click.


## Today's thoughts (2017-06-10 12:24)

One, two, three.


## Technical plan? (2017-06-09 11:02)

Time to think about about the overall structure of the game (though much of that is taken care of below), and the strategy for actually implementing it specifically, so that I can move forward and eventually get this thing done.

So as we know, the rough idea of the game in standard browser at this point is a kind of desktop simulator with a menu bar at the top, some icons to drag around, and many dialog boxes popping up all the time.

_Question:_ Do we actually want the top level menu and the icon dragging? One advantage is that they create two more layer of interaction and things like the icon dragging can then be obfuscated by the dialogs on the screen, which is a potential positive. Further it might be possible/interesting to allow the user non-game actions like opening an image file, say, or even a folder if I could be bothered (probably not although I guess a folder is just a dialog with no buttons and some number of 'files' inside it? Whoa.).

_Answer:_ I think a key thing here is probably to build the game _without_ the top menu and icon dragging in favour of only dealing with the dialogs popping up and their various requirements. Then depending on enthusiasm I could add in the other stuff too.

_Question:_ How will points/success be indicated?

_Answer:_ Possibly your salary should be listed somewhere on the screen - probably at the top in a menu-bar style space. "Current position: Intern   Salary: $0.00". As salary goes up per dialog handled, your position goes up too (and is announced via another dialog box).

_Question:_ How do we determine what the user has to do for any given dialog box (it will depend on the element represented), and how do we track whether or not they have done it?

_Answer:_ In terms of tracking...

- each dialog should track requirements and success itself
- update salary based on the result
- A larger handler can then update
  - the salary,
  - position,
  - issue warnings (when incorrect),
  - issue promotion notifications, etc.

_Answer:_ In terms of determining what needs to be done in a given dialog, that's more complex. It seems like it can be generated _with_ the dialog, given only the dialog needs to track it (unless we created interdependencies, like only click OK when there are three dialogs on the screen, for example!, some of these would be checkable without creating too much drama). Will need to determine the kinds of parameters that influence correctness, here's a first attempt:

- Clicking the right button (close, one of the button pane buttons)
- With the right thing selected (radio, checkbox(es), date, spinner, select menu(s), slider)
  - Possibly with multiple elements (though layout becomes a significant issue? Need to test)
- At the right time (e.g. progress bar, timer running down)
- In the right position (e.g. top left)
- With the right number of other dialogs open (e.g. 3)

_Answer:_ The 'correct action' itself could be obfuscated in language and time and even visually

- Wait for a progress bar to complete before the instructions come up on the screen
- "Pick the second item from the bottom", "Pick the second option with an 'a' in the third position", ...
- Blink text, fades, shakes, ...

_Answer:_ In terms of generating a _specific_ requirement for a dialog, that requires an amount of task generation (e.g. radiobuttons+3rd correct+click cancel when done, progressbar+click OK when done, ...) so need a kind of taxonomy of what makes a dialog correct, and what makes subelements correct - and that taxonomy needs to be combined but also needs to translate both into human-readable task text and into code generating the dialog that behaves that way. Each element probably needs a label so that it can be referred to in the text. ('any' and 'none' should be potential options for some of the things... like 'don't select a date, then press OK'). Could conceivably use Tracery to generate a grammar that represents these things as sets of symbols, and then have some engine that translates from the symbols to instructions? This could get really complex... but any approach will be?

- [slider:10] would mean "set the slider to 10"
- [close:x] would mean "close with the x button"
- [checkbox:one,two] would mean "select one and two in the checkboxes"
- [datepicker:17/04/2017] would mean "select that date in the datepicker"

So it's certainly possible to have a little language thing that generates a specific outcome for a specific UI element. The dialog box itself is a separate case that is used to check the requirements on close (e.g. closed with the right button, at the right time, in the right place, with the right sub-conditions)

Then there's the extra question of whether you want more complex presentation language that just "select options one and two for the curry checkbox". One thing is just to hide this stuff in a language text so it's less obvious.

_Question:_ How hard is this meant to be? Is the idea to just be continuously effective and to appear to be working, or is it meant to be like a game with challenges? The former is more in the spirit of Bejewel and Candy Crush, the later more in the spirit of an actual game.

_Answer:_ The former kind of makes more sense? In which case we'd be talking about _not_ overcomplicating the instructions and tasks. Steps in the dialog box could literally just be a list of instructions... "1. Select 'hair'", 2. Click 'close'. It's simpler and probably gets the point across.

Pitched it to Rilla and she agrees. So the language translation problem becomes a lot simpler: you just generate the requirements per step in the dialog box and then literally state them to the player. Okay. In this context it's p... well I was going to say it would make sense to have the desktop stuff too, but perhaps not. Nor the menu at the top. Just dialogs. Or at least, get it working and see how successful it is. And for now not even time pressure (beyond the time pressure of the quantity of dialogs).

_Okay:_ Looks like we're ready to move forward.

## 2017-05-31 09:52

Just made a Windows-esque version of the UI in response to a key issue I thought about while in NZ, which is that the actual aesthetic approach I was using before (specifically the very minimalist graphical style and the 'alien language') were heavily influencing how I was able to think about the project. And most notably they were hugely detracting from being able to think of it in a humorous or comical way, which was in turn kind of killing the emotional tone and making it hard to work. And not just that, but because it was looking quite mysterious and stylish, it was pulling away from the original idea of a person pretending to work - it didn't look like work so much as the controls for an alien starship or something. Which is itself work, but in a different kind of 'narrative context' or something.

By mimicking an old-school GUI / WIMP thing, it feels much lighter and I think that's a better approach for letting the experience come out.

The other thing I'm thinking about just this instant is the question of how 'gameplay' should flow...

Well, see the ol' notebook for more thoughts on this because I did a bunch of notebookery at Le Melbourne to try to figure out What's Going On with the game. And came to a number of pretty satisfactory conclusions I think. But the basic conclusions were:

- **Gameplay** will revolve around either an increasing number of dialog boxes/UI elements on the screen (Desktop version) or sequential presentation of the dialogs/elements (Mobile version).
- **Content** in the dialogs will be based on instructions for how to complete the dialog alongside business-y wording and phrases generated through Tracery.
- **Interactions** will leverage all the jQuery UI possibilities such as progress bar, button, slider, date picker, menu, checkbox, radiobutton, text field, big text field, spinner, (data entry), (dragging icons and windows), (selecting and dragging subsets of icons). It will be possible to get an interaction wrong or write (number of characters, correct selection, etc.)
- **Feedback** will focus on points gained for correct performance, along with promotions, demotions, getting fired.
- **Platform** will focus on desktop for now and then I'll look at a mobile version after getting desktop largely working. (There could be some mobile specific interactions like swiping, pinching, etc.)

Key next steps:

- Making sure can get all interactions working
- Mocking up how it ends up looking and making sure it feels fun
- Working out how to do a Tracery grammar in this context


## 2017-03-28 14:35

Discussion with DART 450:

* Maybe animate the language to pull away from it feeling like a human language (still a question of whether this would actually pull away or just seem like a more exciting language to try to decipher? The problem there is that it still 'is a language' in the sense that it's still characters that consistently mean, at least, 'this thing' and 'that thing' - they can be distinguished from one another and selected between...)
* What about the idea of labelling them just with the generic titles of what they are - e.d. 'Radio 1' and 'Radio 2' and 'Button' - the sadness about that is that it ends up missing out on the cool language thing..
* Connecting it to Facebook or another source of data so that you don't determine the content yourself, but rather it serves as a kind of 're-interfacing' of a pre-existing set of data.
* The way that the characters are varied and horizontal makes them look like traditional written human languages - could there be a way around that? If they were of uniform height would that help? If they were just variable length censored blocks? (That doesn't really get around it.)
* ... HMMM.

## Return of the man, 2017-03-27 14:08

I'm back in the directory containing this game thinking about whatever it is I'm meant to be thinking about when I'm meant to be working on this game. Since the last time I actually though about this I started and finished SNAKISMS, v r 3, and Let's Play: Ancient Greek Punishment: CPU Edition! So it's kind of been a while.

The game still seems like a good idea, but re-reading my notes I feel like I'm still a bit lost in terms of what it actually is, what the idea is, and as usual I think the probably solution to this is to come up with the simplest possible version of what's potentially interesting about the project.

To the extent this is a kind of sequel to *It is as if you were playing chess* then really the message is: clicking on user interface elements is a game. You get told what to do and you do it. 'Select the first checkbox and press ok' kind of tasks. Or possibly even the freedom to set the elements as you wish. Maybe there's always an OKAY button. Maybe there's always a quit option. Maybe there are points that are 'work units'?

But the simplest thing is: one ui element, one action, one set of points, and move on to the next. In some ways there's a purity to that that could conceivably be better than the idea of complicating it with multi-element layouts? But the multi-element layouts do have a kind of appeal.

There's a question of language - interfaces have texts. Could just use emoji or 'censored' unicode block elements.

█▉▊▋▌▍▎▕▖▗▘▙▚▛▜▝▞▟▔▀▁▂▃▄▅▆▇░▒▓

Totally plausible to generate an imagined 'language' out of these elements. Could even be referred to in the instructions? 30 elements there already... if you remove the shaded blocks you get something kind of nice? Like

"▕▔▙▞▚▃▙█▄▜▍▘▁▀▚▕▁▜▜▅▊▝▁▟▖▜▆▁▀▀▛▕▊▃▊▖▂▊▘▌▁▀▊▅▄▘▂▌▃▍▃█▞▊█▞▊▅▀▍▄▋▎▜▘▚▆▅▃▉▚▎▋▙▛▄▄▃█▌▞▃▕▊▀▉▂▋▄▞ ▔▅▁▋▄▜▄▋▎"

That's a 50 character phrase including spaces. I kind of like that as a possibility?

Maybe the language of the game could be this language and thus you can get things right or wrong? Or is that a distraction really from the notion of 'doing work'? It's perhaps a little overly rhetorical. But still plausible to label elements with this 'language' and have instructions be in english - e.g. 'type 140 characters into the text box and press '▃█▞'... though looking at it maybe even the alie... no maybe that will work. I have to mock it up. Fuck.

Okay so here's the minimal case:

Each 'level' is a single element (or as much of an element as one needs for it to make sense - e.g. multiple radio buttons), an instruction (e.g. select '▃█▞' and press '█▃█'), and that's it. You get a work unit each time. Or possibly you don't get a work unit? And there's the question of getting it 'wrong' and whether that's desirable. HMHMHMHMHMHMHM shit. Why is this confusing me so much?

WWwwwweeelllll at the very least let's make the 'single element version' and we can score/no score abstract/no abstract based on that. OH KAY?

...

Alright well I create the barest minimum thing - two radio buttons and a button. It looks very daunting. Next thing is I guess to generate some text with instructions. Which may make it look a little less hideously daunting in terms of what it is.

## Tuesday, 27 December 2016 11:17
Candidate naming:

* It is as if you were doing some work
* Boss Mode
* Getting Things Done
* Good Works
* To Do
* Productivity
* It is as if you were getting things done
* Settings
* Forms

Extra thought: If it were part of the “It is as if you were” series then I could theme the jQuery UI CSS to resemble the same kind of abstracted setup I imagine, which could look really cool actually.


## Thursday, 8 December 2016 11:54

Feeling irked with jQuery UI. Have added a button (easy). Then battling with radio selectors, which are displaying a little strangely and pissing me off. The point of using jQuery UI is to have nicer (“nicer”?) styling for everything, so it’s kind of an ass-pain to have it not working properly and actually just not even recreating the default look that’s meant to be there according to the jQuery UI website.

So grr. Other than that it’s comparatively easy to just put these things in - I don’t think it would be especially difficult to at least get the elements in there and to construct them dynamically… though I have to think about how you determine whether they’ve done the right thing (or sequence of things?). And I have to think about how much I care about specific layouts...

Got the CSS working better… it seems like the default theme online just has really fucking ugly settings. Which is annoying, but I’d have ended up with a custom theme anyway so no particularly big deal.

Next step is probably writing code to more easily dynamically generate a particular UI element (including random numbers of checkboxes and stuff I suppose) and throw it onto the screen.

And then to give thought to how to track what the “correct” (set of) action(s) isare fucking English.

Okay? Okay.

## Thursday, 1 December 2016 19:34

It’s been a while since I paid attention to this, and for now what I want to do is just list the plausible activities that one could be taking in this scenario. Perhaps with a mind toward how it might be implemented in jQuery specifically…

(This is no longer intended to be a narrative version of the game, it’s just straight up playing UI games as the first approach to the concept - while knowing it can of course be a much larger project.)

So possible actions are:

* Checkboxes
* Radio buttons
* Buttons
* Sliders
* Moving an object/image/div
* Resizing an object/image/div
* Typing text into a textbox (lorem ipsum?)
    * Variant: typing anything (optionally have this appear as real text)
    * Variant: typing a specific text that is checked for correctness
* Selecting from a dropdown menu
    * Variant: including nesting
* Selecting from a contextual menu
* Waiting for a progress bar to complete
* Selecting a date from a date picker
* Waiting while a waiting icon displays
* Setting a value with a “spinner”
* Selecting between tabs of options
* Reading a tooltip?

Along with individual actions it’s obvious that you could also start to group multiple elements both to make it harder to find an individual element to select/manipulate OR to allow for the possibility of following multiple instructions in the interface

[Weird aside: could the game actually present you with the story of The Machine Stops via these UI elements as a way to “read” it? Or could this be a separate very strange version of the game?]

So the basic task would be to conquer jQuery’s widgets and then have code that can arbitrarily create an interface along with a specific (known and recognisable) task to perform with it. The base case being to just add a single UI element and give a single instruction for its use. And then working up from there to this idea of multiple elements, multiple tabs of elements, and so on.

So first task: make a thing that can randomly place any of the jQuery UI widgets on the screen. Then make it so that it knows if you did the “right” thing.


## Tuesday, 30 August 2016

### The basic idea
A game made entirely of small (WarioWare-esque) activities from our daily life of using computers. So, for instance, you might be challenged to drag a folder into the trash, or move a slider to a specific setting.

### More depth
There’s a question of what this is actually about. One option is pure WarioWare style madness where there’s a heavy time limit and you succeed or fail rapidly. Another is that it’s more of a time trial where a clock runs up and you’re trying to be “good” at using the UI rather than pass/fail. In some ways I prefer that. It’s also something that could be put into tension if I pursued a more narrative concept of the game.

A narrative twist? One twist would be to incorporate narrative into the texts and imagery in the game, so that over time it becomes apparent it’s also a story. That could be pretty fun in terms of me getting to do some storytelling, but it would obviously massively complicate how the game would be able to work in terms of randomising things, the order of presentation, how you determine where the player is in the story, etc. And would the narrative be linear or generated or suggestive or? What? Importantly, you could tie the UI actions as metaphors for content in the story and vice versa...

A pre-existing narrative twist? One way to lighten the storytelling burden would be to use something in the public domain and translate it into this new format. Kafka for example? Moby Dick for example? It would be possible to find something really interesting and would enable me to dig into some literature which could be a lot of fun. Having just played through The Shining now I love what I did in terms of those connections between mechanics and (visual) aesthetics. Speaking of which, it would also be possible to adapt a movie, but that could run into mega copyright issues, so a textual narrative probably makes more sense.

A decay twist? I liked the ending of Get X Avoid Y and I’d be interested to work with that idea of entropy/decay in the game itself again. The idea that over time different levels/tasks could overlay each other, become impossible, be offset, lots of potential variations that could do that. Of course in the narrative twist that would have to actually mean something.

A comedy twist? Rather than playing the UI work completely vanilla it would be possible to (perhaps over time) have elements that are stranger than they are straightforward. A progress bar where you just wait for it to finish. A set of sliders that interact and make it difficult to get the settings you’re told to reach. A button that runs away from the cursor and has to be pinned in a corner (or something).

A meta twist? It would be possible to have meta UI elements. E.g. the game could take place in a UI window that could be closed, exposing a different interface for you to explore.

The question of whether this could be the Humble Original
Could it? The idea is for a 20-30 minute experience if limited replay (e.g. anything I make). Can this particular idea about interfaces sustain that amount of time? John mentioned the idea of a “TV episode” in that context of length, but it could be funny to treat it as a TV episode in some ways - fade outs, advertising, ...

How do my other games sustain time? The Shining has a set sequence that you play through to get to the end and probably takes about… well I checked, about 7 minutes. Other games with some length are, I suppose, the various 3D games in terms of exploration time, Art Game with its art production time, Epic Sax Game, perhaps, due to its skill component, ...

What would it take for this UI game to be Humble Original?

You could add skill elements - e.g. you actually can’t advance until you attain a particular speed/proficiency/accuracy with the UI actions - i.e. it could have levels you get through.

A sufficiently long/detailed linear narrative - e.g. if the story is long enough and engaging enough that it needs to be told over a long enough time, then you have a game of the “correct” length, even if it means repeating certain challenges. This would point more toward the game being linear in terms of its narrative element though (which would make my life easier - not totally clear that generative narrative is something I want or need to branch into?). [Note that this still fits the WarioWare concept in a way, those tend to be linked together with (admittedly trivial) narrative elements.]

A sufficiently sophisticated generative narrative - e.g. if I committed to the idea of UI work as metaphor for other narrative actions it would be possible to, say, implement a Proppian storytelling system where the different actions/events are represented as UI actions and where the story elements are generated through something like Tracery, making it more of a replayable narrative game. Pretty weird though...
