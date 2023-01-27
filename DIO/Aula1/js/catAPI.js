const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCat = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return webpurl;
    }catch (e) {
        console.log(e.message);
    }

};


const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCat();

};

catBtn.addEventListener('click', loadImg);

loadImg();
