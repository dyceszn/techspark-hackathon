import React from "react";
// import List from "../../components/Seller/List";
import SideNav from "../../components/Seller/SideNav";
// import SellerButton from "../../components/Seller/SellerButton";
// import SellerTag from "../../components/Seller/SellerTag";
// import StatusBox from "../../components/Seller/StatusBox";
// import SellerHeader from "../../components/Seller/SellerHeader";
// import SideBar from "../../components/Seller/SideBar";
// import ListItem from "../../components/Seller/ListItem";

const Dashboard = () => {
  return (
    <div>
      {/* <SellerButton text="block" />
      <SellerTag sellerType="Student Business" />
      <StatusBox status="Inventory" statusValue="12345520" />
      <SellerHeader
        username="John Doe"
        image="https://via.placeholder.com/150"
        sellerType="Student Business"
      />
      <SideBar heading="Selected">
        <div>bbb</div>
      </SideBar> */}
      <SideNav />
      {/* <List /> */}
    </div>
  );
};

export default Dashboard;
