import Header from "./Header";
import MobileMenuButton from "../../utils/MobileMenuButton";
import MobileMenu from "../../components/menus/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import Nav from "./nav/Nav";
import { useAllConfigQuery, useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { data: quickMenu } = useQuickMenuUserQuery();
  const { data: allConfig, isLoading: configLoading } = useAllConfigQuery();


  return (
    <div className="lg:h-[184px] bg-[#27272A]">
      <Header allConfig={allConfig} configLoading={configLoading}/>

      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* =====>>Quick Menu Only For Mobile Device <<===== */}
      {currentPath === "/" && (
        <div className="w-[94%] h-[100%] mx-auto mt-[20px] p-4 lg:hidden border-[3px] border-black">
          <div className="grid grid-cols-4 gap-5">
            {quickMenu?.data?.map((menu, i) => (
              <Link key={i} to={`/terms/${menu?.slug}`}  >
                <MobileMenuButton key={i}>{menu.name}</MobileMenuButton>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="hidden lg:block">
        <Nav allConfig={allConfig}/>
      </div>
    </div>
  );
};

export default Navbar;
