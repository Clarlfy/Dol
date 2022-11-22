
const fertiliseParasites = (genital = "anus") => {
	//Runs whenever someone ejaculates in your `genital`
	let pregnancy = V.sexStats[genital].pregnancy;
	if(pregnancy.type === "parasite"){
		pregnancy.fetus.forEach(parasite => {
			parasite.fertilised = true;
			parasite.daysLeft = parasite.stats.growth;
			if(parasite.stats.gender === "Hermaphrodite"){
				pregnancy.motherStatus = 2;
			}
		});
	}
}
DefineMacro("fertiliseParasites", fertiliseParasites);

const parasiteProgressDay = (genital = "anus") => {
	let pregnancy = V.sexStats[genital].pregnancy;
	V.pregnancyStats.namesParasitesChild = V.deviancy >= 75;
	if(pregnancy.type === "parasite"){
		pregnancy.fetus.forEach(parasite => {
			if(parasite.daysLeft > 0) parasite.daysLeft--;
			if(parasite.stats.gender === "Hermaphrodite" && parasite.daysLeft <= 3){
				if(parasite.stats.lastEgg > 0){
					parasite.stats.lastEgg--;
				} else if(V.sexStats[genital].pregnancy.fetus.length < maxParasites(genital)) {
					impregnateParasite(parasite.creature, true, genital, parasite);
				}
			}
		});
		pregnancy.fetus = pregnancy.fetus.filter(parasite => parasite.daysLeft > 0 || parasite.fertilised);
	}
}
DefineMacro("parasiteProgressDay", () => {parasiteProgressDay(); parasiteProgressDay("vagina");});

const parasiteProgressTime = (pass, genital = "anus") => {
	let pregnancy = V.sexStats[genital].pregnancy;
	if(pregnancy.type === "parasite"){
		pregnancy.fetus.forEach(parasite => {
			if(parasite.fertilised){
				if(parasite.timeLeft === null) parasite.timeLeft = parasite.stats.speed;
				parasite.timeLeft -= pass;
				if(parasite.timeLeft <= 0){
					parasite.timeLeft = parasite.stats.speed;
					if(!V.daily.parasiteEvent){
						V.daily.parasiteEvent = [];
					}
					if(parasite.stats.gender === "Hermaphrodite" && parasite.daysLeft <= 3){
						if((parasite.daysLeft <= 3 && random(0,100) < 20) || (parasite.daysLeft === 0 && random(0,100) < 50)){
							V.daily.parasiteEvent.pushUnique(genital + 0);
							if(V.pregnancyStats.parasiteDoctorEvents === 2) V.pregnancyStats.parasiteDoctorEvents = 3;
						} else if(parasite.daysLeft === 0 || random(0,100) < 60){
							V.daily.parasiteEvent.pushUnique(genital + 2);
						}
					} else {
						if((parasite.daysLeft === 0 && random(0,100) < 50) || (parasite.daysLeft <= 3 && random(0,100) < 20)){
							V.daily.parasiteEvent.pushUnique(genital + 1);
							if(V.pregnancyStats.parasiteDoctorEvents === 0) V.pregnancyStats.parasiteDoctorEvents = 1;
							if(V.pregnancyStats.parasiteDoctorEvents >= 2) pregnancy.parasiteFeltMovement = true;
						} else if(parasite.daysLeft === 0 || (parasite.daysLeft <= 3 && random(0,100) < 60)){
							V.daily.parasiteEvent.pushUnique(genital + 2);
						} else if(parasite.daysLeft < 7 && random(0,100) < 50){
							V.daily.parasiteEvent.pushUnique(genital + 3);
						}
					}
				}
			}
		});
	}
}
DefineMacro("parasiteProgressTime", (pass) => {parasiteProgressTime(pass); parasiteProgressTime(pass, "vagina");});

const impregnateParasite = (parasiteType, chance, genital = "anus", hermParasite) => {
	if(V.parasitepregdisable === "t" || !parasiteType || (!V.player.vaginaExist && genital === "vagina")) return false;
	if(V.sexStats.pills.pills["Anti-Parasite Cream"] && V.sexStats.pills.pills["Anti-Parasite Cream"].doseTaken && !hermParasite) return false;

	let pregnancy = V.sexStats[genital].pregnancy;

	if(pregnancy.fetus.length >= maxParasites(genital) || (pregnancy.type !== null && pregnancy.type !== "parasite")) return false;

	let rngCheck = chance === true || random(0,100) <= (1 + chance / (pregnancy.fetus.length + 1));

	if(pregnancy && rngCheck){
		switch(parasiteType){
			case "slimes": case "eels": case "worms": case "snakes": case "spiders": case "slugs": case "maggots":
				parasiteType = toTitleCase(parasiteType);
				parasiteType = parasiteType.substring(0,parasiteType.length - 1);
			break;
			default:
				parasiteType = toTitleCase(parasiteType);
			break;
		}

		let newPregnancy = pregnancyGenerator.parasite({
			mother: "pc",
			parasiteType: parasiteType,
			genital: genital,
			hermParasite: hermParasite,
		});
		if(newPregnancy){
			V.sexStats[genital].pregnancy = {
				...pregnancy,
				...newPregnancy,
			}
		}
		if(!hermParasite) T.impreg = true;
		return true;
	}
	return false;
}
DefineMacro("impregnateParasite", impregnateParasite);
