import React from 'react';
import './Container.css'


function Footer() {

    return (
        <section className="linkFooter">
            <a href="sobre">Sobre</a>
            <a href="blog">Blog</a>
            <a href="carreiras">Carreiras</a>
            <a href="ajuda">Ajuda</a>
            <a href="api">API</a>
            <a href="privacidade">Privacidade</a>
            <a href="termos">Termos</a>
            <a href="principais_contas">Princípais contas</a>
            <a href="hashtag">Hashtags</a>
            <a href="localizacoes">Localizações</a>
            <a href="beleza">Beleza</a>
            <a href="danca">Dança</a>
            <a href="fitness">Fitness</a>
            <a href="comida_e_bebida">Comida e bebida</a>
            <a href="casa_e_jardim">Casa e jardim</a>
            <a href="musica">Música</a>
            <a href="artes_visuais">Artes visuais</a>

            <div id="idioma">
                <select name="select">
                    <option value="af">Afrikaans</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en">English</option>
                    <option value="en-gb">English (UK)</option>
                    <option value="es">Español (España)</option>
                    <option value="es-la">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nb">Norsk</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="pt-br" selected>Português (Brasil)</option>
                    <option value="pt">Português (Portugal)</option>
                    <option value="ru">Русский</option>
                    <option value="sv">Svenska</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="tl">Filipino</option>
                    <option value="tr">Türkçe</option>
                    <option value="zh-cn">中文(简体)</option>
                    <option value="zh-tw">中文(台灣)</option>
                    <option value="bn">বাংলা</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="hi">हिन्दी</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hu">Magyar</option>
                    <option value="kn">ಕನ್ನಡ</option>
                    <option value="ml">മലയാളം</option>
                    <option value="mr">मराठी</option>
                    <option value="ne">नेपाली</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                    <option value="si">සිංහල</option>
                    <option value="sk">Slovenčina</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-hk">中文(香港)</option>
                    <option value="bg">Български</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Română</option>
                    <option value="sr">Српски</option>
                    <option value="uk">Українська</option>
                </select>
                <a>&copy; 2021 Instagran do facebook</a>
            </div>
        </section>
    )
}
export default Footer
