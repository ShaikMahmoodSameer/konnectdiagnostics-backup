import React, { useState } from 'react'
import ActiveOrders from './ActiveOrders';
import PastOrders from './PastOrders';
import CancelledOrders from './CancelledOrders';

function MyBookings() {
    const [activeTab, setActiveTab] = useState(0);
    const DashboardTabs = [ 'Active Orders', 'Past Orders', 'Cancelled Orders'];
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    return (
        <div className='container p-5'>
            <h1>Orders History</h1>
            <div>
                <div>
                    <div className="tab-title-wrapper">
                        {DashboardTabs.map((tab, index) => (
                            <div key={index} className={`tab-title2 ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div className="tab-content">
                        {DashboardTabs[activeTab] === DashboardTabs[0] && <ActiveOrders /> }
                        {DashboardTabs[activeTab] === DashboardTabs[1] && <PastOrders /> }
                        {DashboardTabs[activeTab] === DashboardTabs[2] && <CancelledOrders /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings