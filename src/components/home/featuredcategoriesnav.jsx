export const FeaturedCategoriesNav = ({name,index})=>{
    
    return(
        <li className="nav-item" role="presentation">
            <a className={`${index==0 && "active"}`} id="featured-tab" data-bs-toggle="tab" href={`#${name.replace(" ","").toLowerCase()}`} role="tab" aria-controls="featured" aria-selected="true">
                {name}
            </a>
        </li>
    )
}