Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class WnGSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                // Some colors duplicated. I wanted to get this uploaded and rushed these out
                {id: "half", default: 0xB45205, name: "Half"},
                {id: "standard", default: 0x79F12F, name: "Standard"},
                {id: "run", default: 0xF1DF2F, name: "Run"},
                {id: "sprint", default: 0xF16D2F, name: "Sprint"},
                {id: "fly", default: 0x2F86F1, name: "Fly"}
            ]
        }

        getRanges(token) {
            let landSpeed = token.actor.combat.speed
            let flySpeed = token.actor.combat.fly

            //console.log("Loading terrain type...")

            //let terrainName = canvas.terrain.terrainFromPixels(token.x, token.y)[0]?.environment ?? "global"
            //console.log("Terrain type is", terrainName)

            //console.log("Terrain type is", terrainName)

            let half = {range: landSpeed / 2, color: "half"}
            let standard = {range: landSpeed, color: "standard"}
            let run = {range: landSpeed * 2, color: "run"}
            let sprint = {range: landSpeed * 3, color: "sprint"}
            let fly = { range: flySpeed, color: "fly" }

            let ranges = [
                half,
                standard,
                run,
                sprint
            ]
            // If a token is "Dying", use the combat tracker to "Mark Defeated"
            //if (token?.overlayEffect === "icons/svg/skull.svg") {
            if (token.actor.hasCondition("dying")) {
                ranges = [
                    half
                ]
                return ranges
            }
            if (token.actor.hasCondition("exhausted")) {
                ranges = [
                    half,
                    standard
                ]
                return ranges
            }
            if (token.actor.hasCondition("staggered")) {
                ranges = [
                    half,
                    standard
                ]
                return ranges
            }
            if (token.actor.hasCondition("prone")) {
                ranges = [
                    half
                ]
                return ranges
            }

            if (token.elevation > 0) {
                if (flySpeed > 0) {
                    ranges = [
                        fly
                    ]
                } else {
                    ranges = []
                }
                return ranges
            }

            if (token.hidden) {
                ranges = [
                    half
                ]
                return ranges
            }
            if (token.actor.hasCondition("restrained")) {
                ranges = []
                return ranges
            }
            if (token.actor.hasCondition("all-out-attack")) {
                ranges = []
                return ranges
            }
            if ( token.actor.hasCondition("dead") )
            {
                ranges = [];
                return ranges;
            }
            if (token.actor.hasCondition("full-defence")) {
                ranges = [
                    half
                ]
                return ranges
            }
            return ranges
        }
    }

    dragRuler.registerModule("wng-dragruler", WnGSpeedProvider)
})