export { getRandomCat };

const cats = [
	{
		image: "https://media.tenor.com/NQfq1liFH-8AAAAd/byuntear-sad.gif",
		text: "byuntear",
	},
	{
		image: "https://media.tenor.com/D6ewisp89HIAAAAd/this-cat-i-have-hired-this-cat-to-stare-at-you.gif",
		text: "intimidating",
	},
	{
		image: "https://media.tenor.com/uu9seSBtPaEAAAAC/sad-cat.gif",
		text: "your crimes will not be forgiven",
	},
	{
		image: "https://media.tenor.com/U3ctZ-oyAZEAAAAC/cat.gif",
		text: "sneak attack",
	},
	{
		image: "https://media.tenor.com/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif",
		text: "the voices",
	},
	{
		image: "https://media1.tenor.com/m/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif",
		text: "nutritional snack",
	},
	{
		image: "https://media.tenor.com/vFKAy9cQyjEAAAAC/cat.gif",
		text: "car break down",
	},
	{
		image: "https://media1.tenor.com/m/TRm-7oNu6DwAAAAd/cat.gif",
		text: "insanity",
	},
	{
		image: "https://media1.tenor.com/m/7-0mRNtPj8kAAAAd/cat-kitty.gif",
		text: "wowa its the 19th maybe",
	},
	{
		image: "https://media1.tenor.com/m/mAv4pFZfAAEAAAAd/cat-cats.gif",
		text: "funny looking fish",
	},
	{
		image: "https://media1.tenor.com/m/HnknA3u-W7kAAAAd/cat-meme.gif",
		text: "i have overcome the rage",
	},
	{
		image: "https://media1.tenor.com/m/y4Ie8h0H-TwAAAAC/cat-typing.gif",
		text: "hacker",
	},
	{
		image: "https://media1.tenor.com/m/PS6medrGxqwAAAAd/cat-kiss.gif",
		text: "muah",
	},
	{
		image: "https://media1.tenor.com/m/J7Si7OINgNIAAAAd/kitty-review-cat.gif",
		text: "the dancer",
	},
	{
		image: "https://media1.tenor.com/m/qRhkAc08-doAAAAd/my-true.gif",
		text: "crazy",
	},
	{
		image: "https://media1.tenor.com/m/asVxc-o0XawAAAAd/meow-cat.gif",
		text: "",
	},
	{
		image: "https://media1.tenor.com/m/qucrYqQR7f4AAAAd/kitty-review-cat.gif",
		text: "hodog",
	},
	{
		image: "https://media1.tenor.com/m/x_3S5A6efeUAAAAd/he-cant-dink-it-he-cant-drink-it.gif",
		text: "this poor bird was damaged in forest fire and cannot eat his milk. please send him your prayers.",
	},
	{
		image: "https://media1.tenor.com/m/PBslsrAO4CwAAAAd/cat-cat-cat-cat-cat-cat-cat-cat-cat-cat-catc-atca.gif",
		text: "we're so back",
	},
	{
		image: "https://media1.tenor.com/m/yybmSYAC6wsAAAAd/cat-funny-cat-memes.gif",
		text: "the spy",
	},
	{
		image: "https://media1.tenor.com/m/_4QLIkvX9vwAAAAd/cat-review-kitty-review.gif",
		text: "the dinker",
	},
	{
		image: "https://media1.tenor.com/m/rTkRJ3vnXHYAAAAd/excited.gif",
		text: "but heres the jumper",
	},
	{
		image: "https://media.tenor.com/_hUq1BSUsiMAAAAd/cat-cute.gif",
		text: "yipee",
	},
	{
		image: "https://media.tenor.com/4p1QyiKGmJMAAAAd/cat-calico-cat.gif",
		text: "inspection in progress",
	},
	{
		image: "https://media.tenor.com/c-i_MkR9VGgAAAAM/cat-calico-cat.gif",
		text: "target destroyed",
	},
	{
		image: "https://media.tenor.com/UQXJ79S4ObUAAAAM/cat-calico-cat.gif",
		text: "fall back",
	},
	{
		image: "https://media1.tenor.com/m/uoDb41U3t78AAAAC/gatotapes.gif",
		text: "😂😂😂😂😂😂😂😂😂😂😂",
	},
	{
		image: "https://media1.tenor.com/m/sD4KxXmiLRMAAAAd/jinx-cat-jinx.gif",
		text: "this cat is j",
	},
	{
		image: "https://media1.tenor.com/m/zGFALfeUpHsAAAAd/disagre-disagree.gif",
		text: "na",
	},
	{
		image: "https://media1.tenor.com/m/yRE9zUfA4_MAAAAd/fatfatpankocat-panko.gif",
		text: "witness true talent",
	},
	{
		image: "https://media.tenor.com/Q1k_G7keTowAAAAi/but-heres-the-exploder.gif",
		text: "boom",
	},
	{
		image: "https://media.tenor.com/h0slfYVBHzIAAAAj/cat-spinning-cat.gif",
		text: "spen",
	},
	{
		image: "https://media.tenor.com/ATZt6XjVCHAAAAAd/but-heres.gif",
		text: "ow",
	},
	{
		image: "https://media1.tenor.com/m/r3sfU66gy20AAAAd/but-heres-the-uh-i-forgor.gif",
		text: "he forgor 💀",
	},
	{
		image: "https://media1.tenor.com/m/cX-c-zhYx9wAAAAC/but-heres-the-climber-cat.gif",
		text: "ascend",
	},
	{
		image: "https://media1.tenor.com/m/fsgSuov8askAAAAC/but-heres-the-runner-cat.gif",
		text: "meaningless",
	},
	{
		image: "https://media1.tenor.com/m/t80wpmP16QYAAAAC/but-heres.gif",
		text: "wanted in all states",
	},
	{
		image: "https://media1.tenor.com/m/IeyeoqcsrswAAAAd/but-heres.gif",
		text: "waaaaaaaaaaaa",
	},
	{
		image: "https://media1.tenor.com/m/Q0wamZKHsloAAAAd/but-heres.gif",
		text: "the eeper",
	},
	{
		image: "https://media1.tenor.com/m/nhHe8vkEmPoAAAAC/cat-flying.gif",
		text: ";fling",
	},
	{
		image: "https://media1.tenor.com/m/5CVn4YakwxcAAAAd/cta-cat.gif",
		text: "scientists discover new species of fish",
	},
	{
		image: "https://media1.tenor.com/m/PuU2vT6osYIAAAAC/meow-kitty.gif",
		text: ":D",
	},
	{
		image: "https://media1.tenor.com/m/ojQgZ9ep9qoAAAAd/cat-kitty.gif",
		text: "monch monch",
	},
	{
		image: "https://media1.tenor.com/m/Ugz5n_Xk-ZAAAAAC/kitty-review.gif",
		text: "but why he globe",
	},
	{
		image: "fewfwfjejkbfjehbfrekhbfr",
		text: "intimidating",
	},
	{
		image: "fewfwfjejkbfjehbfrekhbfr",
		text: "intimidating",
	},
];

const getRandomCat = () => cats[Math.floor(Math.random() * cats.length)];