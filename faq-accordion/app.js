const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        const answer = btn.nextElementSibling;
        const plusIcon = btn.getElementsByClassName('plus-icon')
        const minusIcon = this.getElementsByClassName('minus-icon')

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    })
})