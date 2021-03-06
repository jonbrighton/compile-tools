'use strict'

const link = document.querySelector('.show')
const content = document.querySelector('.enquiries')

content.classList.add('hide-text')

link.addEventListener('click', function (e) {
  e.preventDefault() // Prevent default behaviour of 'a' element
  content.classList.toggle('hide-text')
})
