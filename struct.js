const starts = {
    "agree": "{AGREE_SENTENCE}",
    "disagree": "{DISAGREE_SENTENCE}",
    "sentence": "{SENTENCE}",
    "essay": "{ESSAY}",
    "elements": "{ELEMENT_COMBINATION}",
    "html": "{HTML}"
}
const structure = {
    "{SENTENCE}": [
        "{STATEMENT}.",
        "{STATEMENT}.",
        "{QUERY}?",
        "{STATEMENT}, {CONJUNCTION} {STATEMENT}.",
        "{STATEMENT} {BECAUSE} {STATEMENT}.",
        "{QUERY} {BECAUSE} {STATEMENT}?"
    ],
    "{STATEMENT}": [
        "{SELECTION} {MODAL} {VERBNOUN}",
        "{SELECTION} {MODAL} {VERBNOUN}",
        "{SELECTION} {MODAL} {VERB}"
    ],
    "{QUERY}": [
        "{MODAL} {SELECTION} {VERBNOUN}",
        "{MODAL} {SELECTION} {VERBNOUN}",
        "{MODAL} {SELECTION} {VERB}"
    ],
    "{AGREE_SENTENCE}": [
        "It is just true.",
        "The truth is {POSITIVE_ADVERB} {TRUTH} because {AGREE_REASON}. {AGREE_SENTENCE}",
        "It's {TRUTH} because {AGREE_REASON}. {AGREE_SENTENCE}",
        "You have to {THINK} it because {AGREE_REASON}.",
        "I was walking down the road when suddenly I {POSITIVE_ADVERB} realised that {AGREE_REASON}. {AGREE_SENTENCE}",
        "After discovering this I {POSITIVE_ADVERB} wanted to tell you so badly that {AGREE_REASON}. {AGREE_SENTENCE}",
        "Someone asked me about this {POSITIVE_ADVERB} cool subject and I told them '{AGREE_SENTENCE}'. {AGREE_SENTENCE}",
        "{AGREE_SENTENCE} {EXTENSION} - {AGREE_SENTENCE}",
        "If anyone says it's {WRONG} I'll say to them '{DISAGREE_SENTENCE}'"
    ],
    "{AGREE_REASON}": [
        "it is",
        "I {THINK} that it's pretty cool that {AGREE_SENTENCE} But you have to {THINK} that it's {TRUTH}, {EXTENSION} {AGREE_REASON}",
        "it's just {POSITIVE_ADVERB} {TRUTH}, {EXTENSION} {AGREE_REASON}",
        "it's {TRUTH}, and here's why; {AGREE_SENTENCE}.",
        "someone came up to me and said to me '{AGREE_SENTENCE}'",
        "I realised that; {AGREE_SENTENCE} And that's {POSITIVE_ADVERB} epic",
        "it's {POSITIVE_ADVERB} {POSITIVE_ADVERB} {TRUTH}, {EXTENSION} {AGREE_REASON}"
    ],
    "{DISAGREE_SENTENCE}": [
        "That is stupid!",
        "I cannot believe you thought that! {DISAGREE_SENTENCE}",
        "Did you really {THINK} that? I thought you knew that {DISAGREE_REASON}. {DISAGREE_SENTENCE}",
        "I was {RIGHT} because {DISAGREE_REASON}. {DISAGREE_SENTENCE}",
        "Are you joking? It's obvious I was {RIGHT} because {DISAGREE_REASON}. {DISAGREE_SENTENCE}",
        "I {THINK} you'll realise I was {RIGHT} after reading that '{DISAGREE_SENTENCE}'. {DISAGREE_SENTENCE}"
    ],
    "{DISAGREE_REASON}": [
        "you are {STUPID}",
        "you were {WRONG}, {EXTENSION} {DISAGREE_REASON}",
        "you were {EXTREME_ADVERB} {WRONG}, {EXTENSION} {DISAGREE_REASON}",
        "you were {POSITIVE_ADVERB} {WRONG}, {EXTENSION} {DISAGREE_REASON}",
        "I heard that '{DISAGREE_SENTENCE}' and I knew {DISAGREE_REASON}",
        "you were {EXTREME_ADVERB} {STUPID}",
        "someone said '{DISAGREE_SENTENCE}' and I said '{AGREE_SENTENCE}' to them"
    ],
    "{POSITIVE_ADVERB}": [
        "brilliantly",
        "radiantly",
        "tremendously",
        "undeniably",
        "positively",
        "amazingly",
        "inevitably {POSITIVE_ADVERB}",
        "tantilyzingly"
    ],
    "{ESSAY}": [
        "{INTRO}\n\n{BODY}\n\n{CONCLUSION}"
    ],
    "{BODY}": [
        "{PARAGRAPH}",
        "{PARAGRAPH}\n\n{BODY}"
    ],
    "{PARAGRAPH}": [
        "{SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE}",
        "{SENTENCE} {SENTENCE} {SENTENCE} {SENTENCE} {PARAGRAPH}",
        "{SENTENCE} {PARAGRAPH}"
    ],
    "{INTRO}": [
        "{STATEMENT} {PARAGRAPH}",
        "{STATEMENT} {PARAGRAPH} {STATEMENT}"
    ],
    "{CONCLUSION}": [
        "{PARAGRAPH} {STATEMENT}"
    ],
    "{TRUTH}": [
        "true",
        "correct",
        "accurate",
        "factually {TRUTH}",
        "resoundingly {TRUTH}"
    ],
    "{BECAUSE}":[
        "because",
        "because"
    ],
    "{EXTENSION}": [
        "and",
        "also",
        "furthermore",
        "moreover",
        "in addition",
        "which implies"
    ],
    "{CONJUNCTION}":[
        "and",
        "for",
        "nor",
        "but",
        "or",
        "yet",
        "so",
        "because",
        "although",
        "after",
        "before",
        "while",
        "as long as",
        "as soon as",
        "in case",
        "when",
        "until"
    ],
    "{STUPID}": [
        "stupid",
        "dumb",
        "idiotic",
        "moronic",
        "slow"
    ],
    "{WRONG}": [
        "wrong",
        "incorrect",
        "{EXTREME_ADVERB} {WRONG}",
        "mistaken",
        "in error"
    ],
    "{RIGHT}": [
        "right",
        "correct",
        "speaking the truth",
        "unerring",
        "factually {TRUTH}",
        "{EXTREME_ADVERB} {RIGHT}",
        "{POSITIVE_ADVERB} {RIGHT}"
    ],
    "{EXTREME_ADVERB}": [
        "extremely",
        "disastrously",
        "tremendously",
        "so",
        "very",
        "fantasically",
        "disruptivley",
        "massively",
        "preposterously",
        "{EXTREME_ADVERB} {EXTREME_ADVERB}"
    ],
    "{THINK}": [
        "believe",
        "think"
    ],
    "{ADJECTIVE}": [
        "red",
        "blue",
        "green",
        "orange",
        "brown",
        "big",
        "small",
        "pretty",
        "ugly",
        "delicious",
        "nasty",
        "horrible",
        "brilliant",
        "amazing",
        "unbelievable"
    ],
    "{POSITIVE_ADJECTIVE}":[
        "pretty",
        "delicious",
        "brilliant",
        "amazing",
        "unbelievable",
        "great"
    ],
    "{VERB}": [
        "walk",
        "run",
        "jog",
        "dig",
        "sing",
        "jump",
        "swim"
    ],
    "{VERBNOUN}": [
        "pick up {NOUN_WITH_TYPE}",
        "put down {NOUN_WITH_TYPE}",
        "eat {NOUN_WITH_TYPE}",
        "make {NOUN_WITH_TYPE}",
        "create {NOUN_WITH_TYPE}",
        "kill {NOUN_WITH_TYPE}",
        "protect {NOUN_WITH_TYPE}"
    ],
    "{NOUN}": [
        "person",
        "chair",
        "table",
        "pot",
        "door",
        "couch",
        "plate",
        "bowl",
        "meal",
        "cheese",
        "egg",
        "lettuce",
        "tomato",
        "burger",
        "pizza",
        "balloon",
        "child",
        "adult",
        "bird",
        "mammal",
        "chimp",
        "ape",
        "gorilla",
        "monkey",
        "parrot",
        "spider",
        "insect",
        "fly",
        "book",
        "computer",
        "school",
        "building",
        "house"
    ],
    "{NOUN_WITH_TYPE}": [
        "a person",
        "a chair",
        "a table",
        "a pot",
        "a door",
        "a couch",
        "a plate",
        "a bowl",
        "a meal",
        "some cheese",
        "an egg",
        "some lettucce",
        "a tomato",
        "a burger",
        "a pizza",
        "a balloon",
        "a child",
        "an adult",
        "a bird",
        "a mammal",
        "a chimp",
        "an ape",
        "a gorilla",
        "a monkey",
        "a parrot",
        "a spider",
        "an insect",
        "a fly",
        "a book",
        "a computer",
        "a school",
        "a building",
        "a house"
    ],
    "{MODAL}": [
        "can",
        "will",
        "should",
        "could",
        "might",
        "must",
        "may",
        "shall"
    ],
    "{SELECTION}": [
        "{NOUN_WITH_TYPE}",
        "{NOUN_WITH_TYPE}",
        "the {NOUN}",
        "the {POSITIVE_ADJECTIVE} {NOUN}",
    ],
    "{ELEMENT_COMBINATION}": [
        "{ELEMENT}",
        "/{ELEMENT_COMBINATION}{ELEMENT_COMBINATION}",
        "//{ELEMENT_COMBINATION}{ELEMENT_COMBINATION}{ELEMENT}"
    ],
    "{ELEMENT}":[
        "E",
        "W",
        "F",
        "A"
    ],
    "{HTML}": [
        "<style>{HTMLSTYLE}</style>{HTMLDIV}"
    ],
    "{HTMLDIV}":[
        "",
        "<h1>{HTMLHEADING}</h1>{HTMLDIV}",
        "<p>{HTMLPARAGRAPH}</p>{HTMLDIV}",
        "<div>{HTMLDIV}</div>{HTMLDIV}",
        "<div>{HTMLDIV}</div>{HTMLDIV}",
        "<p>{HTMLPARAGRAPH}</p>{HTMLDIV}",
        "<button onclick='this.innerHTML=generate(\"{HTMLBUTTON\"+\"}\",5)'>{HTMLBUTTON}</button>{HTMLDIV}",
        "<a href='https://en.wikipedia.org/wiki/Special:Random'>{HTMLBUTTON}</a>{HTMLDIV}"
    ],
    "{HTMLSTYLE}": [
        "{HTMLELEMENT} {{HTMLELEMENTSTYLE}}",
        "{HTMLELEMENT} {{HTMLELEMENTSTYLE}} {HTMLSTYLE}"
    ],
    "{HTMLELEMENT}": [
        "p",
        "div",
        "strong",
        "em",
        "code",
        "h1",
        "h2",
        "h3",
        "button",
        "span",
        "a",
        "*"
    ],
    "{HTMLELEMENTSTYLE}": [
        "{HTMLATTRIBUTE}",
        "{HTMLATTRIBUTE} {HTMLELEMENTSTYLE}"
    ],
    "{HTMLATTRIBUTE}": [
        "font-size: {2DIGITS}px;",
        "width: {2DIGITS}%;",
        "height: {2DIGITS}%;",
        "padding: {2DIGITS}px;",
        "border: {DIGIT}px {HTMLBORDER} {COLOUR};"
    ],
    "{HTMLPARAGRAPH}": [
        "{SENTENCE}",
        "{PARAGRAPH}",
        "{AGREE_SENTENCE}",
        "{DISAGREE_SENTENCE}",
        "{ESSAY}",
        "<strong>{HTMLPARAGRAPH}</strong> {HTMLPARAGRAPH}",
        "<em>{HTMLPARAGRAPH}</em> {HTMLPARAGRAPH}",
        "<code>{HTMLPARAGRAPH}</code> {HTMLPARAGRAPH}",
        "<details>{HTMLPARAGRAPH}</details> {HTMLPARAGRAPH}"
    ],
    "{HTMLBUTTON}": [
        "{VERB}",
        "{QUERY}"
    ],
    "{HTMLHEADING}": [
        "{NOUN}",
        "{SENTENCE}"
    ],
    "{HTMLBORDER}": [
        "solid",
        "dotted",
        "double"
    ],
    "{COLOUR}": [
        "black",
        "blue",
        "green",
        "red",
        "magenta",
        "yellow",
        "orange",
        "purple"
    ],
    "{DIGIT}": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    "{POSDIGIT}": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    "{2DIGITS}": [
        "{POSDIGIT}{DIGIT}"
    ]
}
