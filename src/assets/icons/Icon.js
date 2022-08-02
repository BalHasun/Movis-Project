
import React from 'react'
import CollapseIcon from "./CollapseIcon"
import DashboardIcon from "./DashboardIcon"
import DotIcon from "./DotIcon"
import EditIcon from "./EditIcon"
import EllipsisVerticalIcon from "./EllipsisVerticalIcon"
import LineIcon from "./LineIcon"
import LogOutIcon from "./LogOutIcon"
import MembersIcon from "./MembersIcon"
import MessageIcon from "./MessageIcon"
import ModulesIcon from "./ModulesIcon"
import NotificationIcon from "./NotificationIcon"
import PencilIcon from "./PencilIcon"
import PlusIcon from "./PlusIcon"
import ProjectsIcon from "./ProjectsIcon"
import ReportsIcon from "./ReportsIcon"
import SearchIcon from "./SearchIcon"
import SettingsIcon from "./SettingsIcon"
import SortIcon from "./SortIcon"
import SprintIcon from "./SprintIcon"

const icons = {
  CollapseIcon: <CollapseIcon />,
  DashboardIcon: <DashboardIcon />,
  DotIcon: <DotIcon />,
  EditIcon: <EditIcon />,
  EllipsisVerticalIcon: <EllipsisVerticalIcon />,
  LineIcon: <LineIcon />,
  LogOutIcon: <LogOutIcon />,
  MembersIcon: <MembersIcon />,
  MessageIcon: <MessageIcon />,
  ModulesIcon: <ModulesIcon />,
  NotificationIcon: <NotificationIcon />,
  PencilIcon: <PencilIcon />,
  PlusIcon: <PlusIcon />,
  ProjectsIcon: <ProjectsIcon />,
  ReportsIcon: <ReportsIcon />,
  SearchIcon: <SearchIcon />,
  SettingsIcon: <SettingsIcon />,
  SortIcon: <SortIcon />,
  SprintIcon: <SprintIcon />,
}

const Icon = (props) => {

  return (
    <>
        {icons[props.icon] }
    </>
  )
}

export default Icon
