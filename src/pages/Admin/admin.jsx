import React from 'react';

const Admin = () => {
    return (
        <section id="admin">
            <div className="container">
                <div className="admin">
                <div className="admin_input">
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='model' />
                    <input type="text" placeholder='price' />
                    <button>create</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;