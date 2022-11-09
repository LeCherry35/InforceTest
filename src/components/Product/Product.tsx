import React, { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { showWIndowActionCreator } from '../../store/reducers/modalWindowReducer'
import Comments from '../Comments/Comments'
import ModalWindow from '../ModalWindow/ModalWindow'
import s from './Product.module.sass'

const Product:FC = () => {
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const {id} = useParams<{id: string}>()
  const idNum = id ? + id : 0
  const {hidden} = useTypedSelector(state => state.modalWindow)
  const {products} = useTypedSelector(state => state.products)
  const [product, setProduct] = useState(products?.find(p => p.id === idNum))
  
  useEffect(()=>{

  },[hidden])
  return (
    <div className={s.container}>
      {hidden 
        ? <></>
        :<ModalWindow id={idNum} input={true} product={product}></ModalWindow>}
      <span className={s.name} >{product?.name}</span>
      
      {product?.imageUrl && <><span>Image URL</span>
      <p className={s.field}>{product?.imageUrl}</p></>}
      {product?.count && <><span>Count</span>
      <p className={s.field}>{product?.count}</p></>}
      {<><span>Width</span>
      <p className={s.field}>{product?.size?.width}</p></>}
      {<><span>Height</span>
      <p className={s.field}>{product?.size?.height}</p></>}
      {product?.weight && <><span>Weight</span>
      <p className={s.input}>{product?.weight}</p></>}
      <button className={s.button}onClick={(e)=>dispatch(showWIndowActionCreator())} >Edit</button>
      <button className={s.button}onClick={(e)=>navigate('/productList')} >See all</button>
      <Comments id={idNum}></Comments>

    </div>
  )
}

export default Product