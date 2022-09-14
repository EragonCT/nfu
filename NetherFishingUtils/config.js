import {@Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @PercentSliderProperty, @SelectorProperty, Color} from 'Vigilance';

@Vigilant("NetherFishingUtils", "Settings")
class Settings {
    constructor() {
        this.initialize(this);
        this.addDependency("Red percentage","Highlighted Bobber");
        this.addDependency("Blue percentage","Highlighted Bobber");
        this.addDependency("Green percentage","Highlighted Bobber");
        this.addDependency("RGB","Highlighted Bobber")
    }

    //titles ------------------------------------------
    @SwitchProperty({
        name: "Jawbus Text",
        description: "Enable/Disable Jawbus Text (Text on screen when Jawbus spawns)",
        category: "Text",
    })

    jawbusText = true;

    @SwitchProperty({
        name: "Thunder Text",
        description: "Enable/Disable Thunder Text (Text on screen when Thunder spawns)",
        category: "Text",
    })
    thunderText = true;

    @SwitchProperty({
        name: "Carrot King Text",
        description: "Enable/Disable Carrot King Text",
        category: "Text",
    })
    carrotText = true;

//pings -------------------------------------------------

    @SwitchProperty({
    name: "Carrot King Ping",
    description: "Enable/Disable Carrot King Ping",
    category: "Pings",
    })
    carrotPing = true;

    @SwitchProperty({
        name: "Thunder Ping",
        description: "Enable/Disable Thunder Ping",
        category: "Pings",
    })
    thunderPing = true;

    @SwitchProperty({
        name: "Jawbus Ping",
        description: "Enable/Disable Jawbus Ping",
        category: "Pings",
    })
    jawbusPing = true;

    @SwitchProperty({
        name: "Double Hook Ping",
        description: "Enable/Disable Double Hook Ping",
        category: "Pings",
    })
    doubleHookPing = true;

//notifs --------------------------------------------------

@SwitchProperty({
    name: "Jawbus party notification",
    description: "Enable/Disable Jawbus message in pchat",
    category: "Party",
})
JawbusPchat = true;

@SwitchProperty({
    name: "Thunder party notification",
    description: "Enable/Disable Thunder message in pchat",
    category: "Party",
})
ThunderPchat = true;

@SwitchProperty({
    name: "Vanquisher party notification",
    description: "Enable/Disable Vanquisher message in pchat",
    category: "Party",
})
VanqPchat = true;

//bobber stuff ----------------------------------------------

@SwitchProperty({
    name: "Highlighted Bobber",
    description: "Highlights your own bobber",
    category: "bobber",
})
highlightedHook = false;

@PercentSliderProperty({
    name: 'Red percentage',
    description: 'Select a percentage for red',
    category: 'bobber',
    subcategory: 'bobberColors',
})
red = 0.0;

@PercentSliderProperty({
    name: 'Green percentage',
    description: 'Select a percentage for green',
    category: 'bobber',
    subcategory: 'bobberColors',
})
green = 0.0;

@PercentSliderProperty({
    name: 'Blue percentage',
    description: 'Select a percentage for blue',
    category: 'bobber',
    subcategory: 'bobberColors',
})
blue = 0.0;

@SwitchProperty({
    name: "RGB",
    description: '&r&cNOTICE: ALL COLORS MUST BE SET TO 100 FOR THIS TO WORK!',
    category: "bobber",
    subcategory: 'bobberColors'
})
rgbEnnabled = false;

@SwitchProperty({
    name: "Bobber counter",
    description: "Displays the number of Bobbers around you",
    category: "bobber",
})
bobberCounter = true;

@SwitchProperty({
    name: "Bobber counter",
    description: "Displays the number of Bobbers around you (slightly off sometimes)",
    category: "misc",
})
bobberCounter = true;

}

export default new Settings();