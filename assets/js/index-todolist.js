let x = document.getElementById('para')

x.addEventListener('focusin', function(){
    this.nextElementSibling.classList.add('changeLabel')
})

x.addEventListener('focusout', function(){
    if((x.value) == ''){

        this.nextElementSibling.classList.remove('changeLabel')
    }
})

document.getElementsByClassName('btn')[0].addEventListener('click', function(){
    temp = x.value
    if(temp != ''){
        _liTag = document.createElement('li')
        _liTag.classList.add('line')
        _liTag.innerHTML = temp + '<i onclick="_deleted(this)" ><i class="bi bi-trash3"></i></i>'
        document.getElementById('list').appendChild(_liTag)
        x.value = ''
        x.focus()
    }
    else{
        alert('Please Add Your Task!')
    }
})


function _deleted(c){
    c.parentElement.remove()

}