import React from 'react';

const Filter = () => {
    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Recherche" id='search-input'/>
                    <input type="submit" value='Go!' />
                </form>
                <p>
                <i class="fas fa-filter"></i>
                </p>
                <div className="sort-price">
                    <div className="btn-sort" id='ascending-price'>
                        ➚  
                    </div>
                    <div className="btn-sort" id='decreasing-price'>
                        ➘
                    </div>
                </div>
            </div>
            <div className="result">
                
            </div>
        </div>
        
    );
};

export default Filter;