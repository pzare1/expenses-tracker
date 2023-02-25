import React, { useRef } from 'react'

function Form({income,setIncome}) {

  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);
  
  const subForm = e => {
    e.preventDefault();
    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1]-1, d[2]);
    setIncome([...income, {
      "desc":desc.current.value,
      "price":price.current.value,
      "date":newD.getTime()
    }])
      desc.current.value="";
      price.current.value=null;
      date.current.value=null;
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 mx-auto">
          <form className="form-group" onSubmit={subForm}>
            <input
              placeholder="Description"
              ref={desc}
              type="text"
              name="desc"
              id="desc"
              className="form-control m-4"
            />
            <input
              placeholder="Cost"
              ref={price}
              name="price"
              id="price"
              className="form-control m-4"
            />
            <input
              placeholder="date"
              ref={date}
              type="date"
              name="date"
              id="date"
              className="form-control m-4"
            />
            <button className='btn btn-primary d-flex mx-auto'>
                add new
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form