namespace StatusBarKind {
    export const E_Energy = StatusBarKind.create()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    HP.attachToSprite(mySprite, 3, 0)
    HP = statusbars.create(20, 4, StatusBarKind.Health)
    Zug_meter = statusbars.create(20, 1, StatusBarKind.Energy)
    Zug_meter.attachToSprite(mySprite, 3, 6)
    HP.setLabel("HP", 1)
    Zug_meter.setColor(5, 1)
})
let E_HP = 0
let Zug_meter: StatusBarSprite = null
let HP: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..............ccccccccc........
    ............cc555555555cc......
    ...........c5555555555555c.....
    ..........c55555555555555dc....
    .........c555555555555b5bdc....
    .........555bc1555555555bdcccc.
    ........c555ccc55555555bbdccddc
    ........c555bcb5555555ccddcdddc
    .......c555555555551ccccddbdddc
    .......c555555b555c1cccbddbbdbc
    .......c5555555bbc33333ddddbcc.
    .......c555555555bc333555ddbc..
    .......c5555555555555555555c...
    .......cd555555555555cccc555c..
    .......cd55555555555c555c555c..
    .......cdd555555555b5555b555c..
    .......cddd55555ddbb555bb555c..
    .......cdddd55555555555b5555c..
    .......cddddd5555555ddb5555dc..
    c......cdddddd555555555555dcc..
    cc...ccddddddd555555555555dc...
    cdccccdddddd555555d55555ddcc...
    cdddddddddbd5555555ddddddccccc.
    ccdddddddbb55555555bddddccbddc.
    .ccddddddbd55555555bdddccdddc..
    ..cccddddbd5555555cddcccddbc...
    ....ccccccd555555bcccc.cccc....
    .........cc555555bc............
    .........cc55555555c...........
    ..........cccccccccc...........
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `, SpriteKind.Enemy)
mySprite.setPosition(20, 60)
mySprite2.setPosition(140, 60)
let Runden = 1
Runden += 1
game.onUpdate(function () {
    Runden = 2
    if (controller.A.isPressed()) {
        Runden += 1
    } else if (controller.B.isPressed()) {
        Runden += 2
    } else {
        E_HP += 0
    }
})
