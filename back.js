const body = document.querySelector('h1');
body.style.backgroundColor='blue';


function pilihanComputer() {
    const comp = Math.random()
    
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.74) return 'semut';
    return 'orang';
};

function hasil(comp,player) {
    if (player == comp) return 'seri';
    if (player == 'gajah') return (comp == 'orang') ? 'menang':'kalah';
    if (player == 'orang') return (comp == 'semut') ? 'menang': 'kalah';
    if (player == 'semut') return (comp == 'gajah') ? 'menang' : 'kalah';
}


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanPlayer = pGajah.className;
//     const pilihanCompute = pilihanComputer();
//     const kHasil = hasil(pilihanCompute, pilihanPlayer);
//     const pAcak = document.querySelector('.img-komputer');
    
//     pAcak.setAttribute('src', 'img/' + pilihanCompute + '.png');
//     // setInterval(pAcak, )
    
//     const kotakHasil = document.querySelector('.info');
//     kotakHasil.innerHTML=kHasil;
// });



// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function() {
//     const pilihanPlayer = pOrang.className;
//     const pilihanCompute = pilihanComputer();
//     const kHasil = hasil(pilihanCompute, pilihanPlayer);
//     const pAcak = document.querySelector('.img-komputer');
    
//     pAcak.setAttribute('src', 'img/' + pilihanCompute + '.png');
    
//     const kotakHasil = document.querySelector('.info');
//     kotakHasil.innerHTML=kHasil;
    
// });


// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function() {
//     const pilihanCompute = pilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const kHasil = hasil(pilihanCompute, pilihanPlayer);
//     const pAcak = document.querySelector('.img-komputer');
    
//     pAcak .setAttribute('src', 'img/' + pilihanCompute + '.png');

//     const kotakHasil = document.querySelector('.info');
//     kotakHasil.innerHTML=kHasil;
// });



const gambarComp = document.querySelector('.img-komputer');
const gambar = document.querySelectorAll('li img');
let i= 0;
gambar.forEach(function() {
    const pilihanPlayer = gambar[i++];
    
    pilihanPlayer.addEventListener('click', function() {
        const pilihanComp = pilihanComputer();
        const user = pilihanPlayer.className;
        const hasilAkhir = hasil(pilihanComp, user);
        
        const kInfo = document.querySelector('.info');
        kInfo.innerHTML=hasilAkhir;
        setTimeout(function() {
            gambarComp.setAttribute('src', 'img/'+ pilihanComp + '.png');
        }, 1010)
        putar();
    });
    // console.log(pilihanComputer);
    // console.log(player);
    // console.log(hasil);
    
});

const acak = ['gajah', 'orang', 'semut'];
let j = 0;
function putar() {
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (j == acak.length) {
            j = 0
        };
        if ((new Date().getTime() - waktuMulai) > 1000 ) {
            clearInterval;
            return;
        };
        gambarComp.setAttribute('src', 'img/' + acak[j++] + '.png');
    }, 100);
}