const books = [
    {
        id: 1,
        title: "Chronicles of a Royal Pet: A Princess and an Ooze (Royal Ooze Chronicles Book 1)",
        coverArtist: "Damien Sim",
        coverImage: "ChroniclesofaRoyalPetAPrincessandanOoze(RoyalOozeChroniclesBook1)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B01N13Q2BD",
        publishDate: "1/27/2017",
        synopsis: "The world of Erafore is one full of magic and mystery. Heroes battle dragons, mages confront demons, and the gods watch over it all. Yet among these incredible beings, a single creature is born with the power to rewrite the destiny of the land. Taken in as a pet by the princess of the Kingdom of Varia, a mere Ooze will rise to stand in the tide of fate and defend the ones he loves from an encroaching void. But can a monster ever truly become a man?",
        onSale: true,
        audioBook: true
    },
    {
        id: 2,
        title: "Chronicles of a Royal Pet: The Majesty of Magic (Royal Ooze Chronicles Book 2)",
        coverArtist: "Damien Sim",
        coverImage: "ChroniclesofaRoyalPetTheMajestyofMagic(RoyalOozeChroniclesBook2)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B06XZBFCQ1",
        publishDate: "4/1/2017",
        synopsis: "It has been a wild ride for Jelly the Ooze since he was born. Adopted as a pet by a princess, obtaining a soul and a mind, and being blessed by a caring family and doted on by powerful gods. Now, Jelly is accompanying Princess Liliana on her way to the Royal Varian Academy of Magic where they both plan to learn more about the mystical arts. But not all is well, for a mad woman seeks the death of Varia's princess and will stop at nothing to ensure it happens. Add onto that new friends, bullies, and a prophecy, and Jelly has his tendrils full keeping the people he knows and loves safe. Plus, the Ooze has two new companions of his own to deal with and a rather eccentric mentor. In the end, can anyone truly stop the coming of the void? And will Jelly be the one to try?",
        onSale: false,
        audioBook: true
    },
    {
        id: 3,
        title: "Chronicles of a Royal Pet: Wood, Stone and Bone (Royal Ooze Chronicles Book 3)",
        coverArtist: "Damien Sim",
        coverImage: "ChroniclesofaRoyalPetWood,StoneandBone(RoyalOozeChroniclesBook3)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B077VPPWF1",
        publishDate: "11/30/2017",
        synopsis: "It has been over a year since Jelly the Royal Ooze left the Royal Varian Mages Academy, and his owner, Princess Liliana Roan. Wandering Orria as a novice adventurer, Jelly desires to become stronger so he can protect those he loves as the agent of the Void creep ever closer. But an intriguing rumor reaches the young Ooze. A rumor about strange, slime-based beings who are able to talk. Creatures much like himself. Desperate to find others like himself, Jelly, his Carbuncle Familiar Rosa, and the kindly Spirit of Knowledge Tara who lives in his head, all venture south of Varia towards the forested kingdom of Brune to uncover the secret of the talking Oozes. But not only are there those who seek to stop him from uncovering the truth, but the ancient forests tremble as something old and vengeful stirs. Loneliness is a powerful motivator. But can someone truly be alone when surrounded by those who love them?",
        onSale: false,
        audioBook: true
    },
    {
        id: 4,
        title: "Chronicles of a Royal Pet: Of Scales and Distant Shores (Royal Ooze Chronicles Book 4)",
        coverArtist: "Damien Sim",
        coverImage: "ChroniclesofaRoyalPetOfScalesandDistantShores(RoyalOozeChroniclesBook4)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B07F5V29YJ",
        publishDate: "6/30/2018",
        synopsis: "Drakon: A mysterious continent of vast potential and incredible danger. Inhabited by the ancient, powerful dragons, the brave and sturdy Lizardfolk, and the cunning Kobolds, it is a land that offers much, and demands even more. It is this place that Jelly now arrives, eager to seek out fellow speech-capable Oozes. His excitement however is overshadowed by the turmoil that has draped across Drakon. Tensions between the human, elfish, and dwarfish colonists and the native scaled denizens has reached a peak, and conflict seems inevitable. All the while, the dark forces which have pursued Jelly across the ocean now fan the flames of war, eager to incite chaos. Can Jelly muster the willpower to save the two cultures, even if it means sacrificing the chance for a family?",
        onSale: false,
        audioBook: true
    },
    {
        id: 5,
        title: "Chronicles of a Royal Pet: Drifting in the Aether (Royal Ooze Chronicles Book 5)",
        coverArtist: "Brandon Liang",
        coverImage: "ChroniclesofaRoyalPetDriftingintheAether(RoyalOozeChroniclesBook5)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B07L1CBX9R",
        publishDate: "11/29/2018",
        synopsis: "From the marble city of Sanc Aldet, to the dark woods of the Dullwilds, to the dragon-filled continent of Drakon, Jelly has become a rather well-traveled Ooze. However, he is about to go on the biggest trip of his life when the X-ranked adventurer Jeris Cowl takes the young Royal Ooze for special training far away in the mystical planes of the Aether, a land beyond mortality, where the Heavens and Hells clash and eldritch entities of primordial energy reign as gods over entire universes. The Void watches, and seeks to subvert the hero chosen by Fate to stop it, however. It sends dark agents after Jelly, and he must decide what is more important: his mission, or his own desires? Things are shifting in the Realm Beyond Realms, and events are coming ever closer to the brink. Can Jelly become a herald of Light, or will he fall into Darkness?",
        onSale: false,
        audioBook: true
    },
    {
        id: 6,
        title: "Chronicles of a Royal Pet: Heroes Collide (Royal Ooze Chronicles Book 6)",
        coverArtist: "Brandon Liang",
        coverImage: "ChroniclesofaRoyalPetHeroesCollide(RoyalOozeChroniclesBook6)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B0826BZDVV",
        publishDate: "11/29/2019",
        synopsis: "Jelly has come to terms with two facts: one, having friends is hard. And two, trying to save Erafore with them? Maybe a little bit harder to pull off. Ever since he entered the Aether, things have changed for him. As a Chosen One, it is his duty to save his world from the cruel caress of the Void. And part of that duty is to fight alongside his fellow Chosen Ones. But can Jelly really handle the other two individuals the goddess Nia has selected to save Erafore? He will need every ounce of cunning and strength he can scrounge up, though, because the forces of the Void will not tolerate this gathering of Chosen Ones, and will slay them if at all possible. His companions are Dora, a half-orc Healer who carries guilt and resentment about her life back home, and Gaelin, a nice guy wearing cursed armor, and who has a worrying hatred for birds. Can the three of them survive each other?",
        onSale: false,
        audioBook: true
    },
    {
        id: 7,
        title: "Chronicles of a Royal Pet: Vanquish and Vanish (Royal Ooze Chronicles Book 7)",
        coverArtist: "Brandon Choo",
        coverImage: "ChroniclesofaRoyalPetVanquishandVanish(RoyalOozeChroniclesBook7)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B08PCCTQ74",
        publishDate: "11/29/2020",
        synopsis: "Having united with his fellow Chosen Ones in the Aether, and survived several trials and tribulations within that vast, otherworldly realm, Jelly now faces a new task: finding a way back to Erafore. What should be a simple journey forces the trio of heroes to slip past furious fae, escape angered servants of the Void, and visit one of the Afterlives in order to successfully return to their home. Yet is Erafore the same as when they left? How long have the Chosen Ones of Nia been gone? And what cruel surprises does the World Rebellion have up its sleeves for their eventual return? Regardless of the threats looming on the horizon, Jelly, Dora, and Gaelin will face whatever their enemies throw at them, and save Erafore and their loved ones.",
        onSale: false,
        audioBook: true
    },
    {
        id: 8,
        title: "The Long Road of Adventure: Flowers on the Wayside (Book 1)",
        coverArtist: "Damien Sim",
        coverImage: "TheLongRoadofAdventureFlowersontheWayside(Book1)",
        series: 2,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B075K5M17M",
        publishDate: "9/11/2017",
        synopsis: "The world is built on stories. Legends and myths all become one in the end. And on Erafore, that which is mythic often carries the truth within it somewhere. Gaelin Arcros, a young, newly minted adventurer, only wants to live his life as he wants while also honoring the man who put him onto the path of a hero. Yet there are events beyond his control that end up forcing him to accompany a runaway princess as she flees her cruel, power hungry grandfather. Swearing to protect her, Gaelin finds that his duty is not as easy as it seems, and being a helpless damsel is the opposite of his new companion's plans. Add to that an enchanted forest, gruesome murders, and the dark machinations of ancient threats which force the pair to confront their own fears in order to live on. The oldest story in existence: that of the Hero and the Princess. But sometimes the hero wants to be the one being saved, and the princess refuses to submit quietly to her cruel destiny.",
        onSale: false,
        audioBook: false
    },
    {
        id: 9,
        title: "The Long Road of Adventure: Blue Storms and Black Sand (Book 2)",
        coverArtist: "Damien Sim",
        coverImage: "TheLongRoadofAdventureBlueStormsandBlackSand(Book2)",
        series: 2,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B079T5ZQR2",
        publishDate: "2/13/2018",
        synopsis: "Over a year has passed since Gaelin Arcos, a young adventurer, and the ousted princess of Tashel, Lily, met each other and began their journey together. Still recovering from the near fatal wound she suffered at the hands of a deranged serial killer in Sanc Aldet, Lily is driven to finding a cure to her cursed injury, as well as rising high into the ranks of the Adventurer's Guild so she can plan a counter attack and reclaim her lost throne. Gaelin, for his part, still feels a crippling sense of guilt at his failure to protect Lily from the murderer's blade, and has become extremely devoted and fiercely protective of the young princess. What started as a desire to sail down the Crawling Coast to reach the city of Riggs, known to sell everything in the known world, in search of a cure, ends up turning into an adventure on the high seas, as the pair crash head-first into pirates, illegal weapons, and a Druid with a talking bear as her companion. They can never have a normal adventure, can they?",
        onSale: false,
        audioBook: false
    },
    {
        id: 10,
        title: "The Long Road of Adventure: Hero's Tomb (Book 3)",
        coverArtist: "Charleian Brown",
        coverImage: "TheLongRoadofAdventureHero'sTomb(Book3)",
        series: 2,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B07H197NMR",
        publishDate: "8/31/2018",
        synopsis: "Having met new friends and taken down a pirate warlord, Gaelin and Lily are ready for new adventures! And what better adventure than searching for the legendary lost tomb of the Hero-King himself? And so Gaelin, Lily, Vala and Bigg Guy set out to locate a place that many have sought, but none have found. And so it is they go into the Starblind Mountains! Hidden villages, mysterious portents, and lots of dangerous hiking await! But there are things in the dark that seek to eradicate the great hero's legacy, and reduce all of his achievements and glory to nothingness, along with any who dare to look for it. Can these four adventurers claim the mantle of 'hero' they so desire, or will they find themselves as yet more casualties to add to the pile?",
        onSale: false,
        audioBook: false
    },
    {
        id: 11,
        title: "The Long Road of Adventure: Champion's Crown (Book 4)",
        coverArtist: "Charleian Brown",
        coverImage: "TheLongRoadofAdventureChampion'sCrown(Book4)",
        series: 2,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B07T3V7V1X",
        publishDate: "6/14/2019",
        synopsis: "With the vast riches of the once long-lost tomb of the Hero-King under their control, and the fabulous amount of fame and popularity that comes with it, Gaelin and Lily are ready to tackle what promises to be their hardest fight yet: Confronting Duke Jethrow Orlon, Lily's own grandfather, and the man who usurped her throne, driving her into exile all those years ago. Armed with knowledge, power, and more gold than they know what to do with, the two adventurers prepare to return to the kingdom of Tashel where it all began. But the shadows reek of danger, and assassins are on the prowl. Not to mention the difficulty in getting dozens of nobles to side with Lily in what promises to be a bloody civil war! Yet all adversity will be met headlong, for they have shed too much blood, sweat and tears to make it this far to just give up. Gaelin will crown his dear friend Lily as Queen, or die trying.",
        onSale: false,
        audioBook: false
    },
    {
        id: 12,
        title: "The Long Road of Adventure: Land of Broken Dreams (Book 5)",
        coverArtist: "Charleian Brown",
        coverImage: "TheLongRoadofAdventureLandofBrokenDreams(Book5)",
        series: 2,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B089ZJBQWY",
        publishDate: "6/9/2020",
        synopsis: "He's done what few other men could, and accomplished what countless adventurers failed to do. Gaelin Arcros, Dark Horse of Tashel, has succeeded where others failed, and crowned his best friend as queen of her homeland. Gaelin currently faces a serious question: What to do now? A grand adventure, of course! With Vala and Bigg Guy at his side, Gaelin prepares to venture into the twisted ruins of humanity's original homeland; the continent of Val'Narash. Sundered by the Void millennia ago, ancient treasures still linger in crumbling temples and fortresses, guarded by rogue golems and magical traps. As mysterious dreams continue to visit Gaelin, pushing him towards a destiny he has no idea of, the gods watch and wait. Will he accept his role as Chosen One, or will Fate have to force him?",
        onSale: false,
        audioBook: false
    },
    {
        id: 13,
        title: "The Chained Maiden: Bound by Truth (Book 1)",
        coverArtist: "Damien Sim",
        coverImage: "TheChainedMaidenBoundbyTruth(Book1)",
        series: 3,
        world: 1,
        amazonLink: "https://www.amazon.com/dp/B0772T8D51",
        publishDate: "11/1/2017",
        synopsis: "What would you do to keep your innocence intact while trapped in a world of depravity? That is a question Dora has asked herself for two years now. Living in the Dreadlands is hard. Trying to make a living as a slave trader while retaining a vestige of humanity and common decency? Even harder. And when half of your humanity is already gone due to being a half-orc? At that point, most people would give up. Not Dora. She refuses to let the Dreadlands beat her down. Even when confronted by the horrors she herself is an accomplice to. But when ordered to deliver a mysterious slave to the infamous City of Slaves, Dora has to make a choice; let the truth set her free, or condemn another soul to a fate worse than death.",
        onSale: false,
        audioBook: false
    },
    {
        id: 14,
        title: "The Chained Maiden: Bound by Hope (Book 3)",
        coverArtist: "Charleian Brown",
        coverImage: "TheChainedMaidenBoundbyHope(Book3)",
        series: 3,
        world: 1,
        amazonLink: "https://www.amazon.com/dp/B07N98GNBZ",
        publishDate: "1/31/2019",
        synopsis: "Dora has survived a demonic cult, saved a city from being overrun by Undead, and has struggled to find a way to rescue her family. Now, the time has come for her to finally take back what belongs to her! Armed with knowledge gifted to her by an ancient and vile being in exchange for a future favor, Dora sets out to invade the lost city of Targua to liberate the kidnapped Yellowmoon Menagerie. Unfortunately for Dora and her friends, Targua just so happens to be trapped in another dimension entirely, guarded by slavering demons, and accessible only through the power of the God of the Hunt's avatar. And par for the course for Dora's luck, the avatar has also gone missing. Now it's up to Dora to venture deep into the Dread Jungle, homeland of the orcs, to locate the reclusive avatar and save her family. And she's going to need every ounce of luck and skill she and her friends can bring in order to succeed! Erafore may never be the same again.",
        onSale: false,
        audioBook: false
    },
    {
        id: 15,
        title: "The Chained Maiden: Bound by Fate (Book 4)",
        coverArtist: "Charleian Brown",
        coverImage: "TheChainedMaidenBoundbyFate(Book4)",
        series: 3,
        world: 1,
        amazonLink: "https://www.amazon.com/dp/B07X6NSZTT",
        publishDate: "8/31/2019",
        synopsis: "Dora has not had an easy life. She has struggled and fought for almost everything, and although she rescued the Yellowmoon Menagerie - the closest thing to a family she has left - from the demon-infested ruins of the Lost City of Targua, she has been cast adrift through the Aether. Now lost in a realm of pure magic and fantasy, Dora and her friends Enrai and Ain must find a way back to Erafore without rousing the ire of any gods, demons, or powerful entities. But the half-orc Healer is being manipulated from afar and stalked by dark forces, and her return may not come easily to her, as her status as a Chosen One rears its head, and begins to make life difficult.",
        onSale: false,
        audioBook: false
    },
    {
        id: 16,
        title: "My Life As A High School Dragon Tamer: After School Fantasy (Book 1)",
        coverArtist: "",
        coverImage: "MyLifeAsAHighSchoolDragonTamerAfterSchoolFantasy(Book1)",
        series: 4,
        world: 3,
        amazonLink: "https://www.amazon.com/dp/B0859N55M8",
        publishDate: "2/27/2020",
        synopsis: "Jake Trevors has had one heck of a year. Right when he's supposed to start his first day of being a high school Sophomore, the world ends. Funny, right? Not really. All electronics stop working across the globe, cutting off communications, and bizarre flora erupts from nowhere, surrounding and trapping the citizens of Leftright, PA. Now, he and his friends and family are holed up in the school building, surviving day to day as strange, mysterious, and bloodthirsty creatures roam the woods outside their small sliver of safe territory. But are the monsters really all that bad? And what caused the apocalypse? Jake Trevors intends to find out the answers to both questions!",
        onSale: false,
        audioBook: false
    },
    {
        id: 17,
        title: "My Life As A High School Elf Helper: After School Fantasy (Book 2)",
        coverArtist: "",
        coverImage: "MyLifeAsAHighSchoolElfHelperAfterSchoolFantasy(Book2)",
        series: 4,
        world: 3,
        amazonLink: "https://www.amazon.com/dp/B08XQ62XFB",
        publishDate: "2/28/2021",
        synopsis: "It has been a few months since Jake and his scaly buddy, Isaac the Dragon, learned the horrifying - and rather unexpected - cause of the apocalypse known as the Fantasy which caused a monsters and magic to flood from another world into Earth. The seasons have changed. Winter has settled down upon the town of Leftright, leaving it blanketed in snow. And it is in the frozen depths of the Mess that Jake discovers something - or rather, someone! - completely new. An elf from the other world, trapped in his! With the various factions of post-apocalyptic Pennsylvania roused by this newcomer, Jake has to decide if he should follow the elf out of the Mess and into the wider world on a dangerous mission. For they claim that both worlds are in danger so long as the rifts in time and space persist! Does he remain safe in Leftright, or will Jake venture out to discover a way to save two civilizations from mutual destruction?",
        onSale: false,
        audioBook: false
    },
    {
        id: 18,
        title: "Raise High Your Flags! (Magical Guns Book 1)",
        coverArtist: "",
        coverImage: "RaiseHighYourFlags!(MagicalGunsBook1)",
        series: 5,
        world: 2,
        amazonLink: "https://www.amazon.com/dp/B08K8CWDFS",
        publishDate: "9/27/2020",
        synopsis: "When Sergeant Kane Thread of the 231st Imperial Magic Gunners Squad receives his latest deployment orders, he and his men are thrust into the center of intrigue between three world super powers: L'Imperium Reverie, the Tiirgun Khanate, and the Elemental Temple of Ghor. Tensions are high between humans, beastfolk, and orcs, and a single mistake could spell the beginning of an era of bloodshed never seen before! Can Kane complete his duty, his mission, without sparking a world-wide conflict? What secrets are hidden in the dusty mine he's been ordered to guard? And will he be able to overcome his shameful past? Only the Spirits know the answers...",
        onSale: false,
        audioBook: false
    },
    {
        id: 19,
        title: "Never Retreat Never Surrender (Magical Guns Book 2)",
        coverArtist: "",
        coverImage: "NeverRetreatNeverSurrender(MagicalGunsBook2)",
        series: 5,
        world: 2,
        amazonLink: "https://www.amazon.com/dp/B099KSQ57Q",
        publishDate: "7/14/2021",
        synopsis: "War has come to the empire. The beastfolk of the Tiirgun Khanate and the orcs of the Ghor Theocratic Kingdom have allied together against mankind, and prepare to launch their assaults. But the L'Imperium Reverie will not go down without a fight, and countless soldiers, from ordinary infantry to elite mages, are transferred to battlefields across the globe. Warrant Officer Kane Thread, Plague of Archen and now newly dubbed Savior of Baruda, is sent with his squad of Magic Gunners to the Gravel Coast, where orcs have invaded one of the empire's colonies. It will not be an easy fight. The orcs may seem primitive, but they have powerful magic on their side which rivals the empire's. Ordered to fight in a desperate guerilla war in order to stall the enemy long enough for the empire to build up its counter invasion forces, Kane and his men will be faced with danger and intrigue on all sides. But like always, they shall do their duty.",
        onSale: false,
        audioBook: false
    },
    {
        id: 20,
        title: "Not The End: An anthology of short stories and novellas about death, ghosts, the supernatural and what happens afterwards",
        coverArtist: "Damien Sim",
        coverImage: "NotTheEndAnanthologyofshortstoriesandnovellasaboutdeath,ghosts,thesupernaturalandwhathappensafterwards",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/dp/B01M6VASGJ",
        publishDate: "10/10/2016",
        synopsis: "The world is full of mysteries that go deeper than anyone can truly fathom. From a brush with the divine to an encounter with a ghost. There are a million tales for a million impossibilities. Nine stories now lie before you, about life and death and the wonders born from both that continue into infinity. Because in the end, there are only beginnings.",
        onSale: false,
        audioBook: false
    },
    {
        id: 21,
        title: "Caging the Soul: A short story from the anthology (Not the End)",
        coverArtist: "",
        coverImage: "NotTheEndAnanthologyofshortstoriesandnovellasaboutdeath,ghosts,thesupernaturalandwhathappensafterwards",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/gp/product/B076386MKY",
        publishDate: "9/30/2017",
        synopsis: "Matter cannot be created, nor destroyed. Then what about the soul? Where does it go when the end comes? I will find that answer. I will discover all the secrets of the afterlife. Ghosts and spirits shall no longer be the realm of fantasy, but of science! No one shall stop me. I will find the answers, and I will save this dying world!",
        onSale: false,
        audioBook: false
    },
    {
        id: 22,
        title: "Hell is Other People: A short story from the anthology (Not the End)",
        coverArtist: "",
        coverImage: "NotTheEndAnanthologyofshortstoriesandnovellasaboutdeath,ghosts,thesupernaturalandwhathappensafterwards",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/gp/product/B07637NLG4",
        publishDate: "9/30/2017",
        synopsis: "The afterlife is filling up. Too many people are dying, and Purgatory is suffering a severe overpopulation crisis. So, what can the guardians of souls do? Make some of the 'Not quite bad but certainly not saintly' souls do community service in H-E-Double Hockey Sticks!",
        onSale: false,
        audioBook: false
    },
    {
        id: 23,
        title: "Tales of Erafore: The Headsman",
        coverArtist: "Sanja Radenkovic",
        coverImage: "TalesofEraforeTheHeadsman",
        series: 6,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B0796DGCP3",
        publishDate: "1/20/2018",
        synopsis: "Erafore! A world of magic and mystery! Of adventures and dragons! But it is the people who make the planet, and Erafore's inhabitants are many and varied. In the kingdom of Varia, there is a position as feared as it is vaunted; the Royal Headsman, personal executioner of the royal family, dispenser of harsh justice for the crown, and warden of the infamous Tower of Chains, the premier prison for malcontents and criminals. For years, Varda has served loyally as the Headsman, watching over the Tower of Chains and swiftly dealing Kardale's Price upon those who break the law. He has never wavered in his duty in all his years of obedience. And yet, one day, a traitor to Varia is brought to him, and he finds himself confused. Is this really justice? And can he bring himself to destroy this seemingly innocent person?",
        onSale: false,
        audioBook: false
    },
    {
        id: 24,
        title: "Fiction As Strange As Real Life",
        coverArtist: "Damien Sim",
        coverImage: "FictionAsStrangeAsRealLife",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/dp/B074H62MQW",
        publishDate: "8/2/2017",
        synopsis: "There are beautiful mysteries in this world that can never be truly understood. How can dragons breathe fire? How do Gravitonic Suspensor Units function? Why are those 10th Dimensional Horrors so interested in eating all memories of pudding in the universe? Why do mosquitoes exist? Sometimes it might be better to leave some questions unanswered. Sometimes, though, real life can be just as confusing and bewildering as the most exaggerated fiction. Because in the end, stories reflect our own world. And people will always wonder what kind of world could possibly produce such mysterious and bizarrely creative stories as these thirteen before you today. Fiction is as strange as real life. Because real life is filled with wonders we strive to understand, even if it seems impossible.",
        onSale: false,
        audioBook: false
    },
    {
        id: 25,
        title: "Behind Your Back",
        coverArtist: "",
        coverImage: "BehindYourBack",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/dp/B07QHDNNFD",
        publishDate: "6/15/2019",
        synopsis: "Samantha Lowe has a good life. She's the mother of three wonderful - if sometimes boisterous- daughters, has a loving husband, and a full-filling job as a hairdresser. But there are secrets she keeps, truths she has done her best to hide from her family. Because Samantha Lowe is not all that she seems. And when a dark figure from her past resurfaces, it's up to her to save her family from the evils that lurk in the darkness. Even if it means hurting the ones she loves in process. After all, such is the price of magic... A tale of redemption, love, and most of all, family. Because these are what matter most, especially in a world of mystery and secrets. This story is a proud winner of the 2018 NaNoWriMo contest.",
        onSale: false,
        audioBook: false
    },
    {
        id: 26,
        title: "The Chained Maiden: Bound by Lies (Book 2)",
        coverArtist: "Charleian Brown",
        coverImage: "TheChainedMaidenBoundbyLies(Book2)",
        series: 3,
        world: 1,
        amazonLink: "https://www.amazon.com/dp/B07BZPG6BW",
        publishDate: "4/6/2018",
        synopsis: "It has been many months since Dora and the Yellow Moon Menagerie left Annod Bol. Everything seems peaceful. As peaceful as the Dreadlands can be, that is. However, it is not to last, as two mysterious travelers cross her path, and kick off a series of events that leave the Menagerie in ruins, her friends, boss, and potential father captured by unknown forces, and herself joining the two travelers in a quest to retrieve a kidnapped child, whose promised return is all that is keeping a war between the two superpowers of the Second Elfish Domain and the Celestial Empire of Qwan from breaking out. To save her family, and to help her new friends, Dora must travel into the sweltering desert of Saluda to save a city from being overrun by a plague of Undead. But besides from being pursued by a strange creature with an unknown purpose, but Dora must survive court politics and multiple plots all hinging on her very existence. Is it really to much to ask for just a normal life?",
        onSale: false,
        audioBook: false
    },
    {
        id: 27,
        title: "Welcome to the Galactic Shoppers Network",
        coverArtist: "Damien Sim",
        coverImage: "WelcometotheGalacticShoppersNetwork",
        series: 6,
        world: 5,
        amazonLink: "https://www.amazon.com/dp/B077KJ8YZY",
        publishDate: "11/15/2017",
        synopsis: "The Galaxy is a big, bustling place, and no one knows that better than Sandra, a young woman who travels from system to system, selling goods to alien races. When she comes across a small store on the edge of the galaxy, she finds herself drawn into a world of intrigue, politics, and a customer base with very particular needs. From mechanical dragons with a taste for fine jewelry to gourmets with a craving for exotic alien meats, Sandra's customers are as varied as the stars. Along the way, she must navigate the dangers of space travel, deal with shady characters, and stay one step ahead of the law. Welcome to the Galactic Shoppers Network, where the customer is always right, even when they're not entirely human.",
        onSale: false,
        audioBook: false
    },
    {
        id: 28,
        title: "A Tree in the Clouds (Green Skies Book 1)",
        coverArtist: "@Sacred_templar",
        coverImage: "GreenSkyATreeInTheClouds(Book1)",
        series: 7,
        world: 4,
        amazonLink: "https://www.amazon.com/dp/B09HYTWNMH",
        publishDate: "10/8/2021",
        synopsis: "A life of freedom and adventure! That\'s all Floin of the Squirrel Tribe has ever wanted. Traveling across the magical land of Flores in his flying treehouse, he has spent his days in quiet and peace. His solitude is broken, however, when he ends up rescuing Ruvia, a young lady of the Squirrel Tribe, from mysterious Rat Tribe assassins. Caught up in events he doesn\'t understand, Floin must decide if he will abandon an innocent person to a dark fate and resume his ordinary life, or help her by returning to a life he thought he�E€�Ed left behind.",
        onSale: false,
        audioBook: false
    },
    {
        id: 29,
        title: "Chronicles of a Royal Pet: Jade Eclipse (Royal Ooze Chronicles Book 8)",
        coverArtist: "Brandon Choo",
        coverImage: "ChroniclesofaRoyalPetJadeEclipse(RoyalOozeChroniclesBook8)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/dp/B09NMSZQ8K",
        publishDate: "12/15/2021",
        synopsis: "Having escaped the Aether with Dora and Gaelin, Jelly is relieved, and eager to return to Orria and reunite with his beloved princess. However, that is easier said than done, and after drifting for several days across the ocean on an iceberg, Jelly and his friends find themselves in Distant Qwan, an exotic land of ancient magic and tradition.\nUnaware that their presence has been noticed by their enemies, Jelly, Dora, and Gaelin find themselves called by Fate into a series of conflicts that will see them drawn towards the legendary Jade Palace, where numerous evils lurk and wait to strike, sending the country into chaos and madness.\nThe Void is calling. Are Nia\ufffdE\ufffd\ufffdEs Chosen Ones ready to face their destiny?",
        onSale: false,
        audioBook: false
    },
    {
        id: 30,
        title: "My Life As A High School Explorer (After School Fantasy Book 3)",
        coverArtist: "Shin Kokamugithu",
        coverImage: "MyLifeAsAHighSchoolExplorer(AfterSchoolFantasyBook3)",
        series: 4,
        world: 3,
        amazonLink: "https://www.amazon.com/gp/product/B09TRX6FJB",
        publishDate: "3/3/2022",
        synopsis: "After finally leaving the monster-infested ruins of Pennsylvania behind, Jake has to escort his misplaced elf friend Eppelech to her own world in order to find a solution to the magical mayhem plaguing his.\nUnfortunately for them, the only permanent portal that will take them back to the world of Seelie is all the way across the country in Hollywood.\nWatch as Jake and his friends have to bike across a post-apocalyptic US, dealing with wayward monsters, frightened civilians, and people who want to use and abuse magic and monsters for their own agendas!",
        onSale: false,
        audioBook: false
    },
    {
        id: 31,
        title: "Secrets of the Lost Legacy (Magical Guns Book 3)",
        coverArtist: "",
        coverImage: "SecretsOfTheLostLegacy(MagicalGunsBook3)",
        series: 5,
        world: 2,
        amazonLink: "https://www.amazon.com/gp/product/B0B6GZ86XX",
        publishDate: "7/16/2022",
        synopsis: "The empire's war against the orcs and the beastfolk has raged on, and no end is in sight. The trenches of the east run red with blood, and the sands of the south hide numerous dangers. Unrest boils within the empire itself, and their own allies begin to waver.\nIn the midst of all this chaos, Warrant Officer Kane Thread is reassigned to an important diplomatic mission; guarding the empire's ambassador to the elves of Alfheim. Treachery and intrigue await the mages of Magic Gunner Squad 231, and it is up to Kane to help his men survive the cut-throat politics of the land of the elves.",
        onSale: false,
        audioBook: false
    },
    {
        id: 32,
        title: "A Tree Among Hills (Green Skies Book 2)",
        coverArtist: "",
        coverImage: "GreenSkiesATreeAmongHills(Book2)",
        series: 7,
        world: 4,
        amazonLink: "https://www.amazon.com/gp/product/B0BCNG7WQ6",
        publishDate: "9/2/2022",
        synopsis: "Floin and Ruvia just wanted a vacation. After all, they'd just helped elect a new king for the squirrels and thwarted the murderous ambitions of an arrogant clan. Was it too much to ask for some time off after that? But sadly, duty calls.\nMysterious forgeries of ancient rabbit and mice relics have begun to flood the antiquities market, not to mention vast amounts of gold and other precious metals and jewels that seemingly have no origin, and Floin and Ruvia are hired to discover the truth behind these items before Flores' economy crashes.\nAs the two squirrels investigate, they discover a web of lies, missing Thinkers, and rumors about haunted ruins, all while an enemy from Floin's past attempts to ruin their plans.\nJust another day for the Amber Blade and his Goldsinger friend.",
        onSale: false,
        audioBook: false
    },
    {
        id: 33,
        title: "My Life as a High School Planeswalker (After School Fantasy Book 4)",
        coverArtist: "Davide Voltarel",
        coverImage: "MyLifeasaHighSchoolPlaneswalker(AfterSchoolFantasyBook4)",
        series: 4,
        world: 3,
        amazonLink: "https://www.amazon.com/Life-School-Planeswalker-After-Fantasy-ebook/dp/B0BY5TXKWG",
        publishDate: "3/13/2023",
        synopsis: "Jake and his friends have done it! They've managed to travel across the Fantasy scarred American countryside and reach California! But things do not get easier after passing through the portal. The world on the other side is hostile and alien, and the situation is no better in Seelie than it is on Earth. Can they help save two worlds, even as the threat of war between humans and elves looms on the horizon?",
        onSale: false,
        audioBook: false
    },
    {
        id: 34,
        title: "Tattered White Flag (Magical Guns Book 4)",
        coverArtist: "Jin Godai",
        coverImage: "TatteredWhiteFlag(MagicalGunsBook4)",
        series: 5,
        world: 2,
        amazonLink: "https://www.amazon.com/gp/product/B0C8ZQSN8W",
        publishDate: "6/24/2023",
        synopsis: "The war grinds on, the Empire holding fast against the beastfolk of the Khanate and and the orcs of Ghor. Talks of peace are whispered in the shadow all while new discoveries about the past shed light on the events currently happening.\nIn the midst of all this, Kane Thread and his squad are being sent on one final mission to bring the war to an end. But the odds of their success, as well as their chances of survival, are low. Yet he will not hesitate. The war must end. One way or another.",
        onSale: false,
        audioBook: false
    },
    {
        id: 35,
        title: "Chronicles of a Royal Pet: The World Turns (Royal Ooze Chronicles)",
        coverArtist: "Brandon Choo",
        coverImage: "ChroniclesofaRoyalPetTheWorldTurns(RoyalOozeChroniclesBook9)",
        series: 1,
        world: 1,
        amazonLink: "https://www.amazon.com/gp/product/B0BNTYZVC1",
        publishDate: "12/1/2022",
        synopsis: "It's all come down to this. Jellik and his friends have traveled Erafore and beyond, training and preparing for the final confrontation against the World Rebellion. But are the three Chosen Ones able to unite a divided world against the existential threat? And can they make it to the site of the final battle on time, before the Void cult condemns everyone they know and love to nothingness?",
        onSale: false,
        audioBook: false
    },
    {
        id: 36,
        title: "God of the Freshmen (The Human Experience Book 1)",
        coverArtist: "",
        coverImage: "GodOfTheFreshman(TheHumanExperienceBook1)",
        series: 8,
        world: 15,
        amazonLink: "https://www.amazon.com/God-Freshmen-Human-Experience-Book-ebook/dp/B0CP6JJSYS",
        publishDate: "11/28/2023",
        synopsis: "Samastol is a young god of pranks, but after one of his tricks goes too far and nearly causes the destruction of an entire world, he is banished to Earth to live as a human as punishment.\nHowever, Earth is not all that it seems. Old, forgotten powers stir in the shadows, awakened by Samastol's arrival. Can he learn to be human while also protecting the world from forces that seek to destroy it?",
        onSale: false,
        audioBook: false
    }
];

