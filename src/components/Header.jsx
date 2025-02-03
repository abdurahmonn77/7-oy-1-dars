import React, { useState } from "react";
import {
  BellOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Badge, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const handleLogOutBtn = () => {
    setBtnLoading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      setBtnLoading(false);
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="w-full bg-[#001429] px-7 py-[26px] flex items-center justify-between z-50">
      <button className="text-white cursor-pointer">
        <MenuFoldOutlined className="text-[25px]" />
      </button>
      <div className="flex gap-5">
        <Button icon={<InfoCircleOutlined />} className="flex items-center">
          <span className="text-[16px]">Sinxronlash</span>
        </Button>
        <Badge count={9} className="z-10">
          <Button icon={<BellOutlined />} />
        </Badge>
        <button
          onClick={() => setIsLogOut(true)}
          className="!text-white flex gap-2 items-center cursor-pointer"
        >
          <span className="text-[18px]">Chiqish</span>
          <LogoutOutlined />
        </button>
        <Modal
          open={isLogOut}
          title="Chiqish"
          onCancel={() => setIsLogOut(false)}
          onOk={handleLogOutBtn}
          okButtonProps={{ loading: btnLoading }}
        >
          <p className="text-[16px]">Siz aniq chiqishni xohlaysizmi?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
