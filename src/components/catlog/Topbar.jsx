

export const TopBar = () => {
    return(
        <div className="product-topbar">
        <ul>
            <li className="page-count">
                <span>12</span> Product Found of <span>30</span>
            </li>
            {/* <li className="product-view-wrap">
                <ul className="nav" role="tablist">
                    <li className="grid-view" role="presentation">
                        <a className="active" id="grid-view-tab" data-bs-toggle="tab" href="#grid-view" role="tab" aria-selected="true">
                            <i className="fa fa-th"></i>
                        </a>
                    </li>
                    <li className="list-view" role="presentation">
                        <a id="list-view-tab" data-bs-toggle="tab" href="#list-view" role="tab" aria-selected="true">
                            <i className="fa fa-th-list"></i>
                        </a>
                    </li>
                </ul>
            </li> */}
            <li className="short">
                <select className="nice-select">
                    <option value="1">Sort by Default</option>
                    <option value="2">Sort by Popularity</option>
                    <option value="3">Sort by Rated</option>
                    <option value="4">Sort by Latest</option>
                    <option value="5">Sort by High Price</option>
                    <option value="6">Sort by Low Price</option>
                </select>
            </li>
        </ul>
        </div>
    )
}

