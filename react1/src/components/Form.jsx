import React, {useState} from 'react'

const Form = ({products}) => {

  // console.log(products);

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [allProducts, setAllProducts] =useState(products);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newProduct = {id: Date.now(), image, title, description}
    setAllProducts([...allProducts , newProduct])
  }

  return (
    <div className='container'>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="row align-items-end">
            <div className="col">
                <label htmlFor="" className='form-label'>Image</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='form-control' />
            </div>
            <div className="col">
            <label htmlFor="" className='form-label'>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
            </div>
            <div className="col">
            <label htmlFor="" className='form-label'>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">Add to menu</button>
            </div>
        </div>
      </form>
    </div>
  )
}


export default Form;
