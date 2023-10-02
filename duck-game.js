// My input -followed along then a bug, copied John's code and duck dissapeared?, I used his code and still didnt work, winds up he issue w slack:

// John Goodman
//   1:07 PM
// When you copied the code from Slack it used an irregular newline character that the browser didn't know how to interpret

// const canvas = document.getElementById("canvas")
// // console.log(canvas)
// const ctx = canvas.getContext("2d")

// let duckImage = new Image ()
// duckImage.src = "duck.png"

// // setTimeout(() => {
// //     ctx.drawImage(duckImage, 220, 160)
// // }, 100);

// duckImage.onload = () => {
//     // pos = position
//     // ctx.drawImage(duckImage, 220, 180)
//     // you can add width and ht just add, then the 2 extra numbersin 
// }

// // New object idea: duck
// // image:
// // x position
// // y position


// class GameObject {
//     constructor (x = 0, y = 0) {
//         this.image = null
//         this.pos = {
//             x: x,
//             y: y
//         }
//         this.speead = {
//             x: 0,
//             y: 0
//         }
//     }
//     draw () {
//         ctx.drawImage(duck.image, duck.pos.x, duck.pos.y)
//     }
// ​
//     move () {
//         this.position.x += this.speed.x
//         this.position.y += this.speed.y
//     }
// }

// let duck = new GameObject ()
// duck.image = duckImage

// // setTimeout- sets one time
// setInterval(() => {
// // console.log("Hello")
// // console.log(Math.random)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.drawImage(duck.image, duck.pos.x, duck.pos.y)
//     duck.pos.x += 5
//     duck.pos.y += 1.1
// }, 100)




// original code w bug from John on slack
// game.js
 
// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")
// let duckImage = new Image ()
// duckImage.src = "duck.png"
// class GameObject {
//     constructor (x = 0, y = 0) {
//         this.image = null
//         this.position = {
//             x: x,
//             y: y
//         }
//         this.speed = {
//             x: 0,
//             y: 0
//         }
//     }
//     draw () {
//         ctx.drawImage(this.image, this.position.x, this.position.y)
//     }
//     move () {
//         this.position.x += this.speed.x
//         this.position.y += this.speed.y
//         if (this.position.y > canvas.height - 34) {
//             this.position.y = canvas.height - 34
//         }
//         this.speed.y += 1
//     }
//     jump () {
//         this.speed.y = -20
//     }
// }
// let duck = new GameObject (200, 0)
// duck.image = duckImage
// document.addEventListener("keydown", (event) => {
//     if (event.code === "ArrowUp") {
//         duck.jump()
//     }
// })
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     duck.move()
//     duck.draw()
// }, 30)



// fixed code from John on slack
// const canvas = document.getElementById("canvas")
// canvas.style.imageRendering = "pixelated"
// const ctx = canvas.getContext("2d")

// let duckImage = new Image ()
// duckImage.src = "duck.png"

// class GameObject {
//     constructor (x = 0, y = 0) {
//         this.image = null
//         this.position = {
//             x: x,
//             y: y
//         }
//         this.speed = {
//             x: 0,
//             y: 0
//         }
//     }

//     draw () {
//         ctx.drawImage(this.image, this.position.x, this.position.y)
//     }

//     move () {
//         this.position.x += this.speed.x
//         this.position.y += this.speed.y

//         if (this.position.y > canvas.height - 34) {
//             this.position.y = canvas.height - 34
//         }

//         this.speed.y += 1
//     }

//     jump () {
//         if (this.position.y === canvas.height - 34) {
//             this.speed.y = -20
//         }
//     }
// }

// let duck = new GameObject (200, 0)
// duck.image = duckImage

// document.addEventListener("keydown", (event) => {
//     if (event.code === "ArrowUp") {
//         duck.jump()
//     }
// })

// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     duck.move()
//     duck.draw()
// }, 30)


// Okay, so that bug was just something from copy-pasting from Slack. Try again now that it's a code block instead of a file, that should work.
// Here's the link to the version on Github, which is the same except that the duck can also move from left to right:
// https://github.com/j-goodman/duck-game





// from Johns repo on git hubclass Game {

class Game {
    constructor () {
        this.objects = []
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let object of this.objects) {
                object.move()
                object.draw()
            }
        }, 30)
    }
}

class GameObject {
    constructor (x = 0, y = 0) {
        this.image = null
        this.pos = {
            x: x,
            y: y,
        }
        this.speed = {
            x: 0,
            y: 0,
        }
    }

    move () {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
        if (this.pos.y > 326) {
            this.pos.y = 326
        }
        if (this.individualMove) {
            this.individualMove()
        }
    }

    draw () {
        ctx.drawImage(this.image, this.pos.x, this.pos.y)
    }
}

class Duck extends GameObject {
    individualMove () {
        this.speed.y += 1
        if (game.controller.leftKeyDown) {
            this.speed.x = -6
        } else if (game.controller.rightKeyDown) {
            this.speed.x = 6
        } else {
            this.speed.x = 0
        }
    }

    jump () {
        if (this.pos.y === 326) {
            this.speed.y = -16
        }
    }
}

let duck = new Duck (223, 160)
duck.image = new Image ()
duck.image.src = "duck.png"

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.style.imageRendering = "pixelated"

const game = new Game ()
game.objects.push(duck)

game.controller = {
    leftKeyDown: false,
    rightKeyDown: false
}

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        duck.jump()
    }
    if (event.code === "ArrowLeft") {
        game.controller.leftKeyDown = true
    }
    if (event.code === "ArrowRight") {
        game.controller.rightKeyDown = true
    }
})

document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        game.controller.leftKeyDown = false
    }
    if (event.code === "ArrowRight") {
        game.controller.rightKeyDown = false
    }
})