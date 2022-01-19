Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class WnGSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "crawl", default: 0xFFFF00, name: "Crawl"},
                {id: "standard", default: 0x00FF00, name: "Standard"},
                {id: "run", default: 0x0000FF, name: "Run"},
                {id: "sprint", default: 0xFFFF00, name: "Sprint"},
                {id: "swim", default: 0xFFFF00, name: "Swim"},
                {id: "fly", default: 0xFFFF00, name: "Fly"},
                {id: "climb", default: 0xFFFF00, name: "Climb"},
                {id: "stealth", default: 0xFF8000, name: "Stealth"},
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.combat.speed
            //const fly = actor.data.data.combat.fly
            let ranges = []
            ranges.push({range: baseSpeed / 2, color: "crawl"})
            ranges.push({range: baseSpeed, color: "standard"})
            ranges.push({range: baseSpeed * 2, color: "run"})
            ranges.push({range: baseSpeed * 3, color: "sprint"})
            console.log(ranges)
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

    dragRuler.registerModule("wng-dragruler", WnGSpeedProvider)
})