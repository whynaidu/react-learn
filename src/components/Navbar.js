import React, { Component } from "react";
import Logo from "../assets/SidebarLogo.png";
import { Sidebar } from "react-pro-sidebar";
import { ProSidebarProvider, Menu, MenuItem} from "react-pro-sidebar";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SettingsIcon from "@mui/icons-material/Settings";



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: true,
    };
    }

    render() {
      
    return (
      <div>
        <div style={{ display: "flex", height: "100%" }}>
          <ProSidebarProvider>
            <Sidebar>
              <div style={{ textAlign: "center" }}>
                <img src={Logo} alt="logo" />
              </div>

              <Menu
                menuItemStyles={{
                  button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                      return {
                        color: disabled ? "#f5d9ff" : "#d359ff",
                        backgroundColor: active ? "#eecef9" : undefined,
                      };
                  },
                }}
              >
                <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
                <MenuItem icon={<GroupAddIcon />}>User Upload </MenuItem>
                <MenuItem icon={<CreateNewFolderIcon />}>Category</MenuItem>
                <MenuItem icon={<SettingsIcon />}> Bar charts</MenuItem>
              </Menu>
              <button className="sb-button">
                Collapse
              </button>
            </Sidebar>
          </ProSidebarProvider>
        </div>
      </div>
    );
  }
}
