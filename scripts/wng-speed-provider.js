Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class WrathandGlorySpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "crawl", default: 0xFFFF00, name: "foundryvtt-wng-speed-provider.speeds.crawl"},
                {id: "standard", default: 0x00FF00, name: "foundryvtt-wng-speed-provider.speeds.standard"},
                {id: "run", default: 0x0000FF, name: "foundryvtt-wng-speed-provider.speeds.run"},
                {id: "sprint", default: 0xFFFF00, name: "foundryvtt-wng-speed-provider.speeds.sprint"},


                {id: "swim", default: 0xFFFF00, name: "foundryvtt-wng-speed-provider.speeds.swim"},
                {id: "fly", default: 0xFFFF00, name: "foundryvtt-wng-speed-provider.speeds.fly"},
                {id: "climb", default: 0xFFFF00, name: "foundryvtt-wng-speed-provider.speeds.climb"},
                {id: "stealth", default: 0xFF8000, name: "foundryvtt-wng-speed-provider.speeds.stealth"},
            ]
        }

        getRanges(token) {
            const baseSpeed = token.data.data.combat.speed
            //const fly = actor.data.data.combat.fly
            let ranges = []
            let condmod = 1
            let canmove = {
                crawl: true, standard: true, run: true, sprint: true, swim: false, fly: false, climb: false, stealth: false
            }

            ranges.push({range: baseSpeed / 2, color: "crawl"})
            ranges.push({range: baseSpeed, color: "standard"})
            ranges.push({range: baseSpeed * 2, color: "run"})
            ranges.push({range: baseSpeed * 3, color: "sprint"})
            return ranges
            //if (fly > 0){
            //    canmove.fly = true
            //}


            /*if (actor.hasCondition("prone")) {
                const ranges = [
                    {
                        range: baseSpeed / 2, color: "crawl"
                    },
                    {
                        range: baseSpeed, color: "standard"
                    }
                ]
            }*/

            /*if (actor.hasCondition("exhausted")) {
                const ranges = [
                    {
                        range: baseSpeed / 2, color: "crawl"
                    },
                    {
                        range: baseSpeed, color: "standard"
                    }
                ]
            }*/

            /*if (actor.hasCondition("restrained")) {
                const ranges = [
                    {
                        range: 0, color: "crawl"
                    }
                ]
            }*/
            /*for (test in canmove) {
                if()
            }*/

            /*const ranges = [
                {range: speed, color: "walk"},
                {range: baseSpeed * 2, color: "dash"}
            ]*/


            //return ranges
        }
    }

    dragRuler.registerModule("foundryvtt-wng-speed-provider", WnGSpeedProvider)
})