const images = {
    hats: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fbone-new-era-9forty-new-york-aba-curva-caqui%2F38%2FIJX-0401-138%2FIJX-0401-138_zoom1.jpg%3Fts%3D1691511542&f=1&nofb=1&ipt=52475bcfc03f1aad8e1aa2932a0384c0ea619156ae7b0323020e7395ef13cf98',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F14%2Fa9%2F66%2F14a96681532fce33a721f4dbd0c7773d.jpg&f=1&nofb=1&ipt=b1b2fd8ac31d131ae0166d8e50e71965978b738c9a5fe2c9c09d949a0744082d',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F871a6b5e-3979-4ceb-950a-06b94e7f7eb8_1.e7aa4272966613ba239128683a9bd985.jpeg&f=1&nofb=1&ipt=702ecb778f800a6cd55b894d43b1f41027093d08cd20b09b9f8121559ce59605',
    ],
    tops: [
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gap.com%2Fwebcontent%2F0020%2F597%2F945%2Fcn20597945.jpg&f=1&nofb=1&ipt=fa17f1fc9bc694b2dbac1532bd80851a519dadbafa7232d84fb20a3d9e760ee7',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fcamiseta-liga-retro-parana-clube-1997%2F96%2F395-6406-096%2F395-6406-096_zoom1.jpg%3F&f=1&nofb=1&ipt=8df7542613b77f921992a16189fe87132cb5f9bd3c6f4c4f2a56135d905ac2a9',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lojasrenner.com.br%2Fitem%2F913879603%2Foriginal%2F13.jpg&f=1&nofb=1&ipt=112b5557c2cf186b9d34c509a47ee618f3501ba75c15acf6583a999950f76278',
    ],
    pants: [
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.pullandbear.net%2F2%2Fphotos%2F2025%2FV%2F0%2F2%2Fp%2F3683%2F534%2F427%2F3683534427_2_20_8.jpg%3Ft%3D1742565218643&f=1&nofb=1&ipt=eea53777e816c89b1c127b00f31778b9ab822f50b5c47d191a55144a511d5c1f',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.tcdn.com.br%2Fimg%2Fimg_prod%2F863082%2Fcalca_feminina_flare_crocker_4842_1_5599e4c394924232bd7df03e109dcf7f.jpg&f=1&nofb=1&ipt=344328f017fa7584da057c7ca5750d71b06735ea01628daf8a9195248d6d4549',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fshort-bermuda-tactel-black-bear-liso-lisa-masculina-casual%2F06%2F50S-0002-006%2F50S-0002-006_zoom1.jpg%3Fts%3D1626361082&f=1&nofb=1&ipt=89dbad06f3d20d8ad3671094201cfdb55087c4e30c6923d8adbefd941bdb3171',
    ],
    shoes: [
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi8.amplience.net%2Fi%2Foffice%2F2413100347_ld1.jpg%3F%24newhighres%24&f=1&nofb=1&ipt=ab853535a0740bd17217cab18274117d898b4751b436eafd16132cb5b0d8d3b0',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.YD15kdI3PMPLg5N-_l8crgHaHa%3Fpid%3DApi&f=1&ipt=dd7a02998449b010584eed17b7404b67a0d24bf2c9fd07b6dcf7d26ac38978a6&ipo=images',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fchinelo-havaianas-brasil-preto-3940-preto-3940%2F06%2FD53-3452-006%2FD53-3452-006_zoom2.jpg%3Fts%3D1637295698%26&f=1&nofb=1&ipt=50fbe735c04c417e46c180bb8ac4069c6dc56393de19d5463e63a4d46022c9ad',
    ],
};

const carousels = {
	hats: document.querySelector('#hats'),
	tops: document.querySelector('#tops'),
	pants: document.querySelector('#pants'),
	shoes: document.querySelector('#shoes')
};

const carouselIndexes = {
	hats: 0,
	tops: 0,
	pants: 0,
	shoes: 0
};

function moveCarousel(carouselName, direction) {
	const carousel = carousels[carouselName];
	const images = carousel.children;
	const totalImages = images.length;

	carouselIndexes[carouselName] = (carouselIndexes[carouselName] + direction + totalImages) % totalImages;

	carousel.style.transform = `translateX(-${(carouselIndexes[carouselName] * (images[carouselIndexes[carouselName]].width + 50))}px)`;
}

function addImage(carouselName, src) {
	const carousel = carousels[carouselName];
	const img = document.createElement('img');
	img.src = src;
	carousel.appendChild(img);
}

const categories = ['hats', 'tops', 'pants', 'shoes'];

categories.forEach(category => {
    images[category].forEach(e => {
        addImage(category, e);
    });
});