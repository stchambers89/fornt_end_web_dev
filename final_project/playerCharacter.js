export {playerCharacter};


class playerCharacter{
    constructor(playerRace, playerClass) {
        this.playerRace = playerRace;
        this.playerClass = playerClass;
        this.str = 0;
        this.con = 0;
        this.dex = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    displayCharacter(){
        return `You have created a ${this.playerRace} ${this.playerClass} <br>
        Character Statistics: <br>
        Strength: ${this.str} <br>
        Constitution: ${this.con} <br>
        Dexterity: ${this.dex} <br>
        Inteligence: ${this.int} <br>
        Wisdom: ${this.wis} <br>
        Charisma: ${this.cha} <br>
        `
    }
}