const worlds = [
    {
        id: 1
        , name: 'Erafore'
        , description: 'A large and magical world brimming with life and filled with mysteries. With seven continents and a myriad of strange and wonderful species and civilizations adorning it, Erafore is home to countless adventurers, heroes, and villains. Watched over by gods and goddesses both malevolent and benign, the lands are home to stories and myths that resonate across time and space.'
    }
    , {
        id: 2
        , name: 'Terra'
        , description: 'As the legend goes, five spirits visited the world that would one day be known as Terra, and gifted it with life and power. Magic flows through the veins of both its people, and the planet. Harnessing the crystalized form of magical energy known as �E€�ESacrum,�E€�E mankind has entered an industrial revolution where their machines and society is fueled by magic itself. Clean and renewable, the mighty L�E€�EImperium Reverie dominates the field of magi-tech, developing new ways to help humanity ascend. But not all are pleased by this. Opposing the empire�E€�Es rise are the Tiirgun Khanate, a hegemony of beastfolk, and the superstitious orcs of Ghor. Tension grows, and all of this is watched over by the aloof and mysterious elves of Alfheim. War is inevitable. But who will emerge victorious from the greatest conflict Terra has ever seen?'
    }
    , {
        id: 3
        , name: 'Messy Earth'
        , description: 'It happened without warning. In September, on the first day back to school for the town of Leftright Pennsylvania, the world stopped making sense. Struck first by a massive EMP that wiped out all technology, then invaded by unnaturally fast-growing flora and strange, otherworldly fauna, the town was cut off from the rest of the country. Surrounded by the Mess, a strange land of magical critters and plants, the people of Leftright have struggled to survive what is without a doubt the most unusual apocalyptic scenario they could envision. But they have endured, and now, there is hope that someone might find a way out to contact help from the rest of the world. Assuming it hasn\'t been devoured completely by the Mess and its monsters, of course.'
    }
    , {
        id: 4
        , name: 'Flores'
        , description: 'A vibrant land inhabited by numerous tribes of Thinkers, those animals who through luck and skill obtained sapience. Magical songs echo through Flores, animating trees for flight, and molding the dirt and stone into sturdy houses. But not all is as peaceful as it seems. Beneath the canopy of trees, monsters with a lust for flesh and blood lurk, and in the southern Panorama Wastes, the Rat Tribe seethes with ancient grudges and stares jealously at the wealth and wonder of the other tribes of Flores. The  Symphony is loud with the hate and fear of countless species. And the shadows of abominations long thought vanquished writhe, eagerly awaiting the chance to rise once more.'
    }
    , {
        id: 5
        , name: 'Standalone'
        , description: 'Works that are not part of any particular world.'
    }
    , {
        id: 6
        , name: 'The Human Experience'
        , description: 'Description coming soon.'
    }
] ;

