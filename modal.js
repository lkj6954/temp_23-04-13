let tTabs = document.querySelectorAll('.tabs ul li');

tTabs[0].addEventListener('click', function () {
    tTabs[0].classList.remove('tab-not-selected');
    tTabs[0].classList.add('tab-selected');

    tTabs[1].classList.remove('tab-selected');
    tTabs[1].classList.add('tab-not-selected');

    document.querySelector('tab-order-list').classList.remove('hide');
    document.querySelector('tab-diner-info').classList.add('hide');
});

tTabs[1].addEventListener('click', function () {
    tTabs[1].classList.remove('tab-not-selected');
    tTabs[1].classList.add('tab-selected');

    tTabs[0].classList.remove('tab-selected');
    tTabs[0].classList.add('tab-not-selected');

    document.querySelector('tab-diner-info').classList.remove('hide');
    document.querySelector('tab-order-list').classList.add('hide');
});

// 모든 <order-item> 태그 안의 .checkbox를 클릭했을 때,
// img src가 checkbox_off_48px.svg이면, checkbox_on_48px.svg로 변경,
// img src가 checkbox_on_48px.svg이면, checkbox_off_48px.svg로 변경

let orderItemCnt = document.getElementsByTagName('order-item').length;
let cCheckbox = document.querySelectorAll('.check-box');

for (let i = 0; i < orderItemCnt; i++) {
    cCheckbox[i].addEventListener('click', () => {
        if (cCheckbox[i].innerHTML == '<img src="checkbox_off_48px.svg">') {
            cCheckbox[i].innerHTML = '<img src="checkbox_on_48px.svg">';
        } else if (
            cCheckbox[i].innerHTML == '<img src="checkbox_on_48px.svg">'
        ) {
            cCheckbox[i].innerHTML = '<img src="checkbox_off_48px.svg">';
        } else {
            console.log('error');
        }
    });
}
