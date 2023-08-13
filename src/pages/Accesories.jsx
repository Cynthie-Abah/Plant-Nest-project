import { Item } from "../components/accesories/item";
import { SideBar } from "../components/accesories/sidebar";
import { TopBar } from "../components/accesories/topbar";
import { useParams } from "react-router";
import { Pagination } from "../hooks/title";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "../components/sharedComponents/BreadCrumb";
export const Accesories = () => {
  const params = useParams().page;
  const { items, pages } = Pagination([1, 2, 3, 4, 5, 6, 7, 8], params, 2);
  return (
    <>
      <main className="main-content">
        <Breadcrumb pageName={"Accesories"} pagePreview={"Accesories"} />

        <div className="shop-area section-space-y-axis-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 order-2 pt-5 pt-lg-0">
                <SideBar />
              </div>
              <div className="col-xl-9 col-lg-8 order-1">
                <TopBar />
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="grid-view"
                    role="tabpanel"
                    aria-labelledby="grid-view-tab"
                  >
                    <div className="product-grid-view row g-y-20">
                      <Item
                        img={
                          "https://images.pexels.com/photos/4505144/pexels-photo-4505144.jpeg"
                        }
                        name={"Flower Plants"}
                        price="20.00"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pagination-area">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      {pages.map((page, index) => (
                        <li
                          className={`page-item ${
                            (page == params || (!params && page == 1)) &&
                            "active"
                          }`}
                          key={index}
                        >
                          <NavLink
                            className="page-link"
                            to={`/accesories/${page}`}
                          >
                            {page}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
