## To dos?

Add all jQuery UI widgets to a test page to use them and understand/fix styling, don’t worry too much about brokenness for this round

* Radio
* Checkbox
* Button
* Date
* Menu
* Accordion
* Progress
* Select menu
* Slider
* Spinner
* Tabs
* ?Tooltip

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
