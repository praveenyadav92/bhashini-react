
import './header.css';
import laptopicon from './../../assets/images/header/laptop.png'
import resizericon from './../../assets/images/header/resizer-icon.png'
import texticon from './../../assets/images/header/text.png'
import govlog from './../../assets/images/header/gov-logo-1.png'
import english from './../../assets/images/header/English.svg'
import { SITE_LANGUAGE,SITE_MENU } from '../../utils/Constants';

function Header() {
  return (
    <header>
    <nav class="navbar navbar-default">
       <div class="text-right bb-gray py-5 font-300">
          <div class="container text-black small-font">
             <div class="px-5 d-inline">
                <div class="text-black d-inline-block">
                   <div id="pages-toplinks">
                      <div class="custom pt-5">
                         <ul class="d-flex list-unstyled mb-0">
                            <li class="hidden-xs"><img src={laptopicon} alt="skip to main content" class="pr-5 valign-unset hidden-xs ls-is-cached lazyloaded lazycached" /><a href="#main-content">Skip to main content</a></li>
                            <li class="font-resizer"><a id="large" href="#"><img src={resizericon} alt="font-resizer" class="pr-5 pl-15 valign-unset hidden-xs ls-is-cached lazyloaded lazycached"/>&nbsp;+A</a>&nbsp;<a id="medium" class="selected" href="#">A</a>&nbsp;<a id="small" href="#">-A</a></li>
                            <li><a href="screen-reader"><img src={texticon} alt="Screen Reader" class="pr-10 pl-15 valign-unset hidden-xs ls-is-cached lazyloaded lazycached"/>Screen Reader</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
             <div class="px-5 d-inline-block">
                <div id="wpu-pages-menu">
                   <div class="mod-languages">
                      <form name="lang" method="post" action="https://bhashini.gov.in/en/">
                         <select class="inputbox advancedSelect" onchange="document.location.replace(this.value);">
                            {
                              SITE_LANGUAGE.map(item=><option dir="ltr" value="/en/" selected="selected">
                              {item}
                           </option>)
                            }
                         </select>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="container text-black py-10 logo-cover">
          <div class="row">
             <div class="col-sm-7 px-xs-0">
                <div class="d-flex">
                   <div class="custom">
                      <div class="hidden-xs-down"><img src={govlog} class="ls-is-cached lazyloaded lazycached"/></div>
                      <div class="show-xs-down mobile-logos">
                         <div class="d-flex"></div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="col-sm-5 text-right pl-30 hidden-xs-down">
                <div class="custom bhashini-logo hidden-xs-down">
                   <div><img src={english} style={{"height":"70px", "margin-top":"-10px", "margin-bottom":"-10px"}} /></div>
                </div>
             </div>
          </div>
          <div class="navbar-header bg-gray-shade-1">
          </div>
       </div>
       <div class="navbar-collapse main-menu px-xs-0 js-mainMenuOpen" id="bs-example-navbar-collapse-1">
          <div class="container text-black relative">
             <div id="wpu-pages-menu">
                <ul class="nav menu nav nav-pills mod-list">
                  {
                    SITE_MENU.map(menu=> <li class="item-124 default current active"><a href="/en/">{menu}</a></li>)
                  }
                </ul>
             </div>
             <a href="javascript:;" class="hamburger-menu js-menu">
             <span class="hamburger-item"></span>
             <span class="hamburger-item"></span>
             <span class="hamburger-item"></span>
             </a>
             <div class="pull-right pl-30 pages-bhashadaan-btn">
                <div class="custom">
                   <div class="mt-10"><a class="bh-btn-primary text-white font-600" href="https://bhashini.gov.in/bhashadaan" target="_blank" rel="noopener noreferrer"> Join Bhasha<span class="yellow">&nbsp;Daan</span> </a></div>
                </div>
             </div>
          </div>
       </div>
    </nav>
 </header>
  );
}

export default Header;
