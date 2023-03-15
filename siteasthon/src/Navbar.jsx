import React from 'react';
import { Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  menuClasses,
  MenuItemStyles} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0A2647',
      color: 'white',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

const imgStyle = {
    height : 40 
  };

const sidebarStyle = 
{
    height: "100vh",
    border: "none"
}
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Navbar = () =>
{
  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '15px',
      fontWeight: 400,
    },
    icon: {
      color: themes["dark"].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes["dark"].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes["dark"].menu.menuContent, 1)
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes["dark"].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes["dark"].menu.hover.backgroundColor,  1),
        color: themes["dark"].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
    const {collapseSidebar} = useProSidebar();
    return (
        <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
            <Sidebar 
              style={sidebarStyle}
              rootStyles={{color: themes["dark"].sidebar.color,}}
              backgroundColor={hexToRgba(themes["dark"].sidebar.backgroundColor,  1)}
              >
                <Menu  menuItemStyles={menuItemStyles}>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                        collapseSidebar();
                        }}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                    </MenuItem>
                    <MenuItem active={"true"} icon={<PeopleOutlinedIcon />} className="navmenu" component={<Link to="/Mapa" />}>Mapa</MenuItem>
                    <SubMenu icon={<ContactsOutlinedIcon />} label="Registrar Slin">
                        <MenuItem icon={<ReceiptOutlinedIcon />} component={<Link to="/RegistroSlin" />}>Leitor de QR </MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />} component={<Link to="/RegistroSlinManual" />}> Cadastro manual </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="/Pontos" />}> Pontos </MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/Manutencao" />}> Manutenção</MenuItem>
                </Menu>
             
            </Sidebar>
        </div>
    );
}

export default Navbar;