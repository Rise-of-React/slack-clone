import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "./SidebarOption";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Rise of React</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Hyojin An
                    </h3>
                </div>
                <CreateIcon />
                <SideBarOption Icon={} title="Threads" />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
                <SideBarOption Icon={} />
            </div>
        </div>
    )
}

export default Sidebar
