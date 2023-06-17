import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="justify-content-center flex-grow-1 pt-1 pb-1 pe-3">
            <Nav.Link
              className="customLink"
              target="_blank"
              href="https://github.com/fewyearsago">
              <svg
                enableBackground="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                width="30px">
                <g id="OUTLINE_copy_2">
                  <g>
                    <path
                      fill="white"
                      d="M16,0C7.163,0,0,7.163,0,16c0,8.837,7.164,16,16,16c8.837,0,16-7.163,16-16C32,7.163,24.837,0,16,0z M18.067,18.96    c0.333,0.289,0.592,1.308,0.592,1.776v4.144h-2.365h-2.368c0,0,0.007-1.405,0-2.368c-3.24,0.697-4.144-1.776-4.144-1.776    C9.19,19.552,8.598,18.96,8.598,18.96c-1.184-0.703,0-0.592,0-0.592c1.184,0,1.776,1.184,1.776,1.184    c1.039,1.764,2.888,1.48,3.552,1.184c0-0.592,0.259-1.487,0.592-1.776c-2.586-0.291-4.738-1.776-4.738-4.736    c0-2.96,0.594-3.552,1.186-4.144c-0.12-0.292-0.615-1.37,0.018-2.96c0,0,1.163,0,2.347,1.776c0.587-0.587,2.368-0.592,2.961-0.592    c0.591,0,2.373,0.005,2.959,0.592c1.184-1.776,2.35-1.776,2.35-1.776c0.633,1.59,0.138,2.668,0.018,2.96    c0.592,0.592,1.184,1.184,1.184,4.144C22.804,17.184,20.654,18.669,18.067,18.96z"
                    />
                  </g>
                </g>
              </svg>
            </Nav.Link>
            <Nav.Link
              className="customLink"
              target="_blank"
              href="https://t.me/zaurbkv">
              <svg
                width="30px"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                <title />
                <path
                  fill="white"
                  d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
