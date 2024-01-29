// Base JS found here: https://codereview.stackexchange.com/a/277669
const element = document.getElementById('heather-waving')
element.addEventListener('mouseenter', (event) => {
    element.src = element.src.replace('images/portfoliowave-static.png', 'images/portfoliowave-animated.png')
})

element.addEventListener('mouseleave', (event) => {
    element.src = element.src.replace('images/portfoliowave-animated.png', 'images/portfoliowave-static.png')
})