import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className="text-uppercase">бүтээгдэхүүн</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">бүтээгдэхүүний нэр</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">үнэ</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">нөөц</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">устгах</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">нийт</p>
                </div>
          </div>   
        </div>
    )
}
