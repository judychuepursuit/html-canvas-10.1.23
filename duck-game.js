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

// game.js
 
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let duckImage = new Image ()
duckImage.src = "duck.png"
class GameObject {
    constructor (x = 0, y = 0) {
        this.image = null
        this.position = {
            x: x,
            y: y
        }
        this.speed = {
            x: 0,
            y: 0
        }
    }
    draw () {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
    move () {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        if (this.position.y > canvas.height - 34) {
            this.position.y = canvas.height - 34
        }
        this.speed.y += 1
    }
    jump () {
        this.speed.y = -20
    }
}
let duck = new GameObject (200, 0)
duck.image = duckImage
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        duck.jump()
    }
})
setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    duck.move()
    duck.draw()
}, 30)