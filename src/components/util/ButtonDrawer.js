import React from 'react';

const ButtonDrawer = (cardTitle ) => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="btn flex mx-1/2  mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white">Cart</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-80 w-32 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>{cardTitle.title}</a></li>
                        <li><a>{cardTitle.category}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ButtonDrawer;