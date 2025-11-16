
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors block mb-2">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-footer text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="font-bold text-lg mb-4 text-zess-orange">Find Your Tyre</h4>
            <FooterLink href="#">Motorcycle Tyres</FooterLink>
            <FooterLink href="#">3-Wheeler Tyres</FooterLink>
            <FooterLink href="#">EV Tyres</FooterLink>
            <FooterLink href="#">LCV Tyres</FooterLink>
            <FooterLink href="#">Farm/Tiller Tyres</FooterLink>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-zess-orange">Support</h4>
            <FooterLink href="#">Dealer Locator</FooterLink>
            <FooterLink href="#">Tyre Care & Safety</FooterLink>
            <FooterLink href="#">Fitment & Rotation</FooterLink>
            <FooterLink href="#">Warranty & Claims</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-zess-orange">Business</h4>
            <FooterLink href="#">Fleet Operators</FooterLink>
            <FooterLink href="#">Distributors & Export</FooterLink>
            <FooterLink href="#">OEM Partnerships</FooterLink>
            <FooterLink href="#">Enquire Now</FooterLink>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-zess-orange">Company</h4>
            <FooterLink href="#">About ZESS</FooterLink>
            <FooterLink href="#">Our Process</FooterLink>
            <FooterLink href="#">Leadership</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="mx-auto max-w-[1600px] px-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ZESS TYRE. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
