import Settings from "./config";
import RenderLib from "../RenderLib/index.js";

let bobberCounter = 0;
const sound = new Sound({source:"320905__suzenako__the-ding.ogg"});
const Loader = Java.type("net.minecraftforge.fml.common.Loader");

//made by IcarusPhantom
function rgb() {
    if (Settings.red >= 1.0) {
        if (Settings.blue > 0.0) {
            Settings.blue = Settings.blue - 0.05;
        } else {
            Settings.green = Settings.green + 0.05;
        }
        if (Settings.green >= 1) {
            Settings.green = 1;
            Settings.red = Settings.red - 0.05;
        }
    } else if (Settings.green >= 1.0) {
        if (Settings.red > 0.0) {
            Settings.red = Settings.red - 0.05;
        } else {
            Settings.blue = Settings.blue + 0.05;
        }
        if (Settings.blue >= 1) {
            Settings.blue = 1;
            Settings.green = Settings.green - 0.05;
        }
    } else if (Settings.blue >= 1.0) {
        if (Settings.green > 0.0) {
            Settings.green = Settings.green - 0.05;
        } else {
            Settings.red = Settings.red + 0.05;
        }
        if (Settings.red >= 1) {
            Settings.red = 1;
            Settings.blue = Settings.blue - 0.05;
        }
    }
}

register("command", () => Settings.openGUI()).setName("nfu").setAliases("netherfishingutils");

//SBE check 

if (Loader.isModLoaded("SkyblockExtras")) {
    Settings.jawbusText = false;
    Settings.jawbusPing = false;
} else {
    Settings.jawbusText = true;
    Settings.jawbusPing = true;
}

//visual/audio

register("chat", () => {
    if (Settings.carrotPing) {
    sound.play();
    }

    if (Settings.carrotText) {
        Client.showTitle("&aCarrot King!","", 1, 30, 1);
    }
}).setCriteria("Is this even a fish? It's the Carrot King!")

register("chat", () => {
    if (Settings.thunderPing) {
    sound.play();
    }

    if (Settings.thunderText) {
        Client.showTitle("&3Thunder!","", 1, 30, 1);
    }
}).setCriteria("You hear a massive rumble as Thunder emerges.")

register("chat", () => {
    if(Settings.jawbusPing) {
        sound.play();
    }

    if (Settings.jawbusText) {
        Client.showTitle("&r&cJawbus!","", 1, 30, 1);
    }
}).setCriteria("You have angered a legendary creature... Lord Jawbus has arrived")

register("chat", () => {
    if (Settings.doubleHookPing) {
        sound.play();
    }
}).setCriteria("It's a Double Hook! Woot woot!")

register("chat", () => {
    if(Settings.doubleHookPing) {
    sound.play();
    }
}).setCriteria("It's a Double Hook!")


//party
register("chat", () => {
    if (Settings.VanqPchat) {
		ChatLib.say("/pc Vanquisher!")
    }
}).setCriteria("A Vanquisher is spawning nearby!")

register("chat", () => {
	if(Settings.ThunderPchat){	
			ChatLib.say("/pc Thunder!")
		}
}).setCriteria("You hear a massive rumble as Thunder emerges.")

register("chat", () => {
	if(Settings.JawbusPchat){	
				ChatLib.say("/pc [!] Jawbus alert [!]")
		}
}).setCriteria("You have angered a legendary creature... Lord Jawbus has arrived.")

//hides smoke particles (test)
/*register("spawnParticle", (particle, type, event) => {
    if ((type.func_179348_c() == 41) || (type.func_179348_c() == 42)) cancel(event)
})*/

//bobber coloring
register('renderWorld', () => {
    if (Settings.highlightedHook || Settings.bobberCounter) {
        bobberCounter = 0;
        World.getAllEntities().forEach(entity => {
            if(entity.getClassName() == "EntityFishHook") {
                bobberCounter++;
                    if(new PlayerMP(entity.getEntity().field_146042_b).getName() == Player.getName() && Settings.highlightedHook) {
                        RenderLib.drawInnerEspBox(entity.x, entity.y, entity.z, 0.5, 0.3, Settings.red, Settings.green, Settings.blue, 1, true);
                            if(Settings.rgbEnnabled) {
                                rgb();
                            }
                    } else {
                        if (Settings.hideParticles && new PlayerMP(entity.getEntity().field_146042_b).getName() == Player.getName()) {
                            
                        }
                    }
            }   
        })
    }
})

register('renderOverlay', () => {
    if(Settings.bobberCounter) {
        bobberCounter.toString();
        Renderer.drawString("bobbers around you: " + bobberCounter, 10, 10);
    }
})

    




