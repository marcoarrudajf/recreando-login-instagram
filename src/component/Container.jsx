import React from 'react';
import './Container.css'

//Aqui foi feito a função para trocar a imagem.
//Here was made the function to change the image.
function Container() {
    var contar = 1;
    setInterval(function () {
        document.getElementById('car' + contar).checked = true;
        contar++;
        if (contar > 5) {
            contar = 1;
        }
    }, 5000);

    return (

        //Área do HTML do container foto e login.
        //HTML area of ​​the photo and login container.
        <div className="container">
            <div className="imgPrinc">
                <img src={"../../../img-of/cel-of.png"} alt="image" />
                <div className="carrosselImgs">
                    <input type="radio" name="radio-btn" id="car1" />
                    <input type="radio" name="radio-btn" id="car2" />
                    <input type="radio" name="radio-btn" id="car3" />
                    <input type="radio" name="radio-btn" id="car4" />
                    <input type="radio" name="radio-btn" id="car5" />

                    <div className="carrosselImg first">
                        <img src="../../../img-of/s1.png" alt="img1" />
                    </div>
                    <div className="carrosselImg">
                        <img src="../../../img-of/s2.png" alt="img2" />
                    </div>
                    <div className="carrosselImg">
                        <img src="../../../img-of/s3.png" alt="img3" />
                    </div>
                    <div className="carrosselImg">
                        <img src="../../../img-of/s4.png" alt="img4" />
                    </div>
                    <div className="carrosselImg">
                        <img src="../../../img-of/s5.png" alt="img5" />
                    </div>
                </div>
            </div>
            
            <div className="containerLogin">
                <img src="../../../img-of/log.png" alt="logo" id="logo" />
                <img src="../../../img-of/img-perfil.jpeg" alt="logo" id="imgPerfil" />
                <nav className="btnLogin">
                    <button>Continuar como marcoarrudajf</button>
                </nav>

                <div className="containerFooter">
                    <p>Não é marcoarrudajf? </p><a href="#">Trocar de conta</a>
                </div>
            </div>      
        </div>
    )
}
export default Container