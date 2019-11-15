/* Creating a model for human npc */
/* Defining functions */

window.NpcModel = function(adult, gender, pronoun, maxHealth,
                            lefthand, righthand, penis, vagina,
                            mouth, chest, description)
{
    this.adult = adult || 0;
    this.gender = gender || 0;
    this.pronoun = pronoun || 0;
    this.maxHealth = maxHealth || 200;
    this.health = maxHealth || 200;
    this.lefthand = lefthand || "none";
    this.righthand = righthand || "none";
    this.penis = penis || "none";
    this.vagina = vagina || "none";
    this.mouth = mouth || "none";
    this.chest = chest || "none";
    this.description = description || 0;
    this.type = "man";
    this.angermax = 200;
    this.anger = 0;
    this.trust = 0;
};

/* Don't bother with this, just return functions because no single engine is simple */

NpcModel.prototype._init = function (obj)
{
    Object.keys(obj).forEach(function (pn) {
		this[pn] = clone(obj[pn]);
    }, this);

    return this;
};

NpcModel.prototype.clone = function ()
{
    return (new NpcModel())._init(this);
};

NpcModel.prototype.toJSON = function ()
{
    var ownData = {};
    Object.keys(this).forEach(function (pn) {
		ownData[pn] = clone(this[pn]);
    }, this);
    return JSON.reviveWrapper('(new NpcModel())._init($ReviveData$)', ownData);
}