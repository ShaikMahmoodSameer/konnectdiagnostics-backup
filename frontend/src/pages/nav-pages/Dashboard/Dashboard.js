import React, { useState } from 'react';
import { styled } from "styled-components";
import MyBookings from './MyBookings';
import MySampleTracing from './MySampleTracing';
import MyReports from './MyReports';
import { Link } from 'react-router-dom';

function Dashboard({ userId, userName, auth, profileData }) {
    const [activeTab, setActiveTab] = useState(0);

    const DashboardTabs = ['My Bookings', 'My Sample Tracing', 'My Reports'];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <Wrapper>
            <div className='container p-5'>
                <div>
                    <div className='d-flex'>
                        <div className="tab-title-wrapper-main">
                            <Link to="/profile">
                                <div className="d-flex my-2">
                                    <div className="profilePhoto">
                                        <img src="/images/k.png" alt="siteLogo" />
                                    </div>
                                    <div className="ps-2">
                                        <h4 className="text-start fw-bold mb-0">{userName}</h4>
                                        <small className="text-start">{profileData.email}</small>
                                    </div>
                                </div>
                            </Link>
                            {DashboardTabs.map((tab, index) => (
                                <div key={index} className={`tab-title py-3 px-3 ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                                    <img
                                        src={`/images/icons/Dashboard/${tab.trim().replace(/\s+/g, '').toLowerCase()}.svg`}
                                        className='icon me-2'
                                        alt=""
                                    />
                                    {tab}
                                </div>
                            ))}

                        </div>
                        <div className="tab-content">
                            {DashboardTabs[activeTab] === DashboardTabs[0] && <MyBookings />}
                            {DashboardTabs[activeTab] === DashboardTabs[1] && <MySampleTracing />}
                            {DashboardTabs[activeTab] === DashboardTabs[2] && <MyReports />}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.section`
.tab-title-wrapper{
    display: flex;
}
.tab-title-wrapper-main .tab-title{
  font-size: 16px;
  cursor: pointer;
  color: rgba(0,0,0,.4);
  transition: all ease-in-out .2s;
  .icon{
    width: 20px;
    fill: ${({ theme }) => theme.colors.primary};
  }
}
.tab-title-wrapper-main .active{
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    border-bottom: 2px solid #42b3f4;
    color: white;
}
.tab-title2{
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin: 5px;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
}
.tab-title-wrapper .active{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
}
.tab-content{
    border-radius: 8px;
    background: white;
}
.profilePhoto{
    width: 50px;
    height: 50px;
    padding: 8px;
    border: 2px solid white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    img{
        width: 100%;
    }
}
`;