const series = [
    {
        id: 1
        , name: "Royal Ooze Chronicles"
        , description: "Fate can be strange, sometimes. Jelly was nothing more than an ordinary, mindless Ooze, yet he was adopted by the princess of the Kingdom of Varia, and through her love (and a heaping dose of magic!) has his sentience awakened. Now, Jelly does whatever he can to protect the people he loves from countless dangers. But can a monster truly become a man?"
        , world: 1
        , dateStarted: "1/21/2017"
    }
    , {
        id: 2,
        name: "Long Road of Adventure",
        description: "An act of bravery and kindness can change the world. Gaelin is a young man who wants to become a famous adventurer. Lily is a young princess who wants to escape the assassins her power-hungry grandfather has sent after her. The two unlikely companions travel across Erafore together seeking their destinies after a chance encounter in a bar.",
        world: 1,
        dateStarted: "9/11/2017"
    }
    , {
        id: 3,
        name: "The Chained Maiden",
        description: "For light to exist, there must first be darkness. For good to rise, evil must thrive. Dora is a half-orc who struggles with these painful truths constantly. Ostracized for her mixed blood, she has no choice but to make a living in the harsh and desolate Dreadlands as a peddler of flesh. Yet one day, her fellow slavers are tasked with delivering a mysterious young woman to the infamous City of Pillar, a hellish place where no slave ever escapes. Can Dora continue to avert her gaze away from the crimes she commits, or will she finally stand up and try to do what is right? Even if it means the death of her, and everyone she knows?",
        world: 1,
        dateStarted: "10/31/2017"
    }
    , {
        id: 4,
        name: "After School Fantasy",
        description: "It happened so suddenly, no one could explain it. Known as the Fantasy, all across the world every kind of electronics failed, and plants began to grow at supernatural speeds, cutting off communities from each other. Hundreds of people vanished into thin air! Last but not least, strange, abnormal creatures began to appear and hunt down the survivors! In the two years since Pennsylvania was cut off from the rest of the world by the Mess, an ever expanding, monster infested forest, Jake Smith has braved the woods in search of supplies for the survivor communities in his hometown of Leftright. One day, he discovers and rescues a baby dragon, and Jake begins to discover that there may be more to the Fantasy and the Mess than anyone has realized.",
        world: 3,
        dateStarted: "2/27/2020"
    }
    , {
        id: 5,
        name: "Magical Guns",
        description: "Tensions are growing, and war looms like a dark cloud over the head of Kane Thread, magician and soldier in the armies of L'Imperium Reverie, the largest human nation in the world. Stationed in a foreign mine to protect the precious shipments of Sacrum, the solid, crystalline fuel that powers the empire's magi-tech machines, Kane must do everything he can to prevent sparks from flying and igniting the greatest war ever seen. But not everyone agrees with peace. From the antagonistic beastfolk of the Tiirgun Khanate to the superstitious orcs of Ghor, there are numerous threats which are closing in every day. Kane Thread will do his duty, however, or die trying.",
        world: 2,
        dateStarted: "9/27/2020"
    }
    , {
        id: 6,
        name: "Standalone",
        description: "Books that are not part of any particular series.",
        world: 5,
        dateStarted: "10/10/2016"
    }
    , {
        id: 7,
        name: "Green Skies",
        description: "For years, Floin has explored the land of Flores freely and alone. He has seen the frozen north, and glimpsed the hot sands of the south. He has fought monsters of all shapes and sizes and emerged victorious each and every time. His adventures are about to change, however, when he rescues a young maiden from the blades of perfidious assassins. Caught up in a mystery that stretches across entire nations, Floin must choose to either return to his lonesome ways, or return to a life he thought he'd left behind.",
        world: 4,
        dateStarted: "10/8/2021"
    }
    , {
        id: 8,
        name: "The Human Experience",
        description: "Coming Soon!",
        world: 6,
        dateStarted: "11/28/2023"
    }
];

module.exports = {
    books,
    series,
    worlds
};
