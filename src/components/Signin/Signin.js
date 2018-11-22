import React from 'react';
import Logo from '../Logo/Logo';
import './Signin.css';

class Signin extends React.Component {

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center bg-white o-80">
        <main className="pa4 black-80 w-80-ns">
          <Logo />
          <div className="w-100">
              <h1 className="f2 fw6 ph0 mh0">Ing. Jakub Zelenka</h1>
            <div className="cf nl2 nr2 bb mb2">
              <div className="fl-ns pa3 w-50-ns">
                <ul className="list pl0 tr-ns">
                <li className="fw6">Narozen</li>
                <li>28. 12. 1990</li>
                <li className="fw6">Rodinný stav</li>
                <li>svobodný</li>
                </ul>
              </div>
              <div className="fl-ns pa3 w-50-ns">
                <ul className="list pl0 tl-ns">
                <li>Karla Uhlíře 1092/11</li>
                <li>České Budějovice 370 06</li>
                <li>+420725915889</li>
                <li>jzelenka5@gmail.com</li>
                </ul>
              </div>
            </div>
            <h2 className="f4 fw6 pa3 w-100">Pracovní zkušenosti</h2>
            <div className="cf nl2 nr2 bb mb2">
            <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">02/2018 - dosud</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="f5">INTERNET CZ, a.s.</h4>
                  <h4 className="fw8 f6">Front-end programátor</h4>
                  <p className="measure-wide lh-copy">
                   Správa a vývoj nových funkcionalit webových stránek společnosti, 
                   spolupráce se zahraničními kolegy, redakční systém Kentico
                   (HTML5, CSS3, Javascript, - Bootstrap, jQuery), JIRA
                  </p>
                </div>
              </div>
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">04/2016 - 01/2018</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="f5">INIZIO internet media s.r.o.</h4>
                  <h4 className="fw8 f6">Projektový vedoucí a vývojář</h4>
                  <p className="measure-wide lh-copy">
                   Řízení vývoje webových stránek a mobilních aplikací,
                   vývoj webových stránek – redakční systémy Wordpress, firemní CMS Foxxy 
                   (HTML5, CSS3, Javascript, Latte, PHP, MySQL), editace DNS, práce s Git a SVN
                  </p>
                </div>
              </div>
            </div>
            <h2 className="f4 fw6 pa3 w-100">Vzdělání</h2>
            <div className="cf nl2 nr2 bb mb2">
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">2013 - 2016</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="fw6 f6">Česká zemědělská univerzita v Praze, Provozně-ekonomická fakulta</h4>
                  <p className="measure-wide lh-copy">
                   Obor: Informatika<br />
                   Magisterské studium
                  </p>
                </div>
              </div>
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">2010 - 2013</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="fw6 f6">Jihočeská univerzita v Českých Budějovicích, Pedagogická fakulta</h4>
                  <p className="measure-wide lh-copy">
                   Obor: Informační technologie ve vzdělávání<br />
                   Bakalářské studium
                  </p>
                </div>
              </div>
            </div>
            <h2 className="f4 fw6 pa3 w-100">Certifikáty a kurzy</h2>
            <div className="cf nl2 nr2 bb mb2">
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">Udemy.com</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="fw6 f6">The Complete Web Developer in 2018: Zero to Mastery</h4>
                  <p className="measure-wide lh-copy">
                   <a href="https://www.udemy.com/the-complete-web-developer-in-2018/">
                    https://www.udemy.com/the-complete-web-developer-in-2018/
                    </a>
                  </p>
                  <h4 className="fw6 f6">The Complete Junior to Senior Web Developer Roadmap (2019)</h4>
                  <p className="measure-wide lh-copy">
                   <a href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/">
                    https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/
                    </a>
                  </p>
                  <h4 className="fw6 f6">The Complete React Native and Redux Course</h4>
                  <p className="measure-wide lh-copy">
                   <a href="https://www.udemy.com/the-complete-react-native-and-redux-course/">
                    https://www.udemy.com/the-complete-react-native-and-redux-course/
                    </a>
                  </p>
                </div>
              </div>
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pa3">Ostatní</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="fw6 f6">Školení internetového marketingu</h4>
                  <p className="measure-wide lh-copy">
                   <a href="https://www.h1.cz/skoleni/online-marketing/skoleni-internetoveho-marketingu/">
                    https://www.h1.cz/skoleni/online-marketing/skoleni-internetoveho-marketingu/
                    </a>
                  </p>
                  <h4 className="fw6 f6">2 online kurzy k CMS Kentico (kentico.com)</h4>
                </div>
              </div>
            </div>
            <h2 className="f4 fw6 pa3 w-100">Znalosti a dovednosti</h2>
            <div className="cf nl2 nr2 bb mb2">
                <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pv3 ph2">Jazyky</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="f6">Český jazyk - rodilý mluvčí</h4>
                  <h4 className="f6">Anglický jazyk - úrověň B1</h4>
                  <h4 className="f6">Německý jazyk - úrověň A1</h4>
                </div>
              </div>
              <div className="fl-ns pa3 w-30-ns">
                <h2 className="tl f5 pv3 ph2">Ostatní</h2>
              </div>
              <div className="fl-ns pa3 w-60-ns">
                <div className="dtc v-mid f6 tl">
                  <h4 className="f6">Znalost jazyka MQL pro obchodní platformu MT4</h4>
                  <h4 className="f6">Řidičský průkaz skupiny A, B</h4>
                </div>
              </div>
            </div>
            <h2 className="f4 fw6 pa3 w-100">Záliby</h2>
            <div className="mw9 center ph3-ns mb2">
              <div className="fl pa3 w-100">
                <p className="tl">Sport, informační technologie, cestování, četba, divadlo, finance, hudba.</p>
              </div>
            </div> 
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;