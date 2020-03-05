/* Função que aplica a uma div o efeito do tooltip aparecer e mover sobre ela */

export default function FuncaoTooltip(IDdiv, IDtooltip, posicao = 'direita') {

    let divEfeito = document.getElementById(IDdiv);

    divEfeito.addEventListener('mouseover', () => {
        let tooltip = document.getElementById(IDtooltip);
        tooltip.classList.add('mostrarTooltip');

        if (posicao === 'esquerda') {
            divEfeito.addEventListener('mousemove', (event) => {
                tooltip.style.top = event.pageY + 20 + 'px';
                tooltip.style.left = event.pageX + -225 + 'px';
            })

            divEfeito.addEventListener('mouseleave', () => {
                tooltip.classList.remove('mostrarTooltip');
            })
        }
        else {
            divEfeito.addEventListener('mousemove', (event) => {
                tooltip.style.top = event.pageY + 20 + 'px';
                tooltip.style.left = event.pageX + 20 + 'px';
            })

            divEfeito.addEventListener('mouseleave', () => {
                tooltip.classList.remove('mostrarTooltip');
            })
        }

    })

}
