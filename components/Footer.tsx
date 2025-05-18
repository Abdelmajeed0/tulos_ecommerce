import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12">
          <div>
            <Logo>Tulos</Logo>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
