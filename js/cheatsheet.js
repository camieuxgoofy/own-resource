//infinite loop for slide
let data;
let index = 0;
const next = () => {
    index++;
    if (index === data.length) {
        index = 0;
    }
};
const prev = () => {
    index--;
    if (index === -1) {
        index = data.length - 1;
    }
};