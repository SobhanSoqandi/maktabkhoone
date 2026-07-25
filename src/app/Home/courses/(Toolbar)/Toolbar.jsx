import React from 'react'
import Filters from '../(Filters)/Filters'

function Toolbar() {
    return (
        <div className="hidden lg:block p-4 bg-white border border-gray-200 rounded-xl">
            <Filters />
        </div>
    )
}

export default Toolbar