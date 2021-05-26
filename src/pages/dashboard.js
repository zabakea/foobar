
import React, { useEffect } from 'react';
const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard';
    });
    return (
        <div>
            <h1>This is dashboard</h1>
            <p>This is a graph</p>
        </div>
    );
};
export default Dashboard;