
import './header.css';

function Header() {
  return (
    <div>
      <header>
        <nav className='navbar navbar-default'>
          <div className='text-right bb-grey py-5 font-300'>
            <div className='container text-black small-font'>
              <div className='px-5 d-inline'>
                <div className='text-black d-inline-block'>
                  <div>
                    <div className='custom pt-5'>
                      <ul className='d-flex list-unstyled mb-0'>
                        <li>
                          <img src={require('./../../assets/images/header/laptop.png')} />
                          <a>Skip to main content</a>
                        </li>
                        <li><a><img src={require('./../../assets/images/header/resizer-icon.png')} />&nbsp;+A</a>&nbsp;<a>A</a>&nbsp;<a>-A</a></li>
                        <li>
                          <a><img src={require('./../../assets/images/header/text.png')} />Screen Reader</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div>
                    <form name="lang" method="post" action="https://www.bhashini.gov.in/en/">
                      <select>
                        <option>English</option>
                        <option>অসমীয়া</option>
                        <option>বাংলা</option>
                        <option>ગુજરાતી</option>
                        <option>हिन्दी</option>
                        <option>ಕನ್ನಡ</option>
                        <option>മലയാളം</option>
                        <option>मराठी</option>
                        <option>ଓଡ଼ିଆ</option>
                        <option>ਪੰਜਾਬੀ</option>
                        <option>தமிழ்</option>
                        <option>తెలుగు</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div>
            <div>
              <div>
                <div>

                  <div>
                    <div><img src={require('../../assets/images/header/gov-logo-1.png')} />

                    </div>
                  </div>
                  <div>
                    <div><img src={require('../../assets/images/header/English.svg')} />

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </nav>
      </header>
    </div>
  );
}

export default Header;
