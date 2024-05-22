/* eslint-disable camelcase */
/**
 * !!! !!!
 * DO NOT modify the existing entries, if ANY saves were created with them.
 * !!! !!!
 *
 * Different versions of predefined dictionaries used by save file compressor.
 *
 * It is not recommended to update it frequently, because:
 * 1) all dictionary versions have to be kept, so save from any version could be loaded
 * 2) the save cannot be loaded by previous game versions.
 *
 * To add more values to the default compressor dictionary:
 * 1. Create a new dictionary with unique id (see template below).
 * 2. Copy its body from the previous dictionary.
 * 3. Add new values to new dictionary.
 * 4. Update COMPRESSOR_CURRENT_DICTIONARY_ID game/03-JavaScript/save.js to use new dictionary.
 *
 * !!! !!!
 * DO NOT modify the existing entries, if ANY saves were created with them.
 * !!! !!!
 */
const DoLCompressorDictionaries = (() => {
	const v0_mostCommonvalues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, null, "undefined", "t", "f", "n"];
	const v0_variableNames = [
		"BeastList",
		"BlackWolfHunts",
		"Character",
		"GreatHawkHunts",
		"Main",
		"NPCList",
		"NPCName",
		"NPCNameList",
		"NPC_names_f",
		"NPC_names_m",
		"NudeGenderDC",
		"S",
		"_",
		"aNewBestFriend",
		"abomination",
		"accIcon",
		"acceptance_breasts_big",
		"acceptance_breasts_small",
		"acceptance_breasts_tiny",
		"acceptance_penis_big",
		"acceptance_penis_small",
		"acceptance_penis_tiny",
		"accessory",
		"accessory_colour",
		"accessory_colour_combat",
		"accessory_colour_options",
		"accessory_colour_sidebar",
		"action",
		"actionDefaults",
		"active",
		"active_enemy",
		"adult",
		"adultShop",
		"adultshopcontribution",
		"adultshopintro",
		"adultshopprogress",
		"adultshopstate",
		"aftermorningpills",
		"agreed",
		"alarm",
		"alex",
		"alexFarm",
		"allSaves",
		"allure",
		"alluremod",
		"alluretest",
		"alwaysBackToShopButton",
		"amount",
		"anal",
		"analPain",
		"anal_shield",
		"analchastity",
		"analchastityparasite",
		"analdisable",
		"analdoubledisable",
		"analdoublestat",
		"analejacstat",
		"analingusdisablegiving",
		"analingusdisablereceiving",
		"analpregdisable",
		"analskill",
		"analskillup",
		"analstat",
		"angel",
		"angelBanish",
		"angelBanishMax",
		"angelbuild",
		"angelforgive",
		"animalsemenswallowedstat",
		"animations",
		"antiquebell",
		"antiquebox",
		"antiquebrassstatuette",
		"antiquebullet",
		"antiquecandlestick",
		"antiquecoppercoin",
		"antiquecoppercompass",
		"antiquecoralring",
		"antiquecrystal",
		"antiquecutlass",
		"antiquediamond",
		"antiquedildo",
		"antiqueforestarrow",
		"antiqueforestdagger",
		"antiqueforestgem",
		"antiquegoldbrooch",
		"antiquegoldchastitybelt",
		"antiquegoldcoin",
		"antiquegoldnecklace",
		"antiquegoldring",
		"antiquegrenade",
		"antiquehorn",
		"antiquehourglass",
		"antiqueivorynecklace",
		"antiqueivorystatuette",
		"antiqueleathermap",
		"antiquemoney",
		"antiquemoneyhistory",
		"antiquerustedcutlass",
		"antiques",
		"antiqueshell",
		"antiquesilverblade",
		"antiquesilverbrooch",
		"antiquesilvercoin",
		"antiquesilvercompass",
		"antiquesilvercrown",
		"antiquesilverdagger",
		"antiquesilvergoblet",
		"antiquesilvermask",
		"antiquesilverring",
		"antiquestonetalisman",
		"antiquestrangefetish",
		"antiquetrashburner",
		"antiquetrashcup",
		"antiquewatch",
		"antiquewhitecrystal",
		"anus",
		"anusWetness",
		"anus_climax",
		"anus_exposed",
		"anus_exposed_base",
		"anusaction",
		"anusactioncarry",
		"anusactioncarryorgasm",
		"anusactioncarrypain",
		"anusactiondefault",
		"anusbruise",
		"anusstate",
		"anustarget",
		"anususe",
		"anxiety",
		"apologised",
		"appearance",
		"area",
		"arousal",
		"arousalmasochism",
		"arousalmax",
		"arrayList",
		"arrow",
		"askAction",
		"askActionColour",
		"askedtochoke",
		"asphyxiaLvl",
		"ass",
		"assertive",
		"assertiveaction",
		"asylum",
		"asylum's prescription",
		"asylum_plot_intro",
		"athletics",
		"athleticsSuccess",
		"attackstat",
		"attention",
		"attitudesControl",
		"attractiveness",
		"audience",
		"audiencearousal",
		"audiencecamera",
		"audiencecamera1",
		"audiencecamera2",
		"audiencecamera3",
		"audiencecamera4",
		"audiencecamera5",
		"audiencecamera6",
		"audiencedesc",
		"audienceexcitement",
		"audienceforceboy",
		"audienceforcegirl",
		"audienceforceteen",
		"audiencemember",
		"audiencemod",
		"audiencepresent",
		"audienceselector",
		"auto",
		"autoRepairDone",
		"autoReset",
		"autoTake",
		"autosaveDisabled",
		"available",
		"availableMapsVersion",
		"averyschoolpickup",
		"averyseen",
		"awareOf",
		"awarelevel",
		"awareness",
		"awareselect",
		"bEnd",
		"bStart",
		"back",
		"back_img",
		"background",
		"backgroundTraits",
		"baileyOverdue",
		"baileydefeated",
		"baileydefeatedchain",
		"baileydefeatedlewd",
		"baileyhospital",
		"baileypaychain",
		"balls",
		"ballsExist",
		"ballsgrowthtimer",
		"ballssize",
		"ballssizemax",
		"ballssizemin",
		"ban",
		"banCount",
		"banExtension",
		"bartendaction",
		"baseAllure",
		"baseDays",
		"baseDaysRng",
		"baseNPC",
		"baseNpcPregnancyChance",
		"basePlayerPregnancyChance",
		"beastMotherStatus",
		"beastTypes",
		"beastgenderoverride",
		"beastmalechance",
		"beastname",
		"beastrapestat",
		"beauty",
		"beautymax",
		"bed",
		"bedroom",
		"beedisable",
		"bellySize",
		"bellydancer'sbottoms",
		"bellydancer'stop",
		"bellydancer'sveil",
		"bestiality",
		"bestialitydisable",
		"bestialitytrait",
		"bikiniBottom",
		"bikiniTop",
		"bimbo",
		"bimboMessage",
		"bimboTotal",
		"bird",
		"birdbuild",
		"birthday",
		"birthmonth",
		"blackchance",
		"blackchanceselector",
		"blackjack_played",
		"blackjack_streak",
		"blackjack_streak_high",
		"blackjack_won",
		"blackmoney",
		"blackwolfhunt",
		"blackwolfmonster",
		"blinkingEnabled",
		"body",
		"body_temperature",
		"body_temperature_outside",
		"bodyaction",
		"bodyliquid",
		"bodypart",
		"bodypart_number",
		"bodyparts",
		"bodypic",
		"bodysize",
		"bodywritingImages",
		"bodywritingLvl",
		"bodywritingdisable",
		"bold",
		"bottom",
		"bottom blocker",
		"bottom growth",
		"bottom reduction",
		"bottombruise",
		"bottomejacstat",
		"bottomgrowthtimer",
		"bottompic",
		"bottomsensitivity",
		"bottomsize",
		"bottomsizemax",
		"bottomsizemin",
		"bottomsizeold",
		"bottomskill",
		"bottomskillup",
		"bottomstat",
		"bottomuse",
		"boughtOnce",
		"boy",
		"breast",
		"breast blocker",
		"breast growth",
		"breast reduction",
		"breast_img",
		"breast_mod",
		"breastbitten",
		"breastdesc",
		"breastfeedingdisable",
		"breastgrowthtimer",
		"breastindicator",
		"breastpic",
		"breasts",
		"breastsdesc",
		"breastsensitivity",
		"breastsize",
		"breastsizemax",
		"breastsizemin",
		"breastsizeold",
		"brightness",
		"broken",
		"brothel",
		"brothel_basement_price",
		"brothel_raid",
		"brothel_raid_day",
		"brothel_thief",
		"brothelintro",
		"brotheljob",
		"brothelknown",
		"brothelshowdata",
		"browscolour",
		"bullyGate",
		"bullyevent",
		"bullyeventoutside",
		"bullytimer",
		"bullytimeroutside",
		"bunstat",
		"bus",
		"business",
		"bustresize",
		"buyMultiple",
		"calc",
		"capacity",
		"cardcover",
		"carried",
		"carryblock",
		"cat",
		"catbuild",
		"catsuit",
		"cattle_milked",
		"cbchance",
		"cdquest",
		"changingRoom",
		"changingroomstate",
		"characterLightEnabled",
		"chastity",
		"cheatdisable",
		"checkstyle",
		"cheek",
		"cheekaction",
		"cheekactioncarry",
		"cheekactioncarryorgasm",
		"cheekactioncarrypain",
		"cheekactiondefault",
		"cheeks",
		"chef_event",
		"chef_sus",
		"chefhat",
		"chest",
		"chestaction",
		"chestactioncarry",
		"chestactioncarryorgasm",
		"chestactioncarrypain",
		"chestactiondefault",
		"chestbruise",
		"chestejacstat",
		"chestskill",
		"chestskillup",
		"cheststat",
		"cheststate",
		"chesttarget",
		"chestuse",
		"childPassageExit",
		"children",
		"chill",
		"chill_day",
		"chimera",
		"chokeorgasm",
		"choketrait",
		"christmasdress",
		"christmashat",
		"christmaslegwarmers",
		"christmasshirt",
		"christmastrousers",
		"classyvampirejacket",
		"claws",
		"clit",
		"closeButtonMobile",
		"closinghour",
		"clothes",
		"clothesPrice",
		"clothesPriceLewd",
		"clothesPriceSchool",
		"clothesPriceUnderwear",
		"clothes_choice_integrity",
		"clothes_choice_previous",
		"clothes_choice_reveal",
		"clothesiconFile",
		"clothesruinstat",
		"clothesstripstat",
		"clothingCustomColors",
		"clothingGender",
		"clothingShop",
		"clothingShopSlot",
		"clothing_update",
		"clothingselector",
		"collared",
		"color",
		"colorSet",
		"colors",
		"colour",
		"colourItems",
		"colour_combat",
		"colour_options",
		"colour_sidebar",
		"colouraction",
		"colouraction2",
		"combat",
		"combatAnimations",
		"combatControls",
		"combatImages",
		"combatTrain",
		"combatWetBoost",
		"combatgoal",
		"combatimages",
		"combattype",
		"community",
		"compactMode",
		"concealer",
		"condom",
		"condomautochance",
		"condomchance",
		"confirmDelete",
		"confirmLoad",
		"confirmSave",
		"consensual",
		"container",
		"contraceptive",
		"contrast",
		"control",
		"controlled",
		"controlmax",
		"controlstart",
		"cool",
		"coolmax",
		"corruption",
		"corruption_slime",
		"cost",
		"count",
		"counts",
		"cover",
		"cow",
		"cowbell",
		"cowbra",
		"cowbuild",
		"cowpanties",
		"cowsleeves",
		"cowsocks",
		"creampie",
		"creamstat",
		"creatures",
		"crime",
		"crimehistory",
		"crossdress",
		"crossdressing",
		"crowd",
		"current",
		"currentDay",
		"currentDaysMax",
		"currentSave",
		"currentSettings",
		"currentState",
		"currentSubsection",
		"currentType",
		"current_sex",
		"cursed",
		"customColors",
		"custom_eyecolours",
		"custom_eyelenses",
		"custom_lenses_already_ordered",
		"daily",
		"daisy",
		"danceSuccess",
		"danceaction",
		"danceactiondefault",
		"danceevent",
		"dancelesson",
		"dancelocation",
		"dancephysique",
		"danceskill",
		"dancestage",
		"dancestat",
		"dancestudioanger",
		"dancestudiointro",
		"dancestudiotheft",
		"dancing",
		"danger",
		"dangerbus",
		"dangerevent",
		"darkpendant",
		"data",
		"date",
		"dateCount",
		"dawn_check",
		"day",
		"dayCount",
		"days",
		"daysSinceFed",
		"daystate",
		"deadCreatures",
		"debug",
		"debug_custom_events",
		"debug_favourite",
		"debugdisable",
		"defaultMoves",
		"degree",
		"delete_outfit",
		"delinquency",
		"delta",
		"demon",
		"demonabsorb",
		"demonbuild",
		"demoncat",
		"demoncow",
		"demonharpy",
		"desc",
		"description",
		"detention",
		"detentionAttended",
		"detention_paddle_student",
		"dev",
		"devOptions",
		"deviancy",
		"deviancyStress1",
		"deviancyStress2",
		"deviancyStress3",
		"deviancyStress4",
		"devlevel",
		"devstate",
		"dgchance",
		"diagnosis",
		"disableAutoSelect",
		"disableReturn",
		"dissociation",
		"distinction_stat",
		"dockhours",
		"dom",
		"done",
		"dontHide",
		"doseTaken",
		"drinksservedstat",
		"drugged",
		"drunk",
		"duration",
		"ears",
		"eden",
		"eden_plot_intro",
		"edenforesthunt",
		"edensCabin",
		"edenwake",
		"edenwhip",
		"effectsmessage",
		"ejacstat",
		"ejactrait",
		"ejaculating",
		"endday",
		"endhour",
		"enemyArousalLossReduction",
		"enemyanger",
		"enemyanger1",
		"enemyanger2",
		"enemyanger3",
		"enemyanger4",
		"enemyanger5",
		"enemyanger6",
		"enemyangermax",
		"enemyarousal",
		"enemyarousal1",
		"enemyarousal2",
		"enemyarousal3",
		"enemyarousal4",
		"enemyarousal5",
		"enemyarousal6",
		"enemyarousalmax",
		"enemyejaculated",
		"enemyhealth",
		"enemyhealth1",
		"enemyhealth2",
		"enemyhealth3",
		"enemyhealth4",
		"enemyhealth5",
		"enemyhealth6",
		"enemyhealthmax",
		"enemyno",
		"enemynomax",
		"enemystrength",
		"enemytrust",
		"enemytrust1",
		"enemytrust2",
		"enemytrust3",
		"enemytrust4",
		"enemytrust5",
		"enemytrust6",
		"enemywounded",
		"english",
		"english_exam",
		"english_exam_difficulty",
		"english_star",
		"englishattended",
		"englishmissed",
		"englishtrait",
		"estatePersistent",
		"evaded",
		"eventskip",
		"eventskipoverrule",
		"ex",
		"exclusive",
		"exhibitionism",
		"exhibitionism_message",
		"exhibitionismrun",
		"exhibitionismrunon",
		"exists",
		"exit",
		"exported",
		"exposed",
		"exposed_base",
		"exposedcarry",
		"exposedmod",
		"eyeColour",
		"eyeRepair",
		"eyelenses",
		"eyes",
		"eyeselect",
		"eyeshadow",
		"fabric_strength",
		"face",
		"facebruise",
		"faceejacstat",
		"facepic",
		"facesitdisable",
		"facestyle",
		"factor",
		"fallenAngel",
		"fallenangel",
		"fame",
		"fameStage",
		"fangs",
		"farm",
		"farm_shift",
		"featSkip",
		"featheredhairclip",
		"feats",
		"featsBoosts",
		"fedora",
		"feet",
		"feetaction",
		"feetactionTarget",
		"feetactioncarry",
		"feetactioncarryorgasm",
		"feetactioncarrypain",
		"feetactiondefault",
		"feetejacstat",
		"feetlast",
		"feetskill",
		"feetskillup",
		"feetstat",
		"feetstate",
		"feettarget",
		"feetuse",
		"feltMovement",
		"female",
		"femaleclimax",
		"femininity",
		"femininity_without_overwear",
		"fertile",
		"fertilised",
		"fertiliser",
		"fertility booster",
		"fetus",
		"fightstart",
		"filter",
		"finish",
		"flashbackbeach",
		"flashbackhome",
		"flashbacks",
		"flashbackschool",
		"flashbacktown",
		"flashbackunderground",
		"fluid_forced_stat",
		"foodStorage",
		"footdisable",
		"forceddance",
		"forcedprostitutionstat",
		"forehead",
		"forest",
		"forest_shop_intro",
		"foresthunt",
		"forestmod",
		"forestmove",
		"fountain",
		"framed",
		"freckles",
		"frequency",
		"fringelength",
		"fringelengthstage",
		"fringetype",
		"from",
		"front",
		"fruit",
		"fruitstock",
		"fullDescription",
		"furniture",
		"furniturePriceFactor",
		"gamemode",
		"garden",
		"gender",
		"gender_appearance",
		"gender_appearance_factors",
		"gender_appearance_without_overwear",
		"gender_appearance_without_overwear_factors",
		"gender_body",
		"gender_posture",
		"genderknown",
		"generateInit",
		"genital",
		"genitalpic",
		"genitals",
		"genitalsensitivity",
		"givenBirth",
		"glasses",
		"gloryhole",
		"gloryholestat",
		"goo",
		"goobodycount",
		"goocount",
		"good",
		"goooutsidecount",
		"grades",
		"greathawkmonster",
		"greenThumb",
		"greeting",
		"hEnd",
		"hStart",
		"hacker_tasks",
		"hair",
		"hairColour",
		"haircolour",
		"hairdye",
		"hairejacstat",
		"hairfringecolour",
		"hairlength",
		"hairlengthstage",
		"hairselect",
		"hairtype",
		"halfClosedEnabled",
		"halls",
		"hallucinations",
		"hallucinogen",
		"halo",
		"handejacstat",
		"handholding",
		"hands",
		"handskill",
		"handskillup",
		"handstat",
		"handtarget",
		"harperexam",
		"harpy",
		"he",
		"head",
		"headdrive",
		"headlast",
		"headpasswordknown",
		"health",
		"healthmax",
		"herm",
		"hers",
		"heterochromia",
		"hidden",
		"hideLinks",
		"hideLinksCheck",
		"hideUnderLower",
		"highContrast",
		"high_img",
		"him",
		"himself",
		"his",
		"history",
		"history_exam",
		"history_exam_difficulty",
		"history_star",
		"historyattended",
		"historymissed",
		"historytrait",
		"hitstat",
		"holypendant",
		"holystole",
		"home",
		"home_event_count",
		"home_event_timer",
		"home_gone",
		"homochance",
		"hoodDown",
		"hoodposition",
		"horns",
		"horsedisable",
		"hospitalintro",
		"hour",
		"humanChildren",
		"humanPregnancyMonths",
		"humanToysUnlocked",
		"hunger",
		"hungerenabled",
		"hunt",
		"huntstate",
		"hy_parent",
		"hy_sibling",
		"hygiene",
		"hygieneenabled",
		"hypnosis",
		"hypnosis_traits",
		"hypnotised",
		"i",
		"iconFile",
		"id",
		"images",
		"impurity",
		"index",
		"infinitespray",
		"infirmaryPainkiller",
		"init",
		"initnpccompatibility",
		"insecurity",
		"insecurity_breasts_big",
		"insecurity_breasts_small",
		"insecurity_breasts_tiny",
		"insecurity_penis_big",
		"insecurity_penis_small",
		"insecurity_penis_tiny",
		"integrity",
		"integrity_max",
		"intro",
		"inventory",
		"invocationId",
		"inwater",
		"ironman",
		"ironmanmode",
		"isolated",
		"j",
		"kiss",
		"knot_stat",
		"kylar",
		"kylarDelay",
		"kylarFed",
		"kylarHelp",
		"kylarSeen",
		"kylarenglish",
		"kylarenglishstate",
		"kylarwatched",
		"kylarwatchedtimer",
		"labia",
		"lactating",
		"lactation",
		"lactation_pressure",
		"lake",
		"lakesurface",
		"lakeswim",
		"laketeensfire",
		"laketeenspresent",
		"lastDaysMax",
		"lastLocation",
		"lastOptions",
		"lastPillTakenDescription",
		"lastTaken",
		"lastWardrobeSanityCheck",
		"lastWardrobeSlot",
		"lastgenerated",
		"lastviewed",
		"leaveLink",
		"left",
		"leftEyeColour",
		"left_arm",
		"left_bottom",
		"left_cheek",
		"left_ear",
		"left_foot",
		"left_hand",
		"left_shoulder",
		"left_thigh",
		"leftaction",
		"leftactionTarget",
		"leftactioncarry",
		"leftactioncarrydissociation",
		"leftactioncarryorgasm",
		"leftactioncarrypain",
		"leftactiondefault",
		"leftarm",
		"leftarmbruise",
		"leftarmstate",
		"leftboundcarry",
		"lefthand",
		"leftleg",
		"leftnipple",
		"lefttarget",
		"legs",
		"legslast",
		"length",
		"lenses_ordered",
		"lessonmissed",
		"lessonmissedtext",
		"lewd",
		"libertine",
		"lightCombat",
		"lightFlat",
		"lightGlow",
		"lightGradient",
		"lightSpotlight",
		"lightTFColor",
		"limit",
		"link_table",
		"lipstick",
		"liquidbodycount",
		"liquidcount",
		"liquidoutsidecount",
		"list",
		"loadCount",
		"loadTime",
		"location",
		"locationRequirement",
		"lock",
		"locked",
		"loincloth",
		"long_hair_meet_day",
		"lossStreak",
		"lossStreakHighScore",
		"love",
		"loveInterest",
		"loveInterestAwareMessage",
		"lovestage",
		"lower",
		"lowerexposed",
		"lowerlast",
		"loweroff",
		"lowerstruggle",
		"lowerwet",
		"lowerwetstage",
		"lowestDaysLeft",
		"lowestTimeLeft",
		"lube_produced_stat",
		"lunchEaten",
		"lurkerdisable",
		"lust",
		"luxury",
		"mVaginaFingerAdd",
		"machine_stat",
		"maggot",
		"mainImage",
		"makeup",
		"malar",
		"male",
		"malechance",
		"malevictimchance",
		"man",
		"mannequinBreastsSize",
		"mannequinGender",
		"mannequinGenderFromClothes",
		"mannequinHasPenis",
		"map",
		"mapLegacy",
		"mapMarkers",
		"mapMovement",
		"mapTop",
		"markedCards",
		"mascara",
		"mascara_running",
		"masochism",
		"masochism_level",
		"mason_count",
		"masseur_stat",
		"masturbation_bowl",
		"masturbation_milk",
		"masturbation_semen",
		"masturbation_vaginaFluid",
		"masturbationorgasm",
		"masturbationorgasmsemen",
		"masturbationorgasmstat",
		"masturbationstart",
		"masturbationstat",
		"masturbationtimestat",
		"maths",
		"maths_exam",
		"maths_exam_difficulty",
		"maths_star",
		"mathsattended",
		"mathschance",
		"mathsinfo",
		"mathslibrarystudent",
		"mathsmissed",
		"mathsnote",
		"mathsproject",
		"mathsprojectdays",
		"mathsstim",
		"mathsstimbought",
		"mathsstimstolen",
		"mathsstimused",
		"mathstrait",
		"max",
		"maxCount",
		"maxDaysWithoutFood",
		"maxDefaultActionSets",
		"maxStates",
		"medicated",
		"men",
		"menstruation",
		"menu",
		"metadata",
		"milk_amount",
		"milk_drank_stat",
		"milk_max",
		"milk_produced_stat",
		"milk_volume",
		"milkdranktrait",
		"mimic",
		"minCount",
		"minisnowman",
		"minute",
		"misbehaviour_day",
		"missed",
		"missing",
		"mockaction",
		"mockcycle",
		"model",
		"modeloptionsOverride",
		"molestationstart",
		"molestavoid",
		"moleststat",
		"molesttrait",
		"money",
		"monster",
		"monsterchance",
		"monsterhallucinations",
		"month",
		"monthday",
		"moonstate",
		"morgan",
		"morningSicknessGeneral",
		"morningSicknessWaking",
		"mostTaken",
		"mother",
		"motherStatus",
		"mouth",
		"mouth_climax",
		"mouthaction",
		"mouthactioncarry",
		"mouthactioncarrydissociation",
		"mouthactioncarryorgasm",
		"mouthactioncarrypain",
		"mouthactiondefault",
		"mouthsensitivity",
		"mouthstate",
		"mouthsubmit",
		"mouthtarget",
		"mouthuse",
		"move",
		"multipleWardrobes",
		"mummyfacewrap",
		"mummyskirt",
		"mummytop",
		"museumAntiqueJournalHints",
		"museumAntiques",
		"museumCount",
		"museuminterest",
		"museumintro",
		"nam",
		"name",
		"name_cap",
		"namesChildren",
		"natural",
		"naturalhaircolour",
		"neck",
		"neckbruise",
		"neckejacstat",
		"necklast",
		"nectar",
		"nectar_addiction",
		"nectar_drank_stat",
		"nectar_timer",
		"nectarbodycount",
		"nectarcount",
		"nectaroutsidecount",
		"neutral",
		"neverNudeMenus",
		"newDeckTimer",
		"newLife",
		"newWardrobeStyle",
		"nightmare",
		"nightmares",
		"nightmod",
		"nipples",
		"noHelp",
		"noTraits",
		"no_aside",
		"no_underwear",
		"noanal",
		"nochoke",
		"noise",
		"noon_check",
		"nopenile",
		"notifyUpdate",
		"notuck",
		"novaginal",
		"npc",
		"npcChildren",
		"npcChildrenUnrelatedToPlayer",
		"npcClothes",
		"npcCondoms",
		"npcListVersion",
		"npcNamedVersion",
		"npcPregnancyDisable",
		"npcTotalBirthEvents",
		"npcVirginityChance",
		"npcVirginityChanceAdult",
		"npc_named",
		"npcadult",
		"npcdomhigh",
		"npcdomlow",
		"npclovehigh",
		"npclovehighsu",
		"npclovelow",
		"npclovelowsu",
		"npcnum",
		"npcrow",
		"npcskinselector",
		"npcspeechcycle",
		"nude",
		"numberPerTrain",
		"numberify_enabled",
		"numpad",
		"o_long_and_beautiful",
		"objectVersion",
		"oceanbreezetheft",
		"one_piece",
		"open",
		"openinghours",
		"options",
		"oral",
		"oralejacstat",
		"oralskill",
		"oralskillup",
		"oralstat",
		"orgasmcount",
		"orgasmcurrent",
		"orgasmdown",
		"orgasmstat",
		"orgasmtrait",
		"orphan_hope",
		"orphan_reb",
		"orphan_rent",
		"otherNPChand",
		"outfit",
		"outfitPrimary",
		"outfitSecondary",
		"outfitTmp",
		"outfit_update",
		"outfits",
		"outside",
		"over_head",
		"over_lower",
		"over_upper",
		"overdose",
		"overlowerstruggle",
		"overlowerwet",
		"overlowerwetstage",
		"overupperstruggle",
		"overupperwet",
		"overupperwetstage",
		"overwrite",
		"overwriteEnable",
		"overwriteValues",
		"owned",
		"ownedStored",
		"oxygen",
		"oxygenmax",
		"pain",
		"painsaved",
		"panicattacks",
		"panicparalysis",
		"panicviolence",
		"pantiesSoaked",
		"panty_thief",
		"parasite",
		"parasite_known",
		"parasite_update",
		"parasitedisable",
		"parasitestat",
		"park_fame",
		"park_run_seen_by",
		"pass",
		"passage",
		"passageChangesCount",
		"passageCount",
		"passagePrev",
		"passoutstat",
		"pbcolour",
		"pbdisable",
		"pbgrowth",
		"pbgrowthballs",
		"pblevel",
		"pblevelballs",
		"pbstrip",
		"pen",
		"penile",
		"penilechastity",
		"penilechastityparasite",
		"penileejacstat",
		"penileskill",
		"penileskillup",
		"penilestat",
		"penis",
		"penis blocker",
		"penis growth",
		"penis reduction",
		"penisExist",
		"penisPain",
		"penisWetness",
		"penis_climax",
		"penis_img",
		"penis_mod",
		"penisaction",
		"penisactioncarry",
		"penisactioncarryorgasm",
		"penisactioncarrypain",
		"penisactiondefault",
		"penisbitten",
		"penisbruise",
		"penisdesc",
		"penisgrowthtimer",
		"penissize",
		"penissizemax",
		"penissizemin",
		"penisstate",
		"penistarget",
		"penisuse",
		"pepperSprayDisplay",
		"perNPCFix",
		"per_npc",
		"perceived_bottomsize",
		"perceived_breastsize",
		"percent",
		"periodEnabled",
		"person",
		"pharm",
		"phase",
		"phase2",
		"phaselast",
		"physicalTransform",
		"physique",
		"physiqueSuccess",
		"physiquechange",
		"physiquemax",
		"physiquesize",
		"physiqueuse",
		"pillory",
		"pillory_tenant",
		"pills",
		"pillsConsumed",
		"pillsExitPassage",
		"pillsTakenOn",
		"pillsconsumed",
		"pimp",
		"pits",
		"plant",
		"plantdisable",
		"plants",
		"plants_known",
		"playTime",
		"playedWith",
		"player",
		"playerChildren",
		"playerPregnancyBeastDisable",
		"playerPregnancyHumanDisable",
		"playerRejectedRaisingStakes",
		"playtime",
		"plots",
		"plumage",
		"plural",
		"points",
		"pointsUsed",
		"police_access_card",
		"police_hack",
		"police_intro",
		"policemolestation",
		"poolroomstate",
		"portable",
		"position",
		"potentialFathers",
		"pregnancy",
		"pregnancyAvoidance",
		"pregnancyStats",
		"pregnancyTestsTaken",
		"pregnancyspeechdisable",
		"prenancyObjectRepair",
		"prepareSaveDetails",
		"presets",
		"previousPassage",
		"primary",
		"prison",
		"privatedanceoffered",
		"prng",
		"produce_sold",
		"prof",
		"promiscuity",
		"pronoun",
		"pronouns",
		"pronounsNPCFix",
		"prop",
		"prostituting",
		"prostitution",
		"prostitutionstat",
		"psych",
		"pub_hack_job",
		"pub_task_stat",
		"pubes",
		"pubic",
		"pubintro",
		"pubstage",
		"pubtask",
		"pubtask2",
		"pubtasksetting",
		"pubwhore",
		"pull",
		"pullaway",
		"purity",
		"quality",
		"rage",
		"randomClothing",
		"randomEquipConfigure",
		"range",
		"rape",
		"rapeavoid",
		"raped",
		"rapestat",
		"rapetrait",
		"rearresize",
		"rebuy_failure",
		"rebuy_success",
		"recoveredCount",
		"recoveryStage",
		"recoveryTime",
		"recoveryTimeStart",
		"reducedLineHeight",
		"regrab",
		"rentday",
		"rented",
		"rentmod",
		"rentmoney",
		"rentstage",
		"renttime",
		"rescue",
		"rescued",
		"retrieveShopCustomColor",
		"reveal",
		"revealed",
		"riddle",
		"right",
		"rightEyeColour",
		"right_arm",
		"right_bottom",
		"right_cheek",
		"right_ear",
		"right_foot",
		"right_hand",
		"right_shoulder",
		"right_thigh",
		"rightaction",
		"rightactionTarget",
		"rightactioncarry",
		"rightactioncarrydissociation",
		"rightactioncarryorgasm",
		"rightactioncarrypain",
		"rightactiondefault",
		"rightarm",
		"rightarmbruise",
		"rightarmstate",
		"rightboundcarry",
		"righthand",
		"rightleg",
		"rightnipple",
		"righttarget",
		"rng",
		"rng2",
		"robin",
		"robinPunishments",
		"robinSeen",
		"robinTattoo",
		"robinTraumaMultiplier",
		"robinconsole",
		"robinconsoleintro",
		"robindebt",
		"robindebtlimit",
		"robinhistory",
		"robinhugging",
		"robinmissing",
		"robinmoney",
		"robinroomentered",
		"robinwakeday",
		"role",
		"rose",
		"runWardrobeSanityChecker",
		"running",
		"sEnd",
		"sStart",
		"sadism",
		"sadism_level",
		"safePassage",
		"saturation",
		"saveDetails",
		"saveId",
		"saveName",
		"saveVersion",
		"saveVersions",
		"scarecrowhat",
		"scarecrowshirt",
		"scenePassages",
		"school",
		"schoolBoys",
		"schoolGirls",
		"school_nurse",
		"school_shop_intro",
		"schoolday",
		"schoolevent",
		"schooleventtimer",
		"schoollesson",
		"schoolrep",
		"schoolstate",
		"schoolterm",
		"schooltrait",
		"science",
		"science_exam",
		"science_exam_difficulty",
		"science_star",
		"scienceattended",
		"sciencefaircheat",
		"sciencelichendrain",
		"sciencelichendrainready",
		"sciencelichenknown",
		"sciencelichenlake",
		"sciencelichenlakeready",
		"sciencelichenpark",
		"sciencelichenparkready",
		"sciencelichentemple",
		"sciencelichentempleready",
		"sciencemissed",
		"sciencephallus",
		"sciencephallusclit",
		"sciencephalluspenis",
		"sciencephallusready",
		"scienceprogression",
		"scienceproject",
		"scienceprojectdays",
		"scienceshroomheart",
		"scienceshroomheartready",
		"scienceshroomknown",
		"scienceshroomwolf",
		"scienceshroomwolfready",
		"sciencetrait",
		"scrap",
		"scrollRemember",
		"sea",
		"season",
		"secColor",
		"secColorSet",
		"secondary",
		"seconds",
		"security",
		"seduction",
		"seductiondifficulty",
		"seductionrating",
		"seductionrequired",
		"seductionskill",
		"seed",
		"seenDoctor",
		"self",
		"semen",
		"semenInVagina",
		"semen_amount",
		"semen_max",
		"semen_produced_stat",
		"semen_volume",
		"semenbodycount",
		"semencount",
		"semenoutsidecount",
		"semenpuddle",
		"semenswallowedstat",
		"sepia",
		"serafuku",
		"served",
		"set",
		"sewingKit",
		"sex",
		"sexStats",
		"sexTotal",
		"sexToys",
		"sexavoid",
		"sexstart",
		"sextoys",
		"sextoystat",
		"sharpEyes",
		"shop",
		"shopClothingFilter",
		"shopDefaults",
		"shopItemsPerPage",
		"shopName",
		"shopPage",
		"shopReturn",
		"shopSend",
		"short",
		"showCaptionText",
		"showDebugRenderer",
		"showEquip",
		"showGoldLink",
		"showUnderEquip",
		"sidebarAnimations",
		"sidebarStats",
		"sidebarTime",
		"silhouetteEnabled",
		"size",
		"skeletonmask",
		"skeletonoutfit",
		"skills",
		"skin",
		"skinColor",
		"skincolour",
		"skipStatisticsConfirmation",
		"skirt",
		"skirt_down",
		"skulduggery",
		"skulduggeryDintro",
		"skulduggeryday",
		"skulduggerydifficulty",
		"skulduggeryroll",
		"skulduggerysuccess",
		"sleepHoursTotal",
		"sleepStat",
		"sleephour",
		"sleeptrouble",
		"sleeve_img",
		"slime",
		"slimedisable",
		"slot",
		"slugdisable",
		"slutshirt",
		"smuggler_location",
		"smuggler_stolen_stat",
		"smuggler_timer",
		"social",
		"soft",
		"soldCount",
		"spa_job",
		"space",
		"special",
		"specialClothes",
		"specialClothesEffects",
		"specialClothing",
		"specialTransform",
		"special_clothes",
		"speechanusescape",
		"speechcrossdressangry",
		"speechcrossdressaroused",
		"speechcrossdressdisappointed",
		"speechcrossdressshock",
		"speechcum",
		"speechcycle",
		"speechdisable",
		"speechhermangry",
		"speechhermaroused",
		"speechhermdisappointed",
		"speechhermshock",
		"speechorgasmcount",
		"speechorgasmnocumcount",
		"speechorgasmrepeat",
		"speechorgasmweakcumcount",
		"speechpenisescape",
		"speechsextoy",
		"speechsextoyangry",
		"speechsextoyaroused",
		"speechsextoydisappointed",
		"speechsextoyshocked",
		"speechvaginaescape",
		"speechwheeze",
		"sperm",
		"spiderdisable",
		"spill",
		"spotted",
		"spray",
		"spraymax",
		"spraystat",
		"squidcount",
		"stage",
		"stages",
		"stakesRaised",
		"stalk_intro",
		"stall_rejected",
		"stance",
		"startday",
		"starthour",
		"startingseason",
		"stat_aphrodisiacs_sold",
		"stat_lurkers_captured",
		"stat_panties_stolen",
		"stat_police",
		"stat_shoot",
		"statdisable",
		"state",
		"state_base",
		"state_top",
		"state_top_base",
		"steady",
		"stealdifficulty",
		"stealtarget",
		"stolen",
		"stolenClothes",
		"stolenCount",
		"stonependant",
		"store",
		"storeActions",
		"strap",
		"straponchance",
		"strapons",
		"stray_happiness",
		"street",
		"streetpolice",
		"stress",
		"stressgain",
		"stressmax",
		"stresssaved",
		"stripClub",
		"stripclubfailed",
		"stripintegrity",
		"stripobject",
		"studyBooks",
		"style",
		"sublocation",
		"submissive",
		"suffocating",
		"suggestedRaisingStakes",
		"sunBlock",
		"suspicion",
		"swallowed",
		"swallowedstat",
		"swarm",
		"swarmdisable",
		"swim",
		"swimall",
		"swimming",
		"swimmingSuccess",
		"swimmingattended",
		"swimmingmissed",
		"swimmingskill",
		"swimnudecounter",
		"swimshorts",
		"swimsuitBottom",
		"swimsuitTop",
		"sydney",
		"sydneyChatState",
		"sydneyFirstSeen",
		"sydneyFlirt",
		"sydneySeen",
		"sydney_templeWork",
		"syndromewolves",
		"tablesservedstat",
		"tags",
		"tail",
		"tailor_cost",
		"tanImgEnabled",
		"tanLoc",
		"tanValues",
		"tanningEnabled",
		"targetYourself",
		"tattoo",
		"tattoos",
		"teen",
		"temple",
		"templePromised",
		"temple_fire",
		"tending",
		"tendingSuccess",
		"tending_yield_factor",
		"tendingvars",
		"tentacleAnus",
		"tentacleAnusBaby",
		"tentacleMouth",
		"tentaclePenis",
		"tentacleVagina",
		"tentacledisable",
		"tentaclerapestat",
		"tentacles",
		"tentacletrait",
		"tertiary",
		"test",
		"thigh",
		"thighaction",
		"thighactioncarry",
		"thighactioncarryorgasm",
		"thighactioncarrypain",
		"thighactiondefault",
		"thighbruise",
		"thighejacstat",
		"thighskill",
		"thighskillup",
		"thighstat",
		"thightarget",
		"thighuse",
		"thirst",
		"thirstenabled",
		"till",
		"time",
		"timeSinceArousal",
		"timer",
		"timerStart",
		"timestyle",
		"tip",
		"tipdisable",
		"tipmod",
		"tipreaction",
		"tiredness",
		"title",
		"to",
		"tooltarget",
		"topless",
		"totalBetMoneyLost",
		"totalBetMoneyMade",
		"totalBetRoundsLost",
		"totalBetRoundsTied",
		"totalBetRoundsWon",
		"totalBirthEvents",
		"totalCaughtCheating",
		"totalGamesPlayed",
		"totalGamesPlayedWithBetting",
		"totalMoneyConfiscated",
		"totalRoundsLost",
		"totalRoundsTied",
		"totalRoundsWon",
		"totalStolenClothes",
		"totalTipMoneyMade",
		"toydildodisable",
		"toymultiplepenetration",
		"toywhipdisable",
		"trace",
		"trackedArousal",
		"traits",
		"trance",
		"transfer",
		"transformationParts",
		"transformations",
		"transformdisable",
		"transformdisabledivine",
		"trauma",
		"traumafocus",
		"traumagain",
		"traumamax",
		"traumasaved",
		"trueconsensual",
		"trust",
		"tryOn",
		"tryingOn",
		"tshirt",
		"tummy",
		"tummybruise",
		"tummyejacstat",
		"tutorial",
		"type",
		"types",
		"typesSeen",
		"ultrasoundDone",
		"uncomfortable",
		"under_lower",
		"under_upper",
		"underlowerlast",
		"underloweroff",
		"underlowerstruggle",
		"underlowerwet",
		"underlowerwetstage",
		"underupperlast",
		"underupperoff",
		"underupperwet",
		"underupperwetstage",
		"underwarningskip",
		"underwater",
		"underwatertime",
		"underwear",
		"undressLeftTarget",
		"undressRightTarget",
		"unlockDefaultActions",
		"unlockDemonFlaunt",
		"unlockExhibitionismNude",
		"unlockExhibitionismUnderwear",
		"unlockHypnosis",
		"unlockLewd",
		"unlockLoveInterest1",
		"unlockLoveInterest2",
		"unlockLoveInterest3",
		"unlockProstitution",
		"unlockTransformation",
		"unlocked",
		"updateClothes",
		"upgradeDetails",
		"upgrades",
		"upper",
		"upperTucked",
		"upperexposed",
		"upperlast",
		"upperoff",
		"upperstruggle",
		"upperwet",
		"upperwetstage",
		"urchin",
		"urinestat",
		"useNarrowMarket",
		"used",
		"vagina",
		"vaginaArousalWetness",
		"vaginaExist",
		"vaginaWetness",
		"vagina_exposed",
		"vagina_exposed_base",
		"vaginaaction",
		"vaginaactioncarry",
		"vaginaactioncarryorgasm",
		"vaginaactioncarrypain",
		"vaginaactiondefault",
		"vaginabruise",
		"vaginal",
		"vaginalPain",
		"vaginalchastity",
		"vaginalchastityparasite",
		"vaginaldoubledisable",
		"vaginaldoublestat",
		"vaginalejacstat",
		"vaginalentranceejacstat",
		"vaginalskill",
		"vaginalskillup",
		"vaginalstat",
		"vaginaoutside",
		"vaginastate",
		"vaginatarget",
		"vaginause",
		"value",
		"vampirejacket",
		"variable",
		"variables",
		"variantsSeen",
		"venuemod",
		"virginTaken",
		"virginity",
		"visited",
		"vorecreature",
		"voredisable",
		"vorestage",
		"vorestomach",
		"vorestrength",
		"vorestruggle",
		"voretentacles",
		"voretrait",
		"walltype",
		"wardrobe",
		"wardrobeOption",
		"wardrobe_location",
		"wardrobes",
		"warmth",
		"waspdisable",
		"water",
		"waterBreaking",
		"watersportsdisable",
		"waterwash",
		"wear_face",
		"wear_feet",
		"wear_genitals",
		"wear_hands",
		"wear_head",
		"wear_legs",
		"wear_lower",
		"wear_neck",
		"wear_outfit",
		"wear_over_head",
		"wear_over_lower",
		"wear_over_upper",
		"wear_under_lower",
		"wear_under_upper",
		"wear_upper",
		"weather",
		"weekday",
		"wet",
		"wetintro",
		"whitechance",
		"whitechanceselector",
		"whitney",
		"whitneymaths",
		"whitneypantiescheck",
		"wild_plant_stat",
		"willpower",
		"willpowerSuccess",
		"willpowermax",
		"winStreak",
		"winStreakHighScore",
		"wings",
		"winterHint",
		"witchdress",
		"witchhat",
		"witchshoes",
		"wolf",
		"wolfChildren",
		"wolfPregnancyWeeks",
		"wolfToysUnlocked",
		"wolfbed",
		"wolfbuild",
		"wolfcave_monster_roll",
		"wolfcavedig",
		"wolfcavepatrol",
		"wolfcavepatrolchance",
		"wolfchallengetimer",
		"wolfevent",
		"wolfgirl",
		"wolfpackfear",
		"wolfpackferocity",
		"wolfpackharmony",
		"wolfpackpoisoned",
		"wolfpackshroom",
		"wolfpacktrust",
		"wolfstate",
		"wolfwake",
		"word",
		"workouts",
		"worn",
		"wraith",
		"writing",
		"year",
		"yeardays",
		"zip",
		"zoom",
	];

	const dict_v0 = [...v0_mostCommonvalues, ...v0_variableNames];
	const dict_v1 = [...dict_v0].splice(132, 0, "antiqueobsidiandisc", "antiquewoodenmask", "antiquetrilobitefossil", "antiqueislandarrow");

	// template for next versions
	// const dict_v1 = [
	// 	...dict_v0,
	// 	"newKey1", "newKey2"
	// ]

	return {
		v0: dict_v0,
		v1: dict_v1,
	};
})();
for (const k in DoLCompressorDictionaries) {
	const dict = DoLCompressorDictionaries[k];
	if (dict.length !== new Set(dict).size) throw new Error("DoLCompressorDictionaries[" + JSON.stringify(k) + "] has duplicate elements.");
}
