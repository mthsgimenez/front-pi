let tops = ['colete.jpg', 'cortavento.jpg', 'sueter.jpg'];
let foots = ['galocha.jpg', 'nikedunk.jpg', 'oakleypreto.jpg'];

let indexTop = 0;
let indexFoot = 0;

function updateImg(index, list, imgId) {
    let img = document.getElementById(imgId);
    img.src = 'assets/img/' + list[index];
}

function changeIndex(direction, index, list) {
    if (direction === 'next') {
        index++;
        if (index > list.length - 1) {
            index = 0;
        }
    } else if (direction === 'previous') {
        index--;
        if (index < 0) {
            index = list.length - 1;
        }
    }
    return index;
}

function atualizaImagem(imgId, list, index) {
    updateImg(index, list, imgId);
}

function navigate(direction, type) {
    if (type === 'top') {
        indexTop = changeIndex(direction, indexTop, tops);
        atualizaImagem('img-top', tops, indexTop);
    } else if (type === 'foot') {
        indexFoot = changeIndex(direction, indexFoot, foots);
        atualizaImagem('img-foot', foots, indexFoot);
    }
}
