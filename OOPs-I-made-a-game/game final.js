/*let hasPickedUpSword = false

set Item(itemNew) {
    this._item = itemNew._name._name; // this is a new piece of code
  }

class Room {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._linkedRooms = {};
        this._character = null;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get character() {
        return this._character;
    }

    set description(description) {
        this._description = description;
    }

    set character(character) {
        this._character = character;
    }

    describe() {
        return `${this._name} ${this._description}.`;
    }

    getDetails() {
        const entries = Object.entries(this._linkedRooms)
        let details = []
        for (const [direction, room] of entries) {
            let text = `The ${room.name} is to the ${direction}`
            details.push(text)
        }
        return details
    }

    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert("You cant go that way")
            return this;
        }
    }


    linkRooms(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }
}

class Character {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._conversation = "";
    }

    set name(name) {
        this._name = name;
    }

    set description(description) {
        this._description = description;
    }

    set conversation(conversation) {
        this._conversation = conversation;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description
    }

    get conversation() {
        return this._conversation;
    }

    describe() {
        return `You have met ${this._name}, ${this._description}`
    }

    converse() {
        return `${this._name} says ${this._conversation}`
    }

}

class Item {
    constructor(name) {
        this._name = name;
        this._description = description
    }

    set name(name) {
        this._name = name;
    }

    set description(description) {
        this._description = description;
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    describe() {
        return `The ${this._name} is ${this._description}`
    }
}


const deadDwarf = new Room("Dead Dwarf");
deadDwarf.description =
    "...";
const whitebeardsEncampment = new Room("whitebeards Encampment");
whitebeardsEncampment.description =
    "You have woke up at a campsite, A weird energy surrounds you. All you have to your name is a photo of your daughter";
const iceCave = new Room("Ice Cave");
iceCave.description =
    "As you walk into the cave the energy intesifies the weight of your body increases like a gravitational pull downwards, you cant comprehend the power you are feeling, You decide if to continue";
const ancientLair = new Room("ancientLair");
ancientLair.description = "As you walk into the lair there is a single plant on the floor with dried blood around it, you relaise the plant is alive and is hungry you cut your hand with the blade and drip blood into its mouth, as the floor opens up like a black hole you are mezmerized by the sound of sirens singing you continue deeper into the abyss.";
const cavernOfTheEvilWizard = new Room("cavernOfTheEvilWizard");
cavernOfTheEvilWizard.description = "You are standing in the cavern of the evil wizard. All around you are the carcasses of slain ice dwarfs.";

/* 
Portfolio - Improvements
- Dice rolls to determine if u fall into the lair of the evil wizard
- Needs a dragons heart to kill the Evil Wizard 
- 
*/

//const Dice = new Item("Dice");
//Dice.description = "only goes up to five";

//const Blade = new Item("Dwarven Blade")
//Blade.description = "A blade crafted by the best dwarf in Ironforge"

whitebeardsEncampment.linkRooms("south", iceCave);
whitebeardsEncampment.linkRooms("east", deadDwarf);
deadDwarf.linkRooms("south", iceCave);
deadDwarf.linkRooms("east", ancientLair);
iceCave.linkRooms("north", whitebeardsEncampment);
iceCave.linkRooms("east", ancientLair);
ancientLair.linkRooms("west", iceCave)
ancientLair.linkRooms("north", cavernOfTheEvilWizard)
cavernOfTheEvilWizard.linkRooms("west", whitebeardsEncampment)
cavernOfTheEvilWizard.linkRooms("south", ancientLair)

const evilWizard = new Character("Evil Wizard");
evilWizard.description = "You are standing in the cavern of the evil ";
evilWizard.conversation = "I am a monster"

cavernOfTheEvilWizard.character = evilWizard


function displayRoomInfo(room) {

    console.log(room.getDetails())

    let occupantMsg = ""
    if (room.character) {
        occupantMsg = `${room.character.describe()} ${room.character.converse()}`;
    } else {
        occupantMsg = ""
    }
    // this is a new piece of code

    if (room._item === "Sword") {
        console.log(room._item);
        itemDesc = "There is a sword in this room! Do you want to pick it up?";
        const btn = document.createElement("button");
        btn.innerHTML = "Pick up sword";
        btn.addEventListener("click", () => {
            console.log("working now");
            document.getElementById("itemDesc").innerHTML = "You picked up the sword";
            hasPickedUpSword = true;
            console.log(hasPickedUpSword)
        });
        document.body.appendChild(btn);
    } else if (room._item === "Shield") {
        itemDesc = "There is a shield in this room!"
    }

    // textContent = "<p>" + room.describe() + "</p>"; + "<p>" + occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

    document.getElementById("textarea").innerHTML =
        room.describe() +
        "<p>" +
        occupantMsg +
        "</p>" +
        "<p>" +
        room.getDetails() +
        "</p>";
    document.getElementById("itemDesc").innerHTML = itemDesc; // this is a new piece of code
    document.getElementById("usertext").focus();
}

function startGame() {
    let currentRoom = Kitchen;
    displayRoomInfo(currentRoom);

    const directions = ["north", "south", "east", "west"];

    document.addEventListener("keydown", function (event) {
        console.log(event);

        if (event.key === "Enter") {
            const command = document.getElementById("usertext").value;
            if (directions.includes(command.toLowerCase())) {
                currentRoom = currentRoom.move(command.toLowerCase());
                document.getElementById("usertext").value = "";
                displayRoomInfo(currentRoom);
            } else {
                document.getElementById("usertext").value = "";
                alert("That is not a valid direction. Please try again");
            }
        }
    });
}


// textContent = "<p>" + room.describe() + "</p>"; + "<p>" + occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

document.getElementById("textarea").innerHTML = room.describe() + "<p>" + occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
document.getElementById("usertext").focus()


function startGame() {
    let currentRoom = whitebeardsEncampment
    displayRoomInfo(currentRoom)

    const directions = ["north", "south", "east", "west"]

    document.addEventListener("keydown", function (event) {
        console.log(event)

        if (event.key === "Enter") {
            const command = document.getElementById("usertext").value
            if (directions.includes(command.toLowerCase())) {
                currentRoom = currentRoom.move(command.toLowerCase())
                document.getElementById("usertext").value = ""
                displayRoomInfo(currentRoom)
            } else {
                document.getElementById("usertext").value = ""
                alert("That is not a valid direction. Please try again")
            }
        }
    })
}


startGame()*/