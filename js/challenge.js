document.addEventListener('DOMContentLoaded', () => {
    //Increment Counter
    const increment = document.getElementById('plus')

    //Decrement Counter
    const decrement = document.getElementById('minus')

    //Like Number
    const like = document.getElementById('heart')
    let likesObj = {}
    like.addEventListener('click', () => {
        let counterValue = document.getElementById('counter').textContent
        if(likesObj[counterValue]) {
            likesObj[counterValue] += 1
            li.innerText = `${counterValue} has been liked ${likesObj[counterValue]}`
        } else {
            likesObj[counterValue] -= 1
            li.innerText = `${counterValue} has been liked ${likesObj[counterValue]}`
        }
        let li = document.createElement('li')
        let likesUL = document.querySelector('.likes')
        likesUL.appendChild(li)
    })
    //Submit
    const submit = document.getElementById('submit')
    
    let comment = document.querySelector('#comment-form')
    comment.addEventListener('submit', (event) => {
        event.preventDefault()
        const list = document.getElementById('list')
        let li = document.createElement('li')
        li.innerText = event.target[0].value
        list.appendChild(li)
        comment.reset()
    })
})

//Create counter
let counter = setInterval(updated, 1000)

let upTo = 0

function updated() {
  let count = document.getElementById('counter')
  count.innerHTML = ++upTo
  increment.addEventListener('click',() => {
    count++
  })
  decrement.addEventListener('click', () => {
    count--
  })
}

//Pause Counter
const pause = document.querySelector('#pause')

pause.addEventListener(click, () => {
    if(pause.innerText === 'resume'){
        pause.innerText = 'pause'
        counter = setInterval(updated, 1000)
    } else {
        pause.innerText = 'resume'
        clearInterval(counter)
    }
decrement.disable = !decrement.disabled
increment.disable = !increment.disabled
like.disable = !like.diable
submit.disable = !submit.disable
})