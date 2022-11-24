let chiffre_précedent = 0
let Chiffre_précedent_2 = 0
let chiffre_actuel = 0
basic.forever(function () {
    chiffre_précedent = 1
    Chiffre_précedent_2 = 0
    for (let index = 0; index < 10; index++) {
        chiffre_actuel = chiffre_précedent + Chiffre_précedent_2
        Chiffre_précedent_2 = chiffre_précedent
        chiffre_précedent = chiffre_actuel
        basic.showNumber(chiffre_actuel)
        basic.pause(2000)
    }
})
